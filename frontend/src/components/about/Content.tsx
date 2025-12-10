import { motion } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ContentSectionProps {
  title: string;
  content: string;
  additionalContent?: string;
  finalContent?: string;
  image?: string;
  reverse?: boolean;
  button?: string;
  imageWidth?: string;
  textWidth?: string;
}

const ContentSection = ({
  title,
  content,
  additionalContent,
  finalContent,
  image,
  reverse,
  button,
  imageWidth = "50%",
  textWidth = "50%",
}: ContentSectionProps) => {

  const boxRef = useRef<HTMLDivElement>(null);

  const [boxHeight, setBoxHeight] = useState<number | null>(null);

  // Measure white text box height
  useLayoutEffect(() => {
    if (boxRef.current) {
      const height = boxRef.current.offsetHeight;
      setBoxHeight(height);
    }
  }, [content, additionalContent, finalContent]);


  return (
    <section className="relative w-full bg-[#E8D7BA]/30 py-10">
      <div
        className={`w-full flex flex-col items-center lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >

        {/* IMAGE AREA */}
        <motion.div
          className="w-full lg:w-auto shadow-lg overflow-hidden"
          style={{
            width: imageWidth,
            height: boxHeight ? `${boxHeight * 1.1}px` : "auto", // ⬅️ 20% taller than white box
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        </motion.div>

        {/* TEXT AREA */}
        <div
          ref={boxRef}
          className="bg-white/90 backdrop-blur-sm shadow-lg w-full  lg:w-auto px-20 py-10"
          style={{
            width: textWidth,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
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
              <p className="text-lg text-[#8B6F47] leading-relaxed mb-6">
                {finalContent}
              </p>
            )}

            {button && (
              <Button
                asChild
                size="lg"
                className="text-lg px-8 bg-[#f5f0e6] text-[#3F2A1D] hover:bg-[#bfa176] font-medium shadow-md"
              >
                <Link to="/contact">{button}</Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
