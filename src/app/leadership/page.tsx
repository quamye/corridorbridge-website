import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership — CorridorBridge Advisory",
  description: "CorridorBridge leadership team — experienced professionals in technology, cybersecurity, compliance, cross-border operations, and client success building trusted Africa-Canada infrastructure.",
  keywords: "CorridorBridge leadership, Ronald Henry CEO, cross-border infrastructure leadership, fintech leadership Canada Africa",
};

const LEGAL_DISCLAIMER = "CorridorBridge aligns its security and compliance programme with recognized industry frameworks. References to frameworks indicate operational alignment and governance objectives and should not be interpreted as certification, accreditation, or independent attestation unless expressly stated.";

const LEADERSHIP_PRINCIPLES_RONALD = [
  "Integrity Before Opportunity",
  "Security By Design",
  "Customer Success First",
  "Operational Excellence",
  "Continuous Innovation",
];

const LEADERSHIP_PRINCIPLES_VERONICA = [
  "Customer-Centered Service",
  "Transparency and Trust",
  "Accountability",
  "Collaboration",
  "Continuous Improvement",
];

const RONALD_CREDENTIALS = [
  "PMP® — Project Management Professional",
  "PRINCE2® Practitioner",
  "CISSP® — Certified Information Systems Security Professional",
  "CCSP® — Certified Cloud Security Professional",
  "CISA® — Certified Information Systems Auditor",
  "Microsoft Certified Trainer (MCT)",
  "Microsoft Azure Expert",
  "ITIL® Foundation",
  "Cisco Certified Professional",
  "Enterprise Architecture & Cloud Transformation Specialist",
];

const RONALD_DOMAINS = [
  { title: "Enterprise Technology Strategy", desc: "Designing and implementing scalable enterprise technology ecosystems across complex multi-site environments.", icon: "💻", color: "#C5A059" },
  { title: "Cybersecurity & Risk Management", desc: "Building secure-by-design environments aligned with NIST, ISO 27001, and international cybersecurity frameworks.", icon: "🔐", color: "#ef4444" },
  { title: "Cross-Border Infrastructure", desc: "Developing technology platforms that facilitate international trade and financial operations across Africa-Canada corridors.", icon: "🌍", color: "#10b981" },
  { title: "Digital Transformation", desc: "Helping organizations modernize through cloud, automation, and data-driven innovation at enterprise scale.", icon: "⚡", color: "#3b82f6" },
];

const VERONICA_DOMAINS = [
  { title: "Client Success", desc: "Ensuring every client receives personalized support and measurable outcomes throughout their CorridorBridge journey.", icon: "🎯", color: "#C5A059" },
  { title: "Operations Management", desc: "Coordinating internal processes and service delivery standards to maintain operational efficiency across all engagements.", icon: "⚙️", color: "#10b981" },
  { title: "Stakeholder Engagement", desc: "Building trusted relationships with clients, partners, and strategic stakeholders through transparent communication.", icon: "🤝", color: "#3b82f6" },
  { title: "Service Excellence", desc: "Maintaining a culture focused on responsiveness, professionalism, and client satisfaction at every touchpoint.", icon: "⭐", color: "#8b5cf6" },
];

