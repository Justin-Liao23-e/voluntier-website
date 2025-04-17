
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Index = () => {
  return (
    <div className="voluntier-app">
      <Navbar />
      <Hero />
      <Features />
      
      <section className="download-section py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-lexend text-4xl md:text-5xl font-bold mb-6">
            Download <span className="text-accent">VolunTier</span>
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Start to use VolunTier on iOS App Store, Android will be released later
          </p>
          <a href="#" className="inline-block">
            <Button className="rounded-full px-8 py-6 bg-black hover:bg-black/90 text-white">
              <Apple className="w-6 h-6 mr-2" />
              Get the App
            </Button>
          </a>
        </div>
      </section>

      <footer className="footer py-8 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VolunTier. All rights reserved.
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Index;
