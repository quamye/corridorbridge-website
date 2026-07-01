"""
fix_request_demo.py
1. Updates the /request-demo success message to the exact required wording.
2. Adds an id="request-demo-form" anchor to the hero/form section so the
   "Request Access" CTA can scroll to it.
3. Adds a "How clients and partners get access" section (5 steps + Request
   Access CTA + Sign in to Ops link). No fake self-service signup.

Inserted after the "What the demo covers" section (clean </section> boundary).

Run from: C:\\projects\\corridorbridge-website
Command:  python fix_request_demo.py
Idempotent.
"""
from pathlib import Path

TM = "\u2122"  # trademark

p = Path(r"C:\projects\corridorbridge-website\src\app\request-demo\page.tsx")
s = p.read_text(encoding="utf-8")
orig = s

# ── Edit 1: success message ──────────────────────────────────────────────────
old_msg = "Thank you. Our team will be in touch within one business day to arrange your walkthrough."
new_msg = "Thank you. Your demo request has been received. CorridorBridge will contact you shortly."
if old_msg in s:
    s = s.replace(old_msg, new_msg, 1)
    print("Edit 1 (success message): applied")
elif new_msg in s:
    print("Edit 1 (success message): already applied")
else:
    print("Edit 1 (success message): WARNING not found; skipped")

# ── Edit 2: add anchor id to the hero/form section ───────────────────────────
# The hero grid wrapper (from earlier: line ~125) starts the form area.
anchor_target = '<div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 lg:pt-36 lg:pb-20 grid lg:grid-cols-2 gap-12 items-start">'
anchor_replace = '<div id="request-demo-form" className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 lg:pt-36 lg:pb-20 grid lg:grid-cols-2 gap-12 items-start">'
if anchor_target in s:
    s = s.replace(anchor_target, anchor_replace, 1)
    print("Edit 2 (form anchor): applied")
elif 'id="request-demo-form"' in s:
    print("Edit 2 (form anchor): already applied")
else:
    print("Edit 2 (form anchor): WARNING hero wrapper not matched; CTA will still link to /request-demo#request-demo-form but anchor missing")

# ── Edit 3: guidance section, inserted after "What the demo covers" section ───
# Anchor on the end of that section. We find the "What the demo covers" marker,
# then the next "</section>" after it.
marker = "What the demo covers"
mpos = s.find(marker)
guidance = '''

      {/* How clients and partners get access */}
      <section className="bg-gray-50 py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-amber-600 mb-2">Account Access</div>
            <h2 className="font-serif text-3xl font-bold text-blue-950 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>How clients and partners get access</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              CorridorBridge Ops&trade; access is reviewed before account creation. Clients, partners, PSPs, banks, and corridor operators can request access by submitting the form above. Our team reviews the request, confirms the organization context, and then creates or approves the appropriate CorridorBridge Ops&trade; workspace access.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              ["1", "Submit access request", "Complete the request form with your organization and corridor details."],
              ["2", "CorridorBridge reviews", "We confirm your organization context and corridor requirements."],
              ["3", "Workspace approved", "We create or approve the appropriate CorridorBridge Ops&trade; access."],
              ["4", "Receive instructions", "You receive secure sign-in instructions for your workspace."],
              ["5", "Sign in to Ops", "Access CorridorBridge Ops&trade; and your corridor workspace."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-950 text-white text-sm font-bold flex items-center justify-center mb-3">{n}</div>
                <div className="font-bold text-blue-950 text-sm mb-1.5">{t}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{d}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#request-demo-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Request Access
            </a>
            <a href="https://ops.corridorbridge.com/login?redirectTo=%2F"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-blue-950/20 text-blue-950 hover:border-blue-950 transition-all">
              Sign in to CorridorBridge Ops&trade;
            </a>
          </div>
          <p className="text-center text-[12px] text-gray-400 mt-5">
            Access is granted after organization review. CorridorBridge does not offer public self-service account creation.
          </p>
        </div>
      </section>
'''

if mpos != -1:
    close = s.find("</section>", mpos)
    if close != -1:
        insert_at = close + len("</section>")
        if "How clients and partners get access" not in s:
            s = s[:insert_at] + guidance + s[insert_at:]
            print("Edit 3 (guidance section): applied")
        else:
            print("Edit 3 (guidance section): already present")
    else:
        print("Edit 3 (guidance section): WARNING no </section> after marker; skipped")
else:
    print("Edit 3 (guidance section): WARNING 'What the demo covers' not found; skipped")

if s != orig:
    p.write_text(s, encoding="utf-8")
    print("request-demo/page.tsx: written.")
else:
    print("request-demo/page.tsx: no changes.")
