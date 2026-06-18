import Link from "next/link";

const SERVICES = [
  { icon: "🔍", title: "Payment Readiness Assessment", desc: "We evaluate your current processes, controls, and documentation to identify compliance gaps and risk exposures." },
  { icon: "🏦", title: "Payment Partner Selection", desc: "We help you identify and evaluate suitable licensed providers based on your corridor, transaction type, and regulatory profile." },
  { icon: "⚙️", title: "Payment Workflow Design", desc: "We design your end-to-end payment process — from invoice to approval to initiation to reconciliation." },
  { icon: "🛡️", title: "Governance & Controls", desc: "We establish governance frameworks, approval matrices, segregation of duties, and access control structures." },
  { icon: "👥", title: "Vendor & Third-Party Risk", desc: "We evaluate operational and compliance risks in your partner relationships before you commit or renew." },
  { icon: "📊", title: "Fintech Market Readiness", desc: "For fintechs expanding across borders — we help you strengthen governance, operating models, and enterprise credibility." },
];

const HOW = [
  { num: "01", title: "Assess Your Readiness", desc: "We review your payment processes, controls, documentation, and partner relationships to identify gaps and compliance exposures." },
  { num: "02", title: "Design Your Controls", desc: "We design governance frameworks, approval workflows, and vendor risk procedures tailored to your corridor and obligations." },
  { num: "03", title: "Operate with Confidence", desc: "Your payments move through properly-vetted licensed partners, supported by documented workflows and audit-ready evidence." },
];

const SEGMENTS = [
  { tag: "Segment A", title: "African Fintechs Entering Canada", desc: "Ghanaian, Nigerian, and other African fintechs expanding into Canada need governance, documentation, and enterprise credibility. We help you meet Canadian expectations from day one." },
  { tag: "Segment B", title: "Canadian Firms with Africa Operations", desc: "Importers, exporters, educational institutions, consultants, and NGOs that need to pay or collect across African corridors without building an internal compliance function." },
  { tag: "Segment C", title: "Diaspora-Led SMEs", desc: "Canadian businesses led by Ghanaian, Nigerian, Liberian, Togolese, Guinean, and other diaspora communities with recurring corridor payment needs." },
];

const REGULATORS = ["FINTRAC", "PCMLTFA", "Bank of Canada PSP", "Bank of Ghana", "FATF", "PIPEDA", "BCEAO"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-blue-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px]">
            <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
              <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="1"/>
              <circle cx="250" cy="250" r="140" stroke="white" strokeWidth="1"/>
              <circle cx="250" cy="250" r="80" stroke="white" strokeWidth="1"/>
              <line x1="50" y1="250" x2="450" y2="250" stroke="white" strokeWidth="1"/>
              <line x1="250" y1="50" x2="250" y2="450" stroke="white" strokeWidth="1"/>
              <line x1="110" y1="110" x2="390" y2="390" stroke="white" strokeWidth="1"/>
              <line x1="390" y1="110" x2="110" y2="390" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(197,160,89,0.06), transparent)"}}/>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"/>
              Cross-Border Payment Enablement
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Regulatory-Ready Payments for{" "}
              <span className="text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(90deg, #C5A059, #e8c97a)"}}>
                Africa, Canada, and the World
              </span>
            </h1>
            <p className="text-lg text-white/65 max-w-2xl leading-relaxed mb-10">
              We help businesses and fintechs design, govern, and optimize compliant cross-border payment operations using trusted licensed partners, strong internal controls, and reliable workflow architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://app.corridorbridge.com/signup" className="btn-gold text-sm px-8 py-3.5">
                Start 30-Day Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/contact" className="btn-outline-white text-sm px-8 py-3.5">
                Book a Discovery Call
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
              {[
                { value: "8", label: "Advisory Services" },
                { value: "30", label: "Day Free Trial" },
                { value: "Global", label: "Corridor Coverage" },
                { value: "No Card", label: "Required to Start" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-bold text-amber-400">{value}</div>
                  <div className="text-xs text-white/40 mt-1 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-gray-400 font-medium tracking-wider uppercase mr-2">Compliance-aligned with</span>
          {REGULATORS.map(r => (
            <span key={r} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">How It Works</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-950 mb-4">We bridge the gap between your business and licensed payment infrastructure</h2>
            <p className="text-gray-500 leading-relaxed">CorridorBridge does not move money. We help you choose the right partners, build the controls, and design the workflows that make every cross-border transaction defensible.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW.map(({ num, title, desc }) => (
              <div key={num} className="bg-white border border-gray-100 rounded-2xl p-8 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="absolute top-6 right-6 font-serif text-5xl font-bold text-gray-50 leading-none select-none">{num}</div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background: "linear-gradient(135deg, #0A1E3F, #1e3a8a)"}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">Our Services</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-950 mb-4">Eight ways we help you move money safely across borders</h2>
            <p className="text-gray-500 leading-relaxed">Every engagement is built around your corridor, your regulatory obligations, and your operational reality.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-7 flex gap-5 hover:shadow-md hover:border-amber-200 transition-all duration-200">
                <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-amber-500" style={{background: "#f5ecd8"}}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-950 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-navy text-sm px-8 py-3">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-3">Who We Serve</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-950 mb-4">Built for organizations with real cross-border payment complexity</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SEGMENTS.map(({ tag, title, desc }) => (
              <div key={tag} className="rounded-2xl p-8 text-white" style={{background: "linear-gradient(135deg, #0A1E3F 0%, #1e3a8a 100%)"}}>
                <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">{tag}</div>
                <h3 className="font-bold text-lg mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.07), transparent)"}}/>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Ready to make your cross-border payments regulator-ready?</h2>
          <p className="text-white/60 text-lg mb-10">Join the advisory firms and businesses using CorridorBridge to build compliant, efficient, and auditable payment operations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://app.corridorbridge.com/signup" className="btn-gold px-8 py-4 text-base">
              Start 30-Day Free Trial
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="btn-outline-white px-8 py-4 text-base">Book a Discovery Call</Link>
          </div>
          <p className="text-white/30 text-sm mt-6">30-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>
    </>
  );
}
