import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Africa-Canada Trade Corridors | CorridorBridge",
  description: "CorridorBridge active trade corridors connecting Africa and Canada — Ghana, Nigeria, Kenya, and broader African trade lanes. Payment infrastructure, compliance, and advisory.",
  keywords: "Africa Canada trade corridors, Ghana Canada, Nigeria Canada, Kenya Canada, cross-border trade lanes",
};

const CORRIDORS = [
  { slug:"africa-canada", title:"Africa → Canada", headline:"The Primary Cross-Border Infrastructure Corridor", desc:"The flagship corridor connecting all African markets with Canada — payments, logistics, compliance, and advisory for the full continent.", stats:[{label:"Bilateral Trade",value:"$4B+"},{label:"Diaspora in Canada",value:"1.65M+"}], color:"#C5A059", tag:"Primary Corridor" },
  { slug:"ghana-canada", title:"Ghana → Canada", headline:"West Africa's Most Stable Payment Corridor", desc:"One of West Africa's most dynamic economies connected to Canada with Bank of Ghana oversight and a thriving diaspora community.", stats:[{label:"Ghanaian diaspora",value:"500K+"},{label:"Currency",value:"GHS/CAD"}], color:"#10b981", tag:"Active" },
  { slug:"nigeria-canada", title:"Nigeria → Canada", headline:"Africa's Largest Economy Connected to Canada", desc:"Africa's most populous nation with a dynamic fintech ecosystem and strong bilateral trade with Canadian markets.", stats:[{label:"Nigerian diaspora",value:"1M+"},{label:"Currency",value:"NGN/CAD"}], color:"#f59e0b", tag:"Active" },
  { slug:"kenya-canada", title:"Kenya → Canada", headline:"East Africa's Financial Hub", desc:"Kenya's leadership in mobile money and fintech makes it the strategic entry point for Canadian businesses in East Africa.", stats:[{label:"Kenyan diaspora",value:"150K+"},{label:"Currency",value:"KES/CAD"}], color:"#3b82f6", tag:"Active" },
];

const SERVICES = [
  { title:"Cross-Border Payments", desc:"Licensed partner selection and payment workflow design for each corridor.", href:"/payments", color:"#C5A059",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
  { title:"Compliance", desc:"FINTRAC, AML, KYC, and corridor-specific regulatory alignment.", href:"/compliance", color:"#10b981",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { title:"Shipment Tracking", desc:"Real-time logistics visibility across Africa-Canada freight.", href:"/shipment-tracking", color:"#3b82f6",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { title:"Advisory Services", desc:"Expert guidance on payment readiness, governance, and risk.", href:"/services", color:"#8b5cf6",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
];

export default function CorridorsIndexPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Trade Corridors</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Africa → Canada<br/>
                <span style={{background:"linear-gradient(90deg,#C5A059,#e8c97a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Trade Corridors
                </span>
              </h1>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">CorridorBridge operates across four active Africa-Canada trade lanes — providing payments, compliance, logistics, and advisory infrastructure for each corridor.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Discuss Your Corridor <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">View Services</Link>
              </div>
            </div>
            {/* Mini corridor map */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Active Corridor Network</div>
                <svg viewBox="0 0 360 240" fill="none" className="w-full">
                  <circle cx="95" cy="90" r="28" fill="#0A1E3F" stroke="#3b82f6" strokeWidth="1.5"/>
                  <text x="95" y="87" fill="#60a5fa" fontSize="7" textAnchor="middle" fontWeight="bold">CANADA</text>
                  <text x="95" y="98" fill="white" fontSize="5.5" textAnchor="middle" opacity="0.5">Hub</text>
                  {[
                    {x:280,y:65,label:"GHANA",color:"#10b981",begin:"0s"},
                    {x:310,y:115,label:"NIGERIA",color:"#f59e0b",begin:"0.6s"},
                    {x:295,y:168,label:"KENYA",color:"#3b82f6",begin:"1.2s"},
                  ].map(({x,y,label,color,begin})=>(
                    <g key={label}>
                      <path d={`M 123 90 Q ${(123+x-18)/2} ${Math.min(90,y)-10} ${x-18} ${y}`} stroke={color} strokeWidth="1.5" strokeOpacity="0.35" fill="none" strokeDasharray="5 3">
                        <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.8s" repeatCount="indefinite"/>
                      </path>
                      <circle cx={x} cy={y} r="18" fill="#0A1E3F" stroke={color} strokeWidth="1.5"/>
                      <text x={x} y={y+4} fill={color} fontSize="6" textAnchor="middle" fontWeight="bold">{label}</text>
                      <circle r="3" fill={color} opacity="0.9">
                        <animateMotion dur="2.5s" begin={begin} repeatCount="indefinite" path={`M 123 90 Q ${(123+x-18)/2} ${Math.min(90,y)-10} ${x-18} ${y}`}/>
                      </circle>
                    </g>
                  ))}
                  {/* Africa label */}
                  <rect x="235" y="195" width="105" height="32" rx="6" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.4"/>
                  <text x="288" y="208" fill="#C5A059" fontSize="6.5" textAnchor="middle" fontWeight="bold">AFRICA CORRIDORS</text>
                  <text x="288" y="220" fill="white" fontSize="5.5" textAnchor="middle" opacity="0.4">3 Active · 1 Overview</text>
                  {/* Status */}
                  <rect x="20" y="200" width="200" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="white" strokeOpacity="0.06" strokeWidth="0.5"/>
                  {[{x:55,label:"Payments",color:"#10b981"},{x:115,label:"Compliance",color:"#10b981"},{x:175,label:"Logistics",color:"#C5A059"}].map(({x,label,color})=>(
                    <g key={label}>
                      <circle cx={x-16} cy="215" r="2" fill={color}><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
                      <text x={x-8} y="218" fill={color} fontSize="5.5" fontWeight="600">{label}</text>
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
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Active Corridors</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Four Active Trade Lanes</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Select your corridor to explore corridor-specific payment, compliance, and logistics infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CORRIDORS.map(({slug,title,headline,desc,stats,color,tag})=>(
              <Link key={slug} href={`/corridors/${slug}`}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group block hover:border-amber-200">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full" style={{background:`${color}15`,color}}>{tag}</span>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-1" style={{color}}>{title}</h3>
                <div className="font-semibold text-blue-950 mb-3 text-sm">{headline}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex gap-6 pt-4 border-t border-gray-100">
                  {stats.map(({label,value})=>(
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

      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Platform</div>
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer on Every Corridor</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({title,desc,href,color,icon})=>(
              <Link key={title} href={href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all group block">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">Don&apos;t see your corridor?</h2>
          <p className="text-gray-500 mb-8 text-lg">We are expanding to additional African markets. Contact us to discuss your specific corridor requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 hover:shadow-xl transition-all">Discuss Your Corridor</Link>
            <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}
