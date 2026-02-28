import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Skyline Heights",
      type: "residential",
      status: "ongoing",
      location: "Downtown District",
      year: "2024",
      image: "/lovable-uploads/2362680.jpg",
      description: "Luxury residential towers with panoramic city views",
      features: ["50 Floors", "2-4 BHK", "Sky Garden", "Premium Amenities"]
    },
    {
      id: 2,
      title: "Green Valley Villas",
      type: "residential",
      status: "ongoing",
      location: "Suburban Hills",
      year: "2024",
      image: "/lovable-uploads/2362680.jpg",
      description: "Eco-friendly villas surrounded by nature",
      features: ["3-5 BHK", "Private Gardens", "Solar Power", "Rain Harvesting"]
    },
    {
      id: 3,
      title: "Urban Nest",
      type: "residential",
      status: "ongoing",
      location: "City Center",
      year: "2024",
      image: "/lovable-uploads/2362680.jpg",
      description: "Modern apartments for urban professionals",
      features: ["1-3 BHK", "Co-working Space", "Gym", "Rooftop Lounge"]
    },
    {
      id: 4,
      title: "Janki Shridhar Tower",
      type: "commercial",
      status: "completed",
      location: "Business District",
      year: "2023",
      image: "/lovable-uploads/2362680.jpg",
      description: "Premium commercial tower with modern facilities",
      features: ["40 Floors", "Office Spaces", "Food Court", "Parking"]
    },
    {
      id: 5,
      title: "LA DOLCE VITA Commercial",
      type: "commercial",
      status: "completed",
      location: "Shopping District",
      year: "2022",
      image: "/lovable-uploads/2362680.jpg",
      description: "Upscale commercial complex with retail and dining",
      features: ["Retail Spaces", "Restaurants", "Entertainment", "Valet Parking"]
    },
    {
      id: 6,
      title: "Lemon Tree Premier",
      type: "hospitality",
      status: "upcoming",
      location: "Airport Road",
      year: "2025",
      image: "/lovable-uploads/2362680.jpg",
      description: "Premium hotel with world-class amenities",
      features: ["200 Rooms", "Spa & Wellness", "Conference Hall", "Fine Dining"]
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "hospitality", label: "Hospitality" }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "ongoing":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "upcoming":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of exceptional developments across
            residential, commercial, and hospitality sectors
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up-fade">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all duration-500 hover-scale ${
                activeFilter === filter.id
                  ? "bg-gradient-primary shadow-glow animate-pulse-glow"
                  : "hover:border-primary/50 hover:bg-primary/10"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-gradient-card border-border/20 hover:shadow-card transition-all duration-700 hover:-translate-y-3 animate-bounce-in hover-glow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover-scale animate-bounce-in"
                    >
                      <Eye className="mr-2" size={16} />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-white hover:bg-primary/90 hover-scale animate-bounce-in"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
                <Badge
                  className={`absolute top-4 right-4 ${getStatusColor(
                    project.status
                  )} border`}
                >
                  {project.status}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {feature}
                    </Badge>
                  ))}
                  {project.features.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-muted"
                    >
                      +{project.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up-fade">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow hover-scale transition-all duration-500"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
