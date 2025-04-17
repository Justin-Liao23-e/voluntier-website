
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-6 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg">
        <div className="slots-badge mb-4">
          <div className="slots-progress" style={{width: `${(slots/300)*100}%`}}></div>
          <span className="font-mono text-sm">Only <span id="slots" className="font-bold">{slots}</span> spots left</span>
        </div>
        
        <h2 className="font-lexend text-2xl font-bold mb-4">Join VolunTier Beta</h2>
        
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
          <Button type="submit" className="w-full cta-button">Secure Your Spot</Button>
        </form>
        
        <p className="text-sm text-muted-foreground mt-4">
          We'll notify you when it's your turn to access the beta.
        </p>
      </Card>
    </div>
  );
};

export default BetaSignup;
