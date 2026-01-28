import { Metadata } from "next";
import Link from "next/link";
import NavyGridBackground from "@/components/backgrounds/NavyGridBackground";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Vibertas pricing - free for personal use, premium features with VIBE tokens, enterprise solutions available.",
};

const plans = [
  {
    name: "Personal",
    price: "Free",
    period: "Forever",
    description: "For individuals getting started with digital sovereignty",
    color: "cyan",
    featured: false,
    cta: "Get Started Free",
    ctaLink: "https://app.vibertas.io/register",
    features: [
      "Up to 3 personal devices",
      "Basic mesh connectivity",
      "VIBE wallet (view & receive)",
      "Local data storage",
      "Community support",
      "Essential security features",
    ],
    limitations: [
      "No Pythia AI access",
      "Limited automation rules",
    ],
  },
  {
    name: "Home",
    price: "2,500",
    period: "VIBE/month",
    periodNote: "~$2.50/mo",
    description: "For smart homes and families",
    color: "gold",
    featured: true,
    badge: "Most Popular",
    cta: "Start Home Plan",
    ctaLink: "https://app.vibertas.io/register?plan=home",
    features: [
      "Unlimited home devices",
      "Full smart home integration",
      "Omega hardware support",
      "VIBE wallet (full access)",
      "Pythia AI (10K queries/mo)",
      "Voice control",
      "Automation rules (unlimited)",
      "Local video storage",
      "Priority support",
    ],
    limitations: [],
  },
  {
    name: "Pro",
    price: "10,000",
    period: "VIBE/month",
    periodNote: "~$10/mo",
    description: "For power users and small teams",
    color: "cyan",
    featured: false,
    cta: "Start Pro Plan",
    ctaLink: "https://app.vibertas.io/register?plan=pro",
    features: [
      "Everything in Home",
      "Unlimited devices",
      "Wearables & health integration",
      "Pythia AI (unlimited)",
      "Advanced analytics",
      "API access",
      "Multi-user support (5 users)",
      "Custom automations",
      "Dedicated support",
    ],
    limitations: [],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact us",
    description: "For organizations requiring sovereign infrastructure",
    color: "gold",
    featured: false,
    cta: "Contact Sales",
    ctaLink: "/enterprise",
    features: [
      "Everything in Pro",
      "On-premise deployment",
      "Unlimited users",
      "Fleet device management",
      "SAML/OIDC/LDAP SSO",
      "Role-based access control",
      "Compliance & audit tools",
      "White-label option",
      "SLA guarantee",
      "Dedicated account manager",
    ],
    limitations: [],
  },
];

const faqs = [
  {
    q: "Is personal use really free forever?",
    a: "Yes. We believe everyone deserves digital sovereignty. Personal tier includes core features and will always be free. You can upgrade anytime for additional capabilities.",
  },
  {
    q: "How do I get VIBE tokens?",
    a: "VIBE tokens can be purchased at vibetoken.xyz, earned by contributing to the Sovereign Stack network, or received from other users. Current price is approximately $0.001 per token.",
  },
  {
    q: "Can I switch plans?",
    a: "Absolutely. Upgrade instantly, and unused tokens roll over. Downgrade anytime—you'll keep your data and settings, just with reduced features.",
  },
  {
    q: "What happens if I run out of VIBE?",
    a: "Your account gracefully downgrades to the free tier. No data loss, no interruption. Add more VIBE anytime to restore premium features.",
  },
  {
    q: "Is there a trial for paid plans?",
    a: "New accounts receive 5,000 VIBE tokens to try any features. That's enough for 2 months of Home plan or 2 weeks of Pro plan.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "Yes! Registered nonprofits receive 50% token discounts. Contact us with your organization details.",
  },
];

