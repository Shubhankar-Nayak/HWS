import React, { useState } from "react";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const panels = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1589490047559-a1c13ec25b87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NvdHRpc2glMjBoaWdobGFuZHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,

    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1658737980934-5868142b06a2?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HoverExpandPanels: React.FC<{
  panels: {
    id: number;
    title: string;
    description: string;
    list?: string[];
    img: string;
    link?: string;
  }[];
}> = ({ panels }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const navigate = useNavigate();

  const total = panels.length;
  const defaultW = 100 / total;
  const expandedW = total > 3 ? 60 : 70;
  const remainingW = (100 - expandedW) / (total - 1);

  return (
    <div className="w-full">
      {/* DESKTOP */}
      <div className="hidden lg:flex w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
        {panels.map((panel, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative h-full transition-all duration-500   "
              style={{
                width:
                  hovered === null
                    ? `${defaultW}%`
                    : isHovered
                    ? `${expandedW}%`
                    : `${remainingW}%`,
                backgroundImage: `url(${panel.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30" />

              <div className="relative h-full flex flex-col justify-center items-center text-center p-4 md:p-5 lg:p-6 text-white">
                <h2 className="text-lg md:text-xl font-semibold">{panel.title}</h2>

                <p
                  className={`mt-3 md:mt-4 text-xs md:text-sm transition-all duration-500 ${
                    isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
                  }`}
                >
                  {panel.description}
                </p>

                {isHovered && panel.list && (
                  <div className="mt-4 md:mt-6 text-left w-4/5">
                    <ul className="space-y-1 text-xs md:text-sm">
                      {panel.list.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>

                    {panel.link && (
                      <button
                        onClick={() => navigate(`/${panel.link}`)}
                        className="mt-3 md:mt-4 px-3 md:px-4 py-2 text-xs md:text-sm border border-white rounded-md hover:bg-white hover:text-black transition"
                      >
                        Explore More
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE */}
      <div className="lg:hidden flex flex-col w-full">
        {panels.map((panel, index) => {
          const isOpen = openMobile === index;

          return (
            <div key={panel.id} className="border-b border-[#c4b08f]">
              <button
                onClick={() => setOpenMobile(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-[#f5f0e6]"
              >
                <h2 className="text-lg font-semibold text-[#3F2A1D]">
                  {panel.title}
                </h2>
                <ChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[700px]" : "max-h-0"
                }`}
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${panel.img})` }}
                />

                <div className="p-4 bg-white">
                  <p className="text-sm text-[#6B5B35]">{panel.description}</p>

                  {panel.list && (
                    <ul className="mt-3 text-sm space-y-1">
                      {panel.list.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Retreats_Restorative: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full  text-neutral-800"
      style={{ fontFamily: "Josefin Sans" }}
    >
      <LandingComponent
        image="https://images.unsplash.com/photo-1556046785-90b800412d80?auto=format&fit=crop&q=80&w=2000"
        title="Retreats &amp; Restorative Escapes"
        titleSize="text-5xl"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center flex-col bg-[#176a79]/10 text-left gap-3 py-20 md:py-[100px] mb-16 px-5 md:px-24"
      >
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bold w-full text-center px-10">
          The HWS Retreat Experience
        </p>
        <p className=" max-w-3xl text-[#053d57] text-base mb-5 ">
          Our retreats offer an immersive expression of the HWS philosophy,
          designed for those seeking space and renewal away from daily demands.
          Each experience blends clinical insight with restorative practices in
          settings chosen for their privacy and natural beauty.{" "}
        </p>
        <p className="max-w-3xl text-[#053d57] text-base mb-5">
          Designed as tailored extensions of your wellbeing journey, retreats
          integrate therapeutic dialogue, mindfulness, restorative movement,
          nutrition, and guided reflection into a cohesive programme shaped
          around your intentions.
        </p>
        <p className="max-w-3xl text-[#053d57] text-base mb-5">
          They can be arranged as part of any engagement level or undertaken as
          a focused period of renewal.
        </p>
        <p className="max-w-3xl text-[#053d57] text-base mb-5">
          Every retreat begins with a private consultation. From there, we
          design a personalised itinerary that aligns body, mind, and spirit.
        </p>
        </div>
        <Button
          asChild
          size="lg"
          className="text-lg px-8 bg-[#053d57]/70 hover:bg-[#053d57]"
        >
          <Link to="/contact">Explore Retreat Experiences</Link>
        </Button>
      </motion.div>

      <div
        className="flex flex-col items-center justify-center  gap-3 w-full text-[#053d57] p-10 md:p-0
      "
      >
        <p className="text-3xl font-bold w-full text-center px-10 ">
          Destinations
        </p>
        <p className="max-w-3xl text-[#053d57] text-base mb-5">
          Our retreat locations are selected with care and intention, each
          chosen to complement the goals of your programme. Settings include
          Bali, Tuscany, the Himalayas, and the Scottish Highlands, environments
          that offer privacy and natural harmony.{" "}
        </p>
        <HoverExpandPanels panels={panels} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center flex-col bg-[#176a79]/10 text-left gap-3 py-20 md:py-[100px]  px-5 md:px-24"
      >
        <p className="text-3xl font-bold w-full text-center px-10">
          Experience
        </p>
        <p className=" max-w-3xl text-[#053d57] text-base mb-5 ">
          Each retreat is guided by our multidisciplinary team, ensuring
          clinical integrity and personalised support throughout your stay.
          Whether integrated into your broader HWS pathway or experienced
          independently, our retreats offer a considered space to rest and
          restore balance in a way that endures long after you return home.
        </p>
        <Button
          asChild
          size="lg"
          className="text-lg px-8 bg-[#053d57]/70 hover:bg-[#053d57]"
        >
          <Link to="/contact">Begin Your Retreat Enquiry </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Retreats_Restorative;
