import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import LandingComponent from "@/components/landingComponent";
import ContentSection from "@/components/ContentsectionWithList";

const ImageOverlayCarouse = ({
  images = [],
  items = [],
  interval = 4000,
}) => {
  const [index, setIndex] = useState(0);

  const quarterSize = Math.ceil(items.length / 8);
  const totalSlides = 4; // because index % 4

  const getVisibleItems = () => {
    const slideIndex = index % totalSlides;
    const start = slideIndex * (quarterSize * 2);

    return {
      top: items.slice(start, start + quarterSize),
      bottom: items.slice(start + quarterSize, start + quarterSize * 2),
    };
  };

  const { top, bottom } = getVisibleItems();
  const currentImage = images[index % images.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${currentImage})`,
        fontFamily: "Josefin Sans",
      }}
    >
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between px-12 py-10 text-white">
        {/* TOP ROW */}
        <div className="flex justify-between gap-6">
          {top.map((item, i) => (
            <div key={i} className="flex-1 text-center text-sm md:text-lg font-medium">
              {item}
            </div>
          ))}
        </div>

        {/* CENTER TEXT */}
        <div className="w-full flex justify-center">
           {/* PAGINATION DOTS */}
        <div className="flex flex-col justify-center gap-3 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const isActive = index % totalSlides === i;

            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>
          <p className="flex-1  text-center text-xl">
            Our programmes and assessments cover a wide range of conditions,
            including
          </p>
         
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between gap-6">
          {bottom.map((item, i) => (
            <div key={i} className="flex-1 text-center text-sm md:text-lg font-medium">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const ImageOverlayCarousel2 = ({
  images = [],
  items = [],
  interval = 4000,
}) => {
  const [index, setIndex] = useState(0);

  // 1/8 of total items per row
  const itemsPerRow = Math.ceil(items.length / 8);

  // Items shown per slide (top + bottom)
  const itemsPerSlide = itemsPerRow * 2;

  // How many slides are needed
  const totalSlides = Math.ceil(items.length / itemsPerSlide);
  const currentImage = images[index % images.length];

  const getVisibleItems = () => {
    if (!items.length) return { top: [], bottom: [] };

    const slideIndex = index % totalSlides;
    const start = slideIndex * itemsPerSlide;

    return {
      top: items.slice(start, start + itemsPerRow),
      bottom: items.slice(
        start + itemsPerRow,
        start + itemsPerSlide
      ),
    };
  };

  const { top, bottom } = getVisibleItems();

  useEffect(() => {
    if (!totalSlides) return;

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, totalSlides]);

  return (
    <div
      className="relative w-full h-[500px] transition-all bg-cover bg-center duration-1000 "
      style={{
        backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
    backgroundPosition: "center",
        fontFamily: "Josefin Sans",
      }}
    >

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between gap-16 px-12 py-10 text-white">
        {/* TOP ROW */}
        <div className="flex justify-between gap-6">
          {top.map((item, i) => (
            <div
              key={`top-${i}`}
              className="flex-1 text-center text-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
        {/* PAGINATION DOTS */}
        <div className="flex flex-col gap-3 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const isActive = index % totalSlides === i;

            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between gap-6">
          {bottom.map((item, i) => (
            <div
              key={`bottom-${i}`}
              className="flex-1 text-center text-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const ModifiedContentSection = ({
  content,

  imageWidth = "58%",
  textWidth = "42%",
}: {
  content: string;
  imageWidth?: string;
  textWidth?: string;
}) => {

  return (
    <section className="relative w-full bg-[#176a79]/10">
      <div
        className={`w-full flex flex-col items-center lg:flex-row-reverse`}
        style={{ fontFamily: "Josefin Sans" }}
      >
        {/* IMAGE AREA */}
        <motion.div
          className="w-full lg:w-auto shadow-lg overflow-hidden"
          style={{
            ...(typeof window !== "undefined" &&
              window.innerWidth >= 1024 && {
                width: imageWidth,
              }),
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <ImageOverlayCarousel2
          images= {["https://images.unsplash.com/photo-1686002701992-2720b6a671b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdnklMjBibHVlJTIwd2F0ZXJ8ZW58MHwwfDB8fHwy","https://images.unsplash.com/photo-1613427992290-7baa994cfee8?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1608371743110-24952cd89b0f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1686226347032-b82efa11af93?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ]}
            items={[
              "Cognitive Behavioural Therapy (CBT)",
              "Integrated psychotherapy",
              "Psychoanalysis and psychodynamic",
              "Trauma Focused CBT",
              "Integrative Counselling",
              "Mindfulness-Based CBT",
              "Mindfulness-Based Stress Reduction",
              "Acceptance and Commitment Therapy (ACT)",
              "Compassion Focused Therapy",
              "Dialectical Behavioural Therapy (DBT)",
              "EMDR",
              "Life Coaching",
              "Relationship Counselling",
              "Sex Therapy",
              "Hypnotherapy",
              "Executive Coaching",
            ]}
          />
        </motion.div>

        {/* TEXT AREA */}
        <div
          className="
            bg-white/90 backdrop-blur-sm shadow-lg
            w-full
            px-10
            py-12
            lg:px-32 lg:py-20
          "
          style={{
            width:
              typeof window !== "undefined" && window.innerWidth >= 1024
                ? textWidth
                : "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <h2
              className={`text-3xl md:text-4xl text-[#0b343b] font-bold mb-4 md:mb-6 tracking-tight`}
            >
              PSYCHOTHERAPY
            </h2>

            <p
              className={`text-lg text-[#053d57] leading-relaxed mb-4 md:mb-6`}
            >
              {content}
            </p>

           

            {/* {button && (
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 text-[#ebf0f2] bg-[#053d57]/70 hover:bg-[#053d57] font-medium shadow-md"
              >
                <Link to={link}>{button}</Link>
              </Button>
            )} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MentalHealth = () => {
  return (
    <motion.div style={{ fontFamily: "Josefin Sans" }}>
      <LandingComponent
        image="https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0?q=80&w=1170&auto=format&fit=crop"
        textcolor="text-[]"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center flex-col bg-transparent text-left  md:py-[100px] my-16 px-5 md:px-24"
      >
        <p className=" max-w-3xl text-[#053d57] text-base mb-5 ">
          Our programmes under this pillar support the assessment, treatment,
          and optimisation of psychological wellbeing through sustainable
          approaches. We work with depth and discretion, offering a structured
          yet flexible pathway that responds to each individual’s needs and
          circumstances.
        </p>
      </motion.div>

      <ImageOverlayCarouse
        images={[
          "https://images.unsplash.com/photo-1635715070096-b4655b94edee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1574254706427-213d446e2f2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1758597256447-a3b6b98b18c7?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1557644978-f61037cfbe49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]}
        items={[
          "Depression and low mood",
          "Bereavement and grief",
          "Low self-esteem",
          "Anxiety",
          "generalised anxiety",
          "Social anxiety",
          "Health anxiety",
          "Body dismorphic disorder",
          "Emetophobia",
          "Disordered eating",
          "Burnout and exhaustion",
          "Menopause",
          "Decision Making",
          "Decision burn out",
          "Stress management",
          "Post parted depression",
          "Life transition",
          "Finance management and worry",
          "Excessive worry",
          "PTSD",
          "OCD",
          "Phobias",
          "Panic",
          "Pain management",
          "Gambling-related concerns",
          "Pornography Addiction",
          "Sex Addiction",
          "Health anxiety",
          "Emetophobia",
          "Worry",
          "And other related challenges",
        ]}
      />

      <div className="py-20 bg-[#176a79]/10">
        <ModifiedContentSection content="Our psychotherapy offering spans a wide range of evidence-based approaches, allowing us to select the most appropriate method for the individual. These modalities help clients understand patterns, develop effective coping strategies, process past experiences, and strengthen emotional resilience." />
      </div>

      <ContentSection
        image="https://images.unsplash.com/photo-1707340726386-611f5e9398f3?q=80&w=1170&auto=format&fit=crop"
        title="Addiction and Recovery"
        content="We offer discreet and structured support for individuals navigating dependency or early recovery. Our approach focuses on understanding readiness, identifying triggers and resilience factors, and developing tailored recovery plans that align with personal and professional demands."
        button="Begin a Private Conversation"
        timelineItems={[
          "Screening and risk evaluation",
          "Readiness assessment",
          "Integrated recovery planning",
          "Therapy support",
        ]}
        imageWidth="55%"
        textWidth="45%"
        paddingX="px-24"
      />

      <ContentSection
        image="https://images.unsplash.com/photo-1744313001460-68c6f67625f0?q=80&w=1170&auto=format&fit=crop"
        title="Neurodiversity"
        content="We provide sensitive assessments and tailored support for individuals with ADHD or Autism Spectrum presentations. Our programmes help improve self-understanding, strengthen executive functioning, and enhance day-to-day performance."
        button="Begin a Private Conversation"
        timelineItems={[
          "ADHD and Autism Spectrum assessments",
          "Functional coaching",
          "Recommendations for support and adaptation",
          "Therapeutic support",
        ]}
        reverse={true}
        imageWidth="50%"
        textWidth="50%"
      />

      <ContentSection
        image="https://images.unsplash.com/photo-1494797262163-102fae527c62?w=900&auto=format&fit=crop&q=60"
        title="Psychological Profiling & Psychometrics"
        content="We conduct detailed evaluations across cognitive, emotional, social, and behavioural domains to generate a clear understanding of strengths, challenges, and growth areas."
        button="Begin a Private Conversation"
        timelineItems={[
          "Know your Mental health( Annual and Quarterly)",
          "Disorder Specific Screening",
          "Cognitive and emotional mapping",
          "Personality and leadership profiling",
          "Resilience assessment",
          "Adaptive and protective factor analysis",
          "Therapy Mapping",
          "Holistic well-being Program Mapping",
        ]}
        imageWidth="60%"
        textWidth="40%"
        paddingX="px-20"
      />
    </motion.div>
  );
};

export default MentalHealth;
