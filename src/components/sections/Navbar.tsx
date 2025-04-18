import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <div className="logo">
          <Link to="/" className="font-lexend font-bold text-2xl">Volun<span className="text-accent">Tier</span></Link>
        </div>
        
        <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="hidden md:flex space-x-8">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/features" className="nav-link">Features</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
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
      
      <div className={`mobile-menu md:hidden ${isMenuOpen ? 'show' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 p-6">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="w-full text-left py-2">Home</Link></li>
          <li><Link to="/features" onClick={() => setIsMenuOpen(false)} className="w-full text-left py-2">Features</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full text-left py-2">Contact</Link></li>
          <li>
            <Button onClick={() => { setIsMenuOpen(false); navigate('/beta'); }} className="w-full mt-2 cta-button">Join Beta</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
