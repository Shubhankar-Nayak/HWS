import { motion } from "framer-motion";
import LandingComponent from "@/components/landingComponent";
import ContentSection from "@/components/ContentsectionWithTimeline";
import HoverExpandPanels from "@/components/HoveredPanels";


const panels = [
    {
      id: 1,
      title: "Psychological Profiling",
      description:
        "cognitive, emotional, social, and personality mapping using validated tools",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Neurodiversity Screening",
      description:
        "ADHD and Autism Spectrum assessments with tailored guidance.",
      img: "https://images.unsplash.com/photo-1556229174-5fbf36c81f0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Addiction and Dependence Readiness",
      description:
        "risk, resilience, and recovery planning",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Psychotherapy Mapping",
      description:
        "therapist fit, treatment selection, engagement readiness",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Stress and Resilience Profiling",
      description:
        " measurement of adaptive capacity and vulnerability patterns",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
  ];

const mental_health = () => {
  return (
    <motion.div>
      <LandingComponent
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Mental Health"
        subtitle="Our programmes under this pillar support the assessment, treatment, and optimisation of psychological wellbeing through sustainable approaches. We work with depth and discretion, offering a structured yet flexible pathway that responds to each individual’s needs and circumstances."
      />
      <ContentSection
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Addiction and Recovery"
        content="We offer discreet and structured support for individuals navigating dependency or early recovery. Our approach focuses on understanding readiness, identifying triggers and resilience factors, and developing tailored recovery plans that align with personal and professional demands."
        button="Begin a Private Conversation"
        timelineItems={["Screening and risk evaluation","Readiness assessment","Integrated recovery planning"]}
      />
      <ContentSection
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Neurodiversity"
        content="We provide sensitive assessments and tailored support for individuals with ADHD or Autism Spectrum presentations. Our programmes help improve self-understanding, strengthen executive functioning, and enhance day-to-day performance."
        button="Begin a Private Conversation"
        timelineItems={["ADHD and Autism Spectrum assessments", "Functional coaching", "Recommendations for support and adaptation"]}
        reverse={true}
      />
      <ContentSection
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Psychological Profiling & Psychometrics"
        content="We conduct detailed evaluations across cognitive, emotional, social, and behavioural domains to generate a clear understanding of strengths, challenges, and growth areas."
        button="Begin a Private Conversation"
        timelineItems={["Cognitive and emotional mapping", "Personality and leadership profiling", "Resilience assessment", "Adaptive and protective factor analysis"]}
        
      />
      <LandingComponent
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Mental Health Assessments "
        subtitle="Our assessment process forms the foundation of personalised planning. These evaluations provide clarity, direction, and insight, ensuring that each recommendation is aligned with the client’s goals and context."
      />
      <HoverExpandPanels panels={panels} />
      <ContentSection
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title="Areas We Support"
        content="Our programmes and assessments cover a wide range of presentations, including:"
        button="Begin a Private Conversation"
        timelineItems={["Depression and low mood",'Low self-esteem','Anxiety and generalised anxiety','Excessive worry','PTSD',"OCD","Phobias","Panic","Gambling-related concerns","Health anxiety","Emetophobia","And other related challenges"]}
      />
    </motion.div>
  );
};

export default mental_health;
