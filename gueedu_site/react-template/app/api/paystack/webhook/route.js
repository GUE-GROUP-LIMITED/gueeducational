import crypto from "crypto";
import { NextResponse } from "next/server";
import { upsertOrderByReference } from "@/lib/ordersStore";

function verifyWebhookSignature(rawBody, signature, secretKey) {
  if (!signature || !secretKey) return false;
  const hash = crypto
    .createHmac("sha512", secretKey)
    .update(rawBody, "utf8")
    .digest("hex");

  try {
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(signature));
  } catch {
    return false;
  }
}

export async function POST(request) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing PAYSTACK_SECRET_KEY environment variable." },
        { status: 500 }
      );
    }

    const signature = request.headers.get("x-paystack-signature");
    const rawBody = await request.text();

    if (!verifyWebhookSignature(rawBody, signature, secretKey)) {
      return NextResponse.json({ error: "Invalid webhook signature." }, { status: 401 });
    }

    const eventPayload = JSON.parse(rawBody || "{}");
    const event = eventPayload?.event;
    const data = eventPayload?.data || {};
    const reference = data?.reference;

    if (!reference) {
      return NextResponse.json({ received: true, ignored: true });
    }

    if (event === "charge.success") {
      await upsertOrderByReference(reference, {
        status: "success",
        paidAt: data?.paid_at || null,
        gatewayResponse: data?.gateway_response || null,
        amountKobo: data?.amount,
        channel: data?.channel || null,
        customerEmail: data?.customer?.email || null,
        metadata: data?.metadata || null,
        webhookEvent: event,
      });
    } else if (event === "charge.failed") {
      await upsertOrderByReference(reference, {
        status: "failed",
        gatewayResponse: data?.gateway_response || null,
        amountKobo: data?.amount,
        channel: data?.channel || null,
        customerEmail: data?.customer?.email || null,
        metadata: data?.metadata || null,
        webhookEvent: event,
      });
    } else {
      await upsertOrderByReference(reference, {
        webhookEvent: event,
      });
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 500 });
  }
}
