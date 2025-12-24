import { ChevronDown } from "lucide-react";   // ← make sure this import exists
import {useState} from "react";

const HoverExpandPanels: React.FC<{
  panels: { id: number; title: string; description: string; img: string; toptitle?:string }[];
}> = ({ panels }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <div className="w-full">

      {/* Desktop Layout */} 
      <div className="hidden lg:flex w-full h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
        {panels.map((panel, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                h-full transition-all duration-500 ease-in-out relative
                
                ${hovered === null ? "w-1/4" : isHovered ? "w-3/4" : "w-[8%]"}
              `}
              style={{
                backgroundImage: `url(${panel.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                fontFamily: "Josefin Sans",
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="relative h-full flex flex-col justify-start mt-32 md:mt-40 lg:mt-48 items-center text-center p-4 md:p-5 lg:p-6 text-white">
                <h2
                  className={`text-lg md:text-xl font-semibold transition-opacity duration-300 
                  ${isHovered ? "opacity-100" : "opacity-90"}`}
                >
                  {panel.toptitle}
                </h2>
                <h2
                  className={`text-xl font-semibold transition-opacity duration-300 
                  ${isHovered ? "opacity-100" : "opacity-90"}`}
                >
                  {panel.title}
                </h2>

                <p
                  className={`mt-3 md:mt-4 text-sm md:text-base leading-relaxed transition-all duration-500 
                  ${isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}`}
                >
                  {panel.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */} 
      <div className="lg:hidden flex flex-col w-full">
        {panels.map((panel, index) => {
          const isOpen = openMobile === index;

          return (
            <div key={panel.id} className="w-full ">

              {/* HEADER WITH REPLACED ARROW */}
              <button
                onClick={() => setOpenMobile(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 bg-white"
              >
                <h2 className="text-base md:text-lg font-semibold text-[#053d57]">
                  {panel.title}
                </h2>

                {/* 🔥 NEW ARROW (from your working code) */}
                <ChevronDown
                  className={`
                    w-5 h-5 text-[#053d57]
                    transition-transform duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-500 
                  ${isOpen ? "max-h-[600px]" : "max-h-0"}`}
              >
                <div
                  className="w-full h-48 sm:h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${panel.img})` }}
                ></div>

                <p className="p-4 text-[#053d57] text-sm leading-relaxed bg-white">
                  {panel.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HoverExpandPanels;
