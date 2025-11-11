"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Check, CalendarDays, MapPin, Mail } from "lucide-react";

/* ----------------------------- Motion Variants ---------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* --------------------------------- Data ---------------------------------- */
const DESTINATIONS: { name: string; img: string; desc: string }[] = [
  {
    name: "Hinterland Countryside",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    desc: "Secluded landscapes for quiet reflection and nature-led routines.",
  },
  {
    name: "Seaside Sanctuaries",
    img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    desc: "Ocean horizons, slow mornings, restorative breathwork by the shore.",
  },
  {
    name: "Mountain Retreats",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    desc: "High-altitude clarity for focused renewal and guided movement.",
  },
];

const INCLUSIONS: string[] = [
  "Confidential consultation & goal setting",
  "Clinical oversight & tailored therapies",
  "Mindfulness & guided reflection",
  "Restorative movement & breathwork",
  "Nutrition & sleep hygiene support",
  "Post-retreat integration plan",
];

/* ------------------------------- Component -------------------------------- */
const Retreats_Restorative: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen w-full bg-[#FAF7F2] text-neutral-800">
      {/* ================================ HERO ================================ */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative h-[72vh] min-h-[460px] w-full overflow-hidden"
      >
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556046785-90b800412d80?auto=format&fit=crop&q=80&w=2000')",
          }}
          aria-hidden="true"
        />
        {/* Vignette + warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

        {/* Titles */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            

            <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Retreats &amp; Restorative Escapes
            </h1>

           
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80">
          <motion.div
            initial={reduce ? {} : { y: 0, opacity: 0.8 }}
            animate={reduce ? {} : { y: 6, opacity: 1 }}
            transition={reduce ? {} : { repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 text-sm"
          >
            <ArrowDown className="h-4 w-4" />
            Explore retreats
          </motion.div>
        </div>
      </motion.header>

      {/* ============================== CONTENT ============================== */}
      <main className="relative -mt-12 md:-mt-16 pb-14">
        <section className="max-w-6xl mx-auto px-6">
          {/* Card shell */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-black/5 p-6 md:p-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-10 md:space-y-14"
            >
              {/* Experience intro */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold">The HWS Retreat Experience</h2>
                </div>
                <div className="md:col-span-8">
                  <p className="leading-relaxed">
                    Designed for those seeking time away from daily demands, each retreat blends clinical
                    insight with restorative practice in serene, private settings. Retreats can be arranged
                    as part of any of our engagement pathways, tailored to complement your ongoing wellbeing
                    plan or serve as a focused period of renewal. Our multidisciplinary team may include
                    mindfulness, therapeutic dialogue, restorative movement, nutrition, and guided reflection —
                    all curated to your specific needs.
                  </p>
                </div>
              </motion.div>

              <hr className="border-neutral-200" />

              {/* Destinations */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold">Destinations</h2>
                  <p className="mt-3 text-sm text-neutral-600">
                    Locations are selected to align with your goals and therapeutic focus.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {DESTINATIONS.map((d) => (
                      <li
                        key={d.name}
                        className="group overflow-hidden rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-shadow"
                      >
                        <div
                          className="h-32 w-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${d.img}')` }}
                          aria-hidden="true"
                        />
                        <div className="p-4">
                          <div className="flex items-center gap-2 text-[13px] text-neutral-500">
                            <MapPin className="h-3.5 w-3.5" />
                            Destination
                          </div>
                          <h3 className="mt-1 font-medium">{d.name}</h3>
                          <p className="mt-1 text-sm text-neutral-600">{d.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <hr className="border-neutral-200" />

              {/* Inclusions (chips) */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold">What’s Included</h2>
                </div>
                <div className="md:col-span-8">
                  <ul className="flex flex-wrap gap-2">
                    {INCLUSIONS.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1.5 text-sm"
                      >
                        <Check className="h-4 w-4 text-emerald-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <hr className="border-neutral-200" />

              {/* Experience Process (timeline) */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold">Experience</h2>
                </div>
                <div className="md:col-span-8">
                  <ol className="relative border-s border-neutral-200 pl-6 space-y-6">
                    {[
                      {
                        t: "Private Consultation",
                        d: "Define intentions, constraints, and desired outcomes with your HWS advisor.",
                      },
                      {
                        t: "Personalised Plan",
                        d: "We design a clinically guided itinerary aligning body, mind, and environment.",
                      },
                      {
                        t: "Immersive Retreat",
                        d: "On-site or hybrid delivery with multidisciplinary care and daily reflection.",
                      },
                      {
                        t: "Integration",
                        d: "Post-retreat follow-ups and habits plan to sustain clarity and renewal.",
                      },
                    ].map((s, idx) => (
                      <li key={s.t} className="relative">
                        <h4 className="font-medium">{`${idx + 1}. ${s.t}`}</h4>
                        <p className="text-sm text-neutral-600 mt-0.5">{s.d}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============================== CTA CARD ============================== */}
        
      </main>
    </div>
  );
};

export default Retreats_Restorative;
