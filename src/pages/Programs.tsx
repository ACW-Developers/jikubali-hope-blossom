import React from "react";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Heart, Users, GraduationCap, Lightbulb, ShieldCheck, Handshake, Calendar, MessageSquare, LayoutDashboard, Search, Filter, ChevronDown } from "lucide-react";
import WaveSeparator from "@/components/ui/wave-separator";

const Programs = () => {
  const featuredPrograms = [
    {
      title: "Mental Health Awareness Workshops",
      description: "Interactive workshops to educate and raise awareness about mental health issues.",
      icon: Lightbulb,
      color: "text-sunshine-yellow",
      bg: "bg-sunshine-yellow/10",
      link: "#",
    },
    {
      title: "Peer Support Groups",
      description: "Safe spaces for individuals to share experiences and support each other.",
      icon: Users,
      color: "text-brand-pink-light",
      bg: "bg-brand-pink-light/10",
      link: "#",
    },
    {
      title: "Counseling and Therapy Services",
      description: "Professional counseling and therapy services for individuals in need.",
      icon: Heart,
      color: "text-sky-blue-light",
      bg: "bg-sky-blue-light/10",
      link: "#",
    },
  ];

  const allPrograms = [
    {
      title: "Youth Mental Health Program",
      description: "Empowering youth with mental health knowledge and support.",
      icon: GraduationCap,
      link: "#",
    },
    {
      title: "Community Outreach Initiatives",
      description: "Reaching out to communities to promote mental wellness.",
      icon: Handshake,
      link: "#",
    },
    {
      title: "Corporate Wellness Programs",
      description: "Enhancing mental health in the workplace.",
      icon: LayoutDashboard,
      link: "#",
    },
    {
      title: "Crisis Intervention Services",
      description: "Immediate support for individuals in crisis.",
      icon: ShieldCheck,
      link: "#",
    },
    {
      title: "Family Counseling Services",
      description: "Strengthening family bonds through counseling.",
      icon: Users,
      link: "#",
    },
    {
      title: "Educational Seminars",
      description: "Providing education on various mental health topics.",
      icon: GraduationCap,
      link: "#",
    },
    {
      title: "Support for Marginalized Communities",
      description: "Tailored support for underserved populations.",
      icon: Users,
      link: "#",
    },
    {
      title: "Teletherapy Services",
      description: "Accessible therapy through online platforms.",
      icon: MessageSquare,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-brand-pink/10 via-white to-sky-blue/10 relative overflow-hidden">
        <div className="container-padding max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Our <span className="text-brand-pink">Programs</span>
          </h1>
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Explore our comprehensive programs designed to promote mental wellness, provide support, and empower individuals and communities across Kenya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="warm" size="lg" className="group">
              Explore All Programs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cool" size="lg" className="group bg-white/10 border-white/20 text-white hover:bg-white/20">
              Learn About Our Impact
            </Button>
          </div>
        </div>
      </section>

      <WaveSeparator variant="both" color="secondary" height="lg" />

      {/* Featured Programs */}
      <section className="section-spacing bg-muted/20">
        <div className="container-padding max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8 text-center">
            Featured <span className="text-sky-blue-light">Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <a
                key={index}
                href={program.link}
                className="bg-white rounded-3xl shadow-soft hover:shadow-warm p-6 transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${program.bg} ${program.color}`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{program.title}</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">{program.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator variant="both" color="accent" height="md" flip />

      {/* All Programs Grid */}
      <section className="section-spacing bg-gradient-to-br from-sky-blue/5 to-sunshine-yellow/5">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              All <span className="text-brand-pink-light">Programs</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search programs..."
                  className="bg-white/80 backdrop-blur-sm border border-muted rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-pink-light/30"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/60" />
              </div>
              <Button variant="outline" size="lg">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPrograms.map((program, index) => (
              <a
                key={index}
                href={program.link}
                className="bg-white rounded-2xl shadow-soft hover:shadow-md p-5 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <program.icon className="w-5 h-5 text-sky-blue-light" />
                  <h3 className="font-medium text-lg">{program.title}</h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">{program.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator variant="both" color="primary" height="lg" />

      {/* How to Get Involved */}
      <section className="section-spacing bg-muted/30">
        <div className="container-padding max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
            Get <span className="text-sunshine-yellow">Involved</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Join us in making a difference! Explore various ways to get involved and support our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="warm" size="lg" className="group">
              Donate Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cool" size="lg" className="group bg-white/10 border-white/20 text-white hover:bg-white/20">
              Volunteer
            </Button>
            <Button variant="secondary" size="lg" className="group">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      <WaveSeparator variant="top" color="muted" height="md" />
    </div>
  );
};

export default Programs;
