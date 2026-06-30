import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kenya → Canada Corridor | CorridorBridge",
  description: "The Kenya-Canada corridor connects East Africa's financial hub with Canada. Mobile money integration, CBK compliance, and cross-border payment infrastructure for Kenya-Canada operations.",
  keywords: "Kenya Canada trade, Kenya Canada payments, Kenya Canada corridor compliance, CBK FINTRAC M-Pesa",
};

const OTHER_CORRIDORS = [
  { href: "/corridors/africa-canada", label: "Africa → Canada", sub: "All corridors overview" },
  { href: "/corridors/ghana-canada", label: "Ghana → Canada", sub: "West Africa's stable corridor" },
  { href: "/corridors/nigeria-canada", label: "Nigeria → Canada", sub: "Africa's largest economy" },
];

export default function KenyaCanadaPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Active Corridor</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-4">
                <span style={{color:"#3b82f6"}}>Kenya</span> → Canada
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">East Africa's Financial Innovation Hub</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-8">Kenya's world-leading mobile money ecosystem, progressive fintech regulatory environment, and growing Canadian diaspora make this corridor a high-growth opportunity for businesses ready to navigate its unique compliance requirements.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Discuss This Corridor <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">View Services</Link>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                {[
                  {value:"150K+", label:"Kenyan diaspora in Canada"},
                  {value:"KES / CAD", label:"Primary currencies"},
                  {value:"CBK", label:"Central Bank of Kenya oversight"},
                  {value:"Mobile-First", label:"M-Pesa integration corridor"},
                ].map(({value,label})=>(
                  <div key={label}>
                    <div className="text-xl font-bold" style={{color:"#3b82f6"}}>{value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Live Corridor Map — Kenya ↔ Canada</div>
                <svg viewBox="0 0 380 280" fill="none" className="w-full">
                  <defs>
                    <linearGradient id="ke-ca" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa"/>
                      <stop offset="100%" stopColor="#3b82f6"/>
                    </linearGradient>
                  </defs>
                  {[0,1,2,3].map(i=><line key={i} x1="0" y1={i*70} x2="380" y2={i*70} stroke="white" strokeOpacity="0.03" strokeWidth="1"/>)}
                  <text x="190" y="130" fill="white" fontSize="7" textAnchor="middle" opacity="0.12" letterSpacing="2">INDIAN OCEAN / ATLANTIC</text>
                  <path d="M 30 55 L 130 45 L 155 60 L 150 90 L 125 100 L 80 98 L 40 88 Z" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5"/>
                  <text x="90" y="75" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">CANADA</text>
                  {/* Kenya — East Africa position */}
                  <path d="M 295 158 L 328 148 L 342 165 L 338 198 L 318 210 L 295 202 L 283 185 L 286 165 Z" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5"/>
                  <text x="313" y="182" fill="#3b82f6" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">KENYA</text>
                  {/* Longer route — around Africa */}
                  <path d="M 150 75 Q 200 50 250 80 Q 295 110 310 168" stroke="url(#ke-ca)" strokeWidth="2" strokeOpacity="0.4" fill="none" strokeDasharray="5 3">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.8s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 150 75 Q 185 140 220 165 Q 260 185 310 168" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.15" fill="none" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <circle cx="150" cy="75" r="10" fill="#0A1E3F" stroke="#3b82f6" strokeWidth="2"/>
                  <circle cx="150" cy="75" r="16" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3">
                    <animate attributeName="r" values="10;18;10" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="310" cy="168" r="10" fill="#0A1E3F" stroke="#3b82f6" strokeWidth="2"/>
                  <circle cx="310" cy="168" r="16" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3">
                    <animate attributeName="r" values="10;18;10" dur="2s" begin="0.9s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" begin="0.9s" repeatCount="indefinite"/>
                  </circle>
                  {/* Mobile money icon node */}
                  <circle cx="230" cy="90" r="14" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1"/>
                  <text x="230" y="86" fill="#3b82f6" fontSize="6" textAnchor="middle" fontWeight="bold">M-PESA</text>
                  <text x="230" y="97" fill="#3b82f6" fontSize="5" textAnchor="middle" opacity="0.7">Mobile</text>
                  <circle r="3.5" fill="#C5A059" opacity="0.9"><animateMotion dur="3s" repeatCount="indefinite" path="M 150 75 Q 200 50 250 80 Q 295 110 310 168"/></circle>
                  <circle r="3" fill="#3b82f6" opacity="0.8"><animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 310 168 Q 295 110 250 80 Q 200 50 150 75"/></circle>
                  {[
                    {x:182,y:62,label:"PAYMENTS",color:"#C5A059"},
                    {x:265,y:128,label:"MOBILE",color:"#3b82f6"},
                    {x:182,y:142,label:"COMPLIANCE",color:"#8b5cf6"},
                  ].map(({x,y,label,color})=>(
                    <g key={label}>
                      <rect x={x-28} y={y-8} width="58" height="13" rx="3" fill={`${color}15`} stroke={color} strokeWidth="0.5" strokeOpacity="0.5"/>
                      <text x={x+1} y={y+3} fill={color} fontSize="5.5" textAnchor="middle" fontWeight="700">{label}</text>
                    </g>
                  ))}
                  <rect x="20" y="215" width="340" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="white" strokeOpacity="0.06" strokeWidth="0.5"/>
                  <text x="190" y="230" fill="white" fontSize="7" textAnchor="middle" fontWeight="bold" opacity="0.5">CORRIDOR STATUS</text>
                  {[{x:70,label:"Payments",val:"Active",color:"#10b981"},{x:160,label:"M-Pesa",val:"Integrated",color:"#3b82f6"},{x:250,label:"CBK",val:"Aligned",color:"#10b981"},{x:330,label:"Risk",val:"Low",color:"#C5A059"}].map(({x,label,val,color})=>(
                    <g key={label}>
                      <circle cx={x-18} cy="248" r="2.5" fill={color}><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
                      <text x={x-10} y="244" fill="white" fontSize="5.5" opacity="0.4">{label}</text>
                      <text x={x-10} y="254" fill={color} fontSize="6.5" fontWeight="bold">{val}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Regulatory Framework</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Dual-Jurisdiction Compliance</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Kenya's innovative mobile money ecosystem requires specific integration expertise alongside standard FINTRAC obligations on the Canada side.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div><div className="font-bold text-blue-950">Canada Side</div><div className="text-xs text-gray-500">FINTRAC · PCMLTFA · PIPEDA</div></div>
              </div>
              <div className="space-y-2">
                {["FINTRAC registration and reporting for Kenya corridor","PCMLTFA compliance programme requirements","AML/KYC controls for Canada-Kenya flows","Mobile money integration compliance framework","Source of funds documentation for KES transactions"].map(item=>(
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
                </div>
                <div><div className="font-bold text-blue-950">Kenya Side</div><div className="text-xs text-gray-500">CBK · Capital Markets Authority · FATF</div></div>
              </div>
              <div className="space-y-2">
                {["Central Bank of Kenya National Payments System Act","CBK licensed payment service provider engagement","M-Pesa and mobile money regulatory framework","FATF compliance programme for cross-border operations","Kenya AML/CFT Act alignment for remittance flows"].map(item=>(
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

      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">How We Help</div>
            <h2 className="text-4xl font-bold text-white mb-4">CorridorBridge on the Kenya-Canada Corridor</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"Payment Infrastructure",desc:"Mobile money-integrated partner selection and payment workflow for Kenya-Canada.",href:"/payments",color:"#3b82f6"},
              {title:"Compliance Programme",desc:"FINTRAC, CBK, and mobile money compliance framework for Kenya corridor operations.",href:"/compliance",color:"#10b981"},
              {title:"Shipment Tracking",desc:"Real-time logistics visibility for Kenya-Canada freight and supply chain.",href:"/shipment-tracking",color:"#C5A059"},
              {title:"Advisory Services",desc:"Expert advisory on East Africa corridor strategy, mobile money integration, and risk.",href:"/services",color:"#8b5cf6"},
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



