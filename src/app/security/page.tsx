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

const CARD_DISCLAIMER = "References to security and compliance frameworks indicate alignment with recognized governance and security practices and should not be interpreted as formal certification unless explicitly stated.";

const LEGAL_DISCLAIMER = "CorridorBridge aligns its security and compliance programme with recognized industry frameworks, including NIST Cybersecurity Framework principles, ISO 27001 controls and governance practices, FINTRAC obligations, AML requirements, KYC procedures, FATF recommendations, and PIPEDA privacy requirements. References to frameworks, controls, standards, or compliance programmes indicate operational alignment and governance objectives and should not be interpreted as certification, accreditation, regulatory approval, or independent attestation unless expressly stated.";

const STATUS_BARS = [
  { label: "ISO 27001 Alignment",        pct: 92, color: "#C5A059" },
  { label: "NIST Cybersecurity Framework",pct: 88, color: "#3b82f6" },
  { label: "AML Control Design",          pct: 95, color: "#10b981" },
  { label: "KYC Process Support",         pct: 90, color: "#8b5cf6" },
  { label: "Data Protection",             pct: 94, color: "#f59e0b" },
  { label: "Audit Readiness",             pct: 87, color: "#ec4899" },
];

const FRAMEWORKS = [
  { name: "ISO 27001 Alignment",          category: "Information Security",   status: "Aligned",     desc: "Information security management system aligned to ISO/IEC 27001 controls and governance practices.",                             color: "#C5A059" },
  { name: "NIST Cybersecurity Framework", category: "Cybersecurity",          status: "Aligned",     desc: "Identify, Protect, Detect, Respond, Recover functions applied to all platform operations.",                                   color: "#3b82f6" },
  { name: "AML Control Design",           category: "Anti-Money Laundering",  status: "Operational", desc: "Anti-money laundering controls embedded in every payment workflow across corridors.",                                          color: "#10b981" },
  { name: "KYC Process Support",          category: "Know Your Customer",     status: "Operational", desc: "Customer identity verification and ongoing monitoring procedures aligned to corridor requirements.",                           color: "#8b5cf6" },
  { name: "FINTRAC Compliance",           category: "Canadian Regulation",    status: "Operational", desc: "Financial Transactions and Reports Analysis Centre reporting and record-keeping alignment.",                                   color: "#ef4444" },
  { name: "PIPEDA Data Protection",       category: "Privacy",                status: "Implemented", desc: "Personal Information Protection and Electronic Documents Act compliance framework.",                                           color: "#f59e0b" },
  { name: "Bank of Ghana Standards",      category: "African Regulation",     status: "Aligned",     desc: "Payment system and financial sector regulatory standards for Ghanaian corridors.",                                            color: "#06b6d4" },
  { name: "FATF Recommendations",         category: "International Standards",status: "Aligned",     desc: "Financial Action Task Force 40 Recommendations framework applied to AML/CFT controls.",                                      color: "#ec4899" },
  { name: "Risk Management Programme",    category: "Enterprise Risk",        status: "Active",      desc: "Enterprise risk identification, assessment, treatment, and monitoring across operations.",                                     color: "#C5A059" },
  { name: "Audit Readiness Programme",    category: "Governance",             status: "Active",      desc: "Documentation, evidence packages, and audit trails for regulatory and internal audits.",                                      color: "#10b981" },
  { name: "Incident Response",            category: "Operational Resilience", status: "Operational", desc: "Documented incident detection, classification, response, recovery, and review processes.",                                    color: "#8b5cf6" },
  { name: "Zero Trust Architecture",      category: "Access Control",         status: "Implemented", desc: "Least-privilege access and continuous verification model applied to all platform access.",                                    color: "#3b82f6" },
];

