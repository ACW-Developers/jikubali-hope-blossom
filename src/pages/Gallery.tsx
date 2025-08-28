import { useState, useEffect } from "react";
import { Calendar, Users, Heart, Camera, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";

// Import event images
import communityEvent1 from "@/assets/general/v28.jpg";
import workshopSession from "@/assets/general/v23.jpg";
import youthCampaign from "@/assets/general/v24.jpg";
import familyTherapy from "@/assets/general/v25.jpg";
import healthFair from "@/assets/general/v26.jpg";
import meditationSession from "@/assets/general/v27.jpg";
import F from "@/assets/events/F.jpg";
import F1 from "@/assets/events/F1.jpg";
import F2 from "@/assets/general/bg1.jpg";
import F3 from "@/assets/events/F3.jpg";
import F4 from "@/assets/events/F4.jpg";
import F5 from "@/assets/events/F5.jpg";
import F7 from "@/assets/events/F7.jpg";
import F8 from "@/assets/events/F8.jpg";

// Import v series images
import v from "@/assets/general/v.jpg";
import v2 from "@/assets/general/v2.jpg";
import v3 from "@/assets/general/v3.jpg";
import v4 from "@/assets/general/v4.jpg";
import v5 from "@/assets/general/v5.jpg";
import v6 from "@/assets/general/v6.jpg";
import v7 from "@/assets/general/v7.jpg";
import v8 from "@/assets/general/v8.jpg";
import v9 from "@/assets/general/v9.jpg";
import v10 from "@/assets/general/v10.jpg";
import v11 from "@/assets/general/v11.jpg";
import v12 from "@/assets/general/v12.jpg";
import v13 from "@/assets/general/v13.jpg";
import v14 from "@/assets/general/v14.jpg";
import v15 from "@/assets/general/v15.jpg";
import v16 from "@/assets/general/v16.jpg";
import v17 from "@/assets/general/v17.jpg";
import v18 from "@/assets/general/v18.jpg";
import v19 from "@/assets/general/v19.jpg";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  date: string | null;
  location: string;
  participants: string;
  image: string;
  description: string;
}

interface ApiGalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
  date: string;
  location: string;
  participants_no: number;
  uploaded_at: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [apiGalleryItems, setApiGalleryItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Static gallery items
  const staticGalleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: communityEvent1,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 2,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: workshopSession,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 3,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: youthCampaign,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 4,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: familyTherapy,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 5,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: healthFair,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 6,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: meditationSession,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 7,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 8,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F1,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 9,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F2,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 10,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F3,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 11,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F4,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 12,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F5,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 13,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 14,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v2,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 15,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v3,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 16,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v4,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 17,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v5,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 18,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v6,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 19,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v7,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 20,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v8,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 21,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v9,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 22,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v10,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 23,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v11,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 24,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v12,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 25,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v13,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 26,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v14,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 27,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v15,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 28,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v16,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 29,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v17,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 30,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v18,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 31,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: v19,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 32,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F7,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    },
    {
      id: 33,
      title: "Jikubali Africa Program",
      category: "Event",
      date: null,
      location: "Kisii University",
      participants: "100+",
      image: F8,
      description: "Jikubali sessions and program designed to foster self-acceptance and promote mental wellness."
    }
  ];

  // Fetch gallery items from API
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/api/gallery/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiGalleryItem[] = await response.json();
        
        // Transform API data to match our GalleryItem format
        const transformedData: GalleryItem[] = data.map(item => ({
          id: item.id + 1000, // Add offset to avoid ID conflicts with static items
          title: item.title,
          category: item.category,
          date: item.date,
          location: item.location,
          participants: `${item.participants_no}+`,
          image: item.image, // Use the direct image URL from the API
          description: `Event at ${item.location} with ${item.participants_no} participants on ${item.date}`
        }));
        
        setApiGalleryItems(transformedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching gallery items:", err);
        setError("Failed to load gallery items. Showing static content only.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  // Combine static and API gallery items (API items first)
  const allGalleryItems = [...apiGalleryItems, ...staticGalleryItems];

  // Get unique categories from all gallery items
  const allCategories = Array.from(new Set(allGalleryItems.map(item => item.category)));

  // Create categories for filter with counts
  const categories = [
    { id: "all", name: "All Events", count: allGalleryItems.length },
    ...allCategories.map(category => ({
      id: category.toLowerCase().replace(/\s+/g, '-'),
      name: category,
      count: allGalleryItems.filter(item => item.category === category).length
    }))
  ];

  // Filter items based on selected category
  const filteredItems = selectedCategory === "all" 
    ? allGalleryItems 
    : allGalleryItems.filter(item => 
        item.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

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
                  <span>2025 Events</span>
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

        {/* Loading and Error States */}
        {isLoading && (
          <div className="container-padding max-w-7xl mx-auto text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-pink mx-auto mb-4"></div>
            <p className="text-foreground/70">Loading gallery items...</p>
          </div>
        )}

        {error && (
          <div className="container-padding max-w-7xl mx-auto py-4">
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-md text-center">
              <p>{error}</p>
            </div>
          </div>
        )}

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
                        onError={(e) => {
                          // Fallback for broken images
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='%23e5e7eb'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%239ca3af'%3EImage not available%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm">
                          <span>{item.date || "Ongoing"}</span>
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
            
            {filteredItems.length === 0 && !isLoading && (
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
                { value: allGalleryItems.length, label: "Events Organized", color: "text-sky-blue" },
                { value: "2000+", label: "Participants Reached", color: "text-brand-pink" },
                { value: "6", label: "Counties Covered", color: "text-sunshine-yellow" },
                { value: "98%", label: "Positive Feedback", color: "text-sky-blue" }
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
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-sky-blue hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8"
                  >
                    Partner with Us
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-sky-blue"
                  >
                    Volunteer With Us
                  </Button>
                </Link>
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
                onError={(e) => {
                  // Fallback for broken images in modal
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='%23e5e7eb'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%239ca3af'%3EImage not available%3C/text%3E%3C/svg%3E";
                }}
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
                  <div className="text-brand-pink font-bold">{selectedImage.date || "Ongoing"}</div>
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