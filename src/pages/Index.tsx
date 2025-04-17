
import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="voluntier-app">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <footer className="footer py-8 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="logo mb-4 md:mb-0">
              <span className="font-lexend font-bold text-xl">Volun<span className="text-accent">Tier</span></span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} VolunTier. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
