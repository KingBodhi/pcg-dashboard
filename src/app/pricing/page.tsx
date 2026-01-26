import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "PowerClub Global pricing - free to start, premium features with VIBE tokens.",
};

export default function Pricing() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-emerald">Pricing</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Free to start. Pay with VIBE tokens for premium features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="card-static">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Free</h3>
                <div className="text-4xl font-bold text-gradient-emerald mb-1">$0</div>
                <div className="text-sm text-[var(--text-muted)]">Forever free</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Dashboard access",
                  "1 connected device",
                  "Basic network stats",
                  "VIBE wallet (view only)",
                  "Community support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--pcg-emerald)]">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://powerclubglobal.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block text-center"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan */}
            <div className="card-static border-[var(--pcg-emerald)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="badge success">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[var(--pcg-emerald)] mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gradient-emerald mb-1">1,000</div>
                <div className="text-sm text-[var(--text-muted)]">VIBE/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Free",
                  "Unlimited devices",
                  "Full VIBE wallet",
                  "Pythia AI access",
                  "Advanced analytics",
                  "Priority support",
                  "Custom alerts",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--pcg-emerald)]">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://powerclubglobal.com/register?plan=pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center"
              >
                Start Pro Trial
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="card-static">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gradient-gold mb-1">Custom</div>
                <div className="text-sm text-[var(--text-muted)]">Contact for pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Pro",
                  "White-label option",
                  "API access",
                  "Dedicated support",
                  "SLA guarantee",
                  "Custom integrations",
                  "Volume discounts",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--gold)]">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://okb-ventures.vercel.app/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIBE Payment Info */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pay with VIBE</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Premium features are paid with VIBE tokens, keeping value within the ecosystem.
            </p>
          </div>

          <div className="bg-[var(--pcg-card)] border border-[var(--gold)] rounded-2xl p-8 glow-gold">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">Current VIBE Price</h3>
                <div className="text-5xl font-bold text-gradient-gold mb-2">$0.001</div>
                <div className="text-[var(--text-muted)]">per VIBE token</div>
                <div className="mt-4 text-sm text-[var(--text-secondary)]">
                  Pro plan = ~$1/month at current prices
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">Benefits of VIBE Payment</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--gold)]">&#10003;</span>
                    Tokens stay in the ecosystem
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--gold)]">&#10003;</span>
                    Earn while you spend (staking)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--gold)]">&#10003;</span>
                    No credit card required
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--gold)]">&#10003;</span>
                    Privacy-preserving payments
                  </li>
                </ul>
                <a
                  href="https://vibetoken.xyz/invest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[var(--gold)] hover:underline text-sm"
                >
                  Buy VIBE Tokens &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is the free plan really free forever?",
                a: "Yes! The free plan includes basic dashboard access and will always be free. We believe everyone should have access to manage their digital sovereignty.",
              },
              {
                q: "How do I get VIBE tokens to upgrade?",
                a: "You can purchase VIBE tokens directly at vibetoken.xyz for $0.001 each, or earn them by contributing to the Sovereign Stack network.",
              },
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade at any time. When upgrading, you only pay the difference. When downgrading, unused credits roll over.",
              },
              {
                q: "What happens if I run out of VIBE?",
                a: "Your account will continue on the free plan until you add more VIBE. You won't lose any data or settings.",
              },
            ].map((item) => (
              <div key={item.q} className="card-static">
                <h4 className="font-semibold text-[var(--pcg-emerald)] mb-2">{item.q}</h4>
                <p className="text-[var(--text-secondary)]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start <span className="text-gradient-emerald">Free</span> Today
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            No credit card required. Upgrade anytime with VIBE tokens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://powerclubglobal.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Create Free Account
            </a>
            <Link href="/features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
