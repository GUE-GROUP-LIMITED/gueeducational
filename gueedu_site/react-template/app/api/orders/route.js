import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const ORDERS_FILE = path.join(process.cwd(), "data", "orders.json");

export async function GET() {
  try {
    const raw = await readFile(ORDERS_FILE, "utf8");
    const orders = JSON.parse(raw || "[]");
    return NextResponse.json({ orders: Array.isArray(orders) ? orders : [] });
  } catch {
    return NextResponse.json({ orders: [] });
  }
}
