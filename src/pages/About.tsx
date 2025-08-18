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
      <section className="section-spacing bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-sky-blue">
                About <span className="text-brand-pink">Jikubali</span> Africa
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
                Founded with a vision to transform mental health care in Kenya, Jikubali Africa 
                champions self-acceptance, empowerment, and community support for all.
              </p>
              <Button variant="warm" size="lg">
                Join Our Mission
              </Button>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src={aboutImage} 
                alt="Mental health support session"
                className="rounded-2xl shadow-warm hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Our <span className="text-brand-pink">Story</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Jikubali Africa was born from a deep understanding that mental health is not a luxury, 
              but a fundamental human right that should be accessible to all Kenyans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <h3 className="font-heading text-2xl font-bold text-sky-blue">The Beginning</h3>
              <p className="text-foreground/80 leading-relaxed">
                In 2020, our founders recognized a critical gap in mental health services across Kenya. 
                Traditional barriers—stigma, cost, and accessibility—were preventing millions from 
                receiving the support they needed.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                What started as community conversations in Nairobi has grown into a nationwide movement, 
                reaching over 50 communities and transforming hundreds of lives through innovative 
                programs and genuine human connection.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-sunshine-yellow/20 to-brand-pink/20 p-8 rounded-2xl">
                <h3 className="font-heading text-2xl font-bold text-brand-pink mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-blue mb-2">500+</div>
                    <div className="text-sm text-foreground/70">Lives Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-pink mb-2">50+</div>
                    <div className="text-sm text-foreground/70">Communities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sunshine-yellow mb-2">10+</div>
                    <div className="text-sm text-foreground/70">Counties</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-blue mb-2">25+</div>
                    <div className="text-sm text-foreground/70">Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-spacing bg-muted/50">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Our <span className="text-sky-blue">Values</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              These core principles guide everything we do, from community outreach to individual support sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center animate-fade-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-blue to-brand-pink rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-sky-blue">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
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