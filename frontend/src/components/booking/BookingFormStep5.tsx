import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { CheckCircle } from 'lucide-react';

interface Step5Props {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    programme: string;
    date: Date | undefined;
    time: string;
    additionalInfo: string;
  };
  onBack: () => void;
  onSubmit: () => void;
}

const programmeNames: Record<string, string> = {
  mindfulness: 'Mindfulness & Meditation',
  yoga: 'Yoga & Movement',
  nutrition: 'Nutrition & Wellness',
  breathwork: 'Breath & Energy Work',
  complete: 'Complete Wellness Package',
};

const BookingFormStep5 = ({ formData, onBack, onSubmit }: Step5Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Review Your Booking</h3>
        <p className="text-muted-foreground">Please review your information before confirming</p>
      </div>

      <Card className="shadow-soft gradient-card">
        <CardContent className="pt-6 space-y-6">
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-1">Personal Details</h4>
            <p className="text-lg">
              {formData.firstName} {formData.lastName}
            </p>
            <p className="text-muted-foreground">{formData.email}</p>
            <p className="text-muted-foreground">{formData.phone}</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-sm text-muted-foreground mb-1">Programme</h4>
            <p className="text-lg">{programmeNames[formData.programme]}</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-sm text-muted-foreground mb-1">Date & Time</h4>
            <p className="text-lg">
              {formData.date && format(formData.date, 'MMMM dd, yyyy')}
            </p>
            <p className="text-muted-foreground">{formData.time}</p>
          </div>

          {formData.additionalInfo && (
            <div className="border-t pt-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                Additional Information
              </h4>
              <p className="text-muted-foreground">{formData.additionalInfo}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button type="button" onClick={onSubmit} className="flex-1">
          <CheckCircle className="mr-2 h-5 w-5" />
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingFormStep5;
