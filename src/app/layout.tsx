import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Space Grotesk - Bold geometric headlines (similar to Clash Display)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Inter - Clean modern body text (similar to Satoshi)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vibertas - Own Your Digital Life",
    template: "%s | Vibertas",
  },
  description: "Vibertas is the operating system for the Sovereign Stack. Privacy-first OS for personal devices, smart homes, wearables, and enterprise with mesh networking, AI, and token economics.",
  keywords: ["vibertas", "sovereign stack", "privacy os", "mesh network", "pcg dashboard", "alpha protocol", "omega", "vibe token", "pythia ai", "powerclub global"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
