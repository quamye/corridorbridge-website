import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Africa → Canada Corridor | CorridorBridge",
  description: "CorridorBridge connects businesses across all Africa-Canada corridors. Payment infrastructure, AML/KYC compliance, and cross-border advisory for the entire Africa-Canada trade lane.",
  keywords: "Africa Canada corridor payments, Africa Canada trade compliance, cross-border Africa Canada infrastructure",
};

const CORRIDORS = [
  { href: "/corridors/ghana-canada", label: "Ghana → Canada", sub: "West Africa's most stable corridor", color: "#10b981", stats: ["500K+ diaspora","Bank of Ghana regulated","GHS/CAD flows"] },
  { href: "/corridors/nigeria-canada", label: "Nigeria → Canada", sub: "Africa's largest economy", color: "#f59e0b", stats: ["1M+ diaspora","CBN regulated","High volume flows"] },
  { href: "/corridors/kenya-canada", label: "Kenya → Canada", sub: "East Africa's fintech hub", color: "#3b82f6", stats: ["150K+ diaspora","CBK regulated","Mobile-first"] },
];

export default function AfricaCanadaPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">All Corridors</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-4">
                <span style={{color:"#C5A059"}}>Africa</span> → Canada
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">Cross-Border Infrastructure Across the Entire Corridor</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-8">CorridorBridge operates across all active Africa-Canada trade lanes — connecting businesses, financial institutions, and organizations through unified payment, compliance, and logistics infrastructure.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Discuss Your Corridor <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">View Services</Link>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                {[
                  {value:"3 Active", label:"Africa-Canada corridors"},
                  {value:"1.65M+", label:"African diaspora in Canada"},
                  {value:"FINTRAC", label:"Canada-side compliance"},
                  {value:"FATF", label:"International standards alignment"},
                ].map(({value,label})=>(
                  <div key={label}>
                    <div className="text-xl font-bold" style={{color:"#C5A059"}}>{value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Active Corridor Network — Africa ↔ Canada</div>
                <svg viewBox="0 0 380 280" fill="none" className="w-full">
                  <defs>
                    <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#C5A059" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  {[0,1,2,3].map(i=><line key={i} x1="0" y1={i*70} x2="380" y2={i*70} stroke="white" strokeOpacity="0.03" strokeWidth="1"/>)}
                  {/* Canada hub */}
                  <circle cx="100" cy="95" r="50" fill="url(#hub-glow)"/>
                  <circle cx="100" cy="95" r="28" fill="#0A1E3F" stroke="#3b82f6" strokeWidth="2"/>
                  <text x="100" y="91" fill="#60a5fa" fontSize="7" textAnchor="middle" fontWeight="bold">CANADA</text>
                  <text x="100" y="102" fill="white" fontSize="6" textAnchor="middle" opacity="0.5">Hub</text>
                  {/* Three Africa nodes */}
                  {[
                    {x:290,y:80,label:"GHANA",color:"#10b981",begin:"0s"},
                    {x:320,y:145,label:"NIGERIA",color:"#f59e0b",begin:"0.8s"},
                    {x:300,y:210,label:"KENYA",color:"#3b82f6",begin:"1.6s"},
                  ].map(({x,y,label,color,begin})=>(
                    <g key={label}>
                      <line x1="128" y1="95" x2={x-18} y2={y} stroke={color} strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 3">
                        <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.8s" repeatCount="indefinite"/>
                      </line>
                      <circle cx={x} cy={y} r="18" fill="#0A1E3F" stroke={color} strokeWidth="1.5"/>
                      <circle cx={x} cy={y} r="24" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.25">
                        <animate attributeName="r" values="18;26;18" dur="2s" begin={begin} repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" begin={begin} repeatCount="indefinite"/>
                      </circle>
                      <text x={x} y={y+4} fill={color} fontSize="6.5" textAnchor="middle" fontWeight="bold">{label}</text>
                      {/* Animated payment dot */}
                      <circle r="3" fill={color} opacity="0.9">
                        <animateMotion dur="2.5s" begin={begin} repeatCount="indefinite" path={`M 128 95 L ${x-18} ${y}`}/>
                      </circle>
                      <circle r="2.5" fill="#C5A059" opacity="0.8">
                        <animateMotion dur="2.5s" begin={`${parseFloat(begin)+1.25}s`} repeatCount="indefinite" path={`M ${x-18} ${y} L 128 95`}/>
                      </circle>
                    </g>
                  ))}
                  {/* CorridorBridge label */}
                  <rect x="140" y="130" width="110" height="32" rx="8" fill="rgba(197,160,89,0.1)" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4"/>
                  <text x="195" y="143" fill="#C5A059" fontSize="7" textAnchor="middle" fontWeight="bold">CORRIDORBRIDGE</text>
                  <text x="195" y="154" fill="white" fontSize="5.5" textAnchor="middle" opacity="0.5">Infrastructure Layer</text>
                  {/* Status */}
                  <rect x="20" y="240" width="340" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="white" strokeOpacity="0.06" strokeWidth="0.5"/>
                  {[{x:75,label:"Ghana",color:"#10b981"},{x:155,label:"Nigeria",color:"#f59e0b"},{x:235,label:"Kenya",color:"#3b82f6"},{x:315,label:"Canada",color:"#60a5fa"}].map(({x,label,color})=>(
                    <g key={label}>
                      <circle cx={x-16} cy="255" r="2.5" fill={color}><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
                      <text x={x-8} y="252" fill="white" fontSize="5.5" opacity="0.4">{label}</text>
                      <text x={x-8} y="261" fill={color} fontSize="6" fontWeight="bold">Active</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Active Corridors</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Select Your Corridor</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Each corridor has its own regulatory environment, currency considerations, and compliance requirements. CorridorBridge navigates all of them.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CORRIDORS.map(({href,label,sub,color,stats})=>(
              <Link key={label} href={href} className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 group block">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{background:color}}/>
                  <div className="text-xs font-bold uppercase tracking-wider" style={{color}}>Live</div>
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-1 group-hover:text-amber-600 transition-colors">{label}</h3>
                <div className="text-sm text-gray-500 mb-5">{sub}</div>
                <div className="space-y-2 mb-6">
                  {stats.map(s=>(
                    <div key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-semibold flex items-center gap-1" style={{color}}>
                  Explore this corridor <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Canada-side compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Compliance Framework</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Canada-Side Regulatory Requirements</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Every Africa-Canada corridor shares a common Canada-side regulatory framework that CorridorBridge helps you navigate.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"FINTRAC",desc:"Financial Transactions and Reports Analysis Centre registration, reporting, and record-keeping obligations for all corridors.",color:"#3b82f6"},
              {title:"PCMLTFA",desc:"Proceeds of Crime (Money Laundering) and Terrorist Financing Act compliance programme design and implementation.",color:"#10b981"},
              {title:"PIPEDA",desc:"Personal Information Protection and Electronic Documents Act compliance for customer data handling across all corridors.",color:"#8b5cf6"},
              {title:"FATF",desc:"Financial Action Task Force 40 Recommendations alignment covering AML/CFT programme design for Africa corridor operations.",color:"#C5A059"},
            ].map(({title,desc,color})=>(
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 transition-all" style={{borderTop:`3px solid ${color}`}}>
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color}}>{title}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Platform</div>
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer Across All Corridors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"Payment Infrastructure",desc:"Licensed partner selection and payment workflow design across all Africa-Canada corridors.",href:"/payments",color:"#C5A059"},
              {title:"Compliance Programme",desc:"Corridor-specific AML, KYC, and FINTRAC governance for each Africa-Canada trade lane.",href:"/compliance",color:"#10b981"},
              {title:"Shipment Tracking",desc:"Real-time logistics visibility across all Africa-Canada freight corridors.",href:"/shipment-tracking",color:"#3b82f6"},
              {title:"Advisory Services",desc:"Expert advisory on corridor selection, payment readiness, and cross-border strategy.",href:"/services",color:"#8b5cf6"},
            ].map(({title,desc,href,color})=>(
              <Link key={title} href={href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 block group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background:`${color}20`}}><div className="w-3 h-3 rounded-full" style={{background:color}}/></div>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(197,160,89,0.08),transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to operate on your corridor?</h2>
          <p className="text-white/60 mb-8 text-lg">Tell us which corridor you operate and we will design the right infrastructure for your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Book Corridor Consultation</Link>
            <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}
