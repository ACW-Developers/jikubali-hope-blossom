import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users, Phone } from "lucide-react";
import ContactPopup from "@/components/ui/contact-popup";

// Import your local image
import ctaBackground from "@/assets/v8.jpg"; 

const CallToAction = () => {
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [showVolunteerPopup, setShowVolunteerPopup] = useState(false);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);

  // Inline style for background image
  const sectionStyle = {
    backgroundImage: `url(${ctaBackground})`,
  };

  return (
    <section 
      className="section-spacing text-white relative overflow-hidden bg-cover bg-center bg-fixed"
      style={sectionStyle}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-pink-700/80"></div>
      
      {/* Background Elements */}
      <div className="absolute top-10 left-10 animate-float opacity-20">
        <Heart className="w-16 h-16" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float opacity-20" style={{ animationDelay: '3s' }}>
        <Heart className="w-16 h-16" />
      </div>
      
      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <div className="animate-fade-up">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Be Part of the
            <span className="block text-sky-blue">Change</span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-4 opacity-95">
            Your support transforms lives
          </p>
          
          <p className="text-lg mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Whether through volunteering, donating, or simply spreading awareness, 
            you can help us build a Kenya where mental health is understood, supported, and celebrated.
          </p>
        </div>

        {/* Action Buttons - Transparent design */}
        <div className="animate-fade-up flex flex-col sm:flex-row justify-center items-center gap-6 mb-12" style={{ animationDelay: '0.3s' }}>
          <Button 
            className="bg-transparent border-2 border-blue-200 text-sky-blue-light hover:bg-white/10 hover:border-white backdrop-blur-sm px-8 py-5 transition-all duration-300 group"
            onClick={() => setShowPartnerPopup(true)}
          >
            Partner With Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            className="bg-transparent border-2 border-blue-200 text-sky-blue-light hover:bg-white/10 hover:border-white backdrop-blur-sm px-8 py-5 transition-all duration-300 group"
            onClick={() => setShowVolunteerPopup(true)}
          >
            Volunteer
            <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
    </section>
  );
};

export default CallToAction;