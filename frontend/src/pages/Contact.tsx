import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "../components/ui/use-toast";
import headquarters from "../assets/headquarters.jpg";
import LandingComponent from "@/components/landingComponent";
import PrivacyPolicy from "../assets/PrivacyPolicy.pdf";
import TermsofService from "../assets/PrivacyPolicy.pdf";

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
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Switzerland",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors({ ...errors, [name]: "" });
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
      const response = await fetch("https://formspree.io/f/xpwogjpv", {
        method: "POST",
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
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "Switzerland",
          subject: "",
          message: "",
        });
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
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
    <div
      className="min-h-screen w-full md:pt-24 bg-[#176a79]/10 md:-mt-16"
      style={{ fontFamily: "Josefin Sans" }}
    >
      {/* Hero Section */}
      <LandingComponent
        image="https://images.unsplash.com/photo-1759782527358-24534a90ac80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact"
        buttonText=""
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center flex-col text-center bg-transparent py-10 md:py-16 lg:py-[100px] my-8 md:my-12 lg:my-16 px-5 md:px-12 lg:px-24"
      >
        <p className=" max-w-3xl text-[#3f2a1d] text-sm md:text-base mb-4 md:mb-5 ">
          We offer a brief initial consultation to help clarify your needs and
          determine the most suitable way forward. From there, we tailor every
          aspect of engagement to your personal circumstances and preferences.
        </p>
        <p className=" max-w-3xl text-[#3f2a1d] text-sm md:text-base ">
          A private appointment can be arranged at your convenience.
        </p>
      </motion.div>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl lg:text-5xl text-[#3F2A1D] text-center mb-10 md:mb-12 lg:mb-16"
            >
              ENQUIRIES FORM
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-green-50 p-8 md:p-10 lg:p-12"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl text-green-800 mb-3 md:mb-4">
                  Thank You for Your Enquiry
                </h3>
                <p className="text-green-700 text-base md:text-lg">
                  Your message has been received. Our team will contact you
                  within 24 hours to discuss your needs in complete confidence.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-5 md:mt-6 bg-[#3F2A1D] text-white px-5 py-2 md:px-6 md:py-3 text-sm md:text-base hover:bg-[#053D57] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUpVariant}
                onSubmit={handleSubmit}
                className="bg-[#176a79]/10 p-6 md:p-8 lg:p-12 shadow-lg"
              >
                <div className="space-y-6 md:space-y-8">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-[#3F2A1D] font-semibold mb-3 "
                      >
                        FIRST NAME*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.firstName
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#053d57] focus:border-[#053d57] focus:ring-[#053d57]/20"
                        }`}
                        required
                        placeholder="Your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-[#3F2A1D] font-semibold mb-3 "
                      >
                        LAST NAME*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.lastName
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#053d57] focus:border-[#053d57] focus:ring-[#053d57]/20"
                        }`}
                        required
                        placeholder="Your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#3F2A1D] font-semibold mb-3 "
                      >
                        EMAIL*
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#053d57] focus:border-[#053d57] focus:ring-[#053d57]/20"
                        }`}
                        required
                        placeholder="name@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[#3F2A1D] font-semibold mb-3 "
                      >
                        PHONE*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#053d57] focus:border-[#053d57] focus:ring-[#053d57]/20"
                        }`}
                        required
                        placeholder="+41 78 123 45 67"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dropdown Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-[#3F2A1D] font-semibold mb-3 "
                      >
                        COUNTRY*
                      </label>
                      <select
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.country
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#053d57] focus:border-[#053d57] focus:ring-[#053d57]/20"
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
                        <p className="text-red-500 text-sm mt-2">
                          {errors.country}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[#3F2A1D] font-semibold mb-3 "
                      >
                        SUBJECT
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.subject
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-[#053d57] focus:border-[#053d57] focus:ring-[#053d57]/20"
                        }`}
                        required
                      >
                        <option value="">Select inquiry type</option>
                        <option value="Mental Health Assessment">
                          Mental Health Assessment
                        </option>
                        <option value="Private Wellbeing Programme">
                          Private Wellbeing Programme
                        </option>
                        <option value="Executive Engagement">
                          Executive Engagement
                        </option>
                        <option value="Concierge Service">
                          Concierge Service
                        </option>
                        <option value="General Information">
                          General Information
                        </option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#3F2A1D] font-semibold mb-3 "
                    >
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 transition-all resize-vertical min-h-[120px] ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-[#053d57] focus:border-[#053d57] focus:ring-[#053d57]/20"
                      }`}
                      rows={4}
                      required
                      placeholder="Please share how we can support your wellbeing journey..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    custom={4}
                    className="flex items-start gap-3 text-[#053d57] text-sm"
                  >
                    <input type="checkbox" className="mt-1 accent-[#053d57]" />
                    <span>
                      I agree to <a className="underline cursor-pointer" onClick={() => handleDownload(TermsofService, "HWS Terms of Service.pdf")}>Terms of Service</a> and{' '}
                      <a className="underline cursor-pointer" onClick={() => handleDownload(PrivacyPolicy, "HWS Privacy Policy.pdf")}>Privacy Policy</a>.
                    </span>
                  </motion.div>
                  {/* Submit Section */}
                  <div className="grid grid-cols-1 gap-4 items-center">
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 text-[#ebf0f2] bg-[#053d57]/70 hover:bg-[#053d57] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          "SUBMIT ENQUIRY"
                        )}
                      </button>
                    </div>

                    {/* --- ADDED DISCLAIMER TEXT HERE --- */}
                    <p className="text-center text-xs text-[#053D57] mt-2 italic">
                      Your privacy is paramount. All information submitted is
                      held in **strict confidence** and will not be shared with
                      any third party.
                    </p>
                    {/* ------------------------------------- */}
                  </div>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Address Section */}

      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-4xl  text-[#3F2A1D] text-center mb-16"
            >
              OUR LOCATIONS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <motion.div
                variants={fadeUpVariant}
                className="bg-white p-8 shadow-lg  h-full"
              >
                <h3 className="text-2xl  text-[#053D57] mb-6">Holborn</h3>
                <div className="space-y-4 text-[#053D57]">
                  <p className="leading-relaxed">
                    <strong className="text-[#053D57]">
                      Holistic Well-being Services Ltd
                    </strong>
                    <br />
                    12-18 Theobalds Rd,
                    <br />
                    London, WC1X 8SL
                    <br />
                    Holborn, United Kingdom
                  </p>
                  <div className="pt-4 border-t border-[#053d57]">
                    <p className="space-y-2">
                      <span className="block">
                        <strong className="text-[#053D57]">Phone:</strong>{" "}
                        <a
                          href="tel:+41435051070"
                          className="hover:text-[#053D57] transition-colors"
                        >
                          +44 7770 778104
                        </a>
                      </span>
                      <span className="block">
                        <strong className="text-[#053D57]">Email:</strong>{" "}
                        <a
                          href="mailto:info@hws.com"
                          className="hover:text-[#053D57] transition-colors"
                        >
                          admin@holisticwell-beingsolutions.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="h-full">
                <img
                  src={headquarters}
                  alt="Headquarters"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
