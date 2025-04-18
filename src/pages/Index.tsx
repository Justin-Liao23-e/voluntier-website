import React, { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DownloadSection from "@/components/sections/Download";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="voluntier-app">
      <Navbar />
      <Hero />
      <Features />
      <DownloadSection />
      <footer className="footer py-8 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VolunTier. All rights reserved.
          </div>
          <div className="flex justify-center space-x-6 mt-4 text-2xl text-foreground hover:text-accent">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="mailto:hello@voluntier.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default Index;

// Scroll-to-top button that appears after scrolling down
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-accent text-white rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};
