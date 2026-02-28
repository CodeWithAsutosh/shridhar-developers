import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Building, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Built with Belief",
      description: "Every project is crafted with unwavering faith in quality and excellence"
    },
    {
      icon: Users,
      title: "Customer Trust",
      description: "Building lasting relationships through transparency and reliability"
    },
    {
      icon: Building,
      title: "Quality Construction",
      description: "Using premium materials and advanced construction techniques"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "25+ years of delivering award-winning developments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-bounce-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Shridhar Developers</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 25 years, Shridhar Developers has been dedicated to creating homes that embody peace, safety, and pride. 
              Our journey is driven by heartfelt commitment and trust, making us one of the most respected names in real estate development.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in building more than just structures - we create communities where families thrive, businesses prosper, 
              and dreams come to life. Our core philosophy centers around delivering projects with care, responsibility, and a deep 
              sense of belonging.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-card rounded-lg border border-border/20 hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">180+</div>
                <div className="text-sm text-muted-foreground">Million Sq. Ft. Delivered</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border/20 hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">170+</div>
                <div className="text-sm text-muted-foreground">Million Sq. Ft. Underway</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up-fade">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-border/20 animate-bounce-in hover-glow"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 hover-glow">
                    <value.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center animate-slide-up-fade">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-card border border-border/20 rounded-2xl hover-lift hover-glow group">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              "To create exceptional living and working spaces that enhance the quality of life for our customers, 
              while maintaining the highest standards of design, construction, and customer service. We are committed 
              to building sustainable communities that stand the test of time."
            </p>
            <Link to="/founder">
              <Button className="group hover-scale hover-glow">
                Meet Our Founder
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;