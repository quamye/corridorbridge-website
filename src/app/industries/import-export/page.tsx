import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Import & Export — Industry Solutions",
  description: "CorridorBridge cross-border infrastructure solutions for Import & Export operating between Africa and Canada. Payments, compliance, logistics, and advisory.",
  keywords: "Import & Export cross-border payments, Import & Export Africa Canada, cross-border Import & Export compliance",
};

export default function IndustryPage() {
  const benefits = ["Import and export payment workflow design", "FINTRAC compliance programme support", "Vendor and supplier KYC assessment", "Shipment tracking integration advisory", "Trade finance governance support"];
  const challenges = ["FINTRAC reporting obligations for cross-border payments", "Delayed settlements disrupting supply chains", "Vendor payment documentation gaps", "AML risk exposure without proper controls", "Manual reconciliation causing operational delays"];

  const services = [
    { title: "Payment Infrastructure", desc: "Licensed partner selection and payment workflow design for your corridor.", href: "/payments", icon: "💸" },
    { title: "Compliance Programme", desc: "KYC, AML, FINTRAC, and governance framework tailored to your operations.", href: "/compliance", icon: "🛡️" },
    { title: "Shipment Tracking", desc: "Real-time logistics visibility connected to payment workflows.", href: "/shipment-tracking", icon: "📦" },
    { title: "Advisory Services", desc: "Expert guidance on cross-border strategy, governance, and risk.", href: "/services", icon: "🎯" },
  ];

  const otherIndustries = [
    ["/industries/fintech", "Fintech"],
    ["/industries/logistics", "Logistics"],
    ["/industries/import-export", "Import & Export"],
    ["/industries/government", "Government"],
    ["/industries/financial-institutions", "Financial Institutions"],
  ].filter(([href]) => !href.includes("import-export"));

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Industry</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-4">
            <span style={{color: "#C5A059"}}>Import & Export</span>
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white/60 mb-6">Cross-Border Infrastructure for Importers and Exporters</h2>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">Importers and exporters moving goods between Africa and Canada face payment complexity, compliance obligations, and logistics coordination challenges that demand expert infrastructure.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Talk to an Expert
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges + Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Common Challenges</div>
              <h2 className="font-display text-3xl font-bold text-blue-950 mb-6">Why Import & Export Need Specialist Infrastructure</h2>
              <div className="space-y-3">
                {challenges.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">How CorridorBridge Helps</div>
              <h2 className="font-display text-3xl font-bold text-blue-950 mb-6">What We Deliver for Import & Export</h2>
              <div className="space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Platform</div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">What We Offer Import & Export</h2>
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

      {/* Other industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Other Industries</div>
            <h2 className="font-display text-3xl font-bold text-blue-950">Explore Other Sectors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherIndustries.map(([href, label]) => (
              <Link key={label} href={href} className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all group">
                <div className="font-display text-lg font-bold text-blue-950 mb-2 group-hover:text-amber-600 transition-colors">{label}</div>
                <div className="text-amber-500 text-xs font-semibold flex items-center justify-center gap-1">
                  Explore
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8 text-lg">Talk to our team about your specific cross-border requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Book a Consultation
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
