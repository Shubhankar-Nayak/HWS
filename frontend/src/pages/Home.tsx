import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import ContentSection from "../components/about/Content";

const heroImages = [
  "https://images.unsplash.com/photo-1760523374204-11d15f40c384?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540277584993-3d4c0c3a51b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const panels = [
  {
    id: 1,
    title: "Mental Health",
    description:
      "We explore psychological, neurological, and behavioural patterns to create personalised pathways that protect, strengthen, and enhance mental resilience.",
    list: [
      "Psychotherapy",
      "Neurodiversity",
      "Psychometric Evaluations",
      "Addiction Support",
      "Psychological Profiling and Mental Health Check Ups",
    ],
    img: "https://images.unsplash.com/photo-1710322144652-bcea73280334?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "programmes/mental-health",
  },
  {
    id: 2,
    title: "Wellness and Longevity",
    description:
      "We assess and support mental vitality and overall wellness, building integrated pathways that promote healthy ageing and long term performance.",
    list: ["Mindfulness", "Sleep and Recovery", "Nutrition and Fitness"],
    img: "https://images.unsplash.com/photo-1649810617979-16001a60c89c?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "programmes/wellness-longevity",
  },
  {
    id: 3,
    title: "Holistic Wellbeing",
    description:
      "This pillar brings together a considered set of approaches that foster harmony across the key dimensions of wellbeing. By supporting alignment between the emotional, social, spiritual, and physical spheres of life, it helps individuals cultivate a sustained and deeper sense of fulfilment.",
    list: [
      "Holistic Wellbeing Journey",
      "Visioning and Goal Setting",
      "Curated Review Circle",
      "HWS Signature Features",
      "Retreat Experiences in serene and restorative settings around the world",
    ],
    img: "https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "programmes/holistic-wellbeing",
  },
];

