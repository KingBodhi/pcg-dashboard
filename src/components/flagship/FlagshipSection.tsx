"use client";

export default function FlagshipSection() {
  return (
    <section id="flagship" className="py-24 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full text-[var(--gold)] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
            Flagship Application
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">PCG Dashboard</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            The first application built on Vibertas. A complete command center
            that showcases what&apos;s possible when you build on the mesh.
          </p>
        </div>

        {/* App showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features list */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Your Digital Sovereignty, <span className="text-[var(--cyan)]">Unified</span>
            </h3>
            <p className="text-[var(--text-secondary)] mb-8">
              PCG Dashboard demonstrates the full power of Vibertas—managing devices,
              tokens, AI, and network connectivity from a single interface.
            </p>

            <ul className="space-y-4">
              {[
                { title: "Omega Device Control", desc: "Monitor and configure privacy hardware", color: "omega" },
                { title: "VIBE Wallet", desc: "Send, receive, stake tokens seamlessly", color: "vibe" },
                { title: "Pythia AI Interface", desc: "Access distributed AI compute", color: "pythia" },
                { title: "Network Status", desc: "Real-time Alpha Protocol metrics", color: "alpha" },
                { title: "Satellite Coverage", desc: "Spectrum Galactic connectivity", color: "spectrum" },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className={`feature-icon ${item.color} w-10 h-10 flex-shrink-0`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">{item.title}</div>
                    <div className="text-sm text-[var(--text-muted)]">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.pcgdashboard.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Launch Dashboard
              </a>
              <a
                href="https://github.com/powerclubglobal/pcg-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Source
              </a>
            </div>
          </div>

          {/* Right: Mock dashboard preview */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-2xl p-6 glow-gold">
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[var(--border-default)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-[var(--text-muted)] font-mono">app.pcgdashboard.com</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[var(--bg-surface)] rounded-lg p-3">
                  <div className="text-xs text-[var(--text-muted)] mb-1">VIBE Balance</div>
                  <div className="text-xl font-bold text-[var(--gold)]">12,450</div>
                </div>
                <div className="bg-[var(--bg-surface)] rounded-lg p-3">
                  <div className="text-xs text-[var(--text-muted)] mb-1">Devices</div>
                  <div className="text-xl font-bold text-[var(--text-primary)]">3 <span className="text-xs text-[var(--status-success)]">online</span></div>
                </div>
              </div>

              {/* Network status */}
              <div className="bg-[var(--bg-surface)] rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[var(--text-muted)]">Network Status</span>
                  <span className="text-xs text-[var(--status-success)] flex items-center gap-1">
                    <span className="status-dot online" /> Connected
                  </span>
                </div>
                <div className="h-2 bg-[var(--border-default)] rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan-light)] rounded-full" />
                </div>
              </div>

              {/* Activity preview */}
              <div className="bg-[var(--bg-surface)] rounded-lg p-3">
                <div className="text-xs text-[var(--text-muted)] mb-2">Recent Activity</div>
                <div className="space-y-2">
                  {[
                    { text: "Received 50 VIBE", time: "2h ago", color: "var(--status-success)" },
                    { text: "Omega Router synced", time: "5h ago", color: "var(--omega-primary)" },
                    { text: "Pythia query completed", time: "8h ago", color: "var(--pythia-primary)" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-[var(--text-secondary)]">{item.text}</span>
                      <span className="text-[var(--text-muted)]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--text-muted)] mb-4">
            Want to build the next flagship app on Vibertas?
          </p>
          <a
            href="https://docs.vibertas.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cyan)] hover:text-[var(--cyan-light)] transition-colors font-medium"
          >
            Read the Developer Docs →
          </a>
        </div>
      </div>
    </section>
  );
}
