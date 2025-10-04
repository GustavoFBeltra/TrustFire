"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Shield, Zap, Check, ArrowRight, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTA() {
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
    <section ref={sectionRef} className="bg-gradient-to-br from-primary-dark via-black to-primary-dark py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-red-600/20 border border-primary/30 rounded-full px-5 py-2 mb-8">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Web-Based Platform</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Get <span className="text-gradient">Started</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-normal">
            Join thousands of users completing safe, legal firearm transfers through our secure web platform.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/about"
              className="group relative bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-elevation-5 dark:shadow-elevation-5-dark hover:shadow-glow-lg hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span>Launch Web App</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/features"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 shadow-elevation-2 dark:shadow-elevation-2-dark"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <span className="font-medium">No installation required</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-medium">Free to use</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-medium">Works on any device</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Lock className="w-4 h-4 text-orange-400" />
              </div>
              <span className="font-medium">Bank-level security</span>
            </div>
          </motion.div>

          {/* Platform Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-elevation-3 dark:shadow-elevation-3-dark"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white tracking-tight">Access Anywhere</h3>
            </div>
            <p className="text-base text-gray-400 leading-relaxed font-normal">
              Our web-based platform works seamlessly on desktop, tablet, and mobile devices. Access your account, browse listings, and manage transfers from anywhere with an internet connection.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
