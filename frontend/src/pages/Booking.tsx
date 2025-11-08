import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch } from "../hooks/useAppSelector";
import { createBooking } from "../store/slices/bookingSlice";

// Import wellness images
import img1 from "@/assets/landingbg1.jpg";
import img2 from "@/assets/landingbg1.jpg";
import img3 from "@/assets/landingbg1.jpg";
import img4 from "@/assets/landingbg1.jpg";
import img5 from "@/assets/landingbg1.jpg";

const stepImages = [img1, img2, img3, img4, img5];

// Framer Motion Variants – Alternating Direction
const rowVariants = {
  enter: (step: number) => ({
    x: step === 1 ? 300 : step % 2 === 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (step: number) => ({
    x: step % 2 === 0 ? -300 : 300,
    opacity: 0,
  }),
};

const Booking = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programme: "",
    date: undefined as Date | undefined,
    time: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const programmes = [
    { name: "Mental Health", desc: "Optimise Psychological Wellbeing" },
    { name: "Wellness & Longevity", desc: "Balance body and mind" },
    { name: "Holistic Wellbeing", desc: "Eat and live consciously" },
  ];

  const timeslots = [
    "08:00 AM",
    "09:30 AM",
    "11:00 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM",
  ];

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await dispatch(
        createBooking({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          programme: formData.programme,
          date: formData.date?.toISOString() || "",
          time: formData.time,
          message: formData.additionalInfo,
        })
      ).unwrap();

      toast({
        title: "Booking Confirmed!",
        description: "We'll send a confirmation email shortly.",
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      const errorMessage = err?.message || "Please try again.";
      setSubmitError(errorMessage);
      toast({
        title: "Booking Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date();
  const next7Days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return d;
  });

  return (
    <div className="min-h-screen py-24" style={{fontFamily:"system-ui"}}>
      <div className="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className="text-5xl md:text-6xl font-bold text-[#3F2A1D] mb-3"
            style={{fontFamily:"system-ui"}}
          >
            Book Your Session
          </h1>
          <p className="text-[#6B5B35]/80 text-lg">
            Begin your path to complete well-being
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="mb-8 md:mb-16 relative px-4 md:px-8 lg:px-48">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent"></div>
          <div className="relative flex justify-between">
            {[
              "Personal Info",
              "Programme",
              "Date & Time",
              "Notes",
              "Review",
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center z-10"
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-500 shadow-lg border-2
                    ${
                      currentStep > i
                        ? "bg-gradient-to-br from-[#C8A97E] to-[#B89463] text-white border-[#C8A97E] shadow-[#C8A97E]/30"
                        : "bg-white text-[#8B6F47] border-[#E8D5A3]/50"
                    }`}
                >
                  {i + 1}
                </div>
                <span className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-[#4E3B23]/70 whitespace-nowrap hidden sm:block">
                  {title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#FFF9E9] via-[#F7F0DD] to-[#E8D7BA]">
          {/* Image + Form with Alternating Slide */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={currentStep}>
              <motion.div
                key={currentStep}
                custom={currentStep}
                variants={rowVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 130,
                  damping: 22,
                }}
                className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`order-1 lg:order-${
                    currentStep % 2 === 1 ? 1 : 2
                  }`}
                >
                  <div className="relative h-full overflow-hidden ">
                    <img
                      src={stepImages[currentStep - 1]}
                      alt={`Step ${currentStep}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Form Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`order-2 lg:order-${
                    currentStep % 2 === 1 ? 2 : 1
                  }`}
                >
                  <div className=" p-6 md:p-10">
                    {/* STEP 1 — Personal Info */}
                    {currentStep === 1 && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setCurrentStep(2);
                        }}
                        style={{fontFamily:"system-ui"}}
                      >
                        <h2 className="text-3xl font-semibold text-[#3E2C1A] mb-6 font-serif">
                          Your Information
                        </h2>
                        <div className="flex flex-col flex-wrap  gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#4E3B23] mb-1">
                              First Name *
                            </label>
                            <input
                              type="text"
                              value={formData.firstName}
                              onChange={(e) =>
                                updateFormData({ firstName: e.target.value })
                              }
                              required
                              className="w-full border border-[#C8A97E]/50 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#C8A97E] focus:outline-none"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#4E3B23] mb-1">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              value={formData.lastName}
                              onChange={(e) =>
                                updateFormData({ lastName: e.target.value })
                              }
                              required
                              className="w-full border border-[#C8A97E]/50 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#C8A97E] focus:outline-none"
                              placeholder="Enter your last name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#4E3B23] mb-1">
                              Email *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                updateFormData({ email: e.target.value })
                              }
                              required
                              className="w-full border border-[#C8A97E]/50 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#C8A97E] focus:outline-none"
                              placeholder="your.email@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#4E3B23] mb-1">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                updateFormData({ phone: e.target.value })
                              }
                              placeholder="+44 ... (optional)"
                              className="w-full border border-[#C8A97E]/50 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#C8A97E] focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end mt-6">
                          <button 
                            className="bg-[#3F2A1D] text-white w-full px-6 py-2 rounded-md hover:bg-[#4B2E16] transition disabled:bg-[#8B6F47]/40 disabled:cursor-not-allowed"
                            disabled={!formData.firstName || !formData.lastName || !formData.email}
                          >
                            Next
                          </button>
                        </div>
                      </form>
                    )}

                    {/* STEP 2 — Programme */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="text-3xl font-semibold text-[#3E2C1A] mb-4 font-serif">
                          Select a Programme
                        </h2>
                        <div className="flex flex-col flex-wrap gap-5">
                          {programmes.map((p) => (
                            <div
                              key={p.name}
                              onClick={() =>
                                updateFormData({ programme: p.name })
                              }
                              className={`cursor-pointer border rounded-xl p-5 transition-all ${
                                formData.programme === p.name
                                  ? "bg-[#EAD9B0] border-[#B89463] shadow-md"
                                  : "bg-white hover:bg-[#FAF3E5] border-[#C8A97E]/40"
                              }`}
                            >
                              <h3 className="font-semibold text-lg text-[#3F2A1D]">
                                {p.name}
                              </h3>
                              <p className="text-sm text-[#4E3B23]/80 mt-1">
                                {p.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-5 mt-8">
                          <button
                            onClick={() => setCurrentStep(1)}
                            className="px-6 py-2 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] hover:bg-[#F8F1E2] flex-1"
                          >
                            Back
                          </button>
                          <button
                            onClick={() =>
                              formData.programme && setCurrentStep(3)
                            }
                            disabled={!formData.programme}
                            className={`flex-1 px-6 py-2 rounded-md text-white transition ${
                              formData.programme
                                ? "bg-[#3F2A1D] hover:bg-[#4B2E16]"
                                : "bg-[#8B6F47]/40 cursor-not-allowed"
                            }`}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 — Date & Time */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="text-4xl font-semibold text-[#3E2C1A] mb-6 font-serif">
                          Pick a Date & Time
                        </h2>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                          {next7Days.map((d) => {
                            const formatted = d.toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            });
                            const selected =
                              formData.date?.toDateString() ===
                              d.toDateString();
                            return (
                              <div
                                key={d.toDateString()}
                                onClick={() => updateFormData({ date: d })}
                                className={`cursor-pointer border rounded-lg text-center py-3 transition ${
                                  selected
                                    ? "bg-[#EAD9B0] border-[#B89463] shadow-md text-[#3F2A1D]"
                                    : "bg-white border-[#C8A97E]/40 hover:bg-[#F8F1E2]"
                                }`}
                              >
                                <p className="text-sm font-medium">
                                  {formatted}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <h3 className="text-lg font-medium text-[#3F2A1D] mb-3">
                          Select Time Slot
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {timeslots.map((time) => (
                            <div
                              key={time}
                              onClick={() => updateFormData({ time })}
                              className={`px-4 py-2 rounded-full border cursor-pointer transition ${
                                formData.time === time
                                  ? "bg-[#C8A97E] text-white border-[#B89463]"
                                  : "bg-white border-[#C8A97E]/40 text-[#4E3B23] hover:bg-[#FAF3E5]"
                              }`}
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-5  mt-8">
                          <button
                            onClick={() => setCurrentStep(2)}
                            className="px-6 py-2 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] hover:bg-[#F8F1E2] flex-1"
                          >
                            Back
                          </button>
                          <button
                            onClick={() =>
                              formData.date &&
                              formData.time &&
                              setCurrentStep(4)
                            }
                            disabled={!formData.date || !formData.time}
                            className={`px-6 py-2 rounded-md text-white transition flex-1 ${
                              formData.date && formData.time
                                ? "bg-[#3F2A1D] hover:bg-[#4B2E16]"
                                : "bg-[#8B6F47]/40 cursor-not-allowed"
                            }`}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 4 — Additional Info */}
                    {currentStep === 4 && (
                      <div className="flex flex-col h-full min-h-[400px]">
                        <h2 className="text-4xl font-semibold text-[#3E2C1A] mb-6 font-serif">
                          Additional Information
                        </h2>

                        {/* Textarea grows to fill remaining space */}
                        <textarea
                          value={formData.additionalInfo}
                          onChange={(e) =>
                            updateFormData({ additionalInfo: e.target.value })
                          }
                          placeholder="Share anything we should know before your session…"
                          rows={5}
                          className="flex-1 w-full border border-[#C8A97E]/50 rounded-md px-4 py-3 text-base 
                 focus:ring-2 focus:ring-[#C8A97E] focus:outline-none resize-none"
                        />

                        {/* Buttons fixed at bottom */}
                        <div className="flex gap-5 mt-6">
                          <button
                            onClick={() => setCurrentStep(3)}
                            className="px-6 py-3 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] 
                   hover:bg-[#F8F1E2] transition flex-1 font-medium"
                          >
                            Back
                          </button>
                          <button
                            onClick={() => setCurrentStep(5)}
                            className="px-6 py-3 rounded-md bg-[#3F2A1D] text-white hover:bg-[#4B2E16] 
                   transition flex-1 font-medium"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 5 — Review */}
                    {currentStep === 5 && (
                      <div>
                        <h2 className="text-2xl font-semibold text-[#3E2C1A] mb-6 font-serif">
                          Review Your Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#3B2B1C]">
                          <div>
                            <p>
                              <b>Name:</b> {formData.firstName}{" "}
                              {formData.lastName}
                            </p>
                            <p>
                              <b>Email:</b> {formData.email}
                            </p>
                            <p>
                              <b>Phone:</b> {formData.phone || "—"}
                            </p>
                          </div>
                          <div>
                            <p>
                              <b>Programme:</b> {formData.programme}
                            </p>
                            <p>
                              <b>Date:</b>{" "}
                              {formData.date
                                ? new Date(formData.date).toLocaleDateString()
                                : "—"}
                            </p>
                            <p>
                              <b>Time:</b> {formData.time || "—"}
                            </p>
                          </div>
                        </div>
                        {formData.additionalInfo && (
                          <div className="mt-4 border border-[#C8A97E]/40 rounded-md p-3 bg-[#FFF9E9]/60">
                            {formData.additionalInfo}
                          </div>
                        )}
                        <div className="flex gap-5 mt-8">
                          <button
                            onClick={() => setCurrentStep(4)}
                            className="px-6 py-2 rounded-md border border-[#C8A97E]/60 text-[#4E3B23] hover:bg-[#F8F1E2] flex-1"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`px-6 py-2 rounded-md text-white flex-1 ${
                              isSubmitting
                                ? "bg-[#4E3B23]/60 cursor-not-allowed"
                                : "bg-[#3F2A1D] hover:bg-[#4B2E16]"
                            }`}
                          >
                            {isSubmitting
                              ? "Submitting…"
                              : "Confirm Booking"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Error Display */}
          {submitError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center text-sm text-red-600 font-medium"
            >
              {submitError}
            </motion.p>
          )}
        </div>
        {/* Footer */}
        <p className="mt-12 text-center text-xs text-[#6B5B35]/70">
          Secure • Private • Confirmation within 24 hours
        </p>
      </div>
    </div>
  );
};

export default Booking;