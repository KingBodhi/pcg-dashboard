import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Preview",
  description: "Preview the PowerClub Global dashboard interface.",
};

export default function Dashboard() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-12 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="badge info mb-4">Preview Mode</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-emerald">Dashboard Preview</span>
          </h1>
          <p className="text-[var(--text-secondary)]">
            This is a preview of what your dashboard will look like.
            Sign up to access your personalized dashboard.
          </p>
        </div>
      </section>

      {/* Mock Dashboard */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="widget">
              <div className="widget-title">VIBE Balance</div>
              <div className="widget-value text-[var(--gold)]">12,450</div>
              <div className="text-xs text-[var(--status-success)] mt-1">+150 today</div>
            </div>
            <div className="widget">
              <div className="widget-title">Connected Devices</div>
              <div className="widget-value">3</div>
              <div className="flex items-center gap-1 text-xs text-[var(--status-success)] mt-1">
                <span className="status-dot online" />
                All online
              </div>
            </div>
            <div className="widget">
              <div className="widget-title">Network Status</div>
              <div className="text-lg font-semibold text-[var(--status-success)]">Connected</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Alpha Protocol v2.1</div>
            </div>
            <div className="widget">
              <div className="widget-title">AI Credits</div>
              <div className="widget-value">847</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Pythia compute</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Activity Feed */}
            <div className="lg:col-span-2 card-static">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-[var(--text-primary)]">Recent Activity</h3>
                <span className="text-xs text-[var(--text-muted)]">Last 24 hours</span>
              </div>
              <div className="space-y-4">
                {[
                  { type: "receive", desc: "Received 50 VIBE from staking", time: "2 hours ago", icon: "&#8593;", color: "status-success" },
                  { type: "device", desc: "Omega Router connected", time: "5 hours ago", icon: "&#9679;", color: "pcg-emerald" },
                  { type: "ai", desc: "Pythia query completed", time: "8 hours ago", icon: "&#9889;", color: "pcg-purple" },
                  { type: "send", desc: "Sent 100 VIBE to 0x7f...3a2", time: "12 hours ago", icon: "&#8595;", color: "pcg-orange" },
                  { type: "network", desc: "Network latency improved", time: "18 hours ago", icon: "&#10003;", color: "status-success" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-[var(--pcg-surface)]">
                    <div className={`w-8 h-8 rounded-full bg-[var(--${item.color})]/10 flex items-center justify-center text-[var(--${item.color})]`}>
                      <span dangerouslySetInnerHTML={{ __html: item.icon }} />
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
            <div className="card-static">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-[var(--text-primary)]">Devices</h3>
                <span className="badge success">3 Online</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Omega Router Pro", status: "online", ip: "192.168.1.1" },
                  { name: "Omega Relay", status: "online", ip: "192.168.1.2" },
                  { name: "Omega Node", status: "online", ip: "192.168.1.3" },
                ].map((device) => (
                  <div key={device.name} className="p-3 rounded-lg bg-[var(--pcg-surface)]">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-sm text-[var(--text-primary)]">{device.name}</span>
                      <div className="flex items-center gap-1">
                        <span className="status-dot online" />
                      </div>
                    </div>
                    <div className="text-xs text-[var(--text-muted)] font-mono">{device.ip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Network Stats */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="card-static">
              <h3 className="font-semibold text-[var(--text-primary)] mb-4">Network Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--text-muted)]">Bandwidth Used</span>
                    <span className="text-[var(--text-primary)]">67%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '67%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--text-muted)]">Uptime</span>
                    <span className="text-[var(--text-primary)]">99.9%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '99.9%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--text-muted)]">Latency</span>
                    <span className="text-[var(--text-primary)]">18ms</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '18%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-static">
              <h3 className="font-semibold text-[var(--text-primary)] mb-4">VIBE Earnings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--pcg-surface)]">
                  <span className="text-sm text-[var(--text-muted)]">Today</span>
                  <span className="font-semibold text-[var(--gold)]">+150 VIBE</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--pcg-surface)]">
                  <span className="text-sm text-[var(--text-muted)]">This Week</span>
                  <span className="font-semibold text-[var(--gold)]">+1,050 VIBE</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--pcg-surface)]">
                  <span className="text-sm text-[var(--text-muted)]">This Month</span>
                  <span className="font-semibold text-[var(--gold)]">+4,200 VIBE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--pcg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get Your <span className="text-gradient-emerald">Own Dashboard</span>
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            Create a free account to access your personalized Sovereign Stack dashboard.
          </p>
          <a
            href="https://powerclubglobal.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Create Free Account
          </a>
        </div>
      </section>
    </div>
  );
}
