import { motion } from 'framer-motion'
import LandingComponent from '@/components/landingComponent'
import HoverExpandPanels from '@/components/HoveredPanels';
import ContentSection from '@/components/ContentsectionWithList';


const wellness_longevity = () => {
  return (
    <motion.div className=''>
      <LandingComponent 
        image="https://images.unsplash.com/photo-1562640843-214e78d87d83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        title="Wellness & Longevity" 
        textcolor='text-[]' 
      />

      <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className=" flex items-center flex-col  text-left py-10 md:py-16 lg:py-[130px]  bg-[#176a79]/10 px-5 md:px-12 lg:px-24 "
              style={{fontFamily:"Josefin Sans"}}
            >
              <p className=" max-w-3xl text-[#053d57] text-sm md:text-base mb-4 md:mb-5 ">
                These programmes integrate medical insight with restorative practice to enhance vitality, strengthen cognitive performance, and support long-term health. Each pathway is tailored to the individual, offering a balanced approach that aligns physical wellbeing and sustainable lifestyle habits.  
              </p>
              
            </motion.div>

      <ContentSection 
        image='https://images.unsplash.com/photo-1618400902169-4b230270abbb?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Sleep and Recovery Science'
        content='Our sleep and recovery pathways explore the patterns, behaviours, and physiological factors that influence rest and daytime functioning. These programmes help clients identify disruptions, understand their impact on wellbeing, and establish restorative sleep routines tailored to their lifestyle. Together, these layers provide a detailed understanding of sleep structure and recovery capacity, informing practical recommendations for improved rest.'
        timelineItems={["Initial Interview","Subjective Measures","Objective Measures"]}
        button="Speak with us to explore further"
        imageWidth="55%"
        textWidth="45%"
        paddingX="px-32"
      />

      <ContentSection 
        image='https://images.unsplash.com/photo-1526724038726-3007ffb8025f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '
        title='Mindfulness Courses'
        content='Our mindfulness offering strengthens emotional regulation, attentional stability, and presence. These programmes support clients in navigating stress, enhancing clarity, and cultivating grounded awareness. Each course is delivered with structure, allowing skills to build gradually and sustainably.'
        timelineItems={['Mindfulness for Life','Introducing Mindfulness','Finding Peace in a Frantic World','Deeper Mindfulness','Guided meditation',"Breathwork and reflective practices"]}
        button="Begin a Private Conversation"
        reverse={true}
        imageWidth="50%"
        textWidth="50%"
      />

      <ContentSection 
        image='https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Nutrition and Metabolic Health'
        content='Nutrition plays a central role in energy, focus, and long-term wellbeing. Our programmes evaluate metabolic patterns and dietary habits to support sustainable optimisation. Recommendations are practical, personalised, and designed to support daily performance.'
        timelineItems={['Functional nutrition planning', 'Metabolic profiling', 'Integrative dietetics',"Nutritional guidance for energy, cognitive clarity, and longevity"]}
        button="Speak with us to explore further"
        imageWidth="55%"
        textWidth="45%"
        paddingX="px-32"
      />

      <ContentSection 
        image='https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Movement and Fitness'
        content='Movement programmes are tailored to enhance mobility, strength, alignment, and overall vitality. The aim is not intensity, but balanced, sustainable physical optimisation. Each approach is adapted to individual goals, whether improving energy, reducing tension, or supporting long-term physical health.'
        timelineItems={['Restorative yoga','Mindful movement','Mindful walking','Strength conditioning','Endurance coaching',"Programmes for mobility, posture, and balance"]}
        button="Begin a Private Conversation"
        reverse={true}
        imageWidth="50%"
        textWidth="50%"
      />

      <ContentSection 
        image='https://images.unsplash.com/photo-1654089669464-dcc57c490d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Longevity'
        content='Our longevity work integrates preventive screening, lifestyle mapping, and wellbeing assessment to establish a clear trajectory for long-term health and cognitive vitality. This focus area is designed to support sustained performance and graceful ageing, aligning daily choices with long-term goals.'
        timelineItems={['Preventive health screening', 'Mental health and wellbeing assessment', 'Lifestyle evaluation',"Long-term optimisation planning"]}
        button="Speak With Us to Explore Further"
        imageWidth="55%"
        textWidth="45%"
        paddingX="px-32"
      />

    </motion.div>
  )
}

export default wellness_longevity
