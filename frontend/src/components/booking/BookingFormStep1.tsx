import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface Step1Props {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onUpdate: (data: Partial<Step1Props['formData']>) => void;
  onNext: () => void;
}

const BookingFormStep1 = ({ formData, onUpdate, onNext }: Step1Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Only require firstName, email, and phone - lastName is optional
    if (formData.firstName && formData.email && formData.phone) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Personal Information</h3>
        <p className="text-muted-foreground">
          Enter your personal details to continue with your booking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            required
            value={formData.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            placeholder="Enter your first name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            placeholder="Enter your last name (optional)"
          />
          <p className="text-xs text-muted-foreground">Optional</p>
        </div>
      </div>

      {/* Email Section - Always editable */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => onUpdate({ phone: e.target.value })}
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        // Only check firstName, email, and phone - lastName is optional
        disabled={!formData.firstName || !formData.email || !formData.phone}
      >
        Continue
      </Button>
    </form>
  );
};

export default BookingFormStep1;