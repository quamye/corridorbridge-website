import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fintech — Industry Solutions | CorridorBridge",
  description: "CorridorBridge cross-border infrastructure for Fintechs expanding between Africa and Canada. Governance, compliance frameworks, operating model design, and enterprise readiness advisory.",
  keywords: "Fintech cross-border payments, Fintech Africa Canada compliance, cross-border Fintech governance",
};

const ALL_INDUSTRIES = [
  { href: "/industries/fintech", label: "Fintech" },
  { href: "/industries/logistics", label: "Logistics" },
  { href: "/industries/import-export", label: "Import & Export" },
  { href: "/industries/government", label: "Government" },
  { href: "/industries/financial-institutions", label: "Financial Institutions" },
];

export default function FintechPage() {
  const challenges = [
    "Enterprise clients demand governance documentation before signing",
    "Regulatory scrutiny of cross-border payment operating models",
    "Operating model gaps limiting scalability into new markets",
    "Partner and vendor risk management immaturity",
    "Compliance credibility gaps when entering regulated corridors",
  ];
  const benefits = [
    "Governance structuring and documentation package",
    "Payment operating model review and redesign",
    "AML and KYC compliance framework tailored to your corridor",
    "Enterprise readiness advisory for institutional clients",
    "Regulatory alignment support across Canada and Africa",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Industry Solutions</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-4">
                <span style={{color:"#8b5cf6"}}>Fintech</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 mb-6">Cross-Border Infrastructure for Financial Technology Companies</h2>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">Fintechs expanding between Africa and Canada need governance, operating models, and compliance frameworks that satisfy enterprise clients and regulators on both sides of the corridor.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Talk to an Expert
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  View Services
                </Link>
              </div>
            </div>
            {/* Hero SVG illustration */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <svg viewBox="0 0 360 260" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Platform nodes */}
                  <polygon points="180,30 310,105 310,185 180,230 50,185 50,105" fill="rgba(139,92,246,0.06)" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.4"/>
                  {/* Inner hex */}
                  <polygon points="180,70 260,115 260,165 180,190 100,165 100,115" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="1.5"/>
                  {/* Center */}
                  <circle cx="180" cy="130" r="28" fill="#0A1E3F" stroke="#C5A059" strokeWidth="2"/>
                  <text x="180" y="126" fill="#C5A059" fontSize="8" textAnchor="middle" fontWeight="bold">CORRIDOR</text>
                  <text x="180" y="137" fill="white" fontSize="7" textAnchor="middle" opacity="0.8">BRIDGE</text>
                  {/* Node labels */}
                  {[
                    {x:180, y:48, label:"API", color:"#8b5cf6"},
                    {x:300, y:118, label:"KYC", color:"#10b981"},
                    {x:300, y:168, label:"AML", color:"#C5A059"},
                    {x:180, y:215, label:"FINTRAC", color:"#3b82f6"},
                    {x:60, y:168, label:"PSP", color:"#f59e0b"},
                    {x:60, y:118, label:"RISK", color:"#ef4444"},
                  ].map(({x,y,label,color}) => (
                    <g key={label}>
                      <circle cx={x} cy={y} r="18" fill={`${color}15`} stroke={color} strokeWidth="1.5"/>
                      <text x={x} y={y+4} fill={color} fontSize="7" textAnchor="middle" fontWeight="bold">{label}</text>
                    </g>
                  ))}
                  {/* Animated dots */}
                  <circle r="3" fill="#8b5cf6" opacity="0.9">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 180 48 L 180 102"/>
                  </circle>
                  <circle r="3" fill="#10b981" opacity="0.9">
                    <animateMotion dur="2.5s" begin="0.5s" repeatCount="indefinite" path="M 300 118 L 208 130"/>
                  </circle>
                  <circle r="3" fill="#C5A059" opacity="0.9">
                    <animateMotion dur="2.8s" begin="1s" repeatCount="indefinite" path="M 180 215 L 180 158"/>
                  </circle>
                  {/* Stats strip */}
                  <rect x="30" y="240" width="300" height="14" rx="4" fill="rgba(255,255,255,0.04)" stroke="white" strokeOpacity="0.08" strokeWidth="0.5"/>
                  {[{x:80,label:"Governance",color:"#8b5cf6"},{x:180,label:"Compliance",color:"#10b981"},{x:280,label:"Advisory",color:"#C5A059"}].map(({x,label,color}) => (
                    <g key={label}>
                      <circle cx={x-22} cy="247" r="2" fill={color} opacity="0.8"/>
                      <text x={x-16} y="250" fill={color} fontSize="6" fontWeight="600">{label}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              {value:"Enterprise Ready",label:"Governance Posture"},
              {value:"AML + KYC",label:"Compliance Frameworks"},
              {value:"Dual-Corridor",label:"Regulatory Alignment"},
              {value:"Advisory Led",label:"Implementation Support"},
            ].map(({value,label}) => (
              <div key={label} className="text-center">
                <div className="text-blue-950 font-bold text-sm">{value}</div>
                <div className="text-gray-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges + Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Common Challenges</div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Fintechs Need Specialist Infrastructure</h2>
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
              <h2 className="text-3xl font-bold text-blue-950 mb-6">What We Deliver for Fintechs</h2>
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

      {/* Services */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Platform</div>
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer Fintechs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:"Payment Infrastructure",desc:"Licensed partner selection and payment workflow design for your corridor.",href:"/payments",icon:<svg viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>},
              {title:"Compliance Programme",desc:"KYC, AML, FINTRAC, and governance framework tailored to your operations.",href:"/compliance",icon:<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>},
              {title:"Shipment Tracking",desc:"Real-time logistics visibility connected to payment workflows.",href:"/shipment-tracking",icon:<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>},
              {title:"Advisory Services",desc:"Expert guidance on cross-border strategy, governance, and risk.",href:"/services",icon:<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>},
            ].map(({title,desc,href,icon}) => (
              <Link key={title} href={href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 block group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Other Industries</div>
            <h2 className="text-3xl font-bold text-blue-950">Explore Other Sectors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALL_INDUSTRIES.filter(i => !i.href.includes("fintech")).map(({href,label}) => (
              <Link key={label} href={href} className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all group">
                <div className="text-lg font-bold text-blue-950 mb-2 group-hover:text-amber-600 transition-colors">{label}</div>
                <div className="text-amber-500 text-xs font-semibold flex items-center justify-center gap-1">
                  Explore <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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



