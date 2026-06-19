import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Advisory Services", description: "Eight professional advisory services for cross-border payment readiness, governance, compliance, and strategic operations between Africa and Canada." };
const SERVICES = [
  { num: "01", title: "Cross-Border Payment Readiness Assessment", desc: "Assess current payment processes, controls, and risk exposure to determine readiness for secure and compliant cross-border transactions.", deliverables: ["Readiness report and maturity score", "Gap assessment and risk observations", "90-day remediation plan", "Target operating model recommendations"] },
  { num: "02", title: "Payment Partner Selection Advisory", desc: "Identify and evaluate the most suitable licensed payment providers, banks, gateways, or cross-border partners based on your operational needs.", deliverables: ["Partner comparison matrices", "Evaluation scorecards", "Advisory selection memos", "Implementation roadmap"] },
  { num: "03", title: "Payment Workflow Design and Optimization", desc: "Design and improve cross-border payment workflows from invoice to reconciliation with full control, auditability, and efficiency.", deliverables: ["End-to-end workflow documentation", "Approval routing design", "Reconciliation procedures", "Exception and escalation processes"] },
  { num: "04", title: "Governance and Internal Controls Advisory", desc: "Establish governance frameworks and internal controls needed for safe, disciplined cross-border payment operations.", deliverables: ["Approval matrices", "Segregation of duties design", "User access and authorization structure", "Risk ownership framework"] },
  { num: "05", title: "Vendor and Third-Party Risk Review", desc: "Evaluate operational and compliance risks associated with payment partners, technology vendors, and third-party providers.", deliverables: ["Third-party risk reviews", "Operational dependency assessments", "Security and governance considerations", "Due diligence support"] },
  { num: "06", title: "Fintech Market Readiness Advisory", desc: "Strengthen governance, operating models, and cross-border market readiness for fintechs expanding into new corridors.", deliverables: ["Payment operating model review", "Governance structuring", "Cross-border workflow planning", "Enterprise readiness support"] },
  { num: "07", title: "Cybersecurity and Operational Risk Advisory", desc: "Advisory support on cybersecurity and operational risk connected to cross-border payment operations.", deliverables: ["Control environment reviews", "Access and identity considerations", "Incident response advisory", "Resilience and continuity planning"] },
  { num: "08", title: "Executive and Strategic Advisory", desc: "Leadership-level guidance on cross-border payment strategy, partner relationships, risk considerations, and operational direction.", deliverables: ["Monthly retained advisory", "Partner contract reviews", "Executive reporting support", "Strategic positioning guidance"] },
];
const DISCLAIMER = "CorridorBridge provides technology, advisory, and operational enablement services. CorridorBridge does not provide legal, banking, money transmission, or regulated financial services unless expressly licensed or partnered with authorized providers.";
export default function ServicesPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Advisory Services</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">Eight Ways We Help You Operate Across Borders</h1>
          <p className="text-white/60 text-xl max-w-2xl">Every engagement is built around your corridor, your regulatory obligations, and your operational reality.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {SERVICES.map(({ num, title, desc, deliverables }) => (
            <div key={num} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-amber-200 transition-all">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-amber-500 font-bold text-sm font-mono bg-amber-50 px-3 py-1 rounded-lg">{num}</span>
                    <h3 className="font-bold text-blue-950 text-lg">{title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Deliverables</div>
                  <ul className="space-y-2">
                    {deliverables.map(d => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">{DISCLAIMER}</p>
        </div>
      </section>
      <section className="py-20 bg-blue-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/60 mb-8">Book a discovery call and we will recommend the right starting point.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Book a Discovery Call</Link>
            <Link href="https://app.corridorbridge.com/signup" className="btn-outline px-8 py-3.5">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}
