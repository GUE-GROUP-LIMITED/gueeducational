import { NextResponse } from "next/server";
import { listContactLeads } from "@/lib/contactLeadsStore";

export const runtime = "nodejs";

function readBearerToken(request) {
  const authHeader = request.headers.get("authorization") || "";
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

export async function GET(request) {
  const expectedToken = process.env.CONTACT_LEADS_ADMIN_TOKEN || "";

  if (!expectedToken) {
    return NextResponse.json(
      { error: "CONTACT_LEADS_ADMIN_TOKEN is not configured." },
      { status: 503 }
    );
  }

  const providedToken = readBearerToken(request);
  if (!providedToken || providedToken !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get("limit") || "50";
    const leads = await listContactLeads({ limit: limitParam });

    return NextResponse.json({ leads, count: leads.length });
  } catch {
    return NextResponse.json({ error: "Unable to load contact leads." }, { status: 500 });
  }
}
