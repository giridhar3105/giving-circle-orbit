
import { Heart, Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Causes", href: "#causes" },
    { label: "Join Circle", href: "#join" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-transparent to-primary/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-12">
          {/* Logo and Tagline */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/2cc255b3-0b2a-499b-8a5b-6ff0edf33b8a.png" 
              alt="The Giving Circle Logo" 
              className="h-12 w-auto"
            />
            <span className="text-primary text-2xl font-bold">
              The Giving Circle
            </span>
          </div>
          <p className="text-muted-foreground text-lg">
            Connecting givers, causes, and communities
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 logo-gradient transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px logo-gradient mb-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 The Giving Circle. Built with 
            <Heart className="w-4 h-4 text-accent animate-pulse" fill="currentColor" />
            in India.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
