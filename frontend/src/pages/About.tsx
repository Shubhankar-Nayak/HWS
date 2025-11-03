import { motion } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// PCS Paradigm Component with animated elements
const PCSParadigm = () => {
  return (
    <motion.div
      className="w-full py-16 bg-gradient-to-br from-[#3F2A1D] to-[#8B6F47] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif"
          variants={fadeUpVariant}
        >
          The PCS Paradigm
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 max-w-4xl mx-auto text-[#E8D7BA]"
          variants={fadeUpVariant}
        >
          The Personalised - Customised - Sustainable (PCS) Paradigm reflects our philosophy of precision care and forms the foundation of our Care Pathway.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalised",
              description: "Every client's needs, preferences, and context are heard and understood before a single recommendation is made.",
              color: "from-[#E8D7BA] to-[#F5EBD6]"
            },
            {
              title: "Customised",
              description: "Pathways are designed by integrating multiple disciplines into one cohesive programme that evolves with the individual.",
              color: "from-[#D4C1A0] to-[#E8D7BA]"
            },
            {
              title: "Sustainable",
              description: "Our focus is on long-term wellbeing. We work towards changes that integrate seamlessly into daily life and endure well beyond the structured programme.",
              color: "from-[#B8A285] to-[#D4C1A0]"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg p-8 shadow-xl"
              variants={fadeUpVariant}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} mb-6 flex items-center justify-center`}>
                <span className="text-2xl font-bold text-[#3F2A1D]">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3F2A1D] mb-4 font-serif">{item.title}</h3>
              <p className="text-[#8B6F47] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeUpVariant}
        >
          <p className="text-xl text-[#E8D7BA] italic">
            This model transforms care from a sequence of treatments into a continuous, adaptive relationship.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Content sections
const aboutSections = [
  {
    title: "About HWS",
    content: "At Holistic Wellbeing Solutions, we combine scientific excellence with a deeply human approach to care. We work discreetly with individuals who seek meaningful, lasting transformation.",
    additionalContent: "Our clientele includes senior executives, entrepreneurs, creatives, athletes, and public figures, people who perform under pressure, navigate complexity, and value privacy above all else. Each engagement is conducted with absolute discretion, ensuring that every client can engage fully and confidentially in the pursuit of wellbeing.",
    finalContent: "Our work is defined by precision, privacy, and purpose. We understand that true wellbeing is dynamic. It requires intelligence, empathy, and exceptional expertise to sustain it over time.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    reverse: false
  },
  {
    title: "Services & Facilities",
    content: "Our environments embody the same principles that define our care. Whether in our central consultation suites or through private residence programmes, each setting is designed to encourage reflection, comfort, and renewal.",
    additionalContent: "Every detail is considered to create a sense of psychological safety and ease. For clients requiring in-residence or international continuity of care, we provide bespoke arrangements that ensure seamless, uninterrupted support wherever life takes them.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
    reverse: true
  },
  {
    title: "Experts & Expertise",
    content: "Our carefully selected network of psychologists, clinicians, nutritionists, and holistic practitioners are each chosen for their expertise, empathy, and discretion.",
    additionalContent: "With an average of over 20 years of professional experience, our team represents the highest standards of clinical and holistic practice. This multidisciplinary group blends scientific rigour with human understanding, ensuring that every client receives care that is both precise and personally resonant.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    reverse: false
  },
  {
    title: "Our Commitment",
    content: "Every relationship at HWS is built on trust. We uphold the highest standards of confidentiality, integrity, and care, ensuring that each engagement is conducted with the respect and discretion our clients deserve.",
    additionalContent: "Our commitment extends beyond treatment, to continuity, follow-through, and the enduring wellbeing of those we serve. At HWS, transformation is not an event but a partnership, one that evolves gracefully through every stage of life.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    reverse: true
  }
];

// Content Section Component
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

const About = () => {
  return (
    <div className="min-h-screen w-full pt-20 md:pt-24 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        {/* Mountain Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">About HWS</h1>
          <p className="text-xl md:text-2xl text-[#E8D7BA] max-w-3xl mx-auto">
            Precision Care, Personal Transformation, Lasting Wellbeing
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="space-y-0">
        <ContentSection {...aboutSections[0]} />
        <PCSParadigm />
        <ContentSection {...aboutSections[1]} />
        <ContentSection {...aboutSections[2]} />
        <ContentSection {...aboutSections[3]} />
      </div>

      {/* Closing Statement */}
      <motion.div 
        className="bg-[#F8F4EC] py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#3F2A1D] font-bold mb-8 font-serif">
            A New Standard in Holistic Care
          </h2>
          <p className="text-xl text-[#8B6F47] leading-relaxed">
            At Holistic Wellbeing Solutions, we redefine what it means to achieve and maintain optimal wellbeing. 
            Through our unique PCS Paradigm and unwavering commitment to excellence, we partner with you to create 
            meaningful, lasting transformation that honors your unique journey and aspirations.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;