const ADVISORY_AREAS = [
  { area: "Cross-Border Payments", desc: "Payment infrastructure, settlement networks, banking relationships, and financial operations across corridors.", icon: "💸" },
  { area: "Logistics & Supply Chain", desc: "Trade facilitation, shipment visibility, corridor optimization, and operational efficiency.", icon: "🚢" },
  { area: "Compliance & Regulatory Affairs", desc: "AML, KYC, FINTRAC, FATF, governance, and risk management programme expertise.", icon: "📋" },
  { area: "Cybersecurity & Technology", desc: "Cloud security, enterprise architecture, data protection, and operational resilience.", icon: "🛡️" },
  { area: "International Trade & Economic Development", desc: "Trade partnerships, market expansion, and investment enablement across Africa-Canada corridors.", icon: "🌐" },
  { area: "Government & Institutional Relations", desc: "Public-sector engagement, policy alignment, and strategic institutional partnerships.", icon: "🏛️" },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Leadership</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
            Building Trusted<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Cross-Border Infrastructure
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-4">
            CorridorBridge is led by experienced professionals with backgrounds spanning technology, cybersecurity, international operations, business transformation, compliance, customer engagement, and cross-border advisory services.
          </p>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed mb-10">
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
      </section>

      {/* Ronald J. Henry */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-10">Founder & CEO</div>
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Left — avatar + credentials */}
            <div className="lg:col-span-1">
              <div className="w-full aspect-square max-w-xs rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center mb-6 relative overflow-hidden border border-amber-500/20">
                <div className="font-display text-6xl font-bold text-amber-400/20 select-none">RH</div>
                <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at 30% 30%, rgba(197,160,89,0.15), transparent)"}}/>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-blue-950/80 backdrop-blur-sm rounded-xl p-3 border border-amber-500/20">
                    <div className="text-amber-400 text-[10px] font-bold tracking-wider uppercase mb-1">Ronald J. Henry</div>
                    <div className="text-white/60 text-[10px]">Founder & CEO</div>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Professional Credentials</div>
                <ul className="space-y-1.5">
                  {RONALD_CREDENTIALS.map(c => (
                    <li key={c} className="flex items-start gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1"/>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://linkedin.com/in/ronaldjhenry" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:border-blue-950 hover:text-blue-950 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>

            {/* Right — bio */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-blue-950 mb-1">Ronald J. Henry</h2>
              <div className="text-amber-600 font-semibold mb-6">Founder & Chief Executive Officer (CEO)</div>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>Ronald J. Henry is a technology executive, cybersecurity strategist, enterprise architect, and international ICT leader with more than 20 years of experience delivering mission-critical systems across government, enterprise, financial, and international organizations.</p>
                <p>His professional background includes leadership roles within the United Nations ecosystem, enterprise technology transformation programs, cloud modernization initiatives, cybersecurity governance, and large-scale infrastructure deployments.</p>
                <p>Ronald combines deep technical expertise with strategic business leadership, enabling organizations to bridge operational, regulatory, and technology challenges in complex environments — including multi-site UN deployments across West Africa, cloud migrations at enterprise scale, and cross-border payment infrastructure design.</p>
              </div>
              <blockquote className="border-l-4 border-amber-400 pl-6 py-2 mb-8">
                <p className="text-blue-950 font-semibold text-lg leading-snug italic">&ldquo;Technology should not create barriers between nations and businesses. It should create trusted pathways for growth, innovation, and opportunity.&rdquo;</p>
                <footer className="text-gray-400 text-sm mt-2">— Ronald J. Henry, Founder & CEO</footer>
              </blockquote>

              {/* Domain cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {RONALD_DOMAINS.map(({ title, desc, icon, color }) => (
                  <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-amber-200 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{icon}</span>
                      <h3 className="font-bold text-blue-950 text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Principles */}
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Core Leadership Principles</div>
                <div className="flex flex-wrap gap-2">
                  {LEADERSHIP_PRINCIPLES_RONALD.map((p, i) => (
                    <span key={p} className="text-xs px-3 py-1.5 rounded-full font-semibold bg-blue-950 text-amber-400">
                      {i + 1}. {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-8"/>

          {/* Veronica A. Williams */}
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-10">Co-Founder & Director, Client Success</div>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="w-full aspect-square max-w-xs rounded-2xl bg-gradient-to-br from-emerald-950 to-blue-900 flex items-center justify-center mb-6 relative overflow-hidden border border-emerald-500/20">
                <div className="font-display text-6xl font-bold text-emerald-400/20 select-none">VW</div>
                <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at 30% 30%, rgba(16,185,129,0.15), transparent)"}}/>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-blue-950/80 backdrop-blur-sm rounded-xl p-3 border border-emerald-500/20">
                    <div className="text-emerald-400 text-[10px] font-bold tracking-wider uppercase mb-1">Veronica A. Williams</div>
                    <div className="text-white/60 text-[10px]">Co-Founder & Director, Client Success</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-blue-950 mb-1">Veronica A. Williams</h2>
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
                {VERONICA_DOMAINS.map(({ title, desc, icon, color }) => (
                  <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-emerald-200 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{icon}</span>
                      <h3 className="font-bold text-blue-950 text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Core Leadership Principles</div>
                <div className="flex flex-wrap gap-2">
                  {LEADERSHIP_PRINCIPLES_VERONICA.map((p, i) => (
                    <span key={p} className="text-xs px-3 py-1.5 rounded-full font-semibold bg-emerald-900 text-emerald-400">
                      {i + 1}. {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory board */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Advisory Board</div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">Advisory Expertise</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">CorridorBridge is supported by advisors and subject-matter experts across the following disciplines.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVISORY_AREAS.map(({ area, desc, icon }) => (
              <div key={area} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all">
                <div className="text-2xl mb-3">{icon}</div>
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

      {/* Leadership commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Our Commitment</div>
          <h2 className="font-display text-4xl font-bold text-blue-950 mb-6">Leadership Measured by Execution</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            At CorridorBridge, leadership is measured not only by vision but by execution. Our commitment is to build trusted infrastructure that enables secure payments, transparent logistics, compliant operations, and sustainable growth between Africa, Canada, and global markets.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            Together, we are creating the next generation of cross-border business infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 hover:shadow-xl transition-all">
              Book a Leadership Call
            </Link>
            <Link href="/trust" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-all">
              Visit Trust Center
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
