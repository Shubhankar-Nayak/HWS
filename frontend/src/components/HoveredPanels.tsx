import { useState } from "react";


const HoverExpandPanels: React.FC<{panels: {id: number; title: string; description: string; img: string;}[]}> = ({panels}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full h-[450px] flex overflow-hidden">
      {panels.map((panel, index) => {
        const isHovered = hovered === index;

        return (
          <div
            key={panel.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`
              h-full transition-all duration-500 ease-in-out relative
              border-r last:border-r-0 border-[#c4b08f]
              ${hovered === null ? "w-1/4" : isHovered ? "w-3/4" : "w-[8%]"}
            `}
            style={{
              backgroundImage: `url(${panel.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* CONTENT */}
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-white">
              <h2
                className={`text-xl font-semibold transition-opacity duration-300
                ${isHovered ? "opacity-100" : "opacity-90"}
              `}
              >
                {panel.title}
              </h2>

              <p
                className={`mt-4 text-sm leading-relaxed transition-all duration-500
                ${isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
              `}
              >
                {panel.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HoverExpandPanels;