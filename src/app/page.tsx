import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-pattern">
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--pcg-emerald)]/10 border border-[var(--pcg-emerald)]/30 rounded-full text-[var(--pcg-emerald)] text-sm mb-8">
            <span className="status-dot online" />
            Platform Live - Accepting New Users
          </div>

          {/* Logo */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--pcg-emerald)] to-[var(--pcg-emerald-dark)] flex items-center justify-center mx-auto mb-8 glow-emerald">
            <span className="text-3xl font-bold text-white">PCG</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-emerald">Sovereign OS</span>
            <br />
            <span className="text-[var(--text-primary)]">Your Interface to the Mesh</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            PowerClub Global is the operating system for the Sovereign Stack ecosystem.
            Connect, manage, and control your digital sovereignty from one unified interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://powerclubglobal.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started Free
            </a>
            <Link href="/features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--pcg-emerald)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-[var(--pcg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-emerald mb-2">10K+</div>
              <div className="text-sm text-[var(--text-muted)]">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-emerald mb-2">6</div>
              <div className="text-sm text-[var(--text-muted)]">Stack Layers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-emerald mb-2">99.9%</div>
              <div className="text-sm text-[var(--text-muted)]">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--status-success)] mb-2">FREE</div>
              <div className="text-sm text-[var(--text-muted)]">Basic Plan</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PCG */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is <span className="text-gradient-emerald">PowerClub Global</span>?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Your command center for the Sovereign Stack - bringing together
              network, hardware, AI, tokens, and satellites into one unified experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="feature-icon emerald mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pcg-emerald)] mb-2">Unified Dashboard</h3>
              <p className="text-[var(--text-secondary)]">
                Monitor all your Sovereign Stack assets in one place.
                Real-time stats, alerts, and insights at a glance.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon blue mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pcg-blue)] mb-2">Privacy First</h3>
              <p className="text-[var(--text-secondary)]">
                End-to-end encryption for all data. Your information
                stays yours - we never sell or share your data.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon gold mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">VIBE Integration</h3>
              <p className="text-[var(--text-secondary)]">
                Spend VIBE tokens directly in the dashboard for premium
                features, services, and priority support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need in <span className="text-gradient-emerald">One Place</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Stop switching between apps. PCG Dashboard brings together all your
                Sovereign Stack services with a clean, intuitive interface.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pcg-emerald)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Omega Device Management:</strong> Monitor
                    and configure your privacy hardware
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pcg-emerald)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">VIBE Wallet:</strong> Send, receive,
                    and spend your tokens seamlessly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pcg-emerald)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Pythia AI Access:</strong> Direct
                    interface to AI compute resources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pcg-emerald)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Network Stats:</strong> Real-time
                    Alpha Protocol network metrics
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--pcg-card)] border border-[var(--pcg-border)] rounded-2xl p-6">
              {/* Mock dashboard preview */}
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-[var(--pcg-border)]">
                  <span className="text-sm font-medium text-[var(--text-primary)]">Dashboard Overview</span>
                  <span className="badge success">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="widget">
                    <div className="widget-title">VIBE Balance</div>
                    <div className="widget-value text-[var(--gold)]">12,450</div>
                  </div>
                  <div className="widget">
                    <div className="widget-title">Devices</div>
                    <div className="widget-value">3</div>
                  </div>
                  <div className="widget">
                    <div className="widget-title">Network</div>
                    <div className="text-[var(--status-success)] font-semibold">Connected</div>
                  </div>
                  <div className="widget">
                    <div className="widget-title">AI Credits</div>
                    <div className="widget-value">847</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symbiotic Ecosystem */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-gradient-sovereign">Sovereign Stack</span> Ecosystem
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A symbiotic ecosystem where components interdepend and enhance each other.
              PCG Dashboard is your interface to this interconnected mesh of services.
            </p>
          </div>

          {/* Ecosystem Diagram */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Node - PCG */}
            <div className="flex justify-center mb-8">
              <div className="p-6 rounded-2xl border-2 bg-[var(--pcg-emerald)]/10 border-[var(--pcg-emerald)] glow-emerald text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--pcg-emerald)] to-[var(--pcg-emerald-dark)] flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">PCG</span>
                </div>
                <div className="font-semibold text-[var(--pcg-emerald)]">PCG Dashboard</div>
                <div className="text-xs text-[var(--text-muted)]">Sovereign OS - Your Interface</div>
              </div>
            </div>

            {/* Connecting Lines Visual */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--pcg-emerald)] to-[var(--sovereign-gold)]" />
            </div>

            {/* Connected Components */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { id: "alpha", name: "Alpha Protocol", desc: "Protocol Foundation - P2P Connections", href: "https://alphaprotocol.network", color: "#1e40af", position: "Layer 0" },
                { id: "omega", name: "Omega Wireless", desc: "Hardware Foundation - Physical Access", href: "https://omegawireless.xyz", color: "#00aaff", position: "Layer 1" },
                { id: "pythia", name: "Pythia AI", desc: "Emergent Intelligence", href: "https://pythia-ai.xyz", color: "#8b5cf6", position: "Intelligence" },
                { id: "vibe", name: "VIBE Token", desc: "Ecosystem Rewards", href: "https://vibetoken.xyz", color: "#f59e0b", position: "Economics" },
                { id: "spectrum", name: "Spectrum Galactic", desc: "Global Satellite Coverage", href: "https://spectrumgalactic.xyz", color: "#00d4ff", position: "Connectivity" },
                { id: "apps", name: "Applications", desc: "Dashboard Tools & dApps", href: "#", color: "#71717a", position: "Apps" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id === "apps" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border bg-[var(--pcg-card)] border-[var(--pcg-border)] hover:border-[var(--sovereign-gold)] transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${item.color}20` }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                    </div>
                    <span className="text-[10px] font-medium" style={{ color: item.color }}>
                      {item.position}
                    </span>
                  </div>
                  <div className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--sovereign-gold)] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                </a>
              ))}
            </div>

            {/* Ecosystem Legend */}
            <div className="mt-8 p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)]">
              <p className="text-sm text-[var(--text-secondary)] text-center">
                <span className="text-[var(--sovereign-gold)] font-medium">Bidirectional Relationships:</span>{" "}
                Each component contributes to and benefits from the ecosystem.
                Data flows freely, value is shared, and the network grows stronger together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take <span className="text-gradient-emerald">Control</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Join thousands of users managing their digital sovereignty with PowerClub Global.
            Free to start, powerful when you need it.
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
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
