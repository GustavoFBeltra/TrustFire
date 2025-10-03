import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
