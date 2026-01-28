import { Metadata } from "next";
import Link from "next/link";
import NavyGridBackground from "@/components/backgrounds/NavyGridBackground";

export const metadata: Metadata = {
  title: "Developers",
  description: "Build on Vibertas - SDKs, APIs, and documentation for developers building on the Sovereign Stack.",
};

const sdks = [
  {
    name: "JavaScript/TypeScript",
    description: "Full-featured SDK for web and Node.js applications",
    install: "npm install @vibertas/sdk",
    status: "stable",
    docs: "#sdk-js",
  },
  {
    name: "Python",
    description: "Python SDK for backend services and data processing",
    install: "pip install vibertas",
    status: "stable",
    docs: "#sdk-python",
  },
  {
    name: "Rust",
    description: "High-performance SDK for systems programming",
    install: "cargo add vibertas",
    status: "beta",
    docs: "#sdk-rust",
  },
  {
    name: "Go",
    description: "Go SDK for microservices and infrastructure",
    install: "go get github.com/vibertas/sdk-go",
    status: "beta",
    docs: "#sdk-go",
  },
];

const apis = [
  {
    name: "Device API",
    description: "Register, manage, and monitor devices on Vibertas",
    endpoints: ["GET /devices", "POST /devices", "GET /devices/:id/status"],
  },
  {
    name: "Mesh API",
    description: "Interact with the Alpha Protocol mesh network",
    endpoints: ["GET /mesh/nodes", "POST /mesh/connect", "GET /mesh/status"],
  },
  {
    name: "Wallet API",
    description: "VIBE token operations and transaction management",
    endpoints: ["GET /wallet/balance", "POST /wallet/send", "GET /wallet/history"],
  },
  {
    name: "Pythia API",
    description: "Access distributed AI compute and intelligence",
    endpoints: ["POST /ai/query", "GET /ai/credits", "POST /ai/tasks"],
  },
  {
    name: "Automation API",
    description: "Create and manage automation rules and triggers",
    endpoints: ["GET /automations", "POST /automations", "PUT /automations/:id"],
  },
  {
    name: "Storage API",
    description: "Distributed storage operations across the mesh",
    endpoints: ["POST /storage/upload", "GET /storage/:id", "DELETE /storage/:id"],
  },
];

const resources = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with Vibertas in 5 minutes",
    icon: "🚀",
    href: "#quickstart",
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: "📖",
    href: "#api-reference",
  },
  {
    title: "SDK Documentation",
    description: "Language-specific guides and tutorials",
    icon: "📦",
    href: "#sdks",
  },
  {
    title: "Example Projects",
    description: "Sample applications and starter templates",
    icon: "💡",
    href: "#examples",
  },
  {
    title: "Architecture Guide",
    description: "Deep dive into Sovereign Stack architecture",
    icon: "🏗️",
    href: "#architecture",
  },
  {
    title: "Community Discord",
    description: "Get help from the developer community",
    icon: "💬",
    href: "https://discord.gg/sovereignstack",
  },
];

