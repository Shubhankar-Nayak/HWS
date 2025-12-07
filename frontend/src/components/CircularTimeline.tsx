import React, { useState, useEffect } from "react";

interface SpacingConfig {
  base?: number;           // minimum distance from circle
  extra?: number;          // extra distance applied at left/right
  dynamicScale?: number;   // strength of dynamic angle-based spacing
  labelWidth?: number;     // width of each label box (px)
}

interface Props {
  items: string[];
  centerText?: string;
  interval?: number;
  spacing?: SpacingConfig;  // <-- NEW PROP
}

const CircularTimeline: React.FC<Props> = ({
  items,
  centerText = "",
  interval = 3000,
  spacing = {},
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % items.length),
      interval
    );
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const radius = 180;
  const center = 200;

  // Default spacing values if not provided
  const baseDistance = spacing.base ?? 40;
  const extraDistance = spacing.extra ?? 45;
  const dynamicScale = spacing.dynamicScale ?? 1;
  const labelWidth = spacing.labelWidth ?? 160;

  return (
    <div className="w-full flex justify-center py-10">
      <div className="relative" style={{ width: 400, height: 400 }}>
        
        {/* CIRCLE */}
        <svg width={400} height={400} className="absolute top-0 left-0">
          <path
            d={`
              M ${center} ${center - radius}
              A ${radius} ${radius} 0 1 1 ${center - 1} ${center - radius}
            `}
            fill="none"
            stroke="#e8ddd7"
            strokeWidth="2"
          />
        </svg>

        {/* CENTER TEXT */}
        <div className="absolute w-full top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6 text-[#6c7678] text-sm leading-relaxed">
          {centerText}
        </div>

        {/* DOTS + LABELS */}
        {items.map((item, i) => {
          const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;

          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          // Dynamic spacing (gives full control)
          const dynamicPush =
            extraDistance * Math.abs(Math.cos(angle)) * dynamicScale;

          const labelDistance = baseDistance + dynamicPush;

          const labelX = x + Math.cos(angle) * labelDistance;
          const labelY = y + Math.sin(angle) * labelDistance;

          const isActive = i === active;

          return (
            <div key={i}>
              {/* DOT */}
              <div
                className="absolute rounded-full transition-all duration-500"
                style={{
                  left: x - (isActive ? 8 : 5),
                  top: y - (isActive ? 8 : 5),
                  width: isActive ? 16 : 10,
                  height: isActive ? 16 : 10,
                  backgroundColor: isActive ? "#b38a7c" : "#6e8a8a",
                }}
              />

              {/* LABEL */}
              <div
                className="absolute text-center"
                style={{
                  width: labelWidth,
                  left: labelX - labelWidth / 2,
                  top: labelY - 12,
                }}
              >
                <p
                  className={`transition-all duration-500 ${
                    isActive ? "text-[#b38a7c] font-semibold" : "text-[#6e8a8a]"
                  }`}
                >
                  {item}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularTimeline;
