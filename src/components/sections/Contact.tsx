import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
      setMessage("");
    }
  };

  return (
    <section id="contact" className="contact py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-lexend text-3xl md:text-4xl font-bold mb-6">Get in <span className="text-accent">Touch</span></h2>
          <p className="text-lg max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Have questions about VolunTier? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="contact-form-card p-6 bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg">
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
    </section>
  );
};

export default Contact;
