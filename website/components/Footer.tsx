"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, Send, Twitter, Facebook, Instagram, Linkedin, AlertCircle } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribeStatus("success");
    setEmail("");
    setTimeout(() => setSubscribeStatus("idle"), 3000);
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="TrustFire Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-white">TrustFire</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Safe, legal, simple firearm transfers. Connecting verified users with licensed FFLs across the nation.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-background-dark-alt border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribeStatus === "success" && (
                <p className="text-green-400 text-xs mt-2">Successfully subscribed!</p>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-background-dark-alt border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background-dark-alt border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background-dark-alt border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background-dark-alt border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Warning */}
        <div className="bg-background-dark-alt border border-gray-800 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold text-white">Important:</span> All firearm transfers facilitated through TrustFire must comply with federal, state, and local laws. Users are responsible for ensuring compliance with all applicable regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 TrustFire. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-gray-600">
              <span>Made with care in the USA</span>
              <span>•</span>
              <span>Committed to legal compliance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
