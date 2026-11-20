import { site } from "@/content/site";
import { fill } from "@/lib/text";

const NAME_RE = /^\p{L}[\p{L}\s.'-]*$/u; // letters only, no digits
const PHONE_RE = /^\d{10}$/; // exactly 10 digits
const EMAIL_RE = /^\S+@\S+\.\S+$/;
const { maxTravellers, errors: msg } = site.booking;

export function clampTravellers(value) {
  return Math.max(1, Math.min(maxTravellers, parseInt(value, 10) || 1));
}

// Today's date in the visitor's own time zone, as YYYY-MM-DD.
export function todayLocal() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Returns an object of error messages. Empty object means the form is valid.
export function validateEnquiry(form) {
  const errors = {};
  const name = form.name.trim();
  const phone = form.phone.trim();
  const email = form.email.trim();

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2 || !NAME_RE.test(name)) {
    errors.name = "Name must contain letters only (no numbers).";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = "Phone must be exactly 10 digits (numbers only).";
  }

  if (email && !EMAIL_RE.test(email)) errors.email = msg.email;

  return errors;
}

export function buildWhatsAppUrl(number, form) {
  let text =
    fill(site.booking.messageIntro, { siteName: site.name }) +
    `\nName: ${form.name.trim()}` +
    `\nPhone: ${form.phone.trim()}`;

  if (form.email.trim()) text += `\nEmail: ${form.email.trim().toLowerCase()}`;

  text +=
    `\nDestination: ${form.destination || "Not sure"}` +
    `\nPackage: ${form.pkg || "Custom"}` +
    `\nTravel date: ${form.date || "Flexible"}` +
    `\nTravellers: ${clampTravellers(form.travellers)}`;

  if (form.requirements.trim()) {
    text += `\nRequirements: ${form.requirements.trim()}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}