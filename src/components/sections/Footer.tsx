import { useState, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, 
  Users, BookOpen, Heart, Megaphone, FileText, AlertCircle, 
  GraduationCap, BarChart3, Users2, Briefcase, ArrowRight,
  Send, ChevronUp, Clock, Star, Shield, CheckCircle, Globe
} from "lucide-react";

// Import your logo image
import LogoImage from "@/assets/logos/jikubali.png"; 

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setIsSubscribed(true);
      setEmail("");
      // Reset subscription message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    programs: [
      { label: "Peer Support Groups", href: "#programs", icon: Users },
      { label: "Mental Health Education", href: "#programs", icon: BookOpen },
      { label: "Counseling Services", href: "#programs", icon: Heart },
      { label: "Advocacy & Awareness", href: "#programs", icon: Megaphone }
    ],
    resources: [
      { label: "Mental Health Resources", href: "#", icon: FileText },
      { label: "Crisis Support", href: "#", icon: AlertCircle },
      { label: "Educational Materials", href: "#", icon: GraduationCap },
      { label: "Research & Reports", href: "#", icon: BarChart3 }
    ],
    about: [
      { label: "Our Story", href: "#about", icon: Users2 },
      { label: "Team", href: "#", icon: Users },
      { label: "Careers", href: "#", icon: Briefcase },
      { label: "Annual Reports", href: "#", icon: FileText }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/p/Jikubali-Africa-61552797188673/", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://www.tiktok.com/@jikubali.africa", label: "Twitter", color: "hover:text-blue-300" },
    { icon: Instagram, href: "https://www.instagram.com/jikubali_africa/", label: "Instagram", color: "hover:text-pink-300" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" }
  ];

  const trustBadges = [
    { icon: Shield, text: "Secure & Confidential" },
    { icon: CheckCircle, text: "Verified Non-Profit" },
    { icon: Globe, text: "Nationwide Reach" }
  ];

  // Color variations based on #141352
  const colorPalette = {
    primary: '#141352',        // Base color
    lighter: '#1e1d72',        // Lighter variation
    light: '#2a2991',          // Light variation
    accent: '#4f4dce',         // Accent color
    yellow: '#f9c74f',         // Complementary yellow
    pink: '#f72585',           // Complementary pink
    blue: '#4361ee'            // Complementary blue
  };

  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: colorPalette.primary }}>
      <style >{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse 3s ease-in-out infinite;
        }
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, ${colorPalette.accent}, ${colorPalette.pink}, ${colorPalette.yellow});
          padding: 2px;
          border-radius: 12px;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, ${colorPalette.accent}, ${colorPalette.pink}, ${colorPalette.yellow});
          border-radius: 14px;
          z-index: -1;
          animation: gradient 3s ease infinite;
          background-size: 400% 400%;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Premium wave top with enhanced design */}
      <div className="w-full h-20 mb-6 relative" style={{ backgroundColor: 'white' }}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
          style={{ color: colorPalette.primary }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="currentColor" opacity="0.2"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="currentColor" opacity="0.5"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                fill="currentColor"></path>
        </svg>
        
        {/* Floating elements above wave */}
        <div className="absolute -top-4 left-1/4 w-8 h-8 rounded-full animate-float" style={{ backgroundColor: `${colorPalette.yellow}20` }}></div>
        <div className="absolute -top-6 right-1/3 w-6 h-6 rounded-full animate-float" style={{ backgroundColor: `${colorPalette.pink}20`, animationDelay: '2s' }}></div>
        <div className="absolute -top-2 left-2/3 w-4 h-4 rounded-full animate-float" style={{ backgroundColor: `${colorPalette.blue}20`, animationDelay: '4s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container-padding py-12 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: colorPalette.yellow }}></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: colorPalette.pink }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-2xl" style={{ backgroundColor: colorPalette.blue }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section - Enhanced */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center overflow-hidden shadow-lg">
                  <img 
                    src={LogoImage} 
                    alt="Jikubali Africa Logo" 
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold">Jikubali Africa</h3>
                  <p className="text-white/70 text-sm">Mental Wellness & Community Support</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-6 max-w-md text-sm">
                Championing mental health, self-acceptance, and empowerment across Kenya. 
                Building communities where everyone thrives through comprehensive support programs.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {trustBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <div key={index} className="text-center p-3 rounded-xl" style={{ backgroundColor: colorPalette.lighter }}>
                      <IconComponent className="w-6 h-6 mx-auto mb-2" style={{ color: colorPalette.yellow }} />
                      <p className="text-xs text-white/80">{badge.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Contact Info - Enhanced */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: colorPalette.lighter }}>
                  <Mail className="w-5 h-5 flex-shrink-0" style={{ color: colorPalette.yellow }} />
                  <span className="text-sm">info@jikubaliafrica.org</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: colorPalette.lighter }}>
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: colorPalette.yellow }} />
                  <span className="text-sm">+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: colorPalette.lighter }}>
                  <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: colorPalette.yellow }} />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links - Enhanced */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${social.color}`}
                      style={{ backgroundColor: colorPalette.lighter }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Programs Links - Enhanced */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg flex items-center gap-2" style={{ color: colorPalette.yellow }}>
                <BookOpen className="w-5 h-5" />
                Programs
              </h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-white transition-all duration-300 text-sm flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 group"
                        style={{ color: 'white' }}
                        onMouseOver={(e) => e.currentTarget.style.color = colorPalette.yellow}
                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                      >
                        <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Resources Links - Enhanced */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg flex items-center gap-2" style={{ color: colorPalette.yellow }}>
                <FileText className="w-5 h-5" />
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-white transition-all duration-300 text-sm flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 group"
                        style={{ color: 'white' }}
                        onMouseOver={(e) => e.currentTarget.style.color = colorPalette.pink}
                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                      >
                        <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* About Links - Enhanced */}
            <div>
              <h4 className="font-heading mb-4 text-lg flex items-center gap-2" style={{ color: colorPalette.yellow }}>
                <Users2 className="w-5 h-5" />
                About
              </h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-white transition-all duration-300 text-sm flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 group"
                        style={{ color: 'white' }}
                        onMouseOver={(e) => e.currentTarget.style.color = colorPalette.blue}
                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                      >
                        <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Jikubali Africa. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Updated: {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white transition-colors flex items-center gap-1 hover:opacity-80">
                <Shield className="w-4 h-4" />
                Privacy
              </a>
              <a href="#" className="text-white transition-colors hover:opacity-80">Terms</a>
              <a href="#" className="text-white transition-colors hover:opacity-80">Cookies</a>
              <a href="#" className="text-white transition-colors hover:opacity-80">Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-50 transition-all duration-300 hover:scale-110 animate-pulse-soft"
          style={{ 
            background: `linear-gradient(to bottom right, ${colorPalette.accent}, ${colorPalette.pink})`
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;