import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import ContactPopup from "@/components/ui/contact-popup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Stories", path: "/stories" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-transparent"
    }`}>
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Heart className="w-8 h-8 text-brand-pink group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-brand-pink/20 rounded-full animate-pulse"></div>
            </div>
            <span className="font-heading font-bold text-xl lg:text-2xl text-sky-blue group-hover:text-brand-pink transition-colors duration-300">
              Jikubali Africa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group font-medium transition-all duration-300 hover:text-brand-pink ${
                  location.pathname === link.path ? "text-brand-pink" : "text-foreground"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-pink transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="warm" 
              size="sm" 
              className="hidden lg:flex animate-fade-up"
              onClick={() => setShowContactPopup(true)}
            >
              Get Involved
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-brand-pink/10 hover:text-brand-pink transform ${
                  location.pathname === link.path ? "text-brand-pink bg-brand-pink/10" : "text-foreground"
                } ${isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms"
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button 
                variant="warm" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  setShowContactPopup(true);
                  setIsOpen(false);
                }}
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
        title="Get Involved"
        subtitle="Join our mission to transform mental health in Kenya"
      />
    </nav>
  );
};

export default Navbar;