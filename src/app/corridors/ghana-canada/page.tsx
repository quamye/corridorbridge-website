import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ghana → Canada Corridor | CorridorBridge",
  description: "The Ghana-Canada corridor connects West Africa's most stable economy with Canada. Expert payment infrastructure, AML/KYC compliance, and trade advisory for Ghana-Canada cross-border operations.",
  keywords: "Ghana Canada trade, Ghana Canada payments, Ghana Canada corridor compliance, FINTRAC Ghana",
};

const OTHER_CORRIDORS = [
  { href: "/corridors/africa-canada", label: "Africa → Canada", sub: "All corridors overview" },
  { href: "/corridors/nigeria-canada", label: "Nigeria → Canada", sub: "West Africa's largest economy" },
  { href: "/corridors/kenya-canada", label: "Kenya → Canada", sub: "East Africa gateway" },
];

export default function GhanaCanadaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Active Corridor</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-4">
                <span style={{color:"#10b981"}}>Ghana</span> → Canada
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">West Africa's Most Stable Payment Corridor</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-8">The Ghana-Canada corridor connects one of West Africa's most dynamic economies with Canada's growing diaspora community. With 500,000+ Ghanaians in Canada and expanding bilateral trade, this corridor demands expert payment and compliance infrastructure.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Discuss This Corridor
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">View Services</Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                {[
                  {value:"500K+", label:"Ghanaian diaspora in Canada"},
                  {value:"GHS / CAD", label:"Primary currencies"},
                  {value:"Bank of Ghana", label:"African regulatory oversight"},
                  {value:"1–3 days", label:"Target settlement time"},
                ].map(({value,label}) => (
                  <div key={label}>
                    <div className="text-xl font-bold" style={{color:"#10b981"}}>{value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corridor SVG map */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Live Corridor Map — Ghana ↔ Canada</div>
                <svg viewBox="0 0 380 280" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gh-ca" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa"/>
                      <stop offset="100%" stopColor="#10b981"/>
                    </linearGradient>
                  </defs>
                  {/* Grid */}
                  {[0,1,2,3].map(i=><line key={i} x1="0" y1={i*70} x2="380" y2={i*70} stroke="white" strokeOpacity="0.03" strokeWidth="1"/>)}
                  {/* Atlantic */}
                  <text x="190" y="155" fill="white" fontSize="7" textAnchor="middle" opacity="0.15" letterSpacing="2">ATLANTIC OCEAN</text>
                  {/* Canada landmass */}
                  <path d="M 30 55 L 130 45 L 155 60 L 150 90 L 125 100 L 80 98 L 40 88 Z" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5"/>
                  <text x="90" y="75" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">CANADA</text>
                  {/* Ghana landmass */}
                  <path d="M 275 130 L 305 125 L 318 140 L 315 175 L 298 188 L 278 182 L 268 165 L 270 145 Z" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5"/>
                  <text x="293" y="158" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">GHANA</text>
                  {/* Corridor lines */}
                  <path d="M 150 75 Q 220 110 268 155" stroke="url(#gh-ca)" strokeWidth="2" strokeOpacity="0.5" fill="none" strokeDasharray="5 3">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 145 82 Q 218 118 265 158" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" fill="none" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite"/>
                  </path>
                  {/* Canada node */}
                  <circle cx="150" cy="75" r="10" fill="#0A1E3F" stroke="#3b82f6" strokeWidth="2"/>
                  <circle cx="150" cy="75" r="16" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3">
                    <animate attributeName="r" values="10;18;10" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  {/* Ghana node */}
                  <circle cx="268" cy="155" r="10" fill="#0A1E3F" stroke="#10b981" strokeWidth="2"/>
                  <circle cx="268" cy="155" r="16" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3">
                    <animate attributeName="r" values="10;18;10" dur="2s" begin="0.8s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" begin="0.8s" repeatCount="indefinite"/>
                  </circle>
                  {/* Animated payment dots */}
                  <circle r="3" fill="#C5A059" opacity="0.9">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 150 75 Q 220 110 268 155"/>
                  </circle>
                  <circle r="3" fill="#10b981" opacity="0.9">
                    <animateMotion dur="2.5s" begin="1.25s" repeatCount="indefinite" path="M 268 155 Q 220 110 150 75"/>
                  </circle>
                  <circle r="2" fill="#60a5fa" opacity="0.7">
                    <animateMotion dur="3.5s" begin="0.5s" repeatCount="indefinite" path="M 150 75 Q 220 110 268 155"/>
                  </circle>
                  {/* Flow labels */}
                  {[
                    {x:205,y:100,label:"PAYMENTS",color:"#C5A059"},
                    {x:205,y:120,label:"COMPLIANCE",color:"#8b5cf6"},
                    {x:205,y:140,label:"LOGISTICS",color:"#10b981"},
                  ].map(({x,y,label,color})=>(
                    <g key={label}>
                      <rect x={x-28} y={y-8} width="58" height="13" rx="3" fill={`${color}15`} stroke={color} strokeWidth="0.5" strokeOpacity="0.5"/>
                      <text x={x+1} y={y+3} fill={color} fontSize="5.5" textAnchor="middle" fontWeight="700">{label}</text>
                    </g>
                  ))}
                  {/* Status strip */}
                  <rect x="20" y="210" width="340" height="55" rx="8" fill="rgba(255,255,255,0.03)" stroke="white" strokeOpacity="0.06" strokeWidth="0.5"/>
                  <text x="190" y="226" fill="white" fontSize="7" textAnchor="middle" fontWeight="bold" opacity="0.5">CORRIDOR STATUS</text>
                  {[
                    {x:70,label:"Payments",val:"Active",color:"#10b981"},
                    {x:160,label:"Compliance",val:"Verified",color:"#10b981"},
                    {x:250,label:"Logistics",val:"Live",color:"#10b981"},
                    {x:330,label:"Risk",val:"Low",color:"#C5A059"},
                  ].map(({x,label,val,color})=>(
                    <g key={label}>
                      <circle cx={x-18} cy="244" r="2.5" fill={color}><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
                      <text x={x-10} y="240" fill="white" fontSize="5.5" opacity="0.4">{label}</text>
                      <text x={x-10} y="251" fill={color} fontSize="6.5" fontWeight="bold">{val}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory context */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Regulatory Framework</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Dual-Jurisdiction Compliance</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Operating this corridor requires compliance on both sides. CorridorBridge navigates both regulatory environments.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div className="font-bold text-blue-950">Canada Side</div>
                  <div className="text-xs text-gray-500">FINTRAC · PCMLTFA · PIPEDA</div>
                </div>
              </div>
              <div className="space-y-2">
                {["FINTRAC registration and reporting obligations","PCMLTFA compliance programme requirements","AML/KYC controls for Canada-Ghana flows","PIPEDA data protection for customer records","Sanctions screening against Canadian lists"].map(item=>(
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
                </div>
                <div>
                  <div className="font-bold text-blue-950">Ghana Side</div>
                  <div className="text-xs text-gray-500">Bank of Ghana · FATF · AML Act</div>
                </div>
              </div>
              <div className="space-y-2">
                {["Bank of Ghana Payment Systems and Services Act","FATF 40 Recommendations alignment","Ghana AML Act compliance programme","Licensed PSP partner verification","Bank of Ghana approved provider engagement"].map(item=>(
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">How We Help</div>
            <h2 className="text-4xl font-bold text-white mb-4">CorridorBridge on the Ghana-Canada Corridor</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"Payment Infrastructure",desc:"Licensed partner selection, workflow design, and settlement tracking for Ghana-Canada payments.",href:"/payments",color:"#C5A059"},
              {title:"Compliance Programme",desc:"FINTRAC, AML, KYC, and corridor-specific regulatory alignment for Ghana-Canada operations.",href:"/compliance",color:"#10b981"},
              {title:"Shipment Tracking",desc:"Real-time logistics visibility across Ghana-Canada freight and trade shipments.",href:"/shipment-tracking",color:"#3b82f6"},
              {title:"Advisory Services",desc:"Expert advisory on payment readiness, governance, and cross-border strategy for this corridor.",href:"/services",color:"#8b5cf6"},
            ].map(({title,desc,href,color})=>(
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

      {/* Other corridors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Other Corridors</div>
            <h2 className="text-3xl font-bold text-blue-950">Explore Other Trade Lanes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {OTHER_CORRIDORS.map(({href,label,sub})=>(
              <Link key={label} href={href} className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all group">
                <div className="text-lg font-bold text-blue-950 mb-1 group-hover:text-amber-600 transition-colors">{label}</div>
                <div className="text-xs text-gray-400 mb-3">{sub}</div>
                <div className="text-amber-500 text-xs font-semibold flex items-center justify-center gap-1">Explore corridor <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(197,160,89,0.08),transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to operate on this corridor?</h2>
          <p className="text-white/60 mb-8 text-lg">Book a corridor consultation — we will design the right payment, compliance, and logistics infrastructure for your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Book Corridor Consultation</Link>
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}



