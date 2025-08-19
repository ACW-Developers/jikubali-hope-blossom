import { Users, Heart, BookOpen, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/sections/Footer";
import programsImage from "@/assets/programs-image.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Community Support Groups",
      description: "Safe spaces for peer-to-peer support and shared healing experiences.",
      features: ["Weekly meetings", "Trained facilitators", "Confidential environment", "Free participation"],
      color: "sky-blue"
    },
    {
      icon: Heart,
      title: "Individual Counseling",
      description: "One-on-one sessions with qualified mental health professionals.",
      features: ["Professional therapists", "Flexible scheduling", "Multiple languages", "Sliding scale fees"],
      color: "brand-pink"
    },
    {
      icon: BookOpen,
      title: "Mental Health Education",
      description: "Workshops and seminars to increase awareness and understanding.",
      features: ["Community workshops", "School programs", "Workplace training", "Online resources"],
      color: "sunshine-yellow"
    },
    {
      icon: Phone,
      title: "Crisis Hotline",
      description: "24/7 support for those experiencing mental health emergencies.",
      features: ["Always available", "Trained counselors", "Multiple languages", "Confidential support"],
      color: "sky-blue"
    },
    {
      icon: MessageCircle,
      title: "Peer Mentorship",
      description: "Connecting individuals with trained peer mentors for ongoing support.",
      features: ["Matched mentors", "Regular check-ins", "Skill building", "Community integration"],
      color: "brand-pink"
    },
    {
      icon: Calendar,
      title: "Wellness Programs",
      description: "Holistic wellness activities including meditation, yoga, and life skills.",
      features: ["Group activities", "Stress management", "Life skills training", "Mindfulness practices"],
      color: "sunshine-yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "sky-blue":
        return "from-sky-blue to-sky-blue-light text-white";
      case "brand-pink":
        return "from-brand-pink to-brand-pink-light text-white";
      case "sunshine-yellow":
        return "from-sunshine-yellow to-sunshine-yellow-light text-gray-800";
      default:
        return "from-sky-blue to-brand-pink text-white";
    }
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-40 left-20 w-36 h-36 bg-sky-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-brand-pink rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-5 w-20 h-20 bg-sunshine-yellow rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-sky-blue-light/30 to-brand-pink-light/20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center bg-sunshine-yellow/20 text-dark-navy px-4 py-2 rounded-full text-sm font-medium mb-6">
                🎯 Comprehensive Mental Health Support
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Our <span className="text-brand-pink">Programs</span>
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
                Comprehensive mental health services designed to meet diverse community needs, 
                from crisis intervention to long-term wellness support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="warm" size="lg">
                  Find Your Program
                </Button>
                <Button variant="outline" size="lg">
                  Get Started Today
                </Button>
              </div>
            </div>
            <div className="animate-fade-up relative" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-blue to-brand-pink rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src={programsImage} 
                alt="Children participating in mental health programs"
                className="relative rounded-2xl shadow-warm hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-spacing">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Transformative <span className="text-sky-blue">Support</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Each program is carefully designed to address specific mental health needs while 
              fostering community connection and personal empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.title}
                className="animate-fade-up hover-lift border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className={`bg-gradient-to-br ${getColorClasses(program.color)} text-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-heading">{program.title}</CardTitle>
                  <CardDescription className="text-white/90">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-foreground/80">
                        <div className="w-2 h-2 bg-brand-pink rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-spacing bg-muted/50">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              How to <span className="text-brand-pink">Get Started</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Taking the first step towards mental wellness is easier than you think.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-blue to-brand-pink rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-sky-blue">Reach Out</h3>
              <p className="text-foreground/80">
                Contact us through our hotline, website, or visit one of our community centers.
              </p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-sunshine-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-brand-pink">Assessment</h3>
              <p className="text-foreground/80">
                We'll help you identify which programs best suit your needs and circumstances.
              </p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-sunshine-yellow to-sky-blue rounded-full flex items-center justify-center mx-auto mb-6 text-gray-800 font-bold text-xl">
                3
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-sunshine-yellow-dark">Begin Journey</h3>
              <p className="text-foreground/80">
                Start your chosen program with full support from our team and community.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="warm" size="lg">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Programs;