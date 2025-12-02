import React, { useRef } from "react";
import { motion,Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import contentdata from "../data/levelofengagement";
import ContentSection from "../components/about/Content";
import LandingComponent from "../components/landingComponent";

// Animation variants for fade-up effect
const fadeUpVariants:Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

const RetreatsEscape: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariants}
      className="bg-[#f5f0e6] px-6 sm:px-12 py-16"
    >
      <motion.div
        className="bg-[#f5f0e6] border-4 border-[#3F2A1D] rounded-3xl shadow-2xl mx-auto max-w-5xl p-10 sm:p-14 flex flex-col items-center justify-center gap-8 text-center"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3F2A1D] leading-tight"
        >
          Retreats & Restorative Escapes
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-[#6B5B35] max fréquent-w-3xl leading-relaxed"
        >
          When appropriate, clients may also access our restorative retreats, held in exceptional settings and curated to offer deeper reflection, recovery, and renewal.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="text-lg px-10 py-6 bg-[#bfa176] hover:bg-[#d6cabe] text-[#3F2A1D] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/retreats-restorative">Learn About Our Retreats</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Levelofengagement: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col ">
      <LandingComponent
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Levels of Engagement"
        subtitle="For those who require flexibility in how they work with us, HWS offers three distinct ways to engage. Each reflects a different degree of depth and access, allowing our approach to adapt to your individual needs, lifestyle, and goals."
        description="Furthermore Immersive retreats extend our approach into private, restorative settings where therapeutic insight is combined with intentional practice. "
        contactbutton={true}
      />
        <ContentSection {...contentdata[0]}/>
        <RetreatsEscape />
        <ContentSection {...contentdata[1]}/>
        <ContentSection {...contentdata[2]}/>

    </div>
  );
};

export default Levelofengagement;
