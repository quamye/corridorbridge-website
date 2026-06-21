import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry Solutions | CorridorBridge",
  description: "CorridorBridge serves fintechs, logistics providers, importers, exporters, government agencies, and financial institutions across Africa-Canada corridors.",
  keywords: "cross-border fintech compliance, logistics Africa Canada, importer exporter payments, government cross-border",
};

const INDUSTRIES = [
  { name:"Fintech", href:"/industries/fintech", desc:"Governance structuring, operating model review, AML/KYC compliance frameworks, and enterprise readiness for fintechs expanding across corridors.", color:"#8b5cf6",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { name:"Logistics", href:"/industries/logistics", desc:"Shipment tracking integration, payment-logistics workflow design, customs compliance documentation, and exception management.", color:"#10b981",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { name:"Import & Export", href:"/industries/import-export", desc:"Invoice-to-settlement workflows, licensed partner selection, FX exposure advisory, and reconciliation design for traders.", color:"#C5A059",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
  { name:"Government", href:"/industries/government", desc:"Audit-ready documentation, multi-layer approval controls, FINTRAC-aligned reporting, and vendor risk management for public sector.", color:"#3b82f6",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg> },
  { name:"Financial Institutions", href:"/industries/financial-institutions", desc:"Dual-jurisdiction AML programme, correspondent banking risk framework, KYC/CDD architecture, and regulatory exam readiness.", color:"#f59e0b",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Industries</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Built for<br/>
                <span style={{background:"linear-gradient(90deg,#C5A059,#e8c97a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Your Industry
                </span>
              </h1>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">Cross-border infrastructure solutions tailored to each industry's regulatory, operational, and compliance requirements across Africa-Canada corridors.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/solutions" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">View Solutions</Link>
              </div>
            </div>
            {/* Industry SVG visual */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">Industries We Serve</div>
                <svg viewBox="0 0 360 240" fill="none" className="w-full">
                  {/* Central platform */}
                  <circle cx="180" cy="120" r="35" fill="#0A1E3F" stroke="#C5A059" strokeWidth="1.5"/>
                  <text x="180" y="116" fill="#C5A059" fontSize="7" textAnchor="middle" fontWeight="bold">CORRIDOR</text>
                  <text x="180" y="127" fill="white" fontSize="6" textAnchor="middle" opacity="0.7">BRIDGE</text>
                  {/* 5 industry nodes */}
                  {[
                    {x:180,y:30,label:"Fintech",color:"#8b5cf6"},
                    {x:305,y:80,label:"Logistics",color:"#10b981"},
                    {x:280,y:200,label:"Fin. Inst.",color:"#f59e0b"},
                    {x:80,y:200,label:"Gov.",color:"#3b82f6"},
                    {x:55,y:80,label:"Trade",color:"#C5A059"},
                  ].map(({x,y,label,color},i)=>(
                    <g key={label}>
                      <line x1={180} y1={120} x2={x} y2={y} stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3">
                        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur={`${1.5+i*0.2}s`} repeatCount="indefinite"/>
                      </line>
                      <circle cx={x} cy={y} r="20" fill="#0A1E3F" stroke={color} strokeWidth="1.5"/>
                      <text x={x} y={y+4} fill={color} fontSize="6" textAnchor="middle" fontWeight="bold">{label}</text>
                      <circle r="2.5" fill={color} opacity="0.8">
                        <animateMotion dur={`${2+i*0.3}s`} begin={`${i*0.3}s`} repeatCount="indefinite" path={`M ${x} ${y} L 180 120`}/>
                      </circle>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Industry Solutions</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Five Industry Verticals</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Each industry has unique regulatory, operational, and compliance challenges. CorridorBridge builds solutions specific to each.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map(({name,href,desc,color,icon})=>(
              <Link key={name} href={href} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all block group" style={{borderTop:`3px solid ${color}`}}>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <h3 className="font-bold text-blue-950 text-xl mb-3 group-hover:text-amber-600 transition-colors">{name}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{desc}</p>
                <span className="text-xs font-semibold flex items-center gap-1" style={{color}}>
                  Explore solutions <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(197,160,89,0.08),transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Don&apos;t see your industry?</h2>
          <p className="text-white/60 mb-8 text-lg">CorridorBridge serves a wide range of organizations across Africa-Canada corridors. Contact us to discuss your specific requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Talk to an Expert</Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">View All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
