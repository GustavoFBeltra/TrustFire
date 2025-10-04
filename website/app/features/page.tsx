import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function FeaturesPage() {
  const features = [
    {
      image: "/features/verified-ffls.png",
      title: "Verified FFLs Only",
      description: "Every Federal Firearms Licensee on our platform is verified. We check ATF licensing status to ensure you're working with legitimate, licensed dealers.",
      benefits: [
        "ATF license verification",
        "Regular compliance checks",
        "User reviews and ratings",
        "Location-based search",
      ],
    },
    {
      image: "/features/legal-compliance.png",
      title: "100% Legal Compliance",
      description: "All transfers follow federal and state regulations. Background checks are conducted by licensed FFLs in accordance with ATF requirements.",
      benefits: [
        "NICS background check tracking",
        "State-specific compliance",
        "Form 4473 documentation",
        "Age verification (18+ for long guns, 21+ for handguns)",
      ],
    },
    {
      image: "/features/digital-trail.png",
      title: "Complete Digital Trail",
      description: "Every transaction is fully documented with downloadable receipts, transfer records, and compliance documentation.",
      benefits: [
        "Digital receipt generation",
        "Transaction history",
        "PDF export capabilities",
        "Permanent record storage",
      ],
    },
    {
      image: "/features/secure-messaging.png",
      title: "Secure Messaging",
      description: "End-to-end encrypted communication between buyers, sellers, and FFLs. Your conversations are private and secure.",
      benefits: [
        "E2E encryption",
        "In-app notifications",
        "Photo sharing",
        "Transaction-specific threads",
      ],
    },
    {
      image: "/features/ffl-finder.png",
      title: "FFL Finder",
      description: "Interactive map to locate verified FFLs near you. Filter by distance, ratings, and transfer fees.",
      benefits: [
        "Real-time location search",
        "Transfer fee transparency",
        "Hours and contact info",
        "Directions integration",
      ],
    },
    {
      image: "/features/escrow-protection.png",
      title: "Escrow Protection",
      description: "Optional escrow service protects both buyers and sellers. Funds are held securely until transfer completion.",
      benefits: [
        "Secure payment processing",
        "Fraud protection",
        "Dispute resolution",
        "Automatic fund release",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />

      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Features Built for Compliance
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need for safe, legal, and simple firearm transfers.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="text-primary">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-background-dark-alt border border-gray-800 rounded-2xl p-12 flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
