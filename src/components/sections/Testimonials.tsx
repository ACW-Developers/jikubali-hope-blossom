import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
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

  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-none shadow-soft bg-card/90 backdrop-blur-sm h-full"
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="cool-gradient rounded-2xl p-8 lg:p-12 text-white shadow-soft max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
              Your Story Matters Too
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Every journey to mental wellness is unique, but no one should walk it alone. 
              Join our community and discover the support, understanding, and hope you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sunshine-yellow text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-sunshine-yellow-dark transition-colors duration-300">
                Share Your Story
              </button>
              <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                Join Support Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;