
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navLinks = ["Our Team", "Partners", "Impact", "Join Us"];

  return (
    <nav className="relative z-50 w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <span className="text-white text-xl font-bold text-glow">
            The Giving Circle
          </span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full glow-purple transition-all duration-300 transform hover:scale-105">
          Donate Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
