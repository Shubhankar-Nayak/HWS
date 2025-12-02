import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../hooks/useAppSelector";
import LandingComponent from "@/components/landingComponent";

// Import wellness images
import img1 from "@/assets/landingbg1.jpg";
import img2 from "@/assets/landingbg1.jpg";
import img3 from "@/assets/landingbg1.jpg";
import img4 from "@/assets/landingbg1.jpg";
import img5 from "@/assets/landingbg1.jpg";

const stepImages = [img1, img2, img3, img4, img5];

// Framer Motion Variants – Alternating Direction
const rowVariants = {
  enter: (step: number) => ({
    x: step === 1 ? 300 : step % 2 === 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (step: number) => ({
    x: step % 2 === 0 ? -300 : 300,
    opacity: 0,
  }),
};

const CarePathway = () => {
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.booking);
  const [currentStep, setCurrentStep] = useState(1);

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

        {/* Stepper */}
        <div className="mb-8 md:mb-16 relative px-4 md:px-8 lg:px-48">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent"></div>
          <div className="relative flex justify-between">
            {[   //array to change text below numbers
              "Private Consultation",
              "Curated Assessments",
              "Personalised Care Pathway",
              "Targeted Intervention & Support",
              "Ongoing Review & Evolution",
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center z-10"
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-500 shadow-lg border-2
                    ${
                      currentStep > i
                        ? "bg-gradient-to-br from-[#C8A97E] to-[#B89463] text-white border-[#C8A97E] shadow-[#C8A97E]/30"
                        : "bg-white text-[#8B6F47] border-[#E8D5A3]/50"
                    }`}
                >
                  {i + 1}
                </div>
                <span className="mt-1 md:mt-2 text-xs md:text-base font-medium text-[#3f2a1d] whitespace-nowrap hidden sm:block">
                  {title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#FFF9E9] via-[#F7F0DD] to-[#E8D7BA]">
          {/* Image + Form with Alternating Slide */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={currentStep}>
              <motion.div
                key={currentStep}
                custom={currentStep}
                variants={rowVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 130,
                  damping: 22,
                }}
                className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`order-1 lg:order-${
                    currentStep % 2 === 1 ? 1 : 2
                  }`}
                >
                  <div className="relative h-full overflow-hidden ">
                    <img
                      src={stepImages[currentStep - 1]}
                      alt={`Step ${currentStep}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Form Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`order-2 lg:order-${
                    currentStep % 2 === 1 ? 2 : 1
                  }`
                  
                }
                >
                  <div className=" p-6 md:p-10" style={{fontFamily:"Playful Display"}}>
                    {/* STEP 1 — Personal Info */}
                    {currentStep === 1 && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setCurrentStep(2);
                        }}
                      >
                        <div>
                            <h2 className="text-3xl font-semibold text-[#3E2C1A] mb-6 font-serif">Private Consultation</h2>
                            <p>We begin with a confidential, in-depth discussion to understand your goals, needs, and context. This initial dialogue establishes the foundation for personalised care and helps us identify the most relevant areas of focus.</p>
                        </div>
                        <div className="flex justify-end mt-6">
                          <button className="bg-[#3F2A1D] text-white w-full px-6 py-2 rounded-md hover:bg-[#4B2E16] transition">
                            Next
                          </button>
                        </div>
                      </form>
                    )}

                    {/* STEP 2 — Programme */}
                    {currentStep === 2 && (
                      <div>
                        <div>
                            <h2 className="text-3xl font-semibold text-[#3E2C1A] mb-6 font-serif">Curated Assessments</h2>
                            <p>Drawing from our three wellbeing pillars, we select advanced diagnostics to build a comprehensive understanding of your psychological, physical, and emotional profile. These assessments allow us to identify key strengths, patterns, and areas for targeted support.</p>
                        </div>
                        <div className="flex gap-5 mt-8">
                          <button
                            onClick={() => setCurrentStep(1)}
                            className="px-6 py-2 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] hover:bg-[#F8F1E2] flex-1"
                          >
                            Back
                          </button>
                          <button
                            onClick={() =>
                              setCurrentStep(3)
                            }
                            className={`flex-1 px-6 py-2 rounded-md text-white transition bg-[#3F2A1D] hover:bg-[#4B2E16]`}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 — Date & Time */}
                    {currentStep === 3 && (
                      <div>
                      <div>
                            <h2 className="text-3xl font-semibold text-[#3E2C1A] mb-6 font-serif">Personalised Care Pathway</h2>
                            <p>We develop a structured roadmap that integrates the modalities, therapies, and experts most suited to your needs. Each component is chosen to foster meaningful, measurable progress and to create balanced and sustainable change over time.</p>
                        </div>
                        <div className="flex gap-5  mt-8">
                          <button
                            onClick={() => setCurrentStep(2)}
                            className="px-6 py-2 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] hover:bg-[#F8F1E2] flex-1"
                          >
                            Back
                          </button>
                          <button
                            onClick={() =>
                              setCurrentStep(4)
                            }
                            className={`px-6 py-2 rounded-md text-white transition flex-1 bg-[#3F2A1D] hover:bg-[#4B2E16]`}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 4 — Additional Info */}
                    {currentStep === 4 && (
                      <div className="flex flex-col h-full min-h-[400px]">
                       <div>
                            <h2 className="text-3xl font-semibold text-[#3E2C1A] mb-6 font-serif">Targeted Intervention & Support</h2>
                            <p>Our multidisciplinary team delivers care with precision and empathy, coordinating expertise across clinicians, therapists, and specialists. This ensures that each intervention is coherent, aligned, and responsive to your evolving goals.</p>
                        </div>

                        {/* Buttons fixed at bottom */}
                        <div className="flex gap-5 mt-6">
                          <button
                            onClick={() => setCurrentStep(3)}
                            className="px-6 py-3 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] 
                   hover:bg-[#F8F1E2] transition flex-1 font-medium"
                          >
                            Back
                          </button>
                          <button
                            onClick={() => setCurrentStep(5)}
                            className="px-6 py-3 rounded-md bg-[#3F2A1D] text-white hover:bg-[#4B2E16] 
                   transition flex-1 font-medium"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 5 — Review */}
                    {currentStep === 5 && (
                      <div>
                        <div>
                            <h2 className="text-3xl font-semibold text-[#3E2C1A] mb-6 font-serif">Ongoing Review & Evolution</h2>
                            <p>We maintain regular follow-ups to refine, adjust, or deepen the programme as required. This ensures that your pathway remains aligned with shifting priorities, lifestyle demands, and personal growth.</p>
                        </div>
                        <div className="flex gap-5 mt-8">
                          <button
                            onClick={() => setCurrentStep(4)}
                            className="px-6 py-2 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] hover:bg-[#F8F1E2] flex-1"
                          >
                            Back
                          </button>

                          <button
                            onClick={() => navigate("/contact")}
                            className="px-6 py-3 rounded-md bg-[#3F2A1D] text-white hover:bg-[#4B2E16] 
                   transition flex-1 font-medium"
                          >
                            Begin Your Personalised Care Pathway 
                          </button>
                          
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center text-sm text-red-600 font-medium"
            >
              {error}
            </motion.p>
          )}
        </div>
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
