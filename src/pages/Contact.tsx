import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Heart, ChevronRight, Users, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/sections/Footer";

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
  const formRef = useRef<HTMLFormElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
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
      color: "from-sky-blue to-sky-blue-dark",
      animationDelay: "0.1s"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@jikubaliafrica.org",
      description: "We respond within 24 hours",
      color: "from-brand-pink to-brand-pink-dark",
      animationDelay: "0.2s"
    },
    {
      icon: MapPin,
      title: "Visit Our Center",
      info: "Nairobi, Kenya",
      description: "Multiple locations available",
      color: "from-sunshine-yellow to-sunshine-yellow-dark",
      animationDelay: "0.3s"
    }
  ];

  const offices = [
    {
      city: "Nairobi",
      address: "Kimathi Street, CBD Building, 3rd Floor",
      phone: "+254 700 111 111",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      city: "Mombasa",
      address: "Digo Road, Coast General Building, 2nd Floor",
      phone: "+254 700 222 222",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-12PM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      city: "Kisumu",
      address: "Oginga Odinga Street, Lakeside Plaza, 1st Floor",
      phone: "+254 700 333 333",
      hours: "Mon-Fri: 8AM-5PM",
      image: "https://images.unsplash.com/photo-1598522325072-2d4c6e5c03ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Wanjiku Mwangi",
      role: "Clinical Psychologist",
      image: "https://images.unsplash.com/photo-1551836026-d5c8c5ab235e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "James Ochieng",
      role: "Crisis Counselor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Fatima Ali",
      role: "Support Coordinator",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <style >{`
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
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-blue-light/5 to-brand-pink-light/5"></div>
        <div className="absolute top-28 left-12 w-40 h-40 bg-sky-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-brand-pink/10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-4 w-24 h-24 bg-sunshine-yellow/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-brand-pink/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '15s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-sky-blue/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-sunshine-yellow/20 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/20">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          
          {/* Background image with parallax effect */}
          <div 
            className="absolute inset-0 z-0 parallax-bg"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundPosition: "center 30%"
            }}
          ></div>
          
          <div className="container-padding max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  💬 We're Here to Listen
                </div>
                <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                  <span className="text-sky-blue">Get</span> <span className="text-brand-pink">Support</span>
                </h1>
                <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg">
                  We're here for you 24/7. Whether you need immediate crisis support or want to learn 
                  more about our programs, our caring team is ready to help.
                </p>
                <div className="flex items-center space-x-4 mb-8 p-4 bg-red-500/20 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="font-bold">Crisis: +254 700 000 000</span>
                  </div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-glow"></div>
                  <span className="text-sm text-white/80">Always Available</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="warm" size="lg" className="group">
                    Schedule a Session
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <Users className="mr-2 h-4 w-4" />
                    Join Support Group
                  </Button>
                </div>
              </div>
              <div className="animate-fade-up relative" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-blue to-brand-pink rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Mental health professionals discussing support"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-sunshine-yellow text-sunshine-yellow" />
                        ))}
                        <span className="ml-2 text-sm">4.9 (350+ reviews)</span>
                      </div>
                      <p className="text-sm">"The support I received changed my life completely" - Maria K.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xs"></div>
          
          <div className="container-padding max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 observe">
              <div className="inline-flex items-center bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full text-sm font-medium mb-6">
                📞 Multiple Ways to Connect
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                How to <span className="text-brand-pink">Reach Us</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-brand-pink mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Multiple ways to connect with our team, from crisis intervention to general inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="overflow-hidden border-0 shadow-lg hover-lift observe"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                >
                  <CardHeader className={`bg-gradient-to-br ${method.color} text-white text-center py-8`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <p className="font-bold text-lg mb-2">{method.info}</p>
                    <p className="text-foreground/60 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/10">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="text-center mb-16 observe">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Meet Our <span className="text-sky-blue">Support Team</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-sunshine-yellow mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Our dedicated professionals are here to provide compassionate care and support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift observe"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading text-xl font-bold mb-2 text-dark-navy">{member.name}</h3>
                    <p className="text-brand-pink font-medium mb-4">{member.role}</p>
                    <Button variant="outline" size="sm" className="text-xs">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Locations */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="observe">
                <h3 className="font-heading text-3xl font-bold mb-6 text-sky-blue">Send Us a Message</h3>
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
                        <p className="text-foreground/70">We'll get back to you within 24 hours.</p>
                      </div>
                    ) : (
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Full Name *</label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Email Address *</label>
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
                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                            <Input
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Urgency Level</label>
                            <select
                              name="urgency"
                              value={formData.urgency}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue"
                            >
                              <option value="normal">Normal</option>
                              <option value="urgent">Urgent</option>
                              <option value="crisis">Crisis</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Subject *</label>
                          <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Message *</label>
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

                        <Button type="submit" variant="warm" size="lg" className="w-full group">
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Office Locations */}
              <div className="observe" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-heading text-3xl font-bold mb-6 text-brand-pink">Our Locations</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={office.city} className="hover-lift overflow-hidden border-0 shadow-lg">
                      <div className="flex">
                        <div className="w-1/3">
                          <img 
                            src={office.image} 
                            alt={office.city}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-6 flex-1">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-blue to-brand-pink rounded-full flex items-center justify-center text-white font-bold">
                              {office.city[0]}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-heading font-bold text-xl mb-2 text-sky-blue">{office.city}</h4>
                              <div className="space-y-2 text-foreground/80">
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2 text-brand-pink" />
                                  <span className="text-sm">{office.address}</span>
                                </div>
                                <div className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2 text-brand-pink" />
                                  <span className="text-sm">{office.phone}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2 text-brand-pink" />
                                  <span className="text-sm">{office.hours}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="mt-4 text-xs">
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

        {/* Emergency Resources */}
        <section 
          ref={emergencyRef}
          className="py-20 bg-gradient-to-br from-red-500 to-red-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          
          <div className="container-padding max-w-6xl mx-auto text-center relative z-10">
            <div className="observe">
              <Heart className="w-16 h-16 mx-auto mb-6 text-white animate-pulse" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                In Crisis? We're Here Right Now
              </h2>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                If you're experiencing a mental health emergency or having thoughts of self-harm, 
                please reach out immediately. You are not alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-red-600 animate-pulse-glow"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Crisis Hotline: +254 700 000 000
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-red-600"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Text Crisis Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/50">
          <div className="container-padding max-w-4xl mx-auto">
            <div className="text-center mb-16 observe">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-brand-pink">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-brand-pink mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly will someone respond to my message?",
                  answer: "We aim to respond to all non-urgent inquiries within 24 hours. Crisis messages are prioritized and typically receive a response within minutes."
                },
                {
                  question: "Do I need an appointment to visit your centers?",
                  answer: "Walk-ins are welcome during business hours, but we recommend scheduling an appointment to ensure a counselor is available to see you."
                },
                {
                  question: "Are your services confidential?",
                  answer: "Yes, all communications with our team are completely confidential, except in situations where we're legally obligated to report."
                }
              ].map((faq, index) => (
                <Card key={index} className="observe border-0 shadow-sm hover-lift">
                  <CardContent className="p-6">
                    <h4 className="font-heading font-bold text-lg mb-2 text-sky-blue">{faq.question}</h4>
                    <p className="text-foreground/70">{faq.answer}</p>
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