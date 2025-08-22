
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CallToAction from "@/components/sections/CallToAction";
import WaveSeparator from "@/components/ui/wave-separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <WaveSeparator variant="top" color="muted" height="md" />
      <About />
      
      <WaveSeparator variant="both" color="primary" height="lg" />
      <Programs />
      
      <WaveSeparator variant="both" color="secondary" height="md" />
      <Impact />
      
      <WaveSeparator variant="both" color="accent" height="lg" flip />
      <Testimonials />
      
      <WaveSeparator variant="both" color="muted" height="md" />
      <Partners />
      
      <WaveSeparator variant="top" color="primary" height="lg" />
      <CallToAction />
    </div>
  );
};

export default Index;
