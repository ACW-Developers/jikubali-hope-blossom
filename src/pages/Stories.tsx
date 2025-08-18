import { useState } from "react";
import { Quote, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import Footer from "@/components/sections/Footer";

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const stories = [
    {
      id: 1,
      name: "Amina K.",
      age: 28,
      category: "recovery",
      title: "Finding My Voice Again",
      story: "After years of struggling with anxiety and depression, Jikubali Africa's community support groups gave me the courage to speak up and seek help. The weekly sessions became my safe haven, and the peer support helped me realize I wasn't alone.",
      impact: "Completed anxiety management program",
      image: "👩🏾"
    },
    {
      id: 2,
      name: "David M.",
      age: 35,
      category: "family",
      title: "Healing Our Family",
      story: "When my teenage son started showing signs of depression, our family didn't know where to turn. Jikubali Africa's family counseling program not only helped my son but taught us all how to communicate better and support each other.",
      impact: "Family therapy success",
      image: "👨🏾"
    },
    {
      id: 3,
      name: "Grace W.",
      age: 22,
      category: "empowerment",
      title: "From Survivor to Advocate",
      story: "The trauma I experienced almost broke me, but through Jikubali's individual counseling and peer mentorship program, I not only healed but found my purpose in helping other survivors. Now I'm training to become a peer counselor myself.",
      impact: "Now training as peer counselor",
      image: "👩🏿"
    },
    {
      id: 4,
      name: "James O.",
      age: 42,
      category: "workplace",
      title: "Breaking the Stigma",
      story: "As a corporate manager, I thought seeking mental health support would hurt my career. Jikubali's workplace wellness program showed me that taking care of my mental health actually made me a better leader and colleague.",
      impact: "Workplace mental health champion",
      image: "👨🏿"
    },
    {
      id: 5,
      name: "Mary N.",
      age: 19,
      category: "youth",
      title: "University Life Transformed",
      story: "University pressure and being away from home for the first time triggered severe anxiety. The youth-focused programs at Jikubali helped me develop coping strategies and connect with other students facing similar challenges.",
      impact: "Academic performance improved",
      image: "👩🏾"
    },
    {
      id: 6,
      name: "Samuel K.",
      age: 55,
      category: "community",
      title: "Building Stronger Communities",
      story: "As a community elder, I initially resisted the idea of mental health programs in our village. But after seeing the positive changes in my neighbors who participated, I became one of Jikubali's biggest advocates.",
      impact: "Community mental health ambassador",
      image: "👴🏾"
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
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-32 right-16 w-32 h-32 bg-brand-pink rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-8 w-24 h-24 bg-sunshine-yellow rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-4 w-20 h-20 bg-sky-blue-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-brand-pink-light/20 to-sky-blue-light/20">
        <div className="container-padding max-w-7xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Stories of <span className="text-brand-pink">Hope</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real stories from real people whose lives have been transformed through 
              mental health support, community connection, and personal empowerment.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sunshine-yellow">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
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
                    ? "bg-brand-pink text-white shadow-warm"
                    : "bg-white text-foreground hover:bg-brand-pink/10 hover:text-brand-pink"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-spacing">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card 
                key={story.id}
                className="animate-fade-up hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-sky-blue/10 to-brand-pink/10 p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{story.image}</div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-sky-blue">{story.name}</h3>
                        <p className="text-foreground/60">Age {story.age}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-brand-pink mb-4" />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-lg mb-4 text-brand-pink">
                      {story.title}
                    </h4>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      "{story.story}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sunshine-yellow-dark">
                        <Heart className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{story.impact}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="section-spacing bg-gradient-to-br from-sky-blue to-brand-pink">
        <div className="container-padding max-w-6xl mx-auto text-center text-white">
          <div className="animate-fade-up">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Share Your Story
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Your journey of healing and growth could inspire others to take their first step 
              toward mental wellness. Help us build a community of hope and resilience.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-sky-blue">
              Submit Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-spacing bg-muted/50">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Stories Create <span className="text-brand-pink">Impact</span>
            </h2>
            <p className="text-foreground/80">
              Every story shared helps reduce stigma and encourages others to seek support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold text-sky-blue mb-2">500+</div>
              <div className="text-foreground/60">Stories Shared</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-brand-pink mb-2">85%</div>
              <div className="text-foreground/60">Positive Outcomes</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-sunshine-yellow mb-2">1000+</div>
              <div className="text-foreground/60">Lives Inspired</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-sky-blue mb-2">50%</div>
              <div className="text-foreground/60">Stigma Reduction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Stories;