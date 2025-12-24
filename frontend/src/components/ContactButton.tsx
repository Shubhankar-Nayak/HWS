'use client';

import { useState } from 'react';
import { X, ChevronRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import PrivacyPolicy from "../assets/PrivacyPolicy.pdf";
import TermsofService from "../assets/PrivacyPolicy.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

const ContactButton = () => {
  const { toast } = useToast();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [country, setCountry] = useState('Switzerland');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpwogjpv', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        toast({
          title: 'Message Sent!',
          description: "We'll get back to you within 24 hours.",
        });
      } else throw new Error('Submission failed');
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = (file, filename) => {
    console.log("Downloading:", filename);
    const link = document.createElement("a");
    link.href = file;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setIsContactFormOpen(true)}
          className="group bg-gradient-to-b from-[#176a79]/20 to-[#176a79]/20 backdrop-blur-md text-[#053d57] py-14 w-20  hover:from-[#176a79]/30 hover:to-[#176a79]/30 transition-all duration-300 flex flex-col items-center justify-center shadow-xl "
        >
          <div className="rotate-[-90deg] flex items-center gap-2">
            <ChevronRight className="h-5 text-[#053d57] group-hover:translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest font-semibold whitespace-nowrap">
              Contact
            </span>
          </div>
        </button>
      </div>

      {/* Slide-out */}
      <AnimatePresence>
        {isContactFormOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsContactFormOpen(false)}
              style={{fontFamily:"Josefin Sans"}}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 250, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[540px] max-w-[75vw] overflow-y-auto z-50
                         bg-[#053d57]/80
                         backdrop-blur-xl  shadow-2xl"
            >
              <div className="relative p-6 sm:p-10 space-y-6 sm:space-y-10">
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className="absolute top-6 right-6 text-[#3F2A1D] hover:text-[#C8A97E] transition-colors"
                >
                  <X className="w-6 h-6" color='#ebf0f2' />
                </button>

                {/* Header */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="text-center"
                  style={{fontFamily:"Josefin Sans"}}
                >
                  <h2
                    className="text-sm uppercase tracking-[0.2em] text-[#ebf0f2] mb-8"
                  
                  >
                    How Can We Help?
                  </h2>

                  <div className="flex justify-center  gap-10 max-w-3xl mx-auto mb-10">
                    <div>
                      <p className="text-[#ebf0f2]/90 font-medium">General Enquiries</p>
                      <p className="text-2xl font-bold text-[#ebf0f2]">+44 7770 778104</p>
                      <p className="text-[#ebf0f2]">admin@holisticwell-beingsolutions.com</p>
                    </div>
                    
                  </div>

                  <h3 className="uppercase tracking-[0.25em] text-[#ebf0f2] text-sm">
                     Enquiries Form
                  </h3>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  style={{fontFamily:"Josefin Sans"}}
                >
                  {[
                    ['firstName', 'lastName'],
                    ['email', 'phone'],
                    ['country', 'subject'],
                    ['message'],
                  ].map((_, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {i === 0 && (
                        <>
                          <div>
                            <label className="block text-xs uppercase tracking-wide text-[#ebf0f2] mb-2">
                              Name*
                            </label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Name"
                              className={`w-full bg-white/70 hover:bg-white text-[#0b343b]
                              placeholder:text-[#0b343b] focus:bg-white
                              transition-all ${
                                errors.firstName ? 'border-red-500' : ''
                              }`}
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wide text-[#ebf0f2] mb-2">
                              Last Name*
                            </label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Last Name"
                              className={`w-full bg-white/70 hover:bg-white text-[#0b343b]
                              placeholder:text-[#0b343b] focus:bg-white transition-all ${
                                errors.lastName ? 'border-red-500' : ''
                              }`}
                            />
                          </div>
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <div>
                            <label className="block text-xs uppercase tracking-wide text-[#ebf0f2] mb-2">
                              Mail*
                            </label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Mail"
                              className="w-full bg-white/70 hover:bg-white text-[#0b343b]
                              placeholder:text-[#0b343b] focus:bg-white transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wide text-[#ebf0f2] mb-2">
                              Subject
                            </label>
                            <select
                              value={formData.subject}
                              onChange={(e) =>
                                setFormData({ ...formData, subject: e.target.value })
                              }
                              className="w-full h-10 bg-white/70 hover:bg-white text-[#0b343b]
                              placeholder:text-[#0b343b] focus:bg-white px-3 transition-all"
                            >
                              <option value="">Subject</option>
                              <option>General enquiry</option>
                              <option>Treatment enquiry</option>
                              <option>Booking availability</option>
                              <option>Partnership</option>
                            </select>
                          </div>
                        </>
                      )}
                      
                      {i === 3 && (
                        <div className="col-span-2">
                          <label className="block text-xs uppercase tracking-wide text-[#ebf0f2] mb-2">
                            Message
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="Message"
                            className="w-full bg-white/70 hover:bg-white text-[#0b343b]
                              placeholder:text-[#0b343b] focus:bg-white transition-all"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    variants={fadeUp}
                    custom={4}
                    className="flex items-start gap-3 text-[#ebf0f2] text-sm"
                  >
                    <input type="checkbox" className="mt-1 accent-[#ebf0f2]" />
                    <span>
                      I agree to <a className="underline cursor-pointer" onClick={() => handleDownload(TermsofService, "HWS Terms of Service.pdf")}>Terms of Service</a> and{' '}
                      <a className="underline cursor-pointer" onClick={() => handleDownload(PrivacyPolicy, "HWS Privacy Policy.pdf")}>Privacy Policy</a>.
                    </span>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={5}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="w-full h-12 bg-white/70 hover:bg-white text-[#0b343b] font-medium  transition-all"
                    >
                      {isSubmitting ? 'Sending…' : 'Submit'}
                    </Button>
                  </motion.div>

                  {isSubmitted && (
                    <motion.div
                      variants={fadeUp}
                      custom={6}
                      className="text-center mt-4 p-4 rounded-lg bg-[#C8A97E]/10 border border-[#C8A97E]/40 text-[#ebf0f2]"
                    >
                      Thank you! Your message has been sent.
                    </motion.div>
                  )}
                  <p className='text-xs italic text-[#ebf0f2]'>Every enquiry is handled discreetly, ensuring your privacy from the first point of contact.</p>
                </motion.form>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButton;
