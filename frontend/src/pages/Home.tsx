import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, Leaf } from "lucide-react";
import yoga from "@/assets/landingbg1.jpg";
import { motion} from "framer-motion";
import heroImage1 from "@/assets/landingbg1.jpg";
import heroImage2 from "@/assets/landingbg2.jpg";
import { S } from "node_modules/framer-motion/dist/types.d-BJcRxCew";


const heroImages = [heroImage1, heroImage2];

function WhyChoose() {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "",
      description:
        "At Holistic Wellbeing Solutions, we understand wellbeing as an art. It is the conscious cultivation of mental wellness, physical vitality, and emotional balance, expressed in a way that supports a life of purpose and composure.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "",
      description:
        "Holistic wellbeing is the ultimate luxury. It is the refinement of body, mind, and spirit into an elegant state of harmony. By nurturing equanimity and purpose, it does not just extend life, it elevates it.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "",
      description:
        "Our approach recognises that true longevity is rooted in sustained wellbeing. By aligning psychological, physical, and emotional health, we help clients build the resilience and vitality required for a life of enduring performance.",
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3F2A1D] dark:text-foreground font-serif text-center lg:text-left mb-8">
              Our Philosophy:<br /> The Art of Wellbeing
            </h2>
          </div>
        </div>

        {/* Feature cards - responsive grid */}
        <div className="md:absolute  top-[230px] right-40  w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[150px] z-10" style={{fontFamily:"Playful Display"}}>
          {features.map((feature, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative w-[300px] bg-white dark:bg-white/80 p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8D5A3]/30 hover:border-[#C8A97E]/50 ">
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
 
const panels = [
  {
    id:1,
    title: "Mental Health",
    description:"We explore psychological, neurological, and behavioural patterns to create personalised pathways that protect, strengthen, and enhance mental resilience.",
    list:["Psychotherapy","Neurodiversity","Psychometric Evaluations","Addiction Support","Psychological Profiling and Mental Health Check Ups"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    link:"programmes/mental-health",
  },
  {
    id:2,
    title: "Wellness and Longevity",
    description:"We assess and support mental vitality and overall wellness, building integrated pathways that promote healthy ageing and long term performance.",
    list:["Mindfulness","Sleep and Recovery","Nutrition and Fitness"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    link:"programmes/wellness-longevity",
  },
  {
    id:3,
    title: "Holistic Wellbeing",
    description:"This pillar brings together a considered set of approaches that foster harmony across the key dimensions of wellbeing. By supporting alignment between the emotional, social, spiritual, and physical spheres of life, it helps individuals cultivate a sustained and deeper sense of fulfilment.",
    list:["Holistic Wellbeing Journey","Visioning and Goal Setting","Curated Review Circle","HWS Signature Features","Retreat Experiences in serene and restorative settings around the world"],
    img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    link:"programmes/holistic-wellbeing",
  }
]

const HoverExpandPanels: React.FC<{
  panels: {
    id: number;
    title: string;
    description: string;
    list: string[];
    img: string;
    link?: string;
  }[];}> = ({ panels }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();
  const total = panels.length;
  const defaultW = 100 / total;         // width when no hover
  const expandedW = 70;                 // width for hovered panel
  const remainingW = (100 - expandedW) / (total - 1); // remaining sections

  return (
    <div className="w-full h-[500px] flex overflow-hidden">
      {panels.map((panel, index) => {
        const isHovered = hovered === index;

        return (
          <div
            key={panel.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="
              h-full transition-all duration-500 ease-in-out relative
              border-r last:border-r-0 border-[#c4b08f]
            "
            style={{
              width:
                hovered === null
                  ? `${defaultW}%`
                  : isHovered
                  ? `${expandedW}%`
                  : `${remainingW}%`,
              backgroundImage: `url(${panel.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* CONTENT */}
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-white">

              {/* TITLE */}
              <h2
                className={`text-xl font-semibold transition-opacity duration-300
                  ${isHovered ? "opacity-100" : "opacity-90"}
                `}
              >
                {panel.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                className={`
                  mt-4 text-sm leading-relaxed transition-all duration-500
                  ${isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
                `}
              >
                {panel.description}
              </p>

              {/* FOCUS AREAS LIST */}
              <div
                className={`
                  mt-6 transition-all duration-500 text-left
                  ${isHovered ? "opacity-100 max-h-64" : "opacity-0 max-h-0"}
                `}
                style={{ width: "80%" }}
              >
                {isHovered && (
                  <>
                    <h3 className="text-md font-semibold mb-2 text-[#f0e6d2]">
                      Focus Areas
                    </h3>

                    <ul className="space-y-1 text-sm text-[#f4f4f4]">
                      {panel.list.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>

                    {/* EXPLORE MORE BUTTON */}
                    <button
                    onClick={() => navigate(`/${panel.link}`)}
                      className="
                        mt-4 px-4 py-2 rounded-md border border-white 
                        hover:bg-white hover:text-black transition-all duration-300
                      "
                    >
                      Explore More
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};



const Pillars = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center  bg-[#faf7f2]">
      <p className="font-bold w-full text-[#3F2A1D] text-5xl text-center py-10"  style={{ fontFamily: "Playfair Display" }}>​The Three Pillars of HWS</p>
      <p className="px-20 w-full text-center text-xl text-[#3F2A1D] pb-10 ">Our work rests on three interconnected pillars. Each pillar brings together advanced assessments, proven therapeutic approaches, and tailored interventions. These are woven into the HWS Care Pathway, ensuring a seamless and adaptive journey for you.</p>
      <HoverExpandPanels panels={panels} />

    </div>
  )
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
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
            HOLISTIC WELLBEING SOLUTIONS 
          </h1>
          <p className="text-xl md:text-2xl italic text-[#8B6F47] mb-8 max-w-2xl mx-auto">
            The Art of Wellbeing 
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


      <WhyChoose />

      <div className="flex flex-col items-center justify-center gap-10 w-full text-[#3F2A1D]
      bg-[#faf7f2] p-12" style={{ fontFamily: "Playfair Display" }}>
        <p className="text-3xl font-bold w-full text-center px-10">Our practice is guided by our PCS Paradigm and the AGE Model. Together they support every stage of care, shaping an experience that is personalised, coherent, and designed to evolve over time.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-[#C8A97E] hover:bg-[#bfa176]"
            >
              <Link to="/about">Learn More About Our Principles and Approach</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/70 hover:bg-white"
            >
              <Link to="/levels-of-engagement">Discover Your Engagement Path</Link>
            </Button>
          </div>
      </div>

      <Pillars />

      <div className="flex flex-col items-center justify-center gap-3 w-full text-[#3F2A1D]
      bg-[#faf7f2] p-12" style={{ fontFamily: "Playfair Display" }}>
        <p className="text-3xl font-bold pb-5">Values & Principals</p>
        <p className="text-xl">Confidentiality, scientific integrity, and discretion are central to our ethos. We believe luxury lies in precision and excellence, where every detail supports your wellbeing journey. Every engagement is guided by empathy and expertise, combining rigorous methods with genuine human understanding. </p>
        <p className="text-xl">Our commitment is to create an environment where clients feel safe, understood, and deeply cared for, allowing transformation to unfold with confidence.</p>
      </div>

    </div>
  );
};

export default Home;
