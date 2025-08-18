import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users, Phone } from "lucide-react";
import ContactPopup from "@/components/ui/contact-popup";

const CallToAction = () => {
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [showVolunteerPopup, setShowVolunteerPopup] = useState(false);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);

  return (
    <section className="section-spacing hero-gradient text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 animate-float opacity-20">
        <Heart className="w-16 h-16" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float opacity-20" style={{ animationDelay: '3s' }}>
        <Users className="w-20 h-20" />
      </div>
      
      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <div className="animate-fade-up">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Be Part of the
            <span className="block text-sunshine-yellow">Change</span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-4 opacity-95">
            Your support transforms lives
          </p>
          
          <p className="text-lg mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Whether through volunteering, donating, or simply spreading awareness, 
            you can help us build a Kenya where mental health is understood, supported, and celebrated.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="animate-fade-up grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="warm" 
            size="lg" 
            className="w-full group"
            onClick={() => setShowDonatePopup(true)}
          >
            Donate Now
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button 
            variant="accent" 
            size="lg" 
            className="w-full group"
            onClick={() => setShowVolunteerPopup(true)}
          >
            Volunteer
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full border-white/30 text-white hover:bg-white/10"
            onClick={() => setShowPartnerPopup(true)}
          >
            Partner With Us
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full border-white/30 text-white hover:bg-white/10 group"
            onClick={() => setShowHelpPopup(true)}
          >
            Get Help
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Contact Popups */}
      <ContactPopup
        isOpen={showDonatePopup}
        onClose={() => setShowDonatePopup(false)}
        title="Support Our Mission"
        subtitle="Your donation helps us provide mental health services to those in need"
      />
      
      <ContactPopup
        isOpen={showVolunteerPopup}
        onClose={() => setShowVolunteerPopup(false)}
        title="Volunteer With Us"
        subtitle="Join our team and make a direct impact in your community"
      />
      
      <ContactPopup
        isOpen={showPartnerPopup}
        onClose={() => setShowPartnerPopup(false)}
        title="Partnership Opportunities"
        subtitle="Let's work together to expand mental health resources in Kenya"
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