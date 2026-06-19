import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Ecosystem — CorridorBridge",
  description: "The CorridorBridge partner ecosystem — banking partners, fintech partners, compliance partners, technology partners, logistics partners, and institutional partners.",
  keywords: "CorridorBridge partners, cross-border payment partners, Africa Canada trade partners, fintech ecosystem",
};

const PARTNER_CATEGORIES = [
  {
    category: "Banking Partners",
    icon: "🏦",
    color: "#C5A059",
    desc: "Licensed banks and financial institutions providing payment rails, correspondent banking, and trade finance across Africa-Canada corridors.",
    how: "Banking partners provide the licensed infrastructure through which cross-border payments are executed. CorridorBridge evaluates, selects, and governs relationships with banking partners on behalf of clients.",
    examples: ["Canadian Schedule I and II banks", "Ghanaian commercial banks", "Nigerian tier-1 banks", "Kenyan licensed institutions"],
  },
  {
    category: "Fintech Partners",
    icon: "⚡",
    color: "#10b981",
    desc: "Licensed fintech companies providing cross-border payment technology, mobile money integration, and digital payment infrastructure.",
    how: "Fintech partners extend payment capabilities across corridors where traditional banks have limited reach — particularly for mobile money, digital wallets, and last-mile payment delivery.",
    examples: ["Ghana mobile money providers", "Nigeria fintech payment processors", "East Africa mobile money operators", "Canadian payment fintechs"],
  },
  {
    category: "Compliance Partners",
    icon: "📋",
    color: "#8b5cf6",
    desc: "Compliance technology providers, legal advisors, and regulatory specialists supporting AML, KYC, and cross-border compliance programmes.",
    how: "Compliance partners provide specialized tools, legal expertise, and regulatory intelligence that strengthens the compliance programmes CorridorBridge designs and manages.",
    examples: ["AML screening providers", "KYC technology platforms", "Regulatory legal advisors", "Compliance training providers"],
  },
  {
    category: "Technology Partners",
    icon: "💻",
    color: "#3b82f6",
    desc: "Cloud, API, and technology infrastructure providers underpinning the CorridorBridge platform and client integrations.",
    how: "Technology partners provide the cloud infrastructure, API connectivity, and integration capabilities that power the CorridorBridge platform.",
    examples: ["Cloud infrastructure providers", "API integration platforms", "Data and analytics providers", "Security technology providers"],
  },
  {
    category: "Logistics Partners",
    icon: "🚢",
    color: "#f59e0b",
    desc: "Freight, customs, and logistics providers supporting shipment tracking and trade operations across Africa-Canada corridors.",
    how: "Logistics partners provide freight, customs brokerage, and shipment tracking capabilities that connect physical trade flows to the CorridorBridge payment and compliance platform.",
    examples: ["International freight carriers", "Customs brokers", "Freight forwarders", "Port logistics operators"],
  },
  {
    category: "Institutional Partners",
    icon: "🏛️",
    color: "#06b6d4",
    desc: "Development finance institutions, trade bodies, chambers of commerce, and multilateral organizations supporting Africa-Canada trade.",
    how: "Institutional partners provide market access, trade facilitation, and development finance capabilities that expand the reach and impact of CorridorBridge's cross-border infrastructure.",
    examples: ["Development finance institutions", "Trade promotion bodies", "Chambers of commerce", "Multilateral trade organizations"],
  },
];

const PARTNERSHIP_BENEFITS = [
  { title: "Enhanced Compliance", desc: "Partner relationships are governed by CorridorBridge compliance standards — AML, KYC, and FINTRAC aligned from day one.", icon: "✅" },
  { title: "Improved Scalability", desc: "Access to a growing ecosystem of cross-border capabilities without managing multiple vendor relationships independently.", icon: "📈" },
  { title: "Risk Reduction", desc: "All partners undergo CorridorBridge vendor risk assessment — reducing third-party risk for clients.", icon: "🛡️" },
  { title: "Corridor Coverage", desc: "Partner ecosystem specifically built for Africa-Canada corridors — not generic global partnerships.", icon: "🌍" },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Partner Ecosystem</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            The CorridorBridge<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Partner Ecosystem
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            CorridorBridge operates through a curated ecosystem of banking, fintech, compliance, technology, logistics, and institutional partners — all evaluated and governed to meet our compliance standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Become a Partner
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Request Partnership Meeting
            </Link>
          </div>
        </div>
      </section>

      {/* Why partners matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Why It Matters</div>
            <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">How Our Partner Ecosystem Benefits You</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTNERSHIP_BENEFITS.map(({ title, desc, icon }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-amber-200 transition-all">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-blue-950 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Partner Categories</div>
            <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">Six Partner Categories</h2>
          </div>
          <div className="space-y-6">
            {PARTNER_CATEGORIES.map(({ category, icon, color, desc, how, examples }) => (
              <div key={category} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-amber-200 transition-all">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{icon}</div>
                      <h3 className="font-display text-xl font-bold text-blue-950">{category}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">How They Help</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{how}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Partner Types</div>
                    <ul className="space-y-2">
                      {examples.map(e => (
                        <li key={e} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: color}}/>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-20 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Join the Ecosystem</div>
          <h2 className="font-display text-4xl font-bold text-white mb-6">Become a CorridorBridge Partner</h2>
          <p className="text-white/60 text-lg mb-8">If you are a bank, fintech, compliance provider, technology company, logistics operator, or institutional organization operating across Africa-Canada corridors — we want to hear from you.</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
            {[
              "Access to CorridorBridge client network",
              "Joint marketing and co-branding opportunities",
              "Inclusion in partner ecosystem directory",
              "Corridor-specific business development support",
            ].map(b => (
              <div key={b} className="flex items-center gap-2.5 text-sm text-white/70 text-left">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {b}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Become a Partner
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Request Partnership Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
