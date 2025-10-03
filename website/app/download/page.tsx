import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />

      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Download TrustFire
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Available for iOS and Android. Start your first legal transfer today.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#"
              className="bg-black border-2 border-gray-700 hover:border-white text-white px-8 py-4 rounded-xl text-lg font-semibold transition flex items-center justify-center gap-3"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </Link>

            <Link
              href="#"
              className="bg-black border-2 border-gray-700 hover:border-white text-white px-8 py-4 rounded-xl text-lg font-semibold transition flex items-center justify-center gap-3"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background-dark-alt border border-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">Free to Download</h3>
                  <p className="text-gray-400 text-sm">No subscription fees or hidden costs</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">Instant Verification</h3>
                  <p className="text-gray-400 text-sm">Verify your identity in minutes</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">Browse Listings</h3>
                  <p className="text-gray-400 text-sm">Search thousands of verified listings</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">Secure Messaging</h3>
                  <p className="text-gray-400 text-sm">Encrypted communication with sellers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">FFL Finder</h3>
                  <p className="text-gray-400 text-sm">Locate nearby licensed dealers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">Digital Records</h3>
                  <p className="text-gray-400 text-sm">Maintain complete transfer history</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background-dark-alt border border-gray-800 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">iOS</h4>
                <p className="text-gray-400 text-sm">Requires iOS 14.0 or later</p>
                <p className="text-gray-400 text-sm">Compatible with iPhone and iPad</p>
              </div>
              <div className="bg-background-dark-alt border border-gray-800 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Android</h4>
                <p className="text-gray-400 text-sm">Requires Android 8.0 or later</p>
                <p className="text-gray-400 text-sm">Available on Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
