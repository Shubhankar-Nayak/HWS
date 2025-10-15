import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
        'Yes, you can switch between programmes. We understand that your wellness journey may evolve, and we\'re here to support you. Contact our team to discuss programme changes and we\'ll help you transition smoothly.',
    },
    {
      question: 'What should I bring to sessions?',
      answer:
        'For most sessions, wear comfortable clothing that allows freedom of movement. For yoga and movement classes, bring a mat if you have one (we also provide mats). A water bottle and open mind are always recommended!',
    },
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
        'Members receive access to our wellness portal where you can track your sessions, set goals, and monitor your progress. You\'ll also have regular check-ins with your instructor to discuss your journey and adjust your programme as needed.',
    },
    {
      question: 'What makes your approach different?',
      answer:
        'We combine ancient wisdom with modern science, offering evidence-based practices delivered by experienced practitioners. Our holistic approach addresses all aspects of well-being, and we create personalized pathways that honor your unique journey.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our programmes and services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 shadow-soft gradient-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center gradient-hero rounded-xl p-8 shadow-elevated">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            We're here to help! Reach out to our team for personalized assistance.
          </p>
          <a
            href="/contact"
            className="text-primary font-semibold hover:underline"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
