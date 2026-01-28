"use client";

const integrations = [
  { name: "Ethereum", color: "#627eea" },
  { name: "Polygon", color: "#8247e5" },
  { name: "IPFS", color: "#65c2cb" },
  { name: "Filecoin", color: "#0090ff" },
  { name: "Arweave", color: "#222326" },
  { name: "Solana", color: "#9945ff" },
  { name: "Cosmos", color: "#2e3148" },
  { name: "Polkadot", color: "#e6007a" },
];

export default function IntegrationLogos() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
            Integrated with the best
          </h3>
        </div>

        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <div className="integration-scroll">
              {/* Double the logos for seamless loop */}
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="integration-logo flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-default)] rounded-lg"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: integration.color }}
                  />
                  <span className="text-sm font-medium text-[var(--text-secondary)] whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
