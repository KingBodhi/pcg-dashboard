import { Metadata } from "next";
import Link from "next/link";
import NavyGridBackground from "@/components/backgrounds/NavyGridBackground";

export const metadata: Metadata = {
  title: "Dashboard Preview",
  description: "Preview the PCG Dashboard - the flagship application on Vibertas.",
};

export default function Dashboard() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <NavyGridBackground className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--cyan)]/10 border border-[var(--cyan)]/30 rounded-full text-[var(--cyan)] text-xs mb-4">
            <span className="status-dot online" />
            Preview Mode
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">PCG Dashboard</span> Preview
          </h1>
          <p className="text-[var(--text-secondary)]">
            The flagship application on Vibertas. Experience what your personal dashboard will look like.
          </p>
        </div>
      </NavyGridBackground>

      {/* Mock Dashboard */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <div className="text-xs text-[var(--text-muted)] mb-1">VIBE Balance</div>
              <div className="text-2xl font-bold text-[var(--gold)]">12,450</div>
              <div className="text-xs text-[var(--cyan)] mt-1">+150 today</div>
            </div>
            <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <div className="text-xs text-[var(--text-muted)] mb-1">Connected Devices</div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">7</div>
              <div className="flex items-center gap-1 text-xs text-[var(--cyan)] mt-1">
                <span className="status-dot online" />
                All online
              </div>
            </div>
            <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <div className="text-xs text-[var(--text-muted)] mb-1">Network Status</div>
              <div className="text-lg font-semibold text-[var(--cyan)]">Connected</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Alpha Protocol v2.1</div>
            </div>
            <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <div className="text-xs text-[var(--text-muted)] mb-1">Pythia AI Credits</div>
              <div className="text-2xl font-bold text-[var(--pythia)]">8,470</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Queries remaining</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Activity Feed */}
            <div className="lg:col-span-2 p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-[var(--text-primary)]">Recent Activity</h3>
                <span className="text-xs text-[var(--text-muted)]">Last 24 hours</span>
              </div>
              <div className="space-y-4">
                {[
                  { type: "receive", desc: "Received 50 VIBE from staking rewards", time: "2 hours ago", color: "cyan" },
                  { type: "device", desc: "Omega Router firmware updated", time: "3 hours ago", color: "gold" },
                  { type: "home", desc: "Smart thermostat adjusted to 72°F", time: "5 hours ago", color: "gold" },
                  { type: "ai", desc: "Pythia health report generated", time: "8 hours ago", color: "pythia" },
                  { type: "send", desc: "Sent 100 VIBE to 0x7f...3a2", time: "12 hours ago", color: "gold" },
                  { type: "network", desc: "Mesh network expanded: 3 new nodes", time: "18 hours ago", color: "cyan" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-[var(--bg-surface)]">
                    <div className={`w-8 h-8 rounded-full bg-[var(--${item.color})]/10 flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full bg-[var(--${item.color})]`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[var(--text-primary)]">{item.desc}</div>
                      <div className="text-xs text-[var(--text-muted)]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Devices Panel */}
            <div className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-[var(--text-primary)]">Devices</h3>
                <span className="px-2 py-1 rounded text-xs bg-[var(--cyan)]/10 text-[var(--cyan)]">7 Online</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Omega Router Pro", type: "Network", status: "online" },
                  { name: "Living Room Hub", type: "Smart Home", status: "online" },
                  { name: "Health Band X1", type: "Wearable", status: "online" },
                  { name: "Security Camera", type: "Smart Home", status: "online" },
                  { name: "Omega Relay Node", type: "Network", status: "online" },
                ].map((device) => (
                  <div key={device.name} className="p-3 rounded-lg bg-[var(--bg-surface)]">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-sm text-[var(--text-primary)]">{device.name}</span>
                      <span className="status-dot online" />
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">{device.type}</div>
                  </div>
                ))}
                <button className="w-full py-2 text-xs text-[var(--cyan)] hover:text-[var(--text-primary)] transition-colors">
                  View all devices →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Network Performance */}
            <div className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <h3 className="font-semibold text-[var(--text-primary)] mb-4">Network Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--text-muted)]">Bandwidth Used</span>
                    <span className="text-[var(--text-primary)]">67%</span>
                  </div>
                  <div className="h-2 bg-[var(--bg-surface)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--cyan)] rounded-full" style={{ width: '67%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--text-muted)]">Uptime</span>
                    <span className="text-[var(--text-primary)]">99.9%</span>
                  </div>
                  <div className="h-2 bg-[var(--bg-surface)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--cyan)] rounded-full" style={{ width: '99.9%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--text-muted)]">Mesh Nodes</span>
                    <span className="text-[var(--text-primary)]">12 connected</span>
                  </div>
                  <div className="h-2 bg-[var(--bg-surface)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--gold)] rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* VIBE Earnings */}
            <div className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
              <h3 className="font-semibold text-[var(--text-primary)] mb-4">VIBE Earnings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--bg-surface)]">
                  <span className="text-sm text-[var(--text-muted)]">Today</span>
                  <span className="font-semibold text-[var(--gold)]">+150 VIBE</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--bg-surface)]">
                  <span className="text-sm text-[var(--text-muted)]">This Week</span>
                  <span className="font-semibold text-[var(--gold)]">+1,050 VIBE</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--bg-surface)]">
                  <span className="text-sm text-[var(--text-muted)]">This Month</span>
                  <span className="font-semibold text-[var(--gold)]">+4,200 VIBE</span>
                </div>
                <div className="pt-2 border-t border-[var(--border-default)]">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-muted)]">Staking APY</span>
                    <span className="text-[var(--cyan)]">12.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get Your Own <span className="text-gradient-gold">Dashboard</span>
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            Create a free Vibertas account to access PCG Dashboard and manage your digital sovereignty.
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
