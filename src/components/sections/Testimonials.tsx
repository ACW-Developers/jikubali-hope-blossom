import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import testimonialsBackground from "@/assets/general/testimonials-bg.jpg";
import { TestimonialForm } from "@/components/ui/testimonial-form";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Amina K.",
      role: "University Student",
      content: "Jikubali Africa gave me the courage to speak about my anxiety. The peer support group became my safe haven, and the counseling helped me develop coping strategies that actually work.",
      rating: 5,
      location: "Nairobi"
    },
    {
      name: "David M.",
      role: "Community Leader",
      content: "As a community leader, I've seen firsthand how Jikubali's programs have transformed our neighborhood. Families are healing, stigma is reducing, and hope is being restored.",
      rating: 5,
      location: "Kisumu"
    },
    {
      name: "Grace W.",
      role: "Teacher",
      content: "The mental health education workshops opened my eyes to how I can better support my students. The resources they provided are invaluable for creating a supportive classroom environment.",
      rating: 5,
      location: "Mombasa"
    },
    {
      name: "Samuel O.",
      role: "Young Professional",
      content: "I was struggling with depression after losing my job. The counseling services and peer support helped me rebuild my confidence and find new purpose. I'm now a volunteer with the organization.",
      rating: 5,
      location: "Nakuru"
    },
    {
      name: "Mary N.",
      role: "Mother of Two",
      content: "Jikubali helped our family understand mental health better. My teenager is now getting the support she needs, and we've all learned how to communicate more openly about our feelings.",
      rating: 5,
      location: "Eldoret"
    },
    {
      name: "Peter K.",
      role: "Small Business Owner",
      content: "The stress management workshops helped me balance work and personal life better. I learned that taking care of my mental health isn't selfish - it's necessary for everyone around me.",
      rating: 5,
      location: "Thika"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 300;
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      container.scrollTo({
        left: newIndex * (cardWidth + 24), // 24px gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 300;
      const maxIndex = testimonials.length - Math.floor(container.clientWidth / (cardWidth + 24));
      const newIndex = Math.min(maxIndex, currentIndex + 1);
      setCurrentIndex(newIndex);
      container.scrollTo({
        left: newIndex * (cardWidth + 24),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="section-spacing relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${testimonialsBackground})` }}
    >
      {/* Dull overlay */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[1px]"></div>
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Stories of <span className="text-secondary">Hope</span>
          </h2>
          <div className="w-24 h-1 warm-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real people, real transformation. Hear from those whose lives have been touched 
            by Jikubali Africa's programs and community support.
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-1 transition-all duration-300 hover:scale-110"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-12"
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover-lift border-none shadow-warm bg-card/95 backdrop-blur-sm flex-shrink-0 w-80 h-full"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary opacity-20" />
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sunshine-yellow text-sunshine-yellow" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sky-blue to-sky-blue rounded-2xl p-8 lg:p-12 text-white shadow-warm max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
              Your Story Matters Too
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Every journey to mental wellness is unique, but no one should walk it alone. 
              Join our community and discover the support, understanding, and hope you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TestimonialForm buttonText="Share Your Story" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;