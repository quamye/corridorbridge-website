"""
update_navbar_demo_cta.py
Points the two "Request Demo" CTAs in the website Navbar from /contact to
/request-demo. Leaves /contact and everything else untouched.
Run from: C:\\projects\\corridorbridge-website
Command:  python update_navbar_demo_cta.py
Idempotent.
"""
from pathlib import Path

p = Path(r"C:\projects\corridorbridge-website\src\components\Navbar.tsx")
s = p.read_text(encoding="utf-8")
orig = s
count = 0

# Both desktop and mobile "Request Demo" links use href="/contact" on the
# amber CTA button. Target the specific CTA lines (the ones whose text is
# "Request Demo"), not the general Contact nav link.

# Desktop CTA: <Link href="/contact" ...>Request Demo</Link>
desktop_old = '<Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5">'
desktop_new = desktop_old.replace('href="/contact"', 'href="/request-demo"')
if desktop_old in s:
    s = s.replace(desktop_old, desktop_new, 1)
    count += 1

# Mobile CTA: <Link href="/contact" ...>Request Demo</Link>
mobile_old = '<Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">'
mobile_new = mobile_old.replace('href="/contact"', 'href="/request-demo"')
if mobile_old in s:
    s = s.replace(mobile_old, mobile_new, 1)
    count += 1

if s != orig:
    p.write_text(s, encoding="utf-8")
    print(f"Navbar updated: {count} Request Demo CTA(s) now point to /request-demo.")
else:
    print("Navbar: no changes (already updated, or CTA markup differs - inspect manually).")
