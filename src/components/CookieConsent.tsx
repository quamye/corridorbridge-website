"use client";
import { useState, useEffect } from "react";

type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  performance: boolean;
};

const DEFAULT_CONSENT: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  performance: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);

  useEffect(() => {
    const stored = localStorage.getItem("cb_cookie_consent");
    if (!stored) {
      // Show banner after 1.5s delay
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (c: ConsentState) => {
    localStorage.setItem("cb_cookie_consent", JSON.stringify({
      ...c,
      timestamp: new Date().toISOString(),
      version: "1.0",
    }));
    setVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () => save({ essential: true, analytics: true, marketing: true, performance: true });
  const rejectNonEssential = () => save({ essential: true, analytics: false, marketing: false, performance: false });
  const savePreferences = () => save(consent);

  const toggle = (key: keyof Omit<ConsentState, "essential">) =>
    setConsent(c => ({ ...c, [key]: !c[key] }));

  if (!visible) return null;

  return (
    <>
      {/* Backdrop for preferences modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]" onClick={() => setShowPreferences(false)}/>
      )}

      {/* Preferences modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
            <button onClick={() => setShowPreferences(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-950 text-lg">Cookie Preferences</h3>
                <p className="text-gray-400 text-xs">Manage your consent settings</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                {
                  key: "essential" as const,
                  label: "Essential Cookies",
                  desc: "Required for the website to function. Cannot be disabled.",
                  locked: true,
                  value: true,
                },
                {
                  key: "analytics" as const,
                  label: "Analytics Cookies",
                  desc: "Help us understand how visitors interact with our website to improve user experience.",
                  locked: false,
                  value: consent.analytics,
                },
                {
                  key: "performance" as const,
                  label: "Performance Cookies",
                  desc: "Allow us to measure and enhance the performance of our website.",
                  locked: false,
                  value: consent.performance,
                },
                {
                  key: "marketing" as const,
                  label: "Marketing Cookies",
                  desc: "Used to deliver relevant advertisements and track campaign effectiveness.",
                  locked: false,
                  value: consent.marketing,
                },
              ].map(({ key, label, desc, locked, value }) => (
                <div key={key} className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="font-semibold text-blue-950 text-sm mb-1">{label}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex-shrink-0 mt-0.5">
                    {locked ? (
                      <div className="w-11 h-6 rounded-full bg-blue-950 flex items-center justify-end px-0.5">
                        <div className="w-5 h-5 rounded-full bg-white shadow"/>
                        <svg className="w-3 h-3 text-white absolute ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                      </div>
                    ) : (
                      <button onClick={() => key !== "essential" && toggle(key as keyof Omit<ConsentState, "essential">)}
                        className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${value ? "bg-blue-950" : "bg-gray-300"}`}>
                        <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${value ? "translate-x-5" : "translate-x-0.5"}`}/>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xs text-gray-400 mb-5 leading-relaxed">
              We process data in accordance with our <a href="/privacy" className="text-blue-950 underline">Privacy Policy</a>. 
              This platform is GDPR and PIPEDA compliant. Incorporated in Canada.
            </div>

            <div className="flex gap-3">
              <button onClick={savePreferences}
                className="flex-1 py-3 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 transition-all">
                Save Preferences
              </button>
              <button onClick={acceptAll}
                className="flex-1 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
          <div className="max-w-5xl mx-auto bg-blue-950 border border-amber-500/20 rounded-2xl shadow-2xl p-5 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              {/* Icon + text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm mb-1">We use cookies</div>
                  <p className="text-white/50 text-xs leading-relaxed max-w-xl">
                    We use cookies to improve your experience, analyze traffic, and enhance platform performance. 
                    This platform is compliant with <span className="text-white/70">GDPR</span> and <span className="text-white/70">PIPEDA</span> (Canadian privacy law). 
                    You can manage your preferences at any time.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2 flex-shrink-0 w-full md:w-auto">
                <button onClick={() => setShowPreferences(true)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white/60 border border-white/15 hover:border-white/30 hover:text-white transition-all">
                  Cookie Preferences
                </button>
                <button onClick={rejectNonEssential}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-all">
                  Reject Non-Essential
                </button>
                <button onClick={acceptAll}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all shadow-lg">
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
