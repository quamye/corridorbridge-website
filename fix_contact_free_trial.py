"""
fix_contact_free_trial.py
Makes the "Start Free Trial" intent on /contact route to CorridorBridge Ops
login instead of being a dead click (it currently only sets form intent state).

Applies to BOTH render spots:
  1. Hero quick-contact card (~line 78)
  2. Form "I want to" intent selector (~line 181)

For the free_trial item ONLY, renders an <a> link to Ops login.
All other intents (demo_request, book_consultation, contact) keep their exact
existing button behavior. Form submission, styling, and layout are unchanged.

Run from: C:\\projects\\corridorbridge-website
Command:  python fix_contact_free_trial.py
Idempotent.
"""
from pathlib import Path

p = Path(r"C:\projects\corridorbridge-website\src\app\contact\page.tsx")
s = p.read_text(encoding="utf-8")
orig = s
OPS = "https://ops.corridorbridge.com/login?redirectTo=%2F"

# ── Edit 1: Hero quick-contact card (with icon + label) ─────────────────────
hero_old = '''            {INTENTS.map(({ value, label, icon }) => (
              <button key={value} onClick={() => update("intent", value)}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                  form.intent === value
                    ? "bg-amber-500/20 border-amber-500 text-white"
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                }`}>
                <div className="text-xl mb-2">{icon}</div>
                <div className="text-xs font-semibold">{label}</div>
              </button>
            ))}'''

hero_new = '''            {INTENTS.map(({ value, label, icon }) => (
              value === "free_trial" ? (
                <a key={value} href="''' + OPS + '''"
                  aria-label="Start Free Trial \u2014 continue to CorridorBridge Ops login"
                  className="p-4 rounded-2xl border-2 text-left transition-all duration-200 bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 block">
                  <div className="text-xl mb-2">{icon}</div>
                  <div className="text-xs font-semibold">{label}</div>
                </a>
              ) : (
                <button key={value} onClick={() => update("intent", value)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                    form.intent === value
                      ? "bg-amber-500/20 border-amber-500 text-white"
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                  }`}>
                  <div className="text-xl mb-2">{icon}</div>
                  <div className="text-xs font-semibold">{label}</div>
                </button>
              )
            ))}'''

if hero_old in s:
    s = s.replace(hero_old, hero_new, 1)
    print("Edit 1 (hero card): applied")
else:
    print("Edit 1 (hero card): PATTERN NOT FOUND - inspect manually")

# ── Edit 2: Form "I want to" intent selector (label only, type=button) ───────
form_old = '''                        {INTENTS.map(({ value, label }) => (
                          <button key={value} type="button" onClick={() => update("intent", value)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold border-2 transition-all ${
                              form.intent === value
                                ? "border-blue-950 bg-blue-950 text-white"
                                : "border-gray-200 text-gray-600 hover:border-blue-950"
                            }`}>
                            {label}
                          </button>
                        ))}'''

form_new = '''                        {INTENTS.map(({ value, label }) => (
                          value === "free_trial" ? (
                            <a key={value} href="''' + OPS + '''"
                              aria-label="Start Free Trial \u2014 continue to CorridorBridge Ops login"
                              className="py-2.5 px-3 rounded-xl text-xs font-semibold border-2 transition-all border-gray-200 text-gray-600 hover:border-blue-950 flex items-center justify-center text-center">
                              {label}
                            </a>
                          ) : (
                            <button key={value} type="button" onClick={() => update("intent", value)}
                              className={`py-2.5 px-3 rounded-xl text-xs font-semibold border-2 transition-all ${
                                form.intent === value
                                  ? "border-blue-950 bg-blue-950 text-white"
                                  : "border-gray-200 text-gray-600 hover:border-blue-950"
                              }`}>
                              {label}
                            </button>
                          )
                        ))}'''

if form_old in s:
    s = s.replace(form_old, form_new, 1)
    print("Edit 2 (form selector): applied")
else:
    print("Edit 2 (form selector): PATTERN NOT FOUND - inspect manually")

if s != orig:
    p.write_text(s, encoding="utf-8")
    print("\nFile saved.")
else:
    print("\nNo changes written.")
