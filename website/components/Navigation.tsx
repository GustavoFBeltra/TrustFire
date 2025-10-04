"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
          ? "bg-card/90 backdrop-blur-glass border-b border-border shadow-elevation-4 dark:shadow-elevation-4-dark"
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
                width={64}
                height={64}
                className="rounded-lg transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-extrabold text-foreground tracking-tight">TrustFire</span>
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
                className="text-foreground/70 hover:text-foreground px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-muted relative group"
              >
                Features
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
              <Link
                href="/features"
                className="text-foreground/70 hover:text-foreground px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-muted relative group"
              >
                How It Works
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
              <Link
                href="/about"
                className="text-foreground/70 hover:text-foreground px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-muted relative group"
              >
                About
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
              <div className="ml-2">
                <ThemeToggle />
              </div>
              <Link
                href="/about"
                className="ml-4 bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-elevation-3 dark:shadow-elevation-3-dark hover:shadow-glow-md hover:scale-105 flex items-center gap-2"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Mobile menu button and theme toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:hidden flex items-center gap-2"
          >
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/70 hover:text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
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
            className="md:hidden bg-card/95 backdrop-blur-glass border-t border-border"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-foreground hover:bg-muted block px-4 py-3 text-base font-medium rounded-lg transition-all"
              >
                Features
              </Link>
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-foreground hover:bg-muted block px-4 py-3 text-base font-medium rounded-lg transition-all"
              >
                How It Works
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-foreground hover:bg-muted block px-4 py-3 text-base font-medium rounded-lg transition-all"
              >
                About
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-primary to-red-600 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold mt-4 shadow-elevation-3 dark:shadow-elevation-3-dark"
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
