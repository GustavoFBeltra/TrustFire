"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Shield, CheckCircle2, FileCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-dark via-primary-dark to-black overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-red-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-red-500 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-orange-500 rounded-full opacity-40 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-red-600/20 border border-primary/30 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-sm font-semibold tracking-wide">Now Available Nationwide</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Safe, Legal, Simple
            <br />
            <span className="text-gradient">Firearm Transfers</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with verified FFLs, complete legal transfers, and maintain
            full compliance with federal and state regulations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/download"
              className="group bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 flex items-center justify-center gap-2"
            >
              Download Free App
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/features"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105"
            >
              See How It Works
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-300"
          >
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="font-medium">Verified FFLs Only</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="font-medium">100% Legal Compliance</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
              <FileCheck className="w-5 h-5 text-green-400" />
              <span className="font-medium">Complete Digital Trail</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 cursor-pointer"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#000000"
          />
        </svg>
      </div>
    </section>
  );
}
