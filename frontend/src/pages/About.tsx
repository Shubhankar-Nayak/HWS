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
    <div className="min-h-screen w-full md:pt-24 overflow-hidden mt-[49px] md:-mt-14">
      {/* Hero Section */}
      <LandingComponent image="https://images.unsplash.com/photo-1727774606654-dce1f8f8a0da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="About HWS" subtitle="Precision Care, Personal Transformation, Lasting Wellbeing"/>

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
        <PCSParadigm />
        <ContentSection {...aboutSectionsData[1]} />
        <ContentSection {...aboutSectionsData[2]} />
        <div className="flex flex-col items-center justify-center gap-3 w-full text-[#3F2A1D]
      bg-[#f5f0e6] p-12" style={{ fontFamily: "Playfair Display" }}>
        <p className="text-3xl font-bold pb-5">Our Commitment</p>
        <p className="text-xl">Every relationship at HWS is built on trust. We uphold the highest standards of confidentiality, integrity, and care, ensuring that each engagement is carried out with the respect and discretion our clients expect.understanding. </p>
        <p className="text-xl">Our commitment extends beyond treatment to continuity, follow-through, and sustained wellbeing. At HWS, transformation is understood as a partnership that evolves thoughtfully through every stage of life.</p>
      </div>
      </motion.div>
    </div>
  );
};

export default About;