import { useState } from "react";
import { Calendar, Users, Heart, Camera, ArrowRight, X, Play, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Footer from "@/components/sections/Footer";

// Import event images
import communityEvent1 from "@/assets/events/community-event-1.jpg";
import workshopSession from "@/assets/events/workshop-session.jpg";
import youthCampaign from "@/assets/events/youth-campaign.jpg";
import familyTherapy from "@/assets/events/family-therapy.jpg";
import healthFair from "@/assets/events/health-fair.jpg";
import meditationSession from "@/assets/events/meditation-session.jpg";
import F from "@/assets/events/F.jpg";
import F1 from "@/assets/events/F1.jpg";
import F2 from "@/assets/events/F2.jpg";
import F3 from "@/assets/events/F3.jpg";
import F4 from "@/assets/events/F4.jpg";
import F5 from "@/assets/events/F5.jpg";
import F7 from "@/assets/events/F7.jpg";
import F8 from "@/assets/events/F8.jpg";
import F9 from "@/assets/events/F9.jpg";
import F10 from "@/assets/events/F10.jpg";

// Import v series images
import v from "@/assets/v.jpg";
import v2 from "@/assets/v2.jpg";
import v3 from "@/assets/v3.jpg";
import v4 from "@/assets/v4.jpg";
import v5 from "@/assets/v5.jpg";
import v6 from "@/assets/v6.jpg";
import v7 from "@/assets/v7.jpg";
import v8 from "@/assets/v8.jpg";
import v9 from "@/assets/v9.jpg";
import v10 from "@/assets/v10.jpg";
import v11 from "@/assets/v11.jpg";
import v12 from "@/assets/v12.jpg";
import v13 from "@/assets/v13.jpg";
import v14 from "@/assets/v14.jpg";
import v15 from "@/assets/v15.jpg";
import v16 from "@/assets/v16.jpg";
import v17 from "@/assets/v17.jpg";
import v18 from "@/assets/v18.jpg";
import v19 from "@/assets/v19.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");
  interface GalleryItem {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  participants: string;
  image: string;
  description: string;
}

