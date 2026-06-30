import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership — CorridorBridge Advisory",
  description: "CorridorBridge leadership team — experienced professionals in technology, cybersecurity, compliance, cross-border operations, and client success building trusted Africa-Canada infrastructure.",
  keywords: "CorridorBridge leadership, Ronald Henry CEO, cross-border infrastructure leadership, fintech leadership Canada Africa",
};

const RONALD_CREDENTIALS = [
  { cert: "PMP®", full: "Project Management Professional" },
  { cert: "PRINCE2®", full: "PRINCE2 Practitioner" },
  { cert: "CISSP®", full: "Certified Information Systems Security Professional" },
  { cert: "CCSP®", full: "Certified Cloud Security Professional" },
  { cert: "CISA®", full: "Certified Information Systems Auditor" },
  { cert: "MCT", full: "Microsoft Certified Trainer (10+ years)" },
  { cert: "Azure", full: "Microsoft Azure Expert" },
  { cert: "ITIL®", full: "ITIL Foundation" },
  { cert: "Cisco", full: "Cisco Certified Professional" },
  { cert: "EA", full: "Enterprise Architecture Specialist" },
];

const RONALD_DOMAINS = [
  { title: "Enterprise Technology Strategy", desc: "Designing and implementing scalable enterprise technology ecosystems across complex multi-site environments.", color: "#C5A059",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { title: "Cybersecurity & Risk Management", desc: "Building secure-by-design environments aligned with NIST, ISO 27001, and international cybersecurity frameworks.", color: "#ef4444",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: "Cross-Border Infrastructure", desc: "Developing technology platforms that facilitate international trade and financial operations across Africa-Canada corridors.", color: "#10b981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg> },
  { title: "Digital Transformation", desc: "Helping organizations modernize through cloud, automation, and data-driven innovation at enterprise scale.", color: "#3b82f6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
];

const VERONICA_DOMAINS = [
  { title: "Client Success", desc: "Ensuring every client receives personalized support and measurable outcomes throughout their CorridorBridge journey.", color: "#C5A059",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { title: "Operations Management", desc: "Coordinating internal processes and service delivery standards to maintain operational efficiency across all engagements.", color: "#10b981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg> },
  { title: "Stakeholder Engagement", desc: "Building trusted relationships with clients, partners, and strategic stakeholders through transparent communication.", color: "#3b82f6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  { title: "Service Excellence", desc: "Maintaining a culture focused on responsiveness, professionalism, and client satisfaction at every touchpoint.", color: "#8b5cf6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
];

const ADVISORY_AREAS = [
  { area: "Cross-Border Payments", desc: "Payment infrastructure, settlement networks, banking relationships, and financial operations across corridors.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
  { area: "Logistics & Supply Chain", desc: "Trade facilitation, shipment visibility, corridor optimization, and operational efficiency.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { area: "Compliance & Regulatory Affairs", desc: "AML, KYC, FINTRAC, FATF, governance, and risk management programme expertise.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { area: "Cybersecurity & Technology", desc: "Cloud security, enterprise architecture, data protection, and operational resilience.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { area: "International Trade & Economic Development", desc: "Trade partnerships, market expansion, and investment enablement across Africa-Canada corridors.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg> },
  { area: "Government & Institutional Relations", desc: "Public-sector engagement, policy alignment, and strategic institutional partnerships.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg> },
];

const PRINCIPLES_RONALD = ["Integrity Before Opportunity","Security By Design","Customer Success First","Operational Excellence","Continuous Innovation"];
const PRINCIPLES_VERONICA = ["Customer-Centered Service","Transparency and Trust","Accountability","Collaboration","Continuous Improvement"];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Leadership</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Building Trusted<br/>
                <span style={{background:"linear-gradient(90deg,#C5A059,#e8c97a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Cross-Border Infrastructure
                </span>
              </h1>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-6">
                CorridorBridge is led by experienced professionals spanning technology, cybersecurity, international operations, compliance, and cross-border advisory.
              </p>
              <p className="text-lg text-white/40 max-w-lg leading-relaxed mb-10">
                Together, the leadership team is committed to creating secure, compliant, and scalable infrastructure that enables businesses, institutions, and governments to operate confidently across international corridors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Book a Leadership Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  About CorridorBridge
                </Link>
              </div>
            </div>

            {/* Credential visual */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-5">Leadership Credentials</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {cert:"CISSP",color:"#C5A059"},{cert:"CCSP",color:"#3b82f6"},
                    {cert:"CISA",color:"#10b981"},{cert:"PMP",color:"#8b5cf6"},
                    {cert:"Azure",color:"#f59e0b"},{cert:"MCT",color:"#ef4444"},
                    {cert:"PRINCE2",color:"#C5A059"},{cert:"ITIL",color:"#10b981"},
                  ].map(({cert,color})=>(
                    <div key={cert} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-all">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background:color}}/>
                      <span className="text-sm font-bold" style={{color}}>{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  {[{value:"20+",label:"Years experience"},{value:"250+",label:"Enterprise sites"},{value:"10+",label:"UN years"}].map(({value,label})=>(
                    <div key={label}>
                      <div className="text-xl font-bold text-amber-400">{value}</div>
                      <div className="text-white/40 text-xs mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ronald J. Henry */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-10">Founder & CEO</div>
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">

            {/* Left — avatar + credentials */}
            <div className="lg:col-span-1">
              <div className="w-full aspect-square max-w-xs rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center mb-6 relative overflow-hidden border border-amber-500/20">
                <div className="text-6xl font-bold text-amber-400/20 select-none">RH</div>
                <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 30% 30%,rgba(197,160,89,0.15),transparent)"}}/>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-blue-950/80 backdrop-blur-sm rounded-xl p-3 border border-amber-500/20">
                    <div className="text-amber-400 text-[10px] font-bold tracking-wider uppercase mb-0.5">Ronald J. Henry</div>
                    <div className="text-white/60 text-[10px]">Founder & CEO</div>
                  </div>
                </div>
              </div>

              {/* Credentials list */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Professional Credentials</div>
                <ul className="space-y-2">
                  {RONALD_CREDENTIALS.map(({cert,full})=>(
                    <li key={cert} className="flex items-start gap-2.5">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 flex-shrink-0 mt-0.5">{cert}</span>
                      <span className="text-xs text-gray-600">{full}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://linkedin.com/in/ronaldjhenry" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:border-blue-950 hover:text-blue-950 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn Profile
              </a>
            </div>

            {/* Right — bio */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-blue-950 mb-1">Ronald J. Henry</h2>
              <div className="text-amber-600 font-semibold mb-6">Founder & Chief Executive Officer</div>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>Ronald J. Henry is a technology executive, cybersecurity strategist, enterprise architect, and international ICT leader with more than 20 years of experience delivering mission-critical systems across government, enterprise, financial, and international organizations.</p>
                <p>His professional background includes leadership roles within the United Nations ecosystem, enterprise technology transformation programs, cloud modernization initiatives, cybersecurity governance, and large-scale infrastructure deployments across 250+ international sites.</p>
                <p>Ronald combines deep technical expertise with strategic business leadership, enabling organizations to bridge operational, regulatory, and technology challenges in complex environments — including multi-site UN deployments across West Africa, cloud migrations at enterprise scale, and cross-border payment infrastructure design.</p>
              </div>
              <blockquote className="border-l-4 border-amber-400 pl-6 py-2 mb-8">
                <p className="text-blue-950 font-semibold text-lg leading-snug italic">&ldquo;Technology should not create barriers between nations and businesses. It should create trusted pathways for growth, innovation, and opportunity.&rdquo;</p>
                <footer className="text-gray-400 text-sm mt-2">— Ronald J. Henry, Founder & CEO</footer>
              </blockquote>

              {/* Domain cards with SVG icons */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {RONALD_DOMAINS.map(({title,desc,icon,color})=>(
                  <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-amber-200 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-shrink-0" style={{color}}>{icon}</div>
                      <h3 className="font-bold text-blue-950 text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Core Leadership Principles</div>
                <div className="flex flex-wrap gap-2">
                  {PRINCIPLES_RONALD.map((p,i)=>(
                    <span key={p} className="text-xs px-3 py-1.5 rounded-full font-semibold bg-blue-950 text-amber-400">{i+1}. {p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 my-4"/>

          {/* Veronica A. Williams */}
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-10 mt-16">Co-Founder & Director, Client Success</div>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="w-full aspect-square max-w-xs rounded-2xl bg-gradient-to-br from-emerald-950 to-blue-900 flex items-center justify-center mb-6 relative overflow-hidden border border-emerald-500/20">
                <div className="text-6xl font-bold text-emerald-400/20 select-none">VW</div>
                <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 30% 30%,rgba(16,185,129,0.15),transparent)"}}/>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-blue-950/80 backdrop-blur-sm rounded-xl p-3 border border-emerald-500/20">
                    <div className="text-emerald-400 text-[10px] font-bold tracking-wider uppercase mb-0.5">Veronica A. Williams</div>
                    <div className="text-white/60 text-[10px]">Co-Founder & Director, Client Success</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-blue-950 mb-1">Veronica A. Williams</h2>
              <div className="text-emerald-600 font-semibold mb-6">Co-Founder & Director, Client Success and Operations</div>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>Veronica A. Williams brings extensive experience in client engagement, operations coordination, customer service excellence, stakeholder relations, and organizational support.</p>
                <p>She plays a key role in ensuring that CorridorBridge delivers exceptional client experiences while maintaining operational efficiency and service quality across all engagements.</p>
                <p>Veronica oversees customer onboarding, relationship management, service coordination, and client communications, helping organizations successfully navigate their cross-border business journeys.</p>
              </div>
              <blockquote className="border-l-4 border-emerald-400 pl-6 py-2 mb-8">
                <p className="text-blue-950 font-semibold text-lg leading-snug italic">&ldquo;Strong relationships are the foundation of successful business corridors. Trust, communication, and consistency create lasting partnerships.&rdquo;</p>
                <footer className="text-gray-400 text-sm mt-2">— Veronica A. Williams, Co-Founder & Director</footer>
              </blockquote>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {VERONICA_DOMAINS.map(({title,desc,icon,color})=>(
                  <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-emerald-200 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-shrink-0" style={{color}}>{icon}</div>
                      <h3 className="font-bold text-blue-950 text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Core Leadership Principles</div>
                <div className="flex flex-wrap gap-2">
                  {PRINCIPLES_VERONICA.map((p,i)=>(
                    <span key={p} className="text-xs px-3 py-1.5 rounded-full font-semibold bg-emerald-900 text-emerald-400">{i+1}. {p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory board */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Advisory Board</div>
            <h2 className="text-4xl font-bold text-white mb-4">Advisory Expertise</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">CorridorBridge is supported by advisors and subject-matter experts across the following disciplines.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVISORY_AREAS.map(({area,desc,icon})=>(
              <div key={area} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all group">
                <div className="mb-3 group-hover:scale-110 transition-transform inline-block">{icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{area}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-white/30 text-sm mb-4">Interested in joining the CorridorBridge advisory network?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-blue-950 transition-all">
              Express Interest
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Our Commitment</div>
          <h2 className="text-4xl font-bold text-blue-950 mb-6">Leadership Measured by Execution</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">At CorridorBridge, leadership is measured not only by vision but by execution. Our commitment is to build trusted infrastructure that enables secure payments, transparent logistics, compliant operations, and sustainable growth between Africa, Canada, and global markets.</p>
          <p className="text-gray-400 text-base leading-relaxed mb-10">Together, we are creating the next generation of cross-border business infrastructure.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 hover:shadow-xl transition-all">Book a Leadership Call</Link>
            <Link href="/trust" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-all">Visit Trust Center</Link>
          </div>
        </div>
      </section>
    </>
  );
}



