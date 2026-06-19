"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

// ─── Animated Counter Hook ─────────────────────────────────────────────────
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Intersection Observer Hook ───────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Animated Africa-Canada SVG Map ───────────────────────────────────────
function CorridorMap() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPulse(p => (p + 1) % 3), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 500 340" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background glow */}
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
          </radialGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="3"/>
          </filter>
        </defs>

        {/* Grid lines */}
        {[0,1,2,3,4,5].map(i => (
          <line key={`h${i}`} x1="0" y1={i*68} x2="500" y2={i*68} stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
        ))}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`v${i}`} x1={i*72} y1="0" x2={i*72} y2="340" stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
        ))}

        {/* Africa continent outline — simplified */}
        <path d="M 320 60 L 360 55 L 390 70 L 400 95 L 395 130 L 380 160 L 370 195 L 345 220 L 320 230 L 300 215 L 285 190 L 280 160 L 290 130 L 295 100 L 310 75 Z"
          fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.5"/>
        <text x="338" y="145" fill="#C5A059" fontSize="9" fontWeight="bold" textAnchor="middle" opacity="0.7">AFRICA</text>

        {/* Canada continent outline — simplified */}
        <path d="M 60 55 L 130 45 L 175 55 L 185 80 L 170 100 L 155 108 L 130 112 L 100 108 L 70 100 L 50 80 Z"
          fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5"/>
        <text x="118" y="82" fill="#60a5fa" fontSize="9" fontWeight="bold" textAnchor="middle" opacity="0.7">CANADA</text>

        {/* Atlantic Ocean label */}
        <text x="245" y="165" fill="white" fontSize="7" textAnchor="middle" opacity="0.2" letterSpacing="2">ATLANTIC OCEAN</text>

        {/* Connection corridor — main line */}
        <path d="M 175 85 Q 245 120 300 145"
          stroke="url(#corridorGrad)" strokeWidth="2" strokeOpacity="0.6" fill="none" strokeDasharray="6 3">
          <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.5s" repeatCount="indefinite"/>
        </path>
        <defs>
          <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa"/>
            <stop offset="100%" stopColor="#C5A059"/>
          </linearGradient>
        </defs>

        {/* Secondary lines */}
        <path d="M 165 75 Q 245 100 305 138"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.1" fill="none" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 180 95 Q 245 140 295 152"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.1" fill="none" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="-8" to="-24" dur="2.5s" repeatCount="indefinite"/>
        </path>

        {/* Africa node */}
        <circle cx="300" cy="145" r="8" fill="#C5A059" opacity="0.9"/>
        <circle cx="300" cy="145" r={12 + (pulse === 0 ? 4 : 0)} fill="none" stroke="#C5A059" strokeWidth="1.5"
          opacity={pulse === 0 ? 0.6 : 0.2}>
          <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>

        {/* Canada node */}
        <circle cx="175" cy="85" r="8" fill="#60a5fa" opacity="0.9"/>
        <circle cx="175" cy="85" r={12 + (pulse === 1 ? 4 : 0)} fill="none" stroke="#60a5fa" strokeWidth="1.5"
          opacity={pulse === 1 ? 0.6 : 0.2}>
          <animate attributeName="r" values="8;18;8" dur="2s" begin="0.7s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" begin="0.7s" repeatCount="indefinite"/>
        </circle>

        {/* Moving payment dots along corridor */}
        <circle r="3" fill="#C5A059" opacity="0.9">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 175 85 Q 245 120 300 145"/>
        </circle>
        <circle r="3" fill="#60a5fa" opacity="0.9">
          <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 300 145 Q 245 120 175 85"/>
        </circle>
        <circle r="2" fill="#10b981" opacity="0.8">
          <animateMotion dur="4s" begin="0.5s" repeatCount="indefinite" path="M 175 85 Q 245 120 300 145"/>
        </circle>

        {/* Flow labels */}
        <rect x="215" y="95" width="60" height="18" rx="4" fill="rgba(197,160,89,0.15)" stroke="#C5A059" strokeWidth="0.5" strokeOpacity="0.4"/>
        <text x="245" y="107" fill="#C5A059" fontSize="6" textAnchor="middle" fontWeight="600">PAYMENTS</text>

        <rect x="195" y="118" width="60" height="18" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.4"/>
        <text x="225" y="130" fill="#10b981" fontSize="6" textAnchor="middle" fontWeight="600">LOGISTICS</text>

        <rect x="235" y="135" width="64" height="18" rx="4" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.4"/>
        <text x="267" y="147" fill="#a78bfa" fontSize="6" textAnchor="middle" fontWeight="600">COMPLIANCE</text>

        {/* Status indicators bottom */}
        <rect x="20" y="285" width="460" height="45" rx="8" fill="rgba(255,255,255,0.04)" stroke="white" strokeWidth="0.5" strokeOpacity="0.1"/>
        {[
          { x: 60, label: "Payments", val: "Active", color: "#10b981" },
          { x: 175, label: "Logistics", val: "Live", color: "#10b981" },
          { x: 290, label: "Compliance", val: "Verified", color: "#10b981" },
          { x: 400, label: "Risk", val: "Low", color: "#C5A059" },
        ].map(({ x, label, val, color }) => (
          <g key={label}>
            <circle cx={x - 15} cy="307" r="3" fill={color}>
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x={x - 8} y="302" fill="white" fontSize="6" opacity="0.5">{label}</text>
            <text x={x - 8} y="313" fill={color} fontSize="7" fontWeight="bold">{val}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── Live Dashboard Widget ─────────────────────────────────────────────────
function DashboardWidget({ inView }: { inView: boolean }) {
  const payments = useCounter(2847, 2500, inView);
  const shipments = useCounter(1293, 2200, inView);
  const compliance = useCounter(847, 2000, inView);
  const corridors = useCounter(12, 1500, inView);

  const stats = [
    { label: "Payments Processed", value: payments.toLocaleString(), suffix: "+", color: "#C5A059", icon: "💸" },
    { label: "Shipments Tracked", value: shipments.toLocaleString(), suffix: "+", color: "#10b981", icon: "📦" },
    { label: "Compliance Reviews", value: compliance.toLocaleString(), suffix: "+", color: "#8b5cf6", icon: "🛡️" },
    { label: "Active Corridors", value: corridors.toLocaleString(), suffix: "", color: "#3b82f6", icon: "🌍" },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <div className="text-white font-semibold text-sm">Live Platform Dashboard</div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"/>
          </div>
          <span className="text-emerald-400 text-xs font-medium">Live</span>
        </div>
      </div>
      {stats.map(({ label, value, suffix, color, icon }) => (
        <div key={label} className="flex items-center justify-between p-3 rounded-xl" style={{background: `${color}10`, border: `1px solid ${color}25`}}>
          <div className="flex items-center gap-2.5">
            <span className="text-base">{icon}</span>
            <span className="text-white/60 text-xs">{label}</span>
          </div>
          <div className="font-bold text-lg" style={{color}}>{value}{suffix}</div>
        </div>
      ))}
      {/* Mini chart simulation */}
      <div className="pt-2 border-t border-white/10">
        <div className="text-white/40 text-[10px] mb-2">Payment Volume — Last 7 Days</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm transition-all duration-1000" style={{
              height: inView ? `${h}%` : "0%",
              background: `linear-gradient(180deg, #C5A059, #C5A05950)`,
              transitionDelay: `${i * 100}ms`
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Trade Readiness Calculator ────────────────────────────────────────────
function ReadinessCalculator() {
  const [answers, setAnswers] = useState({ corridor: "", volume: "", compliance: "", partner: "", experience: "" });
  const [score, setScore] = useState<number | null>(null);

  const questions = [
    { key: "corridor", label: "Which corridor are you operating?", options: ["Canada ↔ Ghana", "Canada ↔ Nigeria", "Canada ↔ Kenya", "Other Africa"] },
    { key: "volume", label: "Monthly transaction volume", options: ["Under $10K", "$10K–$100K", "$100K–$1M", "Over $1M"] },
    { key: "compliance", label: "Current compliance status", options: ["No framework", "Basic KYC only", "KYC + AML", "Full compliance program"] },
    { key: "partner", label: "Licensed payment partner?", options: ["No partner yet", "Evaluating options", "Partner selected", "Partner operational"] },
    { key: "experience", label: "Cross-border experience", options: ["Just starting", "1–2 years", "3–5 years", "5+ years"] },
  ];

  const calculate = () => {
    const weights: Record<string, Record<string, number>> = {
      corridor: { "Canada ↔ Ghana": 20, "Canada ↔ Nigeria": 20, "Canada ↔ Kenya": 20, "Other Africa": 15 },
      volume: { "Under $10K": 5, "$10K–$100K": 10, "$100K–$1M": 15, "Over $1M": 20 },
      compliance: { "No framework": 0, "Basic KYC only": 5, "KYC + AML": 15, "Full compliance program": 20 },
      partner: { "No partner yet": 0, "Evaluating options": 5, "Partner selected": 15, "Partner operational": 20 },
      experience: { "Just starting": 5, "1–2 years": 10, "3–5 years": 15, "5+ years": 20 },
    };
    const total = Object.entries(answers).reduce((sum, [k, v]) => sum + (weights[k]?.[v] || 0), 0);
    setScore(total);
  };

  const getLabel = (s: number) => s >= 80 ? { label: "Corridor Ready", color: "#10b981", msg: "Your operations are well-positioned. CorridorBridge can help you optimize and scale." } :
    s >= 50 ? { label: "Partially Ready", color: "#C5A059", msg: "You have a foundation. CorridorBridge advisory services can close critical gaps quickly." } :
    { label: "Readiness Gaps Found", color: "#ef4444", msg: "Significant gaps exist. Our team can help you build a compliant cross-border operation from the ground up." };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8">
      <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Interactive Tool</div>
      <h3 className="font-display text-2xl font-bold text-blue-950 mb-2">Cross-Border Readiness Score</h3>
      <p className="text-gray-500 text-sm mb-6">Answer 5 questions to receive your personalised corridor readiness score.</p>

      {score === null ? (
        <div className="space-y-5">
          {questions.map(({ key, label, options }) => (
            <div key={key}>
              <label className="block text-sm font-semibold text-blue-950 mb-2">{label}</label>
              <div className="grid grid-cols-2 gap-2">
                {options.map(opt => (
                  <button key={opt} onClick={() => setAnswers(a => ({ ...a, [key]: opt }))}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border-2 transition-all text-left ${
                      answers[key as keyof typeof answers] === opt
                        ? "border-blue-950 bg-blue-950 text-white"
                        : "border-gray-200 text-gray-600 hover:border-blue-950"
                    }`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={calculate} disabled={Object.values(answers).some(v => !v)}
            className="w-full btn-primary justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed mt-2">
            Calculate My Score
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8"/>
              <circle cx="50" cy="50" r="40" fill="none" strokeWidth="8"
                stroke={getLabel(score).color}
                strokeDasharray={`${score * 2.51} 251`}
                strokeLinecap="round"
                style={{transition: "stroke-dasharray 1s ease"}}/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold" style={{color: getLabel(score).color}}>{score}</div>
              <div className="text-xs text-gray-400">/ 100</div>
            </div>
          </div>
          <div className="font-bold text-xl mb-2" style={{color: getLabel(score).color}}>{getLabel(score).label}</div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{getLabel(score).msg}</p>
          <div className="flex gap-3">
            <Link href="/contact" className="flex-1 btn-primary justify-center py-3 text-sm">Get Expert Help</Link>
            <button onClick={() => { setScore(null); setAnswers({ corridor: "", volume: "", compliance: "", partner: "", experience: "" }); }}
              className="flex-1 btn-navy-outline py-3 text-sm">Retake</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Platform Architecture Diagram ────────────────────────────────────────
function PlatformDiagram({ inView }: { inView: boolean }) {
  const layers = ["Payments", "Logistics", "Compliance", "Analytics", "Risk", "Advisory"];
  const colors = ["#C5A059", "#10b981", "#8b5cf6", "#3b82f6", "#ef4444", "#f59e0b"];

  return (
    <div className="relative">
      {/* Africa side */}
      <div className={`flex flex-col items-center mb-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {["Importers", "Exporters", "Fintechs", "Logistics"].map((b, i) => (
            <div key={b} className="bg-amber-500/10 border border-amber-500/25 rounded-xl px-3 py-2 text-center text-xs font-semibold text-amber-400"
              style={{transitionDelay: `${i * 100}ms`}}>{b}</div>
          ))}
        </div>
        <div className="text-amber-400 text-xs font-bold tracking-widest uppercase">Africa Businesses</div>
      </div>

      {/* Animated arrows down */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center gap-1">
          {[0,1,2].map(i => (
            <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{opacity: inView ? 1 : 0, animation: inView ? `bounce 1s ease ${i * 0.2}s infinite` : "none"}}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          ))}
        </div>
      </div>

      {/* Platform */}
      <div className={`bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-6 mb-4 border border-amber-500/20 shadow-2xl transition-all duration-700 delay-300 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <div className="text-center mb-5">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">The Platform</div>
          <div className="font-display text-xl font-bold text-white">CorridorBridge</div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {layers.map((layer, i) => (
            <div key={layer} className="rounded-xl p-2.5 text-center text-[10px] font-bold transition-all hover:scale-105 cursor-default"
              style={{background: `${colors[i]}15`, border: `1px solid ${colors[i]}30`, color: colors[i],
                opacity: inView ? 1 : 0, transitionDelay: `${400 + i * 80}ms`}}>
              {layer}
            </div>
          ))}
        </div>
        {/* Animated connection lines */}
        <div className="flex justify-center mt-4 gap-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-amber-400/40"
              style={{animation: inView ? `pulse 1.5s ease ${i * 0.15}s infinite` : "none"}}/>
          ))}
        </div>
      </div>

      {/* Animated arrows down */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center gap-1">
          {[0,1,2].map(i => (
            <svg key={i} className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{opacity: inView ? 1 : 0, animation: inView ? `bounce 1s ease ${i * 0.2 + 0.6}s infinite` : "none"}}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          ))}
        </div>
      </div>

      {/* Canada side */}
      <div className={`flex flex-col items-center transition-all duration-700 delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">Canada Businesses</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Banks", "SMEs", "Government", "NGOs"].map((b, i) => (
            <div key={b} className="bg-blue-500/10 border border-blue-500/25 rounded-xl px-3 py-2 text-center text-xs font-semibold text-blue-400"
              style={{transitionDelay: `${700 + i * 100}ms`}}>{b}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
const PROBLEMS = [
  { title: "Payments", color: "#ef4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", items: ["High fees and hidden costs", "Delayed settlements", "Limited payment visibility"], icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
  )},
  { title: "Logistics", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", items: ["Manual tracking processes", "Operational inefficiencies", "Fragmented supply chains"], icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  )},
  { title: "Compliance", color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)", items: ["KYC complexity at scale", "AML regulatory burden", "Regulatory uncertainty"], icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  )},
  { title: "Banking Access", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)", items: ["Limited cross-border access", "Risk-averse onboarding", "Slow account opening"], icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
  )},
];

const FEATURES = [
  { title: "Cross-Border Payments", desc: "Multi-currency workflows with settlement tracking, approval routing, and full compliance integration.", href: "/payments", gradient: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/20", accent: "#C5A059" },
  { title: "Shipment Tracking", desc: "Real-time visibility across your entire Africa-Canada supply chain with exception management.", href: "/shipment-tracking", gradient: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/20", accent: "#10b981" },
  { title: "Compliance Hub", desc: "KYC, AML, risk screening, and FINTRAC governance in one unified compliance dashboard.", href: "/compliance", gradient: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/20", accent: "#8b5cf6" },
  { title: "Client Portal", desc: "Secure document exchange, workflow approvals, and reporting for your business partners.", href: "https://app.corridorbridge.com", gradient: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/20", accent: "#3b82f6" },
  { title: "Analytics Dashboard", desc: "KPIs, trade analytics, risk metrics, and growth insights across all your corridors.", href: "/platform", gradient: "from-pink-500/20 to-pink-500/5", border: "border-pink-500/20", accent: "#ec4899" },
  { title: "Advisory Services", desc: "Expert guidance on payment readiness, partner selection, governance, and strategic direction.", href: "/services", gradient: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/20", accent: "#f97316" },
];

const SERVICES = [
  { num: "01", title: "Payment Readiness Assessment", desc: "Evaluate processes and risk exposure for compliant cross-border transactions." },
  { num: "02", title: "Payment Partner Selection", desc: "Identify licensed providers matched to your corridor and regulatory profile." },
  { num: "03", title: "Workflow Design", desc: "End-to-end payment workflows from invoice to reconciliation." },
  { num: "04", title: "Governance & Controls", desc: "Approval matrices, segregation of duties, and risk ownership frameworks." },
  { num: "05", title: "Vendor Risk Review", desc: "Evaluate compliance risks in partner relationships before you commit." },
  { num: "06", title: "Fintech Readiness", desc: "Strengthen governance for cross-border market expansion." },
  { num: "07", title: "Cybersecurity Advisory", desc: "Control environments, access management, and resilience review." },
  { num: "08", title: "Executive Advisory", desc: "Leadership-level guidance on cross-border strategy and partners." },
];

const STEPS = [
  { num: "01", title: "Create Account", desc: "Register your business and set up your CorridorBridge workspace in minutes." },
  { num: "02", title: "Complete Verification", desc: "KYC and business validation to unlock full platform capabilities." },
  { num: "03", title: "Connect Your Corridor", desc: "Select your trade lane — Africa ↔ Canada and beyond." },
  { num: "04", title: "Operate", desc: "Run payments, shipments, and compliance through one platform." },
  { num: "05", title: "Scale", desc: "Expand to new countries, partners, and corridors as you grow." },
];

const USE_CASES = [
  { title: "SMEs", icon: "🏢", desc: "Cross-border operations at enterprise quality without enterprise budget.", href: "/solutions#smes" },
  { title: "Importers", icon: "📥", desc: "Streamlined import payment workflows with full compliance.", href: "/solutions#importers" },
  { title: "Exporters", icon: "📤", desc: "Expand into African markets with confidence.", href: "/solutions#exporters" },
  { title: "Fintechs", icon: "⚡", desc: "Enterprise-grade cross-border infrastructure.", href: "/solutions#fintechs" },
  { title: "Logistics", icon: "🚢", desc: "Connected shipment and payment workflows.", href: "/solutions#logistics" },
  { title: "Financial Institutions", icon: "🏦", desc: "Trade finance with risk frameworks.", href: "/solutions#financial-institutions" },
  { title: "Government", icon: "🏛️", desc: "Govern cross-border trade compliantly.", href: "/solutions#government" },
  { title: "NGOs", icon: "🌱", desc: "Cross-border operations for impact organizations.", href: "/solutions" },
  { title: "International Orgs", icon: "🌍", desc: "Multilateral cross-border infrastructure.", href: "/solutions" },
];

const WHY = [
  { title: "Canadian Governance", desc: "Incorporated in Canada with enterprise-grade compliance standards." },
  { title: "African Market Expertise", desc: "Deep expertise across Ghana, Nigeria, Kenya, and broader Africa." },
  { title: "Technology Platform", desc: "Modern API-first platform built for scale and integration." },
  { title: "Cybersecurity Leadership", desc: "NIST-aligned security protecting every transaction." },
  { title: "Compliance First", desc: "FINTRAC, AML, KYC, and PIPEDA embedded in every workflow." },
  { title: "Enterprise Scale", desc: "Built for financial institutions and large enterprises." },
  { title: "Cross-Border Focus", desc: "Exclusive focus on Africa-Canada corridors — depth over breadth." },
  { title: "Trusted Advisory", desc: "Expert advisors with real payment readiness experience." },
];

const SECURITY = ["ISO 27001 Alignment", "NIST Cybersecurity Framework", "AML Controls", "KYC Processes", "FINTRAC Compliance", "PIPEDA Data Protection", "Bank of Ghana Standards", "FATF Recommendations", "Risk Management", "Audit Readiness", "Incident Response", "Zero Trust Architecture"];

const RESOURCES = [
  { title: "Blog", desc: "Insights on cross-border trade, payments, and compliance.", href: "/blog", icon: "📝" },
  { title: "Case Studies", desc: "How businesses succeed with CorridorBridge.", href: "/case-studies", icon: "📈" },
  { title: "Whitepapers", desc: "Deep research on Africa-Canada trade infrastructure.", href: "/blog", icon: "📄" },
  { title: "Trade Intelligence", desc: "Corridor-specific market intelligence reports.", href: "/blog", icon: "🌍" },
  { title: "Compliance Guides", desc: "Practical FINTRAC, AML, and KYC guides.", href: "/blog", icon: "⚖️" },
  { title: "Research", desc: "Data and analysis on cross-border payment trends.", href: "/blog", icon: "🔬" },
];

const FAQS = [
  { q: "What is CorridorBridge?", a: "CorridorBridge is a cross-border infrastructure platform connecting Africa and Canada. We enable businesses, financial institutions, and government agencies to operate securely across borders through payments, logistics, compliance, and digital infrastructure." },
  { q: "Is CorridorBridge a payment company?", a: "CorridorBridge provides payment workflow infrastructure, advisory, and enablement services. We help you choose, govern, and use licensed payment partners. We do not directly transmit or hold funds unless expressly licensed or partnered with authorized providers." },
  { q: "Who is CorridorBridge for?", a: "CorridorBridge serves SMEs, importers, exporters, fintechs, logistics companies, financial institutions, government agencies, NGOs, and international organizations operating between Africa and Canada." },
  { q: "Which African countries do you support?", a: "Our primary focus is Ghana, Nigeria, and Kenya with the Africa-Canada corridor. We are expanding to additional African markets. Contact us to discuss your specific corridor." },
  { q: "Is CorridorBridge available in Canada?", a: "Yes. CorridorBridge Advisory Inc. is incorporated in Canada. Our platform and advisory services are available to Canadian businesses operating across African corridors." },
  { q: "How do I get started?", a: "Click 'Start Free Trial' for a 30-day free trial with no credit card required. Or click 'Request Demo' to speak with our team first." },
  { q: "Do you provide compliance advisory?", a: "Yes. Our compliance hub and advisory services cover KYC, AML, FINTRAC, and governance frameworks. We help organizations establish compliant cross-border operations through technology, documentation, and expert advisory support." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "done">("idle");

  const heroSection = useInView(0.1);
  const platformSection = useInView(0.2);
  const calcSection = useInView(0.1);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("sending");
    try {
      await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, page_source: "/" }) });
    } catch {}
    setNewsletterStatus("done");
    setEmail("");
  };

  return (
    <>
      <style>{`
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .btn-navy-outline { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 12px; font-weight: 600; font-size: 14px; border: 2px solid #0A1E3F; color: #0A1E3F; transition: all 0.2s; }
        .btn-navy-outline:hover { background: #0A1E3F; color: white; }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-blue-950 pt-16 overflow-hidden flex items-center">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.4), transparent)"}}/>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10" style={{background: "radial-gradient(ellipse 60% 60% at 20% 80%, rgba(30,58,138,0.6), transparent)"}}/>
        </div>

        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className={`transition-all duration-1000 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"/>
                Africa ↔ Canada Infrastructure
              </div>
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
                Cross-Border<br/>
                <span className="gradient-text">Infrastructure</span><br/>
                <span className="text-4xl md:text-5xl xl:text-6xl">Between Africa<br/>and Canada</span>
              </h1>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">
                Move payments, shipments, compliance workflows, and business operations across borders through one trusted platform.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="btn-primary px-8 py-4 text-base shadow-xl shadow-amber-500/20">
                  Request a Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="https://app.corridorbridge.com/signup" className="btn-outline px-8 py-4 text-base">
                  Start Free Trial
                </Link>
              </div>
              {/* Inline stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Free trial", value: "30 days" },
                  { label: "No card required", value: "✓" },
                  { label: "Advisory services", value: "8" },
                  { label: "Cancel anytime", value: "✓" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-white font-bold text-lg">{value}</div>
                    <div className="text-white/40 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Map + Dashboard */}
            <div className={`transition-all duration-1000 delay-300 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="space-y-4">
                {/* Animated Map */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4" style={{height: "260px"}}>
                  <div className="text-white/40 text-xs font-semibold mb-2 uppercase tracking-wider">Live Corridor Map</div>
                  <CorridorMap />
                </div>
                {/* Dashboard widget */}
                <DashboardWidget inView={heroSection.inView} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
          <span className="text-xs">Scroll to explore</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────── */}
      <div className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase mr-2">Trusted Infrastructure</span>
            {["✔ Secure", "✔ Compliant", "✔ Enterprise Ready", "✔ Canada-Based", "✔ Africa-Focused"].map(b => (
              <span key={b} className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-400 mr-2">Compliance-aligned</span>
            {["FINTRAC", "PCMLTFA", "Bank of Ghana", "FATF", "PIPEDA", "NIST", "AML/KYC"].map(r => (
              <span key={r} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>{r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">The Problem</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Cross-Border Operations<br/>Are Broken</h2>
            <p className="text-gray-500 text-lg">Businesses operating between Africa and Canada face fragmented, expensive, and opaque systems at every step.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS.map(({ title, color, bg, border, items, icon }) => (
              <div key={title} className="rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                style={{background: bg, border: `1.5px solid ${border}`}}>
                <div className="mb-5 transition-transform group-hover:scale-110 duration-300">{icon}</div>
                <h3 className="font-bold text-blue-950 text-lg mb-4 pb-3" style={{borderBottom: `2px solid ${color}`}}>{title}</h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#ef4444" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM ARCHITECTURE ────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">The Platform</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">One Platform. Multiple Corridors.</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">CorridorBridge sits at the centre of every cross-border transaction, connecting businesses through unified, compliant infrastructure.</p>
          </div>
          <div ref={platformSection.ref} className="max-w-3xl mx-auto">
            <PlatformDiagram inView={platformSection.inView} />
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Platform Features</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Everything You Need To<br/>Operate Across Borders</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ title, desc, href, gradient, border, accent }) => (
              <Link key={title} href={href}
                className={`bg-gradient-to-br ${gradient} border ${border} rounded-2xl p-8 block group hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{background: `${accent}20`}}>
                  <div className="w-4 h-4 rounded-full" style={{background: accent}}/>
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="text-xs font-semibold flex items-center gap-1 transition-colors" style={{color: accent}}>
                  Learn more
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Advisory Services</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Professional Advisory<br/>Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ num, title, desc }) => (
              <div key={num} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-amber-500 font-bold text-xs font-mono bg-amber-50 px-2 py-1 rounded-lg inline-block mb-3">{num}</div>
                <h3 className="font-bold text-blue-950 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-navy px-8 py-3.5">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">How CorridorBridge Works</h2>
          </div>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"/>
            <div className="grid md:grid-cols-5 gap-6">
              {STEPS.map(({ num, title, desc }, i) => (
                <div key={num} className="relative text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-950 text-amber-400 font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">{num}</div>
                  <h3 className="font-bold text-blue-950 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Use Cases</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Built For Every<br/>Cross-Border Operator</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {USE_CASES.map(({ title, icon, desc, href }) => (
              <Link key={title} href={href}
                className="rounded-2xl p-7 text-white group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block"
                style={{background: "linear-gradient(135deg, #0A1E3F 0%, #1e3a8a 100%)"}}>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="text-amber-400 text-xs font-semibold flex items-center gap-1">
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Why CorridorBridge</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Why Businesses Choose<br/>CorridorBridge</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"/>
                </div>
                <h3 className="font-bold text-blue-950 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY ─────────────────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Security & Compliance</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Security Built Into<br/>Every Transaction</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Enterprise-grade security and compliance protecting every payment, shipment, and data point.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {SECURITY.map((item, i) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300"
                style={{transitionDelay: `${i * 30}ms`}}>
                <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-2"/>
                <div className="text-white text-xs font-semibold">{item}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/security" className="inline-flex items-center gap-2 border-2 border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-blue-950 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all">
              View Security Framework
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ───────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Pricing</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 text-lg">Start free for 30 days. No credit card required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Starter", price: "$59", unit: "CAD/month", desc: "For solo compliance consultants", cta: "Start Free Trial", href: "https://app.corridorbridge.com/signup", popular: false },
              { name: "Growth", price: "$149", unit: "CAD/user/month", desc: "For boutique advisory firms", cta: "Start Free Trial", href: "https://app.corridorbridge.com/signup", popular: true },
              { name: "Enterprise", price: "Custom", unit: "starts $5,000/month", desc: "For large firms and institutions", cta: "Contact Sales", href: "/contact", popular: false },
            ].map(({ name, price, unit, desc, cta, href, popular }) => (
              <div key={name} className={`rounded-2xl p-8 relative transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 ${popular ? "text-white shadow-xl" : "bg-white border border-gray-200"}`}
                style={popular ? {background: "linear-gradient(135deg, #0A1E3F, #122952)"} : {}}>
                {popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-blue-950 text-xs font-bold px-5 py-1.5 rounded-full">Most Popular</div>}
                <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${popular ? "text-amber-400" : "text-amber-500"}`}>{name}</div>
                <div className={`font-display text-3xl font-bold mb-1 ${popular ? "text-white" : "text-blue-950"}`}>{price}</div>
                <div className={`text-xs mb-4 ${popular ? "text-white/50" : "text-gray-400"}`}>{unit}</div>
                <div className={`text-sm mb-6 ${popular ? "text-white/60" : "text-gray-500"}`}>{desc}</div>
                <Link href={href} className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm block transition-all ${popular ? "bg-amber-500 text-blue-950 hover:bg-amber-400" : "bg-blue-950 text-white hover:bg-blue-900"}`}>{cta}</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-blue-950 font-medium transition-colors">View full pricing details →</Link>
          </div>
        </div>
      </section>

      {/* ── RESOURCES + NEWSLETTER ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Resources</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Insights and Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {RESOURCES.map(({ title, desc, href, icon }) => (
              <Link key={title} href={href} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 block group">
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
                <h3 className="font-bold text-blue-950 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 text-amber-600 text-xs font-semibold flex items-center gap-1">
                  Explore <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
          {/* Newsletter */}
          <div className="bg-blue-950 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">Stay ahead of Africa-Canada trade trends</h3>
              <p className="text-white/60 text-sm">Insights on payments, compliance, and cross-border operations — delivered monthly.</p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-3 w-full md:w-auto">
              {newsletterStatus === "done" ? (
                <div className="text-emerald-400 font-semibold text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  You&apos;re subscribed!
                </div>
              ) : (
                <>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter your email"
                    className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-amber-400"/>
                  <button type="submit" disabled={newsletterStatus === "sending"} className="btn-primary px-5 py-3 whitespace-nowrap disabled:opacity-50 text-sm">
                    {newsletterStatus === "sending" ? "..." : "Subscribe"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── READINESS CALCULATOR ─────────────────────────── */}
      <section ref={calcSection.ref} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-eyebrow">Interactive Tool</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-6">What&apos;s Your Cross-Border Readiness Score?</h2>
              <p className="text-gray-500 text-lg mb-8">In 5 questions, understand where you stand and what CorridorBridge can do to close the gaps.</p>
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Personalised to your corridor" },
                  { icon: "⚡", text: "Results in under 2 minutes" },
                  { icon: "📋", text: "Actionable recommendations" },
                  { icon: "🆓", text: "100% free — no signup required" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <ReadinessCalculator />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-eyebrow">FAQ</div>
            <h2 className="font-display text-4xl font-bold text-blue-950">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-semibold text-blue-950 text-sm pr-4">{q}</span>
                  <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-48" : "max-h-0"}`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Get Started Today</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to Build Your<br/>Cross-Border Corridor?</h2>
          <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto">Accelerate trade, payments, compliance, and business growth between Africa and Canada.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/contact" className="btn-primary px-10 py-4 text-base shadow-xl shadow-amber-500/20">
              Request Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="btn-outline px-10 py-4 text-base">Book Consultation</Link>
            <Link href="https://app.corridorbridge.com/signup" className="btn-outline px-10 py-4 text-base">Start Free Trial</Link>
          </div>
          <p className="text-white/30 text-sm">30-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>
    </>
  );
}
