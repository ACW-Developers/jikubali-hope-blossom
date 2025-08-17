import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { BookOpen, Users, MessageCircle, Megaphone, Calendar, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: MessageCircle,
      title: "Peer Support Groups",
      description: "Safe spaces where individuals share experiences, find understanding, and build lasting connections.",
      features: ["Weekly group sessions", "Trained peer facilitators", "Confidential environment", "Multi-language support"],
      color: "sky-blue"
    },
    {
      icon: BookOpen,
      title: "Mental Health Education",
      description: "Comprehensive workshops and resources to increase awareness and reduce stigma in communities.",
      features: ["Community workshops", "Educational materials", "School programs", "Digital resources"],
      color: "brand-pink"
    },
    {
      icon: Users,
      title: "Counseling Services",
      description: "Professional counseling and therapy services tailored to individual needs and cultural context.",
      features: ["Individual therapy", "Group counseling", "Crisis intervention", "Culturally sensitive approach"],
      color: "sunshine-yellow"
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness",
      description: "Championing policy changes and raising awareness to create systemic improvements in mental health.",
      features: ["Policy advocacy", "Media campaigns", "Community events", "Research initiatives"],
      color: "sky-blue"
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-secondary">Programs</span>
          </h2>
          <div className="w-24 h-1 warm-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health services designed to meet diverse community needs, 
            from individual support to systemic change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="group hover-lift border-none shadow-soft bg-card/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-${program.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className={`w-6 h-6 text-${program.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-heading text-xl mb-2 text-foreground">
                      {program.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${program.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="group w-full">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="warm-gradient rounded-2xl p-8 lg:p-12 text-center shadow-warm">
            <Calendar className="w-12 h-12 mx-auto mb-6 text-foreground" />
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward mental wellness. Join our community and discover 
              the support, resources, and hope you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;