import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "About", description: "CorridorBridge Advisory Inc. is a Canadian cross-border infrastructure company connecting Africa and Canada through payments, logistics, compliance, and technology." };
const PILLARS = [
  { icon: "🛡️", label: "Trust", desc: "Secure and credible operations built on documented evidence." },
  { icon: "✅", label: "Compliance", desc: "Disciplined practices aligned to regulatory obligations." },
  { icon: "⚡", label: "Efficiency", desc: "Streamlined workflows improving speed and clarity." },
  { icon: "🎯", label: "Control", desc: "Structures that strengthen accountability and approvals." },
  { icon: "🌍", label: "Connection", desc: "Stronger linkages between Africa and North America." },
];
const DISCLAIMER = "CorridorBridge provides technology, advisory, and operational enablement services. CorridorBridge does not provide legal, banking, money transmission, or regulated financial services unless expressly licensed or partnered with authorized providers.";
export default function AboutPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">About CorridorBridge</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">We Are the Trusted Bridge Between Businesses and Cross-Border Infrastructure</h1>
          <p className="text-white/60 text-xl max-w-2xl">CorridorBridge Advisory Inc. is incorporated in Canada, focused exclusively on enabling secure, compliant, and efficient cross-border operations between Africa and Canada.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Our Purpose</div>
            <h2 className="font-display text-3xl font-bold text-blue-950 mb-6">We Enable. We Do Not Replace.</h2>
            <p className="text-gray-500 leading-relaxed mb-4">CorridorBridge helps organizations build the operational and governance foundation required for smooth cross-border payment activity. We support clients in selecting trusted licensed partners, establishing internal controls, and designing workflows that improve efficiency while reducing risk.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Our strength lies in combining enterprise architecture, cybersecurity and controls, governance and policy, vendor assessment, and Africa-Canada commercial understanding in a single advisory engagement.</p>
            <p className="text-xs text-gray-400 leading-relaxed mt-6 border-t border-gray-100 pt-6">{DISCLAIMER}</p>
          </div>
          <div className="bg-blue-950 rounded-2xl p-8 text-white">
            <h3 className="font-bold text-lg mb-6 text-amber-400">The Three-Layer Model</h3>
            <div className="space-y-4">
              {[
                { label: "Layer 1 — The Money Movers", title: "Licensed PSPs, Banks & Gateways", sub: "Registered MSBs, Canadian PSPs, Ghana-licensed providers", color: "rgba(197,160,89,0.15)", border: "rgba(197,160,89,0.3)" },
                { label: "Layer 2 — The Enabler", title: "CorridorBridge", sub: "Partner selection · Workflow design · Controls · Advisory", color: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)" },
                { label: "Layer 3 — The Users", title: "Businesses & Fintechs", sub: "Importers, exporters, SMEs, fintechs, NGOs, governments", color: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
              ].map(({ label, title, sub, color, border }) => (
                <div key={label} className="rounded-xl p-4" style={{background: color, border: `1px solid ${border}`}}>
                  <div className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-1">{label}</div>
                  <div className="font-semibold text-sm">{title}</div>
                  <div className="text-white/50 text-xs mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Vision</div>
              <p className="font-display text-xl font-bold text-blue-950 leading-snug">To become the trusted cross-border infrastructure platform for secure, compliant, and efficient operations between Africa and North America.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Mission</div>
              <p className="font-display text-xl font-bold text-blue-950 leading-snug">To enable businesses and institutions to operate confidently across borders through trusted partners, strong controls, and reliable infrastructure.</p>
            </div>
          </div>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-blue-950">Five Core Principles</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {PILLARS.map(({ icon, label, desc }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-amber-200 transition-all">
                <div className="text-2xl mb-3">{icon}</div>
                <div className="font-bold text-blue-950 mb-2">{label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Work with us</h2>
          <p className="text-white/60 mb-8">Start with a 30-day free trial or book a discovery call.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://app.corridorbridge.com/signup" className="btn-primary px-8 py-3.5">Start Free Trial</Link>
            <Link href="/contact" className="btn-outline px-8 py-3.5">Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
