import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export interface Booking {
  _id?: string;
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  programme: string;
  date: string;
  time: string;
  message?: string;
  createdAt?: string;
}

interface BookingState {
  bookings: Booking[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  status: 'idle',
  error: null,
};

const API = import.meta.env.VITE_API_URL;

// 📦 Create a new booking - FIXED VERSION
export const createBooking = createAsyncThunk<
  Booking,
  Omit<Booking, 'id' | '_id' | 'createdAt'>,
  { state: RootState }
>(
  'booking/create',
  async (formData, { rejectWithValue }) => {
    try {
      // Ensure cookies are sent with the request
      const res = await axios.post(`${API}/booking`, formData, {
        withCredentials: true,
      });
      
      const data = res.data.booking || res.data;

      return {
        ...data,
        id: data._id || data.id,
      };
    } catch (error: any) {
      console.error('Booking creation error:', error.response?.data);
      return rejectWithValue(
        error.response?.data?.message || 
        error.response?.data?.error || 
        'Booking creation failed'
      );
    }
  }
);

// 📋 Fetch all bookings
export const fetchBookings = createAsyncThunk<Booking[], void, { state: RootState }>(
  'booking/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/booking/my-bookings`, {
        withCredentials: true,
      });

      // Handle different response formats for robustness
      const bookingsData = res.data.bookings || res.data;

      if (!Array.isArray(bookingsData)) {
        return rejectWithValue('Invalid response format from server');
      }

      const transformed = bookingsData.map((item: any) => ({
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        phone: item.phone,
        programme: item.programme,
        date: item.date,
        time: item.time,
        message: item.message,
        createdAt: item.createdAt,
      }));
      
      return transformed;
      
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 
        error.response?.data?.error || 
        'Failed to fetch bookings'
      );
    }
  }
);

// ❌ Delete a booking
export const deleteBooking = createAsyncThunk<
  string,
  string,
  { state: RootState }
>(
  'booking/delete',
  async (bookingId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/booking/${bookingId}`);
      return bookingId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Booking deletion failed');
    }
  }
);

// 🧩 Slice
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // Add a reducer to clear errors
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // createBooking
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action: PayloadAction<Booking>) => {
        state.status = 'succeeded';
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })

      // fetchBookings
      .addCase(fetchBookings.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.status = 'succeeded';
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })

      // deleteBooking
      .addCase(deleteBooking.fulfilled, (state, action: PayloadAction<string>) => {
        state.bookings = state.bookings.filter((b) => b.id !== action.payload);
      });
  },
});

export const { clearError } = bookingSlice.actions;
export default bookingSlice.reducer;