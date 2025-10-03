"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-dark border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="TrustFire Logo"
                width={96}
                height={96}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-white">TrustFire</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/features"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition"
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition"
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition"
              >
                About
              </Link>
              <Link
                href="/download"
                className="bg-primary hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
              >
                Download App
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-dark-alt border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/features"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/download"
              className="bg-primary hover:bg-red-600 text-white block px-3 py-2 rounded-lg text-base font-semibold mt-4"
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
