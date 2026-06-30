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

const SEGMENTS = [
  {
    id: "smes",
    title: "SMEs",
    headline: "Cross-border operations at enterprise quality — without the enterprise budget",
    icon: "🏢",
    color: "#C5A059",
    desc: "Small and medium enterprises moving goods and money across Africa-Canada corridors need simple, compliant, and cost-effective infrastructure. CorridorBridge gives SMEs access to enterprise-grade payment workflows, compliance support, and partner networks.",
    challenges: ["High payment fees eating into margins", "Compliance complexity with no internal team", "Difficulty finding licensed, trustworthy partners", "Manual processes slowing operations"],
    solutions: ["Payment readiness assessment tailored to SME budgets", "Compliant workflow design with minimal overhead", "Licensed partner selection and onboarding support", "Platform access from $59 CAD/month"],
    href: "/contact",
  },
  {
    id: "importers",
    title: "Importers",
    headline: "Clear visibility from purchase order to payment settlement",
    icon: "📥",
    color: "#10b981",
    desc: "Importers bringing goods from Africa into Canada face compliance complexity, payment delays, and documentation burdens. We help you design streamlined import payment workflows with full compliance and audit readiness.",
    challenges: ["FINTRAC reporting obligations for cross-border payments", "Delayed settlements causing supply chain disruptions", "Vendor payment documentation gaps", "AML risk exposure without proper controls"],
    solutions: ["Import payment workflow design end-to-end", "FINTRAC compliance programme support", "Vendor KYC and risk assessment", "Audit-ready documentation and evidence packages"],
    href: "/contact",
  },
  {
    id: "exporters",
    title: "Exporters",
    headline: "Reach African markets with confidence and compliance",
    icon: "📤",
    color: "#3b82f6",
    desc: "Canadian exporters expanding into African markets need trusted payment partners, compliance clarity, and operational frameworks suited to each corridor. We help you build the infrastructure to export at scale.",
    challenges: ["Unknown licensed partners in African markets", "Currency and settlement risk management", "Regulatory requirements in multiple jurisdictions", "Collection and reconciliation complexity"],
    solutions: ["Export payment partner selection by corridor", "Corridor-specific compliance guidance", "Multi-currency workflow optimization", "Collections and reconciliation process design"],
    href: "/contact",
  },
  {
    id: "fintechs",
    title: "Fintechs",
    headline: "Build on compliant, enterprise-grade cross-border infrastructure",
    icon: "⚡",
    color: "#8b5cf6",
    desc: "Fintechs expanding between Africa and Canada need governance, operating models, and compliance frameworks that satisfy enterprise and regulatory stakeholders. We help fintechs achieve credibility and operational maturity.",
    challenges: ["Enterprise clients demand governance documentation", "Regulatory scrutiny of cross-border payment models", "Operating model gaps limiting scalability", "Partner and vendor risk management immaturity"],
    solutions: ["Governance structuring and documentation", "Payment operating model review and design", "Compliance framework aligned to Canadian and African standards", "Enterprise readiness advisory and support"],
    href: "/contact",
  },
  {
    id: "logistics",
    title: "Logistics Providers",
    headline: "Connect shipment data to payment and compliance workflows",
    icon: "🚢",
    color: "#f59e0b",
    desc: "Logistics companies managing Africa-Canada freight need operational infrastructure that connects shipment tracking, payment workflows, and compliance documentation in one system.",
    challenges: ["Fragmented systems disconnecting shipment and payment data", "Customs and compliance documentation gaps", "Manual exception management causing delays", "Partner payment settlement complexity"],
    solutions: ["Shipment tracking and payment workflow integration advisory", "Compliance documentation framework for cross-border freight", "Exception management process design", "Partner settlement workflow optimization"],
    href: "/contact",
  },
  {
    id: "financial-institutions",
    title: "Financial Institutions",
    headline: "Enable cross-border trade financing with confidence",
    icon: "🏦",
    color: "#ef4444",
    desc: "Banks and lenders supporting Africa-Canada trade need compliance, risk frameworks, and operational structures that meet regulatory expectations on both sides of the corridor.",
    challenges: ["AML and KYC obligations for cross-border trade finance", "Correspondent banking risk management", "Regulatory alignment across multiple jurisdictions", "Trade finance documentation and governance gaps"],
    solutions: ["Cross-border risk framework design", "AML and KYC programme advisory", "Trade finance governance and controls", "Regulatory alignment support for Canadian and African standards"],
    href: "/contact",
  },
  {
    id: "government",
    title: "Government Agencies",
    headline: "Govern and enable cross-border trade with proper infrastructure",
    icon: "🏛️",
    color: "#06b6d4",
    desc: "Government agencies managing cross-border regulatory obligations need structured frameworks, documentation, and technology to support compliant trade operations.",
    challenges: ["Cross-border regulatory coordination complexity", "Payment infrastructure governance gaps", "Policy documentation and compliance evidence needs", "Vendor and partner risk management requirements"],
    solutions: ["Policy and governance advisory framework", "Regulatory alignment across corridors", "Cross-border compliance programme design", "Institutional capacity building support"],
    href: "/contact",
  },
];

