
import { Search, Star, Calendar, Users, BarChart2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="feature-card p-6 hover-lift">
    <div className="feature-icon">
      <span className="icon-circle">
        <Icon className="w-6 h-6" />
      </span>
    </div>
    <h3 className="font-lexend text-xl font-bold mt-4 mb-2">{title}</h3>
    <p>{description}</p>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Discover Opportunities",
      description: "Find volunteer opportunities that match your skills, interests, and availability."
    },
    {
      icon: Star,
      title: "Track Your Impact",
      description: "Monitor your volunteer hours, skills developed, and the difference you're making."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Flexible scheduling tools that work with your calendar and availability preferences."
    },
    {
      icon: Users,
      title: "Volunteer Management",
      description: "Powerful tools for organizers to recruit, schedule, and communicate with volunteers."
    },
    {
      icon: BarChart2,
      title: "Event Analytics",
      description: "Detailed analytics and reports to measure impact and improve future events."
    },
    {
      icon: Award,
      title: "Certification",
      description: "Verified volunteer hours and achievements that can be shared on professional profiles."
    }
  ];

  return (
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
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
