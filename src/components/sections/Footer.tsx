import { Button } from "@/components/ui/enhanced-button";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    programs: [
      { label: "Peer Support Groups", href: "#programs" },
      { label: "Mental Health Education", href: "#programs" },
      { label: "Counseling Services", href: "#programs" },
      { label: "Advocacy & Awareness", href: "#programs" }
    ],
    resources: [
      { label: "Mental Health Resources", href: "#" },
      { label: "Crisis Support", href: "#" },
      { label: "Educational Materials", href: "#" },
      { label: "Research & Reports", href: "#" }
    ],
    about: [
      { label: "Our Story", href: "#about" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Annual Reports", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full warm-gradient flex items-center justify-center">
                  <Heart className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Jikubali Africa</h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Championing mental health, self-acceptance, and empowerment across Kenya. 
                Building communities where everyone thrives.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-sunshine-yellow" />
                  <span>info@jikubaliafrica.org</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-sunshine-yellow" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-sunshine-yellow" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-sunshine-yellow/20 flex items-center justify-center transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-sunshine-yellow">Programs</h4>
              <ul className="space-y-2">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-sunshine-yellow transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-brand-pink-light">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-brand-pink-light transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-sky-blue-light">About</h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-sky-blue-light transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-primary-foreground/20 pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="font-heading text-xl font-semibold mb-4">Stay Connected</h4>
              <p className="text-primary-foreground/80 mb-6">
                Get updates on our programs, mental health resources, and community events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-sunshine-yellow"
                />
                <Button variant="accent" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <div>
              © 2024 Jikubali Africa. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;