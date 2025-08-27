import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users, ChevronDown, Play, Star, Quote, Sparkles } from "lucide-react";
import heroImage1 from "@/assets/general/bg2.jpg";
import heroImage2 from "@/assets/general/bg1.jpg";
import heroImage3 from "@/assets/general/bg4.jpg";
import heroImage4 from "@/assets/general/bg.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const images = [
    { src: heroImage1, alt: "Community of support and empowerment" },
    { src: heroImage2, alt: "Peaceful meditation and mental wellness" },
    { src: heroImage3, alt: "Joyful community celebration" },
    { src: heroImage4, alt: "Joyful community celebration" }
  ];

  const typingTexts = [
    "Self Acceptance",
    "Mental Wellness",
    "Community Support",
    "Healing & Growth",
    "Hope & Empowerment"
  ];

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const current = typingIndex % typingTexts.length;
      const fullText = typingTexts[current];
      
      if (isDeleting) {
        setTypingText(fullText.substring(0, typingText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setTypingText(fullText.substring(0, typingText.length + 1));
      }
      
      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(500);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setTypingIndex(typingIndex + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, typingIndex, typingTexts, typingSpeed]);

  // Background image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <style >{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(251, 191, 36, 0); }
          100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite;
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          width: 3px;
          background-color: #fbbf24;
          animation: blink 1s infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.7);
        }
      `}</style>

      {/* Background Carousel with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-110"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-sunshine-yellow/40 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl py-24">
          {/* Animated Decorative Elements */}
          <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="relative">
              <Sparkles className="w-8 h-8 text-brand-pink" />
              <div className="absolute inset-0 bg-brand-pink/20 rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2.5s' }}>
            <Users className="w-10 h-10 text-sky-blue-light" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tagline */}
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center px-4 py-2 bg-brand-pink-light/20 backdrop-blur-sm text-brand-pink-light rounded-full text-sm font-medium mb-4 border border-brand-pink-light/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Championing Mental Wellness
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight text-shadow">
                <span className="text-white">Jikubali</span>
                <span className="text-sunshine-yellow ml-2 text-glow">Africa</span>
              </h1>
            </div>

            {/* Typing Animation Subheading */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="h-12 flex items-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 max-w-lg leading-snug">
                  Empowering minds through{" "}
                  <span className="text-sunshine-yellow font-medium bg-black/20 px-2 py-1 rounded-lg">
                    {typingText}
                    <span className="typing-cursor"></span>
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
<div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
  {/* Small devices */}
  <p className="text-lg sm:hidden text-white/85 max-w-2xl leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-white/10">
    Advocating mental well-being through the power of self-love and acceptance, inspiring growth and positive change.
  </p>

  {/* Medium and larger devices */}
  <p className="hidden sm:block text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-white/10">
    We're building a World where mental wellness thrives, stigma dissolves, 
    and every individual discovers their inherent worth and unlimited potential.
  </p>
</div>

            {/* CTA Buttons */}
            <div 
  className="animate-fade-in-up flex flex-wrap gap-4 pt-4" 
  style={{ animationDelay: '0.8s' }}
>
  <a href="/contact">
    <Button variant="warm" size="xl" className="group animate-pulse-glow">
      Join Our Movement
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>
  
  <a href="/stories">
    <Button 
      variant="cool" 
      size="xl" 
      className="group backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
    > 
      Impact Stories
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>
</div>
          </div>

          {/* Stats Section */}
          <div 
  ref={statsRef}
  className="hidden md:grid mt-16 lg:mt-24 grid-cols-3 gap-6 max-w-xl backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10"
>
  {[
    { value: "5000+", label: "Lives Transformed", color: "text-sunshine-yellow", delay: 0 },
    { value: "10+", label: "Communities Reached", color: "text-brand-pink-light", delay: 0.2 },
    { value: "6+", label: "Counties Served", color: "text-sky-blue-light", delay: 0.4 }
  ].map((stat, index) => (
    <div 
      key={index}
      className="text-left transition-all duration-1000 ease-out"
      style={{
        opacity: isStatsVisible ? 1 : 0,
        transform: isStatsVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${stat.delay}s`
      }}
    >
      <div className={`text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
      <div className="text-sm uppercase tracking-wider text-white/80">{stat.label}</div>
    </div>
  ))}
</div>
        </div>
      </div>

      {/* Image Indicators - Vertical */}
      {/* Modified positioning for small devices */}
      <div className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative w-2 h-8 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? "bg-sunshine-yellow shadow-glow h-12" 
                : "bg-white/30 hover:bg-white/50"
            }`}
          >
            {index === currentImage && (
              <div className="absolute inset-0 bg-sunshine-yellow rounded-full animate-ping"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
  <div className="flex flex-col items-center">
    <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
      <ChevronDown className="w-4 h-4 text-white/80" />
    </div>
    <span className="text-xs text-white/60 mt-2">Scroll to Explore</span>
  </div>
</div>
    </section>
  );
};

export default Hero;