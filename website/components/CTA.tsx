"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Apple, Smartphone, Download, Shield, Zap, Check } from "lucide-react";
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
            <Download className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Download Now</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Get <span className="text-gradient">Started</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of users completing safe, legal firearm transfers.
          </p>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/download"
              className="group relative bg-white hover:bg-gray-100 text-black px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Apple className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </Link>
            <Link
              href="/download"
              className="group relative bg-white hover:bg-gray-100 text-black px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Smartphone className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <span className="font-medium">Free to download</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-medium">Available nationwide</span>
            </div>
          </motion.div>

          {/* QR Code Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-block"
          >
            <div className="bg-white p-6 rounded-2xl shadow-2xl">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-xs text-gray-500">Scan to download</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
