import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Institutions — Industry Solutions | CorridorBridge",
  description: "CorridorBridge cross-border infrastructure for banks, credit unions, and financial institutions managing Africa-Canada corridors. AML, KYC, and correspondent banking compliance advisory.",
  keywords: "Financial institutions Africa Canada compliance, correspondent banking AML, bank cross-border FINTRAC",
};

const ALL_INDUSTRIES = [
  {href:"/industries/fintech",label:"Fintech"},
  {href:"/industries/logistics",label:"Logistics"},
  {href:"/industries/import-export",label:"Import & Export"},
  {href:"/industries/government",label:"Government"},
  {href:"/industries/financial-institutions",label:"Financial Institutions"},
];

export default function FinancialInstitutionsPage() {
  const challenges = [
    "Correspondent banking de-risking limiting Africa corridor access",
    "Complex AML and sanctions compliance across dual jurisdictions",
    "KYC/CDD documentation gaps for high-risk corridor customers",
    "Regulatory examination preparation for cross-border activities",
    "Vendor risk management for African correspondent banking partners",
  ];
  const benefits = [
    "Correspondent banking risk framework and de-risking advisory",
    "Dual-jurisdiction AML programme design (FINTRAC + African regulators)",
    "KYC/CDD documentation architecture for corridor customer portfolios",
    "Regulatory examination readiness and evidence pack preparation",
    "African correspondent bank due diligence and risk scoring",
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
                <span style={{color:"#f59e0b"}}>Financial Institutions</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">Cross-Border Compliance Infrastructure for Banks and Financial Services</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">Banks, credit unions, and financial institutions serving Africa-Canada corridors require robust AML, KYC, and correspondent banking risk frameworks that satisfy FINTRAC, OFAC, and African regulatory requirements.</p>
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
                  {/* Bank building */}
                  <polygon points="180,20 340,70 340,75 20,75 20,70" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1.5"/>
                  <line x1="20" y1="175" x2="340" y2="175" stroke="#f59e0b" strokeWidth="1.5"/>
                  {/* Columns */}
                  {[60,100,140,180,220,260,300].map(x => (
                    <rect key={x} x={x-7} y="77" width="14" height="96" rx="2" fill="rgba(245,158,11,0.06)" stroke="#f59e0b" strokeWidth="0.75" strokeOpacity="0.4"/>
                  ))}
                  {/* Compliance gauges */}
                  {[
                    {x:75,y:130,label:"AML",pct:92,color:"#10b981"},
                    {x:180,y:130,label:"KYC",pct:88,color:"#3b82f6"},
                    {x:285,y:130,label:"FATF",pct:95,color:"#C5A059"},
                  ].map(({x,y,label,pct,color}) => (
                    <g key={label}>
                      <circle cx={x} cy={y} r="22" fill="rgba(255,255,255,0.04)" stroke={`${color}30`} strokeWidth="6"/>
                      <circle cx={x} cy={y} r="22" fill="none" stroke={color} strokeWidth="6"
                        strokeDasharray={`${pct * 1.38} 138`} strokeLinecap="round" transform={`rotate(-90 ${x} ${y})`}/>
                      <text x={x} y={y-3} fill={color} fontSize="9" textAnchor="middle" fontWeight="bold">{pct}%</text>
                      <text x={x} y={y+9} fill="white" fontSize="6" textAnchor="middle" opacity="0.6">{label}</text>
                    </g>
                  ))}
                  {/* Regulation badges */}
                  {[
                    {x:75,y:185,label:"FINTRAC"},
                    {x:180,y:185,label:"PCMLTFA"},
                    {x:285,y:185,label:"OFAC"},
                  ].map(({x,y,label}) => (
                    <g key={label}>
                      <rect x={x-28} y={y-9} width="58" height="16" rx="4" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="0.75" strokeOpacity="0.5"/>
                      <text x={x+1} y={y+4} fill="#f59e0b" fontSize="6" textAnchor="middle" fontWeight="bold">{label}</text>
                    </g>
                  ))}
                  <text x="180" y="47" fill="#f59e0b" fontSize="8" textAnchor="middle" fontWeight="bold" opacity="0.8">FINANCIAL INSTITUTION</text>
                  <text x="180" y="61" fill="white" fontSize="6" textAnchor="middle" opacity="0.4">Regulatory-Ready Cross-Border Operations</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8">
          {[{value:"Dual-Jurisdiction",label:"AML Programme Design"},{value:"Exam-Ready",label:"Regulatory Evidence Pack"},{value:"Correspondent Risk",label:"African Bank Due Diligence"},{value:"FATF Aligned",label:"40 Recommendations Coverage"}].map(({value,label}) => (
            <div key={label} className="text-center"><div className="text-blue-950 font-bold text-sm">{value}</div><div className="text-gray-500 text-xs">{label}</div></div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Common Challenges</div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Financial Institutions Need Specialist Infrastructure</h2>
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
              <h2 className="text-3xl font-bold text-blue-950 mb-6">What We Deliver for Financial Institutions</h2>
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
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer Financial Institutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"AML Programme Design",desc:"Dual-jurisdiction AML framework aligned to FINTRAC, PCMLTFA, and African regulatory standards.",href:"/compliance",color:"#10b981"},
              {title:"Compliance Hub",desc:"KYC, CDD, sanctions screening, and FINTRAC governance in one framework.",href:"/compliance",color:"#f59e0b"},
              {title:"Correspondent Risk",desc:"African correspondent bank due diligence, risk scoring, and relationship governance.",href:"/services",color:"#3b82f6"},
              {title:"Advisory Services",desc:"Expert guidance on cross-border banking strategy, regulatory readiness, and risk controls.",href:"/services",color:"#8b5cf6"},
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
            {ALL_INDUSTRIES.filter(i => !i.href.includes("financial-institutions")).map(({href,label}) => (
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
