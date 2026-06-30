"use client";
import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    title: "Cross-Border Payment Readiness Assessment",
    short: "Payment Readiness",
    desc: "We assess an organization's current payment processes, operating model, controls, and risk exposure to determine readiness for secure and compliant cross-border transactions.",
    deliverables: ["Readiness report and maturity score", "Gap assessment and risk observations", "90-day remediation plan", "Target operating model recommendations"],
    who: "Importers, exporters, fintechs, and SMEs beginning or scaling cross-border payments.",
    duration: "2–4 weeks",
    color: "#C5A059",
  },
  {
    num: "02",
    title: "Payment Partner Selection Advisory",
    short: "Partner Selection",
    desc: "We help clients identify and evaluate the most suitable licensed payment providers, banks, gateways, or cross-border financial partners based on their operational needs and transaction corridors.",
    deliverables: ["Partner comparison matrices", "Evaluation scorecards", "Advisory selection memos", "Implementation roadmap"],
    who: "Organizations evaluating or switching payment partners for Africa-Canada corridors.",
    duration: "3–6 weeks",
    color: "#10b981",
  },
  {
    num: "03",
    title: "Payment Workflow Design and Optimization",
    short: "Workflow Design",
    desc: "We design and improve cross-border payment workflows so organizations can operate more efficiently and with greater control from invoice to reconciliation.",
    deliverables: ["End-to-end workflow documentation", "Approval routing design", "Reconciliation procedures", "Exception and escalation processes"],
    who: "Operations teams, finance directors, and compliance managers building scalable processes.",
    duration: "4–8 weeks",
    color: "#8b5cf6",
  },
  {
    num: "04",
    title: "Governance and Internal Controls Advisory",
    short: "Governance & Controls",
    desc: "We help clients establish the governance framework and internal controls needed to support safe and disciplined cross-border payment operations.",
    deliverables: ["Approval matrices", "Segregation of duties design", "User access and authorization structure", "Risk ownership framework"],
    who: "CFOs, compliance officers, and boards establishing cross-border governance.",
    duration: "4–6 weeks",
    color: "#3b82f6",
  },
  {
    num: "05",
    title: "Vendor and Third-Party Risk Review",
    short: "Vendor Risk Review",
    desc: "Cross-border payment operations often depend on third parties. We help clients evaluate the operational and governance risks associated with these relationships.",
    deliverables: ["Third-party risk reviews", "Operational dependency assessments", "Security and governance considerations", "Due diligence support"],
    who: "Procurement teams, risk officers, and compliance managers reviewing third-party relationships.",
    duration: "2–4 weeks",
    color: "#f59e0b",
  },
  {
    num: "06",
    title: "Fintech Market Readiness Advisory",
    short: "Fintech Readiness",
    desc: "We support fintechs and payment-adjacent companies seeking to strengthen their governance, operating model, and market readiness for cross-border activity.",
    deliverables: ["Payment operating model review", "Governance structuring", "Cross-border workflow planning", "Enterprise readiness support"],
    who: "African fintechs entering Canada and Canadian fintechs expanding into African markets.",
    duration: "6–10 weeks",
    color: "#ef4444",
  },
  {
    num: "07",
    title: "Cybersecurity and Operational Risk Advisory",
    short: "Cybersecurity Advisory",
    desc: "We provide advisory support on cybersecurity and operational risk issues connected to cross-border payment operations.",
    deliverables: ["Control environment reviews", "Access and identity considerations", "Incident response advisory", "Resilience and continuity planning"],
    who: "CISOs, IT directors, and risk officers managing security in payment operations.",
    duration: "3–6 weeks",
    color: "#06b6d4",
  },
  {
    num: "08",
    title: "Executive and Strategic Advisory",
    short: "Executive Advisory",
    desc: "We provide leadership-level advisory support to founders and executives who need guidance on cross-border payment structure, partner strategy, risk considerations, and operational direction.",
    deliverables: ["Monthly retained advisory sessions", "Partner contract reviews", "Executive reporting support", "Strategic positioning guidance"],
    who: "CEOs, founders, and board members navigating Africa-Canada cross-border strategy.",
    duration: "Ongoing retainer",
    color: "#ec4899",
  },
];

const DISCLAIMER = "CorridorBridge provides technology, advisory, and operational enablement services. CorridorBridge does not provide legal, banking, money transmission, or regulated financial services unless expressly licensed or partnered with authorized providers.";

export default function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Advisory Services</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
            Eight Ways We Help You<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Operate Across Borders
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            Every engagement is built around your corridor, your regulatory obligations, and your operational reality. Expert advisory connected to a live platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Book a Discovery Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Start Free Trial
            </Link>
          </div>
          {/* Quick nav */}
          <div className="flex flex-wrap gap-2 mt-12">
            {SERVICES.map(({ num, short, color }) => (
              <a key={num} href={`#service-${num}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all hover:-translate-y-0.5"
                style={{borderColor: `${color}40`, color, background: `${color}10`}}>
                {num} {short}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-5">
          {SERVICES.map(({ num, title, short, desc, deliverables, who, duration, color }) => (
            <div key={num} id={`service-${num}`}
              className="bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl scroll-mt-20"
              style={{borderColor: active === num ? color : "#e5e7eb"}}>
              <button className="w-full text-left p-8" onClick={() => setActive(active === num ? null : num)}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-5 flex-1">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm font-mono flex-shrink-0 transition-colors"
                      style={{background: active === num ? color : `${color}15`, color: active === num ? "white" : color}}>
                      {num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-950 text-lg mb-2">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${active === num ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-400 ${active === num ? "max-h-[600px]" : "max-h-0"}`}>
                <div className="px-8 pb-8 border-t border-gray-100">
                  <div className="grid md:grid-cols-3 gap-8 pt-6">
                    <div className="md:col-span-2">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Deliverables</div>
                      <ul className="space-y-2 mb-6">
                        {deliverables.map(d => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
                              stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                        style={{background: color === "#C5A059" ? "#0A1E3F" : color}}>
                        Enquire about this service
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </Link>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Best For</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{who}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Typical Duration</div>
                        <p className="text-sm font-semibold text-blue-950">{duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8">
          <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">{DISCLAIMER}</p>
        </div>
      </section>

      {/* Why advisory + platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Advisory + Platform</div>
              <h3 className="font-display text-2xl font-bold text-blue-950 mb-4">Advisory connected to a live platform</h3>
              <p className="text-gray-500 leading-relaxed mb-4">Unlike standalone consultants, CorridorBridge advisory services are backed by a live compliance and operations platform. Your engagement deliverables feed directly into your CorridorBridge workspace.</p>
              <p className="text-gray-500 leading-relaxed">Assessment findings become your compliance programme. Workflow designs become your operational SOPs. Governance frameworks become your policy library.</p>
            </div>
            <div className="bg-blue-950 rounded-2xl p-8 text-white">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Engagement Process</div>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Discovery Call", desc: "We understand your corridor, operations, and requirements." },
                  { step: "02", title: "Proposal & Scope", desc: "We define the engagement, deliverables, and timeline." },
                  { step: "03", title: "Engagement Delivery", desc: "Our team executes the advisory engagement." },
                  { step: "04", title: "Platform Integration", desc: "Findings and frameworks are integrated into your platform." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0">{step}</div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5">{title}</div>
                      <div className="text-white/50 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/60 mb-8 text-lg">Book a free discovery call. Our team will assess your situation and recommend the right starting point.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Book Discovery Call</Link>
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}



