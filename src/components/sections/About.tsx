import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users2, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach mental health with empathy, understanding, and unconditional acceptance."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We believe in each person's capacity to heal, grow, and create positive change."
    },
    {
      icon: Users2,
      title: "Community",
      description: "Healing happens in connection. We build supportive networks that uplift everyone."
    },
    {
      icon: Sparkles,
      title: "Hope",
      description: "We nurture hope and resilience, lighting the path toward mental wellness."
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Jikubali Africa</span>
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that mental health is a fundamental human right, Jikubali Africa 
            is transforming communities across Kenya through innovative programs, advocacy, and 
            unwavering support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To champion mental health awareness, self-acceptance, and empowerment across Kenya, 
              creating safe spaces where individuals can heal, thrive, and discover their full potential. 
              We work tirelessly to dismantle stigma and build a society that values mental wellness.
            </p>
            
            <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground pt-6">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Born from lived experiences and a deep understanding of mental health challenges in 
              African communities, Jikubali Africa emerged as a beacon of hope. Our name "Jikubali" 
              means "accept yourself" in Swahili - a powerful reminder that self-acceptance is the 
              foundation of mental wellness.
            </p>
          </div>

          <div className="relative">
            <div className="cool-gradient rounded-2xl p-8 text-white shadow-soft">
              <h4 className="font-heading text-xl font-semibold mb-4">Our Vision</h4>
              <p className="leading-relaxed opacity-95">
                "A Kenya where mental health is understood, supported, and celebrated. Where every 
                individual has access to resources, community, and the tools they need to live 
                authentically and thrive completely."
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover-lift border-none shadow-soft bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center shadow-soft">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;