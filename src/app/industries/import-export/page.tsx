import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Import & Export — Industry Solutions | CorridorBridge",
  description: "CorridorBridge cross-border infrastructure for importers and exporters operating between Africa and Canada. Payment workflows, compliance documentation, and trade finance advisory.",
  keywords: "Import export Africa Canada payments, cross-border trade compliance, importer exporter FINTRAC",
};

const ALL_INDUSTRIES = [
  {href:"/industries/fintech",label:"Fintech"},
  {href:"/industries/logistics",label:"Logistics"},
  {href:"/industries/import-export",label:"Import & Export"},
  {href:"/industries/government",label:"Government"},
  {href:"/industries/financial-institutions",label:"Financial Institutions"},
];

export default function ImportExportPage() {
  const challenges = [
    "High cross-border payment fees eroding profit margins",
    "Delayed settlements disrupting supplier relationships",
    "Complex import documentation and customs compliance burden",
    "FX exposure and currency volatility across corridors",
    "Inconsistent payment proof and reconciliation gaps",
  ];
  const benefits = [
    "Payment workflow design from invoice to settlement",
    "Licensed partner selection optimized for trade payment corridors",
    "Customs compliance documentation and record-keeping framework",
    "FX exposure advisory and settlement timing optimization",
    "Reconciliation workflow design and audit trail architecture",
  ];

  return (
    <>
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Industry Solutions</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-4">
                <span style={{color:"#C5A059"}}>Import &amp; Export</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">Cross-Border Payment Infrastructure for Traders</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">Importers and exporters operating across the Africa-Canada corridor need clean payment workflows, compliant documentation, and trusted licensed settlement partners to protect margins and relationships.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">View Services</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <svg viewBox="0 0 360 240" fill="none" className="w-full">
                  {/* Trade flow diagram */}
                  {/* Importer box */}
                  <rect x="20" y="80" width="80" height="50" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5"/>
                  <text x="60" y="102" fill="#60a5fa" fontSize="7" textAnchor="middle" fontWeight="bold">CANADA</text>
                  <text x="60" y="114" fill="white" fontSize="6" textAnchor="middle" opacity="0.5">Importer</text>
                  {/* Exporter box */}
                  <rect x="260" y="80" width="80" height="50" rx="8" fill="rgba(197,160,89,0.1)" stroke="#C5A059" strokeWidth="1.5"/>
                  <text x="300" y="102" fill="#C5A059" fontSize="7" textAnchor="middle" fontWeight="bold">AFRICA</text>
                  <text x="300" y="114" fill="white" fontSize="6" textAnchor="middle" opacity="0.5">Exporter</text>
                  {/* CorridorBridge center */}
                  <rect x="130" y="70" width="100" height="70" rx="10" fill="#0A1E3F" stroke="#C5A059" strokeWidth="1.5"/>
                  <text x="180" y="98" fill="#C5A059" fontSize="7" textAnchor="middle" fontWeight="bold">CORRIDOR</text>
                  <text x="180" y="109" fill="white" fontSize="7" textAnchor="middle">BRIDGE</text>
                  <text x="180" y="120" fill="#10b981" fontSize="5.5" textAnchor="middle">● Platform</text>
                  {/* Arrows */}
                  <path d="M 100 95 L 130 95" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arr)"/>
                  <path d="M 230 110 L 260 110" stroke="#C5A059" strokeWidth="1.5" markerEnd="url(#arr2)"/>
                  <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6"/>
                    </marker>
                    <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="#C5A059"/>
                    </marker>
                  </defs>
                  {/* Labels below arrows */}
                  <text x="115" y="90" fill="#3b82f6" fontSize="5.5" textAnchor="middle">Payment</text>
                  <text x="245" y="106" fill="#C5A059" fontSize="5.5" textAnchor="middle">Goods</text>
                  {/* Documents row */}
                  {[
                    {x:80,y:175,label:"Invoice",color:"#C5A059"},
                    {x:155,y:175,label:"Compliance",color:"#8b5cf6"},
                    {x:230,y:175,label:"Settlement",color:"#10b981"},
                    {x:305,y:175,label:"Reconcile",color:"#3b82f6"},
                  ].map(({x,y,label,color}) => (
                    <g key={label}>
                      <rect x={x-30} y={y-14} width="62" height="24" rx="5" fill={`${color}12`} stroke={color} strokeWidth="0.75" strokeOpacity="0.6"/>
                      <text x={x+1} y={y+1} fill={color} fontSize="6.5" textAnchor="middle" fontWeight="600">{label}</text>
                    </g>
                  ))}
                  {/* Flow arrows connecting to doc row */}
                  {[80,155,230,305].map((x,i) => (
                    <line key={x} x1={x} y1="150" x2={x} y2="161" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8">
          {[{value:"Invoice to Settlement",label:"End-to-End Workflow"},{value:"FX Advisory",label:"Currency Risk Management"},{value:"Audit-Ready",label:"Trade Documentation"},{value:"Licensed Partners",label:"Trusted Settlement Rails"}].map(({value,label}) => (
            <div key={label} className="text-center"><div className="text-blue-950 font-bold text-sm">{value}</div><div className="text-gray-500 text-xs">{label}</div></div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Common Challenges</div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Traders Need Specialist Infrastructure</h2>
              <div className="space-y-3">
                {challenges.map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">How CorridorBridge Helps</div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">What We Deliver for Traders</h2>
              <div className="space-y-3">
                {benefits.map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Platform</div>
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer Importers &amp; Exporters</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"Cross-Border Payments",desc:"Licensed partner selection and payment workflow from invoice to settlement.",href:"/payments",color:"#C5A059"},
              {title:"Compliance Programme",desc:"Customs, AML, and FINTRAC compliance documentation for trade flows.",href:"/compliance",color:"#10b981"},
              {title:"Shipment Tracking",desc:"Real-time cargo visibility linked to payment milestones.",href:"/shipment-tracking",color:"#3b82f6"},
              {title:"Advisory Services",desc:"Expert guidance on trade finance, FX risk, and corridor operations.",href:"/services",color:"#8b5cf6"},
            ].map(({title,desc,href,color}) => (
              <Link key={title} href={href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 block group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background:`${color}20`}}>
                  <div className="w-3 h-3 rounded-full" style={{background:color}}/>
                </div>
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
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Other Industries</div>
            <h2 className="text-3xl font-bold text-blue-950">Explore Other Sectors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALL_INDUSTRIES.filter(i => !i.href.includes("import-export")).map(({href,label}) => (
              <Link key={label} href={href} className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all group">
                <div className="text-lg font-bold text-blue-950 mb-2 group-hover:text-amber-600 transition-colors">{label}</div>
                <div className="text-amber-500 text-xs font-semibold flex items-center justify-center gap-1">Explore <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(197,160,89,0.08),transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8 text-lg">Talk to our team about your specific cross-border requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Book a Consultation</Link>
            <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}
