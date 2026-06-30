import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, corridor, message, intent = "contact", page_source, utm_source, utm_medium, utm_campaign, referrer } = body;
    if (!firstName || !email) return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    if (body.website) return NextResponse.json({ success: true });

    const supabase = getSupabaseAdmin();
    await supabase.from("leads").insert({
      first_name: firstName, last_name: lastName, email, company, corridor, message,
      intent, source: "corridorbridge.com", page_source, utm_source, utm_medium, utm_campaign, referrer, status: "new",
    });

    const key = process.env.RESEND_API_KEY;
    if (key) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
        body: JSON.stringify({
          from: "CorridorBridge <hello@corridorbridge.com>",
          to: ["hello@corridorbridge.com"],
          subject: `New ${intent}: ${firstName} ${lastName} — ${company || "No company"}`,
          html: `<h2>New Lead — ${intent}</h2><p><b>Name:</b> ${firstName} ${lastName}</p><p><b>Email:</b> ${email}</p><p><b>Company:</b> ${company || "—"}</p><p><b>Corridor:</b> ${corridor || "—"}</p><p><b>Message:</b> ${message || "—"}</p><p><b>Source:</b> ${page_source || "—"}</p>`,
        }),
      });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}



