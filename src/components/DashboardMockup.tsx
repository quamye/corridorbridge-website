"use client";

// Payments Dashboard Mockup
export function PaymentsDashboard() {
  const transactions = [
    { id: "TXN-8821", amount: "CAD 42,500", currency: "GHS", status: "Settled", corridor: "Canada → Ghana", time: "2m ago", color: "#10b981" },
    { id: "TXN-8820", amount: "CAD 118,000", currency: "NGN", status: "Processing", corridor: "Canada → Nigeria", time: "14m ago", color: "#f59e0b" },
    { id: "TXN-8819", amount: "CAD 28,750", currency: "KES", status: "Settled", corridor: "Canada → Kenya", time: "1h ago", color: "#10b981" },
    { id: "TXN-8818", amount: "CAD 7,200", currency: "GHS", status: "Pending", corridor: "Canada → Ghana", time: "3h ago", color: "#3b82f6" },
  ];

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
      {/* Title bar */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70"/>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
          <div className="w-3 h-3 rounded-full bg-green-500/70"/>
        </div>
        <span className="text-gray-400 text-xs ml-2 font-mono">CorridorBridge — Payments</span>
      </div>

      <div className="p-5">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Total Volume", value: "CAD 2.4M", change: "+18%", color: "#C5A059" },
            { label: "Settled", value: "847", change: "+12%", color: "#10b981" },
            { label: "Avg Settlement", value: "1.8 days", change: "-0.3d", color: "#3b82f6" },
          ].map(({ label, value, change, color }) => (
            <div key={label} className="bg-gray-800 rounded-xl p-3 border border-gray-700">
              <div className="text-gray-500 text-[10px] mb-1">{label}</div>
              <div className="font-bold text-sm text-white">{value}</div>
              <div className="text-[10px] font-semibold mt-0.5" style={{color}}>{change}</div>
            </div>
          ))}
        </div>

        {/* Transactions */}
        <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-2">Recent Transactions</div>
        <div className="space-y-2">
          {transactions.map(({ id, amount, currency, status, corridor, time, color }) => (
            <div key={id} className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-3 py-2.5 border border-gray-700/50">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: color}}/>
              <div className="flex-1 min-w-0">
                <div className="text-white text-[11px] font-semibold truncate">{corridor}</div>
                <div className="text-gray-500 text-[10px]">{id} · {time}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-white text-[11px] font-bold">{amount}</div>
                <div className="text-[10px] font-semibold" style={{color}}>{status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Compliance Dashboard Mockup
export function ComplianceDashboard() {
  const checks = [
    { label: "KYC Verified", value: "247 clients", score: 100, color: "#10b981" },
    { label: "AML Screening", value: "All clear", score: 98, color: "#10b981" },
    { label: "FINTRAC Reports", value: "12 filed", score: 100, color: "#C5A059" },
    { label: "Risk Score", value: "Low — 14/100", score: 86, color: "#3b82f6" },
    { label: "Audit Readiness", value: "94%", score: 94, color: "#8b5cf6" },
  ];

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70"/>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
          <div className="w-3 h-3 rounded-full bg-green-500/70"/>
        </div>
        <span className="text-gray-400 text-xs ml-2 font-mono">CorridorBridge — Compliance</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
          <span className="text-emerald-400 text-[10px] font-semibold">All Systems Clear</span>
        </div>
      </div>

      <div className="p-5">
        <div className="space-y-3">
          {checks.map(({ label, value, score, color }) => (
            <div key={label} className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-[11px] font-medium">{label}</span>
                <span className="text-[11px] font-bold" style={{color}}>{value}</span>
              </div>
              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{width: `${score}%`, background: color}}/>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-emerald-400 text-[11px] font-semibold">Compliance programme audit-ready</span>
        </div>
      </div>
    </div>
  );
}

// Analytics Dashboard Mockup
export function AnalyticsDashboard() {
  const bars = [35, 52, 41, 68, 55, 82, 71, 88, 65, 94, 78, 100];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70"/>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
          <div className="w-3 h-3 rounded-full bg-green-500/70"/>
        </div>
        <span className="text-gray-400 text-xs ml-2 font-mono">CorridorBridge — Analytics</span>
      </div>

      <div className="p-5">
        <div className="flex items-end gap-1 h-28 mb-3">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end gap-0.5">
              <div className="rounded-sm transition-all" style={{
                height: `${h}%`,
                background: i === bars.length - 1
                  ? "linear-gradient(180deg, #C5A059, #C5A05980)"
                  : "rgba(255,255,255,0.08)",
              }}/>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mb-4">
          {months.map((m, i) => (
            <div key={i} className="flex-1 text-center text-[8px] text-gray-600">{m}</div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Payment Volume", value: "↑ 94%", color: "#C5A059" },
            { label: "Active Corridors", value: "4", color: "#10b981" },
            { label: "Avg Risk Score", value: "14 / Low", color: "#3b82f6" },
            { label: "Compliance Rate", value: "98.4%", color: "#8b5cf6" },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50">
              <div className="text-gray-500 text-[10px] mb-1">{label}</div>
              <div className="font-bold text-sm" style={{color}}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
