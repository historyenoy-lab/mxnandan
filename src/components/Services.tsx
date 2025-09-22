import { Film, Palette, Scissors, Sparkles, Video, Wand2 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Complete video editing services from rough cuts to final delivery with professional color correction and audio mixing.",
      features: ["Multi-cam editing", "Color grading", "Audio sync", "Export optimization"],
    },
    {
      icon: Wand2,
      title: "Motion Graphics",
      description: "Eye-catching motion graphics and animations that enhance your video content and engage your audience.",
      features: ["2D/3D animations", "Text animations", "Logo reveals", "Visual effects"],
    },
    {
      icon: Film,
      title: "Post-Production",
      description: "Complete post-production workflow including editing, effects, sound design, and final mastering.",
      features: ["Sound design", "Visual effects", "Mastering", "Format delivery"],
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction and grading to achieve the perfect mood and cinematic look for your project.",
      features: ["Color correction", "Mood enhancement", "Style matching", "HDR grading"],
    },
    {
      icon: Scissors,
      title: "Content Creation",
      description: "Creative content tailored for social media platforms, promotional videos, and marketing campaigns.",
      features: ["Social media clips", "Promotional videos", "Commercials", "Trailers"],
    },
    {
      icon: Sparkles,
      title: "Creative Consulting",
      description: "Strategic creative direction and consultation to help bring your vision to life with maximum impact.",
      features: ["Creative direction", "Story development", "Technical planning", "Workflow optimization"],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Services
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Professional video editing services tailored to bring your creative vision to life with technical excellence.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-glow p-8 group hover:-translate-y-2 transition-all duration-300 animate-[fade-in-up_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className="text-primary font-semibold hover:text-primary-glow transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-surface/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 glow-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
              Let's discuss your video editing needs and create something amazing together. 
              Get in touch for a free consultation and project quote.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};