const HoverExpandPanels: React.FC<{
  panels: {
    id: number;
    title: string;
    description: string;
    list?: string[];
    img: string;
    link?: string;
  }[];
}> = ({ panels }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const navigate = useNavigate();

  // 🔥 Enforce exactly 3 items, just like your working 3-panel version
  const visiblePanels = panels.slice(0, 3);

  const total = visiblePanels.length; // always 3
  const defaultW = 100 / total; // ~33.33%
  const expandedW = 70; // hovered panel width
  const remainingW = (100 - expandedW) / (total - 1); // ~15% each

  return (
    <div className="w-full">
      {/* 🖥️ DESKTOP VERSION */}
      <div className="hidden lg:flex w-full h-[500px] overflow-hidden">
        {visiblePanels.map((panel, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="
                h-full transition-all duration-500 ease-in-out relative
                
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
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-white">
                {/* TITLE */}
                <h2
                  className={`text-2xl font-semibold transition-opacity duration-300 
                    ${isHovered ? "opacity-100" : "opacity-90"}`}
                >
                  {panel.title}
                </h2>

                {/* DESCRIPTION */}
                <p
                  className={`
                    mt-4 text-md leading-relaxed transition-all duration-500
                    ${isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
                  `}
                >
                  {panel.description}
                </p>

                {/* LIST + BUTTON (only if hovered) */}
                <div
                  className={`
                    mt-6 transition-all duration-500 text-left
                    ${isHovered ? "opacity-100 max-h-64" : "opacity-0 max-h-0"}
                  `}
                  style={{ width: "80%" }}
                >
                  {isHovered && panel.list && (
                    <>
                      <h3 className="text-md font-semibold mb-2 text-[#f0e6d2]">
                        Focus Areas
                      </h3>

                      <ul className="space-y-1 text-sm text-[#f4f4f4]">
                        {panel.list.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>

                      {panel.link && (
                        <button
                          onClick={() => navigate(`/${panel.link}`)}
                          className="
                            mt-4 px-4 py-2 rounded-md border border-white 
                            hover:bg-white hover:text-black transition-all duration-300
                          "
                        >
                          Explore More
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📱 MOBILE ACCORDION VERSION */}
      <div className="lg:hidden flex flex-col w-full">
        {visiblePanels.map((panel, index) => {
          const isOpen = openMobile === index;

          return (
            <div key={panel.id} className="w-full ">
              <button
                onClick={() => setOpenMobile(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 bg-[#f5f0e6]"
              >
                <h2 className="text-base md:text-lg font-semibold text-[#3F2A1D]">
                  {panel.title}
                </h2>

                <ChevronDown
                  className={`
                    w-5 h-5 text-[#C8A97E]
                    transition-transform duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 
                ${isOpen ? "max-h-[650px]" : "max-h-0"}`}
              >
                <div
                  className="w-full h-48 sm:h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${panel.img})` }}
                ></div>

                <div className="p-4 md:p-6 bg-white">
                  <p className="text-[#6B5B35] text-sm md:text-base leading-relaxed">
                    {panel.description}
                  </p>

                  {panel.list && (
                    <ul className="mt-3 space-y-1 text-sm md:text-base text-[#6B5B35]">
                      {panel.list.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  )}

                  {panel.link && (
                    <button
                      onClick={() => navigate(`/${panel.link}`)}
                      className="
                        mt-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-md border border-black 
                        hover:bg-black hover:text-white transition-all duration-300
                      "
                    >
                      Explore More
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Pillars = () => {
  return (
    <div className="w-full flex bg-[#176a79]/10 flex-col items-center justify-center ">
      <p
        className="font-bold max-w-4xl text-[#053d57] text-4xl text-center py-10"
        style={{ fontFamily: "Playfair Display" }}
      >
        ​The Three Pillars of HWS
      </p>
      <p className="px-5 md:px-10 lg:px-20 max-w-4xl text-left text-base text-[#053d57] pb-10 ">
        Our work rests on three interconnected pillars. Each pillar brings
        together advanced assessments, proven therapeutic approaches, and
        tailored interventions. These are woven into the HWS Care Pathway,
        ensuring a seamless and adaptive journey for you.
      </p>
      <HoverExpandPanels panels={panels} />
    </div>
  );
};

const Home = ({isProgrammesHover,setIsProgrammesHover}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="" style={{ fontFamily: "Josefin Sans" }}>
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
        {/* <div className="absolute inset-0 bg-[#227083]/50" /> */}

        {/* === Content === */}
        <div
          className="relative z-10 container mx-auto px-4 md:px-6 text-center"
          style={{ fontFamily: "Josefin Sans" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#27b7d1]">
            HOLISTIC WELLBEING SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl italic text-[#27b7d1] mb-6 md:mb-8 max-w-2xl mx-auto">
            The Art of Wellbeing
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
            <Button
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 bg-[#053d57]/70 hover:bg-[#053d57]"
              onClick={() => (setIsProgrammesHover(!isProgrammesHover))}
            >
              Explore Programmes
            </Button>
          </div>
        </div>
      </section>

      <ContentSection
        title="Our Philosophy: The Art of Wellbeing"
        content="At Holistic Wellbeing Solutions, we understand wellbeing as an art. It is the conscious cultivation of mental wellness, physical vitality, and emotional balance, expressed in a way that supports a life of purpose and composure."
        additionalContent="Holistic wellbeing is the ultimate luxury. It is the refinement of body, mind, and spirit into an elegant state of harmony. By nurturing equanimity and purpose, it does not just extend life, it elevates it.?"
        finalContent="Our approach recognises that true longevity is rooted in sustained wellbeing. By aligning psychological, physical, and emotional health, we help clients build the resilience and vitality required for a life of enduring performance."
        image="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageWidth="55%"
        textWidth="45%"
        imagePositionX="100%"
        descriptionSize="text-base"
        headingSize="text-3xl "
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center flex-col bg-transparent text-left py-10 md:py-[100px] my-8 md:my-16 px-5 md:px-12 lg:px-24"
      >
        <p className=" max-w-3xl text-[#053d57] text-sm md:text-base mb-4 md:mb-5 ">
          Our practice is guided by our PCS Paradigm and the AGE Model. Together
          they support every stage of care, shaping an experience that is
          personalised, coherent, and designed to evolve over time.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="text-base md:px-8 bg-[#053d57]/70 hover:bg-[#053d57]"
          >
            <Link to="/about">
              Learn More About Our Principles and Approach
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg md:px-8 bg-white/70 hover:bg-white"
          >
            <Link to="/levels-of-engagement">
              Discover Your Engagement Path
            </Link>
          </Button>
        </div>
      </motion.div>

      <Pillars />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center flex-col bg-transparent text-left py-10 md:py-[100px] my-8 md:my-16 px-5 md:px-12 lg:px-24"
      >
        <p className="text-xl md:text-2xl pb-3 md:pb-5">Values & Principals</p>
        <p className=" max-w-3xl text-[#053d57] text-sm md:text-base mb-4 md:mb-5 ">
          Confidentiality, scientific integrity, and discretion are central to
          our ethos. We believe luxury lies in precision and excellence, where
          every detail supports your wellbeing journey. Every engagement is
          guided by empathy and expertise, combining rigorous methods with
          genuine human understanding.
        </p>
        <p className="max-w-3xl text-[#053d57] text-sm md:text-base mb-4 md:mb-5 ">
          Our commitment is to create an environment where clients feel safe,
          understood, and deeply cared for, allowing transformation to unfold
          with confidence.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
