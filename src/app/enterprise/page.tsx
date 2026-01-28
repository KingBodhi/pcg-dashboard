import { Metadata } from "next";
import Link from "next/link";
import NavyGridBackground from "@/components/backgrounds/NavyGridBackground";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "Vibertas Enterprise - sovereign infrastructure for organizations. On-premise deployment, compliance tools, fleet management, and dedicated support.",
};

const enterpriseFeatures = [
  {
    title: "On-Premise Deployment",
    description: "Run Vibertas entirely on your infrastructure. No data ever leaves your network unless you choose to share it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Fleet Device Management",
    description: "Manage thousands of devices from a central console. Remote updates, diagnostics, and policy enforcement at scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Compliance & Audit",
    description: "Built-in tools for GDPR, HIPAA, SOC 2, and other compliance frameworks. Complete audit trails and data retention policies.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Enterprise SSO",
    description: "Seamless integration with your existing identity providers. SAML 2.0, OIDC, and LDAP support out of the box.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Role-Based Access Control",
    description: "Fine-grained permissions for users, teams, and departments. Define exactly who can access what across your organization.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "White-Label Option",
    description: "Deploy Vibertas under your own brand. Custom domains, logos, and styling to match your corporate identity.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const useCases = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant patient data management, secure telehealth, and private health records.",
    icon: "🏥",
  },
  {
    title: "Finance",
    description: "Secure trading infrastructure, compliant record-keeping, and private transaction processing.",
    icon: "🏦",
  },
  {
    title: "Government",
    description: "Air-gapped deployments, classified data handling, and sovereign infrastructure requirements.",
    icon: "🏛️",
  },
  {
    title: "Manufacturing",
    description: "IoT device management, supply chain monitoring, and industrial automation.",
    icon: "🏭",
  },
  {
    title: "Education",
    description: "Campus-wide device management, student privacy, and learning management systems.",
    icon: "🎓",
  },
  {
    title: "Media & Entertainment",
    description: "Content protection, secure collaboration, and distributed rendering infrastructure.",
    icon: "🎬",
  },
];

const testimonials = [
  {
    quote: "Vibertas gave us the control we needed over our patient data. The compliance tools alone saved us months of development.",
    author: "Dr. Sarah Chen",
    role: "CTO, MedSecure Health Systems",
  },
  {
    quote: "We deployed across 50,000 devices in three months. The fleet management capabilities are unmatched.",
    author: "Marcus Johnson",
    role: "VP of IT, GlobalTech Manufacturing",
  },
  {
    quote: "Finally, an operating system that understands enterprise security isn't optional. It's foundational.",
    author: "Elena Rodriguez",
    role: "CISO, SecureBank International",
  },
];

export default function Enterprise() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <NavyGridBackground className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 bg-[var(--gold)]/10 text-[var(--gold)]">
            Enterprise Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sovereign Infrastructure <span className="text-gradient-gold">at Scale</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Deploy Vibertas across your organization with complete control, compliance-ready tools,
            and enterprise-grade support. Your data, your infrastructure, your rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Sales
            </a>
            <a href="#features" className="btn-secondary">
              Explore Features
            </a>
          </div>
        </div>
      </NavyGridBackground>

      {/* Stats */}
      <section className="py-16 bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "50K+", label: "Enterprise Devices" },
              { value: "< 15min", label: "Response Time" },
              { value: "SOC 2", label: "Certified" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise Features</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to deploy and manage Vibertas at enterprise scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature) => (
              <div key={feature.title} className="card group">
                <div className="feature-icon gold mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Security & <span className="text-gradient-gold">Compliance</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-8">
                Built from the ground up with security and compliance requirements in mind.
                Vibertas meets the strictest enterprise security standards while remaining
                flexible enough for any deployment scenario.
              </p>

              <div className="space-y-4">
                {[
                  { title: "SOC 2 Type II", desc: "Certified security controls and procedures" },
                  { title: "GDPR Ready", desc: "Data sovereignty and privacy by design" },
                  { title: "HIPAA Compliant", desc: "Healthcare data protection standards" },
                  { title: "ISO 27001", desc: "Information security management" },
                  { title: "FedRAMP", desc: "Federal government security requirements" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-[var(--gold)] mt-1">&#10003;</span>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">{item.title}</div>
                      <div className="text-sm text-[var(--text-muted)]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--gold)] p-8">
              <h3 className="text-lg font-semibold text-[var(--gold)] mb-6">Security Highlights</h3>
              <div className="space-y-6">
                {[
                  { title: "Zero Trust Architecture", desc: "Every request authenticated and authorized" },
                  { title: "E2E Encryption", desc: "Data encrypted at rest and in transit" },
                  { title: "Air-Gap Support", desc: "Fully offline deployments available" },
                  { title: "Audit Logging", desc: "Complete activity trails for compliance" },
                  { title: "Secure Boot Chain", desc: "Hardware-verified system integrity" },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="font-medium text-[var(--text-primary)] mb-1">{item.title}</div>
                    <div className="text-sm text-[var(--text-muted)]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Vibertas powers organizations across industries with specialized solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)] hover:border-[var(--gold)] transition-all">
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{useCase.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-default)]">
                <div className="text-[var(--gold)] text-4xl mb-4">"</div>
                <p className="text-[var(--text-secondary)] mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--text-muted)]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Enterprise Pricing</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Custom pricing based on your deployment size, support requirements, and feature needs.
            Contact our sales team for a personalized quote.
          </p>

          <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--gold)] p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-[var(--gold)] mb-4">Included in All Plans</h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>&#10003; Dedicated account manager</li>
                  <li>&#10003; 24/7 priority support</li>
                  <li>&#10003; Custom SLA options</li>
                  <li>&#10003; Professional services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--gold)] mb-4">Deployment Options</h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>&#10003; On-premise installation</li>
                  <li>&#10003; Private cloud hosting</li>
                  <li>&#10003; Hybrid deployments</li>
                  <li>&#10003; Air-gapped networks</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--gold)] mb-4">Volume Pricing</h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>&#10003; Per-device licensing</li>
                  <li>&#10003; Unlimited user options</li>
                  <li>&#10003; Annual discounts</li>
                  <li>&#10003; Multi-year agreements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request a Quote
            </a>
            <Link href="/pricing" className="btn-secondary">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Go <span className="text-gradient-gold">Sovereign</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Talk to our enterprise team about your requirements. We'll help you design
            the perfect deployment for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Demo
            </a>
            <a
              href="mailto:enterprise@vibertas.io"
              className="btn-secondary"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
