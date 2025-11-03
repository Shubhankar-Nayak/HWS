import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "../components/ui/use-toast"; 

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'Switzerland',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    if (errors[name]) setErrors({ ...errors, [name]: '' });
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
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          subject: formData.subject,
          message: formData.message,
        }),
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ 
          firstName: '', 
          lastName: '', 
          email: '', 
          phone: '',
          country: 'Switzerland',
          subject: '', 
          message: '' 
        });
        toast({
          title: 'Message Sent!',
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
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
    <div className="min-h-screen w-full pt-20 md:pt-24 bg-[#FAF7F2]">
      {/* Hero Section */}
      <motion.div 
        className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        {/* Background Image with Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
          }}
        >
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">Contact HWS</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Begin Your Journey to Lasting Wellbeing
          </p>
        </div>
      </motion.div>

      {/* Discretion Section */}
      <section className="py-20 bg-gradient-to-br from-[#3F2A1D] to-[#8B6F47] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              variants={fadeUpVariant}
              className="text-xl text-[#E8D7BA] leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Whether you are beginning your wellbeing journey or seeking ongoing support, our team is here to assist with complete confidentiality and care. Every enquiry is handled with absolute discretion, ensuring your privacy and comfort from the first exchange onward.
            </motion.p>
            <motion.p 
              variants={fadeUpVariant}
              className="text-xl text-[#E8D7BA] leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              We understand that each individual's circumstances are unique. Our approach is therefore entirely personalised.
            </motion.p>
            <motion.p 
              variants={fadeUpVariant}
              className="text-xl text-[#E8D7BA] leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              A private consultation can be arranged at your convenience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-serif text-[#3F2A1D] text-center mb-16"
            >
              TREATMENT ENQUIRIES FORM
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-green-50 border border-green-200 rounded-2xl p-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-green-800 mb-4">Thank You for Your Enquiry</h3>
                <p className="text-green-700 text-lg">
                  Your message has been received. Our team will contact you within 24 hours to discuss your needs in complete confidence.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-[#3F2A1D] text-white px-6 py-3 rounded-lg hover:bg-[#8B6F47] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                variants={fadeUpVariant}
                onSubmit={handleSubmit} 
                className="bg-[#FAF7F2] p-8 md:p-12 rounded-2xl border border-[#E8D7BA] shadow-lg"
              >
                <div className="space-y-8">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-[#3F2A1D] font-semibold mb-3 font-serif">
                        FIRST NAME*
                      </label>
                      <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.firstName 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-[#E8D7BA] focus:border-[#8B6F47] focus:ring-[#8B6F47]/20'
                        }`}
                        required 
                        placeholder="Your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[#3F2A1D] font-semibold mb-3 font-serif">
                        LAST NAME*
                      </label>
                      <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.lastName 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-[#E8D7BA] focus:border-[#8B6F47] focus:ring-[#8B6F47]/20'
                        }`}
                        required 
                        placeholder="Your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-[#3F2A1D] font-semibold mb-3 font-serif">
                        EMAIL*
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-[#E8D7BA] focus:border-[#8B6F47] focus:ring-[#8B6F47]/20'
                        }`}
                        required 
                        placeholder="name@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[#3F2A1D] font-semibold mb-3 font-serif">
                        PHONE*
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.phone 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-[#E8D7BA] focus:border-[#8B6F47] focus:ring-[#8B6F47]/20'
                        }`}
                        required 
                        placeholder="+41 78 123 45 67"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Dropdown Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-[#3F2A1D] font-semibold mb-3 font-serif">COUNTRY*</label>
                      <select 
                        name="country" 
                        id="country" 
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.country 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-[#E8D7BA] focus:border-[#8B6F47] focus:ring-[#8B6F47]/20'
                        }`}
                        required
                      >
                        <option value="Switzerland">Switzerland</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-2">{errors.country}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-[#3F2A1D] font-semibold mb-3 font-serif">SUBJECT*</label>
                      <select 
                        name="subject" 
                        id="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.subject 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-[#E8D7BA] focus:border-[#8B6F47] focus:ring-[#8B6F47]/20'
                        }`}
                        required
                      >
                        <option value="">Select inquiry type</option>
                        <option value="Mental Health Assessment">Mental Health Assessment</option>
                        <option value="Private Wellbeing Programme">Private Wellbeing Programme</option>
                        <option value="Executive Engagement">Executive Engagement</option>
                        <option value="Concierge Service">Concierge Service</option>
                        <option value="General Information">General Information</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[#3F2A1D] font-semibold mb-3 font-serif">
                      MESSAGE*
                    </label>
                    <textarea 
                      name="message" 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all resize-vertical min-h-[120px] ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-[#E8D7BA] focus:border-[#8B6F47] focus:ring-[#8B6F47]/20'
                      }`}
                      rows={4}
                      required
                      placeholder="Please share how we can support your wellbeing journey..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <p className="text-gray-600 text-sm text-center">
                        All enquiries are handled with strict confidentiality
                      </p>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#3F2A1D] text-white py-4 rounded-lg hover:bg-[#8B6F47] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          'SUBMIT ENQUIRY'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl font-serif text-[#3F2A1D] text-center mb-16"
            >
              OUR LOCATIONS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#E8D7BA]"
              >
                <h3 className="text-2xl font-serif text-[#3F2A1D] mb-6">Zurich Headquarters</h3>
                <div className="space-y-4 text-[#8B6F47]">
                  <p className="leading-relaxed">
                    <strong className="text-[#3F2A1D]">Holistic Wellbeing Solutions AG</strong><br/>
                    Zollikerstrasse 60<br/>
                    8702 Zurich-Zollikon<br/>
                    Switzerland
                  </p>
                  <div className="pt-4 border-t border-[#E8D7BA]">
                    <p className="space-y-2">
                      <span className="block">
                        <strong className="text-[#3F2A1D]">Treatment:</strong>{' '}
                        <a href="tel:+41435051070" className="hover:text-[#3F2A1D] transition-colors">+41 44 505 10 70</a>
                      </span>
                      <span className="block">
                        <strong className="text-[#3F2A1D]">General:</strong>{' '}
                        <a href="tel:+41435411152" className="hover:text-[#3F2A1D] transition-colors">+41 43 541 11 52</a>
                      </span>
                      <span className="block">
                        <strong className="text-[#3F2A1D]">Email:</strong>{' '}
                        <a href="mailto:info@hws.com" className="hover:text-[#3F2A1D] transition-colors">info@hws.com</a>
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#E8D7BA]"
              >
                <h3 className="text-2xl font-serif text-[#3F2A1D] mb-6">International Offices</h3>
                <div className="space-y-6 text-[#8B6F47]">
                  <div>
                    <h4 className="font-semibold text-[#3F2A1D] mb-2">Geneva</h4>
                    <p className="leading-relaxed">
                      Quai Gustave-Ador 54 – 54A, 2nd Floor<br/>
                      1207 Geneva<br/>
                      Switzerland
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E8D7BA]">
                    <h4 className="font-semibold text-[#3F2A1D] mb-2">New York</h4>
                    <p className="leading-relaxed">
                      4 East 70th Street - Suite 1A<br/>
                      New York NY 10021<br/>
                      United States
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;