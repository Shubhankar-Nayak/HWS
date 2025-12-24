import { motion } from "framer-motion";

function PCSParadigm({
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
            relative w-full min-h-screen
            flex flex-col xl:flex-row
            bg-[#f5f0e6]
          "
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontFamily: "Josefin Sans",
          }}
        >
          {/* Mobile background overlay */}
          <div
            className="
              block xl:hidden
              absolute inset-0
              bg-cover bg-center
            "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1694758110913-29a08297fbb1?q=80&w=1170&auto=format&fit=crop')",
            }}
          />

          {/* Content */}
          <div
            className="
               z-10
              w-full
              flex flex-col lg:flex-row
               justify-center lg:justify-end items-center 
              px-6 md:px-10 py-10 md:py-0
            "
          >

            {/* TEXT — pinned bottom */}
            <div
              className="
                 relative lg:absolute bottom-0 left-0
                lg:static max-w-3xl
                w-full
                flex flex-col
                items-center lg:items-start xl:items-center justify-center 
                px-4  md:px-6 py-5 lg:pl-10 xl:pl-20 xl:pb-44
              "
            >
              <h2
                className="
                  text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                  font-bold
                  text-[#053d57]
                  font-serif
                  text-center lg:text-left
                  mb-3 md:mb-4
                "
              >
                {title}
              </h2>

              <p
                className="
                  text-sm md:text-base lg:text-lg
                  text-[#053d57] md:text-[#ebf0f2]
                  text-center lg:text-left
                  leading-relaxed
                  max-w-lg
                "
              >
                {description}
              </p>
            </div>

            {/* FEATURES — centered */}
            <div
              className="
                max-w-2xl
                flex flex-wrap
                items-center
                justify-center
                
                gap-5
              "
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    group relative
                    bg-white
                    p-5 md:p-6 lg:p-8
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                    md:min-h-[280px] lg:min-h-[300px]
                    md:max-w-[200px]
                    max-w-[450px]
                  `}
                >
                  <h3
                    className="
                      text-base md:text-lg lg:text-xl
                      font-semibold
                      text-[#053d57]/90
                      mb-2
                    "
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="
                      text-sm md:text-base
                      text-[#053d57]/90
                      leading-relaxed
                    "
                  >
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
