import { Heart, Users, Target, Award, ChevronRight, Play, Star, Quote, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Link } from "react-router-dom"
import { Users2, Sparkles } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { useEffect, useRef, useState } from "react";
import localImage from "@/assets/general/v21.png"; 
import bgImage from "@/assets/general/v4.jpg";
import patternBg from "@/assets/general/v8.jpg";
import bgImage1 from "@/assets/general/v4.jpg";

// Import leadership images (replace with actual paths)
import leader0 from "@/assets/team/David.png";
import leader1 from "@/assets/team/v21.png";
import leader2 from "@/assets/team/Brian.jpg";
import leader3 from "@/assets/team/Jacinta.jpg";
import leader4 from "@/assets/team/Boniface.jpg";
import leader5 from "@/assets/team/peris3.png";
import leader6 from "@/assets/team/Rono.jpg";
import leader7 from "@/assets/team/Cephas.jpg";
import leader8 from "@/assets/team/kebabe.jpg";

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
    title: "Joyful Living",
    description:
      "We believe in spreading positivity and creating spaces where happiness thrives daily.",
  },
  {
    icon: Users2,
    title: "Inclusivity",
    description:
      "We welcome and embrace all people, ensuring everyone feels valued and has a place to belong.",
  },
  {
    icon: Target,
    title: "Kindness",
    description:
      "We act with compassion, showing genuine care in every interaction and initiative.",
  },
    {
    icon: Sparkles,
    title: "Uniqueness",
    description:
      "We celebrate each person’s distinct identity and strengths as essential to our shared journey.",
  },
    {
    icon: Sparkles,
    title: "Boldness",
    description:
      "We challenge stigma and fearlessly advocate for mental health and community well-being.",
  },
    {
    icon: Users2,
    title: "Authenticity",
    description:
      "We encourage individuals to embrace their true selves and live with honesty and courage.",
  },
  {
    icon: Heart,
    title: "Love",
    description:
      "We center love in our work, inspiring healing, hope, and deeper human connection.",
  },
  {
    icon: Target,
    title: "Integrity",
    description:
      "We stay true to our values, building trust through transparency, accountability, and respect.",
  },
];

  const leadershipTeam = [
    {
  name: "David Irihose",
  position: "Founder & Director",
  image: leader0,
  bio: "Irihose David is the visionary Founder and Director of Jikubali Africa.He leads the organization with a deep passion for empowering communities through self-love, acceptance, and mental wellness.With a strong commitment to strategic growth and impact, David provides overall leadership, drives innovation in programs, and fosters partnerships that advance Jikubali Africa’s mission across the region.",
  social: {
    twitter: "#",
    linkedin: "linkedin.com/in/david-irihose-b49a99214?originalSubdomain=ke",
    email: "jikubaliafrica@gmail.com",
    facebook: "https://www.facebook.com/patric.irihose/",
    instagram: "https://www.instagram.com/davidirihose/"
  }
},
  {
    name: "Wairimu Lilian",
    position: "Chairperson",
    image: leader1,
    bio: "Provides overall leadership and strategic direction for Jikubali Africa's programs.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
  },
  {
    name: "Brian Kipruto",
    position: "Secretary General",
    image: leader2,
    bio: "Oversees communication, records, and ensures smooth coordination of organizational activities.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
  },
  {
    name: "Jacinta Omariba",
    position: "Treasurer",
    image: leader3,
    bio: "Manages finances and ensures accountability in all Jikubali Africa projects.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
  },
  {
    name: "Boniface Masaku",
    position: "Event Organizer",
    image: leader4,
    bio: "Plans and coordinates awareness events and community outreach initiatives.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
  },
  {
    name: "Peris Mwangi",
    position: "Project Manager",
    image: leader5,
    bio: "Leads implementation of organization activities and empowerment projects.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
  },
  {
    name: "Hillary Rono",
    position: "Brand Ambassador",
    image: leader6,
    bio: "Represents Jikubali Africa and promotes its mission to wider audiences.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
  },
  {
    name: "Cephas Koech",
    position: "Logistic Manager",
    image: leader7,
    bio: "Handles logistics to ensure efficient delivery of programs and activities.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
  },
  {
    name: "Kebabe",
    position: "Marketing Director",
    image: leader8,
    bio: "Leads marketing strategies to expand Jikubali Africa's visibility and impact.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jikubaliafrica@gmail.com"
    }
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
    <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
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
        .leader-card {
          transition: all 0.3s ease;
        }
        .leader-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="relative z-10">
        {/* Hero Section with Darker Background */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Much darker background image with overlay */}
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
            {/* Much darker overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24  mt-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-up text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  ✨ Empowering Mental Wellness Since 2020
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
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
                  <Link to="/contact">
                    <Button variant="warm" size="lg" className="group">
                      Join Our Mission
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/stories">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Our Story
                    </Button>
                  </Link>
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
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-sunshine-yellow text-sunshine-yellow" />
                        ))}
                        <span className="ml-2 text-sm">5.0 /5.0</span>
                      </div>
                      <p className="text-sm">"Jikubali changed my perspective on mental health" - Wairimu L.</p>
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
                  In 2022, our founders recognized a critical gap in mental health services across Kenya. 
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
                  { value: "6", label: "Counties Served", color: "brand-pink", delay: 0.1 },
                  { value: "10+", label: "Community Partners", color: "sunshine-yellow", delay: 0.2 },
                  { value: "24/7", label: "Support", color: "dark-navy", delay: 0.3 }
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
            {/* Lifeline - far left on mobile, centered on larger screens */}
            <div
              className="
                absolute h-full w-1 bg-gradient-to-b from-sky-blue to-brand-pink
                left-0 sm:left-1/2 sm:-translate-x-1/2
              "
            ></div>

            {[
              { year: "2022", title: "Foundation", desc: "Jikubali Africa founded in response to mental health gap" },
              { year: "2022", title: "Expansion", desc: "Programs expanded to 3 additional counties" },
              { year: "2023", title: "Recognition", desc: "Received national award for community mental health work" },
              { year: "2024", title: "Growth", desc: "Reached 5,000+ individuals with mental health support" },
              { year: "2025", title: "Innovation", desc: "Launched digital platform for wider accessibility" },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  mb-12 flex flex-col sm:flex-row items-start
                  ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}
                `}
              >
                {/* Content Card */}
                <div
                  className="
                    w-[85%] ml-4 sm:w-1/2 flex justify-end sm:justify-center 
                    mb-4 sm:mb-0 sm:px-8 order-2 sm:order-none
                  "
                >
                  <div
                    className={`
                      w-full max-w-md p-6 rounded-2xl shadow-lg bg-white border-l-4
                      ${index % 4 === 0 ? "border-sky-blue" : 
                        index % 4 === 1 ? "border-brand-pink" : 
                        index % 4 === 2 ? "border-sunshine-yellow" : "border-dark-navy"}
                    `}
                  >
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-foreground/70 text-sm">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline dot and year */}
                <div className="flex justify-start sm:justify-center w-full sm:w-1/2 relative order-1 sm:order-none pl-8 sm:pl-0">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-brand-pink z-10 mr-4 sm:mr-0"></div>
                    {/* Year (mobile) */}
                    <div className="text-lg font-bold text-foreground/80 block sm:hidden">
                      {item.year}
                    </div>
                  </div>
                  {/* Year (desktop) */}
                  <div className="absolute text-lg font-bold text-foreground/80 top-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
                    {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Leadership Team Section - MOVED ABOVE VALUES */}
        <section className="py-20 bg-dark-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${patternBg})` }}
            ></div>
          </div>
          
          <div className="container-padding max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-brand-pink/20 text-brand-pink-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                👥 Leadership Team
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Meet Our <span className="text-sky-blue">Leaders</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-sky-blue mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Our dedicated leadership team brings decades of experience in mental health advocacy, 
                community development, and program management.
              </p>
            </div>

            {/* Founder Section - Special Layout */}
            {leadershipTeam.slice(0, 1).map((leader, index) => (
              <div 
                key={index}
                className="leader-card group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col md:flex-row mb-12"
              >
                {/* Image container - Left side */}
                <div className="relative overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6 md:w-1/3 aspect-[4/5] bg-white/5">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                
                {/* Content - Right side */}
                <div className="flex flex-col flex-grow md:w-2/3">
                  <div className="inline-flex items-center bg-brand-pink/20 text-brand-pink-light px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Founder & Director - Jikubali Africa
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-brand-pink-light text-lg font-medium mb-4">{leader.position}</p>
                  <p className="text-white/80 text-base leading-relaxed mb-6">{leader.bio}</p>
                  
                  {/* Social Media Icons - Below Bio */}
                  <div className="flex space-x-3">
                    <a 
                      href={leader.social.linkedin}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={leader.social.facebook || "#"}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-all"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href={`mailto:${leader.social.email}`}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href={leader.social.instagram || "#"}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-all"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Rest of the Team - Standard 4-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipTeam.slice(1).map((leader, index) => (
                <div 
                  key={index + 1}
                  className="leader-card group bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
                >
                  {/* Image container with fixed aspect ratio */}
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex space-x-2 justify-center">
                          <a 
                            href={`mailto:${leader.social.email}`}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-all transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                            style={{ transitionDelay: '0.1s' }}
                            aria-label="Email"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                          <a 
                            href={leader.social.linkedin}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-all transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                            style={{ transitionDelay: '0.2s' }}
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a 
                            href={leader.social.twitter}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-pink transition-all transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                            style={{ transitionDelay: '0.3s' }}
                            aria-label="Twitter"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-heading text-lg font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-brand-pink-light text-sm font-medium mb-3">{leader.position}</p>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Our Values - MOVED BELOW LEADERSHIP */}
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
                  Dedicated to Empowering individuals by promoting self-love 
                and acceptance through innovative programs and initiative.
                 We strive to inspire and support youth in their journey 
                 to personal growth, confidence and well being.
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
                  To create a world where individuals embrace self-love and acceptance, 
                  fostering a culture of empowerment and positivity
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
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>          
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
              <Button variant="outline" size="lg" className="border-white text-dark-navy hover:bg-white/10">
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