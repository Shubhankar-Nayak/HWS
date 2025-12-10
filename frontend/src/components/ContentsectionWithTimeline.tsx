import { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CircularTimeline from "@/components/CircularTimeline";

interface ContentSectionProps {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
  button?: string;
  timelineItems?: string[];
  imageWidth?: string; // NEW: configurable width
  textWidth?: string;  // NEW: configurable width
}

const ContentSection = ({
  title,
  content,
  image,
  reverse,
  button,
  timelineItems,
  imageWidth = "50%",
  textWidth = "50%",
}: ContentSectionProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);

  // Measure the height of the text area so we can match image height
  useLayoutEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, [content, timelineItems]);

  // Reduce extra height factor from 1.1 → 1.05 for smaller image
  const calculatedImageHeight = textHeight ? Math.min(textHeight * 1.05, 1000) : "auto"; // max 600px

  return (
    <section className="relative w-full bg-[#E8D7BA]/30 py-10">
      <div
        className={`w-full flex flex-col items-center lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <motion.div
          className="w-full lg:w-auto shadow-lg overflow-hidden"
          style={{
            width: imageWidth,
            height: calculatedImageHeight,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </motion.div>

        {/* TEXT BOX */}
        <div
          ref={textRef}
          className="bg-white/90 backdrop-blur-sm shadow-lg w-full lg:w-auto px-20 py-10"
          style={{ width: textWidth }}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl text-[#3F2A1D] font-bold mb-6 font-serif tracking-tight">
              {title}
            </h2>

            <p className="text-lg text-[#8B6F47] leading-relaxed mb-6">
              {content}
            </p>

            {timelineItems && (
              <div className="w-full mb-6">
                <CircularTimeline items={timelineItems} interval={2500} centerText="" />
              </div>
            )}

            {button && (
              <Button
                asChild
                size="lg"
                className="text-lg px-8 bg-[#f5f0e6] text-[#3F2A1D] hover:bg-[#bfa176] font-medium shadow-md w-full flex items-center justify-center"
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
