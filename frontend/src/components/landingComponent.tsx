import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LandingComponentProps {
    image:string;
    title?:string;
    subtitle?:string;
    description?:string;
    contactbutton?:boolean;
    buttonText?:string;
    link?:string;
    textcolor?:string;
    titleSize?:string;

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

function LandingComponent({ image, title, subtitle, description, contactbutton, textcolor,buttonText="Speak with Us", link="/contact", titleSize="text-5xl md:text-6xl" }: LandingComponentProps) {

  return (
    <motion.div
      className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariant}
      style={{fontFamily:"Josefin Sans"}}
    >
      {/* Mountain Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />

      <div className="relative flex flex-col items-center justify-center h-full z-10 text-center text-white px-4 md:px-6">
        <div className=" flex-1 flex items-center justify-center">
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`${titleSize} mb-6 md:mb-8 lg:mb-10 `}
        >
          {title?.toUpperCase()}
        </motion.h1>
        </div>
        <motion.div className="flex flex-col items-start gap-4 md:gap-5 pb-6 md:pb-8 lg:pb-10 ">

        {buttonText && <motion.div className="w-full ">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-6 md:px-8 bg-white/70 hover:bg-white text-[#0b343b]"
            >
              <Link to={link}>{buttonText}</Link>
            </Button>
        </motion.div>}
        </motion.div>
        
      </div>
    </motion.div>
  );
}

export default LandingComponent;
