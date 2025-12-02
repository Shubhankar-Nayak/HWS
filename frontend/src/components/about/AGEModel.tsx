import { motion } from "framer-motion";

const stepdata = [
  {
    step: "A",
    heading: "Awareness",
    description: "Awareness is the foundation of transformation. It enables individuals to recognise patterns, understand their responses, and live with intention.",
  },
  {
    step: "G",
    heading: "Grace",
    description: "Grace represents balance in motion. It is the ability to move through life’s complexities with composure, empathy, and emotional harmony, expressing strength with steadiness rather than force.",
  },
  {
    step: "E",
    heading: "Energy",
    description: "Energy is the expression of vitality and purpose. By supporting physical health, cognitive clarity, and emotional resilience, clients are able to sustain meaningful performance over time.",
  },
];

const StepProcess = ({ step, heading, description, index }: { step: string; heading: string; description: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative bg-white rounded-3xl border-4 border-[#3F2A1D] shadow-xl hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 flex flex-col w-full max-w-sm mx-auto"
      style={{ fontFamily: "Playfair Display" }}
    >
      {/* Step Circle */}
      <div className="absolute -top-6 -left-6 sm:-left-7 bg-[#d6cabe] text-black text-2xl sm:text-3xl font-bold w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300 z-10">
        {step}
      </div>

      {/* Content */}
      <div className="mt-10 sm:mt-12 mb-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3F2A1D] leading-tight">
          {heading}
        </h3>
      </div>
      
      <p className="text-base sm:text-lg text-[#6B5B35] leading-relaxed flex-1">
        {description}
      </p>

      {/* Hover glow effect (desktop only) */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#C8A97E]/30 to-[#d6cabe]/30 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

function AGEModel() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-[#f5f0e6] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3F2A1D] font-serif mb-6 leading-tight">
            The PCS Paradigm
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#6B5B35] max-w-4xl mx-auto leading-relaxed px-4">
            The Personalised, Customised, Sustainable (PCS) Paradigm shapes every aspect of care at HWS. 
            It ensures that each journey, from assessment through long-term support, is developed as a thoughtful 
            and evolving partnership — transforming care into a continuous and adaptive relationship.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20 justify-items-center">
          {stepdata.map((step, index) => (
            <StepProcess
              key={index}
              step={step.step}
              heading={step.heading}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AGEModel;