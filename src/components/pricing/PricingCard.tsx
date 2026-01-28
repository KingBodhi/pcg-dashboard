import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className={`pricing-card ${tier.popular ? "popular" : ""}`}>
      {/* Popular badge */}
      {tier.popular && (
        <div className="badge gold mb-4">
          Most Popular
        </div>
      )}

      {/* Tier name */}
      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
        {tier.name}
      </h3>

      {/* Price */}
      <div className="mb-4">
        <span className={`text-4xl font-bold ${tier.popular ? "text-gradient-gold" : "text-[var(--text-primary)]"}`}>
          {tier.price}
        </span>
        {tier.priceSubtext && (
          <span className="text-[var(--text-muted)] ml-1">{tier.priceSubtext}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] mb-6">
        {tier.description}
      </p>

      {/* Features list */}
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 ${tier.popular ? "text-[var(--gold)]" : "text-[var(--cyan)]"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-[var(--text-secondary)]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <a
        href={tier.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center w-full ${tier.popular ? "btn-primary" : "btn-secondary"}`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
