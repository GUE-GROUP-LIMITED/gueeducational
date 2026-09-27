import { NextResponse } from "next/server";
import { upsertOrderByReference } from "@/lib/ordersStore";

const PAYSTACK_VERIFY_BASE_URL = "https://api.paystack.co/transaction/verify";

export async function GET(request) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing PAYSTACK_SECRET_KEY environment variable." },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");
    if (!reference) {
      return NextResponse.json(
        { error: "Transaction reference is required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${PAYSTACK_VERIFY_BASE_URL}/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const payload = await response.json();
    if (!response.ok || !payload?.status) {
      return NextResponse.json(
        { error: payload?.message || "Failed to verify transaction." },
        { status: 502 }
      );
    }

    await upsertOrderByReference(payload.data.reference, {
      status: payload.data.status,
      paidAt: payload.data.paid_at || null,
      gatewayResponse: payload.data.gateway_response || null,
      amountKobo: payload.data.amount,
      channel: payload.data.channel || null,
      customerEmail: payload.data.customer?.email || null,
      gateway: "paystack",
      metadata: payload.data.metadata || null,
    });

    return NextResponse.json({
      status: payload.data.status,
      message: payload.message,
      reference: payload.data.reference,
      paidAt: payload.data.paid_at,
      amount: payload.data.amount,
      metadata: payload.data.metadata,
    });
  } catch {
    return NextResponse.json(
      { error: "Payment verification failed." },
      { status: 500 }
    );
  }
}
