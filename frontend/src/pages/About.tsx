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
    <div className="min-h-screen w-full md:pt-24 overflow-hidden mt-[49px] md:-mt-14">
      {/* Hero Section */}
      <LandingComponent image="https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="About HWS" subtitle="Precision Care, Personal Transformation, Lasting Wellbeing"/>

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