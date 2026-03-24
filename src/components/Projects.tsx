import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MapPin, Calendar, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Siddhartha Maison",
      type: "residential",
      status: "ongoing",
      location: "Ranchi, Jharkhand",
      year: "2024",
      image: "/lovable-uploads/_MG_6676.webp",
      images: [
        "/lovable-uploads/_MG_6676.webp",
        "/lovable-uploads/_MG_6820.webp",
        "/lovable-uploads/_MG_6649.webp"
      ],
      description: "Luxury residential towers with panoramic city views and state-of-the-art architecture. This project represents the pinnacle of urban living in Ranchi, offering a blend of comfort, style, and luxury.",
      features: ["50 Floors", "2-4 BHK", "Sky Garden", "Premium Amenities", "24/7 Security", "Smart Home Ready"]
    },
    {
      id: 2,
      title: "Sagun Ishan Estate",
      type: "residential",
      status: "ongoing",
      location: "Ranchi, Jharkhand",
      year: "2024",
      image: "/lovable-uploads/_MG_6820.webp",
      images: [
        "/lovable-uploads/_MG_6820.webp",
        "/lovable-uploads/_MG_6676.webp",
        "/lovable-uploads/_MG_6649.webp"
      ],
      description: "Luxury residential towers with panoramic city views, designed for modern families. Sagun Ishan Estate provides an oasis of calm in the bustling city, with expansive green spaces and modern facilities.",
      features: ["50 Floors", "2-4 BHK", "Sky Garden", "Premium Amenities", "Swimming Pool", "Clubhouse"]
    },
    {
      id: 3,
      title: "LA DOLCE VITA Commercial",
      type: "commercial",
      status: "completed",
      location: "Ranchi, Jharkhand",
      year: "2022",
      image: "/lovable-uploads/_MG_6649.webp",
      images: [
        "/lovable-uploads/_MG_6649.webp",
        "/lovable-uploads/_MG_6820.webp",
        "/lovable-uploads/_MG_6676.webp"
      ],
      description: "Upscale commercial complex with retail and dining, located in the heart of Ranchi's business district. A perfect destination for premium brands and gourmet dining experiences.",
      features: ["Retail Spaces", "Restaurants", "Entertainment", "Valet Parking", "High-speed Elevators", "Central AC"]
    },
    {
      id: 4,
      title: "Skyline Heights",
      type: "residential",
      status: "ongoing",
      location: "Downtown District",
      year: "2024",
      image: "/lovable-uploads/2362680.jpg",
      images: [
        "/lovable-uploads/2362680.jpg",
        "/lovable-uploads/_MG_6676.webp",
        "/lovable-uploads/_MG_6820.webp"
      ],
      description: "Luxury residential towers with panoramic city views in the downtown district. Skyline Heights offers an unmatched lifestyle with world-class amenities and sophisticated design.",
      features: ["50 Floors", "2-4 BHK", "Sky Garden", "Premium Amenities", "Fitness Center", "Jogging Track"]
    },
    {
      id: 5,
      title: "Green Valley Villas",
      type: "residential",
      status: "ongoing",
      location: "Suburban Hills",
      year: "2024",
      image: "/lovable-uploads/2362680.jpg",
      images: [
        "/lovable-uploads/2362680.jpg",
        "/lovable-uploads/_MG_6676.webp",
        "/lovable-uploads/_MG_6820.webp"
      ],
      description: "Eco-friendly villas surrounded by nature in the suburban hills. These villas are designed for sustainable living without compromising on luxury or comfort.",
      features: ["3-5 BHK", "Private Gardens", "Solar Power", "Rain Harvesting", "Gated Community", "Nature Trails"]
    },
    {
      id: 6,
      title: "Urban Nest",
      type: "residential",
      status: "ongoing",
      location: "City Center",
      year: "2024",
      image: "/lovable-uploads/2362680.jpg",
      images: [
        "/lovable-uploads/2362680.jpg",
        "/lovable-uploads/_MG_6676.webp",
        "/lovable-uploads/_MG_6820.webp"
      ],
      description: "Modern apartments for urban professionals right in the city center. Urban Nest provides the perfect balance between work and life with integrated co-working spaces and recreational areas.",
      features: ["1-3 BHK", "Co-working Space", "Gym", "Rooftop Lounge", "High-speed Internet", "Concierge Service"]
    },
    {
      id: 7,
      title: "Janki Shridhar Tower",
      type: "commercial",
      status: "completed",
      location: "Business District",
      year: "2023",
      image: "/lovable-uploads/2362680.jpg",
      images: [
        "/lovable-uploads/2362680.jpg",
        "/lovable-uploads/_MG_6676.webp",
        "/lovable-uploads/_MG_6820.webp"
      ],
      description: "Premium commercial tower with modern facilities in the prime business district. Janki Shridhar Tower is the ideal business address for growing enterprises and established firms.",
      features: ["40 Floors", "Office Spaces", "Food Court", "Parking", "Conference Rooms", "Power Backup"]
    },
    {
      id: 8,
      title: "Lemon Tree Premier",
      type: "hospitality",
      status: "upcoming",
      location: "Airport Road",
      year: "2025",
      image: "/lovable-uploads/2362680.jpg",
      images: [
        "/lovable-uploads/2362680.jpg",
        "/lovable-uploads/_MG_6676.webp",
        "/lovable-uploads/_MG_6820.webp"
      ],
      description: "Premium hotel with world-class amenities on Airport Road. Lemon Tree Premier offers exceptional hospitality services and top-notch facilities for travelers and events.",
      features: ["200 Rooms", "Spa & Wellness", "Conference Hall", "Fine Dining", "Airport Shuttle", "Lounge"]
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
              className={`transition-all duration-500 hover-scale ${activeFilter === filter.id
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
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="mr-2" size={16} />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-white hover:bg-primary/90 hover-scale animate-bounce-in"
                      asChild
                    >
                      <a href="#contact">Enquire Now</a>
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

        {/* <div className="text-center mt-12 animate-slide-up-fade">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow hover-scale transition-all duration-500"
          >
            View All Projects
          </Button>
        </div> */}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-border/20 shadow-2xl">
          {selectedProject && (
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              {/* Image Carousel */}
              <div className="w-full md:w-1/2 p-2">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.images.map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                          <img
                            src={image}
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-black/40 border-white/20 text-white hover:bg-black/60" />
                  <CarouselNext className="right-2 bg-black/40 border-white/20 text-white hover:bg-black/60" />
                </Carousel>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                <DialogHeader className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getStatusColor(selectedProject.status)}>
                      {selectedProject.status}
                    </Badge>
                    <Badge variant="outline" className="text-muted-foreground uppercase tracking-widest text-[10px]">
                      {selectedProject.type}
                    </Badge>
                  </div>
                  <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent underline decoration-primary/30 underline-offset-8">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold">Location</p>
                        <p className="text-sm font-medium">{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold">Launch Year</p>
                        <p className="text-sm font-medium">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature: string, idx: number) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="px-3 py-1 bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 flex gap-4">
                  <Button
                    className="flex-1 bg-gradient-primary hover:shadow-glow hover-scale transition-all duration-500"
                    asChild
                  >
                    <a href="#contact" onClick={() => setSelectedProject(null)}>
                      Enquire Now
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="px-4 border-primary/20 hover:bg-primary/10"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