const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Community Mental Health Awareness Event",
      category: "community",
      date: "March 2024",
      location: "Nairobi",
      participants: "200+",
      image: communityEvent1,
      description: "Our largest community outreach event bringing together families, healthcare providers, and mental health advocates to break stigma and promote awareness."
    },
    {
      id: 2,
      title: "Peer Support Workshop",
      category: "workshops",
      date: "February 2024",
      location: "Mombasa",
      participants: "45",
      image: workshopSession,
      description: "Interactive workshop focusing on peer-to-peer support techniques and building resilient community networks."
    },
    {
      id: 3,
      title: "Youth Mental Health Campaign",
      category: "youth",
      date: "January 2024",
      location: "Kisumu",
      participants: "150+",
      image: youthCampaign,
      description: "Engaging young people in conversations about mental health, featuring interactive activities and youth-led discussions."
    },
    {
      id: 4,
      title: "Family Therapy Session",
      category: "therapy",
      date: "March 2024",
      location: "Nairobi Center",
      participants: "8 families",
      image: familyTherapy,
      description: "Group family therapy session helping families develop better communication and support systems."
    },
    {
      id: 5,
      title: "Community Health Fair",
      category: "community",
      date: "February 2024",
      location: "Nakuru",
      participants: "300+",
      image: healthFair,
      description: "Health fair offering free mental health screenings, resources, and connecting community members with support services."
    },
    {
      id: 6,
      title: "Mindfulness & Meditation Session",
      category: "wellness",
      date: "March 2024",
      location: "Nairobi Park",
      participants: "75",
      image: meditationSession,
      description: "Outdoor meditation session teaching mindfulness techniques and stress management strategies."
    },
    {
      id: 7,
      title: "Support Group Meeting",
      category: "support",
      date: "February 2024",
      location: "Eldoret",
      participants: "25",
      image: F,
      description: "Weekly support group providing safe space for sharing experiences and building community connections."
    },
    {
      id: 8,
      title: "Mental Health Training for Educators",
      category: "workshops",
      date: "January 2024",
      location: "Nairobi",
      participants: "60 teachers",
      image: F1,
      description: "Professional development workshop training educators to recognize and support student mental health needs."
    },
    {
      id: 9,
      title: "Crisis Intervention Training",
      category: "training",
      date: "March 2024",
      location: "Mombasa",
      participants: "40 volunteers",
      image: F2,
      description: "Intensive training session for volunteer crisis counselors and community first responders."
    },
    {
      id: 10,
      title: "Art Therapy Workshop",
      category: "wellness",
      date: "February 2024",
      location: "Nairobi",
      participants: "30",
      image: F3,
      description: "Creative healing session using art as therapeutic expression and emotional processing tool."
    },
    {
      id: 11,
      title: "Women's Mental Health Forum",
      category: "community",
      date: "January 2024",
      location: "Kisumu",
      participants: "80 women",
      image: F4,
      description: "Empowering forum addressing women-specific mental health challenges and building support networks."
    },
    {
      id: 12,
      title: "School Mental Health Program Launch",
      category: "youth",
      date: "March 2024",
      location: "Thika",
      participants: "500 students",
      image: F5,
      description: "Launch event for comprehensive school-based mental health program reaching students across five schools."
    },
    // Additional items using v series images
    {
      id: 13,
      title: "Community Outreach Program",
      category: "community",
      date: "April 2024",
      location: "Nairobi Slums",
      participants: "150+",
      image: v,
      description: "Bringing mental health services to underserved communities through mobile clinics and outreach programs."
    },
    {
      id: 14,
      title: "Teen Mental Health Workshop",
      category: "youth",
      date: "April 2024",
      location: "Kibera",
      participants: "75 teens",
      image: v2,
      description: "Specialized workshop addressing mental health challenges faced by teenagers in urban settings."
    },
    {
      id: 15,
      title: "Trauma Healing Session",
      category: "therapy",
      date: "March 2024",
      location: "Nairobi Center",
      participants: "12 survivors",
      image: v3,
      description: "Specialized therapy session focused on trauma recovery and building resilience."
    },
    {
      id: 16,
      title: "Corporate Wellness Program",
      category: "workshops",
      date: "April 2024",
      location: "Westlands",
      participants: "35 professionals",
      image: v4,
      description: "Workplace mental health initiative helping employees manage stress and maintain work-life balance."
    },
    {
      id: 17,
      title: "Community Garden Therapy",
      category: "wellness",
      date: "March 2024",
      location: "Karen",
      participants: "20 members",
      image: v5,
      description: "Therapeutic gardening program combining nature therapy with group support sessions."
    },
    {
      id: 18,
      title: "Peer Counselor Training",
      category: "training",
      date: "April 2024",
      location: "Nairobi",
      participants: "25 trainees",
      image: v6,
      description: "Intensive training program for community members to become certified peer mental health counselors."
    },
    {
      id: 19,
      title: "Mental Health Awareness March",
      category: "community",
      date: "May 2024",
      location: "City Center",
      participants: "500+",
      image: v7,
      description: "Annual awareness march through the city center to break stigma and promote mental health resources."
    },
    {
      id: 20,
      title: "Youth Art Exhibition",
      category: "youth",
      date: "April 2024",
      location: "National Museum",
      participants: "200+ visitors",
      image: v8,
      description: "Exhibition showcasing artwork created by youth participants in our art therapy programs."
    },
    {
      id: 21,
      title: "Family Support Day",
      category: "therapy",
      date: "May 2024",
      location: "Uhuru Park",
      participants: "40 families",
      image: v9,
      description: "Day-long event offering family counseling, activities, and resources for mental wellness."
    },
    {
      id: 22,
      title: "Mindfulness Retreat",
      category: "wellness",
      date: "April 2024",
      location: "Limuru",
      participants: "30 participants",
      image: v10,
      description: "Weekend retreat focused on meditation, yoga, and mindfulness practices for stress reduction."
    },
    {
      id: 23,
      title: "Community Leaders Training",
      category: "training",
      date: "May 2024",
      location: "Nairobi",
      participants: "50 leaders",
      image: v11,
      description: "Training program for community leaders to recognize and address mental health issues in their communities."
    },
    {
      id: 24,
      title: "School Counselor Workshop",
      category: "workshops",
      date: "April 2024",
      location: "Thika",
      participants: "45 counselors",
      image: v12,
      description: "Professional development for school counselors on contemporary youth mental health challenges."
    },
    {
      id: 25,
      title: "Mental Health First Aid Training",
      category: "training",
      date: "May 2024",
      location: "Mombasa",
      participants: "60 participants",
      image: v13,
      description: "Certification program teaching community members how to provide mental health first aid."
    },
    {
      id: 26,
      title: "Community Dialogue Session",
      category: "community",
      date: "April 2024",
      location: "Eastleigh",
      participants: "80 residents",
      image: v14,
      description: "Open forum discussion about mental health challenges and solutions in the community."
    },
    {
      id: 27,
      title: "Youth Sports Therapy",
      category: "youth",
      date: "May 2024",
      location: "Kasarani",
      participants: "50 youth",
      image: v15,
      description: "Sports-based therapy program using physical activity to promote mental wellness and teamwork."
    },
    {
      id: 28,
      title: "Creative Writing Workshop",
      category: "wellness",
      date: "April 2024",
      location: "Nairobi Library",
      participants: "25 writers",
      image: v16,
      description: "Therapeutic writing workshop helping participants process emotions through creative expression."
    },
    {
      id: 29,
      title: "Parent Support Group",
      category: "therapy",
      date: "May 2024",
      location: "Karen",
      participants: "15 parents",
      image: v17,
      description: "Support group for parents navigating mental health challenges with their children."
    },
    {
      id: 30,
      title: "Community Resource Fair",
      category: "community",
      date: "April 2024",
      location: "Kawangware",
      participants: "300+",
      image: v18,
      description: "Resource fair connecting community members with mental health services and support organizations."
    },
    {
      id: 31,
      title: "Yoga for Mental Health",
      category: "wellness",
      date: "May 2024",
      location: "Karura Forest",
      participants: "40 participants",
      image: v19,
      description: "Outdoor yoga sessions specifically designed to reduce anxiety and improve mental wellbeing."
    },
  ];

  const categories = [
    { id: "all", name: "All Events", count: galleryItems.length },
    { id: "community", name: "Community Events", count: galleryItems.filter(item => item.category === "community").length },
    { id: "workshops", name: "Workshops", count: galleryItems.filter(item => item.category === "workshops").length },
    { id: "youth", name: "Youth Programs", count: galleryItems.filter(item => item.category === "youth").length },
    { id: "wellness", name: "Wellness", count: galleryItems.filter(item => item.category === "wellness").length },
    { id: "therapy", name: "Therapy Sessions", count: galleryItems.filter(item => item.category === "therapy").length },
    { id: "training", name: "Training", count: galleryItems.filter(item => item.category === "training").length },
    { id: "support", name: "Support Groups", count: galleryItems.filter(item => item.category === "support").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden section-spacing bg-gradient-to-br from-sky-blue-light/20 via-brand-pink-light/10 to-sunshine-yellow/10">
          <div className="absolute inset-0 bg-black/5 z-0"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 text-center relative z-10">
            <div className="animate-fade-up">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 text-brand-pink">
                <Camera className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Capturing Hope & Healing</span>
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Our <span className="text-brand-pink relative">
                  Gallery
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 5 Q 50 10 100 5 T 200 5" stroke="currentColor" strokeWidth="2" fill="none" className="animate-draw" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Witness the transformative power of mental health support through our community events, 
                workshops, and healing sessions across Kenya.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-foreground/60">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-sky-blue" />
                  <span>2024 Events</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-brand-pink" />
                  <span>2000+ Participants</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-sunshine-yellow" />
                  <span>Lives Transformed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-20 z-20 transition-all duration-500 shadow-md">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                    selectedCategory === category.id
                      ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/30 transform scale-105"
                      : "bg-white text-foreground hover:bg-brand-pink/10 hover:text-brand-pink shadow-sm border border-gray-100"
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

        {/* Gallery Grid */}
        <section className="section-spacing relative">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm">
                          <span>{item.date}</span>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {item.participants}
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full capitalize text-brand-pink">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-xl font-medium text-foreground/70">No events found in this category</h3>
                <p className="text-foreground/50 mt-2">Check back later or browse all events</p>
              </div>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="section-spacing bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/20">
          <div className="container-padding max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                Our <span className="text-brand-pink">Impact</span> in Numbers
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Every event, workshop, and session contributes to our mission of mental wellness for all Kenyans.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "32+", label: "Events Organized", color: "text-sky-blue" },
                { value: "2000+", label: "Participants Reached", color: "text-brand-pink" },
                { value: "15", label: "Counties Covered", color: "text-sunshine-yellow" },
                { value: "100%", label: "Positive Feedback", color: "text-sky-blue" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-foreground/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-spacing relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/90 to-brand-pink/90"></div>
          </div>
          
          <div className="container-padding max-w-6xl mx-auto text-center text-white relative z-10">
            <div className="animate-fade-up">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join Our Next <span className="text-sunshine-yellow">Event</span>
              </h2>
              
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Be part of the change. Attend our upcoming mental health programs and help build stronger, 
                more resilient communities across Kenya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-sky-blue hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8">
                  View Upcoming Events
                </Button>
                
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-sky-blue">
                  Volunteer With Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden animate-scale-in">
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-2xl font-bold mb-4 text-sky-blue">
                {selectedImage.title}
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-brand-pink font-bold">{selectedImage.date}</div>
                  <div className="text-foreground/60 text-sm">Date</div>
                </div>
                <div>
                  <div className="text-sky-blue font-bold">{selectedImage.location}</div>
                  <div className="text-foreground/60 text-sm">Location</div>
                </div>
                <div>
                  <div className="text-sunshine-yellow-dark font-bold">{selectedImage.participants}</div>
                  <div className="text-foreground/60 text-sm">Participants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Gallery;