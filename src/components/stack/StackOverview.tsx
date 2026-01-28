const stackLayers = [
  {
    layer: "L0",
    name: "Alpha Protocol",
    description: "Mesh networking foundation",
    color: "#1e40af",
    href: "https://alphaprotocol.network",
  },
  {
    layer: "L1",
    name: "Omega Hardware",
    description: "Privacy devices & routers",
    color: "#00aaff",
    href: "https://omegawireless.xyz",
  },
  {
    layer: "L2",
    name: "Vibertas",
    description: "Operating system layer",
    color: "#ae904c",
    current: true,
  },
  {
    layer: "L3",
    name: "Pythia AI",
    description: "Distributed intelligence",
    color: "#8b5cf6",
    href: "https://pythia-ai.xyz",
  },
  {
    layer: "L4",
    name: "VIBE Token",
    description: "Economic layer",
    color: "#f59e0b",
    href: "https://vibetoken.xyz",
  },
  {
    layer: "L5",
    name: "Spectrum Galactic",
    description: "Satellite connectivity",
    color: "#00d4ff",
    href: "https://spectrumgalactic.xyz",
  },
];

export default function StackOverview() {
  return (
    <section className="py-24 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by the <span className="text-gradient-gold">Sovereign Stack</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Six integrated layers working together. Vibertas is Layer 2—the interface
            that brings the entire stack to your devices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stackLayers.map((item) => (
              item.current ? (
                <div
                  key={item.layer}
                  className="p-4 rounded-xl border-2 transition-all"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: item.color,
                    boxShadow: `0 0 20px ${item.color}30`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-1 rounded"
                      style={{ backgroundColor: item.color, color: "#050810" }}
                    >
                      {item.layer}
                    </span>
                    <span className="text-xs text-[var(--gold)]">You are here</span>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)]">{item.name}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
                </div>
              ) : (
                <a
                  key={item.layer}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-default)] hover:border-[var(--gold)] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-1 rounded opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: item.color, color: "#050810" }}
                    >
                      {item.layer}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
                </a>
              )
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Click any layer to learn more about that component of the Sovereign Stack.
          </p>
        </div>
      </div>
    </section>
  );
}
