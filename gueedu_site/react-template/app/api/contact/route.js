import { NextResponse } from "next/server";
import { addContactLead } from "@/lib/contactLeadsStore";
import { sendContactLeadNotification } from "@/lib/contactNotifier";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SERVICES = new Set([
  "Software Development",
  "AI Automation",
  "SaaS & Open-Source",
  "DevOps & Cloud Engineering",
  "IT Training",
  "Technical Consulting",
]);

function sanitize(value) {
  return typeof value === "string" ? value.trim() : "";
}

function buildFallbackLead({ name, email, phone, service, message }) {
  const now = new Date().toISOString();
  return {
    id: `fallback-${Date.now()}`,
    createdAt: now,
    updatedAt: now,
    status: "new",
    name,
    email,
    phone,
    service,
    message,
    source: "website-contact-form",
  };
}

export async function POST(request) {
  try {
    const payload = await request.json();

    const name = sanitize(payload.name);
    const email = sanitize(payload.email).toLowerCase();
    const phone = sanitize(payload.phone);
    const service = sanitize(payload.service);
    const message = sanitize(payload.message);
    const website = sanitize(payload.website);

    if (website) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    if (!name || name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: "Please enter a valid full name." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (phone && phone.length > 40) {
      return NextResponse.json({ error: "Phone number is too long." }, { status: 400 });
    }

    if (!ALLOWED_SERVICES.has(service)) {
      return NextResponse.json({ error: "Please select a valid service." }, { status: 400 });
    }

    if (!message || message.length < 20 || message.length > 3000) {
      return NextResponse.json(
        { error: "Project brief must be between 20 and 3000 characters." },
        { status: 400 }
      );
    }

    let lead;

    try {
      lead = await addContactLead({
        name,
        email,
        phone,
        service,
        message,
        source: "website-contact-form",
      });
    } catch (storageError) {
      console.error("Contact lead storage failed:", storageError);
      lead = buildFallbackLead({ name, email, phone, service, message });
    }

    await sendContactLeadNotification(lead);

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: "Thanks. Your inquiry has been received. We will reply shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit inquiry right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
