"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle2, FileText, Lock, MapPin, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Verified FFLs Only",
    description: "All dealers are licensed and verified. Never worry about legitimacy or compliance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CheckCircle2,
    title: "100% Legal Compliance",
    description: "Fully compliant with federal and state regulations. Background checks handled by licensed FFLs.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Complete Digital Trail",
    description: "Every transaction documented. Download receipts, track transfers, maintain records.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lock,
    title: "Secure Messaging",
    description: "End-to-end encrypted communication between buyers, sellers, and FFLs.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Find Nearby FFLs",
    description: "Locate verified Federal Firearms Licensees near you with our interactive map.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Briefcase,
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
    <section ref={sectionRef} className="bg-background py-24 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Why Choose <span className="text-gradient">TrustFire</span>?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-normal">
            Built for compliance, designed for simplicity, trusted by the community.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-card to-muted border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-elevation-3 dark:shadow-elevation-3-dark hover:shadow-elevation-5 hover:dark:shadow-elevation-5-dark"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-300 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-foreground/60 leading-relaxed group-hover:text-foreground/70 transition-colors font-normal">
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
