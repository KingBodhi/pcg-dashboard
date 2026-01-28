export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceSubtext?: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "developer",
    name: "Developer",
    price: "Free",
    priceSubtext: "forever",
    description: "Everything you need to start building on Vibertas",
    features: [
      "Full SDK access",
      "Testnet tokens",
      "Development documentation",
      "Community Discord support",
      "Local mesh simulation",
    ],
    cta: "Start Building",
    ctaLink: "/developers#quickstart",
  },
  {
    id: "production",
    name: "Production",
    price: "VIBE",
    priceSubtext: "usage-based",
    description: "Deploy your app to the live Sovereign Stack mesh",
    features: [
      "Everything in Developer",
      "Mainnet deployment",
      "Production API keys",
      "Usage-based VIBE pricing",
      "Priority support",
      "Analytics dashboard",
    ],
    cta: "Deploy Now",
    ctaLink: "https://console.vibertas.io",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For organizations building at scale",
    features: [
      "Everything in Production",
      "Dedicated infrastructure",
      "Custom SLAs",
      "White-label options",
      "Direct engineering support",
      "Custom integrations",
      "Volume discounts",
    ],
    cta: "Contact Sales",
    ctaLink: "/enterprise",
  },
];

export const integrations = [
  { name: "Ethereum", logo: "ethereum" },
  { name: "Polygon", logo: "polygon" },
  { name: "IPFS", logo: "ipfs" },
  { name: "Filecoin", logo: "filecoin" },
  { name: "Arweave", logo: "arweave" },
  { name: "Solana", logo: "solana" },
];

export const securityFeatures = [
  { id: "e2e", label: "E2E Encryption", icon: "lock" },
  { id: "2fa", label: "2FA", icon: "key" },
  { id: "zk", label: "Zero-Knowledge", icon: "eye-off" },
  { id: "custody", label: "Self-Custody", icon: "shield" },
];
