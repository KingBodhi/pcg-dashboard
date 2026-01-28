"use client";

import NavyGridBackground from "@/components/backgrounds/NavyGridBackground";

export default function HeroSection() {
  return (
    <NavyGridBackground className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--cyan)]/10 border border-[var(--cyan)]/30 rounded-full text-[var(--cyan)] text-sm mb-8 animate-fade-in-up">
          <span className="status-dot online" />
          Now Available for Personal &amp; Enterprise
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient-gold">Vibertas</span>
          <br />
          <span className="text-[var(--text-primary)]">Own Your Digital Life</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          A complete operating system built on the Sovereign Stack mesh.
          For your home, your devices, your enterprise—with privacy at the core.
        </p>

        {/* Device types */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          {[
            { label: "Personal Devices", icon: "💻" },
            { label: "Smart Home", icon: "🏠" },
            { label: "Wearables", icon: "⌚" },
            { label: "Enterprise", icon: "🏢" },
            { label: "IoT Networks", icon: "📡" },
          ].map((item) => (
            <span
              key={item.label}
              className="px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-full text-sm text-[var(--text-secondary)]"
            >
              {item.icon} {item.label}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="/features"
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Features
          </a>
          <a
            href="/pricing"
            className="btn-secondary text-lg px-8 py-4"
          >
            View Pricing
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg
            className="w-6 h-6 text-[var(--gold)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </NavyGridBackground>
  );
}
