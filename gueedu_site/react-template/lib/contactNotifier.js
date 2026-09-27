import nodemailer from "nodemailer";

const SMTP_HOST = process.env.CONTACT_SMTP_HOST;
const SMTP_PORT = Number(process.env.CONTACT_SMTP_PORT || 587);
const SMTP_SECURE = String(process.env.CONTACT_SMTP_SECURE || "false").toLowerCase() === "true";
const SMTP_USER = process.env.CONTACT_SMTP_USER;
const SMTP_PASS = process.env.CONTACT_SMTP_PASS;
const SMTP_FROM = process.env.CONTACT_EMAIL_FROM;
const ALERT_TO = process.env.CONTACT_ALERT_TO;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isConfigured() {
  return Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS && SMTP_FROM && ALERT_TO);
}

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

function buildMail(lead) {
  const phoneText = lead.phone || "Not provided";
  const subject = `New contact inquiry: ${lead.service}`;
  const text = [
    "A new inquiry was submitted on gueengineering.com",
    "",
    `Lead ID: ${lead.id}`,
    `Submitted: ${lead.createdAt}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${phoneText}`,
    `Service: ${lead.service}`,
    "",
    "Project brief:",
    lead.message,
  ].join("\n");

  const html = `
    <h2>New Website Inquiry</h2>
    <p><strong>Lead ID:</strong> ${escapeHtml(lead.id)}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(lead.createdAt)}</p>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneText)}</p>
    <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
    <p><strong>Project brief:</strong></p>
    <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(lead.message)}</pre>
  `;

  return {
    from: SMTP_FROM,
    to: ALERT_TO,
    subject,
    text,
    html,
    replyTo: lead.email,
  };
}

export async function sendContactLeadNotification(lead) {
  if (!isConfigured()) {
    return { sent: false, reason: "not-configured" };
  }

  try {
    const transporter = createTransporter();
    await transporter.sendMail(buildMail(lead));
    return { sent: true };
  } catch (error) {
    console.error("Contact inquiry email failed:", error);
    return { sent: false, reason: "send-failed" };
  }
}
