import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government — Industry Solutions | CorridorBridge",
  description: "CorridorBridge cross-border infrastructure for government agencies managing trade compliance and cross-border payment oversight between Africa and Canada.",
  keywords: "Government cross-border payments Africa Canada, FINTRAC government compliance, trade regulatory oversight",
};

const ALL_INDUSTRIES = [
  {href:"/industries/fintech",label:"Fintech"},
  {href:"/industries/logistics",label:"Logistics"},
  {href:"/industries/import-export",label:"Import & Export"},
  {href:"/industries/government",label:"Government"},
  {href:"/industries/financial-institutions",label:"Financial Institutions"},
];

export default function GovernmentPage() {
  const challenges = [
    "Cross-border payment flows lacking audit-ready documentation",
    "Complex regulatory reporting across multiple jurisdictions",
    "Vendor and partner risk management for public sector payments",
    "Disbursement workflows without structured compliance controls",
    "Procurement payment documentation for cross-border suppliers",
  ];
  const benefits = [
    "Audit-ready payment documentation and evidence architecture",
    "Cross-jurisdictional regulatory reporting framework",
    "Vendor and partner due diligence for public sector procurement",
    "Disbursement workflow design with approval and oversight controls",
    "Compliance programme design aligned to FINTRAC and international standards",
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
                <span style={{color:"#3b82f6"}}>Government</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">Cross-Border Payment Governance for Public Sector Organizations</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">Government agencies and public sector organizations require structured, auditable cross-border payment infrastructure with full regulatory documentation and multi-stakeholder oversight.</p>
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
                  {/* Building/institution visual */}
                  <polygon points="180,25 330,80 330,85 30,85 30,80" fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth="1.5"/>
                  <line x1="30" y1="195" x2="330" y2="195" stroke="#3b82f6" strokeWidth="1.5"/>
                  {/* Columns */}
                  {[70,120,170,220,270].map(x => (
                    <rect key={x} x={x-8} y="87" width="16" height="106" rx="2" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4"/>
                  ))}
                  {/* Center door */}
                  <rect x="155" y="145" width="50" height="50" rx="3" fill="rgba(197,160,89,0.15)" stroke="#C5A059" strokeWidth="1.5"/>
                  <text x="180" y="168" fill="#C5A059" fontSize="7" textAnchor="middle" fontWeight="bold">PUBLIC</text>
                  <text x="180" y="179" fill="#C5A059" fontSize="7" textAnchor="middle" fontWeight="bold">SECTOR</text>
                  {/* Compliance badges floating */}
                  {[
                    {x:55,y:130,label:"FINTRAC",color:"#3b82f6"},
                    {x:305,y:130,label:"FATF",color:"#10b981"},
                    {x:55,y:165,label:"AUDIT",color:"#C5A059"},
                    {x:305,y:165,label:"PIPEDA",color:"#8b5cf6"},
                  ].map(({x,y,label,color}) => (
                    <g key={label}>
                      <rect x={x-20} y={y-10} width="42" height="18" rx="4" fill={`${color}15`} stroke={color} strokeWidth="0.75" strokeOpacity="0.6"/>
                      <text x={x+1} y={y+4} fill={color} fontSize="6.5" textAnchor="middle" fontWeight="bold">{label}</text>
                    </g>
                  ))}
                  <text x="180" y="50" fill="#3b82f6" fontSize="8" textAnchor="middle" fontWeight="bold" opacity="0.7">GOVERNMENT</text>
                  <text x="180" y="64" fill="white" fontSize="6.5" textAnchor="middle" opacity="0.4">Cross-Border Payment Governance</text>
                  {/* Check marks */}
                  {[{x:90,y:215},{x:150,y:215},{x:210,y:215},{x:270,y:215}].map(({x,y},i) => (
                    <g key={x}>
                      <circle cx={x} cy={y} r="8" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1"/>
                      <polyline points={`${x-4},${y} ${x-1},${y+3} ${x+4},${y-3}`} stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8">
          {[{value:"Audit-Ready",label:"Documentation Architecture"},{value:"Multi-Layer",label:"Approval Controls"},{value:"FINTRAC Aligned",label:"Regulatory Reporting"},{value:"Transparent",label:"Full Payment Traceability"}].map(({value,label}) => (
            <div key={label} className="text-center"><div className="text-blue-950 font-bold text-sm">{value}</div><div className="text-gray-500 text-xs">{label}</div></div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Common Challenges</div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Government Agencies Need Specialist Infrastructure</h2>
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
              <h2 className="text-3xl font-bold text-blue-950 mb-6">What We Deliver for Government</h2>
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
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer Government Agencies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"Governance Framework",desc:"Approval matrices, oversight controls, and audit trail architecture for public payments.",href:"/compliance",color:"#3b82f6"},
              {title:"Compliance Programme",desc:"FINTRAC, AML, and multi-jurisdictional regulatory compliance programme.",href:"/compliance",color:"#10b981"},
              {title:"Vendor Due Diligence",desc:"Structured vendor risk assessment for cross-border supplier relationships.",href:"/services",color:"#C5A059"},
              {title:"Advisory Services",desc:"Expert guidance on public sector cross-border payment governance.",href:"/services",color:"#8b5cf6"},
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
            {ALL_INDUSTRIES.filter(i => !i.href.includes("government")).map(({href,label}) => (
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
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}



