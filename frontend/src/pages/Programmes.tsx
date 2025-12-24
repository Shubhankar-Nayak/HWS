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
interface CoreItem {
  bolds: string;
  para: string;
}

interface ProgrammeProps {
  image: string;
  title: string;
  description: string;
  cores: CoreItem[];
}

// Reversed Card
const CardComponentReverse = ({ image, title, description, cores }: ProgrammeProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full h-full flex flex-col md:flex-row-reverse items-center bg-[#E8D7BA]/50 overflow-hidden"
      style={{fontFamily:"system-ui"}}
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
        <img src={image} alt={title} className="w-full md:w-[600px] lg:w-[690px] h-60 md:h-72 lg:h-auto object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex flex-col justify-start p-5 md:p-8 lg:p-10 w-full md:h-fit"
        variants={fadeUpVariant}
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#3F2A1D] mb-2 md:mb-0">{title}</h2>
        <p className="text-[#3E2C1A] mb-3 md:mb-4 text-base md:text-lg lg:text-xl">{description}</p>

        <ul className="list-disc list-inside text-[#3B2B1C] space-y-1 text-base md:text-lg lg:text-xl mb-3 md:mb-4">
          {cores.map((core: CoreItem, i: number) => (
            <li key={i} className="mb-2">
              <span className="font-semibold">{core.bolds}</span> - {core.para}
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#3F2A1D] text-white py-3 px-6 rounded mt-4 md:mt-5 shadow-md hover:bg-[#4B2E16] transition w-full md:w-auto"
          onClick={() => navigate("/booking")}
        >
          Book This Programme
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Normal Card
const CardComponent = ({ image, title, description, cores }: ProgrammeProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full h-full flex flex-col md:flex-row items-center bg-transparent overflow-hidden"
      style={{fontFamily:"system-ui"}}
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
        <img src={image} alt={title} className="w-full md:w-[600px] lg:w-[690px] h-60 md:h-72 lg:h-auto object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex flex-col justify-start p-5 md:p-8 lg:p-10 w-full md:h-fit"
        variants={fadeUpVariant}
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#3F2A1D] mb-2 md:mb-0">{title}</h2>
        <p className="text-[#3E2C1A] mb-3 md:mb-4 text-base md:text-lg lg:text-xl">{description}</p>

        <ul className="list-disc list-inside text-[#3B2B1C] space-y-1 text-base md:text-lg lg:text-xl mb-3 md:mb-4">
          {cores.map((core: CoreItem, i: number) => (
            <li key={i} className="mb-2">
              <span className="font-semibold">{core.bolds}</span> - {core.para}
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#3F2A1D] text-white py-2 md:py-3 px-5 md:px-6 text-sm md:text-base rounded mt-3 md:mt-4 lg:mt-5 shadow-md hover:bg-[#4B2E16] transition w-full md:w-auto"
          onClick={() => navigate("/booking")}
        >
          Book This Programme
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Programmes = () => {
  const programmes = [
    { 
      image: logo, 
      title: "Mental Health", 
      description: "Our Mental Health programmes are designed to assess, treat, and optimise psychological wellbeing through clinically validated and personalised approaches.",
      cores: [
        {
          bolds: "Psychotherapy",
          para: "Individual, Cognitive Behavioural (CBT), Trauma Focused CBT, Integrative Counselling and Mindfulness-Based CBT, Acceptance and Commitment Therapy (ACT), Compassion Focused Therapy, DBT, EMDR, Solution-Focused Therapy, Life Coaching, Relationship Counselling, Sex Counselling and Therapy, Hypnotherapy, and Executive Coaching"
        },
        {
          bolds: "Addiction and Recovery",
          para: "Discreet screening, readiness evaluations, and integrated recovery planning."
        },
        {
          bolds: "Neurodiversity",
          para: "ADHD and Autism Spectrum assessments with tailored therapeutic interventions and functional coaching."
        },
        {
          bolds: "Psychological Profiling",
          para: "Cognitive, emotional, social, and behavioural pattern analysis to identify risk and protective factors."
        },
        {
          bolds: "Psychometric Evaluations",
          para: "Personality, leadership, and resilience profiling using validated instruments."
        },
      ],
    },
    { 
      image: logo, 
      title: "Wellness & Longevity",
      description: "Our Wellness & Longevity programmes combine medical insight with restorative practice.",
      cores: [
        {
          bolds: "Sleep & Recovery Science",
          para: "Sleep architecture analysis, circadian rhythm alignment, and restorative recovery planning."
        },
        {
          bolds: "Mindfulness & Stress Reduction",
          para: "Structured mindfulness courses, breathwork therapy, guided meditation, and cognitive relaxation training."
        },
        {
          bolds: "Nutrition & Metabolic Health",
          para: "Functional nutrition plans, metabolic profiling, and integrative dietetics."
        },
        {
          bolds: "Movement & Fitness",
          para: "Functional fitness assessment and personalised exercise programming."
        },
        {
          bolds: "Longevity",
          para: "Preventive health and mental health screening, well-being assessment, self care, and lifestyle optimisation."
        },
      ],
    },
    { 
      image: logo, 
      title: "Holistic Wellbeing", 
      description: "Holistic Wellbeing at HWS integrates emotional, relational, and spiritual dimensions into the continuum of health.",
      cores: [
        {
          bolds: "Emotional & Cognitive Health",
          para: "Cognitive Enhancement Workshops, Emotional Resilience Coaching – guiding graceful response to life's challenges, Art & Expressive Therapies"
        },
        {
          bolds: "Relational Health",
          para: "Guided self-awareness, communication coaching, and relationship mapping, Interpersonal relationships coaching and guidance"
        },
        {
          bolds: "Spiritual & Energetic Harmony",
          para: "Reflective practices, yoga, meditative guidance, and inner balance work, mindfulness for life."
        },
        {
          bolds: "Visioning & Life Design",
          para: "Goal setting through structured dialogue, psychometric tools, and personalised Life Design Mapping."
        },
        {
          bolds: "Reflective Practices",
          para: "Daily mindfulness rituals, monthly reviews, and quarterly wellbeing check-ins."
        },
        {
          bolds: "Curated Retreats & Experiences",
          para: "Immersive Treat and Retreat experiences in serene destinations such as Bali, Tuscany, and the Scottish Highlands for deeper renewal."
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full pt-20 md:pt-24 px-4 md:px-0 overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Domains of Care</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-4">
          Curated Programmes for Mind, Body & Spirit
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
          At HWS, We integrate clinical, psychological, and holistic expertise to deliver comprehensive care pathways that address the full spectrum of wellbeing.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        {programmes.map((programme, index) =>
          index % 2 === 0 ? (
            <CardComponent key={programme.title} {...programme} />
          ) : (
            <CardComponentReverse key={programme.title} {...programme} />
          )
        )}
      </div>
    </div>
  );
};

export default Programmes;