import { NextResponse } from "next/server";
import { upsertOrderByReference } from "@/lib/ordersStore";

const PAYSTACK_INITIALIZE_URL = "https://api.paystack.co/transaction/initialize";

export async function POST(request) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing PAYSTACK_SECRET_KEY environment variable." },
        { status: 500 }
      );
    }

    const { email, amount, metadata } = await request.json();
    if (!email || !amount) {
      return NextResponse.json(
        { error: "Email and amount are required." },
        { status: 400 }
      );
    }

    const callbackUrl =
      process.env.PAYSTACK_CALLBACK_URL ||
      `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/checkout`;

    const amountKobo = Math.round(Number(amount) * 100);

    const response = await fetch(PAYSTACK_INITIALIZE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amountKobo,
        callback_url: callbackUrl,
        metadata,
      }),
      cache: "no-store",
    });

    const payload = await response.json();
    if (!response.ok || !payload?.status) {
      return NextResponse.json(
        { error: payload?.message || "Failed to initialize payment." },
        { status: 502 }
      );
    }

    await upsertOrderByReference(payload.data.reference, {
      email,
      amount,
      amountKobo,
      status: "initialized",
      plan: metadata?.plan || null,
      billing: metadata?.billing || null,
      callbackUrl,
      gateway: "paystack",
    });

    return NextResponse.json({
      authorization_url: payload.data.authorization_url,
      reference: payload.data.reference,
    });
  } catch {
    return NextResponse.json(
      { error: "Payment initialization failed." },
      { status: 500 }
    );
  }
}
