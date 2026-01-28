import Link from "next/link";

const useCases = [
  {
    id: "personal",
    title: "Personal",
    subtitle: "Your Digital Command Center",
    description: "Take control of your digital life. Manage devices, secure your data, and connect to the mesh from a unified interface.",
    features: [
      "Privacy-first personal computing",
      "Unified device management",
      "Secure messaging & storage",
      "VIBE wallet integration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "cyan",
    href: "/features#personal",
  },
  {
    id: "home",
    title: "Smart Home",
    subtitle: "Privacy-First Home Automation",
    description: "Connect your home devices without sacrificing privacy. Local-first processing with optional mesh connectivity.",
    features: [
      "Local device control",
      "No cloud dependency",
      "Omega hardware integration",
      "Voice & automation support",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "gold",
    href: "/features#home",
  },
  {
    id: "wearables",
    title: "Wearables",
    subtitle: "Health & Fitness, Your Way",
    description: "Your biometric data stays yours. Connect wearables to Vibertas for health tracking without corporate surveillance.",
    features: [
      "Private health data",
      "Cross-device sync",
      "AI-powered insights",
      "Zero third-party access",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "pythia",
    href: "/features#wearables",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    subtitle: "Sovereign Infrastructure",
    description: "Deploy Vibertas across your organization. Self-hosted, compliant, and fully under your control.",
    features: [
      "On-premise deployment",
      "Compliance & audit tools",
      "Fleet device management",
      "Enterprise SSO & RBAC",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "gold",
    href: "/enterprise",
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One OS, <span className="text-gradient-gold">Infinite Possibilities</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Vibertas adapts to your needs—whether you&apos;re securing your personal devices,
            automating your home, or deploying across an enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <Link
              key={useCase.id}
              href={useCase.href}
              className="group card hover:border-[var(--gold)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`feature-icon ${useCase.color} flex-shrink-0`}>
                  {useCase.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--cyan)] mb-2">{useCase.subtitle}</p>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    {useCase.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
