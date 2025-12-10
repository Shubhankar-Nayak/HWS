import React,{useState} from "react";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {ChevronDown } from "lucide-react";



const panels = [
  {
    id:1,
    img: "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:2,
    img: "https://images.unsplash.com/photo-1589490047559-a1c13ec25b87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NvdHRpc2glMjBoaWdobGFuZHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id:3,

    img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
  }
]

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
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const navigate = useNavigate();

  // 🔥 Enforce exactly 3 items, just like your working 3-panel version
  const visiblePanels = panels.slice(0, 3);

  const total = visiblePanels.length; // always 3
  const defaultW = 100 / total; // ~33.33%
  const expandedW = 70; // hovered panel width
  const remainingW = (100 - expandedW) / (total - 1); // ~15% each

  return (
    <div className="w-full">

      {/* 🖥️ DESKTOP VERSION */}
      <div className="hidden lg:flex w-full h-[500px] overflow-hidden">
        {visiblePanels.map((panel, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="
                h-full transition-all duration-500 ease-in-out relative
                border-r last:border-r-0 border-[#c4b08f]
              "
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
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-white">

                {/* TITLE */}
                <h2
                  className={`text-xl font-semibold transition-opacity duration-300 
                    ${isHovered ? "opacity-100" : "opacity-90"}`}
                >
                  {panel.title}
                </h2>

                {/* DESCRIPTION */}
                <p
                  className={`
                    mt-4 text-sm leading-relaxed transition-all duration-500
                    ${isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
                  `}
                >
                  {panel.description}
                </p>

                {/* LIST + BUTTON (only if hovered) */}
                <div
                  className={`
                    mt-6 transition-all duration-500 text-left
                    ${isHovered ? "opacity-100 max-h-64" : "opacity-0 max-h-0"}
                  `}
                  style={{ width: "80%" }}
                >
                  {isHovered && panel.list && (
                    <>
                      <h3 className="text-md font-semibold mb-2 text-[#f0e6d2]">
                        Focus Areas
                      </h3>

                      <ul className="space-y-1 text-sm text-[#f4f4f4]">
                        {panel.list.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>

                      {panel.link && (
                        <button
                          onClick={() => navigate(`/${panel.link}`)}
                          className="
                            mt-4 px-4 py-2 rounded-md border border-white 
                            hover:bg-white hover:text-black transition-all duration-300
                          "
                        >
                          Explore More
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📱 MOBILE ACCORDION VERSION */}
      <div className="lg:hidden flex flex-col w-full">
        {visiblePanels.map((panel, index) => {
          const isOpen = openMobile === index;

          return (
            <div key={panel.id} className="w-full border-b border-[#c4b08f]">
              <button
                onClick={() => setOpenMobile(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 bg-[#f5f0e6]"
              >
                <h2 className="text-lg font-semibold text-[#3F2A1D]">
                  {panel.title}
                </h2>

                <ChevronDown
                  className={`
                    w-5 h-5 text-[#C8A97E]
                    transition-transform duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 
                ${isOpen ? "max-h-[650px]" : "max-h-0"}`}
              >
                <div
                  className="w-full h-48 sm:h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${panel.img})` }}
                ></div>

                <div className="p-4 bg-white">
                  <p className="text-[#6B5B35] text-sm leading-relaxed">
                    {panel.description}
                  </p>

                  {panel.list && (
                    <ul className="mt-3 space-y-1 text-sm text-[#6B5B35]">
                      {panel.list.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  )}

                  {panel.link && (
                    <button
                      onClick={() => navigate(`/${panel.link}`)}
                      className="
                        mt-4 px-4 py-2 rounded-md border border-black 
                        hover:bg-black hover:text-white transition-all duration-300
                      "
                    >
                      Explore More
                    </button>
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
    <div className="min-h-screen w-full mt-[48px] md:mt-0  text-neutral-800">
      <LandingComponent
        image="https://images.unsplash.com/photo-1556046785-90b800412d80?auto=format&fit=crop&q=80&w=2000"
        title="Retreats &amp; Restorative Escapes"
      />
      <div
        className="flex flex-col items-center justify-center gap-5 w-full text-[#3F2A1D]
      bg-[#faf7f2] p-12 bg-[#FAF7F2] text-base"
        style={{ fontFamily: "Playfair Display" }}
      >
        <p className="text-3xl font-bold w-full text-center md:px-10">
          The HWS Retreat Experience
        </p>
        <p className="max-w-4xl  text-left">
          Our retreats offer an immersive expression of the HWS philosophy,
          designed for those seeking space and renewal away from daily demands.
          Each experience blends clinical insight with restorative practices in
          settings chosen for their privacy and natural beauty.{" "}
        </p>
        <p className="max-w-4xl  text-left">
          Designed as tailored extensions of your wellbeing journey, retreats
          integrate therapeutic dialogue, mindfulness, restorative movement,
          nutrition, and guided reflection into a cohesive programme shaped
          around your intentions.
        </p>
        <p className="max-w-4xl  text-left">
          They can be arranged as part of any engagement level or undertaken as
          a focused period of renewal.
        </p>
        <p className="max-w-4xl  text-left">
          Every retreat begins with a private consultation. From there, we
          design a personalised itinerary that aligns body, mind, and spirit.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 bg-[#C8A97E] hover:bg-[#bfa176]"
          >
            <Link to="/contact">Explore Retreat Experiences </Link>
          </Button>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center py-10   gap-5 w-full text-[#3F2A1D]
      "
        style={{ fontFamily: "Playfair Display" }}
      >
        <p className="text-3xl font-bold w-full text-center px-10">
          Destinations
        </p>
        <p className="max-w-5xl text-lg text-center px-5 md:px-0">Our retreat locations are selected with care and intention, each chosen to complement the goals of your programme. Settings include Bali, Tuscany, the Himalayas, and the Scottish Highlands, environments that offer privacy and natural harmony. </p>
        <HoverExpandPanels panels={panels} />
      </div>

      <div
        className="flex flex-col items-center justify-center gap-5 w-full text-[#3F2A1D]
      bg-[#faf7f2] p-12"
        style={{ fontFamily: "Playfair Display" }}
      >
        <p className="text-3xl font-bold w-full text-center px-10">
         Experience
        </p>
        
        <p className="max-w-5xl text-lg text-center">
          Each retreat is guided by our multidisciplinary team, ensuring clinical integrity and personalised support throughout your stay. Whether integrated into your broader HWS pathway or experienced independently, our retreats offer a considered space to rest and restore balance in a way that endures long after you return home.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 bg-[#C8A97E] hover:bg-[#bfa176]"
          >
            <Link to="/contact">Begin Your Retreat Enquiry </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Retreats_Restorative;
