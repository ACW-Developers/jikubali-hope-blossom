import { useState, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users, Phone, Sparkles, Star, Circle } from "lucide-react";
import ContactPopup from "@/components/ui/contact-popup";

// Import your local image
import ctaBackground from "@/assets/general/v8.jpg"; 

const CallToAction = () => {
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [showVolunteerPopup, setShowVolunteerPopup] = useState(false);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Inline style for background image
  const sectionStyle = {
    backgroundImage: `url(${ctaBackground})`,
  };

  return (
    <section 
      className="section-spacing text-white relative overflow-hidden bg-cover bg-center bg-fixed min-h-screen flex items-center"
      style={sectionStyle}
    >
      {/* Advanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/70 to-pink-700/90 mix-blend-overlay"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 animate-pulse opacity-30">
        <Heart className="w-16 h-16 text-pink-300" fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 animate-pulse opacity-30" style={{ animationDelay: '1.5s' }}>
        <Heart className="w-20 h-20 text-blue-300" fill="currentColor" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 animate-float opacity-40">
        <Circle className="w-4 h-4 text-yellow-300" fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-40" style={{ animationDelay: '2s' }}>
        <Star className="w-3 h-3 text-blue-200" fill="currentColor" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float opacity-40" style={{ animationDelay: '3s' }}>
        <Sparkles className="w-3 h-3 text-pink-200" />
      </div>
      <div className="absolute top-2/5 right-1/3 animate-float opacity-40" style={{ animationDelay: '4s' }}>
        <Circle className="w-2 h-2 text-white" fill="currentColor" />
      </div>
      
      {/* Light Orbs */}
      <div className="absolute top-1/4 right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Be Part of the
            <span className="block text-sky-300 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-pink-300 animate-text">
              Change
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-4 opacity-95 font-medium drop-shadow-md">
            Your support transforms lives
          </p>
          
          <p className="text-lg mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Whether through volunteering, donating, or simply spreading awareness, 
            you can help us build a Kenya where mental health is understood, supported, and celebrated.
          </p>
        </div>

        {/* Action Buttons - Glassmorphism design */}
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            className="glass-effect bg-white/5 border border-white/20 text-sky-200 hover:bg-white/10 hover:border-white/40 backdrop-blur-md px-8 py-5 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => setShowPartnerPopup(true)}
          >
            Partner With Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            className="glass-effect bg-white/5 border border-white/20 text-sky-200 hover:bg-white/10 hover:border-white/40 backdrop-blur-md px-8 py-5 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => setShowVolunteerPopup(true)}
          >
            Volunteer
            <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
          <Button 
            className="glass-effect bg-white/5 border border-white/20 text-sky-200 hover:bg-white/10 hover:border-white/40 backdrop-blur-md px-8 py-5 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => setShowDonatePopup(true)}
          >
            Donate
            <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="currentColor" />
          </Button>
        </div>

        {/* Additional CTA */}
        <div className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Need immediate support?</p>
          <Button 
            className="bg-pink-500/90 border border-pink-300/30 text-white hover:bg-pink-600 backdrop-blur-sm px-6 py-4 transition-all duration-300 group hover:scale-105"
            onClick={() => setShowHelpPopup(true)}
          >
            <Phone className="w-4 h-4 mr-2" />
            Get Help Now
          </Button>
        </div>
      </div>

      {/* Contact Popups */}
      <ContactPopup
        isOpen={showPartnerPopup}
        onClose={() => setShowPartnerPopup(false)}
        title="Partnership Opportunities"
        subtitle="Let's work together to expand mental health resources in Kenya"
      />
      
      <ContactPopup
        isOpen={showVolunteerPopup}
        onClose={() => setShowVolunteerPopup(false)}
        title="Volunteer With Us"
        subtitle="Join our team and make a direct impact in your community"
      />
      
      <ContactPopup
        isOpen={showDonatePopup}
        onClose={() => setShowDonatePopup(false)}
        title="Support Our Mission"
        subtitle="Your donation helps us provide mental health services to those in need"
      />
      
      <ContactPopup
        isOpen={showHelpPopup}
        onClose={() => setShowHelpPopup(false)}
        title="Get Mental Health Support"
        subtitle="Take the first step towards wellness - we're here to help"
      />
      
      <ContactPopup
        isOpen={showConsultationPopup}
        onClose={() => setShowConsultationPopup(false)}
        title="Schedule Consultation"
        subtitle="Book your free mental health consultation with our experts"
      />

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes textShine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-text {
          background-size: 200% auto;
          animation: textShine 5s linear infinite;
        }
        .glass-effect {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
        }
      `}</style>
    </section>
  );
};

export default CallToAction;