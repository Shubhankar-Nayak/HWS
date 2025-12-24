import React,{useState} from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Programmes from "./pages/Programmes";
import ExclusiveAccess from "./pages/ExclusiveAccess";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Retreats_Restoration from "./pages/Retreats_Restorative";
import CarePathway from "./pages/Carepathway";
import LevelsOfEngagement from "./pages/Levelofengagement";
import Assessment from "./pages/Assessments";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import ContactButton from "@/components/ContactButton";
import MentalHealth from "./pages/mental_health";
import WellnessLongevity from "./pages/wellness_longevity";
import HolisticWellbeing from "./pages/holistic_wellbeing";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isProgrammesHover, setIsProgrammesHover] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout setIsProgrammesHover={setIsProgrammesHover} isProgrammesHover={isProgrammesHover}>
        <ContactButton />
        <Routes>
          <Route path="/" element={<Home setIsProgrammesHover={setIsProgrammesHover} isProgrammesHover={isProgrammesHover} />} />
          {/* <Route path="/programmes" element={<Programmes />} /> */}
          <Route path="/programmes/mental-health" element={<MentalHealth />} />
          <Route path="/programmes/wellness-longevity" element={<WellnessLongevity />} />
          <Route path="/programmes/holistic-wellbeing" element={<HolisticWellbeing />} />
          {/* <Route path="/exclusive-access" element={<ExclusiveAccess />} /> */}
          {/* <Route path="/booking" element={<Booking />} /> */}
          <Route path="/carepathway" element={<CarePathway setIsProgrammesHover={setIsProgrammesHover} isProgrammesHover={isProgrammesHover}  />} />
          {/* <Route path="/assessment" element={<Assessment />} /> */}
          <Route path="/levels-of-engagement" element={<LevelsOfEngagement />} />
          <Route path="/retreats-restorative" element={<Retreats_Restoration />} />
          {/* <Route path="/mybookings" element={<MyBookings />} /> */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>  
  );
};

const App = () => (
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </QueryClientProvider>
    </Provider>
  </GoogleOAuthProvider>
);

export default App;