export default function SolutionsPage() {
  const [activeSegment, setActiveSegment] = useState("smes");
  const gridSection = useInView();
  const active = SEGMENTS.find(s => s.id === activeSegment) || SEGMENTS[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Solutions</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
            Built For Every<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Cross-Border Operator
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            CorridorBridge serves every organization that needs to operate securely and compliantly across Africa-Canada corridors — from solo SMEs to government agencies.
          </p>
          {/* Segment quick nav */}
          <div className="flex flex-wrap gap-2">
            {SEGMENTS.map(({ id, title, icon, color }) => (
              <button key={id} onClick={() => setActiveSegment(id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all duration-200"
                style={activeSegment === id
                  ? {borderColor: color, background: `${color}20`, color: "white"}
                  : {borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)"}}>
                <span>{icon}</span>
                {title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive segment explorer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="space-y-2">
              {SEGMENTS.map(({ id, title, icon, color }) => (
                <button key={id} onClick={() => setActiveSegment(id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 ${
                    activeSegment === id ? "bg-white shadow-lg border-2" : "bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-md"
                  }`}
                  style={activeSegment === id ? {borderColor: color} : {}}>
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <div className="font-bold text-blue-950 text-sm">{title}</div>
                    {activeSegment === id && <div className="text-xs mt-0.5 font-medium" style={{color}}>Selected</div>}
                  </div>
                  {activeSegment === id && (
                    <svg className="w-4 h-4 ml-auto flex-shrink-0" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 rounded-2xl p-8 h-full transition-all duration-300"
                style={{borderColor: `${active.color}30`}}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{active.icon}</div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{color: active.color}}>Segment</div>
                    <h2 className="font-display text-2xl font-bold text-blue-950">{active.title}</h2>
                  </div>
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-3">{active.headline}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{active.desc}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Common Challenges</div>
                    <ul className="space-y-2">
                      {active.challenges.map(c => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">How We Help</div>
                    <ul className="space-y-2">
                      {active.solutions.map(s => (
                        <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
                            stroke={active.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href={active.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                    style={{background: active.color === "#C5A059" ? "#0A1E3F" : active.color}}>
                    Talk to us about {active.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All segments grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">All Segments</div>
            <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">Every Operator We Serve</h2>
          </div>
          <div ref={gridSection.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEGMENTS.map(({ id, title, icon, headline, color }, i) => (
              <button key={id} onClick={() => { setActiveSegment(id); window.scrollTo({top: 400, behavior: "smooth"}); }}
                className="text-left rounded-2xl p-7 border-2 border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                style={{
                  opacity: gridSection.inView ? 1 : 0,
                  transform: gridSection.inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.4s ease ${i * 80}ms`,
                }}>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color}}>{title}</div>
                <h3 className="font-bold text-blue-950 text-sm leading-snug mb-3">{headline}</h3>
                <div className="text-xs font-semibold flex items-center gap-1 transition-colors" style={{color}}>
                  Explore solution
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Not sure which solution fits?</h2>
          <p className="text-white/60 mb-8 text-lg">Book a free discovery call. Our team will assess your situation and recommend the right starting point.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Book Discovery Call
            </Link>
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



