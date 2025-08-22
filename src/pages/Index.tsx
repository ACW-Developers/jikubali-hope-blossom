import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Impact from "@/components/sections/Impact";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-blue rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-brand-pink rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-sunshine-yellow rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-sky-blue-light rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-brand-pink-light rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Partners />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
