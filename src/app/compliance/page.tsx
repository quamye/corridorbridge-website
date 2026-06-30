"use client";
import { useState, useEffect, useRef } from "react";
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

function ComplianceDashboard({ inView }: { inView: boolean }) {
  const checks = [
    { label: "KYC Verified", status: "Passed", color: "#10b981" },
    { label: "AML Screening", status: "Clear", color: "#10b981" },
    { label: "Sanctions Check", status: "Clear", color: "#10b981" },
    { label: "PEP Screening", status: "Clear", color: "#10b981" },
    { label: "Risk Score", status: "Low — 12/100", color: "#C5A059" },
    { label: "FINTRAC Report", status: "Filed", color: "#10b981" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="text-white/50 text-xs font-semibold uppercase tracking-widest">Compliance Dashboard</div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
          <span className="text-emerald-400 text-xs font-medium">All Clear</span>
        </div>
      </div>
      <div className="space-y-3">
        {checks.map(({ label, status, color }, i) => (
          <div key={label} className="flex items-center justify-between p-3 rounded-xl transition-all duration-500"
            style={{
              background: `${color}10`,
              border: `1px solid ${color}25`,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(20px)",
              transitionDelay: `${i * 120}ms`,
            }}>
            <span className="text-white/60 text-xs font-medium">{label}</span>
            <span className="text-xs font-bold" style={{color}}>{status}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-white/10">
        <div className="text-white/30 text-xs mb-2">Overall Compliance Score</div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-emerald-400 transition-all duration-1000"
            style={{width: inView ? "94%" : "0%"}}/>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-white/30 text-xs">0</span>
          <span className="text-emerald-400 text-xs font-bold">94 / 100</span>
        </div>
      </div>
    </div>
  );
}

const MODULES = [
  {
    id: "kyc",
    title: "KYC Management",
    icon: "👤",
    color: "#C5A059",
    headline: "Know Your Customer — end to end",
    desc: "Comprehensive customer identity verification, beneficial ownership identification, and ongoing monitoring aligned to Canadian and African regulatory requirements.",
    features: ["Identity document verification", "Beneficial ownership mapping", "Ongoing KYC refresh workflows", "Risk-based customer categorization", "Documentary evidence storage"],
  },
  {
    id: "aml",
    title: "AML Controls",
    icon: "🛡️",
    color: "#10b981",
    headline: "Anti-money laundering built into every workflow",
    desc: "Transaction monitoring, suspicious activity detection, and AML reporting embedded directly into payment and compliance workflows — not a separate system.",
    features: ["Real-time transaction monitoring", "Threshold-based alerts", "Suspicious Activity Report (SAR) workflow", "AML risk scoring per transaction", "Case management and escalation"],
  },
  {
    id: "fintrac",
    title: "FINTRAC Reporting",
    icon: "📋",
    color: "#3b82f6",
    headline: "FINTRAC compliance without the complexity",
    desc: "Automated generation and management of all required FINTRAC reports — Large Cash Transaction Reports, Electronic Funds Transfer Reports, Suspicious Transaction Reports, and more.",
    features: ["LCTR automated generation", "EFTR reporting workflow", "STR case management", "Record-keeping obligations tracking", "FINTRAC audit trail documentation"],
  },
  {
    id: "risk",
    title: "Risk Screening",
    icon: "🔍",
    color: "#8b5cf6",
    headline: "Sanctions, PEP, and adverse media screening",
    desc: "Comprehensive risk screening covering sanctions lists, politically exposed persons, adverse media, and country risk — applied at onboarding and on an ongoing basis.",
    features: ["UN, OFAC, EU sanctions screening", "PEP identification and monitoring", "Adverse media screening", "Country and corridor risk assessment", "Screening audit trail"],
  },
  {
    id: "governance",
    title: "Governance Framework",
    icon: "📐",
    color: "#f59e0b",
    headline: "Policy, procedures, and controls in one place",
    desc: "Document and maintain your entire compliance governance framework — policies, procedures, controls, approval matrices, and evidence packages — in one structured platform.",
    features: ["Policy library management", "Procedure documentation", "Control testing and evidence", "Approval matrix configuration", "Compliance calendar and deadlines"],
  },
  {
    id: "audit",
    title: "Audit Support",
    icon: "📁",
    color: "#ef4444",
    headline: "Audit-ready evidence at all times",
    desc: "Complete, tamper-evident audit trails and evidence packages for every compliance activity — designed to satisfy FINTRAC, Bank of Ghana, and internal audit requirements.",
    features: ["Tamper-evident audit logs", "Evidence package generation", "Regulatory examination support", "Internal audit documentation", "Compliance reporting dashboards"],
  },
];

const FRAMEWORKS = [
  { name: "FINTRAC", region: "Canada", desc: "Financial Transactions and Reports Analysis Centre reporting and record-keeping." },
  { name: "PCMLTFA", region: "Canada", desc: "Proceeds of Crime (Money Laundering) and Terrorist Financing Act obligations." },
  { name: "PIPEDA", region: "Canada", desc: "Personal Information Protection and Electronic Documents Act compliance." },
  { name: "Bank of Ghana", region: "Ghana", desc: "Payment systems and financial sector regulatory standards." },
  { name: "CBN Framework", region: "Nigeria", desc: "Central Bank of Nigeria AML/CFT compliance requirements." },
  { name: "CBK Standards", region: "Kenya", desc: "Central Bank of Kenya prudential and AML standards." },
  { name: "FATF 40 Recs", region: "International", desc: "Financial Action Task Force Forty Recommendations framework." },
  { name: "BCEAO", region: "West Africa", desc: "Banque Centrale des États de l'Afrique de l'Ouest standards." },
];

export default function CompliancePage() {
  const [activeModule, setActiveModule] = useState("kyc");
  const heroSection = useInView(0.1);
  const modulesSection = useInView();
  const frameworkSection = useInView();
  const active = MODULES.find(m => m.id === activeModule) || MODULES[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Compliance Hub</div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                KYC, AML, and<br/>
                <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                  Regulatory Compliance
                </span><br/>
                in One Dashboard
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Unified compliance management covering KYC, AML, FINTRAC, risk screening, and governance documentation — built for Canada-Africa cross-border operations.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Request Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Start Free Trial
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                {[
                  { value: "6", label: "Compliance modules" },
                  { value: "8+", label: "Regulatory frameworks" },
                  { value: "100%", label: "Audit trail coverage" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-display text-2xl font-bold text-amber-400">{value}</div>
                    <div className="text-xs text-white/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`transition-all duration-700 delay-300 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <ComplianceDashboard inView={heroSection.inView} />
            </div>
          </div>
        </div>
      </section>

      {/* Module explorer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Compliance Modules</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Six Compliance Modules</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Every compliance dimension covered — from customer verification to audit support.</p>
          </div>
          <div ref={modulesSection.ref} className="grid lg:grid-cols-3 gap-6">
            {/* Selector */}
            <div className="space-y-2">
              {MODULES.map(({ id, title, icon, color }) => (
                <button key={id} onClick={() => setActiveModule(id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-200 ${
                    activeModule === id ? "bg-white shadow-lg border-2" : "bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-md"
                  }`}
                  style={activeModule === id ? {borderColor: color} : {}}>
                  <div className="text-xl">{icon}</div>
                  <div>
                    <div className="font-bold text-blue-950 text-sm">{title}</div>
                    {activeModule === id && <div className="text-xs mt-0.5 font-medium" style={{color}}>Active</div>}
                  </div>
                  {activeModule === id && (
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 rounded-2xl p-8 h-full" style={{borderColor: `${active.color}30`}}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{active.icon}</div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{color: active.color}}>Compliance Module</div>
                    <h3 className="font-display text-2xl font-bold text-blue-950">{active.title}</h3>
                  </div>
                </div>
                <h4 className="font-bold text-blue-950 text-lg mb-3">{active.headline}</h4>
                <p className="text-gray-500 leading-relaxed mb-6">{active.desc}</p>
                <div className="space-y-2 mb-8">
                  {active.features.map(f => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                        stroke={active.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{background: active.color === "#C5A059" ? "#0A1E3F" : active.color}}>
                  Learn more about {active.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory frameworks */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Regulatory Frameworks</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Aligned to Eight Frameworks</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Compliance coverage spanning Canadian, African, and international regulatory standards.</p>
          </div>
          <div ref={frameworkSection.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FRAMEWORKS.map(({ name, region, desc }, i) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: frameworkSection.inView ? 1 : 0,
                  transform: frameworkSection.inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.4s ease ${i * 70}ms`,
                }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"/>
                  <span className="text-emerald-400 text-xs font-bold">{region}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{name}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Get Started</div>
          <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">Ready to build your compliance programme?</h2>
          <p className="text-gray-500 mb-8 text-lg">Our compliance advisory team will help you design, document, and implement a programme that satisfies Canadian and African regulatory requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 hover:shadow-xl transition-all">
              Book Compliance Consultation
            </Link>
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



