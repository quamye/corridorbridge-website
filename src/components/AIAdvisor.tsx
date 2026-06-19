"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "assistant" | "user"; text: string };

const INITIAL = "Hi! I'm the CorridorBridge AI Advisor. I can help you find the right solution for your cross-border operations. Which corridor are you operating on?";

const QUICK_REPLIES: Record<string, string[]> = {
  start: ["Canada ↔ Ghana", "Canada ↔ Nigeria", "Canada ↔ Kenya", "Other Africa corridor"],
  country: ["Under $10K/month", "$10K–$100K/month", "$100K–$1M/month", "Over $1M/month"],
  volume: ["Payments only", "Compliance only", "Logistics only", "All three"],
  needs: ["Book a Demo", "Start Free Trial", "View Services", "Talk to a Human"],
};

const FLOW: Record<string, (input: string) => { reply: string; next: string }> = {
  start: (input) => ({
    reply: `Great — the ${input} corridor is one of our most active. What is your monthly transaction volume on this corridor?`,
    next: "country",
  }),
  country: (input) => ({
    reply: `Got it — ${input}. That helps us understand the right service level for you. What do you primarily need help with?`,
    next: "volume",
  }),
  volume: (input) => ({
    reply: buildRecommendation(input),
    next: "needs",
  }),
  needs: (input) => ({
    reply: buildAction(input),
    next: "done",
  }),
  done: () => ({
    reply: "Is there anything else I can help you with? You can also reach our team directly at hello@corridorbridge.com.",
    next: "done",
  }),
};

function buildRecommendation(need: string): string {
  const map: Record<string, string> = {
    "Payments only": "Based on what you've shared, I'd recommend our **Payment Readiness Assessment** and **Partner Selection Advisory**. These two services will get your payment corridor designed, compliant, and operational. Your readiness score is estimated at 45/100 — there's good opportunity to close gaps quickly.",
    "Compliance only": "For compliance, I'd recommend our **Governance & Internal Controls Advisory** paired with our **FINTRAC Compliance Programme**. Most organizations in your position need both to achieve full regulatory alignment. Your estimated compliance readiness score is 38/100.",
    "Logistics only": "Our **Shipment Tracking** and **Workflow Design** services are the right fit. Connecting your logistics operations to payment milestones will significantly improve your operational efficiency. Estimated operational maturity score: 42/100.",
    "All three": "You need the full CorridorBridge platform — **Payments + Compliance + Logistics** working together. This is our most impactful engagement. Based on your profile, I estimate your cross-border readiness score at 35/100, with a clear 90-day path to operational readiness.",
  };
  return (map[need] || "Based on your profile, I recommend booking a discovery call with our team to assess your specific requirements.") + "\n\nWhat would you like to do next?";
}

function buildAction(action: string): string {
  const map: Record<string, string> = {
    "Book a Demo": "Perfect. Click the button below to book a personalised demo with our team. We'll walk you through the platform and design a solution for your specific corridor.",
    "Start Free Trial": "Great choice. You can start your 30-day free trial at app.corridorbridge.com — no credit card required.",
    "View Services": "Our full advisory services are listed at corridorbridge.com/services. You can also request a quote for any specific service.",
    "Talk to a Human": "Of course. Reach our team at hello@corridorbridge.com or use the contact form at corridorbridge.com/contact. We respond within 1 business day.",
  };
  return map[action] || "Feel free to reach us at hello@corridorbridge.com.";
}

function getActionLink(text: string): { label: string; href: string } | null {
  if (text.includes("book a personalised demo")) return { label: "Book a Demo", href: "/contact" };
  if (text.includes("app.corridorbridge.com")) return { label: "Start Free Trial", href: "https://app.corridorbridge.com/signup" };
  if (text.includes("corridorbridge.com/services")) return { label: "View Services", href: "/services" };
  if (text.includes("corridorbridge.com/contact")) return { label: "Contact Us", href: "/contact" };
  return null;
}

