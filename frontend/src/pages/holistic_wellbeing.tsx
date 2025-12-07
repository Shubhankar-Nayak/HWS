import {motion } from 'framer-motion'
import LandingComponent from '@/components/landingComponent'
import HoverExpandPanels from '@/components/HoveredPanels';


const panels = [
    {
      id: 1,
      title: "Physical Wellness and Self-Care",
      description:
        "Supporting the body’s natural strength through mindful movement, restorative practices, and intentional self-care. These programmes help clients build vitality, improve balance, and establish habits that promote long-term physical wellbeing.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Mental and Cognitive",
      description:
        "Enhancing clarity, focus, and cognitive resilience through practices designed to sharpen thought and strengthen the inner landscape. Techniques include structured reflection, attention training, and habits that encourage mental agility.",
      img: "https://images.unsplash.com/photo-1556229174-5fbf36c81f0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Emotional",
      description:
        "Fostering emotional intelligence and harmony by developing awareness, healthy expression, and meaningful regulation strategies. This work helps clients deepen their relationship with themselves and enhance emotional steadiness.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Social & Relationships ",
      description:
        "Strengthening personal and professional relationships through guided self-awareness, communication coaching, and relationship mapping. The aim is to support authentic connection, belonging, and mutual growth.",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Spiritual",
      description:
        "Nurturing a sense of purpose, alignment, and inner peace. Through reflective practice, meditative guidance, yoga, and explorations of meaning and values, clients cultivate presence and a deeper connection to themselves and the world around them.",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id:6,
      title: "Financial",
      description:"Promoting long-term stability and confidence through thoughtful financial habits that support security, freedom, and sustainable prosperity. The focus is on clarity, informed choices, and alignment between financial decisions and personal values.",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80"
    }
  ];

const panels2 = [
    {
      id: 1,
      title: "Emotional and Relational Mapping",
      description:
        "identifying patterns that influence connection, behaviour, and interpersonal awareness",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Vision and Goal Setting",
      description:
        "clarifying personal and professional intentions through guided dialogue",
      img: "https://images.unsplash.com/photo-1556229174-5fbf36c81f0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Curated Review Circle",
      description:
        "A collaborative review process to maintain alignment, ensure progress, and refine direction",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Signature Features",
      description:
        "the Art of Wellbeing Journal and access to luxury concierge support for seamless coordination",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Progress and Milestone Tracking",
      description:
        "monthly, quarterly, and annual reviews to evaluate growth and adjust goals",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
  ];


const holistic_wellbeing = () => {
  return (
    <motion.div>
        <LandingComponent image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" title="Holistic Wellbeing" subtitle='Holistic wellbeing at HWS is understood as an elevated and integrated model of health. Beyond the absence of illness, it reflects a state of balance and fulfilment shaped by the alignment of physical, mental, emotional, social, spiritual, and financial realms.' />
        <HoverExpandPanels panels={panels}/>

        <LandingComponent image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" title="Holistic Wellbeing Assessments" subtitle='Our holistic assessments provide a panoramic view of flourishing, resilience, meaning, and life satisfaction. Each assessment blends reflective conversation with structured tools to create a clear understanding of current strengths and opportunities for growth. ' />

        <HoverExpandPanels panels={panels2}/>

    </motion.div>
  )
}

export default holistic_wellbeing