
import { Search, Star, Calendar, Users, BarChart2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, type }: { icon: any, title: string, description: string, type: 'volunteer' | 'organizer' }) => (
  <Card className={`feature-card p-6 hover-lift ${type === 'volunteer' ? 'volunteer-card' : 'organizer-card'}`}>
    <div className="feature-icon">
      <span className={`icon-circle ${type === 'volunteer' ? 'volunteer-icon' : 'organizer-icon'}`}>
        <Icon className="w-6 h-6" />
      </span>
    </div>
    <h3 className="font-lexend text-xl font-bold mt-4 mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

const Features = () => {
  const features: {
    icon: any;
    title: string;
    description: string;
    type: 'volunteer' | 'organizer';
  }[] = [
    {
      icon: Search,
      title: "Discover Opportunities",
      description: "Find volunteer opportunities that match your skills, interests, and availability.",
      type: 'volunteer'
    },
    {
      icon: Star,
      title: "Track Your Impact",
      description: "Monitor your volunteer hours, skills developed, and the difference you're making.",
      type: 'volunteer'
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Flexible scheduling tools that work with your calendar and availability preferences.",
      type: 'volunteer'
    },
    {
      icon: Users,
      title: "Volunteer Management",
      description: "Powerful tools for organizers to recruit, schedule, and communicate with volunteers.",
      type: 'organizer'
    },
    {
      icon: BarChart2,
      title: "Event Analytics",
      description: "Detailed analytics and reports to measure impact and improve future events.",
      type: 'organizer'
    },
    {
      icon: Award,
      title: "Certification",
      description: "Verified volunteer hours and achievements that can be shared on professional profiles.",
      type: 'organizer'
    }
  ];

  return (
    <section id="features" className="features py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="section-header text-center mb-16">
          <h2 className="font-lexend text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">For Volunteers</span> / <span className="text-primary/80">For Organizers</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            A platform to connect volunteers with meaningful opportunities and help organizers manage their events efficiently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/features">
            <Button variant="outline" className="rounded-full px-8 hover:bg-accent hover:text-white">
              See More Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