export default function Pricing() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <NavyGridBackground className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient-gold">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Free for personal use. Pay with VIBE tokens for premium features.
            No credit cards, no subscriptions, no corporate surveillance.
          </p>
        </div>
      </NavyGridBackground>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-6 bg-[var(--bg-card)] rounded-2xl border ${
                  plan.featured
                    ? "border-[var(--gold)] shadow-lg shadow-[var(--gold)]/10"
                    : "border-[var(--border-default)]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[var(--gold)] text-[#050810] text-xs font-bold rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-lg font-semibold text-[var(--${plan.color})] mb-2`}>
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-[var(--text-primary)] mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {plan.period}
                    {plan.periodNote && (
                      <span className="block text-xs mt-1 text-[var(--gold)]">
                        {plan.periodNote}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-3">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className={`text-[var(--${plan.color})] mt-0.5`}>&#10003;</span>
                      {feature}
                    </li>
                  ))}
                  {plan.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--text-muted)] mt-0.5">&#10005;</span>
                      {limitation}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaLink}
                  className={`block text-center py-3 px-4 rounded-lg font-medium transition-all ${
                    plan.featured
                      ? "bg-[var(--gold)] text-[#050810] hover:brightness-110"
                      : plan.color === "cyan"
                      ? "bg-[var(--cyan)]/10 text-[var(--cyan)] border border-[var(--cyan)]/30 hover:bg-[var(--cyan)]/20"
                      : "bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIBE Token Info */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Pay with <span className="text-gradient-gold">VIBE</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                VIBE is the native token of the Sovereign Stack ecosystem. Using VIBE for payments
                keeps value circulating within the network and gives you benefits that traditional payments can't match.
              </p>

              <div className="bg-[var(--bg-card)] border border-[var(--gold)] rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[var(--text-secondary)]">Current Price</span>
                  <span className="text-2xl font-bold text-gradient-gold">$0.001</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-muted)]">per VIBE token</span>
                  <a
                    href="https://vibetoken.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gold)] hover:underline"
                  >
                    Buy VIBE &rarr;
                  </a>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "No credit card or bank account needed",
                  "Privacy-preserving transactions",
                  "Earn staking rewards while holding",
                  "Tokens stay in the ecosystem",
                  "Price stability mechanisms",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--gold)]">&#10003;</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] p-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Quick Conversion</h3>
              <div className="space-y-4">
                {[
                  { vibe: "2,500", usd: "$2.50", plan: "Home (1 month)" },
                  { vibe: "10,000", usd: "$10", plan: "Pro (1 month)" },
                  { vibe: "25,000", usd: "$25", plan: "Home (1 year, save 17%)" },
                  { vibe: "100,000", usd: "$100", plan: "Pro (1 year, save 17%)" },
                ].map((item) => (
                  <div key={item.vibe} className="flex items-center justify-between py-3 border-b border-[var(--border-default)] last:border-0">
                    <div>
                      <span className="font-medium text-[var(--text-primary)]">{item.vibe} VIBE</span>
                      <span className="text-[var(--text-muted)] text-sm ml-2">({item.usd})</span>
                    </div>
                    <span className="text-sm text-[var(--text-secondary)]">{item.plan}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://vibetoken.xyz/invest"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-6 py-3 bg-[var(--gold)] text-[#050810] rounded-lg font-medium hover:brightness-110 transition-all"
              >
                Buy VIBE Tokens
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-default)]">
                  <th className="text-left py-4 px-4 text-[var(--text-secondary)] font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-[var(--cyan)]">Personal</th>
                  <th className="text-center py-4 px-4 text-[var(--gold)]">Home</th>
                  <th className="text-center py-4 px-4 text-[var(--cyan)]">Pro</th>
                  <th className="text-center py-4 px-4 text-[var(--gold)]">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: "Devices", personal: "3", home: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Users", personal: "1", home: "Family (6)", pro: "5", enterprise: "Unlimited" },
                  { feature: "Pythia AI", personal: "—", home: "10K/mo", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "VIBE Wallet", personal: "View only", home: "Full", pro: "Full", enterprise: "Full" },
                  { feature: "Smart Home", personal: "—", home: "Full", pro: "Full", enterprise: "Full" },
                  { feature: "Wearables", personal: "—", home: "Basic", pro: "Full", enterprise: "Full" },
                  { feature: "API Access", personal: "—", home: "—", pro: "Yes", enterprise: "Yes" },
                  { feature: "SSO/LDAP", personal: "—", home: "—", pro: "—", enterprise: "Yes" },
                  { feature: "White Label", personal: "—", home: "—", pro: "—", enterprise: "Yes" },
                  { feature: "Support", personal: "Community", home: "Priority", pro: "Dedicated", enterprise: "24/7" },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--border-default)]">
                    <td className="py-4 px-4 text-[var(--text-primary)]">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-[var(--text-secondary)]">{row.personal}</td>
                    <td className="text-center py-4 px-4 text-[var(--text-secondary)]">{row.home}</td>
                    <td className="text-center py-4 px-4 text-[var(--text-secondary)]">{row.pro}</td>
                    <td className="text-center py-4 px-4 text-[var(--text-secondary)]">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{faq.q}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your <span className="text-gradient-gold">Sovereign</span> Journey
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Create your free account today. Upgrade anytime with VIBE tokens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.vibertas.io/register"
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
