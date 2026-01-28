import { pricingTiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section className="py-24 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Free, <span className="text-gradient-gold">Scale with VIBE</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Start building for free. Pay only when you deploy to production—and pay in VIBE tokens.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
