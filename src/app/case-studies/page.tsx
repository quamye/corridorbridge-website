"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Payments", "Compliance", "Logistics", "Fintech", "Government"];

const CASE_STUDIES = [
  {
    title: "Canadian Importer Builds FINTRAC-Compliant Payment Programme for Ghana Corridor",
    category: "Compliance",
    corridor: "Canada ↔ Ghana",
    outcome: "Reduced compliance risk, full FINTRAC alignment",
    challenge: "A Canadian importer of Ghanaian cocoa products was making regular cross-border payments without a formal compliance programme, creating significant FINTRAC exposure.",
    solution: "CorridorBridge delivered a payment readiness assessment, designed a FINTRAC-aligned workflow, and helped select a licensed Ghanaian payment partner.",
    results: ["FINTRAC-compliant payment programme implemented in 6 weeks", "Licensed payment partner onboarded with documented KYC", "Full audit trail established for all cross-border transactions", "Regulatory risk exposure eliminated"],
    color: "#C5A059",
  },
  {
    title: "Nigerian Fintech Strengthens Governance for Canadian Market Entry",
    category: "Fintech",
    corridor: "Nigeria ↔ Canada",
    outcome: "Enterprise-ready governance framework delivered",
    challenge: "A Lagos-based fintech expanding into Canada needed a governance framework, compliance documentation, and operating model that would satisfy Canadian enterprise clients and regulators.",
    solution: "CorridorBridge delivered a fintech market readiness advisory engagement covering governance structuring, operating model review, and compliance framework design.",
    results: ["Complete governance documentation package delivered", "AML and KYC programme aligned to Canadian standards", "Operating model structured for Canadian enterprise sales", "First Canadian enterprise client onboarded within 90 days"],
    color: "#10b981",
  },
  {
    title: "Kenyan Exporter Connects Shipment Tracking to Payment Workflows",
    category: "Logistics",
    corridor: "Kenya ↔ Canada",
    outcome: "Integrated logistics and payment operations",
    challenge: "A Kenyan agricultural exporter shipping to Canada was managing logistics and payments in completely separate systems, causing reconciliation delays and operational inefficiencies.",
    solution: "CorridorBridge designed an integrated workflow connecting shipment milestones to payment approvals, with automated reconciliation on delivery confirmation.",
    results: ["Payment-to-shipment integration implemented", "Reconciliation time reduced from 5 days to same-day", "Full audit trail across logistics and payments", "Exception management workflow eliminated manual interventions"],
    color: "#3b82f6",
  },
  {
    title: "Canadian NGO Establishes Cross-Border Payment Controls for African Operations",
    category: "Compliance",
    corridor: "Canada ↔ Multiple Africa",
    outcome: "Governance and controls framework for 8 African corridors",
    challenge: "A Canadian NGO operating across 8 African countries needed a governance framework and internal controls for cross-border payments that satisfied its board, donors, and Canadian regulatory obligations.",
    solution: "CorridorBridge delivered a governance and internal controls advisory engagement, establishing approval matrices, segregation of duties, and a policy library for all African payment corridors.",
    results: ["Governance framework covering 8 African corridors", "Approval matrices and segregation of duties implemented", "Full policy library for cross-border payment operations", "Board-level compliance reporting established"],
    color: "#8b5cf6",
  },
  {
    title: "Ghanaian SME Selects Licensed Payment Partner for Canadian Exports",
    category: "Payments",
    corridor: "Ghana ↔ Canada",
    outcome: "Licensed partner onboarded, costs reduced by 40%",
    challenge: "A Ghanaian SME exporting handcrafted goods to Canada was paying fees of 8–10% per transaction and experiencing 7–10 day settlement delays through informal channels.",
    solution: "CorridorBridge conducted a payment partner selection advisory, identifying a Bank of Ghana-licensed provider with direct Canadian settlement capability.",
    results: ["Licensed payment partner selected and onboarded", "Transaction fees reduced from 8–10% to under 3%", "Settlement time reduced from 7–10 days to 2–3 days", "Fully documented and compliant payment workflow"],
    color: "#f59e0b",
  },
  {
    title: "Canadian Government Agency Designs Cross-Border Trade Payment Framework",
    category: "Government",
    corridor: "Canada ↔ Africa",
    outcome: "Institutional payment framework for African development programmes",
    challenge: "A Canadian government agency managing development programme payments to African partners needed a structured, auditable payment framework aligned to public sector governance standards.",
    solution: "CorridorBridge delivered an executive and strategic advisory engagement covering payment framework design, partner assessment, and governance documentation for public sector cross-border payments.",
    results: ["Payment framework covering 6 African partner countries", "Governance documentation aligned to public sector standards", "All payment partners assessed and risk-rated", "Full audit trail for all development programme payments"],
    color: "#06b6d4",
  },
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStudy, setActiveStudy] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Case Studies</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Real Results on<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Real Corridors
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            How businesses, fintechs, NGOs, and government agencies have used CorridorBridge to build compliant, efficient cross-border operations between Africa and Canada.
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all ${
                  activeCategory === cat
                    ? "bg-amber-500 border-amber-500 text-blue-950"
                    : "border-white/20 text-white/50 hover:border-white/40 hover:text-white"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-5">
            {filtered.map((cs, i) => (
              <div key={cs.title} className="bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{borderColor: activeStudy === i ? cs.color : "#e5e7eb"}}>
                <button className="w-full text-left p-8" onClick={() => setActiveStudy(activeStudy === i ? null : i)}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{background: `${cs.color}15`, color: cs.color}}>{cs.category}</span>
                        <span className="text-xs text-gray-400 border border-gray-200 px-2.5 py-1 rounded-full">{cs.corridor}</span>
                      </div>
                      <h3 className="font-bold text-blue-950 text-lg mb-2">{cs.title}</h3>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <span className="text-sm text-emerald-600 font-medium">{cs.outcome}</span>
                      </div>
                    </div>
                    <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${activeStudy === i ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-400 ${activeStudy === i ? "max-h-[800px]" : "max-h-0"}`}>
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="grid md:grid-cols-3 gap-8 pt-6">
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">The Challenge</div>
                        <p className="text-gray-500 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Our Solution</div>
                        <p className="text-gray-500 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Results</div>
                        <ul className="space-y-2">
                          {cs.results.map(r => (
                            <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
                                stroke={cs.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                              {r}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:shadow-lg"
                          style={{background: cs.color === "#C5A059" ? "#0A1E3F" : cs.color}}>
                          Get similar results
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to be the next success story?</h2>
          <p className="text-white/60 mb-8 text-lg">Book a discovery call and we will show you exactly how CorridorBridge can help your organization.</p>
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



