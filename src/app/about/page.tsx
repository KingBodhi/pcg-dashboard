import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About PowerClub Global - the unified interface for the Sovereign Stack.",
};

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-emerald">PowerClub Global</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Building the interface layer for digital sovereignty.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                PowerClub Global exists to make digital sovereignty accessible to everyone.
                We believe managing your privacy, network, and digital assets should be
                simple, intuitive, and powerful.
              </p>
              <p className="text-[var(--text-secondary)]">
                As Layer 3 of the Sovereign Stack, we connect users to the entire ecosystem -
                from Alpha Protocol&apos;s network layer to Spectrum Galactic&apos;s satellites -
                through one unified interface.
              </p>
            </div>
            <div className="bg-[var(--pcg-card)] border border-[var(--pcg-border)] rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--pcg-emerald)] to-[var(--pcg-emerald-dark)] flex items-center justify-center mx-auto mb-6 glow-emerald">
                  <span className="text-3xl font-bold text-white">PCG</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--pcg-emerald)] mb-2">Layer 3</h3>
                <p className="text-sm text-[var(--text-muted)]">User Interface Layer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Sovereign Stack */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Sovereign Stack</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A complete ecosystem for digital sovereignty, from network infrastructure to satellite connectivity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { layer: "L6", name: "Spectrum Galactic", desc: "LEO satellite connectivity for global, censorship-resistant coverage", href: "https://spectrumgalactic.xyz", color: "spectrum-cyan" },
                { layer: "L5", name: "VIBE Token", desc: "Economic layer powering transactions across the stack", href: "https://vibetoken.xyz", color: "gold" },
                { layer: "L4", name: "Pythia AI", desc: "Distributed AI compute and intelligence services", href: "https://pythia-ai.xyz", color: "purple" },
                { layer: "L3", name: "PCG Dashboard", desc: "Unified interface for managing your entire sovereignty", active: true, color: "pcg-emerald" },
                { layer: "L2", name: "Omega Wireless", desc: "Privacy-focused hardware devices and routers", href: "https://omegawireless.xyz", color: "pink" },
                { layer: "L1", name: "Alpha Protocol", desc: "Core cryptographic network infrastructure", href: "https://alphaprotocol.network", color: "green" },
              ].map((item) => (
                item.active ? (
                  <div
                    key={item.layer}
                    className="flex items-center gap-6 p-6 rounded-xl bg-[var(--pcg-emerald)]/10 border border-[var(--pcg-emerald)] glow-emerald"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[var(--pcg-emerald)] flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{item.layer}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--pcg-emerald)]">{item.name}</h4>
                      <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                    <span className="badge success">You are here</span>
                  </div>
                ) : (
                  <a
                    key={item.layer}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 rounded-xl bg-[var(--pcg-card)] border border-[var(--pcg-border)] hover:border-[var(--gold)] transition-colors group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[var(--pcg-surface)] flex items-center justify-center group-hover:bg-[var(--gold)]/10 transition-colors">
                      <span className="text-xl font-bold text-[var(--text-muted)] group-hover:text-[var(--gold)] transition-colors">{item.layer}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">{item.name}</h4>
                      <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--gold)]">&rarr;</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Backed By */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Backed By</h2>
          <a
            href="https://okb-ventures.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-[var(--pcg-card)] border border-[var(--pcg-border)] rounded-2xl p-8 hover:border-[var(--gold)] transition-colors">
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
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the <span className="text-gradient-emerald">Movement</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Be part of the future of digital sovereignty.
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
