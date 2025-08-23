import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, BookOpen, Image, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import ContactPopup from "@/components/ui/contact-popup";

// Import your logo image
import LogoImage from "@/assets/logos/jikubali.png"; // replace with your actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={16} /> },
    { name: "About", path: "/about", icon: <Info size={16} /> },
    { name: "Programs", path: "/programs", icon: <BookOpen size={16} /> },
    { name: "Stories", path: "/stories", icon: <Users size={16} /> },
    { name: "Gallery", path: "/gallery", icon: <Image size={16} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={16} /> },
  ];

  // Check if current page is home
  const isHomePage = location.pathname === "/";
  
  // Determine text color based on background state and page
  const textColorClass = !isHomePage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white");
  const logoTextColorClass = !isHomePage ? "text-sky-blue" : (scrolled ? "text-sky-blue" : "text-white");
  const mobileMenuBgClass = !isHomePage ? "bg-white" : (scrolled ? "bg-white" : "bg-gray-900/98 backdrop-blur-lg");
  const mobileLinkColorClass = !isHomePage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white");
  const menuButtonColorClass = !isHomePage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white");

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
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
            <span
              className={`font-heading font-bold text-xl lg:text-2xl group-hover:text-brand-pink transition-colors duration-300 ${logoTextColorClass}`}
            >
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
                  location.pathname === link.path
                    ? "text-brand-pink"
                    : textColorClass
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-pink transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
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
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 transform transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transform transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (floating dropdown) */}
        <div
          ref={menuRef}
          className={`lg:hidden absolute right-4 top-16 z-40 transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div
            className={`${mobileMenuBgClass} shadow-xl rounded-2xl w-60 overflow-hidden`}
          >
            <div className="py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-200 hover:bg-brand-pink/10 ${
                    location.pathname === link.path
                      ? "text-brand-pink bg-brand-pink/10"
                      : `${mobileLinkColorClass}`
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}

              {/* Divider */}
              <div className="border-t border-gray-200/30 mx-5 my-2"></div>

              <div className="px-5 pb-3">
                <Button
                  variant="warm"
                  size="sm"
                  className="w-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
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
