/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CaseStudies from "./components/CaseStudies";
import FlyersPortfolio from "./components/FlyersPortfolio";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppChatbot from "./components/WhatsAppChatbot";

export default function App() {
  // Read theme from localStorage or fallback to standard dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const cached = localStorage.getItem("theme");
    if (cached) {
      return cached === "dark";
    }
    // Default to dark mode for that professional tech/growth agency aesthetic
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-orange-500 selection:text-white transition-colors duration-300 antialiased font-sans">
      {/* Header Navigation */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Core Layout */}
      <main>
        {/* Hero Banner Fold */}
        <Hero />

        {/* About Bio Section */}
        <About />

        {/* Technical & Content Skills Grid */}
        <Skills />

        {/* Featured Case Studies Grid & Modals */}
        <CaseStudies />

        {/* Designs and Flyers Portfolio Section */}
        <FlyersPortfolio />

        {/* Experience Milestone Timeline */}
        <Experience />

        {/* Recommendations & Client Star Cards */}
        <Testimonials />

        {/* Contact Form Docket & Direct WhatsApp Channels */}
        <Contact />
      </main>

      {/* Copyright Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Chatbot */}
      <WhatsAppChatbot />
    </div>
  );
}