const PILLARS = [
  { title: "Secure by Design",      desc: "Security built into every feature, workflow, and integration from inception — not added as an afterthought.",                      color: "#C5A059", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: "Compliance Embedded",   desc: "FINTRAC, AML, KYC, and PIPEDA compliance embedded in every payment and logistics workflow.",                                       color: "#10b981", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
  { title: "Data Protection",       desc: "PIPEDA-aligned data handling, consent management, and breach notification across all corridors.",                                  color: "#3b82f6", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { title: "Operational Resilience",desc: "Incident response, business continuity, and disaster recovery capabilities protecting platform availability.",                      color: "#8b5cf6", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg> },
];

export default function SecurityPage() {
  const heroSection  = useInView(0.1);
  const pillarSection    = useInView();
  const frameworkSection = useInView();

  return (
    <>
      {/* HERO */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>

        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left col */}
            <div className={`transition-all duration-700 ${heroSection.inView?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`}>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Security &amp; Compliance</div>

              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Security Built Into<br/>
                <span style={{background:"linear-gradient(90deg,#C5A059,#e8c97a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Every Corridor
                </span>
              </h1>

              <p className="text-xl text-white/60 leading-relaxed mb-4">
                Enterprise-grade security and compliance practices designed to protect payment workflows, shipment data, client records, and cross-border operations across Africa–Canada corridors.
              </p>

              <p className="text-sm text-white/35 leading-relaxed mb-8 border-l-2 border-amber-500/30 pl-4">
                Led by cybersecurity and enterprise technology leadership with experience across cloud security, infrastructure governance, risk management, and mission-critical international environments.
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

            {/* Right col — progress bar card */}
            <div className={`transition-all duration-700 delay-300 ${heroSection.inView?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

                <div className="flex items-center justify-between mb-6">
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-widest">Security Framework Status</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                    <span className="text-emerald-400 text-xs font-medium">All Systems Operational</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {STATUS_BARS.map(({ label, pct, color }, i) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white/70 text-xs font-medium">{label}</span>
                        <span className="text-xs font-bold" style={{color}}>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: heroSection.inView ? `${pct}%` : "0%",
                            background: `linear-gradient(90deg,${color},${color}80)`,
                            transitionDelay: `${i * 150}ms`,
                          }}/>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>
                  <span className="text-white/30 text-xs">All systems operational</span>
                </div>

                <p className="text-white/20 text-[10px] leading-relaxed mt-3">
                  {CARD_DISCLAIMER}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
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
                style={{opacity:pillarSection.inView?1:0,transform:pillarSection.inView?"translateY(0)":"translateY(20px)",transition:`all 0.5s ease ${i*100}ms`}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:`${color}15`,color}}>
                  {icon}
                </div>
                <h3 className="font-bold text-blue-950 text-xl mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 FRAMEWORK CARDS */}
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
                style={{opacity:frameworkSection.inView?1:0,transform:frameworkSection.inView?"translateY(0)":"translateY(24px)",transition:`all 0.4s ease ${i*60}ms`,borderTop:`3px solid ${color}`}}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{color}}>{category}</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1" style={{background:`${color}15`,color}}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {status}
                  </span>
                </div>
                <h3 className="font-bold text-blue-950 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
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

      {/* RESPONSIBLE DISCLOSURE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Responsible Disclosure</div>
              <h3 className="font-display text-2xl font-bold text-blue-950 mb-4">Security Vulnerability Reporting</h3>
              <p className="text-gray-500 leading-relaxed mb-4">If you discover a security vulnerability in the CorridorBridge platform or infrastructure, we encourage responsible disclosure. Contact our security team directly.</p>
              <a href="mailto:security@corridorbridge.com" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-amber-600 transition-colors">
                security@corridorbridge.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="bg-blue-950 rounded-2xl p-8 text-white">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Enterprise Security</div>
              <h3 className="font-display text-2xl font-bold mb-4">Need a Security Package?</h3>
              <p className="text-white/60 leading-relaxed mb-6">For enterprise deployments, we provide security documentation, architecture reviews, and compliance evidence packages on request.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/trust" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">Visit Trust Center</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Request Package</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(197,160,89,0.08),transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Security questions?</h2>
          <p className="text-white/60 mb-8 text-lg">Our team can walk you through our security framework and provide documentation for your due diligence process.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/trust" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Visit Trust Center</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Talk to Security Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
