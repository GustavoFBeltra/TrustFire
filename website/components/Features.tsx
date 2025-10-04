"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    image: "/features/verified-ffls.png",
    title: "Verified FFLs Only",
    description: "All dealers are licensed and verified. Never worry about legitimacy or compliance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    image: "/features/legal-compliance.png",
    title: "100% Legal Compliance",
    description: "Fully compliant with federal and state regulations. Background checks handled by licensed FFLs.",
    color: "from-green-500 to-emerald-500",
  },
  {
    image: "/features/digital-trail.png",
    title: "Complete Digital Trail",
    description: "Every transaction documented. Download receipts, track transfers, maintain records.",
    color: "from-purple-500 to-pink-500",
  },
  {
    image: "/features/secure-messaging.png",
    title: "Secure Messaging",
    description: "End-to-end encrypted communication between buyers, sellers, and FFLs.",
    color: "from-red-500 to-orange-500",
  },
  {
    image: "/features/ffl-finder.png",
    title: "Find Nearby FFLs",
    description: "Locate verified Federal Firearms Licensees near you with our interactive map.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    image: "/features/escrow-protection.png",
    title: "Escrow Protection",
    description: "Optional escrow service ensures funds are protected until transfer completion.",
    color: "from-indigo-500 to-blue-500",
  },
];

export function Features() {
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-gradient">TrustFire</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Built for compliance, designed for simplicity, trusted by the community.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-background-dark-alt to-black border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  {/* Feature Image */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-white/5 p-4">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={128}
                        height={128}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
