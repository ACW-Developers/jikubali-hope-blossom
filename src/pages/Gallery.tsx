import { useState } from "react";
import { Calendar, Users, Heart, Camera, ArrowRight, X } from "lucide-react";
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

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);

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
    }
  ];

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "community", name: "Community Events", count: galleryItems.filter(item => item.category === "community").length },
    { id: "workshops", name: "Workshops", count: galleryItems.filter(item => item.category === "workshops").length },
    { id: "youth", name: "Youth Programs", count: galleryItems.filter(item => item.category === "youth").length },
    { id: "wellness", name: "Wellness", count: galleryItems.filter(item => item.category === "wellness").length },
    { id: "therapy", name: "Therapy Sessions", count: galleryItems.filter(item => item.category === "therapy").length },
    { id: "training", name: "Training", count: galleryItems.filter(item => item.category === "training").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-32 right-20 w-40 h-40 bg-brand-pink rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-sunshine-yellow rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-5 w-24 h-24 bg-sky-blue-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/20">
          <div className="container-padding max-w-7xl mx-auto text-center">
            <div className="animate-fade-up">
              <div className="flex items-center justify-center mb-6">
                <Camera className="w-16 h-16 text-brand-pink mr-4" />
                <h1 className="font-heading text-4xl lg:text-6xl font-bold">
                  Our <span className="text-brand-pink">Gallery</span>
                </h1>
              </div>
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Capturing moments of hope, healing, and community transformation across Kenya. 
                See the impact of our mental health programs in action.
              </p>
              <div className="flex items-center justify-center space-x-8 text-foreground/60">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-sky-blue" />
                  <span>2024 Events</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-brand-pink" />
                  <span>1000+ Participants</span>
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
        <section className="py-8 bg-muted/30">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-sky-blue to-brand-pink text-white shadow-warm"
                      : "bg-white text-foreground hover:bg-gradient-to-r hover:from-sky-blue/10 hover:to-brand-pink/10 hover:text-brand-pink border border-border"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-spacing">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group cursor-pointer animate-fade-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-soft">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-spacing bg-gradient-to-br from-sky-blue to-brand-pink">
          <div className="container-padding max-w-6xl mx-auto text-center text-white">
            <div className="animate-fade-up">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
                Join Our Next Event
              </h2>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Be part of the change. Attend our upcoming mental health programs and help build stronger, 
                more resilient communities across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-sky-blue">
                  View Upcoming Events
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-pink">
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
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
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
    </div>
  );
};

export default Gallery;