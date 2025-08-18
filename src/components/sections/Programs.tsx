import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { 
  BookOpen, Users, MessageCircle, Megaphone, 
  ArrowRight, Heart, Bike, Music, Microscope, CalendarDays
} from "lucide-react";

// ✅ Import local program images
import therapyImg from "@/assets/v5.jpg";
import healingImg from "@/assets/v6.jpg";
import gamingImg from "@/assets/v7.jpg";
import mentorshipImg from "@/assets/v.jpg";

// ✅ Import local event images
import cycleImage from "@/assets/events/F8.jpg";
import jikubaliImage from "@/assets/events/F1.jpg";
import valentinesImage from "@/assets/events/bg.jpg";
import substanceImage from "@/assets/events/F7.jpg";

const Programs = () => {
  // Core Programs
  const programs = [
    {
      icon: MessageCircle,
      title: "Therapy Sessions",
      description: "Guided sessions to support mental health and emotional well-being.",
      features: ["Individual therapy", "Group therapy", "Confidential environment"],
      color: "text-sky-500",
      bgColor: "bg-sky-100",
      image: therapyImg
    },
    {
      icon: BookOpen,
      title: "Healing Childhood Traumas",
      description: "Specialized programs to address and heal past emotional wounds.",
      features: ["Trauma-informed care", "Safe space", "Guided exercises"],
      color: "text-pink-500",
      bgColor: "bg-pink-100",
      image: healingImg
    },
    {
      icon: Users,
      title: "Gaming for Mental Wellness",
      description: "Engaging activities and gamified experiences to promote mental health.",
      features: ["Interactive sessions", "Stress relief games", "Community participation"],
      color: "text-amber-500",
      bgColor: "bg-amber-100",
      image: gamingImg
    },
    {
      icon: Megaphone,
      title: "Speakers & Mentorship",
      description: "Connect with inspiring individuals for guidance and personal growth.",
      features: ["Mentorship programs", "Guest speakers", "Workshops & Q&A sessions"],
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      image: mentorshipImg
    }
  ];

  // Special Events
  const events = [
    {
      title: "Cycle for Self-Love",
      description: "Annual cycling event promoting body positivity and mental wellness",
      icon: Bike,
      image: cycleImage,
      color: "text-purple-600"
    },
    {
      title: "Jikubali Festival",
      description: "Celebration of African mental health awareness with music and art",
      icon: Music,
      image: jikubaliImage,
      color: "text-red-500"
    },
    {
      title: "Afri-Valentines Edition",
      description: "Celebrating healthy relationships and self-love in African context",
      icon: Heart,
      image: valentinesImage,
      color: "text-pink-500"
    },
    {
      title: "Substance Abuse Awareness",
      description: "Community sensitization on drug abuse and mental health connections",
      icon: Microscope,
      image: substanceImage,
      color: "text-green-600"
    }
  ];

  // Event carousel state
  const [currentEvent, setCurrentEvent] = useState(0);

  // Auto-rotate events every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">Programs & Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health services and special events designed to meet diverse community needs.
          </p>
        </div>

        {/* Featured Events Carousel */}
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-16">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentEvent ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-4">
                  <event.icon className={`w-8 h-8 mr-3 ${event.color}`} />
                  <h3 className="text-2xl lg:text-3xl font-bold">{event.title}</h3>
                </div>
                <p className="text-lg opacity-90 mb-6 max-w-2xl">{event.description}</p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100">
                  View Event Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}

          {/* Event Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentEvent ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>

        {/* Core Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="group border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg ${program.bgColor} flex items-center justify-center shadow-md`}>
                    <program.icon className={`w-6 h-6 ${program.color}`} />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 ${program.bgColor}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="group w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Events List */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-900 flex items-center">
            <CalendarDays className="w-8 h-8 mr-3 text-blue-600" />
            Events Chronology
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <event.icon className={`w-5 h-5 mr-2 ${event.color}`} />
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Register Interest
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
