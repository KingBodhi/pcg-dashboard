"use client";

import { useState } from "react";

export default function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "npx create-vibertas-app@latest";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Building in <span className="text-gradient-cyan">Seconds</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Scaffold a new Vibertas app with our CLI
          </p>
        </div>

        <div className="code-block flex items-center justify-between">
          <div>
            <span className="prompt">$</span>{" "}
            <span className="command">{command}</span>
          </div>
          <button
            onClick={handleCopy}
            className="ml-4 p-2 rounded-md hover:bg-[var(--bg-card)] transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <svg className="w-5 h-5 text-[var(--status-success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>

        <div className="mt-6 text-center">
          <span className="text-[var(--text-muted)] text-sm">OR</span>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/developers#quickstart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cyan)] hover:text-[var(--cyan-light)] transition-colors"
          >
            Read the Quick Start Guide →
          </a>
        </div>
      </div>
    </section>
  );
}
