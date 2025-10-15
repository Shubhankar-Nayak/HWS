import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Dumbbell, Salad, Waves, Smile } from 'lucide-react';

const Programmes = () => {
  const programmes = [
    {
      icon: Brain,
      title: 'Mindfulness & Meditation',
      duration: '8 weeks',
      description: 'Cultivate inner peace and mental clarity through guided meditation practices and mindfulness techniques.',
      benefits: ['Stress reduction', 'Improved focus', 'Emotional balance', 'Better sleep quality'],
    },
    {
      icon: Dumbbell,
      title: 'Yoga & Movement',
      duration: '12 weeks',
      description: 'Strengthen your body and calm your mind with yoga practices suited for all levels.',
      benefits: ['Increased flexibility', 'Core strength', 'Mind-body connection', 'Pain relief'],
    },
    {
      icon: Salad,
      title: 'Nutrition & Wellness',
      duration: '6 weeks',
      description: 'Transform your relationship with food through holistic nutrition guidance and personalized meal planning.',
      benefits: ['Sustainable eating habits', 'Energy boost', 'Weight management', 'Gut health'],
    },
    {
      icon: Waves,
      title: 'Breath & Energy Work',
      duration: '4 weeks',
      description: 'Harness the power of breathwork to release tension and activate your body\'s natural healing abilities.',
      benefits: ['Anxiety relief', 'Enhanced vitality', 'Emotional release', 'Immune support'],
    },
    {
      icon: Smile,
      title: 'Complete Wellness Package',
      duration: '16 weeks',
      description: 'Our comprehensive programme combining all aspects of holistic well-being for total transformation.',
      benefits: ['All-inclusive approach', 'Personal coaching', 'Community support', 'Lasting results'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Programmes</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the path that resonates with your wellness goals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {programmes.map((programme, index) => (
          <Card key={index} className="shadow-soft hover:shadow-elevated transition-smooth gradient-card">
            <CardHeader>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <programme.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{programme.title}</CardTitle>
              <CardDescription className="text-base">{programme.duration} programme</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{programme.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {programme.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link to="/booking">Book This Programme</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programmes;
