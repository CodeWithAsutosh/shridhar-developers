import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ramesh Gupta",
      role: "Homeowner",
      content: "Shridhar Developers exceeded our expectations. The project delivery was on time and the quality was unmatched. Our family couldn't be happier with our new home.",
      rating: 5,
      project: "Green Valley Villas"
    },
    {
      id: 2,
      name: "Neha Sharma",
      role: "Business Owner",
      content: "Professionalism, transparency and dedication is what sets them apart. The commercial space they delivered has helped our business grow tremendously. Highly recommended.",
      rating: 5,
      project: "LA DOLCE VITA Commercial"
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Investor",
      content: "Working with Shridhar Developers has been an absolute pleasure. Their attention to detail and commitment to quality makes them the best choice for any real estate investment.",
      rating: 5,
      project: "Skyline Heights"
    },
    {
      id: 4,
      name: "Priya Mehta",
      role: "Homeowner", 
      content: "From planning to possession, every step was handled with care. The team's dedication to customer satisfaction is truly remarkable. We love our new home!",
      rating: 5,
      project: "Urban Nest"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group relative overflow-hidden bg-gradient-card border-border/20 hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="fill-primary text-primary group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border/20 pt-6">
                  <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.project}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-muted-foreground">Happy Families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;