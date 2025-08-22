import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Heart,
  Megaphone,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  UserPlus,
  Settings,
  MessageSquare,
  CalendarCheck,
  ArrowRight,
  Award,
  Flag,
  Eye,
  Handshake,
  Linkedin,
  Twitter,
} from "lucide-react";

// Import team member images
import teamMember1 from "@/assets/team/member1.jpg";
import teamMember2 from "@/assets/team/member2.jpg";
import teamMember3 from "@/assets/team/member3.jpg";
import teamMember4 from "@/assets/team/member4.jpg";

// Import components
import { Button } from "@/components/ui/enhanced-button";
import WaveSeparator from "@/components/ui/wave-separator";

const About = () => {
  const [missionVisible, setMissionVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [impactVisible, setImpactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "mission":
                setMissionVisible(true);
                break;
              case "values":
                setValuesVisible(true);
                break;
              case "team":
                setTeamVisible(true);
                break;
              case "impact":
                setImpactVisible(true);
                break;
              default:
                break;
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Akinyi Odongo",
      title: "Executive Director",
      image: teamMember1,
      bio: "Akinyi is a passionate advocate for mental health with over 10 years of experience in community development.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Kamau Mwangi",
      title: "Programs Manager",
      image: teamMember2,
      bio: "Kamau oversees all program development and implementation, ensuring quality and impact.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Fatuma Hassan",
      title: "Communications Officer",
      image: teamMember3,
      bio: "Fatuma manages our communications and outreach, raising awareness about mental health issues.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Omondi",
      title: "Counseling Psychologist",
      image: teamMember4,
      bio: "David provides counseling services and support to individuals and families in need.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const coreValues = [
    {
      name: "Compassion",
      description:
        "We approach our work with empathy and understanding, recognizing the inherent worth of every individual.",
      icon: Heart,
    },
    {
      name: "Integrity",
      description:
        "We uphold the highest ethical standards, ensuring transparency and accountability in all our actions.",
      icon: ShieldCheck,
    },
    {
      name: "Empowerment",
      description:
        "We empower individuals to take control of their mental health and well-being, providing them with the tools and resources they need to thrive.",
      icon: Lightbulb,
    },
    {
      name: "Collaboration",
      description:
        "We work collaboratively with partners and stakeholders to create sustainable solutions and maximize our impact.",
      icon: Handshake,
    },
    {
      name: "Innovation",
      description:
        "We embrace innovation and creativity, constantly seeking new and better ways to address the challenges facing our community.",
      icon: Settings,
    },
    {
      name: "Inclusivity",
      description:
        "We are committed to creating a welcoming and inclusive environment for all, regardless of background or identity.",
      icon: UserPlus,
    },
  ];

  const impactStats = [
    { label: "Individuals Reached", value: "5000+", icon: Users },
    { label: "Workshops Conducted", value: "200+", icon: BookOpen },
    { label: "Counseling Sessions", value: "1000+", icon: MessageSquare },
    { label: "Community Events", value: "50+", icon: CalendarCheck },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-sky-blue/10 via-white to-brand-pink/10 relative overflow-hidden">
        <div className="container-padding max-w-7xl mx-auto text-center relative z-10">
          {/* Decorative Circle */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-sky-blue/20 blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-40 h-40 rounded-full bg-brand-pink/20 blur-2xl"></div>

          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-sky-blue">Jikubali Africa</span>
          </h1>
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Learn about our mission, vision, and the dedicated team behind Jikubali Africa. We are committed to transforming mental health in Kenya through community-based programs and advocacy.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="warm" size="lg" className="group">
              Our Programs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cool" size="lg" className="group">
              Get Involved
              <UserPlus className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <WaveSeparator variant="both" color="primary" height="md" />

      {/* Mission & Vision Section */}
      <section id="mission" className="section-spacing bg-muted/30">
        <div className="container-padding max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
              Our <span className="text-brand-pink">Mission</span>
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              To champion mental wellness, foster self-acceptance, and empower communities across Kenya through sustainable, community-based programs and advocacy.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>Provide accessible mental health education and resources.</li>
              <li>Offer safe and supportive spaces for individuals to share their experiences.</li>
              <li>Advocate for policies that promote mental health and well-being.</li>
            </ul>
            {/* Add animation trigger here if needed */}
          </div>
          <div className="space-y-6">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
              Our <span className="text-sky-blue">Vision</span>
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              To create a Kenya where mental wellness is valued, stigma is eliminated, and every individual has the opportunity to reach their full potential.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>A society that embraces mental health as a fundamental human right.</li>
              <li>Communities equipped to support individuals facing mental health challenges.</li>
              <li>A future where every Kenyan has access to quality mental healthcare.</li>
            </ul>
            {/* Add animation trigger here if needed */}
          </div>
        </div>
      </section>

      <WaveSeparator variant="both" color="secondary" height="lg" />

      {/* Core Values Section */}
      <section id="values" className="section-spacing bg-gradient-to-br from-brand-pink/5 to-sky-blue/5">
        <div className="container-padding max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-8 text-foreground">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-brand-pink">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{value.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator variant="both" color="accent" height="md" flip />

      {/* Team Section */}
      <section id="team" className="section-spacing bg-muted/20">
        <div className="container-padding max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-12 text-center text-foreground">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-sky-blue">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="w-full h-56 object-cover object-center" />
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-foreground/70 text-sm">{member.title}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex justify-start gap-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-sky-blue hover:text-brand-pink transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-sky-blue hover:text-brand-pink transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator variant="both" color="muted" height="lg" />

      {/* Impact Section */}
      <section id="impact" className="section-spacing bg-gradient-to-r from-sky-blue/10 to-brand-pink/10">
        <div className="container-padding max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-8 text-foreground">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-sky-blue">Impact</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Since our founding, we have been dedicated to making a measurable difference in the lives of individuals and communities across Kenya. Here are some of our key achievements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">{stat.value}</h3>
                <p className="text-foreground/70 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button variant="warm" size="lg" className="group">
              View Our Full Impact Report
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <WaveSeparator variant="top" color="primary" height="md" />
    </div>
  );
};

export default About;
