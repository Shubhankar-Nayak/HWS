import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Users, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-wellness.jpg';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Mind & Body Balance',
      description: 'Harmonize your physical and mental well-being through our integrated approach.',
    },
    {
      icon: Sparkles,
      title: 'Personalized Journey',
      description: 'Tailored programmes designed to meet your unique wellness goals.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Learn from experienced practitioners dedicated to your transformation.',
    },
    {
      icon: Leaf,
      title: 'Natural Healing',
      description: 'Embrace holistic methods rooted in ancient wisdom and modern science.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Your Path to Complete{' '}
            <span className="text-primary">Well-Being</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover holistic programmes that nurture your mind, body, and soul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/booking">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to="/programmes">Explore Programmes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elevated transition-smooth gradient-card">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="gradient-hero rounded-3xl p-12 text-center shadow-elevated">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands who have discovered the power of holistic wellness
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/booking">Book a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
