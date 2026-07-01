"""
fix_shipment_tracking.py
Replaces the fake self-contained DemoTracker (hardcoded CB-2026-* codes that
do not exist in real data) with a real, safe handoff to the working Ops public
tracker at https://ops.corridorbridge.com/track.

Why handoff (not inline): the website's only Supabase client is service-role
(admin, bypasses RLS) - unsafe for public tracking. The Ops /track page uses
the public_track_shipment RPC which safely returns only public fields. So we
send users there rather than risk leaking internal fields.

Keeps all marketing content (hero, capabilities, corridors, integration flow).
Shows REAL seeded demo codes (CB-DEMO-*).

Run from: C:\\projects\\corridorbridge-website
Command:  python fix_shipment_tracking.py
"""
from pathlib import Path

p = Path(r"C:\projects\corridorbridge-website\src\app\shipment-tracking\page.tsx")
s = p.read_text(encoding="utf-8")
orig = s

# 1. Remove the DEMO_SHIPMENTS constant block through DEMO_CODES line.
start = s.find("// \u2500\u2500\u2500 Demo Shipment Data")
if start == -1:
    start = s.find("const DEMO_SHIPMENTS")
end_marker = "const DEMO_CODES = Object.keys(DEMO_SHIPMENTS);"
end = s.find(end_marker)
if start != -1 and end != -1:
    s = s[:start] + "// Live tracking is handled by the CorridorBridge Ops public tracker." + s[end + len(end_marker):]

# 2. Remove the ShipmentResult component entirely (Ops renders results now).
sr_start = s.find("function ShipmentResult(")
if sr_start != -1:
    dt = s.find("function DemoTracker()", sr_start)
    if dt != -1:
        s = s[:sr_start] + s[dt:]

# 3. Replace DemoTracker with a real Ops handoff.
dt_start = s.find("function DemoTracker()")
after_marker = s.find("// \u2500\u2500\u2500 Existing page capabilities", dt_start)
if after_marker == -1:
    after_marker = s.find("const CAPABILITIES", dt_start)

new_tracker = '''const REAL_DEMO_CODES = ["CB-DEMO-0847", "CB-DEMO-1203", "CB-DEMO-0521", "CB-DEMO-2041"];
const OPS_TRACK_URL = "https://ops.corridorbridge.com/track";

function DemoTracker() {
  const [copied, setCopied] = useState("");

  const copyCode = async (code: string) => {
    try { await navigator.clipboard.writeText(code); setCopied(code); setTimeout(() => setCopied(""), 1500); }
    catch { /* clipboard unavailable - user can still read the code */ }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
      <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Live Tracking</div>
      <h3 className="font-display text-2xl font-bold text-blue-950 mb-2">Track a Shipment</h3>
      <p className="text-gray-500 text-sm mb-6">
        View live shipment status, corridor progress, and delivery updates on the secure CorridorBridge Ops&trade; public tracker &mdash; no login required.
      </p>

      <a href={OPS_TRACK_URL} target="_blank" rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 transition-all mb-5">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        Open CorridorBridge Ops&trade; Tracker
      </a>

      {/* Real demo codes that work on the Ops tracker */}
      <div className="text-xs text-gray-400 mb-2">Try one of these demo tracking numbers:</div>
      <div className="grid grid-cols-2 gap-2">
        {REAL_DEMO_CODES.map(code => (
          <button key={code} type="button" onClick={() => copyCode(code)}
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-lg bg-white border border-gray-200 text-blue-950 font-mono font-semibold hover:border-amber-400 hover:bg-amber-50 transition-all">
            <span>{code}</span>
            <span className="text-[10px] text-gray-400 font-sans">{copied === code ? "Copied\u2713" : "Copy"}</span>
          </button>
        ))}
      </div>
      <p className="text-[11px] text-gray-400 mt-3">
        Copy a demo code, open the tracker, and paste it to see live corridor shipment status.
      </p>
    </div>
  );
}

'''

if dt_start != -1 and after_marker != -1:
    s = s[:dt_start] + new_tracker + s[after_marker:]
    print("DemoTracker replaced with real Ops handoff.")
else:
    print("WARNING: could not locate DemoTracker boundaries. dt_start=%s after=%s" % (dt_start, after_marker))

if s != orig:
    p.write_text(s, encoding="utf-8")
    print("shipment-tracking/page.tsx updated.")
else:
    print("No changes written.")
