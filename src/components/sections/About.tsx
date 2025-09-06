import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users2, Sparkles } from "lucide-react";

// ✅ Import local images (place them inside src/assets/)
import localImage0 from "@/assets/general/F11.jpg";
import localImage1 from "@/assets/general/jk2.jpg";
import localImage2 from "@/assets/general/bg3.jpg";
import localImage3 from "@/assets/general/bg6.jpg";
import localImage4 from "@/assets/general/jk3.jpg";
import localImage5 from "@/assets/general/jk.jpg";
import localImage6 from "@/assets/general/v9.jpg";

const About = () => {
  // Core values data with JIKUBALI initials
  const values = [
    {
      icon: Heart,
      title: "JoyfulLiving",
      initial: "J",
      description:
        "We believe in spreading positivity and creating spaces where happiness thrives daily.",
    },
    {
      icon: Users2,
      title: "Inclusivity",
      initial: "I",
      description:
        "We welcome and embrace all people, ensuring everyone feels valued and has a place to belong.",
    },
    {
      icon: Target,
      title: "Kindness",
      initial: "K",
      description:
        "We act with compassion, showing genuine care in every interaction and initiative.",
    },
    {
      icon: Sparkles,
      title: "Uniqueness",
      initial: "U",
      description:
        "We celebrate each person's distinct identity and strengths as essential to our shared journey.",
    },
    {
      icon: Sparkles,
      title: "Boldness",
      initial: "B",
      description:
        "We challenge stigma and fearlessly advocate for mental health and community well-being.",
    },
    {
      icon: Users2,
      title: "Authenticity",
      initial: "A",
      description:
        "We encourage individuals to embrace their true selves and live with honesty and courage.",
    },
    {
      icon: Heart,
      title: "Love",
      initial: "L",
      description:
        "We center love in our work, inspiring healing, hope, and deeper human connection.",
    },
    {
      icon: Target,
      title: "Integrity",
      initial: "I",
      description:
        "We stay true to our values, building trust through transparency, accountability, and respect.",
    },
  ];

  // ✅ Mixed local + online gallery images
  const galleryImages = [
    {
      src: localImage0,
      alt: "Drugs and Substance Abuse Awareness",
    },
    {
      src: localImage1,
      alt: "Community workshop session",
    },
    {
      src: localImage2,
      alt: "Group therapy in nature",
    },
    {
      src: localImage3,
      alt: "Youth empowerment event",
    },
    {
      src: localImage4,
      alt: "Mental health awareness campaign",
    },
    {
      src: localImage5,
      alt: "Mental health awareness campaign",
    },
    {
      src: localImage6,
      alt: "Mental health awareness campaign",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 11000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Simple fade animation component
  const FadeIn = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={`transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      {/* Geometric background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-pink-100 blur-3xl opacity-50"></div>

        {/* Triangle pattern */}
        <div className="absolute left-0 top-1/4 w-32 h-32 opacity-10">
          <svg viewBox="0 0 200 200" className="text-blue-500 w-full h-full">
            <polygon points="100,0 0,200 200,200" fill="currentColor" />
          </svg>
        </div>

        {/* Circle pattern */}
        <div className="absolute right-0 bottom-1/3 w-40 h-40 opacity-10">
          <svg viewBox="0 0 200 200" className="text-pink-500 w-full h-full">
            <circle cx="100" cy="100" r="90" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Animated Gallery Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
            ))}

            {/* Gallery indicators */}
            <div className="absolute bottom-6 left-6 z-10 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium text-blue-600">
                Since 2022
              </span>
            </div>
          </div>

          <div className="space-y-8">
            <FadeIn delay={100}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-600">
                  Our Identity
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                More Than{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
                  An Organization
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"></div>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jikubali Africa is a movement born from lived experiences and a
                deep understanding of mental health challenges in African
                communities. Our name "Jikubali" (Swahili for "accept yourself")
                represents our core philosophy.
              </p>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                    Our Full Story
                  </button>
                </Link>

                <Link to="/about">
                  <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all">
                    Meet The Team
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <FadeIn delay={100}>
            <div className="bg-blue-50 p-8 rounded-3xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Dedicated to Empowering individuals by promoting self-love and
                acceptance through innovative programs and initiative. We strive
                to inspire and support youth in their journey to personal
                growth, confidence and well being.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-pink-500 p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="leading-relaxed opacity-95">
                  "To create a world where individuals embrace self-love and
                  acceptance, fostering a culture of empowerment and positivity"
                </p>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10">
                  <svg
                    viewBox="0 0 200 200"
                    className="text-white w-full h-full"
                  >
                    <path
                      d="M100,0 C155.228,0 200,44.772 200,100 C200,155.228 155.228,200 100,200 C44.772,200 0,155.228 0,100 C0,44.772 44.772,0 100,0 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
              Core Values
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide every aspect of our work and define who we
            are as an organization.
          </p>
        </div>

        {/* JIKUBALI Initials Banner */}
      <div className="flex justify-center mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-600 to-pink-500 rounded-2xl p-6 shadow-xl w-full max-w-4xl">
          {/* Grid for initials */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 place-items-center">
            {values.slice(0, 8).map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center mb-1 sm:mb-2">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    {value.initial}
                  </span>
                </div>
                <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium text-center">
                  {value.title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="mt-4 text-center">
            <span className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wider">
              JIKUBALI - Accept Yourself
            </span>
          </div>
        </div>
      </div>

        {/* Values Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none bg-white shadow-lg h-full hover:shadow-xl transition-shadow group relative overflow-hidden"
            >
              {/* Initial badge in corner */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-pink-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">
                  {value.initial}
                </span>
              </div>

              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center shadow-inner group-hover:from-blue-200 group-hover:to-pink-200 transition-colors">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
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