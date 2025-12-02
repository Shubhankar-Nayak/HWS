import { motion, Variants } from "framer-motion";
import PCSParadigm from "@/components/about/PCSparadigm";
import ContentSection from "@/components/about/Content";
import AGEModel from "@/components/about/AGEModel";
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
    <div className="min-h-screen w-full pt-20 md:pt-24 overflow-hidden -mt-14">
      {/* Hero Section */}
      <LandingComponent image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" title="About HWS" subtitle="Precision Care, Personal Transformation, Lasting Wellbeing"/>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-0"
      >
        <ContentSection {...aboutSectionsData[0]} />
        <AGEModel />
        <PCSParadigm />
        <ContentSection {...aboutSectionsData[1]} />
        <ContentSection {...aboutSectionsData[2]} />
        <ContentSection {...aboutSectionsData[3]} />
      </motion.div>
    </div>
  );
};

export default About;