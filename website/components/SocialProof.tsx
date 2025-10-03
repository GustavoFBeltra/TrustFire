"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Building2, Shield, Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Verified Users",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    value: 1200,
    suffix: "+",
    label: "Transfers Completed",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Licensed FFLs",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Legal Compliance",
    color: "from-primary to-red-600"
  },
];

const testimonials = [
  {
    quote: "TrustFire made my first firearm purchase incredibly simple. Knowing everything was legal and documented gave me peace of mind.",
    author: "Michael R.",
    role: "First-time Buyer",
    rating: 5,
  },
  {
    quote: "As an FFL, this platform has streamlined my transfers. The digital trail is fantastic for compliance.",
    author: "Sarah T.",
    role: "Licensed FFL Dealer",
    rating: 5,
  },
  {
    quote: "Sold my collection safely and legally. The verification process ensures you're dealing with legitimate buyers.",
    author: "James K.",
    role: "Private Seller",
    rating: 5,
  },
];

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-4xl md:text-6xl font-bold text-gradient">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <div className="text-gray-400 font-medium mt-2 text-lg">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Trusted by the <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            See what our users have to say about their experience with TrustFire.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative bg-gradient-to-br from-background-dark-alt to-black border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
