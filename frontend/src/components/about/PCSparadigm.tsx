import { motion } from "framer-motion";

function PCSParadigm() {
  const features = [
    {
      title: "Mind & Body Balance",
      description:
        "Harmonize your physical and mental well-being through our integrated approach.",
    },
    {
      title: "Personalized Journey",
      description:
        "Tailored programmes designed to meet your unique wellness goals.",
    },
    {
      title: "Expert Guidance",
      description:
        "Learn from experienced practitioners dedicated to your transformation.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center mb-12 md:mb-20">

      <div className="relative w-full">

        {/* Wrapper that changes behavior depending on screen size */}
        <div className="
          flex flex-col xl:flex-row 
          items-center w-full 
          bg-[#f5f0e6]
          relative
        "
        style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1694758110913-29a08297fbb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

          {/* Image Background on Mobile */}
          <div
            className="
              block xl:hidden
              absolute inset-0 
              bg-cover bg-center
            "
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1694758110913-29a08297fbb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          
          ></div>

          

          {/* Content */}
          <div
            className="
              w-full lg:flex-1 
              flex flex-row items-center justify-center gap-10 
              px-6 md:px-10 pb-10 pt-10
              relative z-10
            "
          >
            {/* Gradient overlay for mobile readability */}
            <div className="absolute lg:hidden inset-0 bg-black/20 backdrop-blur-[1px] -z-10"></div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="
                text-3xl md:text-4xl lg:text-5xl 
                font-bold 
                text-[#3F2A1D] dark:text-foreground 
                font-serif 
                text-center lg:text-left 
                lg:pl-24 mb-4
              ">
                The PCS Paradigm
              </h2>

              <p className="
                text-base md:text-lg 
                text-[#ebf0f2] dark:text-[#8B6F47] 
                text-center lg:text-left 
                leading-relaxed
              ">
                The Personalised, Customised, Sustainable (PCS) Paradigm shapes every aspect of care at HWS. It ensures that each journey, from assessment through long-term support, is developed as a thoughtful and evolving partnership. It transforms care from isolated interventions into a continuous and adaptive relationship.
              </p>
            </div>

            {/* Features */}
            <div
              style={{ fontFamily: "Playful Display" }}
              className="flex flex-col md:flex-row md:justify-center lg:justify-start items-center gap-5"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group relative 
                    bg-white/90 
                    p-4 
                    shadow-sm hover:shadow-xl 
                    transition-all duration-300 
                    border border-[#E8D5A3]/30 hover:border-[#C8A97E]/50 
                    md:min-h-[240px] 
                    md:min-w-[180px]
                    rounded
                  "
                >
                  <h3 className="
                    text-lg md:text-xl 
                    font-semibold 
                    text-[#3F2A1D] 
                    text-center mb-2
                  ">
                    {feature.title}
                  </h3>
                  <p className="
                    text-base md:text-lg 
                    text-[#6B5B35] 
                    text-center leading-relaxed
                  ">
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

export default PCSParadigm;
