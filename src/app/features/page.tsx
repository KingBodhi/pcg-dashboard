import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description: "PowerClub Global features - unified dashboard for the entire Sovereign Stack ecosystem.",
};

export default function Features() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-emerald">Features</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Everything you need to manage your digital sovereignty,
            all in one powerful dashboard.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The essential tools for managing your Sovereign Stack ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="feature-icon emerald mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pcg-emerald)] mb-2">Real-Time Dashboard</h3>
              <p className="text-[var(--text-secondary)]">
                Live updates on all your connected devices, network status, token balances,
                and system health metrics.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon gold mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">VIBE Wallet</h3>
              <p className="text-[var(--text-secondary)]">
                Send, receive, and spend VIBE tokens. View transaction history,
                staking status, and earnings breakdown.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon blue mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pcg-blue)] mb-2">Device Management</h3>
              <p className="text-[var(--text-secondary)]">
                Configure and monitor all your Omega devices. Remote updates,
                diagnostics, and performance optimization.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon purple mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pcg-purple)] mb-2">Pythia AI Access</h3>
              <p className="text-[var(--text-secondary)]">
                Direct interface to AI compute. Run queries, manage credits,
                and access distributed intelligence resources.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon orange mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pcg-orange)] mb-2">Network Monitor</h3>
              <p className="text-[var(--text-secondary)]">
                Track Alpha Protocol network status, node health, connectivity
                metrics, and global coverage.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon emerald mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--pcg-emerald)] mb-2">Smart Alerts</h3>
              <p className="text-[var(--text-secondary)]">
                Customizable notifications for device status, token movements,
                network events, and security alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Sovereign Stack Integration</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Seamless connection to every layer of the stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-static">
              <h3 className="text-lg font-semibold text-[var(--gold)] mb-4">Connected Services</h3>
              <ul className="space-y-3">
                {[
                  { name: "Alpha Protocol", desc: "Network status and node management" },
                  { name: "Omega Devices", desc: "Hardware configuration and monitoring" },
                  { name: "Pythia AI", desc: "AI compute credits and task management" },
                  { name: "VIBE Token", desc: "Wallet, staking, and transactions" },
                  { name: "Spectrum Galactic", desc: "Satellite connectivity status" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="text-[var(--pcg-emerald)]">&#10003;</span>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">{item.name}</div>
                      <div className="text-sm text-[var(--text-muted)]">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-static">
              <h3 className="text-lg font-semibold text-[var(--pcg-emerald)] mb-4">Dashboard Widgets</h3>
              <ul className="space-y-3">
                {[
                  { name: "Balance Overview", desc: "VIBE holdings and earnings" },
                  { name: "Device Status", desc: "Connected hardware health" },
                  { name: "Network Graph", desc: "Real-time connectivity map" },
                  { name: "Activity Feed", desc: "Recent transactions and events" },
                  { name: "Quick Actions", desc: "One-click common tasks" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="text-[var(--pcg-emerald)]">&#10003;</span>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">{item.name}</div>
                      <div className="text-sm text-[var(--text-muted)]">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Security & Privacy</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Your data is protected with industry-leading security measures.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "E2E Encryption", desc: "All data encrypted in transit and at rest" },
              { title: "2FA Support", desc: "Multi-factor authentication options" },
              { title: "Zero Knowledge", desc: "We can't access your private data" },
              { title: "Self Custody", desc: "Your keys, your tokens, always" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-[var(--pcg-card)] rounded-xl border border-[var(--pcg-border)]">
                <div className="w-12 h-12 rounded-full bg-[var(--pcg-emerald)]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--pcg-emerald)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-emerald">Get Started</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Create your free account and start managing your Sovereign Stack today.
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
