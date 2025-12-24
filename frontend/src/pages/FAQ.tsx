'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import LandingComponent from '@/components/landingComponent';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is holistic wellness?',
      answer:
        'Holistic wellness is an approach to health that considers the whole person—body, mind, spirit, and emotions—in the quest for optimal health and wellness. It focuses on achieving balance and harmony in all aspects of life.',
    },
    {
      question: 'How long are the programmes?',
      answer:
        'Programme durations vary from 4 to 16 weeks depending on which path you choose. Each programme is designed to provide comprehensive guidance while allowing flexibility for your schedule. The Complete Wellness Package is our most extensive offering at 16 weeks.',
    },
    {
      question: 'Do I need prior experience?',
      answer:
        'No prior experience is necessary! Our programmes are designed to accommodate all levels, from complete beginners to advanced practitioners. Our experienced instructors will guide you at your own pace.',
    },
    {
      question: 'Can I switch programmes?',
      answer:
      "Yes, you can switch between programmes. We understand that your wellness journey may evolve, and we're here to support you. Contact our team to discuss programme changes and we'll help you transition smoothly.",
    },
    {
      question: 'What should I bring to sessions?',
      answer:
        'For most sessions, wear comfortable clothing that allows freedom of movement. For yoga and movement classes, bring a mat if you have one (we also provide mats). A water bottle and open mind are always recommended!',
    },
  ];

  const faqs2 = [
    {
      question: 'Are sessions available online?',
      answer:
        'Yes! We offer both in-person and virtual sessions to accommodate your preferences and schedule. Virtual sessions provide the same quality instruction and can be accessed from anywhere.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We require at least 24 hours notice for cancellations to receive a full refund or credit. Cancellations made less than 24 hours before the scheduled session will be charged 50% of the session fee.',
    },
    {
      question: 'Do you offer corporate wellness programmes?',
      answer:
        'Absolutely! We create customized corporate wellness programmes tailored to your organization\'s needs. These can include on-site classes, wellness workshops, and employee wellness challenges. Contact us to discuss corporate packages.',
    },
    {
      question: 'How do I track my progress?',
      answer:
        'Members receive access to our wellness portal where you can track your sessions, set goals, and monitor your progress. You’ll also have regular check-ins with your instructor to discuss your journey and adjust your programme as needed.',
    },
    {
      question: 'What makes your approach different?',
      answer:
        'We combine ancient wisdom with modern science, offering evidence-based practices delivered by experienced practitioners. Our holistic approach addresses all aspects of well-being, and we create personalized pathways that honor your unique journey.',
    },
  ]
  return (
    <section
      className="md:mt-15 pb-12 md:pb-16 bg-[#176a79]/10 overflow-hidden"
      style={{ fontFamily: 'Josefin Sans' }}
    >
      <LandingComponent image='https://images.unsplash.com/photo-1722449304159-95aa3684c415?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Frequently Asked Questions'
      titleSize="text-4xl md:text-5xl" />
      
      {/* --- MODIFIED CONTAINER CLASS --- */}
      <div className="container mx-auto px-4 md:px-6 lg:px-12 mt-8 md:mt-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 lg:gap-20">
      {/* --- END MODIFIED CONTAINER CLASS --- */}
          
          {/* === Accordion Column 1 === */}
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white  overflow-hidden border border-transparent hover:border-[#C8A97E]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="px-7 py-5 text-left hover:no-underline group [&>svg]:hidden">
                    {/* Kept inner structure to show the ChevronDown icon */}
                    <div className="flex items-center justify-between w-full pr-2">
                      <span className="font-medium text-base text-[#053d57] dark:text-foreground leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown className="w-5 h-5 text-[#053d57] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-7 pb-6 pt-1 text-[#053d57] dark:text-[#8B6F47] text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          {/* === Accordion Column 2 === */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs2.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white  overflow-hidden border border-transparent hover:border-[#C8A97E]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="px-7 py-5 text-left hover:no-underline group [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full pr-2">
                      <span className="font-medium text-base text-[#053d57] dark:text-foreground leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown className="w-5 h-5 text-[#053d57] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-7 pb-6 pt-1 text-[#053d57] dark:text-[#8B6F47] text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;