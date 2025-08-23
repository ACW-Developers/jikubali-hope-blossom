import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Heart, ChevronRight, Users, Calendar, Star, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/sections/Footer";
import bgImage from "@/assets/general/v26.jpg";

import nairobiOffice from "@/assets/general/Nairobi.jpeg";
import mombasaOffice from "@/assets/general/Nairobi.jpeg";

import supportLeadImg from "@/assets/general/v21.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "normal"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const formRef = useRef<HTMLFormElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);

  // Typing animation effect
  useEffect(() => {
    const typingTexts = [
      "We're here for you 24/7",
      "Immediate crisis support available",
      "Caring team ready to help",
      "Your mental wellness matters"
    ];

    const currentText = typingTexts[typingIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
      }

      if (!isDeleting && typingText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(500);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setTypingIndex((typingIndex + 1) % typingTexts.length);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, typingIndex, typingSpeed]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        urgency: "normal"
      });
    }, 3000);
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        element.setAttribute('style', `transform: translateY(${scrolled * speed}px)`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Crisis Hotline",
      info: "+254 700 000 000",
      description: "24/7 emergency support",
      color: "from-red-500 to-red-600",
      animationDelay: "0s"
    },
    {
      icon: MessageCircle,
      title: "General Support",
      info: "+254 700 111 111",
      description: "Monday - Friday, 8AM - 6PM",
      color: "from-blue-500 to-blue-600",
      animationDelay: "0.1s"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "jikubaliafrica@gmail.com",
      description: "We respond within 48 hours",
      color: "from-purple-500 to-purple-600",
      animationDelay: "0.2s"
    },
    {
      icon: MapPin,
      title: "Visit Our Center",
      info: "Nairobi, Kenya",
      description: "Multiple locations available",
      color: "from-amber-500 to-amber-600",
      animationDelay: "0.3s"
    }
  ];

  const offices = [
    {
      city: "Nairobi",
      address: "Kimathi Street, CBD Building, 3rd Floor",
      phone: "+254 700 111 111",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM",
      image: nairobiOffice,
    },
    {
      city: "Kisii",
      address: "Kisii University, Kisii Town, Kenya",
      phone: "+254 700 222 222",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-12PM",
      image: mombasaOffice,
    },
  ];

  const faqItems = [
    {
      question: "How can I join Jikubali Africa's programs?",
      answer: "You can join our programs by contacting our support team via phone, email, or visiting one of our centers. We offer an initial consultation to understand your needs and recommend the most suitable program. Many of our community programs are free to join, while specialized services may have nominal fees based on a sliding scale."
    },
    {
      question: "How can I sponsor an event or program?",
      answer: "We welcome corporate and individual sponsorships. You can sponsor specific events, programs, or general operations. Contact our partnerships team at partnerships@jikubaliafrica.org to discuss sponsorship opportunities, benefits, and how your contribution will make a difference in mental health advocacy across Kenya."
    },
    {
      question: "What volunteer opportunities are available?",
      answer: "We offer various volunteer roles including crisis support, event coordination, community outreach, and administrative support. All volunteers undergo comprehensive training. Please complete our volunteer application form on our website or visit our offices to learn more about current opportunities and requirements."
    },
    {
      question: "How do I request a mental health workshop for my organization?",
      answer: "Organizations can request workshops by contacting our programs coordinator. We offer customized mental health workshops for corporations, schools, and community groups. Please provide details about your organization, audience size, and specific topics of interest. We'll respond with available dates and a proposed program outline."
    },
    {
      question: "What is the process for emergency mental health support?",
      answer: "In crisis situations, call our 24/7 hotline immediately. Our trained counselors will provide immediate support and assess the situation. For in-person emergencies, we can coordinate with local health facilities. All crisis interventions are confidential and follow established safety protocols to ensure the wellbeing of those we serve."
    }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden bg-gray-50">
      <style>{`
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .faq-answer {
          transition: max-height 0.3s ease-out, opacity 0.3s ease;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          width: 3px;
          background-color: #ec4899;
          animation: blink 1s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 1000px 100%;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50"></div>
        
        {/* Animated floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? 'rgba(59, 130, 246, 0.3)' : 
                              i % 3 === 1 ? 'rgba(139, 92, 246, 0.3)' : 
                              'rgba(16, 185, 129, 0.3)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Enhanced Hero Section with Creative Design */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-800/60 z-0"></div>
          
          {/* Background image with parallax effect */}
          <div
            className="absolute inset-0 z-0 parallax-bg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
              backgroundPosition: "center 30%",
            }}
          ></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/10 rotate-45 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 mt-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="animate-fade-up text-white">
                {/* Animated badge */}
                <div className="inline-flex items-center bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-full text-base font-medium mb-8 border border-white/10 animate-shimmer">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>Your Journey to Wellness Starts </span>
                </div>
                
                <h1 className="font-heading text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">Reach Out</span>
                  <br />
                  <span className="text-white">We're Listening</span>
                </h1>
                
                {/* Typing animation subheading */}
                <div className="h-12 mb-8">
                  <span className="text-xl lg:text-xl bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/10 inline-block">
                    {typingText}
                    <span className="typing-cursor h-6 align-middle"></span>
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-8 p-5 bg-gradient-to-r from-blue-500/30 to-purple-500/10 backdrop-blur-lg rounded-xl border border-red-400/30 shadow-lg">
                  <div className="flex items-center text-white">
                    <Phone className="w-6 h-6 mr-3" />
                    <span className="font-bold text-lg">Hotline: +254 700 000 000</span>
                  </div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-glow"></div>
                  <span className="text-sm text-white/80">24/7 Availability</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">

                  
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white px-8 py-4 rounded-xl backdrop-blur-sm">
                    <Users className="mr-3 h-5 w-5" />
                    Join Community
                  </Button>
                </div>
              </div>
              
              {/* Interactive contact card */}
              <div className="animate-fade-up relative" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quick Connect</h3>
                    <p className="text-white/80">Send us a message directly</p>
                  </div>
                  
                  <div className="space-y-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/60 backdrop-blur-sm"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/60 backdrop-blur-sm"
                    />
                    <Textarea 
                      placeholder="How can we help you today?" 
                      rows={3}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/60 backdrop-blur-sm"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Send Quick Message
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/70 text-sm">Or reach us through our other channels below</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Rest of your components (Contact Methods, Support Lead, Form, FAQ, etc.) remain the same */}
        {/* Contact Methods */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="container-padding max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 observe">
              <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                📞 Multiple Ways to Connect
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-gray-800">
                How to <span className="text-purple-600">Reach Us</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Multiple ways to connect with our team, from crisis intervention to general inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 observe"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className={`bg-gradient-to-br ${method.color} text-white text-center py-8`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <p className="font-bold text-lg mb-2 text-gray-800">{method.info}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Support Lead */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="text-center mb-16 observe">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-gray-800">
                Meet Our <span className="text-blue-600">Support Lead</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our dedicated professional is here to provide compassionate care and support.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl observe max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={supportLeadImg} 
                    alt="Mr. Amos Clinton - Software Developer"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl font-bold mb-2 text-gray-800">ACW_developer</h3>
                  <p className="text-purple-600 font-medium mb-4">Software Developer</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
  With extensive experience in web development and digital solutions, 
  he is in charge of the development and maintenance of our website, ensuring a seamless user experience. 
  In addition to managing technical updates, he oversees other digital initiatives to keep our online presence effective and engaging.
</p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Available: Mon - Sat</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                  <Button 
  variant="outline" 
  size="sm" 
  className="mt-6 w-fit border-blue-500 text-blue-600 hover:bg-blue-50"
  onClick={() => window.open("https://clinton.miteexplorers.com", "_blank")}
>
  Schedule Consultation
</Button>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Office Locations */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="observe">
                <h3 className="font-heading text-3xl font-bold mb-6 text-blue-600">Send Us a Message</h3>
                <Card className="shadow-lg border-0 overflow-hidden">
                  <CardContent className="p-6">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <h4 className="font-heading text-2xl font-bold mb-2 text-green-600">Message Sent!</h4>
                        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                      </div>
                    ) : (
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full"
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                            <Input
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">Urgency Level</label>
                            <select
                              name="urgency"
                              value={formData.urgency}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="normal">Normal</option>
                              <option value="urgent">Urgent</option>
                              <option value="crisis">Crisis</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Subject *</label>
                          <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full"
                            placeholder="Tell us how we can help you..."
                          />
                        </div>

                        <Button type="submit" className="w-full group bg-blue-600 hover:bg-blue-700">
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="observe" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-heading text-3xl font-bold mb-6 text-purple-600">Our Locations</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={office.city} className="hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-2/5">
                          <img 
                            src={office.image} 
                            alt={office.city}
                            className="w-full h-full object-cover min-h-[150px]"
                          />
                        </div>
                        <CardContent className="p-6 flex-1">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {office.city[0]}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-heading font-bold text-xl mb-2 text-blue-600">{office.city}</h4>
                              <div className="space-y-2 text-gray-600">
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                                  <span className="text-sm">{office.address}</span>
                                </div>
                                <div className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2 text-purple-500" />
                                  <span className="text-sm">{office.phone}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2 text-purple-500" />
                                  <span className="text-sm">{office.hours}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="mt-4 text-xs border-blue-500 text-blue-600 hover:bg-blue-50">
                                Get Directions
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-padding max-w-4xl mx-auto">
            <div className="text-center mb-16 observe">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                Frequently Asked <span className="text-purple-600">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about joining our programs, sponsorship, and more.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index} className="border-0 shadow-sm observe overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                    >
                      <h4 className="font-heading font-bold text-lg text-blue-600">{faq.question}</h4>
                      <ChevronDown 
                        className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${
                          activeFAQ === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div 
                      className={`faq-answer overflow-hidden px-6 ${
                        activeFAQ === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;