import { motion, Variants } from "framer-motion";
import PCSParadigm from "@/components/about/PCSparadigm";
import ContentSection from "@/components/about/Content";
import AGEModelNew from "@/components/about/AGEModelNew";
import aboutSectionsData from "@/data/about";
import LandingComponent from "@/components/landingComponent";

// Properly typed variants
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};



const About = () => {
  return (
    <div className="min-h-screen w-full md:pt-24 overflow-hidden md:-mt-16">
      {/* Hero Section */}
      <LandingComponent image="https://images.unsplash.com/photo-1727774606654-dce1f8f8a0da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="THE ART OF WELLBEING"
      titleSize="text-5xl md:text-6xl italic" />

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-0"
      >
        <ContentSection {...aboutSectionsData[0]} />
        <AGEModelNew />
        <PCSParadigm img = "https://images.unsplash.com/photo-1694758110913-29a08297fbb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        title = "The PCS Paradigm" description="The Personalised, Customised, Sustainable (PCS) Paradigm shapes every aspect of care at HWS. It ensures that each journey, from assessment through long-term support, is developed as a thoughtful and evolving partnership. It transforms care from isolated interventions into a continuous and adaptive relationship." features={[
    {
      title: "Mind & Body Balance",
      description:
        "Harmonize your physical and mental well-being through our integrated approach.",
    },
    {
      title: "Personalized Journey",
      description:
        "Tailored programmes designed to meet your unique wellness goals.",
    },
    {
      title: "Expert Guidance",
      description:
        "Learn from experienced practitioners dedicated to your transformation.",
    },
    
  ]} />
        <ContentSection {...aboutSectionsData[1]} />
        <ContentSection {...aboutSectionsData[2]} />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" flex items-center flex-col text-left py-10 md:py-16 lg:py-[100px] bg-white my-8 md:my-12 lg:my-16 px-5 md:px-12 lg:px-24"
          style={{fontFamily:"Josefin Sans"}}
        >
          <p className="text-2xl md:text-3xl font-bold pb-3 md:pb-5">Our Commitment</p>
          <p className=" max-w-3xl text-[#053d57] text-sm md:text-base mb-4 md:mb-5 ">
            We recognise that each client’s circumstances and priorities differ. Therefore, we adapt the timing, intensity, and modality of our interventions to ensure the most effective outcomes. This approach is particularly suited to individuals with demanding, high-performance lifestyles.
          </p>
          <p className=" max-w-3xl text-[#053d57] text-sm md:text-base ">
            Throughout each stage, the pathway remains deliberately adaptive, ensuring that every interaction is both thoughtfully planned and open to refinement. This flexibility sustains momentum and supports continued personal and professional growth.
          </p>
        </motion.div>
      </motion.div>

      
    </div>
  );
};

export default About;