import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community of support and empowerment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="w-8 h-8 text-sunshine-yellow opacity-60" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <Users className="w-10 h-10 text-brand-pink-light opacity-70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container-padding max-w-5xl">
        <div className="animate-fade-up">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Jikubali
            <span className="block text-sunshine-yellow">Africa</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 font-light opacity-95">
            Championing Mental Health
          </p>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90">
            Self-Acceptance • Empowerment • Community
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto opacity-85 leading-relaxed">
            Building a Kenya where mental wellness thrives, stigma dissolves, and every individual 
            discovers their inherent worth and unlimited potential.
          </p>
        </div>

        <div className="animate-fade-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.3s' }}>
          <Button variant="warm" size="xl" className="group">
            Get Involved
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="cool" size="xl">
            Our Programs
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-fade-up mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-sunshine-yellow mb-2">500+</div>
            <div className="text-sm opacity-90">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-pink-light mb-2">50+</div>
            <div className="text-sm opacity-90">Communities Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-blue-light mb-2">10+</div>
            <div className="text-sm opacity-90">Counties Served</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;