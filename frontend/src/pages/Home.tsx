import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Users, Leaf } from "lucide-react";
import FAQ from "./FAQ";
import yoga from "@/assets/landingbg1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";


import heroImage1 from "@/assets/landingbg1.jpg";
import heroImage2 from "@/assets/landingbg2.jpg";

const heroImages = [heroImage1, heroImage2];

function ProgrammesSection() {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mind & Body Balance",
      description:
        "Harmonize your physical and mental well-being through our integrated approach.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Personalized Journey",
      description:
        "Tailored programmes designed to meet your unique wellness goals.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guidance",
      description:
        "Learn from experienced practitioners dedicated to your transformation.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Natural Healing",
      description:
        "Embrace holistic methods rooted in ancient wisdom and modern science.",
    },
  ];
  return (
    <section className="flex flex-col h-full w-full items-center mb-12 md:mb-20">
      <div className="relative w-full ">
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="w-full lg:flex-1 lg:p-10 mb-8 lg:mb-0">
            <img src={yoga} alt="Yoga and wellness" className="w-full h-64 md:h-80 lg:h-auto object-cover r hidden md:flex" />
          </div>
          <div className="w-full lg:flex-1 lg:h-[400px] flex flex-col ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3F2A1D] dark:text-foreground font-serif text-center lg:text-left lg:pl-24 mb-8">
              Why Choose Us?
            </h2>
          </div>
        </div>

        {/* Feature cards - responsive grid */}
        <div className="md:absolute  top-[38%] right-10  w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 z-10" style={{fontFamily:"Playful Display"}}>
          {features.map((feature, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-white/80 p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8D5A3]/30 hover:border-[#C8A97E]/50 ">
                <h3 className="text-lg md:text-xl font-semibold text-[#3F2A1D] dark:text-foreground mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-[#6B5B35] dark:text-[#8B6F47] text-center leading-relaxed">
                  {feature.description}
                </p>
            </motion.div>))}
        </div>
      </div>
    </section>
  );
}


function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Image: slides up from -20% to 0% (centers with text)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#E8D7BA]/30"
    >
      {/* === Left: Parallax Image === */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-y-0 left-0 w-full md:w-1/2"
      >
        <div
          className="h-full w-full bg-cover bg-center md:bg-right"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758599879693-9e06f55a4ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932')`,
          }}
        />
      </motion.div>

      {/* === Right: Text with Fade‑In + Slide‑In === */}
      <div className="relative w-full md:w-1/2 ml-auto bg-[#E8D7BA] p-8 md:p-16 lg:p-20">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-lg text-white"
        >
          <h2 className="text-3xl md:text-4xl text-[#3F2A1D] font-bold mb-6 font-serif tracking-tight">
            Ready to Transform Your Life?
          </h2>
          <p className="text-sm md:text-base text-[#8B6F47] leading-relaxed mb-4">
            Join thousands who have discovered the power of holistic wellness
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 bg-[#C8A97E] hover:bg-[#bfa176] text-white font-medium shadow-md"
          >
            <Link to="/booking">Book a Session</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: Heart,
      title: "Mind & Body Balance",
      description:
        "Harmonize your physical and mental well-being through our integrated approach.",
    },
    {
      icon: Sparkles,
      title: "Personalized Journey",
      description:
        "Tailored programmes designed to meet your unique wellness goals.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Learn from experienced practitioners dedicated to your transformation.",
    },
    {
      icon: Leaf,
      title: "Natural Healing",
      description:
        "Embrace holistic methods rooted in ancient wisdom and modern science.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* === Sliding Background Images with Fade === */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        {/* === Persistent Teal Overlay (on top of all images) === */}
        <div className="absolute inset-0 bg-[#227083]/50" />

        {/* === Content === */}
        <div
          className="relative z-10 container mx-auto px-4 text-center"
          style={{ fontFamily: "Playfair Display" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#C8A97E]">
            Your Path to Complete <span className="">Well-Being</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8B6F47] mb-8 max-w-2xl mx-auto">
            Discover holistic programmes that nurture your mind, body, and soul
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-[#C8A97E] hover:bg-[#bfa176]"
            >
              <Link to="/booking">Start Your Journey</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/70 hover:bg-white"
            >
              <Link to="/programmes">Explore Programmes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <WhyChooseUs /> */}
      {/* Programmes Section */}
      <ProgrammesSection />

      {/* CTA Section */}
      <ValuesSection />
      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
