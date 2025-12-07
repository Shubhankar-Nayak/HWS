import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LandingComponent from "@/components/landingComponent";
import HoverExpandPanels from "@/components/HoveredPanels";

// Import wellness images
import img1 from "@/assets/landingbg1.jpg";
import img2 from "@/assets/landingbg1.jpg";
import img3 from "@/assets/landingbg1.jpg";
import img4 from "@/assets/landingbg1.jpg";
import img5 from "@/assets/landingbg1.jpg";

const panels = [
    {
      id: 1,
      title: "Private Consultation",
      description:
        "We begin with a confidential, in-depth discussion to understand your goals, needs, and context. This initial dialogue establishes the foundation for personalised care and helps us identify the most relevant areas of focus.",
      img: img1,
    },
    {
      id: 2,
      title: "Curated Assessments",
      description:
        "Drawing from our three wellbeing pillars, we select advanced diagnostics to build a comprehensive understanding of your psychological, physical, and emotional profile. These assessments allow us to identify key strengths, patterns, and areas for targeted support.",
      img: img2,
    },
    {
      id: 3,
      title: "Personalised Care Pathway",
      description:
        "We develop a structured roadmap that integrates the modalities, therapies, and experts most suited to your needs. Each component is chosen to foster meaningful, measurable progress and to create balanced and sustainable change over time.",
      img: img3,
    },
    {
      id: 4,
      title: "Targeted Intervention and Support",
      description:
        "Our multidisciplinary team delivers care with precision and empathy, coordinating expertise across clinicians, therapists, and specialists. This ensures that each intervention is coherent, aligned, and responsive to your evolving goals.",
      img: img4,
    },
    {
      id: 5,
      title: "Ongoing Review and Evolution",
      description:
        "We maintain regular follow-ups to refine, adjust, or deepen the programme as required. This ensures that your pathway remains aligned with shifting priorities, lifestyle demands, and personal growth.",
      img: img5,
    },
  ];


const CarePathway = () => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen" style={{fontFamily:"Playful Display"}}>
      <div className="">
        <LandingComponent image="https://images.unsplash.com/photo-1556046785-90b800412d80?auto=format&fit=crop&q=80&w=2000" title="Care Pathway" subtitle="The HWS client journey is structured as a progression from an initial conversation to a process of ongoing development.
        This journey is organised through a five-step pathway that places authentic engagement at its core."/>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center my-12 px-24"
        >
          <p className="text-[#3f2a1d] text-lg mb-5 ">
            We recognise that each client’s circumstances and priorities differ. Therefore, we adapt the timing, intensity, and modality of our interventions to ensure the most effective outcomes. This approach is particularly suited to individuals with demanding, high-performance lifestyles.
          </p>
          <p className="text-[#3f2a1d] text-lg  ">
            Throughout each stage, the pathway remains deliberately adaptive, ensuring that every interaction is both thoughtfully planned and open to refinement. This flexibility sustains momentum and supports continued personal and professional growth.
          </p>
        </motion.div>

        <HoverExpandPanels panels={panels} />

        {/* Footer */}
        <p className="mt-12 mx-auto max-w-md text-center text-lg text-[#3f2a1d]">
          At any point in this pathway, if new needs emerge or priorities shift, we adapt without delay, reshaping the plan to address those requirements effectively. Recognising that life rarely presents challenges in isolation, our approach remains responsive and comprehensive, designed to support the individual as a whole
        </p>
        <p className="mt-12 text-center text-xs text-[#6B5B35]/70">
          Secure • Private • Confirmation within 24 hours
        </p>
      </div>
    </div>
  );
};

export default CarePathway;
