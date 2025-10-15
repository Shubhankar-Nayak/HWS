import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Crown, Star, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExclusiveAccess = () => {
  const benefits = [
    'Priority booking for all programmes',
    'Access to exclusive workshops and masterclasses',
    'One-on-one sessions with wellness experts',
    'Private community forum',
    'Monthly wellness care packages',
    'Early access to new programmes',
    'Complimentary wellness assessments',
    'Personalized wellness roadmap',
  ];

  const membershipTiers = [
    {
      icon: Star,
      name: 'Essential',
      price: '$49/month',
      features: ['2 group sessions per month', 'Community access', 'Resource library', 'Monthly newsletter'],
    },
    {
      icon: Crown,
      name: 'Premium',
      price: '$99/month',
      features: ['Unlimited group sessions', '1 private session per month', 'Priority support', 'All Essential benefits'],
      highlighted: true,
    },
    {
      icon: Gift,
      name: 'Elite',
      price: '$199/month',
      features: ['All Premium benefits', '4 private sessions per month', 'Personalized programme', 'VIP event access'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Exclusive Membership</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Unlock premium wellness experiences and transform your journey with exclusive access
        </p>
      </div>

      {/* Membership Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
        {membershipTiers.map((tier, index) => (
          <Card
            key={index}
            className={`shadow-soft hover:shadow-elevated transition-smooth ${
              tier.highlighted ? 'border-primary border-2 gradient-card' : 'gradient-card'
            }`}
          >
            <CardHeader>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <tier.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-center">{tier.name}</CardTitle>
              <CardDescription className="text-center">
                <span className="text-3xl font-bold text-foreground">{tier.price}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={tier.highlighted ? 'default' : 'outline'}>
                <Link to="/booking">Choose Plan</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="gradient-hero rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-elevated">
        <h2 className="text-3xl font-bold mb-8 text-center">Member Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveAccess;
