import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Ecosystem — CorridorBridge",
  description: "The CorridorBridge partner ecosystem — banking partners, fintech partners, compliance partners, technology partners, logistics partners, and institutional partners for Africa-Canada corridors.",
  keywords: "CorridorBridge partners, cross-border payment partners, Africa Canada trade partners, fintech ecosystem",
};

const PARTNER_CATEGORIES = [
  {
    category: "Banking Partners",
    color: "#C5A059",
    desc: "Licensed banks and financial institutions providing payment rails, correspondent banking, and trade finance across Africa-Canada corridors.",
    how: "Banking partners provide the licensed infrastructure through which cross-border payments are executed. CorridorBridge evaluates, selects, and governs relationships with banking partners on behalf of clients.",
    examples: ["Canadian Schedule I and II banks", "Ghanaian commercial banks", "Nigerian tier-1 banks", "Kenyan licensed institutions"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>,
  },
  {
    category: "Fintech Partners",
    color: "#10b981",
    desc: "Licensed fintech companies providing cross-border payment technology, mobile money integration, and digital payment infrastructure.",
    how: "Fintech partners extend payment capabilities across corridors where traditional banks have limited reach — particularly for mobile money, digital wallets, and last-mile payment delivery.",
    examples: ["Ghana mobile money providers", "Nigeria fintech payment processors", "East Africa mobile money operators", "Canadian payment fintechs"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    category: "Compliance Partners",
    color: "#8b5cf6",
    desc: "Compliance technology providers, legal advisors, and regulatory specialists supporting AML, KYC, and cross-border compliance programmes.",
    how: "Compliance partners provide specialized tools, legal expertise, and regulatory intelligence that strengthens the compliance programmes CorridorBridge designs and manages.",
    examples: ["AML screening providers", "KYC technology platforms", "Regulatory legal advisors", "Compliance training providers"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    category: "Technology Partners",
    color: "#3b82f6",
    desc: "Cloud, API, and technology infrastructure providers underpinning the CorridorBridge platform and client integrations.",
    how: "Technology partners provide the cloud infrastructure, API connectivity, and integration capabilities that power the CorridorBridge platform.",
    examples: ["Cloud infrastructure providers", "API integration platforms", "Data and analytics providers", "Security technology providers"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    category: "Logistics Partners",
    color: "#f59e0b",
    desc: "Freight, customs, and logistics providers supporting shipment tracking and trade operations across Africa-Canada corridors.",
    how: "Logistics partners provide freight, customs brokerage, and shipment tracking capabilities that connect physical trade flows to the CorridorBridge payment and compliance platform.",
    examples: ["International freight carriers", "Customs brokers", "Freight forwarders", "Port logistics operators"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    category: "Institutional Partners",
    color: "#06b6d4",
    desc: "Development finance institutions, trade bodies, chambers of commerce, and multilateral organizations supporting Africa-Canada trade.",
    how: "Institutional partners provide market access, trade facilitation, and development finance capabilities that expand the reach and impact of CorridorBridge's cross-border infrastructure.",
    examples: ["Development finance institutions", "Trade promotion bodies", "Chambers of commerce", "Multilateral trade organizations"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>,
  },
];

const PARTNERSHIP_BENEFITS = [
  { title: "Enhanced Compliance", desc: "All partner relationships governed by CorridorBridge compliance standards — AML, KYC, and FINTRAC aligned from day one.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { title: "Improved Scalability", desc: "Access to a growing ecosystem of cross-border capabilities without managing multiple vendor relationships independently.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { title: "Risk Reduction", desc: "All partners undergo CorridorBridge vendor risk assessment — reducing third-party risk for clients across all corridors.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { title: "Corridor Coverage", desc: "Partner ecosystem specifically built for Africa-Canada corridors — not generic global partnerships.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg> },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Partner Ecosystem</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                The CorridorBridge<br/>
                <span style={{background:"linear-gradient(90deg,#C5A059,#e8c97a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Partner Ecosystem
                </span>
              </h1>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">
                CorridorBridge operates through a curated ecosystem of banking, fintech, compliance, technology, logistics, and institutional partners — all evaluated and governed to meet our compliance standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Become a Partner
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Request Partnership Meeting
                </Link>
              </div>
            </div>

            {/* Partner ecosystem visual */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">Curated Partner Network</div>
                <svg viewBox="0 0 360 260" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="pcenter" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#C5A059" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  {/* Hub */}
                  <circle cx="180" cy="130" r="50" fill="url(#pcenter)"/>
                  <circle cx="180" cy="130" r="32" fill="#0A1E3F" stroke="#C5A059" strokeWidth="1.5"/>
                  <text x="180" y="126" fill="#C5A059" fontSize="7" textAnchor="middle" fontWeight="bold">CORRIDOR</text>
                  <text x="180" y="137" fill="white" fontSize="6" textAnchor="middle" opacity="0.7">BRIDGE</text>
                  {/* 6 partner nodes */}
                  {[
                    {x:180,y:30,label:"Banking",color:"#C5A059"},
                    {x:300,y:80,label:"Fintech",color:"#10b981"},
                    {x:310,y:185,label:"Compliance",color:"#8b5cf6"},
                    {x:180,y:228,label:"Logistics",color:"#f59e0b"},
                    {x:55,y:185,label:"Tech",color:"#3b82f6"},
                    {x:50,y:80,label:"Institutional",color:"#06b6d4"},
                  ].map(({x,y,label,color},i)=>(
                    <g key={label}>
                      {/* Spoke line */}
                      <line x1={180} y1={130} x2={x} y2={y}
                        stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3">
                        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur={`${1.5+i*0.2}s`} repeatCount="indefinite"/>
                      </line>
                      {/* Node */}
                      <circle cx={x} cy={y} r="20" fill="#0A1E3F" stroke={color} strokeWidth="1.5"/>
                      <circle cx={x} cy={y} r="26" fill="none" stroke={color} strokeWidth="0.75" strokeOpacity="0.2">
                        <animate attributeName="r" values="20;28;20" dur={`${2+i*0.3}s`} begin={`${i*0.4}s`} repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.2;0;0.2" dur={`${2+i*0.3}s`} begin={`${i*0.4}s`} repeatCount="indefinite"/>
                      </circle>
                      <text x={x} y={y+4} fill={color} fontSize="6" textAnchor="middle" fontWeight="bold">{label}</text>
                      {/* Animated dot */}
                      <circle r="2.5" fill={color} opacity="0.8">
                        <animateMotion dur={`${2+i*0.3}s`} begin={`${i*0.3}s`} repeatCount="indefinite"
                          path={`M ${x} ${y} L 180 130`}/>
                      </circle>
                    </g>
                  ))}
                  {/* Stats strip */}
                  <rect x="20" y="240" width="320" height="14" rx="4" fill="rgba(255,255,255,0.03)" stroke="white" strokeOpacity="0.06" strokeWidth="0.5"/>
                  {[{x:70,label:"6 Categories",color:"#C5A059"},{x:180,label:"Due Diligence Required",color:"#10b981"},{x:295,label:"FINTRAC Aligned",color:"#3b82f6"}].map(({x,label,color})=>(
                    <g key={label}>
                      <circle cx={x-22} cy="247" r="2" fill={color} opacity="0.8"/>
                      <text x={x-16} y="250" fill={color} fontSize="5.5" fontWeight="600">{label}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Why It Matters</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">How Our Partner Ecosystem Benefits You</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTNERSHIP_BENEFITS.map(({title,desc,icon})=>(
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-amber-200 transition-all group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <h3 className="font-bold text-blue-950 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Partner Categories</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Six Partner Categories</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Every partner in the CorridorBridge ecosystem undergoes due diligence and is evaluated against our compliance standards before engagement.</p>
          </div>
          <div className="space-y-5">
            {PARTNER_CATEGORIES.map(({category,color,desc,how,examples,icon})=>(
              <div key={category} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-amber-200 transition-all" style={{borderLeft:`4px solid ${color}`}}>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:`${color}15`}}>
                        {icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-950">{category}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">How They Help</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{how}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Partner Types</div>
                    <ul className="space-y-2">
                      {examples.map(e=>(
                        <li key={e} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:color}}/>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-20 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(197,160,89,0.08),transparent)"}}/>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Join the Ecosystem</div>
          <h2 className="text-4xl font-bold text-white mb-6">Become a CorridorBridge Partner</h2>
          <p className="text-white/60 text-lg mb-8">If you are a bank, fintech, compliance provider, technology company, logistics operator, or institutional organization operating across Africa-Canada corridors — we want to hear from you.</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            {["Access to CorridorBridge client network","Joint marketing and co-branding opportunities","Inclusion in partner ecosystem directory","Corridor-specific business development support"].map(b=>(
              <div key={b} className="flex items-center gap-2.5 text-sm text-white/70 text-left">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {b}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Become a Partner</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Request Partnership Meeting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
