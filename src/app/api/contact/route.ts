import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, corridor, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Save to Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error: dbError } = await supabase.from("leads").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      company,
      corridor,
      message,
      source: "corridorbridge.com/contact",
      status: "new",
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "CorridorBridge <hello@corridorbridge.com>",
          to: ["hello@corridorbridge.com"],
          subject: `New Lead: ${firstName} ${lastName} — ${company || "No company"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "—"}</p>
            <p><strong>Corridor:</strong> ${corridor || "—"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr/>
            <p><em>Source: corridorbridge.com/contact</em></p>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
