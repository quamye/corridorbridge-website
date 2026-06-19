import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Solutions", description: "CorridorBridge solutions for SMEs, importers, exporters, fintechs, logistics providers, financial institutions, and government agencies operating across Africa-Canada corridors." };
const SEGMENTS = [
  { id: "smes", title: "SMEs", headline: "Cross-border operations shouldn't require an enterprise budget", desc: "Small and medium enterprises moving goods and money across Africa-Canada corridors need simple, compliant, and cost-effective infrastructure. CorridorBridge gives SMEs access to enterprise-grade payment workflows, compliance support, and partner networks.", benefits: ["Payment readiness assessment", "Compliant workflow design", "Licensed partner selection", "Cost-efficient corridor operations"] },
  { id: "importers", title: "Importers", headline: "Clear visibility from purchase order to payment settlement", desc: "Importers bringing goods from Africa into Canada face compliance complexity, payment delays, and documentation burdens. We help you design streamlined import payment workflows with full compliance and audit readiness.", benefits: ["Import payment workflow design", "FINTRAC compliance support", "Vendor risk assessment", "Trade finance advisory"] },
  { id: "exporters", title: "Exporters", headline: "Reach African markets with confidence and compliance", desc: "Canadian exporters expanding into African markets need trusted payment partners, compliance clarity, and operational frameworks suited to each corridor. We help you build the infrastructure to export at scale.", benefits: ["Export payment partner selection", "Corridor-specific compliance guidance", "Workflow optimization", "Market readiness advisory"] },
  { id: "fintechs", title: "Fintechs", headline: "Build on compliant, enterprise-grade cross-border infrastructure", desc: "Fintechs expanding between Africa and Canada need governance, operating models, and compliance frameworks that satisfy enterprise and regulatory stakeholders. We help fintechs achieve credibility and operational maturity.", benefits: ["Governance structuring", "Operating model review", "Compliance framework design", "Enterprise readiness support"] },
  { id: "logistics", title: "Logistics Providers", headline: "Connect shipment data to payment and compliance workflows", desc: "Logistics companies managing Africa-Canada freight need operational infrastructure that connects shipment tracking, payment workflows, and compliance documentation in one system.", benefits: ["Shipment tracking integration advisory", "Payment workflow alignment", "Compliance documentation support", "Operational efficiency design"] },
  { id: "financial-institutions", title: "Financial Institutions", headline: "Enable cross-border trade financing with confidence", desc: "Banks and lenders supporting Africa-Canada trade need compliance, risk frameworks, and operational structures that meet regulatory expectations on both sides of the corridor.", benefits: ["Cross-border risk framework design", "AML and KYC advisory", "Trade finance governance", "Regulatory alignment support"] },
  { id: "government", title: "Government Agencies", headline: "Govern and enable cross-border trade with proper infrastructure", desc: "Government agencies managing cross-border regulatory obligations need structured frameworks, documentation, and technology to support compliant trade operations.", benefits: ["Policy and governance advisory", "Regulatory framework alignment", "Cross-border compliance design", "Institutional capacity support"] },
];
export default function SolutionsPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Solutions</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">Built For Every Cross-Border Operator</h1>
          <p className="text-white/60 text-xl max-w-2xl">CorridorBridge serves every organization that needs to operate securely and compliantly across Africa-Canada corridors.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {SEGMENTS.map(({ id, title, headline, desc, benefits }) => (
            <div key={id} id={id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-amber-200 transition-all scroll-mt-20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">{title}</div>
                  <h2 className="font-display text-2xl font-bold text-blue-950 mb-4">{headline}</h2>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                  <Link href="/contact" className="btn-navy mt-6 inline-flex px-6 py-2.5 text-sm">Talk to us about {title}</Link>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">How we help</div>
                  <ul className="space-y-2">
                    {benefits.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
