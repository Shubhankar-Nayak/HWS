import {motion } from 'framer-motion'
import LandingComponent from '@/components/landingComponent'
import HoverExpandPanels from '@/components/HoveredPanels';



const panels = [
    {
      id: 1,
      title: "Physical Wellness and Self-Care",
      description:
        "Supporting the body’s natural strength through mindful movement, restorative practices, and intentional self-care. These programmes help clients build vitality, improve balance, and establish habits that promote long-term physical wellbeing.",
      img: "https://images.unsplash.com/photo-1618531337620-435c9b78036e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Mental and Cognitive",
      description:
        "Enhancing clarity, focus, and cognitive resilience through practices designed to sharpen thought and strengthen the inner landscape. Techniques include structured reflection, attention training, and habits that encourage mental agility.",
      img: "https://images.unsplash.com/photo-1732780769402-b4ca6455ded0?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Emotional",
      description:
        "Fostering emotional intelligence and harmony by developing awareness, healthy expression, and meaningful regulation strategies. This work helps clients deepen their relationship with themselves and enhance emotional steadiness.",
      img: "https://images.unsplash.com/photo-1612179543058-ab74d388e0ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Social & Relationships ",
      description:
        "Strengthening personal and professional relationships through guided self-awareness, communication coaching, and relationship mapping. The aim is to support authentic connection, belonging, and mutual growth.",
      img: "https://images.unsplash.com/photo-1667497328281-c2a6e32074d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Spiritual",
      description:
        "Nurturing a sense of purpose, alignment, and inner peace. Through reflective practice, meditative guidance, yoga, and explorations of meaning and values, clients cultivate presence and a deeper connection to themselves and the world around them.",
      img: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id:6,
      title: "Financial",
      description:"Promoting long-term stability and confidence through thoughtful financial habits that support security, freedom, and sustainable prosperity. The focus is on clarity, informed choices, and alignment between financial decisions and personal values.",
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
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

function Assessments({
  img,
  title,
  description,
  features,
}) {
  return (
    <section className="flex flex-col w-full min-h-screen items-center mb-8 md:mb-12 lg:mb-20">
      <div className="relative w-full h-full">
        {/* Wrapper */}
        <div
          className="
            flex flex-col xl:flex-row
            items-center w-full
            relative min-h-screen
          "
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontFamily: "Josefin Sans",
          }}
        >
          {/* Mobile background overlay */}
          <div className="absolute inset-0 bg-black/30 xl:hidden" />

          {/* Content */}
          <div
            className="
              w-full min-h-screen
              flex flex-col xl:flex-row
              items-end xl:items-center
              justify-between
              px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-12
              relative z-10
            "
          >
            {/* TEXT — pinned to bottom */}
            <div className="w-full xl:w-1/2 flex flex-col ">
              <h2
                className="
                  text-2xl md:text-3xl lg:text-4xl
                  font-bold
                  text-[#ebf0f2]
                  
                  mb-3 md:mb-4
                  text-center
                "
              >
                {title}
              </h2>

              {description && (
                <p
                  className="
                    text-sm md:text-base lg:text-lg
                    text-[#ebf0f2]
                    leading-relaxed
                    max-w-lg
                  "
                >
                  {description}
                </p>
              )}
            </div>

            {/* FEATURES — FLEX WRAP ENABLED */}
            <div
              className="
                w-full xl:w-1/2
                flex flex-wrap
                justify-center 
                items-center
                gap-6
                mt-10 xl:mt-0
              "
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    bg-white/90
                    shadow-md hover:shadow-xl
                    transition-all duration-300
                    p-6
                    pt-10 
                    w-[180px]
                    h-[280px]

                    flex flex-col justify-start
                  "
                >
                  <h3 className="text-lg font-semibold text-[#053d57] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#053d57] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const holistic_wellbeing = () => {
  return (
    <motion.div className='bg-[#176a79]/10 md:bg-white' style={{fontFamily:"Josefin Sans"}}>
        <LandingComponent image="https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Holistic Wellbeing" buttonText='Start your Journey'
        link='/levels-of-engagement'
        textcolor='text-[]' />
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center justify-center flex-col  text-left  md:py-[100px] my-16 px-5 md:px-24 "
        style={{fontFamily:"Josefin Sans"}}
      >
        <p className=" max-w-3xl  text-[#053d57] text-base mb-5 ">
          Holistic wellbeing at HWS is understood as an elevated and integrated model of health. Beyond the absence of illness, it reflects a state of balance and fulfillment shaped by the alignment of physical, mental, emotional, social, spiritual, and financial realms. 
        </p>
        
      </motion.div>
          <HoverExpandPanels panels={panels}/>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center justify-center flex-col  text-left  md:py-[100px] my-16 px-5 md:px-24 "
        style={{fontFamily:"Josefin Sans"}}
      >
        <p className=" max-w-3xl  text-[#053d57] text-base mb-5 ">
          Holistic Well-being begins with assessments that provide a panoramic view of flourishing, resilience, meaning, and life satisfaction. Each assessment blends reflective conversation with structured tools to create a clear understanding of current strengths and opportunities for growth. 

        </p>
        
      </motion.div>


        <Assessments img = "https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"features={panels2} description="" height="" title = "Holistic Wellbeing Assessments"/>
    </motion.div>
  )
}

export default holistic_wellbeing