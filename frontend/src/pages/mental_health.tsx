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
      img: "https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Neurodiversity Screening",
      description:
        "ADHD and Autism Spectrum assessments with tailored guidance.",
      img: "https://images.unsplash.com/photo-1744313001460-68c6f67625f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Addiction and Dependence Readiness",
      description:
        "risk, resilience, and recovery planning",
      img: "https://images.unsplash.com/photo-1707340726386-611f5e9398f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Psychotherapy Mapping",
      description:
        "therapist fit, treatment selection, engagement readiness",
      img: "https://images.unsplash.com/photo-1494797262163-102fae527c62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBzeWNob2xvZ3l8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
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
        image="https://images.unsplash.com/photo-1653289755901-313cae66a49a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Mental Health"
        subtitle="Our programmes under this pillar support the assessment, treatment, and optimisation of psychological wellbeing through sustainable approaches. We work with depth and discretion, offering a structured yet flexible pathway that responds to each individual’s needs and circumstances."
      />
      <ContentSection
        image="https://images.unsplash.com/photo-1707340726386-611f5e9398f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Addiction and Recovery"
        content="We offer discreet and structured support for individuals navigating dependency or early recovery. Our approach focuses on understanding readiness, identifying triggers and resilience factors, and developing tailored recovery plans that align with personal and professional demands."
        button="Begin a Private Conversation"
        timelineItems={["Screening and risk evaluation","Readiness assessment","Integrated recovery planning"]}
      />
      <ContentSection
        image="https://images.unsplash.com/photo-1744313001460-68c6f67625f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Neurodiversity"
        content="We provide sensitive assessments and tailored support for individuals with ADHD or Autism Spectrum presentations. Our programmes help improve self-understanding, strengthen executive functioning, and enhance day-to-day performance."
        button="Begin a Private Conversation"
        timelineItems={["ADHD and Autism Spectrum assessments", "Functional coaching", "Recommendations for support and adaptation"]}
        reverse={true}
      />
      <ContentSection
        image="https://images.unsplash.com/photo-1494797262163-102fae527c62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBzeWNob2xvZ3l8ZW58MHx8MHx8fDA%3D"
        title="Psychological Profiling & Psychometrics"
        content="We conduct detailed evaluations across cognitive, emotional, social, and behavioural domains to generate a clear understanding of strengths, challenges, and growth areas."
        button="Begin a Private Conversation"
        timelineItems={["Cognitive and emotional mapping", "Personality and leadership profiling", "Resilience assessment", "Adaptive and protective factor analysis"]}
        
      />
      <LandingComponent
        image="https://images.unsplash.com/photo-1671043126373-fd96bd6bf964?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Mental Health Assessments "
        subtitle="Our assessment process forms the foundation of personalised planning. These evaluations provide clarity, direction, and insight, ensuring that each recommendation is aligned with the client’s goals and context."
      />
      <HoverExpandPanels panels={panels} />
      <ContentSection
        image="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Areas We Support"
        content="Our programmes and assessments cover a wide range of presentations, including:"
        button="Begin a Private Conversation"
        timelineItems={["Depression and low mood",'Low self-esteem','Anxiety and generalised anxiety','Excessive worry','PTSD',"OCD","Phobias","Panic","Gambling-related concerns","Health anxiety","Emetophobia","And other related challenges"]}
      />
    </motion.div>
  );
};

export default mental_health;
