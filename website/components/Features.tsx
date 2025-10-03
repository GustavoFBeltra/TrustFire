export function Features() {
  const features = [
    {
      icon: "🛡️",
      title: "Verified FFLs Only",
      description: "All dealers are licensed and verified. Never worry about legitimacy or compliance.",
    },
    {
      icon: "✅",
      title: "100% Legal Compliance",
      description: "Fully compliant with federal and state regulations. Background checks handled by licensed FFLs.",
    },
    {
      icon: "📱",
      title: "Complete Digital Trail",
      description: "Every transaction documented. Download receipts, track transfers, maintain records.",
    },
    {
      icon: "🔐",
      title: "Secure Messaging",
      description: "End-to-end encrypted communication between buyers, sellers, and FFLs.",
    },
    {
      icon: "📍",
      title: "Find Nearby FFLs",
      description: "Locate verified Federal Firearms Licensees near you with our interactive map.",
    },
    {
      icon: "💼",
      title: "Escrow Protection",
      description: "Optional escrow service ensures funds are protected until transfer completion.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose TrustFire?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for compliance, designed for simplicity, trusted by the community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background-dark-alt border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
