
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (navbarRef.current) {
        if (currentScrollY > lastScrollY.current) {
          navbarRef.current.classList.add("navbar-hidden");
        } else {
          navbarRef.current.classList.remove("navbar-hidden");
        }
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header ref={navbarRef} className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <div className="logo">
          <Link to="/" className="font-lexend font-bold text-2xl">Volun<span className="text-accent">Tier</span></Link>
        </div>
        
        <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="hidden md:flex space-x-8">
            <li><button onClick={() => scrollToSection("hero")} className="nav-link">Home</button></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><button onClick={() => scrollToSection("features")} className="nav-link">Features</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button></li>
          </ul>
        </nav>
        
        <Button 
          onClick={() => navigate('/beta')}
          className="cta-button hidden md:flex"
        >
          Join Beta
        </Button>
        
        <button 
          className="hamburger md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      
      <div className={`mobile-menu md:hidden ${isMenuOpen ? 'show' : ''}`}>
        <ul className="flex flex-col space-y-4 p-6">
          <li><button onClick={() => scrollToSection("hero")} className="w-full text-left py-2">Home</button></li>
          <li><Link to="/about" className="block w-full text-left py-2">About</Link></li>
          <li><button onClick={() => scrollToSection("features")} className="w-full text-left py-2">Features</button></li>
          <li><button onClick={() => scrollToSection("contact")} className="w-full text-left py-2">Contact</button></li>
          <li>
            <Button 
              onClick={() => navigate('/beta')}
              className="cta-button w-full mt-2"
            >
              Join Beta
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
