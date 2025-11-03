import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const contents = [
  {
    header: "Private Wellbeing Programmes",
    para: "Our Private Wellbeing Programmes offer one-to-one sessions designed around the individual. These programmes are ideal for leaders, creatives, and professionals navigating high-performance environments who wish to focus on specific goals within any of our pillars. \nEach engagement begins with a confidential consultation, followed by tailored assessments and therapy sessions delivered in person or virtually. Programmes can range from focused short-term interventions to ongoing support for long-term wellbeing.",
  },
  {
    header: "Executive-Level Engagements",
    para: "Our Executive-Level Engagements are comprehensive wellbeing journeys integrating advanced assessments, multidisciplinary therapies, and continuous monitoring. \nClients receive a dedicated wellbeing advisor who coordinates their care, liaising with clinicians, therapists, and lifestyle experts to ensure coherence. This level is suited to those seeking measurable outcomes and long-term change.",
  },
  {
    header: "Concierge Wellbeing Service and Retreats",
    para: "Our Concierge Service is an invitation-only offering that provides seamless, on-call access to HWS specialists anywhere in the world. From private residence visits to international travel accompaniment, our concierge team ensures uninterrupted care with absolute discretion. \nTo learn more about which pathway best suits your needs, or to book a confidential consultation, please reach out to our team. Every HWS journey begins with a conversation.",
  },
];

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Define proper TypeScript interfaces for props
interface ValuesSectionProps {
  heading: string;
  para: string;
}

// Reversed Card
function ValuesSectionReverse({ heading, para }: ValuesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-row-reverse items-center overflow-hidden bg-[#E8D7BA]/30"
    >
      {/* Image anchored to the RIGHT now */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-y-0 right-0 w-full md:w-1/2"
      >
        <div
          className="h-full w-full bg-cover bg-center md:bg-left"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758599879693-9e06f55a4ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932')`,
          }}
        />
      </motion.div>

      {/* Text shifts to the LEFT */}
      <div className="relative z-10 w-full md:w-1/2 mr-auto bg-[#E8D7BA] p-8 md:p-16 lg:p-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-lg text-white"
        >
          <h2 className="text-3xl md:text-4xl text-[#3F2A1D] font-bold mb-6 font-serif tracking-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-[#8B6F47] leading-relaxed mb-4 whitespace-pre-line">
            {para}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Normal Card
function ValuesSection({ heading, para }: ValuesSectionProps) {
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
            {heading}
          </h2>
          <p className="text-sm md:text-base text-[#8B6F47] leading-relaxed mb-4 whitespace-pre-line">
            {para}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const Levelofengagement = () => {
  return (
    <div className="min-h-screen w-full pt-20 md:pt-24 px-4 md:px-0 overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Three Ways to Engage</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          For clients seeking flexibility in how they engage with us, HWS offers three distinct pathways. Each reflects a different level of intensity, access, and integration, ensuring that our approach adapts to every client's unique lifestyle and goals.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        <ValuesSection heading={contents[0].header} para={contents[0].para} />
        <ValuesSectionReverse heading={contents[1].header} para={contents[1].para} />
        <ValuesSection heading={contents[2].header} para={contents[2].para} />
      </div>
    </div>
  );
};

export default Levelofengagement;