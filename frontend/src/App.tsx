import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Programmes from "./pages/Programmes";
import ExclusiveAccess from "./pages/ExclusiveAccess";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import CarePathway from "./pages/Carepathway";
import LevelsOfEngagement from "./pages/Levelofengagement";
import Assessment from "./pages/Assessments";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import ContactButton from "@/components/ContactButton";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ContactButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programmes />} />
          {/* <Route path="/exclusive-access" element={<ExclusiveAccess />} /> */}
          <Route path="/booking" element={<Booking />} />
          <Route path="/carepathway" element={<CarePathway />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/levels-of-engagement" element={<LevelsOfEngagement />} />
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