import { site } from "@/content/site";
import { fill } from "@/lib/text";

const PHONE_RE = /^[+\d][\d\s-]{8,14}$/;
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
export function validateEnquiry(form, passengers) {
  const errors = {};
  const name = form.name.trim();
  const phone = form.phone.trim();
  const email = form.email.trim();

  if (name.length < 2) errors.name = msg.name;
  if (!PHONE_RE.test(phone)) errors.phone = msg.phone;
  if (email && !EMAIL_RE.test(email)) errors.email = msg.email;

  const badPassenger = passengers.some((p) => {
    const age = parseInt(p.age, 10);
    return p.name.trim().length < 2 || Number.isNaN(age) || age < 0 || age > 120;
  });
  if (badPassenger) errors.passengers = msg.passengers;

  return errors;
}

export function buildWhatsAppUrl(number, form, passengers) {
  let text =
    fill(site.booking.messageIntro, { siteName: site.name }) +
    `\nName: ${form.name.trim()}` +
    `\nPhone: ${form.phone.trim()}`;

  if (form.email.trim()) text += `\nEmail: ${form.email.trim()}`;

  text +=
    `\nDestination: ${form.destination || "Not sure"}` +
    `\nPackage: ${form.pkg || "Custom"}` +
    `\nTravel date: ${form.date || "Flexible"}` +
    `\nTravellers: ${passengers.length}` +
    "\nPassengers:" +
    passengers
      .map((p, i) => `\n${i + 1}. ${p.name.trim()}, age ${p.age}`)
      .join("");

  if (form.requirements.trim()) {
    text += `\nRequirements: ${form.requirements.trim()}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
