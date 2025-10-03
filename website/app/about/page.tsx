import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />

      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About TrustFire
          </h1>
          <p className="text-xl text-gray-400">
            Building trust through technology and compliance.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background-dark-alt border border-gray-800 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-4">
              TrustFire was created to modernize the firearm transfer process while maintaining strict legal compliance. We believe that legal firearm transfers should be simple, transparent, and fully documented.
            </p>
            <p className="text-gray-300 text-lg">
              By connecting buyers, sellers, and licensed FFLs through technology, we're making legal compliance the easiest path forward for everyone involved in firearm transfers.
            </p>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background-dark-alt border border-gray-800 rounded-xl p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
                <p className="text-gray-400">
                  Every user is verified. Every FFL is licensed. Every transaction is documented.
                </p>
              </div>
              <div className="bg-background-dark-alt border border-gray-800 rounded-xl p-6">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-white mb-3">Compliance</h3>
                <p className="text-gray-400">
                  100% adherence to federal and state regulations is non-negotiable.
                </p>
              </div>
              <div className="bg-background-dark-alt border border-gray-800 rounded-xl p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-400">
                  Using modern technology to simplify complex legal processes.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="bg-background-dark-alt border border-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Legal Compliance</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-primary">✓</span>
                <p className="text-gray-300">
                  <strong className="text-white">ATF Compliant:</strong> All transfers facilitated through licensed FFLs in accordance with federal firearms regulations.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">✓</span>
                <p className="text-gray-300">
                  <strong className="text-white">Background Checks:</strong> NICS background checks conducted by FFLs for every transfer.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">✓</span>
                <p className="text-gray-300">
                  <strong className="text-white">State Regulations:</strong> Platform accounts for state-specific laws and waiting periods.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">✓</span>
                <p className="text-gray-300">
                  <strong className="text-white">Age Verification:</strong> Strict enforcement of federal age requirements (18+ for long guns, 21+ for handguns).
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">✓</span>
                <p className="text-gray-300">
                  <strong className="text-white">Record Keeping:</strong> Digital documentation maintained in accordance with ATF requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
