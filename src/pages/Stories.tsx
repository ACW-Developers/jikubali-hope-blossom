import { useState, useEffect, useRef } from "react";
import { Quote, Heart, Star, Play, ChevronDown, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import Footer from "@/components/sections/Footer";

// Import local images
import heroBackground from "@/assets/general/v24.jpg";
import story1 from "@/assets/general/bg5.jpg";
import story2 from "@/assets/general/v25.jpg";
import story3 from "@/assets/general/v26.jpg";
import story4 from "@/assets/general/v27.jpg";
import story5 from "@/assets/general/v28.jpg";
import story6 from "@/assets/general/v2.jpg";
import ctaBackground from "@/assets/general/v27.jpg";

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const sectionRefs = useRef([]);

  const typingWords = ["Hope", "Healing", "Recovery", "Strength"];
  const typingSpeed = 300;
  const eraseSpeed = 120;
  const pauseTime = 1500;

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation effect
    const typingInterval = setInterval(() => {
      if (typingIndex < typingWords.length) {
        const currentWord = typingWords[typingIndex];
        
        if (!typingComplete && typingText !== currentWord) {
          // Typing phase
          setTypingText(currentWord.slice(0, typingText.length + 1));
        } else if (typingComplete && typingText !== "") {
          // Erasing phase
          setTypingText(typingText.slice(0, typingText.length - 1));
        } else {
          // Switch between typing and erasing
          setTypingComplete(!typingComplete);
          if (typingComplete) {
            setTypingIndex((prev) => (prev + 1) % typingWords.length);
          }
        }
      }
    }, typingComplete ? eraseSpeed : typingSpeed);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearInterval(typingInterval);
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [typingText, typingComplete, typingIndex]);

  const stories = [
    {
      id: 1,
      name: "Amina K.",
      age: 28,
      category: "recovery",
      title: "Finding My Voice Again",
      story: "After years of struggling with anxiety and depression, Jikubali Africa's community support groups gave me the courage to speak up and seek help. The weekly sessions became my safe haven, and the peer support helped me realize I wasn't alone.",
      impact: "Completed anxiety management program",
      image: story1
    },
    {
      id: 2,
      name: "David M.",
      age: 35,
      category: "family",
      title: "Healing Our Family",
      story: "When my teenage son started showing signs of depression, our family didn't know where to turn. Jikubali Africa's family counseling program not only helped my son but taught us all how to communicate better and support each other.",
      impact: "Family therapy success",
      image: story2
    },
    {
      id: 3,
      name: "Grace W.",
      age: 22,
      category: "empowerment",
      title: "From Survivor to Advocate",
      story: "The trauma I experienced almost broke me, but through Jikubali's individual counseling and peer mentorship program, I not only healed but found my purpose in helping other survivors. Now I'm training to become a peer counselor myself.",
      impact: "Now training as peer counselor",
      image: story3
    },
    {
      id: 4,
      name: "James O.",
      age: 42,
      category: "workplace",
      title: "Breaking the Stigma",
      story: "As a corporate manager, I thought seeking mental health support would hurt my career. Jikubali's workplace wellness program showed me that taking care of my mental health actually made me a better leader and colleague.",
      impact: "Workplace mental health champion",
      image: story4
    },
    {
      id: 5,
      name: "Mary N.",
      age: 19,
      category: "youth",
      title: "University Life Transformed",
      story: "University pressure and being away from home for the first time triggered severe anxiety. The youth-focused programs at Jikubali helped me develop coping strategies and connect with other students facing similar challenges.",
      impact: "Academic performance improved",
      image: story5
    },
    {
      id: 6,
      name: "Samuel K.",
      age: 55,
      category: "community",
      title: "Building Stronger Communities",
      story: "As a community elder, I initially resisted the idea of mental health programs in our village. But after seeing the positive changes in my neighbors who participated, I became one of Jikubali's biggest advocates.",
      impact: "Community mental health ambassador",
      image: story6
    }
  ];

  const categories = [
    { id: "all", name: "All Stories", count: stories.length },
    { id: "recovery", name: "Recovery", count: stories.filter(s => s.category === "recovery").length },
    { id: "family", name: "Family", count: stories.filter(s => s.category === "family").length },
    { id: "empowerment", name: "Empowerment", count: stories.filter(s => s.category === "empowerment").length },
    { id: "workplace", name: "Workplace", count: stories.filter(s => s.category === "workplace").length },
    { id: "youth", name: "Youth", count: stories.filter(s => s.category === "youth").length },
    { id: "community", name: "Community", count: stories.filter(s => s.category === "community").length }
  ];

  const filteredStories = selectedCategory === "all" 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-32 right-16 w-64 h-64 bg-brand-pink/5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-8 w-48 h-48 bg-sunshine-yellow/5 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-4 w-40 h-40 bg-sky-blue-light/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-pink/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
      {/* Hero Section with local background image */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="min-h-screen flex items-center justify-start relative overflow-hidden section-spacing"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0"></div>
        
        {/* Animated gradient overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/10 via-transparent to-sky-blue-light/10 z-0 animate-gradient-shift"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 text-left relative z-10">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 text-white border border-white/20">
              <Sparkles className="w-5 h-5 mr-2 text-sunshine-yellow" />
              <span className="text-md font-medium">Inspiring Hope & Healing</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Transformative <br />
              Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink-light to-sunshine-yellow relative typing-text">
                {typingText}
                <span className="typing-cursor">|</span>
              </span>
            </h1>
            
            <p className="text-xl lg:text-xl text-white/90 mb-8 leading-relaxed">
              Discover powerful journeys of resilience and transformation from people who found hope 
              through mental health support and community connection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-brand-pink hover:bg-brand-pink-dark text-white transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-full">
                Read Their Stories
              </Button>
              
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
            
            <div className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <ChevronDown className="w-10 h-10 text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="py-12 bg-white/90 backdrop-blur-md sticky top-20 z-20 transition-all duration-500 shadow-lg"
      >
        <div className="container-padding max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-sky-blue-dark">Browse Stories by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center border ${
                  selectedCategory === category.id
                    ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/30 transform scale-105 border-transparent"
                    : "bg-white text-foreground hover:bg-brand-pink/10 hover:text-brand-pink border-gray-200"
                }`}
              >
                <span>{category.name}</span>
                <span className="ml-2 bg-black/10 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="section-spacing relative"
      >
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Inspiring <span className="text-brand-pink">Journeys</span> of Hope
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              These powerful stories showcase the resilience of the human spirit and the transformative power of mental health support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card 
                key={story.id}
                className="overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <div 
                      className="h-48 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${story.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-pink text-white text-xs font-medium rounded-full capitalize">
                        {story.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-heading font-bold text-xl">{story.name}</h3>
                      <p className="text-white/80">Age {story.age}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <Quote className="w-8 h-8 text-brand-pink/60 mb-4" />
                    
                    <h4 className="font-heading font-bold text-lg mb-4 text-sky-blue">
                      {story.title}
                    </h4>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed flex-grow">
                      "{story.story}"
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sunshine-yellow-dark">
                        <Heart className="w-4 h-4 mr-2 fill-current" />
                        <span className="text-sm font-medium">{story.impact}</span>
                      </div>
                      
                      <button className="text-xs text-brand-pink font-medium hover:underline">
                        Read full story →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-medium text-foreground/70">No stories found in this category</h3>
              <p className="text-foreground/50 mt-2">Check back later or browse all stories</p>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="section-spacing relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/90 to-brand-pink/90"></div>
        </div>
        
        <div className="container-padding max-w-6xl mx-auto text-center text-white relative z-10">
          <div className="animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Share Your <span className="text-sunshine-yellow">Story</span>
            </h2>
            
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Your journey of healing and growth could inspire others to take their first step 
              toward mental wellness. Help us build a community of hope and resilience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-sky-blue transition-all duration-300 transform hover:scale-105">
                Submit Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="section-spacing bg-gradient-to-br from-sky-blue-light/10 to-brand-pink-light/10"
      >
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Stories Create <span className="text-brand-pink">Impact</span>
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Every story shared helps reduce stigma and encourages others to seek support. 
              Together, we're building a movement of mental wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Stories Shared", color: "text-sky-blue" },
              { value: "85%", label: "Positive Outcomes", color: "text-brand-pink" },
              { value: "1000+", label: "Lives Inspired", color: "text-sunshine-yellow" },
              { value: "50%", label: "Stigma Reduction", color: "text-sky-blue" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`text-5xl font-bold ${stat.color} mb-2 animate-countup`}>
                  {stat.value}
                </div>
                <div className="text-foreground/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </div>

      <style >{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes pingOnce {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s forwards ease-in-out;
          animation-delay: 0.5s;
        }
        
        .animate-ping-once {
          animation: pingOnce 1s cubic-bezier(0, 0, 0.2, 1);
        }
        
        .animate-countup {
          animation: countUp 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-in {
          animation: countUp 0.8s ease-out forwards;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
          display: inline-block;
          margin-left: 2px;
          color: #FFD700;
        }
      `}</style>
    </div>
  );
};

export default Stories;