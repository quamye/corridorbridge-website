import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ghana ↔ Canada Corridor",
  description: "The Ghana-Canada corridor connects one of West Africa's most dynamic economies with Canada. With a large Ghanaian diaspora and growing bilateral trade, this corridor demands expert payment and compliance infrastructure.",
  keywords: "Ghana Canada trade, Ghana Canada payments, Ghana ↔ Canada Corridor, cross-border Ghana",
};

export default function CorridorPage() {
  const stats = [
    ["500K+", "Ghanaian diaspora in Canada"],
    ["GHS/CAD", "Primary currencies"],
    ["Bank of Ghana", "Regulatory oversight"],
    ["1–3 days", "Target settlement time"],
  ];

  const otherCorridors = [
    ["/corridors/africa-canada", "Africa ↔ Canada"],
    ["/corridors/ghana-canada", "Ghana ↔ Canada"],
    ["/corridors/nigeria-canada", "Nigeria ↔ Canada"],
    ["/corridors/kenya-canada", "Kenya ↔ Canada"],
  ].filter(([href]) => !href.includes("ghana-canada"));

  const services = [
    { title: "Payment Infrastructure", desc: "Licensed partner selection, workflow design, and settlement tracking for Ghana-Canada payments.", href: "/payments", icon: "💸" },
    { title: "Compliance Programme", desc: "FINTRAC, AML, KYC, and corridor-specific regulatory alignment for Ghana-Canada operations.", href: "/compliance", icon: "🛡️" },
    { title: "Shipment Tracking", desc: "Real-time logistics visibility across Ghana-Canada freight and trade shipments.", href: "/shipment-tracking", icon: "📦" },
    { title: "Advisory Services", desc: "Expert advisory on payment readiness, governance, and cross-border strategy for this corridor.", href: "/services", icon: "🎯" },
  ];

  return (
    <>
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Corridor</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-4">
            <span style={{color: "#10b981"}}>Ghana</span> ↔ Canada
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white/60 mb-6">West Africa's Most Stable Payment Corridor</h2>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">The Ghana-Canada corridor connects one of West Africa's most dynamic economies with Canada. With a large Ghanaian diaspora and growing bilateral trade, this corridor demands expert payment and compliance infrastructure.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Discuss This Corridor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              View Services
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {stats.map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold" style={{color: "#10b981"}}>{value}</div>
                <div className="text-xs text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">How We Help</div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">CorridorBridge on This Corridor</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">End-to-end infrastructure for payments, compliance, logistics, and advisory on the Ghana-Canada corridor.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ title, desc, href, icon }) => (
              <Link key={title} href={href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 block group">
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Other Corridors</div>
            <h2 className="font-display text-3xl font-bold text-blue-950">Explore Other Trade Lanes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {otherCorridors.map(([href, label]) => (
              <Link key={label} href={href} className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all group">
                <div className="font-display text-xl font-bold text-blue-950 mb-2 group-hover:text-amber-600 transition-colors">{label}</div>
                <div className="text-amber-500 text-xs font-semibold flex items-center justify-center gap-1">
                  Explore corridor
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to operate on this corridor?</h2>
          <p className="text-white/60 mb-8 text-lg">Book a corridor consultation — we will design the right payment, compliance, and logistics infrastructure for your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Book Corridor Consultation
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
