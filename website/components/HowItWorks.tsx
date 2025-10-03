export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Account & Verify",
      description: "Sign up and complete identity verification in minutes using your driver's license, passport, or state ID.",
      color: "text-primary",
    },
    {
      number: "02",
      title: "Browse Listings",
      description: "Search verified listings from private sellers and dealers. Filter by caliber, distance, and price.",
      color: "text-blue-500",
    },
    {
      number: "03",
      title: "Connect with Seller",
      description: "Message sellers securely, negotiate terms, and agree on a nearby FFL for the transfer.",
      color: "text-green-500",
    },
    {
      number: "04",
      title: "Complete Transfer",
      description: "Visit the FFL to complete the legal transfer. Background check, paperwork, and compliance handled.",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="bg-primary-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple, legal firearm transfers in four easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-800 -z-10"></div>
              )}

              <div className="bg-background-dark-alt border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition h-full">
                <div className={`text-6xl font-bold ${step.color} mb-4 opacity-50`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
