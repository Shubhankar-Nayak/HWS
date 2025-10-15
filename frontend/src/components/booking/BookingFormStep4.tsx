import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Step4Props {
  additionalInfo: string;
  onUpdate: (info: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const BookingFormStep4 = ({ additionalInfo, onUpdate, onNext, onBack }: Step4Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Additional Information</h3>
        <p className="text-muted-foreground">
          Tell us anything else that might help us prepare for your session
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Your Message (Optional)</Label>
        <Textarea
          id="additionalInfo"
          rows={8}
          value={additionalInfo}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder="Share any health concerns, goals, or special requirements..."
          className="resize-none"
        />
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button type="button" onClick={onNext} className="flex-1">
          Review Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingFormStep4;
