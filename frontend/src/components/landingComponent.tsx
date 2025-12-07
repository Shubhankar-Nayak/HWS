import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LandingComponentProps {
    image:string;
    title:string;
    subtitle?:string;
    description?:string;
    contactbutton?:boolean;

}

// Properly typed variants
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function LandingComponent({ image, title, subtitle, description, contactbutton }: LandingComponentProps) {

  return (
    <motion.div
      className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariant}
    >
      {/* Mountain Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />

      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-serif"
        >
          {title}
        </motion.h1>
        <motion.div className="flex items-start gap-5 mb-10">
            <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-[#E8D7BA] max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
        {description && <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-[#E8D7BA] max-w-3xl mx-auto"
        >
          {description}
        </motion.p>}
        </motion.div>
        {contactbutton && <motion.div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/70 hover:bg-white text-[#]"
            >
              <Link to="/contact">Speak with Us</Link>
            </Button>
        </motion.div>}
      </div>
    </motion.div>
  );
}

export default LandingComponent;
