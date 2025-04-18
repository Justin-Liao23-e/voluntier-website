
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero min-h-screen flex items-center relative overflow-hidden">
      <div className="background-blur absolute"></div>
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Find volunteer opportunities that align with your skills and goals.
          </h1>
          <p className="text-lg md:text-xl mb-10 font-inter animate-fade-in" style={{animationDelay: "0.2s"}}>
            VolunTier allows you to earn badges, record past volunteers, and gain skills / experience, marking your impact to the community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="watch-demo">
                  Watch Demo
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
            
            <Button 
              className="cta-button"
              onClick={() => navigate('/beta')}
            >
              Join Beta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
