
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
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VolunTier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