export default function Developers() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <NavyGridBackground className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 bg-[var(--cyan)]/10 text-[var(--cyan)]">
            Developer Platform
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build on the <span className="text-gradient-gold">Sovereign Stack</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Create privacy-first applications with mesh networking, distributed AI,
            and token economics built in. Everything you need to build sovereign software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quickstart" className="btn-primary">
              Get Started
            </a>
            <a href="#api-reference" className="btn-secondary">
              API Reference
            </a>
          </div>
        </div>
      </NavyGridBackground>

      {/* Quick Start */}
      <section id="quickstart" className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Start building on Vibertas in minutes with our SDK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">1. Install the SDK</h3>
              <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)] p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-[var(--text-muted)] mb-2">
                  <span className="text-[var(--cyan)]">$</span>
                  <span>npm install @vibertas/sdk</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 mt-8">2. Initialize your app</h3>
              <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--text-secondary)]">
{`import { Vibertas } from '@vibertas/sdk';

const sos = new Vibertas({
  apiKey: process.env.VIBERTAS_API_KEY,
  network: 'mainnet' // or 'testnet'
});

// Connect to the mesh
await sos.mesh.connect();

// Check wallet balance
const balance = await sos.wallet.getBalance();
console.log(\`VIBE Balance: \${balance}\`);`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">3. Build something amazing</h3>
              <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--text-secondary)]">
{`// Register a device
const device = await sos.devices.register({
  name: 'My IoT Sensor',
  type: 'sensor',
  capabilities: ['temperature', 'humidity']
});

// Create an automation
await sos.automations.create({
  trigger: {
    type: 'device_event',
    deviceId: device.id,
    condition: 'temperature > 80'
  },
  action: {
    type: 'notification',
    message: 'Temperature alert!'
  }
});

// Query Pythia AI
const insight = await sos.ai.query({
  prompt: 'Analyze temperature patterns',
  context: { deviceId: device.id }
});`}
                </pre>
              </div>

              <div className="mt-6 p-4 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">💡</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)] mb-1">Free Developer Tier</div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Get started with 10,000 free API calls per month and 5,000 VIBE tokens for testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section id="sdks" className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Official SDKs</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Native SDKs for your preferred language with full TypeScript support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)] hover:border-[var(--cyan)] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-[var(--text-primary)]">{sdk.name}</h3>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    sdk.status === 'stable'
                      ? 'bg-[var(--cyan)]/10 text-[var(--cyan)]'
                      : 'bg-[var(--gold)]/10 text-[var(--gold)]'
                  }`}>
                    {sdk.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-4">{sdk.description}</p>
                <div className="bg-[var(--bg-surface)] rounded-lg p-2 font-mono text-xs text-[var(--text-secondary)]">
                  {sdk.install}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api-reference" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">API Reference</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              RESTful APIs for every aspect of the Sovereign Stack. Full OpenAPI specs available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apis.map((api) => (
              <div key={api.name} className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
                <h3 className="font-semibold text-[var(--cyan)] mb-2">{api.name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{api.description}</p>
                <div className="space-y-2">
                  {api.endpoints.map((endpoint) => (
                    <div key={endpoint} className="font-mono text-xs text-[var(--text-secondary)] bg-[var(--bg-surface)] rounded px-2 py-1">
                      {endpoint}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[var(--cyan)] hover:underline"
            >
              View full API documentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Stack Architecture</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understand how the six layers of the Sovereign Stack work together.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { layer: "L5", name: "Spectrum Galactic", desc: "Satellite connectivity layer for global, censorship-resistant coverage", color: "#00d4ff", api: "Satellite API" },
              { layer: "L4", name: "VIBE Token", desc: "Economic layer - payments, staking, and incentive mechanisms", color: "#f59e0b", api: "Wallet API" },
              { layer: "L3", name: "Pythia AI", desc: "Distributed AI compute - queries, tasks, and model inference", color: "#8b5cf6", api: "AI API" },
              { layer: "L2", name: "Vibertas", desc: "Operating system layer - devices, storage, and automations", color: "#ae904c", api: "Core APIs" },
              { layer: "L1", name: "Omega Hardware", desc: "Hardware abstraction - routers, sensors, and edge devices", color: "#00aaff", api: "Device API" },
              { layer: "L0", name: "Alpha Protocol", desc: "Mesh networking foundation - P2P connections and routing", color: "#1e40af", api: "Mesh API" },
            ].map((item) => (
              <div
                key={item.layer}
                className="flex items-center gap-6 p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-default)] hover:border-[var(--gold)] transition-colors group"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <span className="text-lg font-bold" style={{ color: item.color }}>{item.layer}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-[var(--text-primary)]">{item.name}</h4>
                    <span className="px-2 py-0.5 rounded text-xs bg-[var(--bg-surface)] text-[var(--text-muted)]">
                      {item.api}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mt-1">{item.desc}</p>
                </div>
                <svg
                  className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--gold)] transition-colors flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="examples" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Developer Resources</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to build, test, and deploy on Vibertas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)] hover:border-[var(--cyan)] transition-colors group"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Program */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-[var(--gold)]/10 text-[var(--gold)]">
                Developer Program
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Join the <span className="text-gradient-gold">Builder Community</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Get early access to new features, direct support from the core team,
                and opportunities to earn VIBE tokens for your contributions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Priority access to new APIs and features",
                  "Direct Slack channel with core developers",
                  "VIBE token grants for approved projects",
                  "Featured placement in the app directory",
                  "Technical co-marketing opportunities",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--gold)]">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-primary">
                Apply to Developer Program
              </a>
            </div>

            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--gold)] p-8">
              <h3 className="text-lg font-semibold text-[var(--gold)] mb-6">Developer Tiers</h3>
              <div className="space-y-6">
                {[
                  { name: "Free", price: "$0", features: ["10K API calls/month", "5K test VIBE", "Community support"] },
                  { name: "Pro", price: "$49/mo", features: ["100K API calls/month", "50K test VIBE", "Priority support", "Staging environment"] },
                  { name: "Enterprise", price: "Custom", features: ["Unlimited API calls", "Dedicated support", "Custom SLA", "On-premise option"] },
                ].map((tier) => (
                  <div key={tier.name} className="pb-6 border-b border-[var(--border-default)] last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[var(--text-primary)]">{tier.name}</span>
                      <span className="text-[var(--gold)]">{tier.price}</span>
                    </div>
                    <ul className="space-y-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="text-xs text-[var(--text-muted)]">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">Start Building</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Create your developer account and get your API keys in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://console.vibertas.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get API Keys
            </a>
            <a href="#quickstart" className="btn-secondary">
              Read the Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
