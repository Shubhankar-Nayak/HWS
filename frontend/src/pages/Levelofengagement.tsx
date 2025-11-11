// app/components/Levelofengagement.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, CalendarDays } from "lucide-react";
import {useNavigate} from "react-router-dom";

const contents = [
  {
    header: "Private Wellbeing Programmes",
    para:
      "Our Private Wellbeing Programmes offer one-to-one sessions designed around the individual. These programmes are ideal for leaders, creatives, and professionals navigating high-performance environments who wish to focus on specific goals within any of our pillars. \nEach engagement begins with a confidential consultation, followed by tailored assessments and therapy sessions delivered in person or virtually. Programmes can range from focused short-term interventions to ongoing support for long-term wellbeing.",
  },
  {
    header: "Executive-Level Engagements",
    para:
      "Our Executive-Level Engagements are comprehensive wellbeing journeys integrating advanced assessments, multidisciplinary therapies, and continuous monitoring. \nClients receive a dedicated wellbeing advisor who coordinates their care, liaising with clinicians, therapists, and lifestyle experts to ensure coherence. This level is suited to those seeking measurable outcomes and long-term change.",
  },
  {
    header: "Concierge Wellbeing Service and Retreats",
    para:
      "Our Concierge Service is an invitation-only offering that provides seamless, on-call access to HWS specialists anywhere in the world. From private residence visits to international travel accompaniment, our concierge team ensures uninterrupted care with absolute discretion. \nTo learn more about which pathway best suits your needs, or to book a confidential consultation, please reach out to our team. Every HWS journey begins with a conversation.",
  },
];

// Define proper TypeScript interfaces for props
interface ValuesSectionProps {
  heading: string;
  para: string;
}

/* ----------------------------- Reversed Card ----------------------------- */
function ValuesSectionReverse({ heading, para }: ValuesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-row-reverse items-center overflow-hidden bg-[#E8D7BA]/30"
    >
      {/* Image anchored to the RIGHT now */}
      <motion.div style={{ y: imageY }} className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <div
          className="h-full w-full bg-cover bg-center md:bg-left"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1758599879693-9e06f55a4ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932')",
          }}
        />
      </motion.div>

      {/* Text shifts to the LEFT */}
      <div className="relative z-10 w-full md:w-1/2 mr-auto bg-[#E8D7BA] p-8 md:p-16 lg:p-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl text-[#3F2A1D] font-bold mb-6 font-serif tracking-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-[#6F583B] leading-relaxed mb-4 whitespace-pre-line">
            {para}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- Card ---------------------------------- */
function ValuesSection({ heading, para }: ValuesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Image: slides up from -20% to 0% (centers with text)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#E8D7BA]/30"
    >
      {/* Left: Parallax Image */}
      <motion.div style={{ y: imageY }} className="absolute inset-y-0 left-0 w-full md:w-1/2">
        <div
          className="h-full w-full bg-cover bg-center md:bg-right"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1758599879693-9e06f55a4ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932')",
          }}
        />
      </motion.div>

      {/* Right: Text with Fade-In + Slide-In */}
      <div className="relative w-full md:w-1/2 ml-auto bg-[#E8D7BA] p-8 md:p-16 lg:p-20">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl text-[#3F2A1D] font-bold mb-6 font-serif tracking-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-[#6F583B] leading-relaxed mb-4 whitespace-pre-line">
            {para}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- Upgraded CTA ------------------------------ */
type CTAProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

function EngagementCTA({
  eyebrow = "Ready to begin?",
  title = "Begin Your HWS Conversation",
  subtitle = "To discover which pathway suits you—or to book a confidential consultation—reach out to our team. Every HWS journey begins with a conversation.",
  primaryLabel = "Contact Our Team",
  primaryHref = "/contact",
  secondaryLabel = "Retreats & Restorative Escapes",
  secondaryHref = "/retreats-restorative",
}: CTAProps) {
  const reduce = useReducedMotion();
  const navigate = useNavigate()

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 -z-10" />
      {/* Vertical warmth */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#E8D7BA]/0 via-[#E8D7BA]/40 to-[#DCC7A3]/60" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[1100px] rounded-full bg-[radial-gradient(closest-side,rgba(152,120,79,0.18),transparent_70%)] blur-2xl" />
      {/* Subtle grain pattern for depth */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<?xml version=\\'1.0\\' encoding=\\'UTF-8\\'?><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'140\\' height=\\'140\\' viewBox=\\'0 0 40 40\\'><defs><pattern id=\\'p\\' width=\\'40\\' height=\\'40\\' patternUnits=\\'userSpaceOnUse\\'><circle cx=\\'1\\' cy=\\'1\\' r=\\'.7\\' fill=\\'%236E5A41\\' opacity=\\'0.15\\'/></pattern></defs><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23p)\\'/></svg>')",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border border-[#CBB792] bg-[#F2E7D5]/80 backdrop-blur-sm p-8 md:p-12 shadow-[0_10px_30px_rgba(63,42,29,0.10)]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BFA883] bg-white/60 px-3 py-1 text-xs font-medium tracking-wide text-[#6E5A41] shadow-sm">
            <span className="size-1.5 rounded-full bg-[#6E5A41]" />
            {eyebrow}
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-serif tracking-tight text-3xl md:text-4xl font-bold text-[#3F2A1D]">
            {title}
          </h2>

          {/* Subcopy */}
          <p className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed text-[#6F583B]">
            {subtitle}
          </p>

          {/* Actions */}
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            {/* Primary CTA */}
            <motion.a
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { y: 0 }}
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#3F2A1D] text-[#F2E7D5] hover:bg-[#342318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F2A1D]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE4D2] transition-colors"
              aria-label={primaryLabel}
            >
              <Mail className="mr-2 h-4 w-4 opacity-90" />
              <span className="font-semibold">{primaryLabel}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>

            {/* Secondary CTA */}
            <a
              onClick={() => navigate("/retreats-restorative")}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#3F2A1D]/70 text-[#5A462E] hover:bg-[#3F2A1D]/5 hover:text-[#3F2A1D]  decoration-[#A48962]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F2A1D]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE4D2]"
              aria-label={secondaryLabel}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              {secondaryLabel}
            </a>
          </div>

          {/* Micro trust bar */}
          <div className="mt-6 text-xs text-[#7B6647]/80">
            Your privacy is respected. We typically respond within 1 business day.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------- Page Composition ---------------------------- */
const Levelofengagement: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-20 md:pt-24 px-4 md:px-0 overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Three Ways to Engage</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          For clients seeking flexibility in how they engage with us, HWS offers three distinct pathways. Each
          reflects a different level of intensity, access, and integration, ensuring that our approach adapts to
          every client's unique lifestyle and goals.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        <ValuesSection heading={contents[0].header} para={contents[0].para} />
        <ValuesSectionReverse heading={contents[1].header} para={contents[1].para} />
        <ValuesSection heading={contents[2].header} para={contents[2].para} />
      </div>

      {/* Upgraded CTA */}
      <EngagementCTA />
    </div>
  );
};

export default Levelofengagement;
