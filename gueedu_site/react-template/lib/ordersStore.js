import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const ORDERS_FILE = path.join(DATA_DIR, "orders.json");

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    await readFile(ORDERS_FILE, "utf8");
  } catch {
    await writeFile(ORDERS_FILE, "[]", "utf8");
  }
}

async function readOrders() {
  await ensureStore();
  const raw = await readFile(ORDERS_FILE, "utf8");
  const parsed = JSON.parse(raw || "[]");
  return Array.isArray(parsed) ? parsed : [];
}

async function writeOrders(orders) {
  await ensureStore();
  await writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2), "utf8");
}

export async function upsertOrderByReference(reference, patch) {
  if (!reference) return null;

  const orders = await readOrders();
  const now = new Date().toISOString();
  const index = orders.findIndex((order) => order.reference === reference);

  if (index >= 0) {
    orders[index] = {
      ...orders[index],
      ...patch,
      reference,
      updatedAt: now,
    };
  } else {
    orders.push({
      reference,
      ...patch,
      createdAt: now,
      updatedAt: now,
    });
  }

  await writeOrders(orders);
  return orders.find((order) => order.reference === reference) || null;
}
