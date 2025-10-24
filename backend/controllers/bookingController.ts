import { Request, Response } from 'express';
import { Booking } from '../models/Booking';
import { User } from '../models/User';
import mailchimp from '@mailchimp/mailchimp_marketing';
import md5 from 'md5';
import dotenv from 'dotenv';
dotenv.config();

export interface AuthenticatedRequest extends Request {
  user?: any; 
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

// Add a new booking
export const addBooking = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, programme, date, time, message } = req.body;

    console.log('Received booking request:', { firstName, email, programme, date, time });

    // Validation
    if (!firstName || !email || !phone || !programme || !date || !time) {
      return res.status(400).json({ 
        message: 'All required fields must be provided',
        missing: {
          firstName: !firstName,
          lastName: !lastName || '',
          email: !email,
          phone: !phone,
          programme: !programme,
          date: !date,
          time: !time
        }
      });
    }

    // Step 1: Check for existing booking with same email AND programme
    try {
      const existingBooking = await Booking.findOne({
        email: email.toLowerCase(),
        programme: programme
      });

      console.log('Duplicate check result:', existingBooking);

      if (existingBooking) {
        return res.status(400).json({ 
          message: `You have already booked the ${programme} programme. Please choose a different programme or contact us.` 
        });
      }
    } catch (findError: any) {
      console.error('Error checking for existing booking:', findError);
    }

    // Step 2: Save booking to DB
    const booking = await Booking.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      programme,
      date,
      time,
      message,
    });

    // console.log('Booking saved to DB:', booking._id);

    // Step 3: Add user to Mailchimp list
    const listId = process.env.MAILCHIMP_LIST_ID;
    if (!listId) {
      console.error('MAILCHIMP_LIST_ID is not defined');
    } else {
      try {
        const subscriberHash = md5(email.toLowerCase());

        // Add user to the list
        await mailchimp.lists.setListMember(listId, subscriberHash, {
          email_address: email,
          status_if_new: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        });

        // Add programme-based tag
        const tagsMap: Record<string, string> = {
          mindfulness: 'Mindfulness & Meditation',
          yoga: 'Yoga & Movement',
          nutrition: 'Nutrition & Wellness',
          breathwork: 'Breath & Energy Work',
          complete: 'Complete Wellness Package',
        };

        const tagName = tagsMap[programme] || 'General Clients';

        await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
          tags: [{ name: tagName, status: 'active' }],
        });

        console.log(`Added ${email} to Mailchimp under tag "${tagName}"`);
      } catch (mailchimpError: any) {
        console.error('Mailchimp error:', mailchimpError.response?.body || mailchimpError.message);
      }
    }

    res.status(201).json({
      message: 'Booking created successfully',
      booking: { ...booking.toObject(), id: booking._id },
    });

  } catch (err: any) {
    console.error('Booking creation error details:', {
      name: err.name,
      message: err.message,
      code: err.code,
      keyPattern: err.keyPattern,
      stack: err.stack
    });

    // Handle specific MongoDB errors
    if (err.code === 11000) {
      const duplicateField = Object.keys(err.keyPattern || {})[0];
      return res.status(400).json({ 
        message: `Booking already exists with this ${duplicateField}`,
        error: 'DUPLICATE_ENTRY'
      });
    }

    // Handle validation errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Invalid booking data',
        error: err.message
      });
    }

    // Generic server error
    res.status(500).json({ 
      message: 'Failed to create booking',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
};

// Get bookings by email
export const getBookingsByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    
    if (!email) {
      return res.status(400).json({ message: 'Email parameter is required' });
    }

    const bookings = await Booking.find({ email: email.toLowerCase() }).sort({ createdAt: -1 });
    
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this email' });
    }
    
    res.status(200).json({
      message: 'Bookings retrieved successfully',
      count: bookings.length,
      bookings
    });
  } catch (err: any) {
    console.error('Error fetching bookings by email:', err);
    res.status(500).json({ message: 'Error fetching bookings', error: err.message });
  }
};

// Get bookings for the authenticated user
export const getMyBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Get email from the authenticated user (from protect middleware)
    const userEmail = req.user?.email;
    
    console.log('🔍 getMyBookings: Looking for bookings for authenticated user:', userEmail);
    
    if (!userEmail) {
      return res.status(400).json({ message: 'User email not found in authentication' });
    }

    const bookings = await Booking.find({ email: userEmail.toLowerCase() })
                                 .sort({ createdAt: -1 });

    console.log('✅ getMyBookings: Found', bookings.length, 'bookings for', userEmail);

    res.status(200).json({
      message: 'Bookings retrieved successfully',
      count: bookings.length,
      bookings
    });
  } catch (err: any) {
    console.error('❌ getMyBookings error:', err);
    res.status(500).json({ message: 'Error fetching bookings', error: err.message });
  }
};

// Delete a booking and remove Mailchimp tag
export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Store booking info before deletion for Mailchimp operations
    const { email, programme, firstName, lastName } = booking;

    // Delete the booking from database
    await Booking.findByIdAndDelete(req.params.id);

    // Remove Mailchimp tag
    const listId = process.env.MAILCHIMP_LIST_ID;
    if (!listId) {
      console.error('MAILCHIMP_LIST_ID is not defined');
    } else {
      try {
        const subscriberHash = md5(email.toLowerCase());

        // Map programme to tag name (same as in addBooking)
        const tagsMap: Record<string, string> = {
          mindfulness: 'Mindfulness & Meditation',
          yoga: 'Yoga & Movement',
          nutrition: 'Nutrition & Wellness',
          breathwork: 'Breath & Energy Work',
          complete: 'Complete Wellness Package',
        };

        const tagName = tagsMap[programme] || 'General Clients';

        // Remove the programme-specific tag
        await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
          tags: [{ name: tagName, status: 'inactive' }],
        });

        console.log(`Removed tag "${tagName}" from ${email} in Mailchimp`);

        // Optional: Check if user has any other bookings
        // If no other bookings exist, you might want to unsubscribe or archive them
        const remainingBookings = await Booking.find({ email: email.toLowerCase() });
        
        if (remainingBookings.length === 0) {
          console.log(`No remaining bookings for ${email}. Consider updating Mailchimp status if needed.`);
          // Optional: Unsubscribe if no bookings remain
          // await mailchimp.lists.updateListMember(listId, subscriberHash, {
          //   status: 'unsubscribed'
          // });
        }

      } catch (mailchimpError: any) {
        console.error('Mailchimp tag removal error:', mailchimpError.response?.body || mailchimpError.message);
        // Don't fail the deletion if Mailchimp fails - just log it
      }
    }

    res.status(200).json({ 
      message: 'Booking deleted successfully',
      deletedBooking: {
        id: booking._id,
        programme: booking.programme,
        email: booking.email
      }
    });

  } catch (err: any) {
    console.error('Delete booking error:', err);
    res.status(500).json({ 
      message: 'Failed to delete booking', 
      error: err.message 
    });
  }
};