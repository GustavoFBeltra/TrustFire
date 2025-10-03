"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How does TrustFire ensure legal compliance?",
    answer: "All transfers on TrustFire are conducted through licensed Federal Firearms Licensees (FFLs). Background checks are performed in accordance with federal law, and we maintain complete digital records of all transactions to ensure full compliance with ATF regulations.",
  },
  {
    question: "Do I need to be a licensed dealer to use TrustFire?",
    answer: "No, TrustFire is designed for both private individuals and licensed dealers. Private sellers can list firearms, and buyers can browse listings. All transfers are completed through verified FFLs who handle the legal requirements.",
  },
  {
    question: "What fees does TrustFire charge?",
    answer: "TrustFire is free to download and use. FFLs may charge their standard transfer fees for facilitating the transaction. Optional services like escrow protection may have additional fees.",
  },
  {
    question: "How do I verify an FFL on the platform?",
    answer: "All FFLs on TrustFire undergo verification through our secure system. We verify their license status with the ATF and maintain up-to-date records. You can view an FFL's verification status, ratings, and reviews before selecting them for your transfer.",
  },
  {
    question: "What happens if there's an issue during the transfer?",
    answer: "Our support team is available to help resolve any issues. All communications are documented within the app. If you use our optional escrow service, funds remain protected until the transfer is successfully completed.",
  },
  {
    question: "Can I use TrustFire in my state?",
    answer: "TrustFire is available nationwide, but firearm transfer laws vary by state. Our platform helps you find FFLs in your area who are familiar with your state's specific requirements. Users are responsible for ensuring compliance with all applicable state and local laws.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} className="bg-gradient-to-b from-black to-primary-dark py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about TrustFire and firearm transfers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-background-dark-alt to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:text-red-500 font-semibold transition-colors"
          >
            Contact our support team
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
