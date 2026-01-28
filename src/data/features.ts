export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: "network" | "shield" | "cpu" | "brain" | "wallet" | "satellite" | "code" | "layers";
  color: "cyan" | "gold" | "pythia" | "alpha" | "omega" | "vibe" | "spectrum";
}

// Platform capabilities that developers can leverage
export const features: Feature[] = [
  {
    id: "mesh",
    title: "Mesh Networking",
    description: "Build on Alpha Protocol's P2P infrastructure. Your apps inherit decentralized, censorship-resistant connectivity out of the box.",
    icon: "network",
    color: "alpha",
  },
  {
    id: "privacy",
    title: "Privacy Layer",
    description: "End-to-end encryption, zero-knowledge proofs, and self-custody built into the OS. Privacy by default, not an afterthought.",
    icon: "shield",
    color: "gold",
  },
  {
    id: "hardware",
    title: "Hardware Integration",
    description: "Direct access to Omega devices. Build apps that leverage privacy routers, mesh nodes, and secure hardware enclaves.",
    icon: "cpu",
    color: "omega",
  },
  {
    id: "ai",
    title: "Distributed AI",
    description: "Tap into Pythia's distributed compute network. Add AI capabilities to your apps without centralized dependencies.",
    icon: "brain",
    color: "pythia",
  },
  {
    id: "tokens",
    title: "Token Economics",
    description: "Native VIBE integration for payments, rewards, and governance. Monetize your apps with built-in token infrastructure.",
    icon: "wallet",
    color: "vibe",
  },
  {
    id: "satellite",
    title: "Global Reach",
    description: "Spectrum Galactic connectivity ensures your apps work anywhere on Earth. Satellite fallback when terrestrial fails.",
    icon: "satellite",
    color: "spectrum",
  },
  {
    id: "sdk",
    title: "Developer SDK",
    description: "Comprehensive SDK with TypeScript support. Build in days what would take months. We handle the hard infrastructure.",
    icon: "code",
    color: "cyan",
  },
  {
    id: "interop",
    title: "Full Stack Access",
    description: "One OS, six integrated layers. Your apps can leverage any combination of mesh, hardware, AI, tokens, and satellites.",
    icon: "layers",
    color: "gold",
  },
];

export const stats = [
  { value: "6", label: "Stack Layers" },
  { value: "1", label: "Flagship App", highlight: true },
  { value: "∞", label: "Possibilities" },
  { value: "FREE", label: "For Developers", highlight: true },
];
