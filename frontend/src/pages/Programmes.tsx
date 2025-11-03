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

// Reversed Card
const CardComponentReverse = ({ image, title, duration, description, benefits }: any) => {
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
        <img src={image} alt="" className="w-full md:w-[690px] h-64 md:h-auto object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex flex-col justify-start p-6 md:p-10 w-full md:h-[450px]"
        variants={fadeUpVariant}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#3F2A1D] mb-2 md:mb-0">{title}</h2>
        <p className="text-[#4E3B23] mb-2 font-medium text-lg md:text-xl">{duration}</p>
        <p className="text-[#3E2C1A] mb-4 text-lg md:text-xl">{description}</p>

        <ul className="list-disc list-inside text-[#3B2B1C] space-y-1 text-lg md:text-xl mb-4 md:mb-0">
          {benefits.map((benefit: string, i: number) => (
            <li key={i}>{benefit}</li>
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
const CardComponent = ({ image, title, duration, description, benefits }: any) => {
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
        className="w-full md:w-auto flex-shrink-0 md:py-5 md:pr-5"
        variants={fadeUpVariant}
      >
        <img src={image} alt="" className="w-full md:w-[690px] h-64 md:h-auto object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex flex-col justify-start p-6 md:p-10 w-full md:h-[450px]"
        variants={fadeUpVariant}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#3F2A1D] mb-2 md:mb-0">{title}</h2>
        <p className="text-[#4E3B23] mb-2 font-medium text-lg md:text-xl">{duration}</p>
        <p className="text-[#3E2C1A] mb-4 text-lg md:text-xl">{description}</p>

        <ul className="list-disc list-inside text-[#3B2B1C] space-y-1 text-lg md:text-xl mb-4 md:mb-0">
          {benefits.map((benefit: string, i: number) => (
            <li key={i}>{benefit}</li>
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

const Programmes = () => {
  const programmes = [
    { image: logo, title: "Mindfulness & Meditation", duration: "8 weeks",
      description: "Cultivate inner peace and mental clarity through guided meditation practices and mindfulness techniques.",
      benefits: ["Stress reduction", "Improved focus", "Emotional balance", "Better sleep quality"],
    },
    { image: logo, title: "Yoga & Movement", duration: "12 weeks",
      description: "Strengthen your body and calm your mind with yoga practices suited for all levels.",
      benefits: ["Increased flexibility", "Core strength", "Mind-body connection", "Pain relief"],
    },
    { image: logo, title: "Nutrition & Wellness", duration: "6 weeks",
      description: "Transform your relationship with food through holistic nutrition guidance and personalized meal planning.",
      benefits: ["Sustainable eating habits", "Energy boost", "Weight management", "Gut health"],
    },
    { image: logo, title: "Breath & Energy Work", duration: "4 weeks",
      description: "Harness the power of breathwork to release tension and activate your body's natural healing abilities.",
      benefits: ["Anxiety relief", "Enhanced vitality", "Emotional release", "Immune support"],
    },
    { image: logo, title: "Complete Wellness Package", duration: "16 weeks",
      description: "Our comprehensive programme combining all aspects of holistic well-being for total transformation.",
      benefits: ["All-inclusive approach", "Personal coaching", "Community support", "Lasting results"],
    },
  ];

  return (
    <div className="min-h-screen w-full pt-20 md:pt-24 px-4 md:px-0 overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Programmes</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Choose the path that resonates with your wellness goals
        </p>
      </div>

      <div className=" space-y-8 md:space-y-12">
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
