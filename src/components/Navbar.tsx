import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "About Us", "Partners", "Impact Stories", "Join Us"];
  return <nav className="sticky top-0 z-50 w-full px-6 py-4 glassmorphism backdrop-blur-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <span className="text-xl font-bold text-glow text-gray-800">
            The Giving Circle
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-white/80 hover:text-white transition-colors duration-200 font-medium relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>)}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full glow-purple transition-all duration-300 transform hover:scale-105">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden mt-4 pb-4 glassmorphism backdrop-blur-lg rounded-lg">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map(link => <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-white/80 hover:text-white transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>)}
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 w-full">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;