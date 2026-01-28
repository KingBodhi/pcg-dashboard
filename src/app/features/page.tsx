import { Metadata } from "next";
import Link from "next/link";
import NavyGridBackground from "@/components/backgrounds/NavyGridBackground";

export const metadata: Metadata = {
  title: "Features",
  description: "Vibertas features - a complete operating system for personal devices, smart homes, wearables, and enterprise systems.",
};

const platformFeatures = [
  {
    title: "Unified Interface",
    description: "One dashboard to control all your devices, networks, and digital assets across the Sovereign Stack.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Mesh Networking",
    description: "Built on Alpha Protocol for resilient, decentralized connectivity that works even when traditional networks fail.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description: "Pythia AI built-in for intelligent automation, predictive insights, and natural language control.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Token Economy",
    description: "VIBE tokens power the ecosystem. Earn, spend, and stake for premium features and services.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Hardware Support",
    description: "Native support for Omega privacy routers, sensors, and devices designed for the Sovereign Stack.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Satellite Ready",
    description: "Spectrum Galactic integration for connectivity anywhere on Earth, independent of terrestrial infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const useCaseDetails = {
  personal: {
    id: "personal",
    title: "Personal Computing",
    subtitle: "Your Digital Command Center",
    description: "Take complete control of your digital life. Vibertas transforms your personal devices into a privacy-respecting, mesh-connected command center.",
    color: "cyan",
    features: [
      {
        title: "Privacy-First Design",
        description: "All data processed locally by default. You choose what leaves your device.",
      },
      {
        title: "Unified Device Management",
        description: "Manage phones, tablets, laptops, and desktops from one interface.",
      },
      {
        title: "Secure Messaging",
        description: "End-to-end encrypted communication through the Alpha Protocol mesh.",
      },
      {
        title: "VIBE Wallet",
        description: "Full cryptocurrency wallet with send, receive, stake, and transaction history.",
      },
      {
        title: "Cloud-Free Storage",
        description: "Distributed storage across your devices and trusted nodes.",
      },
      {
        title: "Cross-Device Sync",
        description: "Your files, settings, and apps sync seamlessly without third-party clouds.",
      },
    ],
  },
  home: {
    id: "home",
    title: "Smart Home",
    subtitle: "Privacy-First Home Automation",
    description: "Connect and control your entire home without sending data to corporate servers. Local-first processing with optional mesh connectivity.",
    color: "gold",
    features: [
      {
        title: "Local Device Control",
        description: "All automation runs locally. Your smart home works even without internet.",
      },
      {
        title: "Omega Hardware Integration",
        description: "Native support for Omega routers, sensors, and privacy-focused devices.",
      },
      {
        title: "Voice Control",
        description: "Pythia AI processes voice commands locally—no recordings sent to the cloud.",
      },
      {
        title: "Automation Rules",
        description: "Create complex routines with a visual editor or natural language.",
      },
      {
        title: "Energy Monitoring",
        description: "Track and optimize energy usage across all connected devices.",
      },
      {
        title: "Security Cameras",
        description: "Self-hosted video storage with AI-powered alerts and zero cloud dependency.",
      },
    ],
  },
  wearables: {
    id: "wearables",
    title: "Wearables & Health",
    subtitle: "Your Biometrics, Your Data",
    description: "Connect fitness trackers, smartwatches, and health devices to Vibertas. Get AI-powered insights without corporate surveillance.",
    color: "pythia",
    features: [
      {
        title: "Private Health Data",
        description: "Biometric data never leaves your control. No third-party analytics.",
      },
      {
        title: "Cross-Device Sync",
        description: "Aggregate data from multiple wearables into one unified health view.",
      },
      {
        title: "AI Health Insights",
        description: "Pythia AI analyzes your data locally to provide personalized recommendations.",
      },
      {
        title: "Fitness Tracking",
        description: "Steps, heart rate, sleep, workouts—all tracked privately.",
      },
      {
        title: "Medical Records",
        description: "Secure storage for medical documents and health history.",
      },
      {
        title: "Emergency Features",
        description: "Mesh-based emergency alerts that work even without cellular service.",
      },
    ],
  },
  enterprise: {
    id: "enterprise",
    title: "Enterprise",
    subtitle: "Sovereign Infrastructure at Scale",
    description: "Deploy Vibertas across your organization. Self-hosted, compliant, and fully under your control.",
    color: "gold",
    features: [
      {
        title: "On-Premise Deployment",
        description: "Run Vibertas entirely on your infrastructure. No external dependencies.",
      },
      {
        title: "Fleet Management",
        description: "Manage thousands of devices from a central console with granular controls.",
      },
      {
        title: "Compliance Tools",
        description: "Built-in audit logging, data retention policies, and compliance reporting.",
      },
      {
        title: "Enterprise SSO",
        description: "SAML, OIDC, and LDAP integration for seamless authentication.",
      },
      {
        title: "Role-Based Access",
        description: "Fine-grained permissions for users, teams, and departments.",
      },
      {
        title: "White-Label Option",
        description: "Customize branding and deploy Vibertas under your own brand.",
      },
    ],
  },
};

export default function Features() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <NavyGridBackground className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            One OS, <span className="text-gradient-gold">Every Device</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Vibertas adapts to your needs—from personal computers to enterprise fleets,
            smart homes to wearables. All powered by the Sovereign Stack.
          </p>
        </div>
      </NavyGridBackground>

      {/* Platform Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Capabilities</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Core features available across all Vibertas deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="card group">
                <div className="feature-icon cyan mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--cyan)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Sections */}
      {Object.values(useCaseDetails).map((useCase, index) => (
        <section
          key={useCase.id}
          id={useCase.id}
          className={`py-24 ${index % 2 === 0 ? "bg-[var(--bg-surface)]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-[var(--${useCase.color})]/10 text-[var(--${useCase.color})]`}>
                {useCase.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{useCase.title}</h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                {useCase.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCase.features.map((feature) => (
                <div key={feature.title} className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
                  <div className={`w-2 h-2 rounded-full bg-[var(--${useCase.color})] mb-4`} />
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Security Section */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Security & Privacy</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Built from the ground up with security and privacy as core principles, not afterthoughts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "End-to-End Encryption",
                description: "All data encrypted in transit and at rest using military-grade encryption.",
                icon: "🔐",
              },
              {
                title: "Two-Factor Auth",
                description: "Hardware keys, TOTP, and biometric authentication options.",
                icon: "🛡️",
              },
              {
                title: "Zero Knowledge",
                description: "We can never access your data. Your keys, your control.",
                icon: "👁️",
              },
              {
                title: "Self Custody",
                description: "Your tokens, your credentials, always under your control.",
                icon: "🔑",
              },
              {
                title: "Open Source",
                description: "Core components are open source and independently auditable.",
                icon: "📖",
              },
              {
                title: "Local Processing",
                description: "Data processed on-device by default. You choose what to share.",
                icon: "💻",
              },
              {
                title: "Audit Logging",
                description: "Complete activity logs for compliance and security monitoring.",
                icon: "📋",
              },
              {
                title: "Secure Boot",
                description: "Verified boot chain ensures only trusted code runs.",
                icon: "✓",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">Get Started</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Choose the right plan for your needs—from free personal use to enterprise deployments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary">
              View Pricing
            </Link>
            <Link href="/enterprise" className="btn-secondary">
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
