
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [slots, setSlots] = useState(300);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);

  // Handle navbar visibility on scroll
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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSlots(prev => Math.max(0, prev - 1));
      toast({
        title: "Success!",
        description: "You've been added to our beta waitlist.",
        className: "success-toast",
      });
      setEmail("");
      setName("");
    }
  };

  // Handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="voluntier-app">
      {/* Navbar */}
      <header ref={navbarRef} className="navbar" id="navbar">
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          <div className="logo">
            <span className="font-lexend font-bold text-2xl">Volun<span className="text-accent">Tier</span></span>
          </div>
          
          <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="hidden md:flex space-x-8">
              <li><button onClick={() => scrollToSection("hero")} className="nav-link">Home</button></li>
              <li><button onClick={() => scrollToSection("features")} className="nav-link">Features</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button></li>
            </ul>
          </nav>
          
          <Button onClick={() => scrollToSection("cta-card")} className="cta-button">
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
        
        {/* Mobile menu */}
        <div className={`mobile-menu md:hidden ${isMenuOpen ? 'show' : ''}`}>
          <ul className="flex flex-col space-y-4 p-6">
            <li><button onClick={() => scrollToSection("hero")} className="w-full text-left py-2">Home</button></li>
            <li><button onClick={() => scrollToSection("features")} className="w-full text-left py-2">Features</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="w-full text-left py-2">Contact</button></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero min-h-screen flex items-center relative overflow-hidden">
        <div className="background-blur absolute"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="hero-content fade-in" style={{animationDelay: "0.2s"}}>
              <h1 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Connect. Volunteer. <span className="text-accent">Impact.</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 font-inter max-w-lg">
                The smarter way to find, manage, and track volunteer opportunities in your community.
              </p>
              
              {/* CTA Card */}
              <Card id="cta-card" className="cta-card p-6 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg max-w-md">
                <div className="slots-badge">
                  <div className="slots-progress" style={{width: `${(slots/300)*100}%`}}></div>
                  <span className="font-mono text-sm">Only <span id="slots" className="font-bold">{slots}</span> spots left</span>
                </div>
                
                <h3 className="font-lexend text-xl font-bold mt-4 mb-4">Join our Beta Program</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/50 dark:bg-slate-800/50"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/50 dark:bg-slate-800/50"
                  />
                  <Button type="submit" className="w-full">Secure Your Spot</Button>
                </form>
                
                <p className="text-sm text-muted-foreground mt-4">
                  We'll notify you when it's your turn to access the beta.
                </p>
                
                <div className="mt-6 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="watch-demo flex items-center gap-2">
                        <span className="play-icon"></span> Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="demo-dialog">
                      <DialogHeader>
                        <DialogTitle>VolunTier in Action</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <video 
                          ref={videoRef}
                          controls
                          muted
                          className="w-full h-full object-cover"
                          src="https://static.videezy.com/system/resources/previews/000/044/479/original/portfolio.mp4"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            </div>
            
            <div className="hero-device fade-in-right hidden md:block" style={{animationDelay: "0.4s"}}>
              <div className="device-wrapper">
                <div className="device-mockup">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="VolunTier app on laptop" 
                    className="device-image rounded-lg shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="section-header text-center mb-16">
            <h2 className="font-lexend text-3xl md:text-4xl font-bold mb-4 relative">
              <span className="text-accent">For Volunteers</span> / For Organizers
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              A platform to connect volunteers with meaningful opportunities and help organizers manage their events efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="feature-card p-6 hover-lift">
              <div className="feature-icon">
                <span className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </span>
              </div>
              <h3 className="font-lexend text-xl font-bold mt-4 mb-2">Discover Opportunities</h3>
              <p>Find volunteer opportunities that match your skills, interests, and availability.</p>
            </Card>
            
            {/* Feature 2 */}
            <Card className="feature-card p-6 hover-lift">
              <div className="feature-icon">
                <span className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </span>
              </div>
              <h3 className="font-lexend text-xl font-bold mt-4 mb-2">Track Your Impact</h3>
              <p>Monitor your volunteer hours, skills developed, and the difference you're making.</p>
            </Card>
            
            {/* Feature 3 */}
            <Card className="feature-card p-6 hover-lift">
              <div className="feature-icon">
                <span className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </span>
              </div>
              <h3 className="font-lexend text-xl font-bold mt-4 mb-2">Smart Scheduling</h3>
              <p>Flexible scheduling tools that work with your calendar and availability preferences.</p>
            </Card>
            
            {/* Feature 4 */}
            <Card className="feature-card p-6 hover-lift">
              <div className="feature-icon">
                <span className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </span>
              </div>
              <h3 className="font-lexend text-xl font-bold mt-4 mb-2">Volunteer Management</h3>
              <p>Powerful tools for organizers to recruit, schedule, and communicate with volunteers.</p>
            </Card>
            
            {/* Feature 5 */}
            <Card className="feature-card p-6 hover-lift">
              <div className="feature-icon">
                <span className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </span>
              </div>
              <h3 className="font-lexend text-xl font-bold mt-4 mb-2">Event Analytics</h3>
              <p>Detailed analytics and reports to measure impact and improve future events.</p>
            </Card>
            
            {/* Feature 6 */}
            <Card className="feature-card p-6 hover-lift">
              <div className="feature-icon">
                <span className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </span>
              </div>
              <h3 className="font-lexend text-xl font-bold mt-4 mb-2">Certification</h3>
              <p>Verified volunteer hours and achievements that can be shared on professional profiles.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="contact-content">
              <h2 className="font-lexend text-3xl md:text-4xl font-bold mb-6">
                Get in <span className="text-accent">Touch</span>
              </h2>
              <p className="text-lg mb-8 max-w-md">
                Have questions about VolunTier? Want to partner with us? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-lexend font-bold">Email Us</h4>
                    <p className="text-muted-foreground">hello@voluntier.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-lexend font-bold">Follow Us</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="social-icon" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 8-5 1.6-1 3-2.2 4-4z"></path>
                        </svg>
                      </a>
                      <a href="#" className="social-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="contact-form-card p-6 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg hover-lift">
              <h3 className="font-lexend text-xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Your name" 
                  required
                  className="bg-white/50 dark:bg-slate-800/50"
                />
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="bg-white/50 dark:bg-slate-800/50"
                />
                <textarea 
                  placeholder="Your message" 
                  rows={4}
                  required
                  className="w-full rounded-md bg-white/50 dark:bg-slate-800/50 border border-input px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                ></textarea>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4">
                We'll get back to you as soon as possible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
