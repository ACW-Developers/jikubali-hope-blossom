import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import ContactPopup from "@/components/ui/contact-popup";

// Import your logo image
import LogoImage from "@/assets/logos/jikubali.png"; // replace with your actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  // Check if current page is home
  const isHomePage = location.pathname === "/";
  
  // Determine text color based on background state and page
  const textColorClass = !isHomePage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white");
  const logoTextColorClass = !isHomePage ? "text-sky-blue" : (scrolled ? "text-sky-blue" : "text-white");
  const mobileMenuBgClass = !isHomePage ? "bg-white" : (scrolled ? "bg-white" : "bg-gray-900/95 backdrop-blur-md");
  const mobileLinkColorClass = !isHomePage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white");
  const menuButtonColorClass = !isHomePage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white");

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled || !isHomePage ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-transparent"
    }`}>
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10">
              <img
                src={LogoImage}
                alt="Jikubali Africa Logo"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className={`font-heading font-bold text-xl lg:text-2xl group-hover:text-brand-pink transition-colors duration-300 ${logoTextColorClass}`}>
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
                  location.pathname === link.path ? "text-brand-pink" : textColorClass
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
              className={`lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200 ${menuButtonColorClass}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className={`py-4 space-y-2 ${mobileMenuBgClass}`}>
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-brand-pink/10 hover:text-brand-pink transform ${
                  location.pathname === link.path ? "text-brand-pink bg-brand-pink/10" : mobileLinkColorClass
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