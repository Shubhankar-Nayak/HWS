import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import BookingFormStep1 from '@/components/booking/BookingFormStep1';
import BookingFormStep2 from '@/components/booking/BookingFormStep2';
import BookingFormStep3 from '@/components/booking/BookingFormStep3';
import BookingFormStep4 from '@/components/booking/BookingFormStep4';
import BookingFormStep5 from '@/components/booking/BookingFormStep5';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector'; 
import { createBooking } from '../store/slices/bookingSlice';

const Booking = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.booking);
  const { user, isAuthenticated, loading: authLoading } = useAppSelector((state) => state.auth);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programme: '',
    date: undefined as Date | undefined,
    time: '',
    additionalInfo: '',
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to book a session.',
        variant: 'destructive',
      });
      navigate('/login');
    }
  }, [isAuthenticated, authLoading, navigate, toast]);

  // Auto-populate user data when authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        email: user.email || '',
        firstName: user.name?.split(' ')[0] || '',
        lastName: user.name?.split(' ').slice(1).join(' ') || '',
      }));
    }
  }, [isAuthenticated, user]);

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    // Double-check authentication before submitting
    if (!isAuthenticated || !user) {
      toast({
        title: 'Authentication Error',
        description: 'Please log in again to continue.',
        variant: 'destructive',
      });
      navigate('/login');
      return;
    }

    try {
      const result = await dispatch(createBooking({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        programme: formData.programme,
        date: formData.date?.toISOString() || '',
        time: formData.time,
        message: formData.additionalInfo,
      })).unwrap();

      toast({
        title: 'Booking Confirmed! 🎉',
        description: 'We\'ll send a confirmation email shortly.',
      });

      setTimeout(() => navigate('/mybookings'), 2000);
    } catch (err: any) {
      // Check if it's an authentication error
      if (err?.includes('authenticated') || err?.includes('auth') || err?.includes('login')) {
        toast({
          title: 'Session Expired',
          description: 'Please log in again to continue.',
          variant: 'destructive',
        });
        navigate('/login');
      } else {
        toast({
          title: 'Booking Failed',
          description: err || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    }
  };

  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Programme' },
    { number: 3, title: 'Date & Time' },
    { number: 4, title: 'Additional Info' },
    { number: 5, title: 'Review' },
  ];

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold">Checking authentication...</h2>
        </div>
      </div>
    );
  }

  // Don't render the form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold">Redirecting to login...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Book Your Session</h1>
          <p className="text-muted-foreground">Complete the form to reserve your wellness journey</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                      currentStep >= step.number
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="text-xs mt-2 hidden sm:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 transition-smooth ${
                      currentStep > step.number ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-8 shadow-elevated gradient-card">
          {currentStep === 1 && (
            <BookingFormStep1
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 2 && (
            <BookingFormStep2
              selectedProgramme={formData.programme}
              onSelect={(programme) => updateFormData({ programme })}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}
          {currentStep === 3 && (
            <BookingFormStep3
              selectedDate={formData.date}
              selectedTime={formData.time}
              onDateSelect={(date) => updateFormData({ date })}
              onTimeSelect={(time) => updateFormData({ time })}
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 4 && (
            <BookingFormStep4
              additionalInfo={formData.additionalInfo}
              onUpdate={(additionalInfo) => updateFormData({ additionalInfo })}
              onNext={() => setCurrentStep(5)}
              onBack={() => setCurrentStep(3)}
            />
          )}
          {currentStep === 5 && (
            <BookingFormStep5
              formData={formData}
              onBack={() => setCurrentStep(4)}
              onSubmit={handleSubmit}
              isSubmitting={status === 'loading'}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default Booking;