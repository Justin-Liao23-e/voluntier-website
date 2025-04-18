
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BetaSignup = () => {
  const { toast } = useToast();
  const [slots, setSlots] = useState(300);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="py-6 px-6 flex items-center">
        <Link to="/" className="flex items-center text-foreground hover:text-accent transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="font-lexend font-bold text-3xl">Volun<span className="text-accent">Tier</span></div>
          </div>
          
          <div className="slots-badge mb-6 relative overflow-hidden">
            <div className="slots-progress" style={{width: `${(slots/300)*100}%`}}></div>
            <span className="font-mono text-sm relative z-10">Only <span id="slots" className="font-bold">{slots}</span> spots left</span>
          </div>
          
          <h2 className="font-lexend text-2xl font-bold mb-6">Join VolunTier Beta</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Your Name</label>
              <Input 
                id="name"
                placeholder="Enter your full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/50 dark:bg-slate-800/50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Your Email</label>
              <Input 
                id="email"
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/50 dark:bg-slate-800/50"
              />
            </div>
            
            <Button type="submit" className="w-full cta-button h-12">Secure Your Spot</Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-6 text-center">
            We'll notify you when it's your turn to access the beta.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default BetaSignup;