export default function AIAdvisor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: INITIAL }]);
  const [step, setStep] = useState("start");
  const [typing, setTyping] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!dismissed) {
      const t = setTimeout(() => setShowNudge(true), 8000);
      return () => clearTimeout(t);
    }
  }, [dismissed]);

  const handleQuickReply = (reply: string) => {
    if (step === "done") return;
    setMessages(m => [...m, { role: "user", text: reply }]);
    setTyping(true);
    setTimeout(() => {
      const { reply: assistantReply, next } = FLOW[step](reply);
      setMessages(m => [...m, { role: "assistant", text: assistantReply }]);
      setStep(next);
      setTyping(false);
    }, 900);
  };

  const reset = () => {
    setMessages([{ role: "assistant", text: INITIAL }]);
    setStep("start");
    setTyping(false);
  };

  const currentReplies = QUICK_REPLIES[step] || [];

  return (
    <>
      {/* Nudge bubble */}
      {showNudge && !open && !dismissed && (
        <div className="fixed bottom-24 right-6 z-40 max-w-xs animate-bounce-once">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-4 relative">
            <button onClick={() => { setShowNudge(false); setDismissed(true); }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
              <span className="text-xs font-bold text-blue-950">CorridorBridge AI</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">Need help finding the right solution for your corridor? I can guide you in 60 seconds.</p>
            <button onClick={() => { setOpen(true); setShowNudge(false); }}
              className="mt-3 w-full py-2 rounded-xl bg-blue-950 text-white text-xs font-semibold hover:bg-blue-900 transition-all">
              Get Started →
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"/>
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 flex flex-col shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
          style={{maxHeight: "520px"}}>
          {/* Header */}
          <div className="bg-blue-950 px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm leading-tight">CorridorBridge AI</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                  <span className="text-white/40 text-[10px]">Online · Responds instantly</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={reset} title="Restart"
                className="text-white/40 hover:text-white transition-colors p-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="23 4 23 10 17 10"/>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                </svg>
              </button>
              <button onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3" style={{maxHeight: "300px"}}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-blue-950 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400"/>
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                  msg.role === "user"
                    ? "bg-blue-950 text-white rounded-tr-sm"
                    : "bg-white border border-gray-200 text-gray-700 rounded-tl-sm shadow-sm"
                }`}>
                  {msg.text.split("\n").map((line, j) => (
                    <p key={j} className={j > 0 ? "mt-1.5" : ""}>{line}</p>
                  ))}
                  {/* Action button inside message */}
                  {msg.role === "assistant" && (() => {
                    const action = getActionLink(msg.text);
                    return action ? (
                      <a href={action.href}
                        className="mt-3 flex items-center gap-1.5 text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        {action.label}
                      </a>
                    ) : null;
                  })()}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full bg-blue-950 flex items-center justify-center mr-2 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400"/>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400"
                        style={{animation: `bounce 1.2s ease ${i * 0.2}s infinite`}}/>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Quick replies */}
          {!typing && currentReplies.length > 0 && (
            <div className="bg-white border-t border-gray-100 p-3 flex flex-wrap gap-2 flex-shrink-0">
              {currentReplies.map(reply => (
                <button key={reply} onClick={() => handleQuickReply(reply)}
                  className="px-3 py-2 rounded-xl text-[11px] font-semibold border-2 border-gray-200 text-gray-700 hover:border-blue-950 hover:text-blue-950 transition-all bg-gray-50 hover:bg-white">
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="bg-white border-t border-gray-100 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
            <span className="text-[10px] text-gray-300">Powered by CorridorBridge AI</span>
            <a href="/contact" className="text-[10px] text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              Talk to a human →
            </a>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button onClick={() => { setOpen(!open); setShowNudge(false); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-amber-500/25"
        style={{background: open ? "#0A1E3F" : "linear-gradient(135deg, #0A1E3F, #1e3a8a)"}}>
        {open ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"/>
            </div>
          </>
        )}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}
