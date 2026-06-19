"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const FRAMEWORKS = [
  {
    name: "ISO 27001 Alignment",
    category: "Information Security",
    desc: "Information security management system aligned to international ISO/IEC 27001 standards covering risk assessment, controls, and continuous improvement.",
    color: "#C5A059",
  },
  {
    name: "NIST Cybersecurity Framework",
    category: "Cybersecurity",
    desc: "Five-function framework — Identify, Protect, Detect, Respond, Recover — applied to all cross-border payment operations and technology systems.",
    color: "#3b82f6",
  },
  {
    name: "AML Controls",
    category: "Anti-Money Laundering",
    desc: "Anti-money laundering controls embedded in every payment workflow including transaction monitoring, suspicious activity detection, and reporting procedures.",
    color: "#10b981",
  },
  {
    name: "KYC Processes",
    category: "Know Your Customer",
    desc: "Customer identity verification, beneficial ownership identification, and ongoing monitoring procedures aligned to Canadian and African regulatory requirements.",
    color: "#8b5cf6",
  },
  {
    name: "FINTRAC Compliance",
    category: "Canadian Regulation",
    desc: "Financial Transactions and Reports Analysis Centre of Canada alignment covering reporting obligations, record-keeping, and compliance programme requirements.",
    color: "#ef4444",
  },
  {
    name: "PIPEDA Data Protection",
    category: "Privacy",
    desc: "Personal Information Protection and Electronic Documents Act compliance covering consent, data minimization, access controls, and breach notification.",
    color: "#f59e0b",
  },
  {
    name: "Bank of Ghana Standards",
    category: "African Regulation",
    desc: "Payment system and financial sector regulatory standards from the Bank of Ghana for cross-border operations involving Ghanaian corridors.",
    color: "#06b6d4",
  },
  {
    name: "FATF Recommendations",
    category: "International Standards",
    desc: "Financial Action Task Force 40 Recommendations framework applied to AML/CFT controls, risk-based approach, and international cooperation.",
    color: "#ec4899",
  },
  {
    name: "Risk Management",
    category: "Enterprise Risk",
    desc: "Enterprise risk identification, assessment, treatment, and monitoring covering payment risk, operational risk, technology risk, and regulatory risk.",
    color: "#C5A059",
  },
  {
    name: "Audit Readiness",
    category: "Governance",
    desc: "Documentation, evidence packages, and audit trails maintained to support regulatory audits, internal reviews, and third-party assessments.",
    color: "#10b981",
  },
  {
    name: "Incident Response",
    category: "Operational Resilience",
    desc: "Documented incident detection, classification, response, recovery, and post-incident review processes for payment and technology incidents.",
    color: "#8b5cf6",
  },
  {
    name: "Zero Trust Architecture",
    category: "Access Control",
    desc: "Least-privilege access, continuous verification, and micro-segmentation model applied to all platform access and cross-border data flows.",
    color: "#3b82f6",
  },
];

const PILLARS = [
  {
    title: "Secure by Design",
    desc: "Security is built into every feature, workflow, and integration — not added as an afterthought. Every payment workflow, compliance document, and data exchange is protected from inception.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "#C5A059",
  },
  {
    title: "Compliance Embedded",
    desc: "FINTRAC, AML, KYC, and PIPEDA compliance is embedded in every workflow. Every transaction generates the evidence and documentation required for regulatory audit.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    color: "#10b981",
  },
  {
    title: "Data Protection",
    desc: "All data is encrypted in transit and at rest. PIPEDA-aligned data handling, consent management, and breach notification procedures protect every client and transaction.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    color: "#3b82f6",
  },
  {
    title: "Operational Resilience",
    desc: "Incident response procedures, business continuity planning, and disaster recovery capabilities ensure platform availability and data integrity even under adverse conditions.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
      </svg>
    ),
    color: "#8b5cf6",
  },
];

export default function SecurityPage() {
  const frameworkSection = useInView();
  const pillarSection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Security & Compliance</div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Security Built Into<br/>
                <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                  Every Transaction
                </span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-10">
                Enterprise-grade security and compliance protecting every payment, shipment, data point, and client interaction across all Africa-Canada corridors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Security Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Security score visual */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">Security Framework Status</div>
              <div className="space-y-3">
                {[
                  { label: "ISO 27001 Alignment", score: 92, color: "#C5A059" },
                  { label: "NIST Framework", score: 88, color: "#3b82f6" },
                  { label: "AML Controls", score: 95, color: "#10b981" },
                  { label: "KYC Compliance", score: 90, color: "#8b5cf6" },
                  { label: "Data Protection", score: 94, color: "#f59e0b" },
                  { label: "Audit Readiness", score: 87, color: "#ec4899" },
                ].map(({ label, score, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/60 font-medium">{label}</span>
                      <span className="font-bold" style={{color}}>{score}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000"
                        style={{width: `${score}%`, background: color}}/>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                <span className="text-white/40 text-xs">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Our Approach</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Four Pillars of Security</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Every dimension of security addressed — from architecture to compliance to operational resilience.</p>
          </div>
          <div ref={pillarSection.ref} className="grid md:grid-cols-2 gap-6">
            {PILLARS.map(({ title, desc, icon, color }, i) => (
              <div key={title} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300"
                style={{opacity: pillarSection.inView ? 1 : 0, transform: pillarSection.inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${i * 100}ms`}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background: `${color}15`, color}}>
                  {icon}
                </div>
                <h3 className="font-bold text-blue-950 text-xl mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 framework cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Compliance Frameworks</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Twelve Compliance Frameworks</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Comprehensive coverage of every regulatory and security framework relevant to Africa-Canada cross-border operations.</p>
          </div>
          <div ref={frameworkSection.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FRAMEWORKS.map(({ name, category, desc, color }, i) => (
              <div key={name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: frameworkSection.inView ? 1 : 0,
                  transform: frameworkSection.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.4s ease ${i * 60}ms`,
                  borderTop: `3px solid ${color}`,
                }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{background: color}}/>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{color}}>{category}</span>
                </div>
                <h3 className="font-bold text-blue-950 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible disclosure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Responsible Disclosure</div>
              <h3 className="font-display text-2xl font-bold text-blue-950 mb-4">Security Vulnerability Reporting</h3>
              <p className="text-gray-500 leading-relaxed mb-4">If you discover a security vulnerability in CorridorBridge platform or infrastructure, we encourage responsible disclosure. Contact our security team directly.</p>
              <a href="mailto:security@corridorbridge.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-amber-600 transition-colors">
                security@corridorbridge.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="bg-blue-950 rounded-2xl p-8 text-white">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Enterprise Security</div>
              <h3 className="font-display text-2xl font-bold mb-4">Need a Security Review?</h3>
              <p className="text-white/60 leading-relaxed mb-6">For enterprise deployments, we provide detailed security documentation, architecture reviews, and compliance evidence packages on request.</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">
                Request Security Package
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Security questions?</h2>
          <p className="text-white/60 mb-8 text-lg">Our team can walk you through our security framework and provide documentation for your due diligence process.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Talk to Security Team
            </Link>
            <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
