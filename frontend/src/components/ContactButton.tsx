'use client';

import { useState } from 'react';
import { X, ChevronRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

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
      const response = await fetch('https://formspree.io/f/xjkodjyq', {
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

  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setIsContactFormOpen(true)}
          className="group bg-gradient-to-b from-[#C8A97E]/20 to-[#B89463]/20 backdrop-blur-md text-[#3F2A1D] py-14 hover:from-[#C8A97E]/30 hover:to-[#B89463]/30 transition-all duration-300 flex flex-col items-center justify-center shadow-xl border border-white/20"
        >
          <div className="rotate-[-90deg] flex items-center gap-2">
            <ChevronRight className="h-5 text-[#3F2A1D] group-hover:translate-x-1 transition-transform" />
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
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 250, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[740px] max-w-[95vw] overflow-y-auto z-50
                         bg-gradient-to-br from-[#FFF9E9]/95 via-[#F7F0DD]/95 to-[#E8D7BA]/95 
                         backdrop-blur-xl border-l border-[#C8A97E]/40 shadow-2xl"
            >
              <div className="relative p-6 sm:p-10 space-y-6 sm:space-y-10">
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className="absolute top-6 right-6 text-[#3F2A1D] hover:text-[#C8A97E] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="text-center"
                >
                  <h2
                    className="text-sm uppercase tracking-[0.2em] text-[#3F2A1D]/80 mb-8"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    How Can We Help?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto mb-10">
                    <div>
                      <p className="text-[#3F2A1D]/90 font-medium">General Enquiries</p>
                      <p className="text-2xl font-bold text-[#3F2A1D]">+41 43 541 11 52</p>
                      <p className="text-[#3F2A1D]/80">info@holisticwellness.com</p>
                    </div>
                    <div>
                      <p className="text-[#3F2A1D]/90 font-medium">Treatment Enquiries</p>
                      <p className="text-2xl font-bold text-[#3F2A1D]">+41 44 505 10 70</p>
                      <p className="text-[#3F2A1D]/80">treatment@holisticwellness.com</p>
                    </div>
                  </div>

                  <h3 className="uppercase tracking-[0.25em] text-[#3F2A1D]/80 text-sm">
                    Treatment Enquiries Form
                  </h3>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
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
                            <label className="block text-xs uppercase tracking-wide text-[#3F2A1D]/80 mb-2">
                              Name*
                            </label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Name"
                              className={`w-full bg-[#FAF6EE]/80 border border-[#C8A97E]/40 text-[#3F2A1D]
                              placeholder:text-[#3F2A1D]/30 focus:ring-1 focus:ring-[#C8A97E]/70
                              hover:shadow-[0_0_12px_#C8A97E40] transition-all ${
                                errors.firstName ? 'border-red-500' : ''
                              }`}
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wide text-[#3F2A1D]/80 mb-2">
                              Last Name*
                            </label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Last Name"
                              className={`w-full bg-[#FAF6EE]/80 border border-[#C8A97E]/40 text-[#3F2A1D]
                              placeholder:text-[#3F2A1D]/30 focus:ring-1 focus:ring-[#C8A97E]/70
                              hover:shadow-[0_0_12px_#C8A97E40] transition-all ${
                                errors.lastName ? 'border-red-500' : ''
                              }`}
                            />
                          </div>
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <div>
                            <label className="block text-xs uppercase tracking-wide text-[#3F2A1D]/80 mb-2">
                              Mail*
                            </label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Mail"
                              className="w-full bg-[#FAF6EE]/80 border border-[#C8A97E]/40 text-[#3F2A1D] placeholder:text-[#3F2A1D]/30 focus:ring-1 focus:ring-[#C8A97E]/70 hover:shadow-[0_0_12px_#C8A97E40] transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wide text-[#3F2A1D]/80 mb-2">
                              Subject*
                            </label>
                            <select
                              value={formData.subject}
                              onChange={(e) =>
                                setFormData({ ...formData, subject: e.target.value })
                              }
                              className="w-full h-10 rounded bg-[#FAF6EE]/80 border border-[#C8A97E]/40 text-[#3F2A1D] px-3 focus:ring-1 focus:ring-[#C8A97E]/70 hover:shadow-[0_0_12px_#C8A97E40] transition-all"
                            >
                              <option value="">Subject*</option>
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
                          <label className="block text-xs uppercase tracking-wide text-[#3F2A1D]/80 mb-2">
                            Message*
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="Message*"
                            className="w-full bg-[#FAF6EE]/80 border border-[#C8A97E]/40 text-[#3F2A1D] placeholder:text-[#3F2A1D]/30 focus:ring-1 focus:ring-[#C8A97E]/70 hover:shadow-[0_0_12px_#C8A97E40] transition-all"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    variants={fadeUp}
                    custom={4}
                    className="flex items-start gap-3 text-[#3F2A1D]/80 text-sm"
                  >
                    <input type="checkbox" className="mt-1 accent-[#3F2A1D]" />
                    <span>
                      I agree to <a className="underline">Terms of Service</a> and{' '}
                      <a className="underline">Privacy Policy</a>.
                    </span>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={5}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-[#3F2A1D] hover:bg-[#4B2E16] text-white font-medium rounded shadow-lg shadow-[#C8A97E]/20 hover:shadow-[#C8A97E]/40 transition-all"
                    >
                      {isSubmitting ? 'Sending…' : 'Submit'}
                    </Button>
                  </motion.div>

                  {isSubmitted && (
                    <motion.div
                      variants={fadeUp}
                      custom={6}
                      className="text-center mt-4 p-4 rounded-lg bg-[#C8A97E]/10 border border-[#C8A97E]/40 text-[#3F2A1D]"
                    >
                      Thank you! Your message has been sent.
                    </motion.div>
                  )}
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
