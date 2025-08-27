import { ArrowRight } from "lucide-react";

// Import your local partner logos
import galpower from "@/assets/logos/galpower.png";
import gusii from "@/assets/logos/gusii.png";
import jikubali from "@/assets/logos/jikubali.png";
import kisii from "@/assets/logos/kisii.jpeg";
import kisiicounty from "@/assets/logos/kisiicounty.png";
import Dorcas from "@/assets/logos/dorcas.png";
import Unashamed from "@/assets/logos/unashamed.jpeg";

const partners = [
  { name: "Girl Power", logo: galpower, description: "Awareness Patner" },
  { name: "Gusii Mental Health", logo: gusii, description: "Healthcare Alliance" },
  { name: "Kisii University", logo: kisii, description: "Emergency Response" },
  { name: "County Government of Kisii", logo: kisiicounty, description: "Research Partnership" },
  { name: "Dorcas Rigathi Foundation", logo: Dorcas, description: "Community Support" },
  { name: "Unashamed Charity Organization", logo: Unashamed, description: "Needy Empowerment" },
];

const Partners = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-muted/20 via-white to-muted/30 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-brand-pink/10 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-sky-blue/10 blur-3xl"></div>

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-sky-blue">
              Valued Partners
            </span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
            Collaborating with Kenya's leading organizations to create sustainable mental health solutions.
          </p>
        </div>

        {/* Partners Scrolling */}
        <div className="relative overflow-hidden py-6">
          <div className="flex animate-scroll gap-10">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-72 bg-white rounded-3xl shadow-soft-xl hover:shadow-soft-2xl p-8 text-center group transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-24 mb-6 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "grayscale(30%) opacity(90%)" }}
                  />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-gradient bg-gradient-to-r from-sky-blue to-brand-pink bg-clip-text text-transparent">
                  {partner.name}
                </h3>
                <p className="text-foreground/70 text-sm font-medium">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-foreground/70 italic text-lg max-w-3xl mx-auto leading-relaxed">
            "Through strategic partnerships, we're transforming mental healthcare accessibility across Kenya, one community at a time."
          </p>
          <div className="mt-6">
          </div>
        </div>
      </div>

      {/* Tailwind animation */}
      <style>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Partners;
