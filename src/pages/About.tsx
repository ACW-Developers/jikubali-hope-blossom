import { Heart, Users, Target, Award, ChevronRight, Play, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Footer from "@/components/sections/Footer";
import { useEffect, useRef, useState } from "react";
import localImage from "@/assets/v21.png"; 
import bgImage from "@/assets/v4.jpg";
import patternBg from "@/assets/v8.jpg";

const About = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach mental health with empathy, understanding, and genuine care for every individual's journey."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong, supportive networks that foster healing, growth, and lasting connections."
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Dedicated to creating meaningful change in mental health awareness and access across Kenya."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in mental health support, education, and community programs."
    }
  ];

  const typingTexts = [
    "Jikubali Africa",
    "Mental Wellness",
    "Community Support",
    "Healing & Growth"
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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "values-section") {
              setIsValuesVisible(true);
            } else if (entry.target.id === "stats-section") {
              setIsStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (valuesRef.current) observer.observe(valuesRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-blue-light/5 to-brand-pink-light/5"></div>
        <div className="absolute top-24 right-12 w-44 h-44 bg-brand-pink/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-8 w-36 h-36 bg-sunshine-yellow/10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-6 w-28 h-28 bg-sky-blue-light/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-brand-pink/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '15s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-sky-blue/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-sunshine-yellow/20 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          width: 3px;
          background-color: #ec4899;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .image-no-bg {
          mix-blend-mode: multiply;
          filter: contrast(1.1) brightness(1.1);
        }
        @supports (mix-blend-mode: multiply) {
          .image-no-bg {
            mix-blend-mode: multiply;
            background: transparent;
          }
        }
      `}</style>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sky-blue-light/30 to-brand-pink-light/20">
          {/* Darker background image with overlay */}
          <div className="absolute inset-0 z-0 parallax-bg">
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
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="container-padding max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  ✨ Empowering Mental Wellness Since 2020
                </div>
                <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                  About <span className="text-brand-pink">Jikubali</span>
                </h1>
                <div className="h-12 mb-6">
                  <span className="text-lg lg:text-xl bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                    Championing <span className="text-brand-pink font-semibold">{typingText}</span>
                    <span className="typing-cursor h-6 align-middle"></span>
                  </span>
                </div>
                <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg">
                  Founded with a vision to transform mental health care in Kenya, Jikubali Africa 
                  champions self-acceptance, empowerment, and community support for all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="warm" size="lg" className="group">
                    Join Our Mission
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Our Story
                  </Button>
                </div>
              </div>
              
              {/* Modified image section */}
              <div className="animate-fade-up relative" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-blue to-brand-pink rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700 bg-transparent">
                  {/* Container to control size and remove background */}
                  <div className="w-4/5 mx-auto bg-transparent">
                    <img 
                      src={localImage} 
                      alt="Community mental health support session"
                      className="w-full h-full object-contain drop-shadow-2xl image-no-bg"
                      style={{ 
                        filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3)) brightness(1.1) contrast(1.2)',
                        backgroundColor: 'transparent'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-10 text-white">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-sunshine-yellow text-sunshine-yellow" />
                        ))}
                        <span className="ml-2 text-sm">5.0 (200+ reviews)</span>
                      </div>
                      <p className="text-sm">"Jikubali changed my perspective on mental health" - Wairimu L.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-sky-blue-light/30 to-transparent"></div>
          
          <div className="container-padding max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                📖 Our Journey
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Our <span className="text-brand-pink">Story</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-brand-pink mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Jikubali Africa was born from a deep understanding that mental health is not a luxury, 
                but a fundamental human right that should be accessible to all Kenyans.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="animate-fade-up">
                <h3 className="font-heading text-2xl font-bold mb-6 text-brand-pink">
                  The Beginning
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  In 2020, our founders recognized a critical gap in mental health services across Kenya. 
                  Traditional barriers—stigma, cost, and accessibility—were preventing millions from 
                  receiving the support they needed.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  What started as community conversations in Nairobi has grown into a nationwide movement, 
                  reaching over 50 communities and transforming hundreds of lives through innovative 
                  programs and genuine human connection.
                </p>
                <div className="flex items-center gap-4 p-4 bg-sky-blue-light/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-blue to-brand-pink rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">JA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Founded with Purpose</div>
                    <div className="text-sm text-foreground/60">Driven by community need</div>
                  </div>
                </div>
              </div>
              
              <div 
                id="stats-section"
                ref={statsRef}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { value: "5,000+", label: "Lives Touched", color: "sky-blue", delay: 0 },
                  { value: "15", label: "Counties Served", color: "brand-pink", delay: 0.1 },
                  { value: "50+", label: "Community Partners", color: "sunshine-yellow", delay: 0.2 },
                  { value: "24/7", label: "Crisis Support", color: "dark-navy", delay: 0.3 }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={`bg-white backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover-lift border border-gray-100 transition-all duration-500 transform ${
                      isStatsVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                      transitionDelay: `${stat.delay}s`,
                      borderLeft: `4px solid var(--${stat.color})`
                    }}
                  >
                    <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Timeline */}
            <div className="relative mt-24">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-blue to-brand-pink"></div>
              
              {[
                { year: "2020", title: "Foundation", desc: "Jikubali Africa founded in response to mental health gap" },
                { year: "2021", title: "Expansion", desc: "Programs expanded to 5 additional counties" },
                { year: "2022", title: "Recognition", desc: "Received national award for community mental health work" },
                { year: "2023", title: "Growth", desc: "Reached 5,000+ individuals with mental health support" },
                { year: "2024", title: "Innovation", desc: "Launched digital platform for wider accessibility" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className={`w-64 p-6 rounded-2xl shadow-lg bg-white border-l-4 ${
                      index % 4 === 0 ? 'border-sky-blue' : 
                      index % 4 === 1 ? 'border-brand-pink' : 
                      index % 4 === 2 ? 'border-sunshine-yellow' : 'border-dark-navy'
                    }`}>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-center md:w-1/2 relative">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-brand-pink z-10"></div>
                    <div className="absolute text-lg font-bold text-foreground/80 top-8">{item.year}</div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xs"></div>
          
          <div className="container-padding max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full text-sm font-medium mb-6">
                💎 Core Values
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Our <span className="text-sky-blue">Values</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-sunshine-yellow mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                These core principles guide everything we do, from community outreach to individual support sessions.
              </p>
            </div>

            <div 
              id="values-section"
              ref={valuesRef} 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => {
                const colors = ['sky-blue', 'brand-pink', 'sunshine-yellow', 'dark-navy'];
                const colorClass = colors[index];
                
                return (
                  <div 
                    key={value.title}
                    className={`text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-0 hover-lift transition-all duration-700 transform ${
                      isValuesVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-20 h-20 ${
                      colorClass === 'sky-blue' ? 'bg-sky-blue' :
                      colorClass === 'brand-pink' ? 'bg-brand-pink' :
                      colorClass === 'sunshine-yellow' ? 'bg-sunshine-yellow' :
                      'bg-dark-navy'
                    } rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 hover:scale-110`}>
                      <value.icon className={`w-10 h-10 ${colorClass === 'sunshine-yellow' ? 'text-dark-navy' : 'text-white'}`} />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-dark-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${patternBg})` }}
            ></div>
          </div>
          
          <div className="container-padding max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-brand-pink/20 text-brand-pink-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                ❤️ Stories of Hope
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Community <span className="text-sky-blue">Testimonials</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-sky-blue mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "Jikubali helped me find my strength during my darkest days. The support group gave me a community when I felt completely alone.",
                  author: "Grace W.",
                  role: "Nairobi Support Group"
                },
                {
                  text: "As a teacher, I've used Jikubali's resources to help my students cope with anxiety. The impact on our school community has been incredible.",
                  author: "Michael K.",
                  role: "School Counselor"
                },
                {
                  text: "The workshops transformed how our community views mental health. We're now having open conversations that were once considered taboo.",
                  author: "Community Leader",
                  role: "Kisumu County"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-lift transition-all duration-500"
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

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-white to-sky-blue-light/20 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-pink/5 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-blue/5 rounded-full"></div>
          
          <div className="container-padding max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-slide-in p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-brand-pink" />
                </div>
                <h3 className="font-heading text-3xl font-bold mb-6 text-brand-pink">Our Mission</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  To champion mental health awareness, provide accessible support services, and create 
                  empowering communities where every individual can embrace their authentic self and thrive.
                </p>
                <p className="text-foreground/80">
                  We believe that mental wellness is not a destination but a journey—one that should be 
                  supported with compassion, understanding, and evidence-based care.
                </p>
              </div>
              <div className="animate-fade-up p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-heading text-3xl font-bold mb-6 text-sky-blue">Our Vision</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  A Kenya where mental health stigma is eliminated, support is universally accessible, 
                  and every individual has the tools and community they need to flourish.
                </p>
                <p className="text-foreground/80">
                  We envision thriving communities where mental wellness is prioritized, celebrated, 
                  and integrated into the fabric of daily life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sky-blue to-brand-pink text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          
          <div className="container-padding max-w-4xl mx-auto relative z-10">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Together, we can create a Kenya where mental health is prioritized and everyone has access to the support they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-dark-navy hover:bg-gray-100">
                Volunteer With Us
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Make a Donation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Partner With Us
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;