import { Award, Clock, Users, Zap } from "lucide-react";
import profileImage from "@/assets/mx-nandan-profile.jpg";

export const About = () => {
  const stats = [
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Zap, value: "24/7", label: "Creative Energy" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse"></div>
              <img
                src={profileImage}
                alt="MX NANDAN - Professional Video Editor"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl glow-border"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Creative Vision Meets Technical Excellence
              </h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                I'm MX NANDAN, a passionate video editor with over 5 years of experience in crafting 
                compelling visual narratives. Specializing in motion graphics, cinematic editing, and 
                creative storytelling, I transform raw footage into engaging content that captivates audiences.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                My expertise spans across corporate videos, commercials, social media content, and 
                documentary filmmaking. I believe every project has a unique story to tell, and my 
                mission is to bring that story to life through innovative editing techniques and 
                cutting-edge visual effects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="card-glow p-6 text-center">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground-muted">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};