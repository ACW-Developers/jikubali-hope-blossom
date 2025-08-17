import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users2, Sparkles } from "lucide-react";

const About = () => {
  // Core values data
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach mental health with empathy, understanding, and unconditional acceptance."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We believe in each person's capacity to heal, grow, and create positive change."
    },
    {
      icon: Users2,
      title: "Community",
      description: "Healing happens in connection. We build supportive networks that uplift everyone."
    },
    {
      icon: Sparkles,
      title: "Hope",
      description: "We nurture hope and resilience, lighting the path toward mental wellness."
    }
  ];

  // Online gallery images
  const galleryImages = [
    { 
      src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
      alt: "Community workshop session" 
    },
    { 
      src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
      alt: "Group therapy in nature" 
    },
    { 
      src: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
      alt: "Youth empowerment program" 
    },
    { 
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
      alt: "Mental health awareness event" 
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Simple fade animation component
  const FadeIn = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div 
        className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      {/* Geometric background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-pink-100 blur-3xl opacity-50"></div>
        
        {/* Triangle pattern */}
        <div className="absolute left-0 top-1/4 w-32 h-32 opacity-10">
          <svg viewBox="0 0 200 200" className="text-blue-500 w-full h-full">
            <polygon points="100,0 0,200 200,200" fill="currentColor" />
          </svg>
        </div>
        
        {/* Circle pattern */}
        <div className="absolute right-0 bottom-1/3 w-40 h-40 opacity-10">
          <svg viewBox="0 0 200 200" className="text-pink-500 w-full h-full">
            <circle cx="100" cy="100" r="90" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Animated Gallery Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
            ))}
            
            {/* Gallery indicators */}
            <div className="absolute bottom-6 left-6 z-10 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage 
                      ? "bg-white w-6" 
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium text-blue-600">Since 2018</span>
            </div>
          </div>

          <div className="space-y-8">
            <FadeIn delay={100}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-600">Our Identity</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                More Than <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">An Organization</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"></div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jikubali Africa is a movement born from lived experiences and a deep understanding of 
                mental health challenges in African communities. Our name "Jikubali" (Swahili for 
                "accept yourself") represents our core philosophy.
              </p>
            </FadeIn>
            
            <FadeIn delay={500}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                  Our Full Story
                </button>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all">
                  Meet The Team
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <FadeIn delay={100}>
            <div className="bg-blue-50 p-8 rounded-3xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To champion mental health awareness, self-acceptance, and empowerment across Kenya, 
                creating safe spaces where individuals can heal, thrive, and discover their full potential. 
                We work tirelessly to dismantle stigma and build a society that values mental wellness.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-pink-500 p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="leading-relaxed opacity-95">
                  "A Kenya where mental health is understood, supported, and celebrated. Where every 
                  individual has access to resources, community, and the tools they need to live 
                  authentically and thrive completely."
                </p>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 200 200" className="text-white w-full h-full">
                    <path d="M100,0 C155.228,0 200,44.772 200,100 C200,155.228 155.228,200 100,200 C44.772,200 0,155.228 0,100 C0,44.772 44.772,0 100,0 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">Core Values</span>
            </h3>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide every aspect of our work and define who we are as an organization.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 100 + 300}>
              <Card className="border-none bg-white shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center shadow-inner">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;