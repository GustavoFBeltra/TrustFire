import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-primary-dark py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Join thousands of users completing safe, legal firearm transfers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/download"
            className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg shadow-primary/20"
          >
            Download for iOS
          </Link>
          <Link
            href="/download"
            className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg shadow-primary/20"
          >
            Download for Android
          </Link>
        </div>

        <p className="text-gray-500 text-sm">
          Free to download • No credit card required • Available nationwide
        </p>
      </div>
    </section>
  );
}
