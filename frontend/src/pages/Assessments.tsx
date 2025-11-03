import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/landingbg1.jpg";

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Define TypeScript interfaces
interface Point {
  bolds: string;
  para: string;
}

interface ProgrammeProps {
  index: number;
  image: string;
  title: string;
  description: string;
  points: Point[];
}

// Reversed Card
const CardComponentReverse = ({ index, image, title, description, points }: ProgrammeProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full h-full flex flex-col md:flex-row-reverse items-center bg-[#E8D7BA]/50 overflow-hidden"
      style={{ fontFamily: "Playful Display" }}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image */}
      <motion.div
        className="w-full md:w-auto flex-shrink-0 md:py-5 md:pr-5"
        variants={fadeUpVariant}
      >
        <img src={image} alt={title} className="w-full md:w-[690px] h-64 md:h-auto object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex flex-col justify-start p-6 md:p-10 w-full md:h-[450px]"
        variants={fadeUpVariant}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#3F2A1D] mb-2 md:mb-0">{title}</h2>
        <p className="text-[#3E2C1A] mb-4 text-lg md:text-xl">{description}</p>

        <ul className="list-disc list-inside text-[#3B2B1C] space-y-1 text-lg md:text-xl mb-4 md:mb-0">
          {points.map((point: Point, i: number) => (
            <li key={i} className="mb-2">
              <span className="font-semibold">{point.bolds}</span> - {point.para}
            </li>
          ))}
        </ul>

        {index === 1 && (
          <p className="text-[#3E2C1A] mb-4 text-lg md:text-xl">
            All results are integrated into a structured wellness report, serving as a measurable baseline for ongoing optimisation and performance tracking
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

// Normal Card
const CardComponent = ({ index, image, title, description, points }: ProgrammeProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full h-full flex flex-col md:flex-row items-center bg-transparent overflow-hidden"
      style={{ fontFamily: "Playful Display" }}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image */}
      <motion.div
        className="w-full md:w-auto flex-shrink-0 md:py-5 md:pl-5"
        variants={fadeUpVariant}
      >
        <img src={image} alt={title} className="w-full md:w-[690px] h-64 md:h-auto object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex flex-col justify-start p-6 md:p-10 w-full md:h-[470px]"
        variants={fadeUpVariant}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#3F2A1D] mb-2 md:mb-0">{title}</h2>
        <p className="text-[#3E2C1A] mb-4 text-lg md:text-xl">{description}</p>

        <ul className="list-disc list-inside text-[#3B2B1C] space-y-1 text-lg md:text-xl mb-4 md:mb-0">
          {points.map((point: Point, i: number) => (
            <li key={i} className="mb-2">
              <span className="font-semibold">{point.bolds}</span> - {point.para}
            </li>
          ))}
        </ul>

        {index === 1 && (
          <p className="text-[#3E2C1A] mb-4 text-lg md:text-xl">
            All results are integrated into a structured wellness report, serving as a measurable baseline for ongoing optimisation and performance tracking
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

const Assessment = () => {
  const programmes = [
    { 
      image: logo, 
      title: "Mental Health Assessments", 
      description: "We conduct comprehensive evaluations across psychological, neurological, and behavioural domains to inform personalised therapeutic planning and targeted interventions.",
      points: [
        {
          bolds: "Psychological Profiling",
          para: "cognitive, emotional, social, and personality mapping using validated psychometric tools"
        },
        {
          bolds: "Neurodiversity Screening",
          para: "ADHD and Autism Spectrum assessments with tailored recommendations"
        },
        {
          bolds: "Addiction & Dependence Readiness",
          para: "risk and resilience evaluation, recovery planning"
        },
        {
          bolds: "Psychotherapy Mapping",
          para: "therapist fit, treatment selection, and readiness evaluation"
        },
        {
          bolds: "Stress & Resilience Profiling",
          para: "measurement of adaptive capacity and protective factors"
        },
        {
          bolds: "Disorder-Specific",
          para: "Covers Depression, low mood, low self esteem, Anxiety Generalised Anxiety, Worry, PTSD, OCD, phobias, panic, gambling, health anxiety, emetophobia, and more."
        },
      ],
    },
    { 
      image: logo, 
      title: "Wellness & Longevity Assessments", 
      description: "These assessments evaluate the biological and lifestyle factors that influence cognitive vitality, performance, and healthy ageing. The insights enable bespoke programmes for sustainable energy, recovery, and longevity.",
      points: [
        {
          bolds: "Mindfulness",
          para: "attention control, focus, and neuro-behavioural resilience"
        },
        {
          bolds: "Sleep & Recovery Analysis",
          para: "sleep architecture, circadian alignment, and fatigue metrics, sleep Hygiene"
        },
        {
          bolds: "Nutrition & Metabolic Review",
          para: "nutrient balance, metabolic function, and dietary optimisation"
        },
        {
          bolds: "Physical Fitness & Mobility",
          para: "functional capacity, flexibility, and cardiovascular health indicators."
        },
      ],
    },
    { 
      image: logo, 
      title: "Holistic Wellbeing Assessments", 
      description: "Our integrative assessments Focus on flourishing, meaning, resilience, life satisfaction, and emotional self-care",
      points: [
        {
          bolds: "Emotional & Relational Mapping",
          para: "Identifies patterns in emotion and relationships to enhance awareness and connection."
        },
        {
          bolds: "Vision & Goal Setting",
          para: "Clarifies personal and professional aspirations through guided dialogue and reflection."
        },
        {
          bolds: "Curated Review Circle",
          para: "Expert and self-review process to maintain alignment and momentum."
        },
        {
          bolds: "Signature Features",
          para: "Art of Wellbeing Journal and Luxury Concierge Support for seamless"
        },
        {
          bolds: "Progress & Milestone Tracking",
          para: "Regular monthly, quarterly, and annual reviews to measure growth and refine goals."
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full pt-20 md:pt-24 px-4 md:px-0 overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Precision Assessments for Whole-Person Health</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Our assessments form the foundation of every HWS Care Pathway. Findings guide the curation of personalised pathways that protect, prevent, and promote long-term wellbeing.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        {programmes.map((programme, index) =>
          index % 2 === 0 ? (
            <CardComponent key={programme.title} index={index} {...programme} />
          ) : (
            <CardComponentReverse key={programme.title} index={index} {...programme} />
          )
        )}
      </div>
    </div>
  );
};

export default Assessment;