import Link from "next/link";

const ecosystemProjects = [
  {
    id: "alpha",
    name: "Alpha Protocol",
    url: "https://alphaprotocol.network",
    color: "#1e40af",
  },
  {
    id: "omega",
    name: "Omega Wireless",
    url: "https://omegawireless.xyz",
    color: "#00aaff",
  },
  {
    id: "vibertas",
    name: "Vibertas",
    url: "#",
    color: "#ae904c",
    current: true,
  },
  {
    id: "pythia",
    name: "Pythia AI",
    url: "https://pythia-ai.xyz",
    color: "#8b5cf6",
  },
  {
    id: "vibe",
    name: "VIBE Token",
    url: "https://vibetoken.xyz",
    color: "#f59e0b",
  },
  {
    id: "spectrum",
    name: "Spectrum Galactic",
    url: "https://spectrumgalactic.xyz",
    color: "#00d4ff",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center font-bold text-[var(--bg-primary)] text-xs">
                Viber
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-gold">Vibertas</span>
                <span className="text-xs block text-[var(--text-muted)]">Sovereign OS</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              The privacy-first operating system for the Sovereign Stack.
              For personal devices, smart homes, wearables, and enterprise.
            </p>
            <div className="flex items-center gap-2">
              <span className="status-dot online" />
              <span className="text-xs text-[var(--status-success)]">All Systems Operational</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-[var(--cyan)] mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-sm text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors">
                  PCG Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-semibold text-[var(--gold)] mb-4">Developers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/developers" className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/developers#quickstart" className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
                  Quick Start
                </Link>
              </li>
              <li>
                <Link href="/developers#api-reference" className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/developers#sdks" className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
                  SDKs
                </Link>
              </li>
            </ul>
          </div>

          {/* Sovereign Stack Ecosystem */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Sovereign Stack</h4>
            <ul className="space-y-2">
              {ecosystemProjects.map((project) => (
                <li key={project.id}>
                  {project.current ? (
                    <span className="text-sm flex items-center gap-2" style={{ color: project.color }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                      {project.name} (You are here)
                    </span>
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                      {project.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ecosystem Visual */}
        <div className="mt-12 pt-8 border-t border-[var(--border-default)]">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {ecosystemProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target={project.current ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all
                  ${project.current
                    ? "bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-default)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  }
                `}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                {project.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border-default)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              &copy; 2026 Vibertas by <a href="https://powerclubglobal.com" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">PowerClub Global</a>. Part of the Sovereign Stack.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/about" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                About
              </Link>
              <a href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
