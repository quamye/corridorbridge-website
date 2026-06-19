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

const MODULES = [
  {
    id: "payments",
    title: "Cross-Border Payments",
    headline: "Multi-currency payment workflows with full compliance",
    desc: "Design, govern, and execute cross-border payment workflows through licensed partners. From invoice approval to settlement reconciliation — with AML, KYC, and FINTRAC compliance embedded at every step.",
    features: ["Multi-currency support (CAD, GHS, NGN, KES, USD)", "Approval routing and segregation of duties", "Real-time settlement tracking", "Full audit trail and evidence package", "FINTRAC-aligned reporting"],
    color: "#C5A059",
    href: "/payments",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    id: "logistics",
    title: "Shipment Tracking",
    headline: "Real-time logistics visibility across Africa-Canada corridors",
    desc: "Monitor every shipment from origin to destination with live status updates, exception management, and compliance documentation. Connect shipment data directly to payment workflows for unified operations.",
    features: ["Live shipment status across all trade lanes", "Exception alerts and proactive notifications", "Customs documentation management", "Carrier and freight partner integration", "Payment-logistics workflow linkage"],
    color: "#10b981",
    href: "/shipment-tracking",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    id: "compliance",
    title: "Compliance Hub",
    headline: "KYC, AML, and regulatory management in one dashboard",
    desc: "Manage your entire compliance programme from a single platform. KYC verification, AML screening, risk scoring, FINTRAC reporting, and governance documentation — built for Canada-Africa cross-border operations.",
    features: ["KYC verification and ongoing monitoring", "AML transaction screening", "FINTRAC reporting and audit support", "Risk scoring and escalation workflows", "Policy and governance documentation"],
    color: "#8b5cf6",
    href: "/compliance",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    headline: "Trade intelligence and performance insights",
    desc: "Track KPIs, monitor corridor performance, measure risk exposure, and identify growth opportunities. Real-time dashboards built for compliance advisors, executives, and operations teams.",
    features: ["Corridor performance KPIs", "Payment volume and settlement analytics", "Risk exposure monitoring", "Client and engagement reporting", "Custom dashboard views"],
    color: "#3b82f6",
    href: "https://app.corridorbridge.com",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    id: "advisory",
    title: "Advisory Services",
    headline: "Expert guidance embedded into the platform",
    desc: "Access professional advisory services directly through the platform. Payment readiness assessments, partner selection, governance frameworks, and executive advisory — all connected to your operational data.",
    features: ["Payment readiness assessments", "Partner selection advisory", "Governance framework design", "Vendor risk reviews", "Executive and strategic advisory"],
    color: "#f59e0b",
    href: "/services",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    id: "risk",
    title: "Risk Management",
    headline: "Identify, assess, and mitigate cross-border risk",
    desc: "Comprehensive risk management covering payment risk, counterparty risk, operational risk, and regulatory risk. Built-in escalation workflows, risk scoring, and audit-ready documentation.",
    features: ["Payment and counterparty risk scoring", "Operational risk registers", "Regulatory risk monitoring", "Escalation and remediation workflows", "Risk reporting and dashboards"],
    color: "#ef4444",
    href: "/compliance",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
];

const INTEGRATIONS = [
  { name: "FINTRAC", desc: "Regulatory reporting" },
  { name: "Supabase", desc: "Data infrastructure" },
  { name: "Zeepay", desc: "Ghana payments" },
  { name: "Interac", desc: "Canada payments" },
  { name: "SWIFT", desc: "International wire" },
  { name: "DHL", desc: "Logistics tracking" },
  { name: "Maersk", desc: "Freight tracking" },
  { name: "ACAMS", desc: "AML standards" },
];

export default function PlatformPage() {
  const [activeModule, setActiveModule] = useState("payments");
  const featuresSection = useInView();
  const integrationSection = useInView();

  const active = MODULES.find(m => m.id === activeModule) || MODULES[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">The Platform</div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              One Platform.<br/>
              <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                Multiple Corridors.
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              CorridorBridge is the operating system for cross-border business between Africa and Canada — combining payments, logistics, compliance, analytics, risk management, and advisory in one unified platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Request Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                Start Free Trial
              </Link>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "6", label: "Platform Modules" },
              { value: "8+", label: "Compliance Frameworks" },
              { value: "4+", label: "Active Corridors" },
              { value: "30", label: "Day Free Trial" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-3xl font-bold text-amber-400">{value}</div>
                <div className="text-xs text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Module Explorer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Platform Modules</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Explore the Platform</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Six integrated modules covering every dimension of cross-border operations.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Module selector */}
            <div className="space-y-2">
              {MODULES.map(({ id, title, icon, color }) => (
                <button key={id} onClick={() => setActiveModule(id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 ${
                    activeModule === id
                      ? "bg-white shadow-lg border-2"
                      : "bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-md"
                  }`}
                  style={activeModule === id ? {borderColor: color} : {}}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{background: `${color}15`, color}}>
                    {icon}
                  </div>
                  <div>
                    <div className="font-bold text-blue-950 text-sm">{title}</div>
                    {activeModule === id && <div className="text-xs mt-0.5" style={{color}}>Active</div>}
                  </div>
                  {activeModule === id && (
                    <svg className="w-4 h-4 ml-auto flex-shrink-0" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Module detail */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 rounded-2xl p-8 h-full transition-all duration-300"
                style={{borderColor: `${active.color}30`}}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{background: `${active.color}15`, color: active.color}}>
                    {active.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{color: active.color}}>
                      Platform Module
                    </div>
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
                <Link href={active.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{background: active.color === "#C5A059" ? "#0A1E3F" : active.color}}>
                  Explore {active.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Architecture</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">How It All Connects</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Every module is integrated — data flows seamlessly between payments, logistics, compliance, and advisory.</p>
          </div>
          <div ref={featuresSection.ref} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="space-y-3">
                {["Importers", "Exporters", "Fintechs", "Logistics"].map((b, i) => (
                  <div key={b} className={`bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-xs font-semibold text-amber-400 transition-all duration-500`}
                    style={{opacity: featuresSection.inView ? 1 : 0, transform: featuresSection.inView ? "translateX(0)" : "translateX(-20px)", transitionDelay: `${i * 100}ms`}}>
                    {b}
                  </div>
                ))}
                <div className="text-amber-400 text-center text-[10px] font-bold tracking-wider uppercase mt-2">Africa</div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="text-white/20 text-xl">⟵ ⟶</div>
                <div className={`bg-amber-500 rounded-2xl p-5 text-center shadow-2xl w-full transition-all duration-700 delay-300 ${featuresSection.inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                  <div className="font-display text-blue-950 font-bold text-sm mb-3">CorridorBridge</div>
                  <div className="grid grid-cols-2 gap-1">
                    {["Payments", "Logistics", "Compliance", "Analytics", "Risk", "Advisory"].map(f => (
                      <div key={f} className="bg-blue-950/15 rounded-lg px-1.5 py-1 text-blue-950 text-[9px] font-bold text-center">{f}</div>
                    ))}
                  </div>
                </div>
                <div className="text-white/20 text-xl">⟵ ⟶</div>
              </div>

              <div className="space-y-3">
                {["Banks", "SMEs", "Government", "NGOs"].map((b, i) => (
                  <div key={b} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-xs font-semibold text-blue-400 transition-all duration-500"
                    style={{opacity: featuresSection.inView ? 1 : 0, transform: featuresSection.inView ? "translateX(0)" : "translateX(20px)", transitionDelay: `${300 + i * 100}ms`}}>
                    {b}
                  </div>
                ))}
                <div className="text-blue-400 text-center text-[10px] font-bold tracking-wider uppercase mt-2">Canada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Integrations</div>
            <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">Connected to the Ecosystem</h2>
            <p className="text-gray-500 max-w-xl mx-auto">CorridorBridge integrates with the licensed partners, payment rails, logistics providers, and compliance frameworks you need.</p>
          </div>
          <div ref={integrationSection.ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {INTEGRATIONS.map(({ name, desc }, i) => (
              <div key={name} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-amber-200 hover:-translate-y-1 transition-all duration-300"
                style={{opacity: integrationSection.inView ? 1 : 0, transform: integrationSection.inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.4s ease ${i * 80}ms`}}>
                <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 rounded-full bg-amber-400"/>
                </div>
                <div className="font-bold text-blue-950 text-sm mb-1">{name}</div>
                <div className="text-gray-400 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">See the Platform in Action</h2>
          <p className="text-white/60 text-lg mb-10">Book a personalised demo to see how CorridorBridge can transform your cross-border operations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Request Demo
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
