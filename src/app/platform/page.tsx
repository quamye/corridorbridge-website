import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Platform", description: "The CorridorBridge platform — one unified infrastructure for payments, logistics, compliance, and advisory across Africa-Canada corridors." };
export default function PlatformPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">The Platform</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">One Platform. Multiple Corridors.</h1>
          <p className="text-white/60 text-xl max-w-2xl">CorridorBridge sits at the centre of every cross-border transaction, connecting businesses through unified, compliant infrastructure.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Request Demo</Link>
            <Link href="https://app.corridorbridge.com/signup" className="btn-outline px-8 py-3.5">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Payments", desc: "Multi-currency cross-border payment workflows with settlement tracking and approval routing.", href: "/payments", icon: "💸" },
              { title: "Shipment Tracking", desc: "Real-time logistics visibility across your entire Africa-Canada supply chain.", href: "/shipment-tracking", icon: "📦" },
              { title: "Compliance Hub", desc: "KYC, AML, risk screening, and governance management in one dashboard.", href: "/compliance", icon: "🛡️" },
              { title: "Client Portal", desc: "Secure document exchange, workflow approvals, and reporting.", href: "https://app.corridorbridge.com", icon: "🖥️" },
              { title: "Advisory Services", desc: "Expert guidance on payment readiness, partner selection, and governance.", href: "/services", icon: "🎯" },
              { title: "Analytics", desc: "KPIs, trade analytics, risk metrics, and growth insights.", href: "https://app.corridorbridge.com", icon: "📊" },
            ].map(({ title, desc, href, icon }) => (
              <Link key={title} href={href} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all block">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-blue-950 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
