"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/90 backdrop-blur-glass border-b border-gray-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="TrustFire Logo"
                width={48}
                height={48}
                className="rounded-lg transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold text-white tracking-tight">TrustFire</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="ml-10 flex items-center space-x-1">
              <Link
                href="/features"
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/5 relative group"
              >
                Features
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
              <Link
                href="/features"
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/5 relative group"
              >
                How It Works
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/5 relative group"
              >
                About
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
              <Link
                href="/about"
                className="ml-4 bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 flex items-center gap-2"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-dark-alt/95 backdrop-blur-glass border-t border-gray-800/50"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 text-base font-medium rounded-lg transition-all"
              >
                Features
              </Link>
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 text-base font-medium rounded-lg transition-all"
              >
                How It Works
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 text-base font-medium rounded-lg transition-all"
              >
                About
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-primary to-red-600 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold mt-4 shadow-lg shadow-primary/20"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
