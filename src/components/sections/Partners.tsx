import { useEffect, useRef } from "react";

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      name: "Kenya Ministry of Health",
      logo: "🏥",
      description: "Government Partnership"
    },
    {
      name: "Nairobi Mental Health Foundation",
      logo: "🧠",
      description: "Healthcare Alliance"
    },
    {
      name: "UNICEF Kenya",
      logo: "🌍",
      description: "Child Welfare"
    },
    {
      name: "Kenya Red Cross",
      logo: "❤️",
      description: "Emergency Response"
    },
    {
      name: "University of Nairobi",
      logo: "🎓",
      description: "Research Partnership"
    }
  ];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollElement.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollElement.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-spacing bg-gradient-to-r from-muted/30 to-muted/50 overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="text-brand-pink">Partners</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Working together with leading organizations to create lasting impact in mental health across Kenya.
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 z-10 w-24 h-full bg-gradient-to-r from-muted/50 to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 w-24 h-full bg-gradient-to-l from-muted/50 to-transparent"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-hidden"
            style={{ width: '100%' }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-soft hover-lift p-6 text-center group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-sky-blue">
                  {partner.name}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 italic">
            "Together, we're building a mentally healthier Kenya"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;