import React, { useState, useEffect } from "react";

interface SpacingConfig {
  base?: number;
  extra?: number;
  dynamicScale?: number;
  labelWidth?: number;
}

interface Props {
  items: string[];
  centerText?: string;
  interval?: number;
  spacing?: SpacingConfig;
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

  /** ---------------------------
   * 🔥 RESPONSIVE SIZING
   * --------------------------- */
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const size = isMobile ? 260 : 400;     // Whole container
  const radius = isMobile ? 95 : 180;   // Circle radius
  const center = size / 2;               // Center auto-adjusts

  // Spacing
  const baseDistance = spacing.base ?? (isMobile ? 25 : 40);
  const extraDistance = spacing.extra ?? (isMobile ? 20 : 45);
  const dynamicScale = spacing.dynamicScale ?? 1;
  const labelWidth = spacing.labelWidth ?? (isMobile ? 110 : 160);

  return (
    <div className="w-full flex justify-center py-10">
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        {/* CIRCLE */}
        <svg width={size} height={size} className="absolute top-0 left-0">
          <path
            d={`
              M ${center} ${center - radius}
              A ${radius} ${radius} 0 1 1 ${center - 1} ${center - radius}
            `}
            fill="none"
            stroke="#e8ddd7"
            strokeWidth={isMobile ? 1.5 : 2}
          />
        </svg>

        {/* CENTER TEXT */}
        <div
          className="absolute w-full text-center px-6 text-[#6c7678] leading-relaxed"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: isMobile ? "12px" : "14px",
          }}
        >
          {centerText}
        </div>

        {/* DOTS + LABELS */}
        {items.map((item, i) => {
          const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;

          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

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
                  left: x - (isActive ? (isMobile ? 6 : 8) : (isMobile ? 3 : 5)),
                  top: y - (isActive ? (isMobile ? 6 : 8) : (isMobile ? 3 : 5)),
                  width: isActive ? (isMobile ? 12 : 16) : (isMobile ? 6 : 10),
                  height: isActive ? (isMobile ? 12 : 16) : (isMobile ? 6 : 10),
                  backgroundColor: isActive ? "#b38a7c" : "#6e8a8a",
                }}
              />

              {/* LABEL */}
              <div
                className="absolute text-center transition-all duration-500"
                style={{
                  width: labelWidth,
                  left: labelX - labelWidth / 2,
                  top: labelY - 10,
                }}
              >
                <p
                  className={
                    isActive
                      ? "text-[#b38a7c] font-semibold"
                      : "text-[#6e8a8a]"
                  }
                  style={{
                    fontSize: isMobile ? "11px" : "14px",
                    lineHeight: isMobile ? "14px" : "18px",
                  }}
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
