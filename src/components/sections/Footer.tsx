import { Button } from "@/components/ui/enhanced-button";
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, 
  Users, BookOpen, Heart, Megaphone, FileText, AlertCircle, 
  GraduationCap, BarChart3, Users2, Briefcase
} from "lucide-react";

// Import your logo image
import LogoImage from "@/assets/logos/jikubali.png"; // replace with your actual logo path

const Footer = () => {
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
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Decorative wave top with extra spacing */}
      <div className="w-full h-14 bg-white mb-8">
        <svg 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none" 
          className="w-full h-full text-primary"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full gradient flex items-center justify-center overflow-hidden">
                  <img 
                    src={LogoImage} 
                    alt="Jikubali Africa Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold">Jikubali Africa</h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-4 max-w-md text-sm">
                Championing mental health, self-acceptance, and empowerment across Kenya. 
                Building communities where everyone thrives.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-sunshine-yellow" />
                  <span>info@jikubaliafrica.org</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-sunshine-yellow" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-sunshine-yellow" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-sunshine-yellow/30 flex items-center justify-center transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs Links */}
            <div>
              <h4 className="font-heading font-semibold mb-3 text-sunshine-yellow text-base">Programs</h4>
              <ul className="space-y-2">
                {footerLinks.programs.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-white hover:text-sunshine-yellow transition-colors duration-300 text-sm flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-heading font-semibold mb-3 text-sunshine-yellow text-base">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-white hover:text-brand-pink-light transition-colors duration-300 text-sm flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h4 className="font-heading mb-3 text-sunshine-yellow text-base">About</h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-white hover:text-sky-blue-light transition-colors duration-300 text-sm flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/80">
            <div>
              © 2025 Jikubali Africa. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-sunshine-yellow transition-colors">Privacy</a>
              <a href="#" className="text-white hover:text-sunshine-yellow transition-colors">Terms</a>
              <a href="#" className="text-white hover:text-sunshine-yellow transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
