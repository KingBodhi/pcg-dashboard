import { Metadata } from "next";
import Link from "next/link";
import NavyGridBackground from "@/components/backgrounds/NavyGridBackground";

export const metadata: Metadata = {
  title: "About",
  description: "About Vibertas - the operating system for digital sovereignty, built on the Sovereign Stack.",
};

const stackLayers = [
  { layer: "L5", name: "Spectrum Galactic", desc: "LEO satellite connectivity for global coverage", href: "https://spectrumgalactic.xyz", color: "#00d4ff" },
  { layer: "L4", name: "VIBE Token", desc: "Economic layer powering transactions", href: "https://vibetoken.xyz", color: "#f59e0b" },
  { layer: "L3", name: "Pythia AI", desc: "Distributed AI compute and intelligence", href: "https://pythia-ai.xyz", color: "#8b5cf6" },
  { layer: "L2", name: "Vibertas", desc: "Operating system for digital sovereignty", current: true, color: "#ae904c" },
  { layer: "L1", name: "Omega Wireless", desc: "Privacy-focused hardware and routers", href: "https://omegawireless.xyz", color: "#00aaff" },
  { layer: "L0", name: "Alpha Protocol", desc: "Core mesh network infrastructure", href: "https://alphaprotocol.network", color: "#1e40af" },
];

const team = [
  {
    name: "Vibertas Team",
    role: "Core Development",
    description: "Building the future of personal computing",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <NavyGridBackground className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-gold">Vibertas</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Building the operating system layer for complete digital sovereignty.
          </p>
        </div>
      </NavyGridBackground>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Vibertas exists to give you complete control over your digital life.
                We believe that your devices, your data, and your privacy should be
                entirely under your control—not corporations or governments.
              </p>
              <p className="text-[var(--text-secondary)] mb-4">
                As the operating system layer of the Sovereign Stack, we connect users
                to the entire ecosystem—from Alpha Protocol's mesh network to Spectrum
                Galactic's satellites—through one unified, privacy-respecting interface.
              </p>
              <p className="text-[var(--text-secondary)]">
                Whether you're managing personal devices, automating your smart home,
                tracking health data, or deploying across an enterprise, Vibertas
                provides the foundation for true digital sovereignty.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--gold)] rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#050810]">Viber</span>
                </div>
                <h3 className="text-xl font-semibold text-gradient-gold mb-2">Layer 2</h3>
                <p className="text-sm text-[var(--text-muted)]">Operating System Layer</p>
                <div className="mt-6 pt-6 border-t border-[var(--border-default)]">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[var(--cyan)]">6</div>
                      <div className="text-xs text-[var(--text-muted)]">Stack Layers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--gold)]">∞</div>
                      <div className="text-xs text-[var(--text-muted)]">Devices</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--pythia)]">100%</div>
                      <div className="text-xs text-[var(--text-muted)]">Private</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Sovereign Stack */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Sovereign Stack</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Six integrated layers working together to provide complete digital sovereignty.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {stackLayers.map((item) => (
                item.current ? (
                  <div
                    key={item.layer}
                    className="flex items-center gap-6 p-6 rounded-xl border-2 transition-all"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: item.color,
                      boxShadow: `0 0 20px ${item.color}30`,
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <span className="text-xl font-bold text-[#050810]">{item.layer}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--text-primary)]">{item.name}</h4>
                      <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--gold)]/20 text-[var(--gold)]">
                      You are here
                    </span>
                  </div>
                ) : (
                  <a
                    key={item.layer}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-default)] hover:border-[var(--gold)] transition-colors group"
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <span
                        className="text-xl font-bold transition-colors"
                        style={{ color: item.color }}
                      >
                        {item.layer}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--gold)] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Privacy First",
                description: "Your data belongs to you. We build systems that process locally by default and never compromise your privacy.",
                icon: "🔐",
              },
              {
                title: "User Sovereignty",
                description: "You control your devices, your credentials, and your digital identity. No lock-in, no walled gardens.",
                icon: "👑",
              },
              {
                title: "Open Ecosystem",
                description: "Built on open standards and protocols. Interoperable with the broader Sovereign Stack and beyond.",
                icon: "🌐",
              },
              {
                title: "Resilient Design",
                description: "Mesh-first architecture means your systems work even when centralized infrastructure fails.",
                icon: "🛡️",
              },
              {
                title: "Transparency",
                description: "Open source core components. Auditable code. No hidden tracking or data collection.",
                icon: "📖",
              },
              {
                title: "Accessibility",
                description: "Digital sovereignty should be available to everyone, not just technical experts.",
                icon: "🤝",
              },
            ].map((value) => (
              <div key={value.title} className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backed By */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Backed By</h2>
          <a
            href="https://okb-ventures.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-2xl p-8 hover:border-[var(--gold)] transition-colors">
              <div className="w-24 h-24 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[var(--gold)]">OKB</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)]">OKB Ventures</h3>
              <p className="text-sm text-[var(--text-muted)]">Private Investment Office</p>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the <span className="text-gradient-gold">Movement</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Be part of the future of digital sovereignty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.vibertas.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started Free
            </a>
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
