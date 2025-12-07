import {motion } from 'framer-motion'
import LandingComponent from '@/components/landingComponent'
import HoverExpandPanels from '@/components/HoveredPanels';
import ContentSection from '@/components/ContentsectionWithTimeline';


const panels = [
    {
      id: 1,
      title: "Mindfulness and Cognitive Function",
      description:
        "attention control, focus, cognitive balance",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Sleep and Recovery Analysis",
      description:
        "detailed interview, pattern review, subjective and objective measurement",
      img: "https://images.unsplash.com/photo-1556229174-5fbf36c81f0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Nutrition and Metabolic Review  ",
      description:
        "nutrient balance, metabolic function, lifestyle patterns",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Movement and Physical Vitality",
      description:
        "mobility, strength, endurance, recovery capacity",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Longevity Screening",
      description:
        "early identification of health risks and long-term optimisation strategies",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
  ];


const wellness_longevity = () => {
  return (
    <motion.div>
        <LandingComponent image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" title="Wellness Longevity" subtitle='These programmes integrate medical insight with restorative practice to enhance vitality, strengthen cognitive performance, and support long-term health. Each pathway is tailored to the individual, offering a balanced approach that aligns physical wellbeing and sustainable lifestyle habits.' />

        <ContentSection 
        image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        title='Sleep and Recovery Science'
        content='Our sleep and recovery pathways explore the patterns, behaviours, and physiological factors that influence rest and daytime functioning. These programmes help clients identify disruptions, understand their impact on wellbeing, and establish restorative sleep routines tailored to their lifestyle. Together, these layers provide a detailed understanding of sleep structure and recovery capacity, informing practical recommendations for improved rest.'
        subheading=''
        timelineItems={["Initial Interview","Subjective Measures","Objective Measures"]}
        button="Speak with us to explore further"/>

        <ContentSection 
        image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        title='Mindfulness Courses'
        content='Our mindfulness offering strengthens emotional regulation, attentional stability, and presence. These programmes support clients in navigating stress, enhancing clarity, and cultivating grounded awareness. Each course is delivered with structure, allowing skills to build gradually and sustainably.'
        subheading='Programmes include:'
        timelineItems={['Mindfulness for Life','Introducing Mindfulness','Finding Peace in a Frantic World','Deeper Mindfulness','Guided meditation',"Breathwork and reflective practices"]}
        button="Begin a Private Conversation"
        reverse={true}/>

        <ContentSection 
        image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        title='Nutrition and Metabolic Health'
        content='Nutrition plays a central role in energy, focus, and long-term wellbeing. Our programmes evaluate metabolic patterns and dietary habits to support sustainable optimisation. Recommendations are practical, personalised, and designed to support daily performance.'
        subheading='Includes:'
        timelineItems={['Functional nutrition planning', 'Metabolic profiling', 'Integrative dietetics',"Nutritional guidance for energy, cognitive clarity, and longevity"]}
        button="Speak with us to explore further"
        />

        <ContentSection 
        image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        title='Movement and Fitness'
        content='Movement programmes are tailored to enhance mobility, strength, alignment, and overall vitality. The aim is not intensity, but balanced, sustainable physical optimisation. Each approach is adapted to individual goals, whether improving energy, reducing tension, or supporting long-term physical health.'
        timelineItems={['Restorative yoga','Mindful movement','Mindful walking','Strength conditioning','Endurance coaching',"Programmes for mobility, posture, and balance"]}
        button="Begin a Private Conversation"
        reverse={true}
        />

        <ContentSection 
        image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        title='Longevity'
        content='Our longevity work integrates preventive screening, lifestyle mapping, and wellbeing assessment to establish a clear trajectory for long-term health and cognitive vitality. This focus area is designed to support sustained performance and graceful ageing, aligning daily choices with long-term goals.'
        timelineItems={['Preventive health screening', 'Mental health and wellbeing assessment', 'Lifestyle evaluation',"Long-term optimisation planning"]}
        button="Speak With Us to Explore Further"
        />

        <LandingComponent image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" title="Wellness & Longevity Assessments" subtitle='Our assessments evaluate the biological and lifestyle factors that shape cognitive vitality, performance, and healthy ageing. The insights inform tailored programmes designed to improve energy, recovery, and long-term wellbeing.' />

        <HoverExpandPanels panels={panels} />
    </motion.div>

  )
}

export default wellness_longevity