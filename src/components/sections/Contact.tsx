
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Globe, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast({
        title: "Success!",
        description: "Your message has been sent.",
        className: "success-toast",
      });
      setEmail("");
      setName("");
    }
  };

  return (
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
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-lexend font-bold">Email Us</h4>
                  <p className="text-muted-foreground">hello@voluntier.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="contact-icon">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-lexend font-bold">Follow Us</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="social-icon" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
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
  );
};

export default Contact;
