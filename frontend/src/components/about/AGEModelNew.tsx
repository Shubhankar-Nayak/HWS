import React from 'react'

const stepdata = [
  {
    image:"https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Awareness",
    description: "Awareness is the foundation of transformation. It enables individuals to recognise patterns, understand their responses, and live with intention.",
  },
  {
    image:"https://images.unsplash.com/photo-1531816247963-c7b28072d65d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Grace",
    description: "Grace represents balance in motion. It is the ability to move through life’s complexities with composure, empathy, and emotional harmony, expressing strength with steadiness rather than force.",
  },
  {
    image:"https://images.unsplash.com/photo-1551523601-2a4edf72d521?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Energy",
    description: "Energy is the expression of vitality and purpose. By supporting physical health, cognitive clarity, and emotional resilience, clients are able to sustain meaningful performance over time.",
  },
];


const Card = ({image, heading, description}) => {
    return (
    <div style={{
        fontFamily: "Playfair Display",
        backgroundImage: `url('${image}')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity:1
    }}> 
        <div className='flex flex-col items-center items-center gap-2 min-h-[200px] px-10 py-5 '>
            <h3 className='font-semibold text-2xl '>{heading}</h3>
            <p className='w-full text-center text-base '>{description}</p>
        </div>
    </div>)
}

const AGEModelNew = () => {
  return (
    <div className=' relative flex flex-col py-10 bg-[#f5f0e6] items-center justify-center w-full' style={{fontFamily:"Playful Display"}}>
        <div className=' bg-[#053d57]/90 w-full flex flex-col items-center justify-center py-10  '>
        <h2 className=" max-w-4xl mx-auto  text-left text-3xl md:text-4xl lg:text-5xl  text-[#ebf0f2] font-serif mb-6 leading-tight">
            The AGE Model <br /> Awareness, Grace, Energy
          </h2>
          <p className="w-full text-left text-base sm:text-lg md:text-lg text-[#ebf0f2] max-w-4xl mx-auto leading-relaxed px-4">
            The AGE Model reflects the philosophy at the heart of HWS. It offers a practical and lifelong framework that guides clients toward vitality and purposeful living. Awareness, Grace, and Energy form a continuous cycle of renewal and create an approach to longevity where well-being becomes not a destination, but a way of being.
          </p></div>
        <div className=' w-full bg-[#f5f0e6] h-[200px]'/>
        <div className='absolute top-[300px] z-10 flex items-center justify-evenly gap-10 px-10 '>
            {stepdata.map((step, index) => (
                <Card 
                    key={index}
                    {...step}/>
            ))}
        </div>
    </div>
  )
}

export default AGEModelNew