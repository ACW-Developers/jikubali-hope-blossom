import { useState, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users, ChevronDown } from "lucide-react";
import heroImage1 from "@/assets/bg2.jpg";
import heroImage2 from "@/assets/bg1.jpg";
import heroImage3 from "@/assets/bg4.jpg";
import heroImage4 from "@/assets/bg.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: heroImage1, alt: "Community of support and empowerment" },
    { src: heroImage2, alt: "Peaceful meditation and mental wellness" },
    { src: heroImage3, alt: "Joyful community celebration" },
    { src: heroImage4, alt: "Joyful community celebration" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl py-24">
          {/* Animated Decorative Elements */}
          <div className="absolute -top-10 left-0 animate-float opacity-70">
            <Heart className="w-12 h-12 text-sunshine-yellow" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
            <Users className="w-14 h-14 text-brand-pink-light opacity-80" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tagline */}
            <div className="animate-fade-right">
              <span className="inline-block px-4 py-2 bg-brand-pink-light/20 text-brand-pink-light rounded-full text-sm font-medium mb-4 border border-brand-pink-light/30">
                Championing Self Acceptance
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-right" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Jikubali</span>
              <span className="text-sunshine-yellow ml-2">Africa</span>
            </h1>
            </div>

            {/* Subheading */}
            <div className="animate-fade-right" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 max-w-lg leading-snug">
                Empowering minds through <span className="text-sunshine-yellow font-medium">self-acceptance</span>, <span className="text-brand-pink-light font-medium">community</span>, and <span className="text-sky-blue-light font-medium">hope</span>.
              </p>
            </div>

            {/* Description */}
            <div className="animate-fade-right" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
                We're building a Kenya where mental wellness thrives, stigma dissolves, 
                and every individual discovers their inherent worth and unlimited potential.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-right flex flex-wrap gap-4 pt-4" style={{ animationDelay: '0.8s' }}>
              <Button variant="warm" size="xl" className="group">
                Join Our Movement
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cool" size="xl">
                Explore Programs
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="animate-fade-up mt-16 lg:mt-24 grid grid-cols-3 gap-6 max-w-xl" style={{ animationDelay: '1s' }}>
            <div className="text-left">
              <div className="text-4xl font-bold text-sunshine-yellow mb-1">500+</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Lives Transformed</div>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold text-brand-pink-light mb-1">50+</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Communities Reached</div>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold text-sky-blue-light mb-1">10+</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Counties Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators - Vertical */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? "bg-sunshine-yellow shadow-glow h-12" 
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center">
          <ChevronDown className="w-6 h-6 text-white/80 animate-pulse" />
          <span className="text-xs text-white/60 mt-1">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;