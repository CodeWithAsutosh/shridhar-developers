import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "News & Media", href: "#news" }
    ],
    projects: [
      { name: "Residential", href: "#residential" },
      { name: "Commercial", href: "#commercial" },
      { name: "Hospitality", href: "#hospitality" },
      { name: "Upcoming Projects", href: "#upcoming" }
    ],
    services: [
      { name: "Real Estate Development", href: "#development" },
      { name: "Property Management", href: "#management" },
      { name: "Investment Consulting", href: "#consulting" },
      { name: "After Sales Service", href: "#service" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/YourPage", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/YourProfile", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/YourProfile", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/shridhar-developers/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SD</span>
              </div>
              <span className="text-xl font-bold">Shridhar Developers</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creating homes that embody peace, safety, and pride. With 25+ years of excellence, 
              we build more than structures - we build communities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-sm">info@shridhardevelopers.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">123 Business District, City</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Projects</h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates on new projects and developments.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border/30 text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-primary rounded-lg text-primary-foreground font-medium hover:shadow-glow transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © {currentYear} Shridhar Developers. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
