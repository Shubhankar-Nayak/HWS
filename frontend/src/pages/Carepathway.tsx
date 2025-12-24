import { useNavigate,Link } from "react-router-dom";
import { motion } from "framer-motion";
import LandingComponent from "@/components/landingComponent";
import HoverExpandPanels from "@/components/HoveredPanels";
import { Button } from "@/components/ui/button";


const panels = [
    {
      id: 1,
      toptitle: "Step 1",
      title: "PRIVATE CONSULTATION",
      description:
        "We begin with a confidential, in-depth discussion to understand your goals, needs, and context. This initial dialogue establishes the foundation for personalised care and helps us identify the most relevant areas of focus.",
      img: "https://images.unsplash.com/photo-1761504556503-e149cbbf8161?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      toptitle: "Step 2",
      title: "CURATED ASSESSMENTS",
      description:
        "Drawing from our three wellbeing pillars, we select advanced diagnostics to build a comprehensive understanding of your psychological, physical, and emotional profile. These assessments allow us to identify key strengths, patterns, and areas for targeted support.",
      img: "https://images.unsplash.com/photo-1624351046650-718e5d00658b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      toptitle: "Step 3",
      title: "PERSONALISED CARE PATHWAY",
      description:
        "We develop a structured roadmap that integrates the modalities, therapies, and experts most suited to your needs. Each component is chosen to foster meaningful, measurable progress and to create balanced and sustainable change over time.",
      img: "https://images.unsplash.com/photo-1756507505199-25698e3282d2?q=80&w=1258&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      toptitle: "Step 4",
      title: "TARGETED INTERVENTION AND SUPPORT",
      description:
        "Our multidisciplinary team delivers care with precision and empathy, coordinating expertise across clinicians, therapists, and specialists. This ensures that each intervention is coherent, aligned, and responsive to your evolving goals.",
      img: "https://images.unsplash.com/photo-1630986833044-410362e7ee28?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      toptitle: "Step 5",
      title: "ONGOING REVIEW AND EVOLUTION",
      description:
        "We maintain regular follow-ups to refine, adjust, or deepen the programme as required. This ensures that your pathway remains aligned with shifting priorities, lifestyle demands, and personal growth.",
      img: "https://images.unsplash.com/photo-1602780669668-241ff10e6329?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


const CarePathway = ({isProgrammesHover,setIsProgrammesHover}) => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-[#176a79]/10" style={{fontFamily:"Josefin Sans"}}>
      <div className="">
        <LandingComponent image="https://images.unsplash.com/photo-1709055022660-46f701fe6be2?q=80&w=1339&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Care Pathway" 
        buttonText="Start your Journey" link="/levels-of-engagement"
        textcolor="text-[#ebf0f2]"/>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" flex items-center flex-col text-left py-10 md:py-16 lg:py-[100px] my-8 md:my-12 lg:my-16 px-5 md:px-12 lg:px-24"
        >
          <p className=" max-w-3xl text-[#053d57] text-sm md:text-base mb-4 md:mb-5 ">
            The HWS client journey is structured as a progression from an initial conversation to a process of ongoing development. This journey is organised through a five-step pathway that places authentic engagement at its core
            </p>
        </motion.div>

        <HoverExpandPanels panels={panels} />

        {/* Footer */}
       <div className="mt-8 md:mt-10 lg:mt-12 px-5 pb-8 md:pb-10 md:py-[100px] md:px-0 md:mx-auto md:max-w-3xl flex flex-col gap-6 md:gap-8 lg:gap-10">
         <p className=" text-left text-sm md:text-base text-[#053d57]">
          At any point in this pathway, if new needs emerge or priorities shift, we adapt without delay, reshaping the plan to address those requirements effectively. Recognising that life rarely presents challenges in isolation, our approach remains responsive and comprehensive, designed to support the individual as a whole
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 bg-[#053d57]/70 hover:bg-[#053d57]"
            >
              <Link to="/levels-of-engagement">Start Your Journey</Link>
            </Button>
            <button
              
              size="lg"
              onClick={() => (setIsProgrammesHover(!isProgrammesHover))}
              variant="outline"
              className="text-base md:text-lg px-6 md:px-8 bg-white/70 hover:bg-white py-2 md:py-0"
            >
             Explore Programmes
            </button>
          </div>
       </div>
        {/* <p className="mt-12 text-center text-base pb-5 text-[#6B5B35]/70">
          Secure • Private • Confirmation within 24 hours
        </p> */}
      </div>
    </div>
  );
};

export default CarePathway;
