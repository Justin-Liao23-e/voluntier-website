
import Navbar from "@/components/sections/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Your message has been sent.",
      className: "success-toast",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="font-lexend text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Have questions about VolunTier? Want to partner with us? We'd love to hear from you.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="contact-form-card p-6 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg hover-lift">
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
                <Button type="submit" className="w-full cta-button">Send Message</Button>
              </form>
            </Card>
            
            <div className="social-links flex justify-center mt-8 space-x-6">
              <a href="#" className="social-icon-large" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon-large" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon-large" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:hello@voluntier.com" className="social-icon-large" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-8 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VolunTier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
