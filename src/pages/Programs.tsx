import { useState, useRef, useEffect } from "react";
import { Users, Heart, BookOpen, Phone, MessageCircle, Calendar, ArrowRight, Play, Star, Quote, Sparkles, Bike, Laptop, Gamepad, Mail, Mic, ChevronDown, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/sections/Footer";

import cyclingImg from "@/assets/events/F8.jpg";
import webinarImg from "@/assets/general/contact-image.jpg";
import gamingImg from "@/assets/general/v9.jpg";
import letterImg from "@/assets/general/v7.jpg";
import colorSplashImg from "@/assets/events/F.jpg";
import talentImg from "@/assets/general/v12.jpg";
import counselingImg from "@/assets/general/v15.jpg";
import groupImg from "@/assets/general/v13.jpg";
import crisisImg from "@/assets/general/20.jpg";
import bgImage from "@/assets/general/v15.jpg";
import communityImage from "@/assets/general/peris2.png"; 

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const statsRef = useRef(null);

  const typingTexts = [
    "Healing Communities",
    "Mental Wellness",
    "Personal Growth",
    "Supportive Networks"
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

  // Intersection Observer for animations
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

  const programCategories = [
    { id: "all", label: "All Programs", icon: Sparkles },
    { id: "events", label: "Community Events", icon: Calendar },
    { id: "virtual", label: "Virtual Programs", icon: Laptop },
    { id: "counseling", label: "Counseling Services", icon: Heart }
  ];

  const programs = [
    {
      icon: Bike,
      title: "Cycling for Self-Love",
      description: "Group cycling events that promote physical wellness and self-acceptance through movement and community.",
      features: ["Guided rides", "Mindfulness sessions", "Community bonding", "Scenic routes"],
      color: "sky-blue",
      category: "events",
      image: cyclingImg,
      duration: "2 hours",
      intensity: "Moderate"
    },
    {
      icon: Gamepad,
      title: "Therapeutic Gaming Events",
      description: "Fun, engaging gaming sessions that promote mental wellness and social connection.",
      features: ["Team building", "Stress relief", "Social interaction", "Friendly competition"],
      color: "sunshine-yellow",
      category: "events",
      image: gamingImg,
      duration: "2 hours",
      intensity: "Light"
    },
    {
      icon: Mail,
      title: "Letter Writing to Self",
      description: "Guided sessions for reflective letter writing to promote self-awareness and healing.",
      features: ["Therapeutic writing", "Guided prompts", "Privacy ensured", "Personal growth"],
      color: "sky-blue",
      category: "events",
      image: letterImg,
      duration: "1.5 hours",
      intensity: "Moderate"
    },
    {
      icon: Sparkles,
      title: "Color Splash Therapy",
      description: "Creative color-based activities that encourage emotional expression and joy.",
      features: ["Art therapy", "Color psychology", "Non-verbal expression", "Fun atmosphere"],
      color: "brand-pink",
      category: "events",
      image: colorSplashImg,
      duration: "2 hours",
      intensity: "Light"
    },
    {
      icon: Mic,
      title: "Talent Showcases",
      description: "Community talent shows that build confidence and celebrate individual strengths.",
      features: ["Safe environment", "Skill sharing", "Community support", "Performance opportunities"],
      color: "sunshine-yellow",
      category: "events",
      image: talentImg,
      duration: "3 hours",
      intensity: "Moderate"
    },
    {
      icon: Heart,
      title: "Counseling Sessions",
      description: "One-on-one sessions with qualified mental health professionals.",
      features: ["Professional therapists", "Flexible scheduling", "Multiple languages", "Sliding scale fees"],
      color: "sky-blue",
      category: "counseling",
      image: counselingImg,
      duration: "1 hour",
      intensity: "Intensive"
    },
    {
      icon: Users,
      title: "Group Therapy Sessions",
      description: "Structured group counseling for shared experiences and mutual support.",
      features: ["Peer support", "Therapist guided", "Topic-focused", "Confidential setting"],
      color: "brand-pink",
      category: "counseling",
      image: groupImg,
      duration: "1.5 hours",
      intensity: "Moderate"
    },
    {
      icon: Phone,
      title: "Mentorship Sessions",
      description: "Immediate help for mental health emergencies, available any time.",
      features: ["Always available", "Trained counselors", "Multiple languages", "Confidential support"],
      color: "sunshine-yellow",
      category: "counseling",
      image: crisisImg,
      duration: "Varies",
      intensity: "Intensive"
    },
    {
      icon: Laptop,
      title: "Mental Health Webinars",
      description: "Virtual sessions covering various mental health topics, accessible from anywhere.",
      features: ["Expert speakers", "Q&A sessions", "Interactive workshops", "Recorded access"],
      color: "brand-pink",
      category: "virtual",
      image: webinarImg,
      duration: "1.5 hours",
      intensity: "Light"
    },
  ];

  const filteredPrograms = activeCategory === "all" 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "sky-blue":
        return "from-sky-blue to-sky-blue-light text-white";
      case "brand-pink":
        return "from-brand-pink to-brand-pink-light text-white";
      case "sunshine-yellow":
        return "from-sunshine-yellow to-sunshine-yellow-light text-gray-800";
      default:
        return "from-sky-blue to-brand-pink text-white";
    }
  };

  const stats = [
    { value: "5000+", label: "Participants Served", color: "text-sky-blue" },
    { value: "10+", label: "Events Hosted", color: "text-brand-pink" },
    { value: "98%", label: "Satisfaction Rate", color: "text-sunshine-yellow" },
    { value: "6", label: "Counties Reached", color: "text-dark-navy" }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          width: 3px;
          background-color: #fbbf24;
          animation: blink 1s infinite;
        }
        .program-card {
          transition: all 0.3s ease;
        }
        .program-card:hover {
          transform: translateY(-8px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-36 h-36 bg-sky-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-brand-pink/10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-5 w-20 h-20 bg-sunshine-yellow/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-brand-pink/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '15s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-sky-blue/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-sunshine-yellow/20 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with Darker Background */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Darker background image with overlay */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundImage: `url(${bgImage})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            ></div>
            {/* Darker overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-12 xl:px-24 mt-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  🎯 Comprehensive Mental Health Support
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Our <span className="text-brand-pink">Programs</span>
                </h1>
                
                {/* Typing Animation Subheading */}
                <div className="h-16 mb-6 flex items-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 max-w-lg leading-snug">
                    Empowering minds through{" "}
                    <span className="font-medium bg-gradient-to-r from-sky-blue to-brand-pink bg-clip-text text-transparent">
                      {typingText}
                      <span className="typing-cursor"></span>
                    </span>
                  </p>
                </div>
                
                <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg">
                  Comprehensive mental health services designed to meet diverse community needs, 
                  from crisis intervention to long-term wellness support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="warm" size="lg" className="group">
                    Our Programs
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Our Story
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-blue to-brand-pink rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
                  <img 
                    src={communityImage} 
                    alt="Community mental health program participants"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-sunshine-yellow text-sunshine-yellow" />
                        ))}
                        <span className="ml-2 text-sm">4.9 (350+ reviews)</span>
                      </div>
                      <p className="text-sm">"These programs transformed my approach to mental wellness" - Peris M.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24">
            <div 
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-sky-blue-light/10 to-brand-pink-light/10 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-1000 ease-out"
                  style={{
                    opacity: isStatsVisible ? 1 : 0,
                    transform: isStatsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 0.2}s`
                  }}
                >
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider text-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-gradient-to-br from-sky-blue-light/10 to-brand-pink-light/10 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Transformative <span className="text-sky-blue">Programs</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-brand-pink mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Each program is carefully designed to address specific mental health needs while 
                fostering community connection and personal empowerment.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {programCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-sky-blue to-brand-pink text-white shadow-lg"
                        : "bg-white/80 text-foreground/70 hover:bg-white hover:text-foreground shadow-sm"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <div 
                  key={program.title}
                  className="program-card animate-fade-in-up overflow-hidden rounded-2xl shadow-lg hover:shadow-xl border border-white/20 bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {program.category === "events" ? "Event" : 
                       program.category === "virtual" ? "Virtual" : "Service"}
                    </div>

                  </div>
                  <CardHeader className={`bg-gradient-to-br ${getColorClasses(program.color)} text-center py-6`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <program.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-heading">{program.title}</CardTitle>
                    <CardDescription className="text-white/90">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        program.intensity === "Light" ? "bg-green-100 text-green-800" :
                        program.intensity === "Moderate" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {program.intensity} Intensity
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-foreground/80 text-sm">
                          <div className={`w-2 h-2 ${
                            program.color === "sky-blue" ? "bg-sky-blue" :
                            program.color === "brand-pink" ? "bg-brand-pink" :
                            "bg-sunshine-yellow"
                          } rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xs"></div>
          
          <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full text-sm font-medium mb-6">
                💎 Our Approach
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Our <span className="text-sky-blue">Methodology</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-sunshine-yellow mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description: "We approach every individual with empathy, understanding, and genuine care for their unique journey."
                },
                {
                  icon: Users,
                  title: "Community Focus",
                  description: "Building strong, supportive networks that foster healing and lasting connections."
                },
                {
                  icon: Target,
                  title: "Holistic Approach",
                  description: "Addressing mental health through multiple dimensions of wellness for comprehensive care."
                },
                {
                  icon: Award,
                  title: "Evidence-Based",
                  description: "Using proven methodologies and continuously evaluating our programs for effectiveness."
                }
              ].map((value, index) => {
                const colors = ['sky-blue', 'brand-pink', 'sunshine-yellow', 'dark-navy'];
                const colorClass = colors[index];
                
                return (
                  <div 
                    key={value.title}
                    className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-0 hover-lift transition-all duration-700 transform animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 ${
                      colorClass === 'sky-blue' ? 'bg-sky-blue' :
                      colorClass === 'brand-pink' ? 'bg-brand-pink' :
                      colorClass === 'sunshine-yellow' ? 'bg-sunshine-yellow' :
                      'bg-dark-navy'
                    } rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-500 hover:scale-110`}>
                      <value.icon className={`w-8 h-8 ${colorClass === 'sunshine-yellow' ? 'text-dark-navy' : 'text-white'}`} />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-dark-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                Stories of <span className="text-sky-blue">Transformation</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-sky-blue mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "The cycling events helped me reconnect with my body and learn to appreciate myself in a whole new way.",
                  author: "Sarah M.",
                  role: "Cycling Program Participant"
                },
                {
                  text: "I was hesitant about therapy, but the letter writing workshop opened up emotions I didn't even know I had.",
                  author: "Michael T.",
                  role: "Writing Workshop Attendee"
                },
                {
                  text: "The talent show gave me the confidence to share my poetry for the first time. The support was incredible.",
                  author: "Grace W.",
                  role: "Talent Show Performer"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Quote className="w-10 h-10 text-brand-pink/30 mb-4" />
                  <p className="text-white/90 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-blue to-brand-pink rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                How to <span className="text-brand-pink">Get Started</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-brand-pink mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-foreground/80">
                Taking the first step towards mental wellness is easier than you think.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-blue to-brand-pink rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-sky-blue">Reach Out</h3>
                <p className="text-foreground/80">
                  Contact us through our hotline, website, or visit one of our community centers.
                </p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-pink to-sunshine-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-brand-pink">Assessment</h3>
                <p className="text-foreground/80">
                  We'll help you identify which programs best suit your needs and circumstances.
                </p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-sunshine-yellow to-sky-blue rounded-full flex items-center justify-center mx-auto mb-6 text-gray-800 font-bold text-xl shadow-lg">
                  3
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-sunshine-yellow-dark">Begin Journey</h3>
                <p className="text-foreground/80">
                  Start your chosen program with full support from our team and community.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="warm" size="lg" className="group">
                Start Your Journey Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Programs;