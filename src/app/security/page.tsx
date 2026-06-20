"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Security Operations Center SVG ───────────────────────────────────────────
function SOCVisual({ inView }: { inView: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % 100), 120);
    return () => clearInterval(t);
  }, []);

  const alerts = [
    { x: 40,  y: 58,  color: "#10b981", label: "AML Scan",     status: "Clear" },
    { x: 130, y: 58,  color: "#10b981", label: "KYC Check",    status: "Passed" },
    { x: 220, y: 58,  color: "#C5A059", label: "Risk Score",   status: "Low" },
    { x: 310, y: 58,  color: "#10b981", label: "FINTRAC",      status: "Filed" },
    { x: 400, y: 58,  color: "#10b981", label: "Sanctions",    status: "Clear" },
  ];

  // Simulated network activity line data
  const linePoints = Array.from({ length: 24 }, (_, i) => ({
    x: 10 + i * 19,
    y: 130 - Math.abs(Math.sin((i + tick * 0.05) * 0.8) * 30 + Math.cos(i * 1.2) * 15),
  }));

  return (
    <div className="bg-blue-950/80 border border-white/10 rounded-2xl p-6 overflow-hidden relative">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
          <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Security Operations</span>
        </div>
        <div className="text-emerald-400 text-xs font-bold">● LIVE MONITORING</div>
      </div>

      <svg viewBox="0 0 460 180" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="netGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Grid */}
        {[0,1,2,3].map(i => (
          <line key={i} x1="10" y1={40 + i * 35} x2="450" y2={40 + i * 35} stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
        ))}

        {/* Alert status row */}
        {alerts.map(({ x, y, color, label, status }) => (
          <g key={label}>
            <rect x={x - 30} y={y - 16} width="70" height="30" rx="6"
              fill={`${color}12`} stroke={color} strokeWidth="0.75" strokeOpacity="0.5"/>
            <circle cx={x - 18} cy={y} r="3" fill={color}>
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x={x - 10} y={y - 4} fill="white" fontSize="6" opacity="0.5">{label}</text>
            <text x={x - 10} y={y + 6} fill={color} fontSize="7" fontWeight="bold">{status}</text>
          </g>
        ))}

        {/* Network activity chart */}
        <text x="10" y="95" fill="white" fontSize="6" opacity="0.3">Network Activity</text>

        {/* Area fill under the line */}
        <polygon
          points={`${linePoints.map(p => `${p.x},${p.y}`).join(" ")} ${linePoints[linePoints.length-1].x},165 10,165`}
          fill="url(#netGrad)" opacity="0.5"/>

        {/* Activity line */}
        <polyline
          points={linePoints.map(p => `${p.x},${p.y}`).join(" ")}
          stroke="#C5A059" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* Anomaly dot on latest point */}
        {inView && (
          <circle cx={linePoints[linePoints.length - 1].x} cy={linePoints[linePoints.length - 1].y} r="3" fill="#C5A059">
            <animate attributeName="r" values="3;6;3" dur="1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite"/>
          </circle>
        )}

        {/* Status indicators bottom row */}
        <rect x="10" y="148" width="440" height="28" rx="5" fill="rgba(255,255,255,0.03)" stroke="white" strokeOpacity="0.06" strokeWidth="0.5"/>
        {[
          { x: 50,  label: "Firewall",     val: "Active",   color: "#10b981" },
          { x: 140, label: "Encryption",   val: "TLS 1.3",  color: "#10b981" },
          { x: 225, label: "Access",       val: "Zero Trust",color: "#C5A059" },
          { x: 325, label: "Audit Log",    val: "Complete", color: "#10b981" },
          { x: 415, label: "Uptime",       val: "99.9%",    color: "#C5A059" },
        ].map(({ x, label, val, color }) => (
          <g key={label}>
            <circle cx={x - 22} cy="162" r="2.5" fill={color}>
              <animate attributeName="opacity" values="1;0.3;1" dur={`${1.5 + x * 0.003}s`} repeatCount="indefinite"/>
            </circle>
            <text x={x - 14} y="158" fill="white" fontSize="5.5" opacity="0.35">{label}</text>
            <text x={x - 14} y="167" fill={color} fontSize="6.5" fontWeight="bold">{val}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── Threat Intelligence Visual ───────────────────────────────────────────────
function ThreatMap({ inView }: { inView: boolean }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Threat Intelligence — Africa-Canada Corridor</div>
      <svg viewBox="0 0 400 120" fill="none" className="w-full">
        {/* Timeline axis */}
        <line x1="30" y1="90" x2="390" y2="90" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
        {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map((m, i) => (
          <text key={m} x={30 + i * 54} y="102" fill="white" fontSize="7" opacity="0.3" textAnchor="middle">{m}</text>
        ))}

        {/* Threat detection bars */}
        {[
          { x: 30,  h: 35, color: "#ef4444", blocked: true },
          { x: 84,  h: 20, color: "#f59e0b", blocked: true },
          { x: 138, h: 45, color: "#ef4444", blocked: true },
          { x: 192, h: 15, color: "#10b981", blocked: true },
          { x: 246, h: 30, color: "#f59e0b", blocked: true },
          { x: 300, h: 50, color: "#ef4444", blocked: true },
          { x: 354, h: 22, color: "#10b981", blocked: true },
        ].map(({ x, h, color, blocked }, i) => (
          <g key={x}>
            <rect x={x - 10} y={90 - h} width="20" height={h} rx="3"
              fill={`${color}25`} stroke={color} strokeWidth="0.75" strokeOpacity="0.5"
              style={{ opacity: inView ? 1 : 0, transition: `all 0.5s ease ${i * 100}ms` }}/>
            {blocked && (
              <g style={{ opacity: inView ? 1 : 0, transition: `all 0.5s ease ${i * 100 + 200}ms` }}>
                <circle cx={x} cy={90 - h - 8} r="5" fill={color} opacity="0.8"/>
                <text x={x} y={90 - h - 5} fill="white" fontSize="6" textAnchor="middle" fontWeight="bold">✓</text>
              </g>
            )}
          </g>
        ))}

        {/* Labels */}
        <text x="10" y="20" fill="#ef4444" fontSize="7" opacity="0.7">● High Risk</text>
        <text x="10" y="32" fill="#f59e0b" fontSize="7" opacity="0.7">● Medium</text>
        <text x="10" y="44" fill="#10b981" fontSize="7" opacity="0.7">● Low</text>
        <text x="320" y="20" fill="#10b981" fontSize="7" opacity="0.8">All threats blocked ✓</text>
      </svg>
    </div>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CARD_DISCLAIMER = "References to security and compliance frameworks indicate alignment with recognized governance and security practices and should not be interpreted as formal certification unless explicitly stated.";

const LEGAL_DISCLAIMER = "CorridorBridge aligns its security and compliance programme with recognized industry frameworks, including NIST Cybersecurity Framework principles, ISO 27001 controls and governance practices, FINTRAC obligations, AML requirements, KYC procedures, FATF recommendations, and PIPEDA privacy requirements. References to frameworks, controls, standards, or compliance programmes indicate operational alignment and governance objectives and should not be interpreted as certification, accreditation, regulatory approval, or independent attestation unless expressly stated.";

const STATUS_BARS = [
  { label: "ISO 27001 Alignment",         pct: 92, color: "#C5A059",  tooltip: "Information security management aligned to ISO/IEC 27001 controls and governance practices." },
  { label: "NIST Cybersecurity Framework", pct: 88, color: "#3b82f6",  tooltip: "Identify, Protect, Detect, Respond, Recover functions applied to all platform operations." },
  { label: "AML Control Design",           pct: 95, color: "#10b981",  tooltip: "Anti-money laundering controls embedded in every payment workflow across corridors." },
  { label: "KYC Process Support",          pct: 90, color: "#8b5cf6",  tooltip: "Customer identity verification and ongoing monitoring aligned to corridor requirements." },
  { label: "Data Protection",              pct: 94, color: "#f59e0b",  tooltip: "PIPEDA-aligned data handling, consent management, and breach notification framework." },
  { label: "Audit Readiness",              pct: 87, color: "#ec4899",  tooltip: "Documentation, evidence packages, and audit trails for regulatory and internal audits." },
];

const MATURITY_LABELS: Record<string, { label: string; bg: string; text: string }> = {
  Aligned:     { label: "Aligned",     bg: "bg-amber-500/15",  text: "text-amber-400" },
  Operational: { label: "Operational", bg: "bg-emerald-500/15", text: "text-emerald-400" },
  Implemented: { label: "Implemented", bg: "bg-blue-500/15",    text: "text-blue-400" },
  Active:      { label: "Active",      bg: "bg-purple-500/15",  text: "text-purple-400" },
};

const FRAMEWORKS = [
  { name: "ISO 27001 Alignment",           category: "Information Security",    status: "Aligned",     desc: "Information security management system aligned to ISO/IEC 27001 controls and governance practices.", color: "#C5A059",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { name: "NIST Cybersecurity Framework",  category: "Cybersecurity",           status: "Aligned",     desc: "Identify, Protect, Detect, Respond, Recover functions applied to all platform operations.", color: "#3b82f6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: "AML Control Design",            category: "Anti-Money Laundering",   status: "Operational", desc: "Anti-money laundering controls embedded in every payment workflow across corridors.", color: "#10b981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg> },
  { name: "KYC Process Support",           category: "Know Your Customer",      status: "Operational", desc: "Customer identity verification and ongoing monitoring procedures aligned to corridor requirements.", color: "#8b5cf6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { name: "FINTRAC Compliance",            category: "Canadian Regulation",     status: "Operational", desc: "Financial Transactions and Reports Analysis Centre reporting and record-keeping alignment.", color: "#ef4444",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
  { name: "PIPEDA Data Protection",        category: "Privacy",                 status: "Implemented", desc: "Personal Information Protection and Electronic Documents Act compliance framework.", color: "#f59e0b",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
  { name: "Bank of Ghana Standards",       category: "African Regulation",      status: "Aligned",     desc: "Payment system and financial sector regulatory standards for Ghanaian corridors.", color: "#06b6d4",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg> },
  { name: "FATF Recommendations",          category: "International Standards", status: "Aligned",     desc: "Financial Action Task Force 40 Recommendations framework applied to AML/CFT controls.", color: "#ec4899",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg> },
  { name: "Risk Management Programme",     category: "Enterprise Risk",         status: "Active",      desc: "Enterprise risk identification, assessment, treatment, and monitoring across operations.", color: "#C5A059",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { name: "Audit Readiness Programme",     category: "Governance",              status: "Active",      desc: "Documentation, evidence packages, and audit trails for regulatory and internal audits.", color: "#10b981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
  { name: "Incident Response",             category: "Operational Resilience",  status: "Operational", desc: "Documented incident detection, classification, response, recovery, and review processes.", color: "#8b5cf6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg> },
  { name: "Zero Trust Architecture",       category: "Access Control",          status: "Implemented", desc: "Least-privilege access and continuous verification model applied to all platform access.", color: "#3b82f6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 3v6M15 3v6M9 15v6M15 15v6M3 9h6M15 9h6M3 15h6M15 15h6"/></svg> },
];

const PILLARS = [
  { title: "Secure by Design",       desc: "Security built into every feature, workflow, and integration from inception — not added as an afterthought.", color: "#C5A059",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: "Compliance Embedded",    desc: "FINTRAC, AML, KYC, and PIPEDA compliance embedded in every payment and logistics workflow.", color: "#10b981",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
  { title: "Data Protection",        desc: "PIPEDA-aligned data handling, consent management, and breach notification across all corridors.", color: "#3b82f6",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { title: "Operational Resilience", desc: "Incident response, business continuity, and disaster recovery capabilities protecting platform availability.", color: "#8b5cf6",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg> },
];

const CREDENTIALS = [
  { cert: "CISSP",  full: "Certified Information Systems Security Professional", color: "#C5A059" },
  { cert: "CCSP",   full: "Certified Cloud Security Professional",               color: "#3b82f6" },
  { cert: "CISA",   full: "Certified Information Systems Auditor",               color: "#10b981" },
  { cert: "Azure",  full: "Microsoft Azure Expert",                              color: "#8b5cf6" },
  { cert: "MCT",    full: "Microsoft Certified Trainer (10+ years)",             color: "#f59e0b" },
  { cert: "PMP",    full: "Project Management Professional",                     color: "#ec4899" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SecurityPage() {
  const heroSection      = useInView(0.1);
  const socSection       = useInView(0.1);
  const pillarSection    = useInView();
  const frameworkSection = useInView();
  const credSection      = useInView(0.15);
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%,rgba(197,160,89,0.5),transparent)"}}/>

        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left col — unchanged from original */}
            <div className={`transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Security &amp; Compliance</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Security Built Into<br/>
                <span style={{background:"linear-gradient(90deg,#C5A059,#e8c97a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Every Corridor
                </span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-4">
                Enterprise-grade security and compliance practices designed to protect payment workflows, shipment data, client records, and cross-border operations across Africa–Canada corridors.
              </p>
              <p className="text-sm text-white/35 leading-relaxed mb-8 border-l-2 border-amber-500/30 pl-4">
                Led by cybersecurity and enterprise technology leadership with experience across cloud security, infrastructure governance, risk management, and mission-critical international environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Security Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/trust" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Visit Trust Center
                </Link>
              </div>
            </div>

            {/* Right col — Security Framework Status card (95% preserved, minor enhancements only) */}
            <div className={`transition-all duration-700 delay-300 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-widest">Security Framework Status</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                    <span className="text-emerald-400 text-xs font-medium">All Systems Operational</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {STATUS_BARS.map(({ label, pct, color, tooltip }, i) => (
                    <div key={label}
                      className="cursor-default group relative"
                      onMouseEnter={() => setHoveredBar(label)}
                      onMouseLeave={() => setHoveredBar(null)}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white/70 text-xs font-medium group-hover:text-white transition-colors">{label}</span>
                        <div className="flex items-center gap-2">
                          {/* Maturity badge — additive enhancement */}
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: `${color}20`, color }}>
                            {pct >= 90 ? "MATURE" : pct >= 80 ? "ADVANCING" : "DEVELOPING"}
                          </span>
                          <span className="text-xs font-bold" style={{ color }}>{pct}%</span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000 relative"
                          style={{
                            width: heroSection.inView ? `${pct}%` : "0%",
                            background: `linear-gradient(90deg, ${color}, ${color}80)`,
                            transitionDelay: `${i * 150}ms`,
                            boxShadow: hoveredBar === label ? `0 0 8px ${color}60` : "none",
                          }}>
                          {/* Animated shimmer on hover */}
                          {hoveredBar === label && (
                            <div className="absolute inset-0 rounded-full"
                              style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
                                animation: "shimmer 1s ease infinite" }}/>
                          )}
                        </div>
                      </div>
                      {/* Tooltip — additive */}
                      {hoveredBar === label && (
                        <div className="absolute left-0 -bottom-12 z-10 bg-blue-900 border border-white/10 rounded-lg px-3 py-2 text-[10px] text-white/70 leading-relaxed max-w-xs shadow-xl pointer-events-none">
                          {tooltip}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>
                  <span className="text-white/30 text-xs">All systems operational</span>
                </div>
                <p className="text-white/20 text-[10px] leading-relaxed mt-3">{CARD_DISCLAIMER}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY OPERATIONS CENTER ────────────────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div ref={socSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${socSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Security Operations</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                24/7 Security<br/>
                <span style={{background:"linear-gradient(90deg,#C5A059,#e8c97a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Monitoring & Response
                </span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Continuous threat monitoring, anomaly detection, and automated response across all Africa-Canada payment corridors — protecting every transaction in real time.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Real-Time Threat Detection",      desc: "Continuous monitoring of payment flows, access patterns, and system events." },
                  { label: "Automated AML Screening",         desc: "Every transaction screened against sanctions lists and risk indicators instantly." },
                  { label: "Zero Trust Access Control",       desc: "Least-privilege access enforced at every layer with continuous verification." },
                  { label: "Tamper-Evident Audit Trails",     desc: "Complete, immutable audit logs for every action across the platform." },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{label}</div>
                      <div className="text-white/40 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-700 delay-300 space-y-4 ${socSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <SOCVisual inView={socSection.inView} />
              <ThreatMap inView={socSection.inView} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS (unchanged structure) ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Our Approach</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Four Pillars of Security</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Every dimension of security addressed — from architecture to compliance to operational resilience.</p>
          </div>
          <div ref={pillarSection.ref} className="grid md:grid-cols-2 gap-6">
            {PILLARS.map(({ title, desc, icon, color }, i) => (
              <div key={title} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300"
                style={{ opacity: pillarSection.inView ? 1 : 0, transform: pillarSection.inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}15`, color }}>
                  {icon}
                </div>
                <h3 className="font-bold text-blue-950 text-xl mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12 FRAMEWORK CARDS (icons + enhanced maturity badges) ─────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Compliance Frameworks</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Twelve Compliance Frameworks</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Comprehensive coverage of every regulatory and security framework relevant to Africa-Canada cross-border operations.</p>
          </div>
          <div ref={frameworkSection.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {FRAMEWORKS.map(({ name, category, status, desc, color, icon }, i) => {
              const badge = MATURITY_LABELS[status] || MATURITY_LABELS["Aligned"];
              return (
                <div key={name}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  style={{ opacity: frameworkSection.inView ? 1 : 0, transform: frameworkSection.inView ? "translateY(0)" : "translateY(24px)", transition: `all 0.4s ease ${i * 60}ms`, borderTop: `3px solid ${color}` }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, color }}>
                        {icon}
                      </div>
                      <span className="text-xs font-bold tracking-wider uppercase" style={{ color }}>{category}</span>
                    </div>
                    {/* Enhanced maturity badge */}
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${badge.bg} ${badge.text}`}>
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {status}
                    </span>
                  </div>
                  <h3 className="font-bold text-blue-950 mb-2">{name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-xs text-gray-500 leading-relaxed">{LEGAL_DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CYBERSECURITY LEADERSHIP CREDENTIALS ──────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px,white 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div ref={credSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Leadership Credentials</div>
            <h2 className="text-4xl font-bold text-white mb-4">Cybersecurity Leadership</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">CorridorBridge security is led by enterprise-certified professionals with proven international track records.</p>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 transition-all duration-700 ${credSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {CREDENTIALS.map(({ cert, full, color }, i) => (
              <div key={cert}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
                title={full}>
                <div className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color }}>{cert}</div>
                <div className="text-white/40 text-[10px] leading-tight">{full}</div>
              </div>
            ))}
          </div>

          {/* Experience highlights */}
          <div className={`grid md:grid-cols-3 gap-5 transition-all duration-700 delay-300 ${credSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { label: "UN Experience", value: "10+ Years", desc: "Cybersecurity and systems integration across UN missions in Malawi and Mali.", color: "#C5A059" },
              { label: "Enterprise Sites", value: "250+", desc: "WAN performance, cloud automation, and infrastructure reliability across 250+ international sites.", color: "#10b981" },
              { label: "Cloud Security", value: "Azure Expert", desc: "Azure cloud security, hybrid deployments, Active Directory, and Office 365 security architecture.", color: "#3b82f6" },
            ].map(({ label, value, desc, color }, i) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-amber-500/20 transition-all"
                style={{ transitionDelay: `${400 + i * 100}ms` }}>
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color }}>{label}</div>
                <div className="text-2xl font-bold text-white mb-2">{value}</div>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESPONSIBLE DISCLOSURE (unchanged) ────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Responsible Disclosure</div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Security Vulnerability Reporting</h3>
              <p className="text-gray-500 leading-relaxed mb-4">If you discover a security vulnerability in the CorridorBridge platform or infrastructure, we encourage responsible disclosure. Contact our security team directly.</p>
              <a href="mailto:security@corridorbridge.com" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-amber-600 transition-colors">
                security@corridorbridge.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="bg-blue-950 rounded-2xl p-8 text-white">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Enterprise Security</div>
              <h3 className="text-2xl font-bold mb-4">Need a Security Package?</h3>
              <p className="text-white/60 leading-relaxed mb-6">For enterprise deployments, we provide security documentation, architecture reviews, and compliance evidence packages on request.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/trust" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">Visit Trust Center</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Request Package</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (unchanged) ───────────────────────────────────────────────── */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(197,160,89,0.08),transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Security questions?</h2>
          <p className="text-white/60 mb-8 text-lg">Our team can walk you through our security framework and provide documentation for your due diligence process.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/trust" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">Visit Trust Center</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Talk to Security Team</Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
