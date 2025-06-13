import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "About Us", "Partners", "Impact Stories", "Join Us"];
  return <nav className="sticky top-0 z-50 w-full px-6 py-4 glassmorphism-dark backdrop-blur-lg bg-gray-200">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/2cc255b3-0b2a-499b-8a5b-6ff0edf33b8a.png" alt="The Giving Circle Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-primary"></span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 logo-gradient transition-all duration-300 group-hover:w-full"></span>
            </a>)}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">
            Sign In
          </Button>
          <Button className="logo-gradient text-white font-semibold px-6 py-2 rounded-full glow-primary transition-all duration-300 transform hover:scale-105">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden mt-4 pb-4 glassmorphism rounded-lg">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>)}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 w-full">
                Sign In
              </Button>
              <Button className="logo-gradient text-white font-semibold px-6 py-2 rounded-full w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;