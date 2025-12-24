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
  imagePositionX?: string;
  descriptionSize?: string;
  headingSize?: string;
  link?: string;
  timelineItems?: string[];
  paddingX?: string;
}

const ContentSection = ({
  title,
  content,
  additionalContent,
  finalContent,
  image,
  reverse,
  button,
  link = "/contact",
  imageWidth = "50%",
  textWidth = "50%",
  imagePositionX = "50%",
  paddingX = "px-44",
  descriptionSize = "text-lg",
  headingSize = "text-3xl md:text-4xl",
  timelineItems,
}: ContentSectionProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxHeight, setBoxHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setBoxHeight(boxRef.current.offsetHeight);
    }
  }, [content, additionalContent, finalContent, timelineItems]);

  return (
    <section className="relative w-full bg-[#176a79]/10 pb-20">
      <div
        className={`
          w-full flex flex-col items-center
          lg:flex-row
          ${reverse ? "lg:flex-row-reverse" : ""}
        `}
        style={{ fontFamily: "Josefin Sans" }}
      >
        {/* IMAGE AREA */}
        <motion.div
          className="
            w-full shadow-lg overflow-hidden
            h-[240px] md:h-[320px]
            lg:h-auto lg:w-auto
          "
          style={{
            width: "100%",
            ...(boxHeight && {
              height: undefined,
            }),
            ...(boxHeight && {
              ...(typeof window !== "undefined" &&
                window.innerWidth >= 1024 && {
                  height: `${boxHeight * 1.1}px`,
                  width: imageWidth,
                }),
            }),
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-full h-full bg-cover"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundPosition: `${imagePositionX} center`,
            }}
          />
        </motion.div>

        {/* TEXT AREA */}
        <div
          ref={boxRef}
          className={`
            bg-white/90 backdrop-blur-sm shadow-lg
            w-full text-sm
            px-6 md:px-12
            py-10 md:py-16
            lg:w-auto lg:${paddingX} lg:py-20
          `}
          style={{
            width:
              typeof window !== "undefined" && window.innerWidth >= 1024
                ? textWidth
                : "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl text-sm"
          >
            <h2
              className={`${headingSize} text-[#0b343b] font-bold mb-4 md:mb-6 tracking-tight`}
            >
              {title?.toUpperCase()}
            </h2>

            <p
              className={`${descriptionSize} text-[#053d57] leading-relaxed mb-4 md:mb-6`}
            >
              {content}
            </p>

            {timelineItems && (
              <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                {timelineItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#053d57]" />
                    <span className="text-[#053d57] text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}

            {button && (
              <Button
                asChild
                size="lg"
                className="text-sm md:text-base px-6 md:px-8 text-[#ebf0f2] bg-[#053d57]/70 hover:bg-[#053d57] font-medium shadow-md"
              >
                <Link to={link}>{button}</Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
