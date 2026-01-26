import Link from "next/link";

const ecosystemProjects = [
  {
    id: "alpha",
    name: "Alpha Protocol",
    description: "Protocol Foundation",
    url: "https://alphaprotocol.network",
    layer: "Layer 0",
    color: "#1e40af",
  },
  {
    id: "omega",
    name: "Omega Wireless",
    description: "Hardware Foundation",
    url: "https://omegawireless.xyz",
    layer: "Layer 1",
    color: "#00aaff",
  },
  {
    id: "pcg",
    name: "PCG Dashboard",
    description: "Sovereign OS",
    url: "#",
    layer: "OS Layer",
    color: "#10b981",
    current: true,
  },
  {
    id: "pythia",
    name: "Pythia AI",
    description: "Emergent Intelligence",
    url: "https://pythia-ai-web.vercel.app",
    layer: "Intelligence",
    color: "#8b5cf6",
  },
  {
    id: "vibe",
    name: "VIBE Token",
    description: "Ecosystem Rewards",
    url: "https://vibe-token.vercel.app",
    layer: "Economics",
    color: "#f59e0b",
  },
  {
    id: "spectrum",
    name: "Spectrum Galactic",
    description: "Global Connectivity",
    url: "https://spectrum-galactic.vercel.app",
    layer: "Connectivity",
    color: "#00d4ff",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--pcg-dark)] border-t border-[var(--pcg-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--pcg-emerald)] to-[var(--pcg-emerald-dark)] flex items-center justify-center font-bold text-white">
                PCG
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-emerald">PowerClub</span>
                <span className="text-xs block text-[var(--text-muted)]">Sovereign OS</span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Your interface to the Sovereign Stack.
              Manage your digital sovereignty from one dashboard.
            </p>
            <div className="flex items-center gap-2">
              <span className="status-dot online" />
              <span className="text-xs text-[var(--status-success)]">All Systems Operational</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-[var(--pcg-emerald)] mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-[var(--text-muted)] hover:text-[var(--pcg-emerald)] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-[var(--text-muted)] hover:text-[var(--pcg-emerald)] transition-colors">
                  Dashboard Preview
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-[var(--text-muted)] hover:text-[var(--pcg-emerald)] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="https://powerclubglobal.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--pcg-emerald)] transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Sovereign Stack Ecosystem */}
          <div>
            <h4 className="font-semibold text-[var(--sovereign-gold)] mb-4">Sovereign Stack</h4>
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
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--sovereign-gold)] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                      {project.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[var(--text-muted)] hover:text-[var(--pcg-emerald)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="https://okb-ventures.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--sovereign-gold)] transition-colors">
                  OKB Ventures
                </a>
              </li>
              <li>
                <a href="https://okb-ventures.vercel.app/contact" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--pcg-emerald)] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://x.com/powerclubglobal" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--pcg-emerald)] transition-colors">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ecosystem Visual */}
        <div className="mt-12 pt-8 border-t border-[var(--pcg-border)]">
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
                    ? "bg-[var(--pcg-emerald)]/10 text-[var(--pcg-emerald)] border border-[var(--pcg-emerald)]/30"
                    : "bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-default)] hover:border-[var(--sovereign-gold)] hover:text-[var(--sovereign-gold)]"
                  }
                `}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                {project.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--pcg-border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              &copy; 2026 PowerClub Global. Part of the <span className="text-[var(--sovereign-gold)]">Sovereign Stack</span>.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Backed by <a href="https://okb-ventures.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--sovereign-gold)] hover:underline">OKB Ventures</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
