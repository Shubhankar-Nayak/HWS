import { motion, Variants } from "framer-motion";
import PCSParadigm from "@/components/about/PCSparadigm";
import ContentSection from "@/components/about/Content";
import AGEModel from "@/components/about/AGEModel";
import aboutSectionsData from "@/data/about";

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
      <motion.div
        className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
      >
        {/* Mountain Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            About HWS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-[#E8D7BA] max-w-3xl mx-auto"
          >
            Precision Care, Personal Transformation, Lasting Wellbeing
          </motion.p>
        </div>
      </motion.div>

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