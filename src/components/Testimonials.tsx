import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [{
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    content: "MX NANDAN transformed our corporate video into a cinematic masterpiece. His attention to detail and creative vision exceeded our expectations. The final product boosted our brand engagement by 300%.",
    rating: 5
  }, {
    name: "David Chen",
    role: "Creative Director",
    company: "Spark Media",
    content: "Working with MX NANDAN was an absolute pleasure. His motion graphics skills are exceptional, and he delivered our project ahead of schedule. The quality of work speaks for itself.",
    rating: 5
  }, {
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "Viral Studios",
    content: "The best video editor I've worked with! MX NANDAN understands storytelling and knows how to make every frame count. Our YouTube channel grew 500% after implementing his editing style.",
    rating: 5
  }, {
    name: "Michael Thompson",
    role: "Documentary Filmmaker",
    company: "Independent",
    content: "MX NANDAN brought my documentary vision to life with incredible precision. His color grading and pacing transformed raw footage into an award-winning film. Highly recommended!",
    rating: 5
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Testimonials
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            What clients say about working with me and the impact of professional video editing on their projects.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="card-glow p-8 md:p-12 text-center relative">
                    <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                    
                    <div className="flex justify-center mb-6">
                      {Array.from({
                    length: testimonial.rating
                  }).map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                    </div>

                    <blockquote className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="text-center">
                      <div className="font-bold text-foreground text-lg mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-primary font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-foreground-muted text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'}`} />)}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">80+</div>
              <div className="text-foreground-muted">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-foreground-muted">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5.0</div>
              <div className="text-foreground-muted">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground-muted">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};