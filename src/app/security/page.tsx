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

const FRAMEWORK_DISCLAIMER = "References to security frameworks indicate alignment with recognized governance and security practices and should not be interpreted as certification unless explicitly stated.";

const LEGAL_DISCLAIMER = "CorridorBridge aligns its security and compliance programme with recognized industry frameworks, including NIST Cybersecurity Framework principles, ISO 27001 controls and governance practices, FINTRAC obligations, AML requirements, KYC procedures, FATF recommendations, and PIPEDA privacy requirements. References to frameworks, controls, standards, or compliance programmes indicate operational alignment and governance objectives and should not be interpreted as certification, accreditation, regulatory approval, or independent attestation unless expressly stated.";

const FRAMEWORKS = [
  { name: "ISO 27001 Alignment", category: "Information Security", status: "Aligned", desc: "Information security management system aligned to ISO/IEC 27001 controls and governance practices.", color: "#C5A059" },
  { name: "NIST Cybersecurity Framework", category: "Cybersecurity", status: "Aligned", desc: "Identify, Protect, Detect, Respond, Recover functions applied to all platform operations.", color: "#3b82f6" },
  { name: "AML Controls", category: "Anti-Money Laundering", status: "Operational", desc: "Anti-money laundering controls embedded in every payment workflow.", color: "#10b981" },
  { name: "KYC Processes", category: "Know Your Customer", status: "Operational", desc: "Customer identity verification and ongoing monitoring procedures.", color: "#8b5cf6" },
  { name: "FINTRAC Compliance", category: "Canadian Regulation", status: "Operational", desc: "Financial Transactions and Reports Analysis Centre reporting and record-keeping alignment.", color: "#ef4444" },
  { name: "PIPEDA Data Protection", category: "Privacy", status: "Implemented", desc: "Personal Information Protection and Electronic Documents Act compliance.", color: "#f59e0b" },
  { name: "Bank of Ghana Standards", category: "African Regulation", status: "Aligned", desc: "Payment system and financial sector regulatory standards for Ghanaian corridors.", color: "#06b6d4" },
  { name: "FATF Recommendations", category: "International Standards", status: "Aligned", desc: "Financial Action Task Force 40 Recommendations framework applied to AML/CFT controls.", color: "#ec4899" },
  { name: "Risk Management Programme", category: "Enterprise Risk", status: "Active", desc: "Enterprise risk identification, assessment, treatment, and monitoring.", color: "#C5A059" },
  { name: "Audit Readiness Programme", category: "Governance", status: "Active", desc: "Documentation, evidence packages, and audit trails for regulatory and internal audits.", color: "#10b981" },
  { name: "Incident Response", category: "Operational Resilience", status: "Operational", desc: "Documented incident detection, classification, response, recovery, and review processes.", color: "#8b5cf6" },
  { name: "Zero Trust Architecture", category: "Access Control", status: "Implemented", desc: "Least-privilege access and continuous verification model applied to all platform access.", color: "#3b82f6" },
];

const STATUS_COLORS: Record<string, string> = {
  "Aligned": "#10b981",
  "Operational": "#10b981",
  "Implemented": "#10b981",
  "Active": "#C5A059",
};

const PILLARS = [
  { title: "Secure by Design", desc: "Security built into every feature, workflow, and integration from inception.", icon: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ), color: "#C5A059" },
  { title: "Compliance Embedded", desc: "FINTRAC, AML, KYC, and PIPEDA compliance embedded in every workflow.", icon: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
  ), color: "#10b981" },
  { title: "Data Protection", desc: "PIPEDA-aligned data handling, consent management, and breach notification.", icon: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
  ), color: "#3b82f6" },
  { title: "Operational Resilience", desc: "Incident response, business continuity, and disaster recovery capabilities.", icon: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
  ), color: "#8b5cf6" },
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
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Enterprise-grade security and compliance protecting every payment, shipment, data point, and client interaction across all Africa-Canada corridors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Security Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/trust" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Visit Trust Center
                </Link>
              </div>
            </div>

            {/* Status dashboard — NO percentages */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white/50 text-xs font-semibold uppercase tracking-widest">Security Framework Status</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                  <span className="text-emerald-400 text-xs font-medium">All Systems Operational</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "ISO 27001 Alignment", status: "Aligned" },
                  { label: "NIST Framework", status: "Aligned" },
                  { label: "AML Controls", status: "Operational" },
                  { label: "KYC Compliance", status: "Operational" },
                  { label: "Data Protection", status: "Implemented" },
                  { label: "Audit Readiness", status: "Active" },
                ].map(({ label, status }) => (
                  <div key={label} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                        stroke={STATUS_COLORS[status] || "#10b981"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span className="text-white/70 text-xs font-medium">{label}</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{background: `${STATUS_COLORS[status] || "#10b981"}20`, color: STATUS_COLORS[status] || "#10b981"}}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/25 text-[10px] leading-relaxed mt-5 pt-4 border-t border-white/10">
                {FRAMEWORK_DISCLAIMER}
              </p>
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

      {/* 12 framework status cards — status labels, NO percentages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Compliance Frameworks</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Twelve Compliance Frameworks</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Comprehensive coverage of every regulatory and security framework relevant to Africa-Canada cross-border operations.</p>
          </div>
          <div ref={frameworkSection.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {FRAMEWORKS.map(({ name, category, status, desc, color }, i) => (
              <div key={name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: frameworkSection.inView ? 1 : 0,
                  transform: frameworkSection.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.4s ease ${i * 60}ms`,
                  borderTop: `3px solid ${color}`,
                }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{color}}>{category}</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"
                    style={{background: `${STATUS_COLORS[status] || color}15`, color: STATUS_COLORS[status] || color}}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {status}
                  </span>
                </div>
                <h3 className="font-bold text-blue-950 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Legal disclaimer box */}
          <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-xs text-gray-500 leading-relaxed">{LEGAL_DISCLAIMER}</p>
            </div>
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
              <a href="mailto:security@corridorbridge.com" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-amber-600 transition-colors">
                security@corridorbridge.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="bg-blue-950 rounded-2xl p-8 text-white">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Enterprise Security</div>
              <h3 className="font-display text-2xl font-bold mb-4">Need a Security Package?</h3>
              <p className="text-white/60 leading-relaxed mb-6">For enterprise deployments, we provide security documentation, architecture reviews, and compliance evidence packages on request. Visit our Trust Center for full details.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/trust" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">
                  Visit Trust Center
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Request Package
                </Link>
              </div>
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
            <Link href="/trust" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Visit Trust Center
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Talk to Security Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
