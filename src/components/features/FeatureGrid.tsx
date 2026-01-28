import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build With the <span className="text-gradient-gold">Full Stack</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Sovereign OS gives you access to every layer of the Sovereign Stack.
            Build powerful decentralized applications with infrastructure that just works.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
