import { Heart, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Footer from "@/components/sections/Footer";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach mental health with empathy, understanding, and genuine care for every individual's journey."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong, supportive networks that foster healing, growth, and lasting connections."
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Dedicated to creating meaningful change in mental health awareness and access across Kenya."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in mental health support, education, and community programs."
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-24 right-12 w-44 h-44 bg-brand-pink rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-8 w-36 h-36 bg-sunshine-yellow rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-6 w-28 h-28 bg-sky-blue-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-sky-blue-light/30 to-brand-pink-light/20 relative overflow-hidden">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center bg-sunshine-yellow/20 text-dark-navy px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✨ Empowering Mental Wellness Since 2020
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                About <span className="text-brand-pink">Jikubali</span> Africa
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
                Founded with a vision to transform mental health care in Kenya, Jikubali Africa 
                champions self-acceptance, empowerment, and community support for all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="warm" size="lg">
                  Join Our Mission
                </Button>
                <Button variant="outline" size="lg">
                  Our Impact
                </Button>
              </div>
            </div>
            <div className="animate-fade-up relative" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-blue to-brand-pink rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src={aboutImage} 
                alt="Mental health support session"
                className="relative rounded-2xl shadow-warm hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing bg-muted/30">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              📖 Our Journey
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Our <span className="text-brand-pink">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-brand-pink mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Jikubali Africa was born from a deep understanding that mental health is not a luxury, 
              but a fundamental human right that should be accessible to all Kenyans.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-fade-up">
              <h3 className="font-heading text-2xl font-bold mb-6 text-brand-pink">
                The Beginning
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                In 2020, our founders recognized a critical gap in mental health services across Kenya. 
                Traditional barriers—stigma, cost, and accessibility—were preventing millions from 
                receiving the support they needed.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                What started as community conversations in Nairobi has grown into a nationwide movement, 
                reaching over 50 communities and transforming hundreds of lives through innovative 
                programs and genuine human connection.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-blue to-brand-pink rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JA</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Founded with Purpose</div>
                  <div className="text-sm text-foreground/60">Driven by community need</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
                <div className="text-4xl font-bold text-sky-blue mb-2">5,000+</div>
                <div className="text-sm text-foreground/60 font-medium">Lives Touched</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
                <div className="text-4xl font-bold text-brand-pink mb-2">15</div>
                <div className="text-sm text-foreground/60 font-medium">Counties Served</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
                <div className="text-4xl font-bold text-sunshine-yellow-dark mb-2">50+</div>
                <div className="text-sm text-foreground/60 font-medium">Community Partners</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
                <div className="text-4xl font-bold text-dark-navy mb-2">24/7</div>
                <div className="text-sm text-foreground/60 font-medium">Crisis Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-spacing">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full text-sm font-medium mb-6">
              💎 Core Values
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Our <span className="text-sky-blue">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-sunshine-yellow mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              These core principles guide everything we do, from community outreach to individual support sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const colors = ['sky-blue', 'brand-pink', 'sunshine-yellow', 'dark-navy'];
              const colorClass = colors[index];
              
              return (
                <div 
                  key={value.title}
                  className="text-center animate-fade-up hover-lift bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-warm border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 ${
                    colorClass === 'sky-blue' ? 'bg-sky-blue' :
                    colorClass === 'brand-pink' ? 'bg-brand-pink' :
                    colorClass === 'sunshine-yellow' ? 'bg-sunshine-yellow' :
                    'bg-dark-navy'
                  } rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-8 h-8 ${colorClass === 'sunshine-yellow' ? 'text-dark-navy' : 'text-white'}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h3 className="font-heading text-3xl font-bold mb-6 text-brand-pink">Our Mission</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                To champion mental health awareness, provide accessible support services, and create 
                empowering communities where every individual can embrace their authentic self and thrive.
              </p>
              <p className="text-foreground/80">
                We believe that mental wellness is not a destination but a journey—one that should be 
                supported with compassion, understanding, and evidence-based care.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-heading text-3xl font-bold mb-6 text-sky-blue">Our Vision</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                A Kenya where mental health stigma is eliminated, support is universally accessible, 
                and every individual has the tools and community they need to flourish.
              </p>
              <p className="text-foreground/80">
                We envision thriving communities where mental wellness is prioritized, celebrated, 
                and integrated into the fabric of daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default About;