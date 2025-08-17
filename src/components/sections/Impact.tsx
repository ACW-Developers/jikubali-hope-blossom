import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Heart, Calendar, Award } from "lucide-react";

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

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
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

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const impactStats = [
    {
      icon: Heart,
      value: counters.livesTransformed,
      suffix: "+",
      label: "Lives Transformed",
      description: "Individuals who have found healing and hope",
      color: "brand-pink"
    },
    {
      icon: Users,
      value: counters.communitiesReached,
      suffix: "+",
      label: "Communities Reached",
      description: "Neighborhoods actively engaged in our programs",
      color: "sky-blue"
    },
    {
      icon: MapPin,
      value: counters.countiesServed,
      suffix: "+",
      label: "Counties Served",
      description: "Across Kenya, expanding our reach",
      color: "sunshine-yellow"
    },
    {
      icon: Calendar,
      value: counters.yearsFounded,
      suffix: "",
      label: "Years of Impact",
      description: "Building trust and changing lives",
      color: "brand-pink"
    },
    {
      icon: TrendingUp,
      value: counters.volunteersActive,
      suffix: "+",
      label: "Active Volunteers",
      description: "Dedicated individuals making a difference",
      color: "sky-blue"
    },
    {
      icon: Award,
      value: counters.programsOffered,
      suffix: "",
      label: "Programs Offered",
      description: "Comprehensive mental health services",
      color: "sunshine-yellow"
    }
  ];

  return (
    <section id="impact-section" className="section-spacing bg-muted/20">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-accent">Impact</span>
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real change, real lives, real hope. See how Jikubali Africa is transforming 
            mental health across Kenya, one community at a time.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="group hover-lift border-none shadow-soft bg-card/90 backdrop-blur-sm text-center overflow-hidden">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${stat.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                </div>
                
                <div className={`text-4xl lg:text-5xl font-bold mb-2 text-${stat.color} font-heading`}>
                  {stat.value}{stat.suffix}
                </div>
                
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Highlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="cool-gradient rounded-2xl p-8 lg:p-12 text-white shadow-soft">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
              Creating Lasting Change
            </h3>
            <div className="space-y-4 text-white/90">
              <p className="leading-relaxed">
                "Since joining Jikubali Africa's peer support groups, I've found my voice and 
                my purpose. The shame I carried for years has transformed into strength."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium">Grace M.</div>
                  <div className="text-sm opacity-75">Peer Support Participant</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">
              Beyond Numbers
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every statistic represents a life touched, a family healed, and a community 
              strengthened. Our impact extends far beyond what numbers can capture - it's 
              measured in renewed hope, restored relationships, and resilient futures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through evidence-based programs, culturally sensitive approaches, and unwavering 
              community support, we're not just changing lives - we're transforming the 
              landscape of mental health in Kenya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;