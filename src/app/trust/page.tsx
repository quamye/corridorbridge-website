import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust Center — Security, Compliance & Privacy",
  description: "CorridorBridge Trust Center — the primary resource for procurement teams, security reviewers, auditors, enterprise buyers, government agencies, and banks evaluating CorridorBridge.",
  keywords: "CorridorBridge trust center, security compliance, enterprise procurement, vendor security, audit readiness",
};

const LEGAL_DISCLAIMER = "CorridorBridge aligns its security and compliance programme with recognized industry frameworks, including NIST Cybersecurity Framework principles, ISO 27001 controls and governance practices, FINTRAC obligations, AML requirements, KYC procedures, FATF recommendations, and PIPEDA privacy requirements. References to frameworks, controls, standards, or compliance programmes indicate operational alignment and governance objectives and should not be interpreted as certification, accreditation, regulatory approval, or independent attestation unless expressly stated.";

const TRUST_SECTIONS = [
  {
    id: "security",
    title: "Security",
    icon: "🛡️",
    color: "#C5A059",
    items: [
      { label: "Platform Architecture Security", desc: "Multi-layer security architecture protecting all platform components, APIs, and data flows." },
      { label: "Encryption Standards", desc: "Data encrypted in transit (TLS 1.3) and at rest (AES-256) across all platform components." },
      { label: "Access Management", desc: "Role-based access control, least-privilege principles, and multi-factor authentication." },
      { label: "Zero Trust Architecture", desc: "Continuous verification model — no implicit trust for any user, device, or network." },
      { label: "Vulnerability Management", desc: "Regular security assessments, penetration testing programme, and responsible disclosure policy." },
      { label: "Security Monitoring", desc: "24/7 security monitoring, anomaly detection, and automated threat response." },
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    icon: "📋",
    color: "#10b981",
    items: [
      { label: "FINTRAC Alignment", desc: "Financial Transactions and Reports Analysis Centre reporting and record-keeping obligations." },
      { label: "AML Programme", desc: "Anti-money laundering controls, transaction monitoring, and suspicious activity reporting." },
      { label: "KYC Framework", desc: "Know Your Customer verification, beneficial ownership identification, and ongoing monitoring." },
      { label: "FATF Recommendations", desc: "Financial Action Task Force 40 Recommendations framework applied to all operations." },
      { label: "Bank of Ghana Standards", desc: "Payment system regulatory standards for Ghana-Canada corridor operations." },
      { label: "PCMLTFA Obligations", desc: "Proceeds of Crime (Money Laundering) and Terrorist Financing Act compliance framework." },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    icon: "🔒",
    color: "#3b82f6",
    items: [
      { label: "PIPEDA Compliance", desc: "Personal Information Protection and Electronic Documents Act compliance for all Canadian operations." },
      { label: "Data Minimization", desc: "Collect only the minimum personal data required to deliver services." },
      { label: "Consent Management", desc: "Clear consent processes for data collection, processing, and retention." },
      { label: "Data Retention", desc: "Documented data retention schedules aligned to regulatory requirements." },
      { label: "Breach Notification", desc: "Defined breach notification procedures meeting regulatory timelines." },
      { label: "Cross-Border Data Transfers", desc: "Data transfer safeguards for Africa-Canada cross-border data flows." },
    ],
  },
  {
    id: "resilience",
    title: "Business Continuity",
    icon: "⚡",
    color: "#8b5cf6",
    items: [
      { label: "Business Continuity Plan", desc: "Documented BCP covering critical platform functions and recovery procedures." },
      { label: "Disaster Recovery", desc: "Recovery time objectives (RTO) and recovery point objectives (RPO) defined and tested." },
      { label: "Incident Response", desc: "Documented incident classification, response, containment, and recovery procedures." },
      { label: "High Availability", desc: "Platform architecture designed for high availability across critical components." },
      { label: "Backup and Recovery", desc: "Regular backups with tested restoration procedures." },
      { label: "Third-Party Dependencies", desc: "Critical third-party dependency mapping and contingency planning." },
    ],
  },
  {
    id: "vendor",
    title: "Vendor Security",
    icon: "🤝",
    color: "#f59e0b",
    items: [
      { label: "Third-Party Risk Management", desc: "Vendor security assessments before onboarding and periodic reviews." },
      { label: "Subprocessor Management", desc: "Documented subprocessor list with security and compliance requirements." },
      { label: "Vendor Contracts", desc: "Security and compliance obligations embedded in all vendor agreements." },
      { label: "Supply Chain Security", desc: "Software supply chain security controls and dependency management." },
      { label: "Partner Compliance", desc: "Payment partner compliance verification and ongoing monitoring." },
      { label: "Exit Management", desc: "Vendor exit procedures ensuring data return, deletion, and continuity." },
    ],
  },
  {
    id: "audit",
    title: "Audit Readiness",
    icon: "📁",
    color: "#ef4444",
    items: [
      { label: "Audit Trail", desc: "Tamper-evident audit logs for all platform activities, transactions, and access events." },
      { label: "Evidence Package", desc: "Pre-prepared evidence packages for FINTRAC, regulatory, and internal audit requirements." },
      { label: "Policy Library", desc: "Documented information security policies, procedures, and standards." },
      { label: "Control Testing", desc: "Regular testing and evidence collection for key security and compliance controls." },
      { label: "Regulatory Examinations", desc: "Process and documentation supporting regulatory examination requests." },
      { label: "Management Reporting", desc: "Compliance and security management reporting for board and executive oversight." },
    ],
  },
];

const PACKAGES = [
  { title: "Security Overview Package", desc: "Platform security architecture, controls summary, and security framework alignment overview for enterprise security reviews.", icon: "🛡️", intent: "security_package" },
  { title: "Compliance Overview Package", desc: "FINTRAC, AML, KYC, and regulatory compliance programme summary for compliance officer review.", icon: "📋", intent: "compliance_package" },
  { title: "Privacy Statement", desc: "PIPEDA-aligned privacy statement covering data collection, processing, retention, and your rights.", icon: "🔒", intent: "privacy_package" },
  { title: "Incident Response Summary", desc: "Summary of incident response programme, classification framework, and notification procedures.", icon: "⚡", intent: "incident_package" },
  { title: "Vendor Security Overview", desc: "Third-party risk management programme overview for vendor risk assessment teams.", icon: "🤝", intent: "vendor_package" },
  { title: "Due Diligence Package", desc: "Comprehensive package combining security, compliance, privacy, and business continuity summaries for enterprise due diligence.", icon: "📁", intent: "due_diligence_package" },
];

export default function TrustCenterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Trust Center</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            CorridorBridge<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Trust Center
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
            The primary resource for procurement teams, security reviewers, auditors, enterprise buyers, government agencies, banks, and investors evaluating CorridorBridge.
          </p>
          {/* Audience badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Procurement Teams", "Security Reviewers", "Auditors", "Banks", "Government Agencies", "NGOs", "Investors", "Enterprise Buyers"].map(a => (
              <span key={a} className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/50 font-medium">{a}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?intent=due_diligence_package" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Request Due Diligence Package
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3">
            {TRUST_SECTIONS.map(({ id, title, icon }) => (
              <a key={id} href={`#${id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-blue-950 transition-all whitespace-nowrap flex-shrink-0">
                <span>{icon}</span>{title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trust sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {TRUST_SECTIONS.map(({ id, title, icon, color, items }) => (
            <div key={id} id={id} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{background: `${color}15`}}>{icon}</div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{color}}>Trust Center</div>
                  <h2 className="font-display text-2xl font-bold text-blue-950">{title}</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(({ label, desc }) => (
                  <div key={label} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-amber-200 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <h3 className="font-bold text-blue-950 text-sm">{label}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Resources</div>
            <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">Request Security & Compliance Packages</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Available to qualified enterprise buyers, procurement teams, auditors, and due diligence reviewers upon request.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PACKAGES.map(({ title, desc, icon, intent }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all group">
                <div className="text-2xl mb-4">{icon}</div>
                <h3 className="font-bold text-blue-950 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <Link href={`/contact?intent=${intent}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors group-hover:gap-3">
                  Request this package
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <div className="font-bold text-blue-950 text-sm mb-2">Framework Alignment Disclaimer</div>
                <p className="text-xs text-gray-500 leading-relaxed">{LEGAL_DISCLAIMER}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to complete your due diligence?</h2>
          <p className="text-white/60 mb-8 text-lg">Our team will provide the documentation and answers you need to complete your security and compliance review.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Request Due Diligence Package
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
