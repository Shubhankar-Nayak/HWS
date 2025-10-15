import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';

interface Step3Props {
  selectedDate: Date | undefined;
  selectedTime: string;
  onDateSelect: (date: Date | undefined) => void;
  onTimeSelect: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

const BookingFormStep3 = ({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
  onNext,
  onBack,
}: Step3Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Select Date & Time</h3>
        <p className="text-muted-foreground">Choose your preferred session date and time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <h4 className="font-semibold mb-4">Choose Date</h4>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
            disabled={(date) => date < new Date()}
            className="rounded-md border shadow-soft"
          />
        </div>

        {/* Time Slots */}
        <div>
          <h4 className="font-semibold mb-4">Choose Time</h4>
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((time) => (
              <Card
                key={time}
                className={`p-4 cursor-pointer transition-smooth text-center ${
                  selectedTime === time
                    ? 'border-primary border-2 bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => onTimeSelect(time)}
              >
                <span className={selectedTime === time ? 'font-semibold text-primary' : ''}>
                  {time}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          type="button"
          onClick={onNext}
          disabled={!selectedDate || !selectedTime}
          className="flex-1"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BookingFormStep3;
