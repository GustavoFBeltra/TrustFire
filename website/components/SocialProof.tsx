export function SocialProof() {
  const stats = [
    { value: "5,000+", label: "Verified Users" },
    { value: "1,200+", label: "Transfers Completed" },
    { value: "500+", label: "Licensed FFLs" },
    { value: "100%", label: "Legal Compliance" },
  ];

  const testimonials = [
    {
      quote: "TrustFire made my first firearm purchase incredibly simple. Knowing everything was legal and documented gave me peace of mind.",
      author: "Michael R.",
      role: "First-time Buyer",
    },
    {
      quote: "As an FFL, this platform has streamlined my transfers. The digital trail is fantastic for compliance.",
      author: "Sarah T.",
      role: "Licensed FFL Dealer",
    },
    {
      quote: "Sold my collection safely and legally. The verification process ensures you're dealing with legitimate buyers.",
      author: "James K.",
      role: "Private Seller",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Trusted by the Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background-dark-alt border border-gray-800 rounded-xl p-8"
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
