import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Africa-Canada Trade Corridors",
  description: "CorridorBridge active trade corridors connecting Africa and Canada — Ghana, Nigeria, Kenya, and broader African trade lanes.",
  keywords: "Africa Canada trade corridors, Ghana Canada, Nigeria Canada, Kenya Canada, cross-border trade lanes",
};

const CORRIDORS = [
  {
    slug: "africa-canada",
    title: "Africa ↔ Canada",
    headline: "The Primary Cross-Border Infrastructure Corridor",
    desc: "The flagship corridor connecting all African markets with Canada — payments, logistics, compliance, and advisory for the full continent.",
    stats: [{ label: "Bilateral Trade", value: "$4B+" }, { label: "Diaspora in Canada", value: "500K+" }],
    color: "#C5A059",
    tag: "Primary Corridor",
  },
  {
    slug: "ghana-canada",
    title: "Ghana ↔ Canada",
    headline: "West Africa's Most Stable Payment Corridor",
    desc: "One of West Africa's most dynamic economies connected to Canada with Bank of Ghana oversight and a thriving diaspora community.",
    stats: [{ label: "Ghanaian diaspora", value: "500K+" }, { label: "Currency", value: "GHS/CAD" }],
    color: "#10b981",
    tag: "Active",
  },
  {
    slug: "nigeria-canada",
    title: "Nigeria ↔ Canada",
    headline: "Africa's Largest Economy Connected to Canada",
    desc: "Africa's most populous nation with a dynamic fintech ecosystem and strong bilateral trade with Canadian markets.",
    stats: [{ label: "Population", value: "200M+" }, { label: "Currency", value: "NGN/CAD" }],
    color: "#3b82f6",
    tag: "Active",
  },
  {
    slug: "kenya-canada",
    title: "Kenya ↔ Canada",
    headline: "East Africa's Financial Hub",
    desc: "Kenya's leadership in mobile money and fintech makes it the strategic entry point for Canadian businesses in East Africa.",
    stats: [{ label: "Population", value: "55M+" }, { label: "Currency", value: "KES/CAD" }],
    color: "#8b5cf6",
    tag: "Active",
  },
];

const SERVICES = [
  { icon: "💸", title: "Cross-Border Payments", desc: "Licensed partner selection and payment workflow design for each corridor.", href: "/payments" },
  { icon: "🛡️", title: "Compliance", desc: "FINTRAC, AML, KYC, and corridor-specific regulatory alignment.", href: "/compliance" },
  { icon: "📦", title: "Shipment Tracking", desc: "Real-time logistics visibility across Africa-Canada freight.", href: "/shipment-tracking" },
  { icon: "🎯", title: "Advisory Services", desc: "Expert guidance on payment readiness, governance, and risk.", href: "/services" },
];

export default function CorridorsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Trade Corridors</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
            Africa ↔ Canada<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Trade Corridors
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            CorridorBridge operates across four active Africa-Canada trade lanes — providing payments, compliance, logistics, and advisory infrastructure for each corridor.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Discuss Your Corridor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Corridor cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Active Corridors</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Four Active Trade Lanes</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Select your corridor to explore corridor-specific payment, compliance, and logistics infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CORRIDORS.map(({ slug, title, headline, desc, stats, color, tag }) => (
              <Link key={slug} href={`/corridors/${slug}`}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-opacity-100 transition-all duration-300 group block"
                style={{{"--hover-border": color} as React.CSSProperties}}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full" style={{background: `${color}15`, color}}>{tag}</span>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-1 group-hover:transition-colors" style={{color}}>{title}</h3>
                <div className="font-semibold text-blue-950 mb-3 text-sm">{headline}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  {stats.map(({ label, value }) => (
                    <div key={label}>
                      <div className="font-bold text-lg" style={{color}}>{value}</div>
                      <div className="text-xs text-gray-400">{label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer on every corridor */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Platform</div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">What We Offer on Every Corridor</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Four core capabilities available across all Africa-Canada trade lanes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon, title, desc, href }) => (
              <Link key={title} href={href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all group block">
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">Don&apos;t see your corridor?</h2>
          <p className="text-gray-500 mb-8 text-lg">We are expanding to additional African markets. Contact us to discuss your specific corridor requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 hover:shadow-xl transition-all">
              Discuss Your Corridor
            </Link>
            <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
