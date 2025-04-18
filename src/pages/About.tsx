import Navbar from "@/components/sections/Navbar";
import { Card } from "@/components/ui/card";
import { Linkedin, Globe, Instagram, Twitter, Mail } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Justin Liao",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEcBFHsy-TJhw/profile-displayphoto-shrink_800_800/B56ZULoDQyGoAg-/0/1739656805713?e=1750291200&v=beta&t=0kbSkqylEw9lm4b8CT-ZgbQmQaeG8NwzeepXmoNgDO0",
      role: "Founder / CEO",
      linkedin: "https://www.linkedin.com/in/justin-liao23/",
      website: "https://justin-liao23-e.github.io/portfolio/",
    },
    {
      name: "Thomas Suen",
      image: "Thomas.jpg",
      role: "Founder / CTO",
      linkedin: "https://www.linkedin.com/in/thomas-suen-84776a262/",
      website: "https://owenisas.com",
    }
  ];

  return (
    <div className="voluntier-app">
      <Navbar />
      
      <section className="py-32 mt-20 relative overflow-hidden">
        <div className="background-blur absolute opacity-20 -top-10 -left-10"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="font-lexend text-4xl md:text-5xl font-bold mb-8">Founder's Letter</h1>
            
            <div className="aspect-video mb-12 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Founder's Message"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h2 className="font-lexend text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
            
            <div className="space-y-6 text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at consequat dui. Nulla facilisi. Sed rhoncus, lacus eu tincidunt feugiat, neque turpis gravida quam, vel aliquam magna tellus vitae ex.
              </p>
              
              <p>
                Fusce non odio quis velit dignissim scelerisque. Vivamus vel neque ut dui faucibus rutrum. Integer volutpat lacus ut mauris tempor, vel vulputate metus tincidunt. Suspendisse potenti. Morbi a neque justo.
              </p>
              
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam porta, risus eget bibendum venenatis, ipsum est elementum risus, vel bibendum quam tortor a velit. Donec convallis arcu at est viverra, in commodo nisl pulvinar.
              </p>
              
              <p>
                Vivamus sagittis lorem at consectetur interdum. Vestibulum mollis dolor in eros rhoncus, vel volutpat lectus porta. Vivamus eget enim sed risus hendrerit euismod vitae vel purus.
              </p>
            </div>
            
            <div className="mt-12">
              <p className="text-lg font-medium">Sincerely,</p>
              <p className="text-xl font-lexend font-bold text-accent mt-2">VolunTier Founders</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="team" className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-lexend text-2xl md:text-3xl font-bold mb-10 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="founder-card p-6 flex flex-col items-center text-center hover-lift">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-accent/20">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-lexend text-xl font-bold mb-3">{founder.name}</h3>
                
                <p className="text-lg text-muted-foreground mb-4">{founder.role}</p>

                <div className="flex space-x-4 mt-4">
                  <a 
                    href={founder.linkedin} 
                    className="social-icon-large"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={founder.website} 
                    className="social-icon-large"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name}'s Website`}
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="footer py-8 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VolunTier. All rights reserved.
          </div>
          <div className="flex justify-center space-x-6 mt-4 text-2xl text-foreground hover:text-accent">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="mailto:hello@voluntier.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
