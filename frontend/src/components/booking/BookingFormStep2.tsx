import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Dumbbell, Salad, Waves, Smile } from 'lucide-react';

interface Step2Props {
  selectedProgramme: string;
  onSelect: (programme: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const programmes = [
  { id: 'mindfulness', name: 'Mindfulness & Meditation', icon: Brain },
  { id: 'yoga', name: 'Yoga & Movement', icon: Dumbbell },
  { id: 'nutrition', name: 'Nutrition & Wellness', icon: Salad },
  { id: 'breathwork', name: 'Breath & Energy Work', icon: Waves },
  { id: 'complete', name: 'Complete Wellness Package', icon: Smile },
];

const BookingFormStep2 = ({ selectedProgramme, onSelect, onNext, onBack }: Step2Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Select Programme</h3>
        <p className="text-muted-foreground">Choose the programme that best fits your wellness goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programmes.map((programme) => {
          const Icon = programme.icon;
          return (
            <Card
              key={programme.id}
              className={`p-6 cursor-pointer transition-smooth hover:shadow-elevated ${
                selectedProgramme === programme.id
                  ? 'border-primary border-2 bg-primary/5'
                  : 'border-border'
              }`}
              onClick={() => onSelect(programme.id)}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{programme.name}</h4>
                  {selectedProgramme === programme.id && (
                    <p className="text-sm text-primary">Selected</p>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          type="button"
          onClick={onNext}
          disabled={!selectedProgramme}
          className="flex-1"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BookingFormStep2;
