import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACT_LEADS_FILE = path.join(DATA_DIR, "contact-leads.json");

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(CONTACT_LEADS_FILE, "utf8");
  } catch {
    await writeFile(CONTACT_LEADS_FILE, "[]", "utf8");
  }
}

async function readLeads() {
  await ensureStore();
  const raw = await readFile(CONTACT_LEADS_FILE, "utf8");
  const parsed = JSON.parse(raw || "[]");
  return Array.isArray(parsed) ? parsed : [];
}

async function writeLeads(leads) {
  await ensureStore();
  await writeFile(CONTACT_LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
}

export async function addContactLead(lead) {
  const leads = await readLeads();
  const now = new Date().toISOString();
  const savedLead = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: now,
    updatedAt: now,
    status: "new",
    ...lead,
  };

  leads.push(savedLead);
  await writeLeads(leads);

  return savedLead;
}

export async function listContactLeads({ limit = 50 } = {}) {
  const leads = await readLeads();
  const safeLimit = Math.max(1, Math.min(Number(limit) || 50, 200));

  return [...leads]
    .sort((a, b) => {
      const aTime = new Date(a.createdAt || 0).getTime();
      const bTime = new Date(b.createdAt || 0).getTime();
      return bTime - aTime;
    })
    .slice(0, safeLimit);
}
