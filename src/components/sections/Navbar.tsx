
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

  return (
    <header ref={navbarRef} className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <div className="logo">
          <Link to="/" className="font-lexend font-bold text-2xl">Volun<span className="text-accent">Tier</span></Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Button 
            onClick={() => navigate('/beta')}
            className="cta-button"
          >
            Join Beta
          </Button>
        </nav>
        
        <button 
          className="md:hidden"
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
      
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
        <div className="bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-6">
            <nav className="py-4">
              <ul className="flex flex-col space-y-4">
                <li><Link to="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" className="block py-2" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                <li><Link to="/features" className="block py-2" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
                <li><Link to="/contact" className="block py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                <li>
                  <Button 
                    onClick={() => {
                      navigate('/beta');
                      setIsMenuOpen(false);
                    }}
                    className="cta-button w-full mt-2"
                  >
                    Join Beta
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
