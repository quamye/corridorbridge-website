import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName, interest, utm_source, utm_medium, utm_campaign, page_source } = body;
    if (!email) return NextResponse.json({ error: "Email required." }, { status: 400 });
    if (body.website) return NextResponse.json({ success: true });

    const supabase = getSupabaseAdmin();
    await supabase.from("newsletter_subscribers").upsert({
      email, first_name: firstName, interest, utm_source, utm_medium, utm_campaign,
      source: page_source || "corridorbridge.com", status: "active",
    }, { onConflict: "email" });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}



