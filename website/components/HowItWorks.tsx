"use client";

import { motion } from "framer-motion";
import { UserCheck, Search, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Create Account & Verify",
    description: "Sign up and complete identity verification in minutes using your driver's license, passport, or state ID.",
    color: "from-primary to-red-600",
  },
  {
    number: "02",
    icon: Search,
    title: "Browse Listings",
    description: "Search verified listings from private sellers and dealers. Filter by caliber, distance, and price.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Connect with Seller",
    description: "Message sellers securely, negotiate terms, and agree on a nearby FFL for the transfer.",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Complete Transfer",
    description: "Visit the FFL to complete the legal transfer. Background check, paperwork, and compliance handled.",
    color: "from-purple-500 to-pink-500",
  },
];

export function HowItWorks() {
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
    <section ref={sectionRef} className="bg-gradient-to-b from-primary-dark to-black py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Simple, legal firearm transfers in four easy steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 via-green-500 to-purple-500 opacity-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Arrow between steps (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-24 -right-4 z-10 items-center justify-center w-8 h-8 bg-black rounded-full border-2 border-gray-800 group-hover:border-primary transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
                    </div>
                  )}

                  <div className="relative bg-gradient-to-br from-background-dark-alt to-black border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full hover:shadow-2xl hover:shadow-primary/10">
                    {/* Step number */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 relative z-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed relative z-10">
                      {step.description}
                    </p>

                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
