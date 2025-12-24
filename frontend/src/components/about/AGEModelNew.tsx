import React from "react";

const stepdata = [
  {
    image:
      "https://images.unsplash.com/photo-1527904188605-3424bcc2d107?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Awareness",
    description:
      "Awareness is the foundation of transformation. It enables individuals to recognise patterns, understand their responses, and live with intention.",
      textColor: "text-[#053d57]"
  },
  {
    image:
      "https://images.unsplash.com/photo-1517384084767-6bc118943770?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Grace",
    description:
      "Grace represents balance in motion. It is the ability to move through life’s complexities with composure, empathy, and emotional harmony.",
      textColor: "text-[#053d57]"
  },
  {
    image:
      "https://images.unsplash.com/photo-1621685474063-40b5904d330c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Energy",
    description:
      "Energy is the expression of vitality and purpose. By supporting physical health, cognitive clarity, and emotional resilience, clients sustain performance over time.",
      textColor: "text-[#053d57]"
  },
];

const Card = ({ image, heading, description,textColor }) => {
  return (
    <div
      className="relative flex-1 min-h-[200px] md:min-h-[420px]  text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#053d57]/80" /> */}

      <div className={`relative z-10 h-full flex flex-col justify-start pt-12 md:pt-20 lg:pt-28 items-center px-4 md:px-8 lg:px-10 ${textColor}`}>
        <h3 className="text-xl md:text-3xl font-semibold mb-3 md:mb-4">{heading}</h3>
        <p className="text-md md:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const AGEModelNew = () => {
  return (
    <div>
      <section
      className="relative w-full  bg-[#176a79] flex flex-col  "
      style={{ fontFamily: "Josefin Sans" }}
    >
      {/* TEXT CONTENT */}
      <div className="max-w-5xl mx-auto text-center px-4 md:px-6 pt-20" style={{fontFamily:"Josefin Sans"}}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#ebf0f2] mb-4 md:mb-6">
          Our AGE Model
        </h2>
        <p className="text-[#ebf0f2]/80 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
          The AGE Model reflects the philosophy at the heart of HWS. It offers a practical and lifelong framework that guides clients toward vitality and purposeful living. Awareness, Grace, and Energy form a continuous cycle of renewal and create an approach to longevity where well-being becomes not a destination, but a way of being
        </p>
      </div>

      {/* CARDS (HANGING EFFECT) */}
      <div className=" mx-auto translate-y-8  w-[95%] md:w-[90%] lg:w-[85%] z-20">
        <div className="flex flex-col md:flex-row shadow-2xl overflow-hidden">
          {stepdata.map((step, index) => (
            <Card key={index} {...step} />
          ))}
        </div>
      </div>

      
    </section>
    <div className="bg-transparent h-[100px] w-full"/>
    </div>
  );
};

export default AGEModelNew;
