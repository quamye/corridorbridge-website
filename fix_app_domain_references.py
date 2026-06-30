"""
fix_app_domain_references.py
Retires app.corridorbridge.com login/signup/app-access references in favour of
the CorridorBridge Ops login. PRESERVES privacy/terms links (those legal pages
only exist on app.corridorbridge.com; ops. redirects them to a login wall).

Run from: C:\\projects\\corridorbridge-website
Command:  python fix_app_domain_references.py
Idempotent. Reports each change.
"""
from pathlib import Path

ROOT = Path(r"C:\projects\corridorbridge-website\src")
OPS_LOGIN = "https://ops.corridorbridge.com/login?redirectTo=%2F"
changes = []

def edit(rel, replacements):
    p = ROOT / rel
    s = p.read_text(encoding="utf-8")
    orig = s
    for old, new, note in replacements:
        if old in s:
            s = s.replace(old, new)
            changes.append(f"  {rel}: {note}")
    if s != orig:
        p.write_text(s, encoding="utf-8")

# 1. Footer "Platform Login" -> Ops login (root app link, NOT privacy/terms)
edit("components/Footer.tsx", [
    ('{ label: "Platform Login", href: "https://app.corridorbridge.com" }',
     '{ label: "Platform Login", href: "' + OPS_LOGIN + '" }',
     'Platform Login -> Ops login'),
])

# 2. AIAdvisor chat text -> ops, plus the detection condition so the CTA still fires.
edit("components/AIAdvisor.tsx", [
    ('"Start Free Trial": "Great choice. You can start your 30-day free trial at app.corridorbridge.com \u2014 no credit card required.",',
     '"Start Free Trial": "Great choice. Start your trial through CorridorBridge Ops at ops.corridorbridge.com \u2014 no credit card required.",',
     'chat text app -> ops'),
    ('if (text.includes("app.corridorbridge.com")) return { label: "Start Free Trial", href: "' + OPS_LOGIN + '" };',
     'if (text.includes("ops.corridorbridge.com")) return { label: "Start Free Trial", href: "' + OPS_LOGIN + '" };',
     'CTA detection condition app -> ops (keeps button working)'),
])

# 3. App-access hrefs on homepage + platform page -> Ops login
edit("app/page.tsx", [
    ('href: "https://app.corridorbridge.com", accent: "#3b82f6",',
     'href: "' + OPS_LOGIN + '", accent: "#3b82f6",',
     'app-access href -> Ops login'),
])
edit("app/platform/page.tsx", [
    ('href: "https://app.corridorbridge.com",',
     'href: "' + OPS_LOGIN + '",',
     'app-access href -> Ops login'),
])

# 4. Contact display line -> current platform address (display text, not a link)
edit("app/contact/page.tsx", [
    ('{ label: "Platform", value: "app.corridorbridge.com", icon:',
     '{ label: "Platform", value: "ops.corridorbridge.com", icon:',
     'contact display address app -> ops'),
])

# NOTE: deliberately NOT changed (verified reasons):
#  - Footer privacy/terms links: legal pages exist only on app.corridorbridge.com
#    (ops. redirects /privacy and /terms to a login wall). Changing them would break legal links.
#  - about/page.tsx 2025 timeline: historical record of the V1 launch; left as history.

if changes:
    print("Applied changes:")
    print("\n".join(changes))
else:
    print("No changes (already applied?).")
