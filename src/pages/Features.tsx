
import { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Search, Star, Calendar, Users, BarChart2, Award } from "lucide-react";

const FeaturePage = () => {
  const [showVolunteer, setShowVolunteer] = useState(true);

  const volunteerFeatures = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find opportunities that match your interests and schedule with our AI-powered search.",
    },
    {
      icon: Star,
      title: "Track Progress",
      description: "Monitor your volunteer hours and impact with detailed analytics and reports.",
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Manage your volunteer schedule with our intuitive calendar integration.",
    },
  ];

  const organizerFeatures = [
    {
      icon: Users,
      title: "Volunteer Management",
      description: "Efficiently manage and coordinate volunteers for your events.",
    },
    {
      icon: BarChart2,
      title: "Analytics Dashboard",
      description: "Get detailed insights about your volunteer program's performance.",
    },
    {
      icon: Award,
      title: "Recognition System",
      description: "Reward and recognize your volunteers' contributions automatically.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-4 p-1 rounded-full bg-secondary/30 mb-8">
              <button
                onClick={() => setShowVolunteer(true)}
                className={`px-6 py-2 rounded-full transition-all ${
                  showVolunteer ? 'bg-accent text-white' : 'hover:bg-secondary/50'
                }`}
              >
                For Volunteers
              </button>
              <button
                onClick={() => setShowVolunteer(false)}
                className={`px-6 py-2 rounded-full transition-all ${
                  !showVolunteer ? 'bg-primary/80 text-white' : 'hover:bg-secondary/50'
                }`}
              >
                For Organizers
              </button>
            </div>

            <div className="max-w-2xl text-center mb-16">
              <h1 className="font-lexend text-4xl md:text-5xl font-bold mb-6">
                {showVolunteer ? "Empower Your Volunteering Journey" : "Streamline Your Volunteer Management"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {showVolunteer 
                  ? "Discover meaningful opportunities and track your impact with our innovative platform designed for volunteers."
                  : "Efficiently manage your volunteer programs and measure their success with our comprehensive tools."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                {(showVolunteer ? volunteerFeatures : organizerFeatures).map((feature, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      showVolunteer ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary/80'
                    }`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-lexend text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>

              <div className="relative aspect-[9/19] bg-gray-100 rounded-[2.5rem] border-8 border-gray-300">
                <img
                  src="https://via.placeholder.com/390x844"
                  alt="App screenshot"
                  className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                />
              </div>
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

export default FeaturePage;
