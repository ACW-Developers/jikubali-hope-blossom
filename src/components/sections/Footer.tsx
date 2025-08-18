import { Button } from "@/components/ui/enhanced-button";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    programs: [
      { label: "Peer Support Groups", href: "/programs" },
      { label: "Mental Health Education", href: "/programs" },
      { label: "Counseling Services", href: "/programs" },
      { label: "Advocacy & Awareness", href: "/programs" }
    ],
    resources: [
      { label: "Mental Health Resources", href: "#" },
      { label: "Crisis Support", href: "/contact" },
      { label: "Educational Materials", href: "#" },
      { label: "Research & Reports", href: "#" }
    ],
    about: [
      { label: "Our Story", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Success Stories", href: "/stories" },
      { label: "Annual Reports", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/jikubaliafrica", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/jikubaliafrica", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/jikubaliafrica", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/jikubaliafrica", label: "LinkedIn" }
  ];

  const quickStats = [
    { number: "10,000+", label: "Lives Touched" },
    { number: "50+", label: "Communities" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-sky-blue to-brand-pink text-white overflow-hidden">
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-sunshine-yellow rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-pink-light rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-sky-blue-light rotate-45 transform -translate-y-16"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-sunshine-yellow-light rounded-full"></div>
      </div>
      
      {/* Decorative wave top */}
      <div className="relative w-full h-20 bg-gradient-to-r from-background via-muted to-background">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full text-primary"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            opacity=".3"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="currentColor" 
            opacity=".6"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Quick Impact Stats */}
      <div className="relative border-b border-white/20 py-12">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {quickStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-sunshine-yellow">{stat.number}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="relative container-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sunshine-yellow to-brand-pink-light flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold bg-gradient-to-r from-sunshine-yellow to-white bg-clip-text text-transparent">
                  Jikubali Africa
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-8 max-w-md text-lg">
                Championing mental health, self-acceptance, and empowerment across Kenya. 
                Building communities where everyone thrives.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-white/90 hover:text-sunshine-yellow transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-sunshine-yellow/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">info@jikubaliafrica.org</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 hover:text-sunshine-yellow transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-sunshine-yellow/20 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 hover:text-sunshine-yellow transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-sunshine-yellow/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group w-12 h-12 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-sunshine-yellow hover:to-brand-pink-light flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs Links */}
            <div className="space-y-1">
              <h4 className="font-heading font-bold mb-6 text-xl text-sunshine-yellow flex items-center">
                <div className="w-2 h-8 bg-sunshine-yellow rounded-full mr-3"></div>
                Programs
              </h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-sunshine-yellow transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-sunshine-yellow rounded-full mr-3 opacity-60 group-hover:opacity-100"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-1">
              <h4 className="font-heading font-bold mb-6 text-xl text-brand-pink-light flex items-center">
                <div className="w-2 h-8 bg-brand-pink-light rounded-full mr-3"></div>
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-brand-pink-light transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-pink-light rounded-full mr-3 opacity-60 group-hover:opacity-100"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div className="space-y-1">
              <h4 className="font-heading font-bold mb-6 text-xl text-sky-blue-light flex items-center">
                <div className="w-2 h-8 bg-sky-blue-light rounded-full mr-3"></div>
                About
              </h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-sky-blue-light transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-sky-blue-light rounded-full mr-3 opacity-60 group-hover:opacity-100"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-white/20 pt-16 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <h4 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">Stay Connected</h4>
                <p className="text-white/90 mb-8 text-lg">
                  Get updates on our programs, mental health resources, and community events directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sunshine-yellow focus:border-sunshine-yellow"
                  />
                  <Button 
                    variant="accent" 
                    className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-sunshine-yellow to-brand-pink-light hover:from-sunshine-yellow-dark hover:to-brand-pink text-gray-800 font-bold rounded-2xl"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  Join 5,000+ mental health advocates in our community.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white/70">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-center md:text-left">
                © 2024 Jikubali Africa. All rights reserved.
              </div>
              <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-center md:text-left text-sm">
                Empowering mental wellness across Kenya
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <a href="#" className="hover:text-white transition-colors text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors text-sm hover:underline">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors text-sm hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;