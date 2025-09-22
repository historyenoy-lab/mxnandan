import { ExternalLink, Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Cinematic Movie Trailer",
      category: "Film Editing",
      image: portfolio1,
      description: "Epic movie trailer with dynamic cuts, color grading, and immersive sound design.",
    },
    {
      id: 2,
      title: "Motion Graphics Showcase",
      category: "Motion Graphics",
      image: portfolio2,
      description: "Abstract motion graphics with fluid animations and geometric elements.",
    },
    {
      id: 3,
      title: "Corporate Presentation",
      category: "Corporate Video",
      image: portfolio3,
      description: "Professional corporate video with clean transitions and modern aesthetics.",
    },
    {
      id: 4,
      title: "Music Video",
      category: "Creative Editing",
      image: portfolio1,
      description: "Dynamic music video with rhythm-based cuts and visual effects.",
    },
    {
      id: 5,
      title: "Documentary Short",
      category: "Documentary",
      image: portfolio2,
      description: "Compelling documentary storytelling with interview cuts and B-roll integration.",
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "Social Media",
      image: portfolio3,
      description: "Engaging social media content optimized for various platforms.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Portfolio
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Discover my latest video editing projects showcasing creativity, technical expertise, and storytelling excellence.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-glow group overflow-hidden cursor-pointer animate-[fade-in-up_0.6s_ease-out] hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors">
                      <Play className="w-6 h-6 text-primary" />
                    </button>
                    <button className="p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-hero">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};