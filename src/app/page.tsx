"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

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

// ─── Enhanced 6-node Corridor Network ────────────────────────────────────────
function CorridorNetwork() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 800);
    return () => clearInterval(t);
  }, []);

  const nodes = [
    { id: "ca", label: "CANADA", x: 90,  y: 80,  color: "#60a5fa", ring: "#3b82f6" },
    { id: "gh", label: "GHANA",  x: 310, y: 130, color: "#C5A059", ring: "#C5A059" },
    { id: "ng", label: "NIGERIA",x: 340, y: 190, color: "#f59e0b", ring: "#f59e0b" },
    { id: "ke", label: "KENYA",  x: 370, y: 255, color: "#10b981", ring: "#10b981" },
    { id: "uk", label: "UK",     x: 180, y: 50,  color: "#a78bfa", ring: "#8b5cf6" },
    { id: "eu", label: "EUROPE", x: 230, y: 75,  color: "#f472b6", ring: "#ec4899" },
  ];
  const hub = { x: 220, y: 185 };

  const connections = nodes.map(n => ({ from: n, color: n.color }));

  return (
    <div className="relative w-full" style={{ height: "320px" }}>
      <svg viewBox="0 0 480 330" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0"/>
          </radialGradient>
          {nodes.map(n => (
            <linearGradient key={`g${n.id}`} id={`g${n.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={n.id === "ca" || n.id === "uk" || n.id === "eu" ? n.color : "#C5A059"}/>
              <stop offset="100%" stopColor={n.id === "ca" || n.id === "uk" || n.id === "eu" ? "#C5A059" : n.color}/>
            </linearGradient>
          ))}
        </defs>

        {/* Grid */}
        {[0,1,2,3,4].map(i => <line key={`h${i}`} x1="0" y1={i*82} x2="480" y2={i*82} stroke="white" strokeOpacity="0.03" strokeWidth="1"/>)}
        {[0,1,2,3,4,5].map(i => <line key={`v${i}`} x1={i*96} y1="0" x2={i*96} y2="330" stroke="white" strokeOpacity="0.03" strokeWidth="1"/>)}

        {/* Hub glow */}
        <circle cx={hub.x} cy={hub.y} r="60" fill="url(#hubGlow)"/>

        {/* Connections */}
        {connections.map(({ from, color }) => (
          <g key={from.id}>
            <line x1={from.x} y1={from.y} x2={hub.x} y2={hub.y}
              stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur={`${1.5 + Math.random()}s`} repeatCount="indefinite"/>
            </line>
            {/* Animated payment dots */}
            <circle r="2.5" fill={color} opacity="0.9">
              <animateMotion dur={`${2 + (connections.indexOf({ from, color }) * 0.4)}s`}
                begin={`${connections.indexOf({ from, color }) * 0.3}s`}
                repeatCount="indefinite"
                path={`M ${from.x} ${from.y} L ${hub.x} ${hub.y}`}/>
            </circle>
            <circle r="2" fill={color} opacity="0.6">
              <animateMotion dur={`${2.5 + (connections.indexOf({ from, color }) * 0.3)}s`}
                begin={`${connections.indexOf({ from, color }) * 0.5 + 1}s`}
                repeatCount="indefinite"
                path={`M ${hub.x} ${hub.y} L ${from.x} ${from.y}`}/>
            </circle>
          </g>
        ))}

        {/* Hub — CorridorBridge */}
        <circle cx={hub.x} cy={hub.y} r="38" fill="#0A1E3F" stroke="#C5A059" strokeWidth="1.5"/>
        <circle cx={hub.x} cy={hub.y} r="44" fill="none" stroke="#C5A059" strokeWidth="0.5" strokeOpacity="0.4">
          <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite"/>
        </circle>
        <text x={hub.x} y={hub.y - 6} fill="#C5A059" fontSize="7" fontWeight="bold" textAnchor="middle">CORRIDOR</text>
        <text x={hub.x} y={hub.y + 5} fill="white" fontSize="6" textAnchor="middle" opacity="0.8">BRIDGE</text>
        <text x={hub.x} y={hub.y + 16} fill="#10b981" fontSize="5" textAnchor="middle" opacity="0.7">● LIVE</text>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="20" fill="#0A1E3F" stroke={n.color} strokeWidth="1.5"/>
            <circle cx={n.x} cy={n.y} r="26" fill="none" stroke={n.ring} strokeWidth="1" strokeOpacity="0.3">
              <animate attributeName="r" values="20;28;20" dur={`${2 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite"/>
            </circle>
            <text x={n.x} y={n.y + 4} fill={n.color} fontSize="6" fontWeight="bold" textAnchor="middle">{n.label}</text>
          </g>
        ))}

        {/* Flow tags */}
        {[
          { x: 148, y: 118, label: "PAYMENTS", color: "#C5A059" },
          { x: 148, y: 160, label: "COMPLIANCE", color: "#8b5cf6" },
          { x: 148, y: 202, label: "LOGISTICS", color: "#10b981" },
        ].map(({ x, y, label, color }) => (
          <g key={label}>
            <rect x={x - 28} y={y - 8} width="62" height="14" rx="4" fill={`${color}18`} stroke={color} strokeWidth="0.5" strokeOpacity="0.5"/>
            <text x={x + 3} y={y + 3} fill={color} fontSize="5.5" textAnchor="middle" fontWeight="700">{label}</text>
          </g>
        ))}

        {/* Status bar */}
        <rect x="20" y="292" width="440" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke="white" strokeWidth="0.5" strokeOpacity="0.08"/>
        {[
          { x: 70, label: "Payments", val: "Active", color: "#10b981" },
          { x: 170, label: "Logistics", val: "Live", color: "#10b981" },
          { x: 270, label: "Compliance", val: "Verified", color: "#10b981" },
          { x: 370, label: "Uptime", val: "99.9%", color: "#C5A059" },
        ].map(({ x, label, val, color }) => (
          <g key={label}>
            <circle cx={x - 18} cy="307" r="2.5" fill={color}>
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x={x - 10} y="303" fill="white" fontSize="5.5" opacity="0.4">{label}</text>
            <text x={x - 10} y="313" fill={color} fontSize="6.5" fontWeight="bold">{val}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── Live Dashboard Widget ────────────────────────────────────────────────────
function DashboardWidget({ inView }: { inView: boolean }) {
  const payments = useCounter(2847, 2500, inView);
  const shipments = useCounter(1293, 2200, inView);
  const compliance = useCounter(847, 2000, inView);
  const corridors = useCounter(15, 1500, inView);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-white font-semibold text-sm">Live Platform Dashboard</div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"/>
          <span className="text-emerald-400 text-xs font-medium">Live</span>
        </div>
      </div>
      {[
        { label: "Payments Processed", value: payments.toLocaleString(), suffix: "+", color: "#C5A059" },
        { label: "Shipments Tracked", value: shipments.toLocaleString(), suffix: "+", color: "#10b981" },
        { label: "Compliance Reviews", value: compliance.toLocaleString(), suffix: "+", color: "#8b5cf6" },
        { label: "Active Corridors", value: corridors.toLocaleString(), suffix: "+", color: "#3b82f6" },
      ].map(({ label, value, suffix, color }) => (
        <div key={label} className="flex items-center justify-between p-3 rounded-xl" style={{ background: `${color}10`, border: `1px solid ${color}25` }}>
          <span className="text-white/60 text-xs">{label}</span>
          <div className="font-bold text-lg" style={{ color }}>{value}{suffix}</div>
        </div>
      ))}
      <div className="pt-2 border-t border-white/10">
        <div className="text-white/40 text-[10px] mb-2">Payment Volume — Last 7 Days</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm transition-all duration-1000" style={{
              height: inView ? `${h}%` : "0%",
              background: "linear-gradient(180deg, #C5A059, #C5A05950)",
              transitionDelay: `${i * 100}ms`
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Platform Architecture Diagram ───────────────────────────────────────────
function PlatformDiagram({ inView }: { inView: boolean }) {
  const layers = ["Payments", "Logistics", "Compliance", "Analytics", "Risk", "Advisory"];
  const colors = ["#C5A059", "#10b981", "#8b5cf6", "#3b82f6", "#ef4444", "#f59e0b"];
  const africaNodes = ["Importers", "Exporters", "Fintechs", "Logistics", "Banks", "NGOs"];
  const canadaNodes = ["Banks", "SMEs", "Government", "NGOs", "Regulators", "Institutions"];

  return (
    <div className="relative">
      {/* Africa side */}
      <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-amber-400 text-xs font-bold tracking-widest uppercase text-center mb-3">Africa Businesses & Institutions</div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
          {africaNodes.map((b, i) => (
            <div key={b} className="bg-amber-500/10 border border-amber-500/25 rounded-xl px-2 py-2 text-center text-xs font-semibold text-amber-400"
              style={{ transitionDelay: `${i * 80}ms` }}>{b}</div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center mb-3">
        <svg viewBox="0 0 120 24" className="w-32 h-6 text-amber-400">
          {[20, 60, 100].map(x => (
            <g key={x}>
              <line x1={x} y1="0" x2={x} y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
              <polyline points={`${x-4},12 ${x},18 ${x+4},12`} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" begin={`${x * 0.01}s`} repeatCount="indefinite"/>
              </polyline>
            </g>
          ))}
        </svg>
      </div>

      {/* Platform hub */}
      <div className={`bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-6 mb-4 border border-amber-500/20 shadow-2xl transition-all duration-700 delay-300 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <div className="text-center mb-4">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">The Platform</div>
          <div className="text-xl font-bold text-white">CorridorBridge Infrastructure</div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {layers.map((layer, i) => (
            <div key={layer} className="rounded-xl p-2.5 text-center text-[10px] font-bold hover:scale-105 transition-transform cursor-default"
              style={{ background: `${colors[i]}15`, border: `1px solid ${colors[i]}30`, color: colors[i],
                opacity: inView ? 1 : 0, transition: `all 0.4s ease ${400 + i * 80}ms` }}>
              {layer}
            </div>
          ))}
        </div>
        {/* Animated dots */}
        <div className="flex justify-center mt-4 gap-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-amber-400/40"
              style={{ animation: inView ? `pulse 1.5s ease ${i * 0.12}s infinite` : "none" }}/>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center mb-3">
        <svg viewBox="0 0 120 24" className="w-32 h-6 text-blue-400">
          {[20, 60, 100].map(x => (
            <g key={x}>
              <line x1={x} y1="0" x2={x} y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
              <polyline points={`${x-4},12 ${x},18 ${x+4},12`} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" begin={`${x * 0.01 + 0.6}s`} repeatCount="indefinite"/>
              </polyline>
            </g>
          ))}
        </svg>
      </div>

      {/* Canada side */}
      <div className={`transition-all duration-700 delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-3">
          {canadaNodes.map((b, i) => (
            <div key={b} className="bg-blue-500/10 border border-blue-500/25 rounded-xl px-2 py-2 text-center text-xs font-semibold text-blue-400"
              style={{ transitionDelay: `${700 + i * 80}ms` }}>{b}</div>
          ))}
        </div>
        <div className="text-blue-400 text-xs font-bold tracking-widest uppercase text-center">Canada Businesses & Institutions</div>
      </div>
    </div>
  );
}

// ─── Readiness Calculator ─────────────────────────────────────────────────────
function ReadinessCalculator() {
  const [answers, setAnswers] = useState({ corridor: "", volume: "", compliance: "", partner: "", experience: "" });
  const [score, setScore] = useState<number | null>(null);

  const questions = [
    { key: "corridor", label: "Which corridor are you operating?", options: ["Canada → Ghana", "Canada → Nigeria", "Canada → Kenya", "Other Africa"] },
    { key: "volume", label: "Monthly transaction volume", options: ["Under $10K", "$10K–$100K", "$100K–$1M", "Over $1M"] },
    { key: "compliance", label: "Current compliance status", options: ["No framework", "Basic KYC only", "KYC + AML", "Full compliance program"] },
    { key: "partner", label: "Licensed payment partner?", options: ["No partner yet", "Evaluating options", "Partner selected", "Partner operational"] },
    { key: "experience", label: "Cross-border experience", options: ["Just starting", "1–2 years", "3–5 years", "5+ years"] },
  ];

  const calculate = () => {
    const weights: Record<string, Record<string, number>> = {
      corridor: { "Canada → Ghana": 20, "Canada → Nigeria": 20, "Canada → Kenya": 20, "Other Africa": 15 },
      volume: { "Under $10K": 5, "$10K–$100K": 10, "$100K–$1M": 15, "Over $1M": 20 },
      compliance: { "No framework": 0, "Basic KYC only": 5, "KYC + AML": 15, "Full compliance program": 20 },
      partner: { "No partner yet": 0, "Evaluating options": 5, "Partner selected": 15, "Partner operational": 20 },
      experience: { "Just starting": 5, "1–2 years": 10, "3–5 years": 15, "5+ years": 20 },
    };
    const total = Object.entries(answers).reduce((sum, [k, v]) => sum + (weights[k]?.[v] || 0), 0);
    setScore(total);
  };

  const getLabel = (s: number) =>
    s >= 80 ? { label: "Corridor Ready", color: "#10b981", msg: "Your operations are well-positioned. CorridorBridge can help you optimize and scale." } :
    s >= 50 ? { label: "Partially Ready", color: "#C5A059", msg: "You have a foundation. CorridorBridge advisory services can close critical gaps quickly." } :
    { label: "Readiness Gaps Found", color: "#ef4444", msg: "Significant gaps exist. Our team can help you build a compliant cross-border operation from the ground up." };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
      <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Interactive Tool</div>
      <h3 className="text-2xl font-bold text-blue-950 mb-2">Cross-Border Readiness Score</h3>
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
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
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
                style={{ transition: "stroke-dasharray 1s ease" }}/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold" style={{ color: getLabel(score).color }}>{score}</div>
              <div className="text-xs text-gray-400">/ 100</div>
            </div>
          </div>
          <div className="font-bold text-xl mb-2" style={{ color: getLabel(score).color }}>{getLabel(score).label}</div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{getLabel(score).msg}</p>
          <div className="flex gap-3">
            <Link href="/contact" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">Get Expert Help</Link>
            <button onClick={() => { setScore(null); setAnswers({ corridor: "", volume: "", compliance: "", partner: "", experience: "" }); }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-all">Retake</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── KPI Widget (animated counter) ───────────────────────────────────────────
function KPIWidget({ value, label, suffix = "", prefix = "", color, inView, delay = 0 }: {
  value: number; label: string; suffix?: string; prefix?: string; color: string; inView: boolean; delay?: number;
}) {
  const count = useCounter(value, 2000, inView);
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-3xl font-bold mb-1" style={{ color }}>{prefix}{count.toLocaleString()}{suffix}</div>
      <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
}

// ─── Global Coverage SVG Map ──────────────────────────────────────────────────
function GlobalMap({ inView }: { inView: boolean }) {
  const routes = [
    { from: { x: 155, y: 85 }, to: { x: 295, y: 145 }, label: "Canada ↔ Ghana", color: "#C5A059" },
    { from: { x: 155, y: 85 }, to: { x: 310, y: 165 }, label: "Canada ↔ Nigeria", color: "#f59e0b" },
    { from: { x: 155, y: 85 }, to: { x: 330, y: 185 }, label: "Canada ↔ Kenya", color: "#10b981" },
    { from: { x: 155, y: 85 }, to: { x: 225, y: 70 }, label: "Canada ↔ UK", color: "#a78bfa" },
    { from: { x: 155, y: 85 }, to: { x: 248, y: 80 }, label: "Canada ↔ Europe", color: "#f472b6" },
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-blue-950/50 border border-white/10" style={{ height: "280px" }}>
      <svg viewBox="0 0 480 260" fill="none" className="w-full h-full">
        {/* Simplified world outline */}
        {/* North America */}
        <path d="M 100 60 L 200 50 L 210 80 L 195 110 L 160 120 L 130 115 L 100 100 Z"
          fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4"/>
        {/* Europe */}
        <path d="M 215 55 L 270 50 L 278 70 L 260 85 L 235 88 L 218 75 Z"
          fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.4"/>
        {/* UK */}
        <path d="M 208 58 L 218 55 L 222 68 L 212 72 Z"
          fill="rgba(167,139,250,0.2)" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.5"/>
        {/* Africa */}
        <path d="M 270 100 L 320 95 L 345 115 L 348 160 L 335 195 L 310 210 L 285 200 L 268 175 L 263 140 L 268 115 Z"
          fill="rgba(197,160,89,0.12)" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4"/>

        {/* Route lines */}
        {routes.map(({ from, to, color }, i) => (
          <g key={i}>
            <path d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${Math.min(from.y, to.y) - 20} ${to.x} ${to.y}`}
              stroke={color} strokeWidth="1.5" strokeOpacity="0.5" fill="none" strokeDasharray="5 3">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite"/>
            </path>
            {/* Moving dot */}
            <circle r="3" fill={color} opacity="0.9">
              <animateMotion dur={`${2.5 + i * 0.3}s`} begin={`${i * 0.5}s`} repeatCount="indefinite"
                path={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${Math.min(from.y, to.y) - 20} ${to.x} ${to.y}`}/>
            </circle>
          </g>
        ))}

        {/* Canada hub */}
        <circle cx="155" cy="85" r="10" fill="#0A1E3F" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="155" cy="85" r="15" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3">
          <animate attributeName="r" values="10;18;10" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="155" y="102" fill="#60a5fa" fontSize="7" textAnchor="middle" fontWeight="bold">CANADA</text>

        {/* Destination nodes */}
        {[
          { x: 295, y: 145, label: "GHANA", color: "#C5A059" },
          { x: 310, y: 165, label: "NIGERIA", color: "#f59e0b" },
          { x: 330, y: 185, label: "KENYA", color: "#10b981" },
          { x: 225, y: 70, label: "UK", color: "#a78bfa" },
          { x: 248, y: 80, label: "EU", color: "#f472b6" },
        ].map(({ x, y, label, color }) => (
          <g key={label}>
            <circle cx={x} cy={y} r="7" fill="#0A1E3F" stroke={color} strokeWidth="1.5"/>
            <text x={x} y={y + 16} fill={color} fontSize="6" textAnchor="middle" fontWeight="bold">{label}</text>
          </g>
        ))}

        {/* Future corridors label */}
        <rect x="355" y="180" width="110" height="55" rx="8" fill="rgba(255,255,255,0.04)" stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
        <text x="410" y="197" fill="white" fontSize="6.5" textAnchor="middle" fontWeight="bold" opacity="0.6">FUTURE CORRIDORS</text>
        {["West Africa", "East Africa", "Southern Africa"].map((t, i) => (
          <g key={t}>
            <circle cx="366" cy={208 + i * 10} r="2" fill="#C5A059" opacity="0.5"/>
            <text x="372" y={211 + i * 10} fill="white" fontSize="5.5" opacity="0.4">{t}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── Partner Ecosystem ────────────────────────────────────────────────────────
function PartnerEcosystem() {
  const categories = [
    { label: "Banks & FIs", color: "#3b82f6", items: ["Canadian Banks", "African Banks", "Development Banks", "Credit Unions"] },
    { label: "Fintechs", color: "#8b5cf6", items: ["Payment Processors", "Mobile Money", "Neobanks", "Remittance"] },
    { label: "Regulators", color: "#10b981", items: ["FINTRAC", "Bank of Ghana", "CBN", "CBK"] },
    { label: "Compliance", color: "#C5A059", items: ["KYC Providers", "AML Solutions", "Risk Platforms", "Audit Firms"] },
    { label: "Logistics", color: "#f59e0b", items: ["Freight Forwarders", "Customs Brokers", "Carriers", "Port Operators"] },
    { label: "Technology", color: "#ef4444", items: ["Cloud Providers", "API Partners", "Security Vendors", "Data Services"] },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map(({ label, color, items }) => (
        <div key={label} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-amber-200 transition-all">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full" style={{ background: color }}/>
            <div className="text-xs font-bold text-blue-950 uppercase tracking-wider">{label}</div>
          </div>
          <div className="space-y-1.5">
            {items.map(item => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Success Stories ──────────────────────────────────────────────────────────
const SUCCESS_STORIES = [
  {
    segment: "Importer",
    corridor: "Canada → Ghana",
    challenge: "Manual payment processes causing 3–5 day delays and FINTRAC reporting gaps.",
    solution: "CorridorBridge payment workflow design with automated FINTRAC reporting integration.",
    outcomes: [
      { metric: "Settlement Time", before: "5 days", after: "1 day", improvement: "80% faster" },
      { metric: "Compliance Gaps", before: "12 open", after: "0 open", improvement: "100% resolved" },
      { metric: "Reporting Cost", before: "$8K/month", after: "$1.2K/month", improvement: "85% reduction" },
    ],
    color: "#C5A059",
  },
  {
    segment: "Fintech",
    corridor: "Canada → Nigeria",
    challenge: "Enterprise clients requiring governance documentation before signing contracts.",
    solution: "CorridorBridge compliance framework design and governance documentation package.",
    outcomes: [
      { metric: "Enterprise Deals", before: "0 closed", after: "3 closed", improvement: "3 new contracts" },
      { metric: "Onboarding Time", before: "8 weeks", after: "2 weeks", improvement: "75% faster" },
      { metric: "Risk Rating", before: "High", after: "Low", improvement: "2 levels improved" },
    ],
    color: "#10b981",
  },
  {
    segment: "Logistics Provider",
    corridor: "Canada → Kenya",
    challenge: "Disconnected payment and shipment systems causing reconciliation failures.",
    solution: "Integrated shipment-to-payment workflow with automated reconciliation.",
    outcomes: [
      { metric: "Reconciliation Errors", before: "34/month", after: "2/month", improvement: "94% reduction" },
      { metric: "Cash Flow Visibility", before: "None", after: "Real-time", improvement: "Full visibility" },
      { metric: "Ops Cost", before: "$15K/month", after: "$6K/month", improvement: "60% savings" },
    ],
    color: "#3b82f6",
  },
];

// ─── Data constants ───────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    title: "Payments", color: "#ef4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)",
    items: ["High fees and hidden costs", "Delayed settlements", "Limited payment visibility"],
    svg: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="8" y="15" width="64" height="40" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="8" y1="26" x2="72" y2="26" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="14" y="32" width="18" height="6" rx="2" fill="#ef4444" opacity="0.4"/>
        <rect x="38" y="32" width="12" height="6" rx="2" fill="#ef4444" opacity="0.3"/>
        <rect x="54" y="32" width="10" height="6" rx="2" fill="#ef4444" opacity="0.2"/>
        <circle cx="60" cy="10" r="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1"/>
        <text x="60" y="14" fill="#ef4444" fontSize="8" textAnchor="middle" fontWeight="bold">$</text>
        <line x1="56" y1="7" x2="64" y2="13" stroke="#ef4444" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Logistics", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)",
    items: ["Manual tracking processes", "Operational inefficiencies", "Fragmented supply chains"],
    svg: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="5" y="20" width="42" height="28" rx="3" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="47" y="28" width="22" height="20" rx="3" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2"/>
        <circle cx="18" cy="52" r="5" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="54" cy="52" r="5" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="5" y1="38" x2="69" y2="38" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3"/>
        <path d="M 47 32 L 55 32 L 69 38" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Compliance", color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)",
    items: ["KYC complexity at scale", "AML regulatory burden", "Regulatory uncertainty"],
    svg: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <path d="M 40 5 L 70 18 L 70 38 C 70 50 40 58 40 58 C 40 58 10 50 10 38 L 10 18 Z"
          fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="1.5"/>
        <line x1="25" y1="30" x2="55" y2="30" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        <line x1="25" y1="36" x2="55" y2="36" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        <circle cx="40" cy="25" r="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="40" y="29" fill="#8b5cf6" fontSize="7" textAnchor="middle" fontWeight="bold">?</text>
      </svg>
    ),
  },
  {
    title: "Banking Access", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)",
    items: ["Limited cross-border access", "Risk-averse onboarding", "Slow account opening"],
    svg: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <polygon points="40,6 72,24 72,28 8,28 8,24" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="8" y1="52" x2="72" y2="52" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="12" y="30" width="10" height="20" rx="1" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="27" y="30" width="10" height="20" rx="1" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="42" y="30" width="10" height="20" rx="1" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="57" y="30" width="10" height="20" rx="1" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="65" cy="16" r="7" fill="#0A1E3F" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="62" y1="13" x2="68" y2="19" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="68" y1="13" x2="62" y2="19" stroke="#ef4444" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const FEATURES = [
  {
    title: "Cross-Border Payments", desc: "Multi-currency workflows with settlement tracking, approval routing, and full compliance integration.",
    href: "/payments", accent: "#C5A059",
    miniSvg: (
      <svg viewBox="0 0 120 60" fill="none" className="w-full h-12">
        <rect x="5" y="10" width="110" height="40" rx="6" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4"/>
        {[20,45,70,95].map((x, i) => (
          <g key={x}>
            <rect x={x-8} y="20" width="18" height="20" rx="3" fill={`rgba(197,160,89,${0.1 + i*0.05})`} stroke="#C5A059" strokeWidth="0.5" strokeOpacity="0.5"/>
            <rect x={x-5} y="25" width="12" height="4" rx="1" fill="#C5A059" opacity={0.3 + i*0.1}/>
            <rect x={x-5} y="32" width="8" height="3" rx="1" fill="#C5A059" opacity={0.2}/>
          </g>
        ))}
        <circle r="2" fill="#C5A059">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 5 30 L 115 30"/>
        </circle>
      </svg>
    ),
  },
  {
    title: "Shipment Tracking", desc: "Real-time visibility across your entire Africa-Canada supply chain with exception management.",
    href: "/shipment-tracking", accent: "#10b981",
    miniSvg: (
      <svg viewBox="0 0 120 60" fill="none" className="w-full h-12">
        <path d="M 10 45 L 110 45" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3"/>
        {[10, 35, 60, 85, 110].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="45" r={i === 2 ? 6 : 4} fill={i <= 2 ? "#10b981" : "rgba(16,185,129,0.2)"} stroke="#10b981" strokeWidth="1"/>
            {i <= 2 && <circle cx={x} cy="45" r="2" fill="white"/>}
          </g>
        ))}
        <rect x="30" y="15" width="60" height="22" rx="4" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="0.5"/>
        <text x="60" y="30" fill="#10b981" fontSize="7" textAnchor="middle" fontWeight="600">In Transit ●</text>
      </svg>
    ),
  },
  {
    title: "Compliance Hub", desc: "KYC, AML, risk screening, and FINTRAC governance in one unified compliance dashboard.",
    href: "/compliance", accent: "#8b5cf6",
    miniSvg: (
      <svg viewBox="0 0 120 60" fill="none" className="w-full h-12">
        <path d="M 60 5 L 110 22 L 110 42 C 110 54 60 58 60 58 C 60 58 10 54 10 42 L 10 22 Z"
          fill="rgba(139,92,246,0.06)" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.4"/>
        {["KYC", "AML", "FINTRAC"].map((t, i) => (
          <g key={t}>
            <rect x="28" y={18 + i * 12} width="64" height="9" rx="2" fill="rgba(139,92,246,0.1)"/>
            <rect x="28" y={18 + i * 12} width={`${[80, 64, 72][i]}%`} height="9" rx="2" fill="rgba(139,92,246,0.25)"/>
            <text x="33" y={25 + i * 12} fill="#a78bfa" fontSize="5.5" fontWeight="600">{t}</text>
            <circle cx="86" cy={22.5 + i * 12} r="3" fill="#10b981" opacity="0.8"/>
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: "Client Portal", desc: "Secure document exchange, workflow approvals, and reporting for your business partners.",
    href: "https://ops.corridorbridge.com/login?redirectTo=%2F", accent: "#3b82f6",
    miniSvg: (
      <svg viewBox="0 0 120 60" fill="none" className="w-full h-12">
        <rect x="5" y="8" width="110" height="44" rx="6" fill="rgba(59,130,246,0.06)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3"/>
        <rect x="5" y="8" width="110" height="14" rx="6" fill="rgba(59,130,246,0.12)"/>
        <circle cx="18" cy="15" r="3" fill="#3b82f6" opacity="0.6"/>
        <circle cx="28" cy="15" r="3" fill="#3b82f6" opacity="0.4"/>
        {[0,1,2].map(i => (
          <rect key={i} x="12" y={28 + i * 9} width={[80, 60, 70][i]} height="5" rx="2" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3"/>
        ))}
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard", desc: "KPIs, trade analytics, risk metrics, and growth insights across all your corridors.",
    href: "/platform", accent: "#ec4899",
    miniSvg: (
      <svg viewBox="0 0 120 60" fill="none" className="w-full h-12">
        <polyline points="10,45 30,35 50,38 70,22 90,28 110,15" stroke="#ec4899" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <polyline points="10,50 30,42 50,44 70,32 90,36 110,28" stroke="#ec4899" strokeWidth="1" fill="none" strokeOpacity="0.4" strokeLinecap="round"/>
        {[10,30,50,70,90,110].map((x, i) => (
          <circle key={x} cx={x} cy={[45,35,38,22,28,15][i]} r="2.5" fill="#ec4899"/>
        ))}
      </svg>
    ),
  },
  {
    title: "Advisory Services", desc: "Expert guidance on payment readiness, partner selection, governance, and strategic direction.",
    href: "/services", accent: "#f97316",
    miniSvg: (
      <svg viewBox="0 0 120 60" fill="none" className="w-full h-12">
        {[20,60,100].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="30" r="14" fill={`rgba(249,115,22,${0.06 + i*0.03})`} stroke="#f97316" strokeWidth="1" strokeOpacity="0.4"/>
            <text x={x} y="34" fill="#f97316" fontSize="8" textAnchor="middle" fontWeight="bold">{["01","02","03"][i]}</text>
            {i < 2 && <line x1={x+14} y1="30" x2={x+46} y2="30" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="3 2"/>}
          </g>
        ))}
      </svg>
    ),
  },
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
  { num: "01", title: "Create Account", desc: "Register your business and set up your workspace in minutes.", icon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="5" y="5" width="30" height="30" rx="6" fill="rgba(197,160,89,0.1)" stroke="#C5A059" strokeWidth="1.5"/>
      <circle cx="20" cy="17" r="5" stroke="#C5A059" strokeWidth="1.5" fill="none"/>
      <path d="M 10 33 Q 20 26 30 33" stroke="#C5A059" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )},
  { num: "02", title: "Complete Verification", desc: "KYC and business validation to unlock full platform capabilities.", icon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M 20 4 L 34 10 L 34 22 C 34 30 20 36 20 36 C 20 36 6 30 6 22 L 6 10 Z" stroke="#10b981" strokeWidth="1.5" fill="rgba(16,185,129,0.08)"/>
      <polyline points="13,20 18,25 27,15" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
  { num: "03", title: "Connect Your Corridor", desc: "Select your trade lane — Africa ↔ Canada and beyond.", icon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <circle cx="10" cy="20" r="5" stroke="#3b82f6" strokeWidth="1.5" fill="rgba(59,130,246,0.1)"/>
      <circle cx="30" cy="20" r="5" stroke="#C5A059" strokeWidth="1.5" fill="rgba(197,160,89,0.1)"/>
      <path d="M 15 20 Q 20 12 25 20" stroke="#8b5cf6" strokeWidth="1.5" fill="none"/>
      <path d="M 25 20 Q 20 28 15 20" stroke="#8b5cf6" strokeWidth="1" fill="none" strokeDasharray="2 2"/>
    </svg>
  )},
  { num: "04", title: "Operate", desc: "Run payments, shipments, and compliance through one platform.", icon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="5" y="8" width="30" height="24" rx="4" stroke="#f97316" strokeWidth="1.5" fill="rgba(249,115,22,0.08)"/>
      <rect x="8" y="11" width="24" height="7" rx="2" fill="rgba(249,115,22,0.15)"/>
      <rect x="8" y="21" width="10" height="4" rx="1" fill="rgba(249,115,22,0.15)"/>
      <rect x="20" y="21" width="12" height="4" rx="1" fill="rgba(249,115,22,0.1)"/>
    </svg>
  )},
  { num: "05", title: "Scale", desc: "Expand to new countries, partners, and corridors as you grow.", icon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <polyline points="5,32 12,22 18,25 25,15 32,18 38,8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="30,8 38,8 38,16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
];

const USE_CASES = [
  { title: "SMEs", desc: "Cross-border operations at enterprise quality without enterprise budget.", href: "/solutions#smes",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="5" y="12" width="30" height="22" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><path d="M 13 12 L 13 8 L 27 8 L 27 12" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/><line x1="5" y1="20" x2="35" y2="20" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/><rect x="16" y="20" width="8" height="14" rx="1" fill="rgba(197,160,89,0.15)"/></svg> },
  { title: "Importers", desc: "Streamlined import payment workflows with full compliance.", href: "/solutions#importers",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="5" y="10" width="22" height="22" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><path d="M 30 15 L 38 20 L 30 25" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="27" y1="20" x2="38" y2="20" stroke="#C5A059" strokeWidth="1.5"/><line x1="10" y1="18" x2="20" y2="18" stroke="white" strokeWidth="1" strokeOpacity="0.4"/><line x1="10" y1="22" x2="17" y2="22" stroke="white" strokeWidth="1" strokeOpacity="0.3"/></svg> },
  { title: "Exporters", desc: "Expand into African markets with confidence.", href: "/solutions#exporters",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="13" y="10" width="22" height="22" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><path d="M 10 15 L 2 20 L 10 25" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="13" y1="20" x2="2" y2="20" stroke="#C5A059" strokeWidth="1.5"/><line x1="18" y1="18" x2="28" y2="18" stroke="white" strokeWidth="1" strokeOpacity="0.4"/><line x1="18" y1="22" x2="25" y2="22" stroke="white" strokeWidth="1" strokeOpacity="0.3"/></svg> },
  { title: "Fintechs", desc: "Enterprise-grade cross-border infrastructure.", href: "/solutions#fintechs",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><polygon points="20,5 35,14 35,26 20,35 5,26 5,14" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><polyline points="12,22 17,17 22,20 28,13" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: "Logistics", desc: "Connected shipment and payment workflows.", href: "/solutions#logistics",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="2" y="14" width="26" height="18" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><path d="M 28 20 L 34 20 L 38 26 L 38 32 L 28 32 Z" stroke="#C5A059" strokeWidth="1.5" fill="rgba(197,160,89,0.1)"/><circle cx="10" cy="35" r="4" stroke="white" strokeWidth="1.5" fill="none"/><circle cx="28" cy="35" r="4" stroke="#C5A059" strokeWidth="1.5" fill="none"/></svg> },
  { title: "Financial Institutions", desc: "Trade finance with risk frameworks.", href: "/solutions#financial-institutions",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><polygon points="20,4 36,14 36,16 4,16 4,14" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><line x1="4" y1="36" x2="36" y2="36" stroke="white" strokeWidth="1.5"/><rect x="6" y="18" width="6" height="16" rx="1" fill="rgba(255,255,255,0.1)"/><rect x="17" y="18" width="6" height="16" rx="1" fill="rgba(255,255,255,0.1)"/><rect x="28" y="18" width="6" height="16" rx="1" fill="rgba(197,160,89,0.15)"/></svg> },
  { title: "Government", desc: "Govern cross-border trade compliantly.", href: "/solutions#government",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="20" cy="20" r="14" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><line x1="6" y1="20" x2="34" y2="20" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/><path d="M 20 6 Q 26 13 26 20 Q 26 27 20 34" stroke="#C5A059" strokeWidth="1" fill="none"/><path d="M 20 6 Q 14 13 14 20 Q 14 27 20 34" stroke="#C5A059" strokeWidth="1" fill="none"/></svg> },
  { title: "NGOs", desc: "Cross-border operations for impact organizations.", href: "/solutions",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M 20 8 C 20 8 8 15 8 24 C 8 30 13 35 20 35 C 27 35 32 30 32 24 C 32 15 20 8 20 8 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><path d="M 14 22 L 18 26 L 26 18" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "International Orgs", desc: "Multilateral cross-border infrastructure.", href: "/solutions",
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="20" cy="20" r="14" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/><path d="M 6 20 L 34 20" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/><path d="M 20 6 L 20 34" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/><circle cx="20" cy="20" r="5" stroke="#C5A059" strokeWidth="1.5" fill="none"/></svg> },
];

const SECURITY = ["ISO 27001 Alignment", "NIST Cybersecurity Framework", "AML Controls", "KYC Processes", "FINTRAC Compliance", "PIPEDA Data Protection", "Bank of Ghana Standards", "FATF Recommendations", "Risk Management", "Audit Readiness", "Incident Response", "Zero Trust Architecture"];

const RESOURCES = [
  { title: "Blog", desc: "Insights on cross-border trade, payments, and compliance.", href: "/blog",
    svg: <svg viewBox="0 0 60 40" fill="none" className="w-full h-10"><rect x="5" y="5" width="50" height="30" rx="4" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4"/><line x1="12" y1="14" x2="48" y2="14" stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.6"/><line x1="12" y1="20" x2="42" y2="20" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4"/><line x1="12" y1="26" x2="38" y2="26" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.3"/></svg> },
  { title: "Case Studies", desc: "How businesses succeed with CorridorBridge.", href: "/case-studies",
    svg: <svg viewBox="0 0 60 40" fill="none" className="w-full h-10"><rect x="5" y="5" width="50" height="30" rx="4" fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4"/><polyline points="12,30 22,18 32,22 42,12 52,15" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/><circle cx="22" cy="18" r="2" fill="#10b981" opacity="0.7"/><circle cx="32" cy="22" r="2" fill="#10b981" opacity="0.7"/><circle cx="42" cy="12" r="2" fill="#10b981" opacity="0.7"/></svg> },
  { title: "Whitepapers", desc: "Deep research on Africa-Canada trade infrastructure.", href: "/blog",
    svg: <svg viewBox="0 0 60 40" fill="none" className="w-full h-10"><rect x="12" y="3" width="36" height="34" rx="3" fill="rgba(139,92,246,0.06)" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.4"/><line x1="18" y1="12" x2="42" y2="12" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.5"/><line x1="18" y1="18" x2="42" y2="18" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.4"/><line x1="18" y1="24" x2="36" y2="24" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3"/><line x1="18" y1="30" x2="30" y2="30" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.2"/></svg> },
  { title: "Trade Intelligence", desc: "Corridor-specific market intelligence reports.", href: "/blog",
    svg: <svg viewBox="0 0 60 40" fill="none" className="w-full h-10"><circle cx="30" cy="20" r="16" fill="rgba(59,130,246,0.06)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4"/><line x1="14" y1="20" x2="46" y2="20" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3"/><path d="M 30 4 Q 36 12 36 20 Q 36 28 30 36" stroke="#3b82f6" strokeWidth="1" fill="none" strokeOpacity="0.5"/><path d="M 30 4 Q 24 12 24 20 Q 24 28 30 36" stroke="#3b82f6" strokeWidth="1" fill="none" strokeOpacity="0.5"/></svg> },
  { title: "Compliance Guides", desc: "Practical FINTRAC, AML, and KYC guides.", href: "/blog",
    svg: <svg viewBox="0 0 60 40" fill="none" className="w-full h-10"><path d="M 30 3 L 52 12 L 52 26 C 52 35 30 39 30 39 C 30 39 8 35 8 26 L 8 12 Z" fill="rgba(245,158,11,0.06)" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4"/><polyline points="20,22 26,28 40,16" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/></svg> },
  { title: "Research", desc: "Data and analysis on cross-border payment trends.", href: "/blog",
    svg: <svg viewBox="0 0 60 40" fill="none" className="w-full h-10"><rect x="5" y="8" width="50" height="26" rx="4" fill="rgba(236,72,153,0.06)" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.4"/>{[10,18,26,34,42,50].map((x,i) => <rect key={x} x={x-3} y={35-[20,30,25,35,28,32][i]} width="6" height={[20,30,25,35,28,32][i]} rx="2" fill={`rgba(236,72,153,${0.2+i*0.05})`} stroke="#ec4899" strokeWidth="0.5" strokeOpacity="0.3"/>)}</svg> },
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "done">("idle");

  const heroSection   = useInView(0.1);
  const platformSection = useInView(0.2);
  const kpiSection    = useInView(0.2);
  const calcSection   = useInView(0.1);
  const mapSection    = useInView(0.15);
  const storySection  = useInView(0.1);

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
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(4px)} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .gradient-text { background: linear-gradient(90deg,#C5A059,#e8c97a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .section-eyebrow { color:#f59e0b; font-size:0.7rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.75rem; }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-blue-950 pt-16 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",backgroundSize:"48px 48px"}}/>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:"radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.4), transparent)"}}/>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10" style={{background:"radial-gradient(ellipse 60% 60% at 20% 80%, rgba(30,58,138,0.6), transparent)"}}/>
        </div>

        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className={`transition-all duration-1000 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"/>
                Africa ↔ Canada Infrastructure
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
                Cross-Border<br/>
                <span className="gradient-text">Infrastructure</span><br/>
                <span className="text-4xl md:text-5xl xl:text-6xl">Between Africa<br/>and Canada</span>
              </h1>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">
                Move payments, shipments, compliance workflows, and business operations across borders through one trusted platform.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-xl shadow-amber-500/20">
                  Request a Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Start Free Trial
                </Link>
              </div>
              <div className="flex flex-wrap gap-6">
                {[{label:"Free trial",value:"30 days"},{label:"No card required",value:"✓"},{label:"Advisory services",value:"8"},{label:"Cancel anytime",value:"✓"}].map(({label,value}) => (
                  <div key={label}>
                    <div className="text-white font-bold text-lg">{value}</div>
                    <div className="text-white/40 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 6-node network + dashboard */}
            <div className={`transition-all duration-1000 delay-300 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="text-white/40 text-xs font-semibold mb-2 uppercase tracking-wider">Live Corridor Network — 6 Active Nodes</div>
                  <CorridorNetwork />
                </div>
                <DashboardWidget inView={heroSection.inView} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
          <span className="text-xs">Scroll to explore</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <div className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase mr-2">Trusted Infrastructure</span>
            {["✓ Secure","✓ Compliant","✓ Enterprise Ready","✓ Canada-Based","✓ Africa-Focused"].map(b => (
              <span key={b} className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-400 mr-2">Compliance-aligned</span>
            {["FINTRAC","PCMLTFA","Bank of Ghana","FATF","PIPEDA","NIST","AML/KYC"].map(r => (
              <span key={r} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>{r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Cross-Border Operations<br/>Are Broken</h2>
            <p className="text-gray-500 text-lg">Businesses operating between Africa and Canada face fragmented, expensive, and opaque systems at every step.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS.map(({ title, color, bg, border, items, svg }) => (
              <div key={title} className="rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                style={{ background: bg, border: `1.5px solid ${border}` }}>
                {/* Custom SVG illustration */}
                <div className="w-full h-16 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {svg}
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-4 pb-3" style={{ borderBottom: `2px solid ${color}` }}>{title}</h3>
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

      {/* ── PLATFORM ARCHITECTURE ─────────────────────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px, white 1px, transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">The Platform</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">One Platform. Multiple Corridors.</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">CorridorBridge sits at the centre of every cross-border transaction, connecting businesses, banks, regulators, and logistics partners through unified, compliant infrastructure.</p>
          </div>
          <div ref={platformSection.ref} className="max-w-3xl mx-auto">
            <PlatformDiagram inView={platformSection.inView} />
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Platform Features</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Everything You Need To<br/>Operate Across Borders</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ title, desc, href, accent, miniSvg }) => (
              <Link key={title} href={href}
                className="bg-white border border-gray-200 rounded-2xl p-8 block group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-amber-200">
                {/* Mini SVG illustration */}
                <div className="mb-5 overflow-hidden rounded-xl p-3" style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
                  {miniSvg}
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="text-xs font-semibold flex items-center gap-1 transition-colors" style={{ color: accent }}>
                  Learn more
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enterprise banner strip */}
          <div className="rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden" style={{background:"linear-gradient(135deg, #0A1E3F 0%, #122952 50%, #0A1E3F 100%)"}}>
            <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",backgroundSize:"32px 32px"}}/>
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" style={{background:"radial-gradient(ellipse at 80% 50%, rgba(197,160,89,0.6), transparent)"}}/>
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Advisory Services</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expert-Led Cross-Border Advisory</h2>
                <p className="text-white/60 leading-relaxed">Our advisory team brings enterprise architecture, cybersecurity, governance, and African market expertise to every engagement — connected to a live platform.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Payment Readiness","Compliance Frameworks","Partner Selection","Governance Design","Risk Advisory","Cybersecurity","Fintech Strategy","Executive Advisory"].map(s => (
                  <div key={s} className="flex items-center gap-2 text-xs text-white/70">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#C5A059" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    {s}
                  </div>
                ))}
              </div>
            </div>
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

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">From Setup to Scale in 5 Steps</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"/>
            <div className="grid md:grid-cols-5 gap-6">
              {STEPS.map(({ num, title, desc, icon }) => (
                <div key={num} className="relative text-center group">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {icon}
                  </div>
                  <div className="text-amber-500 text-xs font-bold font-mono mb-1">{num}</div>
                  <h3 className="font-bold text-blue-950 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Use Cases</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Built For Every<br/>Cross-Border Operator</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {USE_CASES.map(({ title, icon, desc, href }) => (
              <Link key={title} href={href}
                className="rounded-2xl p-7 text-white group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block"
                style={{background:"linear-gradient(135deg, #0A1E3F 0%, #1e3a8a 100%)"}}>
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
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

      {/* ── WHY CORRIDORBRIDGE — KPI WIDGETS ──────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Why CorridorBridge</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Why Businesses Choose<br/>CorridorBridge</h2>
          </div>

          {/* Animated KPI counter row */}
          <div ref={kpiSection.ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <KPIWidget value={15} label="Active Corridors" suffix="+" color="#C5A059" inView={kpiSection.inView} delay={0}/>
            <KPIWidget value={99} label="Uptime SLA" suffix=".9%" color="#10b981" inView={kpiSection.inView} delay={100}/>
            <KPIWidget value={100} label="Compliance Framework" suffix="%" color="#8b5cf6" inView={kpiSection.inView} delay={200}/>
            <KPIWidget value={24} label="Monitoring Hours" suffix="/7" color="#3b82f6" inView={kpiSection.inView} delay={300}/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <KPIWidget value={8} label="Advisory Services" color="#f97316" inView={kpiSection.inView} delay={400}/>
            <KPIWidget value={2023} label="Canada Incorporated" color="#C5A059" inView={kpiSection.inView} delay={500}/>
            <KPIWidget value={40} label="FATF Recommendations" color="#10b981" inView={kpiSection.inView} delay={600}/>
            <KPIWidget value={30} label="Day Free Trial" color="#ef4444" inView={kpiSection.inView} delay={700}/>
          </div>

          {/* Why cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Canadian Governance", desc: "Incorporated in Canada with enterprise-grade compliance standards." },
              { title: "African Market Expertise", desc: "Deep expertise across Ghana, Nigeria, Kenya, and broader Africa." },
              { title: "Technology Platform", desc: "Modern API-first platform built for scale and integration." },
              { title: "Cybersecurity Leadership", desc: "NIST-aligned security protecting every transaction." },
              { title: "Compliance First", desc: "FINTRAC, AML, KYC, and PIPEDA embedded in every workflow." },
              { title: "Enterprise Scale", desc: "Built for financial institutions and large enterprises." },
              { title: "Cross-Border Focus", desc: "Exclusive focus on Africa-Canada corridors — depth over breadth." },
              { title: "Trusted Advisory", desc: "Expert advisors with real payment readiness experience." },
            ].map(({ title, desc }) => (
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

      {/* ── SECURITY — LOCKED / MINIMALLY ENHANCED ────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px, white 1px, transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Security & Compliance</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Security Built Into<br/>Every Transaction</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Enterprise-grade security and compliance protecting every payment, shipment, and data point.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {SECURITY.map((item, i) => (
              <div key={item}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                style={{ transitionDelay: `${i * 30}ms` }}
                title={item}>
                <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-2 group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-50"/>
                </div>
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

      {/* ── GLOBAL CORRIDOR COVERAGE ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-eyebrow">Global Coverage</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Active Corridor Coverage</h2>
            <p className="text-gray-500 text-lg">Live payment, compliance, and logistics infrastructure across all active corridors — with more in development.</p>
          </div>
          <div ref={mapSection.ref} className={`transition-all duration-700 ${mapSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <GlobalMap inView={mapSection.inView} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {[
              { label: "Canada ↔ Ghana", color: "#C5A059", status: "Live" },
              { label: "Canada ↔ Nigeria", color: "#f59e0b", status: "Live" },
              { label: "Canada ↔ Kenya", color: "#10b981", status: "Live" },
              { label: "Canada ↔ UK", color: "#a78bfa", status: "Live" },
              { label: "Canada ↔ Europe", color: "#f472b6", status: "Live" },
            ].map(({ label, color, status }) => (
              <div key={label} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }}/>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-blue-950 truncate">{label}</div>
                  <div className="text-[10px] font-bold" style={{ color }}>{status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER ECOSYSTEM ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-eyebrow">Partner Ecosystem</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Trusted Partner Network</h2>
            <p className="text-gray-500 text-lg">CorridorBridge operates through a curated ecosystem of licensed, regulated, and verified partners across every category.</p>
          </div>
          <PartnerEcosystem />
          <div className="text-center mt-10">
            <Link href="/partners" className="btn-navy px-8 py-3.5">View Partner Programme</Link>
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ───────────────────────────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 20px 20px, white 1px, transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Success Stories</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Results That Speak For Themselves</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Real outcomes from businesses that used CorridorBridge to transform their cross-border operations.</p>
          </div>
          <div ref={storySection.ref} className="grid md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map(({ segment, corridor, challenge, solution, outcomes, color }, i) => (
              <div key={segment}
                className={`bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-amber-500/20 transition-all duration-500 ${storySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${color}20`, color }}>{segment}</span>
                  <span className="text-[10px] text-white/40">{corridor}</span>
                </div>
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1">Challenge</div>
                  <p className="text-white/60 text-xs leading-relaxed">{challenge}</p>
                </div>
                <div className="mb-5">
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1">Solution</div>
                  <p className="text-white/60 text-xs leading-relaxed">{solution}</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-2">Outcomes</div>
                  {outcomes.map(({ metric, before, after, improvement }) => (
                    <div key={metric} className="flex items-center justify-between text-xs">
                      <span className="text-white/50">{metric}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-white/30 line-through text-[10px]">{before}</span>
                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        <span className="font-bold" style={{ color }}>{improvement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Pricing</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 text-lg">Start free for 30 days. No credit card required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Starter", price: "$59", unit: "CAD/month", desc: "For solo compliance consultants", cta: "Start Free Trial", href: "https://ops.corridorbridge.com/login?redirectTo=%2F", popular: false },
              { name: "Growth", price: "$149", unit: "CAD/user/month", desc: "For boutique advisory firms", cta: "Start Free Trial", href: "https://ops.corridorbridge.com/login?redirectTo=%2F", popular: true },
              { name: "Enterprise", price: "Custom", unit: "starts $5,000/month", desc: "For large firms and institutions", cta: "Contact Sales", href: "/contact", popular: false },
            ].map(({ name, price, unit, desc, cta, href, popular }) => (
              <div key={name} className={`rounded-2xl p-8 relative transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 ${popular ? "text-white shadow-xl" : "bg-white border border-gray-200"}`}
                style={popular ? {background:"linear-gradient(135deg, #0A1E3F, #122952)"} : {}}>
                {popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-blue-950 text-xs font-bold px-5 py-1.5 rounded-full">Most Popular</div>}
                <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${popular ? "text-amber-400" : "text-amber-500"}`}>{name}</div>
                <div className={`text-3xl font-bold mb-1 ${popular ? "text-white" : "text-blue-950"}`}>{price}</div>
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

      {/* ── RESOURCES + NEWSLETTER ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-eyebrow">Resources</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Insights and Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {RESOURCES.map(({ title, desc, href, svg }) => (
              <Link key={title} href={href} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 block group">
                <div className="mb-4 overflow-hidden rounded-xl p-2 bg-white border border-gray-100">
                  {svg}
                </div>
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
              <h3 className="text-xl font-bold text-white mb-1">Stay ahead of Africa-Canada trade trends</h3>
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
                  <button type="submit" disabled={newsletterStatus === "sending"} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all disabled:opacity-50 whitespace-nowrap">
                    {newsletterStatus === "sending" ? "..." : "Subscribe"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── READINESS CALCULATOR ──────────────────────────────────────────── */}
      <section ref={calcSection.ref} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-eyebrow">Interactive Tool</div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">What&apos;s Your Cross-Border Readiness Score?</h2>
              <p className="text-gray-500 text-lg mb-8">In 5 questions, understand where you stand and what CorridorBridge can do to close the gaps.</p>
              <div className="space-y-4">
                {[{icon:"🎯",text:"Personalised to your corridor"},{icon:"⚡",text:"Results in under 2 minutes"},{icon:"📋",text:"Actionable recommendations"},{icon:"🔒",text:"100% free — no signup required"}].map(({icon,text}) => (
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

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-eyebrow">FAQ</div>
            <h2 className="text-4xl font-bold text-blue-950">Frequently Asked Questions</h2>
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
                  <div className="px-6 pb-5"><p className="text-gray-500 text-sm leading-relaxed">{a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Get Started Today</div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to Build Your<br/>Cross-Border Corridor?</h2>
          <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto">Accelerate trade, payments, compliance, and business growth between Africa and Canada.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-base bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all shadow-xl shadow-amber-500/20">
              Request Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-base border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Book Consultation</Link>
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-base border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">Start Free Trial</Link>
          </div>
          <p className="text-white/30 text-sm">30-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* ── FOOTER TRUST BADGES ───────────────────────────────────────────── */}
      <div className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase mr-2">Compliance & Trust</span>
            {["FINTRAC","AML/KYC","PIPEDA","NIST Aligned","ISO 27001 Roadmap","Cybersecurity Leadership","Canada Incorporated","Enterprise Ready"].map(b => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>{b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



