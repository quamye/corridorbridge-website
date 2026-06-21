import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logistics — Industry Solutions | CorridorBridge",
  description: "CorridorBridge cross-border infrastructure for logistics and freight providers operating between Africa and Canada. Shipment tracking, payment integration, and compliance advisory.",
  keywords: "Logistics cross-border payments, Africa Canada freight compliance, logistics shipment tracking",
};

const ALL_INDUSTRIES = [
  {href:"/industries/fintech",label:"Fintech"},
  {href:"/industries/logistics",label:"Logistics"},
  {href:"/industries/import-export",label:"Import & Export"},
  {href:"/industries/government",label:"Government"},
  {href:"/industries/financial-institutions",label:"Financial Institutions"},
];

export default function LogisticsPage() {
  const challenges = [
    "Fragmented systems disconnecting shipment and payment data",
    "Manual customs documentation causing clearance delays",
    "Exception management handled outside any unified system",
    "Partner payment settlement complexity across corridors",
    "No unified visibility across supply chain and financial flows",
  ];
  const benefits = [
    "Shipment tracking workflow design and integration advisory",
    "Payment-logistics integration connecting your freight and finance",
    "Customs compliance documentation framework",
    "Exception management process design and escalation workflows",
    "Partner settlement workflow optimization across corridors",
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
                <span style={{color:"#10b981"}}>Logistics</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">Cross-Border Infrastructure for Freight and Logistics Providers</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">Logistics companies managing Africa-Canada freight need operational infrastructure connecting shipment tracking, payment workflows, and compliance documentation in one system.</p>
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
                  {/* Route line */}
                  <path d="M 40 120 Q 180 60 320 120" stroke="#10b981" strokeWidth="2" strokeDasharray="6 3" fill="none" opacity="0.4"/>
                  <path d="M 40 120 Q 180 180 320 120" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 3" fill="none" opacity="0.4"/>
                  {/* Canada */}
                  <circle cx="40" cy="120" r="22" fill="#0A1E3F" stroke="#3b82f6" strokeWidth="2"/>
                  <text x="40" y="117" fill="#60a5fa" fontSize="7" textAnchor="middle" fontWeight="bold">CANADA</text>
                  <text x="40" y="127" fill="white" fontSize="6" textAnchor="middle" opacity="0.5">Origin</text>
                  {/* Ghana */}
                  <circle cx="320" cy="120" r="22" fill="#0A1E3F" stroke="#10b981" strokeWidth="2"/>
                  <text x="320" y="117" fill="#10b981" fontSize="7" textAnchor="middle" fontWeight="bold">GHANA</text>
                  <text x="320" y="127" fill="white" fontSize="6" textAnchor="middle" opacity="0.5">Dest.</text>
                  {/* Checkpoint nodes */}
                  {[{x:110,y:88,label:"Port",color:"#C5A059"},{x:180,y:72,label:"Ocean",color:"#3b82f6"},{x:250,y:88,label:"Customs",color:"#f59e0b"}].map(({x,y,label,color}) => (
                    <g key={label}>
                      <circle cx={x} cy={y} r="14" fill={`${color}15`} stroke={color} strokeWidth="1.5"/>
                      <text x={x} y={y+4} fill={color} fontSize="6.5" textAnchor="middle" fontWeight="600">{label}</text>
                    </g>
                  ))}
                  {/* Animated truck */}
                  <g>
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 40 120 Q 180 60 320 120"/>
                    <rect x="-10" y="-6" width="18" height="10" rx="2" fill="#10b981" opacity="0.9"/>
                    <rect x="8" y="-4" width="8" height="8" rx="1" fill="#10b981" opacity="0.7"/>
                  </g>
                  {/* Payment flow */}
                  <circle r="3" fill="#C5A059" opacity="0.9">
                    <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M 320 120 Q 180 180 40 120"/>
                  </circle>
                  {/* Status strip */}
                  <rect x="60" y="195" width="240" height="35" rx="8" fill="rgba(255,255,255,0.04)" stroke="white" strokeOpacity="0.08" strokeWidth="0.5"/>
                  {[{x:110,label:"Tracking",val:"Live",color:"#10b981"},{x:180,label:"Payment",val:"Linked",color:"#C5A059"},{x:250,label:"Customs",val:"Clear",color:"#10b981"}].map(({x,label,val,color}) => (
                    <g key={label}>
                      <circle cx={x-18} cy="208" r="2.5" fill={color} opacity="0.8"/>
                      <text x={x-10} y="205" fill="white" fontSize="5.5" opacity="0.4">{label}</text>
                      <text x={x-10} y="215" fill={color} fontSize="7" fontWeight="bold">{val}</text>
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
          {[{value:"End-to-End",label:"Shipment Visibility"},{value:"Integrated",label:"Payment-Logistics Flow"},{value:"Automated",label:"Customs Documentation"},{value:"Real-Time",label:"Exception Management"}].map(({value,label}) => (
            <div key={label} className="text-center"><div className="text-blue-950 font-bold text-sm">{value}</div><div className="text-gray-500 text-xs">{label}</div></div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Common Challenges</div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Logistics Needs Specialist Infrastructure</h2>
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
              <h2 className="text-3xl font-bold text-blue-950 mb-6">What We Deliver for Logistics</h2>
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
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer Logistics Providers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"Shipment Tracking",desc:"Real-time logistics visibility connected to payment workflows.",href:"/shipment-tracking",color:"#10b981"},
              {title:"Payment Infrastructure",desc:"Licensed partner selection and payment workflow design.",href:"/payments",color:"#C5A059"},
              {title:"Compliance Programme",desc:"Customs, AML, and FINTRAC governance for cross-border freight.",href:"/compliance",color:"#8b5cf6"},
              {title:"Advisory Services",desc:"Expert guidance on logistics-finance integration and risk.",href:"/services",color:"#3b82f6"},
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
            {ALL_INDUSTRIES.filter(i => !i.href.includes("logistics")).map(({href,label}) => (
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
