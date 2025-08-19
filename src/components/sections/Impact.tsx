import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Heart, Calendar, Award } from "lucide-react";

// Import local images
import livesTransformedImg from "@/assets/v.jpg";
import communitiesReachedImg from "@/assets/v2.jpg";
import countiesServedImg from "@/assets/v3.jpg";
import yearsFoundedImg from "@/assets/v4.jpg";
import volunteersActiveImg from "@/assets/bg.jpg";
import programsOfferedImg from "@/assets/bg1.jpg";
import lastingChangeImg from "@/assets/jk1.jpg";

const Impact = () => {
  const [counters, setCounters] = useState({
    livesTransformed: 0,
    communitiesReached: 0,
    countiesServed: 0,
    yearsFounded: 0,
    volunteersActive: 0,
    programsOffered: 0
  });

  const targetValues = {
    livesTransformed: 500,
    communitiesReached: 50,
    countiesServed: 10,
    yearsFounded: 5,
    volunteersActive: 25,
    programsOffered: 8
  };

  const maxValues = {
    livesTransformed: 600,
    communitiesReached: 60,
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
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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
      const target = targetValues[key as keyof typeof targetValues];
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
      maxValue: maxValues.communitiesReached,
      image: communitiesReachedImg
    },
    {
      icon: MapPin,
      value: counters.countiesServed,
      suffix: "+",
      label: "Counties Served",
      description: "Across Kenya, expanding our reach",
      color: "text-amber-500",
      bgColor: "bg-amber-100",
      maxValue: maxValues.countiesServed,
      image: countiesServedImg
    },
    {
      icon: Calendar,
      value: counters.yearsFounded,
      suffix: "",
      label: "Years of Impact",
      description: "Building trust and changing lives",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      maxValue: maxValues.yearsFounded,
      image: yearsFoundedImg
    },
    {
      icon: TrendingUp,
      value: counters.volunteersActive,
      suffix: "+",
      label: "Active Volunteers",
      description: "Dedicated individuals making a difference",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      maxValue: maxValues.volunteersActive,
      image: volunteersActiveImg
    },
    {
      icon: Award,
      value: counters.programsOffered,
      suffix: "",
      label: "Programs Offered",
      description: "Comprehensive mental health services",
      color: "text-amber-500",
      bgColor: "bg-amber-100",
      maxValue: maxValues.programsOffered,
      image: programsOfferedImg
    }
  ];

  return (
    <section ref={sectionRef} className="py-2 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real change, real lives, real hope. See how Jikubali Africa is transforming 
            mental health across Kenya, one community at a time.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="group border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={stat.image} 
                  alt={stat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center shadow-md`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <CardContent className="p-6">
                <div className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}{stat.suffix}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {stat.description}
                </p>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className={`h-2.5 rounded-full ${stat.bgColor.replace('bg-', 'bg-gradient-to-r from-')} ${stat.color.replace('text-', 'to-')}`}
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
          ))}
        </div>

        {/* Success Stories Highlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            className="rounded-2xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${lastingChangeImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Creating Lasting Change
                </h3>
              </div>
              <div className="space-y-4 text-white/100">
                <p className="leading-relaxed italic text-lg">
                  "Since joining Jikubali Africa's peer support groups, I've found my voice and 
                  my purpose. The shame I carried for years has transformed into strength."
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Grace M.</div>
                    <div className="text-sm opacity-85">Peer Support Participant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Beyond Numbers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every statistic represents a life touched, a family healed, and a community 
              strengthened. Our impact extends far beyond what numbers can capture - it's 
              measured in renewed hope, restored relationships, and resilient futures.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through evidence-based programs, culturally sensitive approaches, and unwavering 
              community support, we're not just changing lives - we're transforming the 
              landscape of mental health in Kenya.
            </p>
            <div className="pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all">
                Read More Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;