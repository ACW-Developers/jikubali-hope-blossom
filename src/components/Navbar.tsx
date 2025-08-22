
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import ContactPopup from "@/components/ui/contact-popup";

// Import your logo image
import LogoImage from "@/assets/logos/jikubali.png";

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
              className={`lg:hidden p-2 rounded-xl hover:bg-muted/20 transition-all duration-300 ${menuButtonColorClass} ${
                isOpen ? 'bg-muted/10' : ''
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`w-5 h-5 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden fixed inset-x-0 top-16 z-40 transition-all duration-500 ease-out ${
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}>
          {/* Enhanced mobile menu container with wave design */}
          <div className="mx-4 mt-2 bg-white/98 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 overflow-hidden">
            {/* Decorative wave at top */}
            <div className="w-full h-2 bg-gradient-to-r from-sky-blue via-brand-pink to-sunshine-yellow"></div>
            
            <div className="p-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between px-6 py-4 mx-2 my-1 text-lg font-medium rounded-2xl transition-all duration-300 ${
                    location.pathname === link.path 
                      ? "text-brand-pink bg-gradient-to-r from-brand-pink/10 via-brand-pink/5 to-transparent border-l-4 border-brand-pink shadow-sm" 
                      : "text-foreground hover:bg-gradient-to-r hover:from-muted/30 hover:via-muted/10 hover:to-transparent hover:translate-x-2"
                  } ${
                    isOpen 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 80 + 100}ms` : "0ms"
                  }}
                >
                  <span className="flex items-center">
                    {link.name}
                    {location.pathname === link.path && (
                      <div className="ml-2 w-2 h-2 bg-brand-pink rounded-full animate-pulse"></div>
                    )}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                    location.pathname === link.path ? 'text-brand-pink rotate-180' : 'text-muted-foreground group-hover:text-brand-pink group-hover:translate-x-1'
                  }`} />
                </Link>
              ))}
              
              {/* Enhanced CTA section */}
              <div className="mt-4 p-4 bg-gradient-to-br from-muted/20 via-transparent to-brand-pink/5 rounded-2xl border border-muted/20">
                <Button 
                  variant="warm" 
                  size="lg" 
                  className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-brand-pink to-sky-blue hover:scale-[1.02]"
                  onClick={() => {
                    setShowContactPopup(true);
                    setIsOpen(false);
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Involved
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </span>
                </Button>
                
                <div className="mt-3 text-center">
                  <p className="text-sm text-muted-foreground">
                    Join our mission to transform mental health
                  </p>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <div className="w-1 h-1 bg-sky-blue rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-brand-pink rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-1 bg-sunshine-yellow rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative wave at bottom */}
            <div className="w-full h-2 bg-gradient-to-r from-sunshine-yellow via-sky-blue to-brand-pink"></div>
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
      
      {/* Enhanced backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 backdrop-blur-sm z-30 lg:hidden transition-all duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
