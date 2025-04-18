import React from "react";
import Navbar from "@/components/sections/Navbar";
import FeaturesDetailed from "@/components/sections/FeaturesDetailed";
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const FeaturesPage = () => (
  <div className="voluntier-app">
    <Navbar />
    <FeaturesDetailed />
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
  </div>
);

export default FeaturesPage;