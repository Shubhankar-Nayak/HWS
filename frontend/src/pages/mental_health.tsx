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
    img: "https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Neurodiversity Screening",
    description: "ADHD and Autism Spectrum assessments with tailored guidance.",
    img: "https://images.unsplash.com/photo-1744313001460-68c6f67625f0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Addiction and Dependence Readiness",
    description: "risk, resilience, and recovery planning",
    img: "https://images.unsplash.com/photo-1707340726386-611f5e9398f3?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Psychotherapy Mapping",
    description: "therapist fit, treatment selection, engagement readiness",
    img: "https://images.unsplash.com/photo-1494797262163-102fae527c62?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Stress and Resilience Profiling",
    description: "measurement of adaptive capacity and vulnerability patterns",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
  },
];

const MentalHealth = () => {
  return (
    <motion.div>
      <LandingComponent
        image="https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0?q=80&w=1170&auto=format&fit=crop"
        subtitle="Our programmes under this pillar support the assessment, treatment, and optimisation of psychological wellbeing through sustainable approaches. We work with depth and discretion, offering a structured yet flexible pathway that responds to each individual’s needs and circumstances."
        textcolor="text-[]"
      />

      <ContentSection
        image="https://images.unsplash.com/photo-1494797262163-102fae527c62?w=900&auto=format&fit=crop&q=60"
        title="Psychological Profiling & Psychometrics"
        content="We conduct detailed evaluations across cognitive, emotional, social, and behavioural domains to generate a clear understanding of strengths, challenges, and growth areas."
        button="Begin a Private Conversation"
        timelineItems={[
          "Cognitive and emotional mapping",
          "Personality and leadership profiling",
          "Resilience assessment",
          "Adaptive and protective factor analysis",
        ]}
        imageWidth="60%"
        textWidth="40%"
      />

      <ContentSection
        image="https://images.unsplash.com/photo-1707340726386-611f5e9398f3?q=80&w=1170&auto=format&fit=crop"
        title="Addiction and Recovery"
        content="We offer discreet and structured support for individuals navigating dependency or early recovery. Our approach focuses on understanding readiness, identifying triggers and resilience factors, and developing tailored recovery plans that align with personal and professional demands."
        button="Begin a Private Conversation"
        timelineItems={[
          "Screening and risk evaluation",
          "Readiness assessment",
          "Integrated recovery planning",
        ]}
        imageWidth="55%"
        textWidth="45%"
      />

      <ContentSection
        image="https://images.unsplash.com/photo-1744313001460-68c6f67625f0?q=80&w=1170&auto=format&fit=crop"
        title="Neurodiversity"
        content="We provide sensitive assessments and tailored support for individuals with ADHD or Autism Spectrum presentations. Our programmes help improve self-understanding, strengthen executive functioning, and enhance day-to-day performance."
        button="Begin a Private Conversation"
        timelineItems={[
          "ADHD and Autism Spectrum assessments",
          "Functional coaching",
          "Recommendations for support and adaptation",
        ]}
        reverse={true}
        imageWidth="50%"
        textWidth="50%"
      />

      

      <LandingComponent
        image="https://images.unsplash.com/photo-1671043126373-fd96bd6bf964?q=80&w=1169&auto=format&fit=crop"
        title="Mental Health Assessments"
        subtitle="Our assessment process forms the foundation of personalised planning. These evaluations provide clarity, direction, and insight, ensuring that each recommendation is aligned with the client’s goals and context."
        textcolor="text-[]"
      />

      <HoverExpandPanels panels={panels} />

      <ContentSection
        image="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=735&auto=format&fit=crop"
        title="Areas We Support"
        content="Our programmes and assessments cover a wide range of presentations, including:"
        button="Begin a Private Conversation"
        timelineItems={[
          "Depression and low mood",
          "Low self-esteem",
          "Anxiety and generalised anxiety",
          "Excessive worry",
          "PTSD",
          "OCD",
          "Phobias",
          "Panic",
          "Gambling-related concerns",
          "Health anxiety",
          "Emetophobia",
          "And other related challenges",
        ]}
        imageWidth="50%"
        textWidth="50%"
      />
    </motion.div>
  );
};

export default MentalHealth;
