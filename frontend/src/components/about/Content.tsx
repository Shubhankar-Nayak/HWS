import { motion } from "framer-motion";
import { useRef } from "react";

const ContentSection = ({ title, content, additionalContent, finalContent, image, reverse }: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-screen flex ${reverse ? 'flex-row-reverse' : ''} items-center overflow-hidden bg-[#E8D7BA]/30`}
    >
      {/* Image Section */}
      <motion.div
        className="absolute inset-y-0 w-full md:w-1/2"
        style={reverse ? { right: 0 } : { left: 0 }}
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </motion.div>

      {/* Text Content */}
      <div className={`relative z-10 w-full md:w-1/2 ${reverse ? 'mr-auto' : 'ml-auto'} bg-white/90 backdrop-blur-sm p-8 md:p-16 lg:p-20`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl text-[#3F2A1D] font-bold mb-6 font-serif tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-[#8B6F47] leading-relaxed mb-6">
            {content}
          </p>
          {additionalContent && (
            <p className="text-lg text-[#8B6F47] leading-relaxed mb-6">
              {additionalContent}
            </p>
          )}
          {finalContent && (
            <p className="text-lg text-[#8B6F47] leading-relaxed">
              {finalContent}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};


export default ContentSection;