import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users, Phone } from "lucide-react";

const CallToAction = () => {
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
          <Button variant="warm" size="lg" className="w-full group">
            Donate Now
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button variant="accent" size="lg" className="w-full group">
            Volunteer
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10">
            Partner With Us
          </Button>
          <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 group">
            Get Help
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Contact CTA */}
        <div className="animate-fade-up bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-heading text-2xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="mb-6 opacity-90">
            Take the first step toward mental wellness today. Our team is here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" className="group">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Call Crisis Line: 988
            </Button>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm opacity-75">
            <strong>Crisis Support:</strong> If you're experiencing a mental health emergency, 
            call 911 or visit your nearest emergency room immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;