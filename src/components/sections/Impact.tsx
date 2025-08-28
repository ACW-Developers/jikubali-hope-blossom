import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"; // or "next/link" if using Next.js
import { TrendingUp, Users, MapPin, Heart, Calendar, Award, ChevronRight, Quote } from "lucide-react";

// Import local images
import livesTransformedImg from "@/assets/general/v23.jpg";
import communitiesReachedImg from "@/assets/general/v2.jpg";
import countiesServedImg from "@/assets/general/v3.jpg";
import yearsFoundedImg from "@/assets/general/v25.jpg";
import volunteersActiveImg from "@/assets/general/bg.jpg";
import programsOfferedImg from "@/assets/general/bg1.jpg";
import lastingChangeImg from "@/assets/general/v.jpg";

const Impact = () => {
  const [counters, setCounters] = useState({
    livesTransformed: 0,
    communitiesReached: 0,
    countiesServed: 0,
    yearsFounded: 0,
    volunteersActive: 0,
    programsOffered: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targetValues = {
    livesTransformed: 5000,
    communitiesReached: 10,
    countiesServed: 6,
    yearsFounded: 3,
    volunteersActive: 40,
    programsOffered: 8
  };

  const maxValues = {
    livesTransformed: 300,
    communitiesReached: 20,
    countiesServed: 15,
    yearsFounded: 5,
    volunteersActive: 30,
    programsOffered: 10
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Reduced threshold for better mobile detection
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targetValues).forEach((key) => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  const impactStats = [
    {
      icon: Heart,
      value: counters.livesTransformed,
      suffix: "+",
      label: "Lives Transformed",
      description: "Individuals who have found healing and hope",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
      gradient: "from-pink-500 to-rose-500",
      maxValue: maxValues.livesTransformed,
      image: livesTransformedImg
    },
    {
      icon: Users,
      value: counters.communitiesReached,
      suffix: "+",
      label: "Communities Reached",
      description: "Neighborhoods actively engaged in our programs",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      gradient: "from-blue-500 to-cyan-500",
      maxValue: maxValues.communitiesReached,
      image: communitiesReachedImg
    },
    {
      icon: MapPin,
      value: counters.countiesServed,
      suffix: "+",
      label: "Counties Served",
      description: "Across Kenya, expanding our reach",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      borderColor: "border-amber-200",
      gradient: "from-amber-500 to-orange-500",
      maxValue: maxValues.countiesServed,
      image: countiesServedImg
    },
    {
      icon: Calendar,
      value: counters.yearsFounded,
      suffix: "+",
      label: "Years of Impact",
      description: "Building trust and changing lives",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      borderColor: "border-emerald-200",
      gradient: "from-emerald-500 to-teal-500",
      maxValue: maxValues.yearsFounded,
      image: yearsFoundedImg
    },
    {
      icon: TrendingUp,
      value: counters.volunteersActive,
      suffix: "+",
      label: "Active Volunteers",
      description: "Dedicated individuals making a difference",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-200",
      gradient: "from-indigo-500 to-purple-500",
      maxValue: maxValues.volunteersActive,
      image: volunteersActiveImg
    },
    {
      icon: Award,
      value: counters.programsOffered,
      suffix: "+",
      label: "Programs Offered",
      description: "Comprehensive mental health services",
      color: "text-violet-600",
      bgColor: "bg-violet-100",
      borderColor: "border-violet-200",
      gradient: "from-violet-500 to-fuchsia-500",
      maxValue: maxValues.programsOffered,
      image: programsOfferedImg
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden w-full">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-pink-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-pink-600 font-medium text-sm mb-4 md:mb-6">
            Making a Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Impact</span> in Action
          </h2>
          <div className="w-24 h-1.5 sm:w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Real change, real lives, real hope. See how Jikubali Africa is transforming 
            mental health across Kenya, one community at a time.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-none shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80 group-hover:bg-white">
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${stat.bgColor} flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/30 border ${stat.borderColor}`}>
                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    {stat.description}
                  </p>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mb-1 sm:mb-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${stat.gradient}`}
                      style={{ 
                        width: `${(stat.value / stat.maxValue) * 100}%`,
                        transition: 'width 1s ease-out'
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    {stat.value}{stat.suffix} of {stat.maxValue}{stat.suffix} target
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Success Stories Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div 
            className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white shadow-xl md:shadow-2xl relative overflow-hidden group min-h-[300px] md:min-h-[400px]"
            style={{
              backgroundImage: `url(${lastingChangeImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-700/60 group-hover:opacity-90 transition-opacity duration-700"></div>
            
            {/* Subtle animated pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNmZmYiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 md:mr-4 backdrop-blur-md border border-white/10">
                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  Creating Lasting Change
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4 text-white/90">
                <p className="leading-relaxed text-base md:text-lg font-light italic border-l-4 border-white/30 pl-4 md:pl-6 py-1 md:py-2">
                  "Since joining Jikubali Africa's peer support groups, I've found my voice and 
                  my purpose. The shame I carried for years has transformed into strength."
                </p>
                <div className="flex items-center gap-3 pt-3 md:pt-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-sm md:text-base">Grace M.</div>
                    <div className="text-xs md:text-sm opacity-85">Peer Support Participant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs md:text-sm font-medium">
              Beyond the Numbers
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Stories of Hope & Transformation
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Every statistic represents a life touched, a family healed, and a community 
              strengthened. Our impact extends far beyond what numbers can capture - it's 
              measured in renewed hope, restored relationships, and resilient futures.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Through evidence-based programs, culturally sensitive approaches, and unwavering 
              community support, we're not just changing lives - we're transforming the 
              landscape of mental health in Kenya.
            </p>
            <div className="pt-3 md:pt-4">
              <Link to="/stories">
  <button className="group inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all hover:shadow-blue-400/30 text-sm md:text-base">
    Read More Success Stories
    <ChevronRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;