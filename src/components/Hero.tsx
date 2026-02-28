
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const Hero = () => {
  const years = useCountUp({ end: 25, duration: 2500 });
  const projects = useCountUp({ end: 30, duration: 2500 });
  const delivered = useCountUp({ end: 180, duration: 2500 });
  const underway = useCountUp({ end: 170, duration: 2500 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/l6EzZafb1Pk?autoplay=1&mute=1&loop=1&playlist=l6EzZafb1Pk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2"
          style={{
            border: 'none',
            pointerEvents: 'none'
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        {/* Video overlay for content readability */}
        
      </div>
      

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 pt-20 font-times" style={{ fontFamily: '"Times New Roman", serif' }}>
        {/* Main content */}
        <div className="animate-bounce-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Building Dreams Into
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Reality
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-fade stagger-1 font-bold">
            For over 25 years, Shridhar Developers has been crafting exceptional living spaces 
            that combine luxury, comfort, and sustainability. Your dream home awaits.
          </p>

        
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-up-fade stagger-2">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-all duration-500 text-lg px-8 py-4 animate-bounce-in"
              style={{ animationDelay: '0.6s' }}
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-500 text-lg px-8 py-4 animate-bounce-in"
              style={{ animationDelay: '0.8s' }}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up-fade stagger-3">
            <div className="text-center group hover-lift">
              <div ref={years.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                {years.count}+
              </div>
              <div className="text-white/70 group-hover:text-white transition-colors duration-300 font-bold">Years of Excellence</div>
            </div>
            <div className="text-center group hover-lift">
              <div ref={projects.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                {projects.count}+
              </div>
              <div className="text-white/70 group-hover:text-white transition-colors duration-300 font-bold">Projects Completed</div>
            </div>
            <div className="text-center group hover-lift">
              <div ref={delivered.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                {delivered.count}+
              </div>
              <div className="text-white/70 group-hover:text-white transition-colors duration-300 font-bold">Mn. Sq. Ft. Delivered</div>
            </div>
            <div className="text-center group hover-lift">
              <div ref={underway.ref} className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                {underway.count}+
              </div>
              <div className="text-white/70 group-hover:text-white transition-colors duration-300 font-bold">Mn. Sq. Ft. Underway</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover-glow">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
