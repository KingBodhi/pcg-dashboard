"use client";

interface NavyGridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  showGoldGlow?: boolean;
}

export default function NavyGridBackground({
  children,
  className = "",
  showGoldGlow = true,
}: NavyGridBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base navy background with grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "var(--bg-primary)",
          backgroundImage: `
            linear-gradient(rgba(174, 144, 76, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(174, 144, 76, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold radial glow at top */}
      {showGoldGlow && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(174, 144, 76, 0.08) 0%, transparent 50%)",
          }}
        />
      )}

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              backgroundColor: "var(--gold)",
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
