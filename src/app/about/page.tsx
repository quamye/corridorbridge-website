import Link from "next/link";

const PILLARS = [
  { icon: "🛡️", label: "Trust", desc: "Secure and credible payment operations, built on documented evidence." },
  { icon: "✅", label: "Compliance", desc: "Disciplined, well-governed practices aligned to your regulatory obligations." },
  { icon: "⚡", label: "Efficiency", desc: "Streamlined workflows that improve speed, clarity, and operational reliability." },
  { icon: "🎯", label: "Control", desc: "Structures that strengthen accountability, approvals, and risk management." },
  { icon: "🌍", label: "Connection", desc: "Stronger commercial and financial linkages between Africa and North America." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">About Us</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            We are the trusted bridge between businesses and licensed payment infrastructure
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            CorridorBridge Advisory Inc. was established to serve as an independent advisory firm for organizations navigating the complexity of cross-border payment operations between Africa and North America.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">Our Purpose</div>
              <h2 className="font-serif text-3xl font-bold text-blue-950 mb-6">We do not replace payment companies. We help clients choose, govern, and use them properly.</h2>
              <p className="text-gray-500 leading-relaxed mb-4">At CorridorBridge Advisory Inc., we help organizations build the operational and governance foundation required for smooth cross-border payment activity.</p>
              <p className="text-gray-500 leading-relaxed mb-4">We support our clients in selecting trusted licensed partners, assessing payment models, establishing internal controls, strengthening oversight, and designing workflows that improve efficiency while reducing risk.</p>
              <p className="text-gray-500 leading-relaxed">Our strength lies in combining enterprise architecture, cybersecurity and controls, governance and policy, vendor assessment, and Africa-Canada commercial understanding in a single advisory engagement.</p>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{background: "linear-gradient(135deg, #0A1E3F, #1e3a8a)"}}>
              <h3 className="font-bold text-lg mb-6 text-amber-400">The Three-Layer Model</h3>
              <div className="space-y-4">
                <div className="rounded-xl p-4" style={{background: "rgba(197,160,89,0.12)", border: "1px solid rgba(197,160,89,0.25)"}}>
                  <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-1">Layer 1 — The Money Movers</div>
                  <div className="font-semibold text-sm">Licensed PSPs, Banks & Gateways</div>
                  <div className="text-white/50 text-xs mt-1">Registered MSBs, Canadian PSPs, Ghana-licensed providers</div>
                </div>
                <div className="text-center text-amber-400 text-lg">↕</div>
                <div className="rounded-xl p-4" style={{background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)"}}>
                  <div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-1">Layer 3 — The Enabler</div>
                  <div className="font-semibold text-sm">CorridorBridge Advisory</div>
                  <div className="text-white/50 text-xs mt-1">Partner selection · Workflow design · Controls · Advisory</div>
                </div>
                <div className="text-center text-amber-400 text-lg">↕</div>
                <div className="rounded-xl p-4" style={{background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)"}}>
                  <div className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-1">Layer 2 — The Users</div>
                  <div className="font-semibold text-sm">Businesses & Fintechs</div>
                  <div className="text-white/50 text-xs mt-1">Importers, exporters, SMEs, fintechs, NGOs, schools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">Vision</div>
              <p className="font-serif text-xl font-bold text-blue-950 leading-snug">To become the trusted advisory bridge for secure, compliant, and efficient cross-border payment operations between Africa and North America.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">Mission</div>
              <p className="font-serif text-xl font-bold text-blue-950 leading-snug">To help businesses and fintechs design, govern, and optimize cross-border payment operations through trusted licensed partners, strong internal controls, and well-structured payment workflows.</p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="text-center mb-10">
            <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">Core Principles</div>
            <h2 className="font-serif text-3xl font-bold text-blue-950">Five pillars of everything we do</h2>
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

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-white/60 mb-8">Start with a 30-day free trial or book a discovery call to discuss your corridor.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://app.corridorbridge.com/signup" className="btn-gold px-8 py-3.5">Start Free Trial</Link>
            <Link href="/contact" className="btn-outline-white px-8 py-3.5">Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
