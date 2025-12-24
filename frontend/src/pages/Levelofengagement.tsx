

import React, { useRef } from "react";
import { motion,Variants } from "framer-motion";
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



const Levelofengagement: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col " style={{fontFamily:"Josefin Sans"}}>
      <LandingComponent
        image="https://images.unsplash.com/photo-1611420890968-c87853bfa973?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Levels of Engagement"
        contactbutton={true}
        textcolor="text-[#ebf0f2]"
      />

      <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className=" flex items-center flex-col text-left bg-[#176a79]/10 py-10 md:py-16 lg:py-[100px] px-5 md:px-12 lg:px-24 text-[#053d57]"
              >
                <p className=" max-w-3xl text-sm md:text-base mb-4 md:mb-5 ">
                  For those who require flexibility in how they work with us, HWS offers three distinct ways to engage. Each reflects a different degree of depth and access, allowing our approach to adapt to your individual needs, lifestyle, and goals.


                </p>
                <p className=" max-w-3xl text-sm md:text-base ">
                 Furthermore Immersive retreats extend our approach into private, restorative settings where therapeutic insight is combined with intentional practice.
                </p>
              </motion.div>

      
        <ContentSection {...contentdata[0]}/>
        
        <ContentSection {...contentdata[1]}/>
        <ContentSection {...contentdata[2]}/>
        <ContentSection {...contentdata[3]}/>

    </div>
  );
};

export default Levelofengagement;
