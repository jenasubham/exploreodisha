// Checks everything in content/ for mistakes before the site runs or builds.
// Run it any time with:  npm run check
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "../content/site.js";
import { destinations } from "../content/destinations.js";
import { packages } from "../content/packages.js";
import { gems } from "../content/gems.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const isText = (v) => typeof v === "string" && v.trim().length > 0;

function duplicates(list) {
  return list.filter((v, i) => list.indexOf(v) !== i);
}

function checkImage(where, image) {
  if (!image) return;
  if (!image.startsWith("/")) {
    err(`${where}: image "${image}" must start with "/", e.g. "/images/destinations/puri.jpg".`);
  } else if (!existsSync(join(root, "public", image))) {
    err(`${where}: image file not found at public${image}. Add the file or set image to "".`);
  }
}

// ---- site.js
if (!/^\d{10,15}$/.test(site.whatsappNumber || "")) {
  err(`site.js: whatsappNumber "${site.whatsappNumber}" must be digits only, country code first (e.g. "919876543210").`);
} else if (/^919000000000$/.test(site.whatsappNumber)) {
  warn("site.js: whatsappNumber is still the sample number. Enquiries will not reach you until you change it.");
}
for (const key of ["name", "tagline", "description", "email", "address", "copyright"]) {
  if (!isText(site[key])) err(`site.js: "${key}" is empty.`);
}
site.navLinks.forEach((l, i) => {
  if (!isText(l.label) || !isText(l.href)) err(`site.js: navLinks[${i}] needs a label and an href.`);
});
const sectionIds = ["top", "destinations", "packages", "about", "gems", "contact"];
site.navLinks.forEach((l) => {
  if (l.href.startsWith("#") && !sectionIds.includes(l.href.slice(1))) {
    warn(`site.js: nav link "${l.label}" points to ${l.href}, which is not a section on the page (${sectionIds.map((s) => "#" + s).join(", ")}).`);
  }
});

checkImage("site.js hero", site.hero.image);
checkImage("site.js background.light", site.background.light);
checkImage("site.js background.dark", site.background.dark);
if (!["tile", "cover"].includes(site.background.fit)) err('site.js: background.fit must be "tile" or "cover".');

// ---- destinations.js
const destNames = destinations.map((d) => d.name);
duplicates(destNames).forEach((n) => err(`destinations.js: "${n}" appears more than once. Names must be unique.`));
destinations.forEach((d, i) => {
  const where = `destinations.js "${d.name || "#" + (i + 1)}"`;
  for (const key of ["name", "category", "location", "description", "about", "photo"]) {
    if (!isText(d[key])) err(`${where}: "${key}" is empty.`);
  }
  if (!Array.isArray(d.highlights) || d.highlights.length === 0) err(`${where}: add at least one highlight.`);
  if (!Array.isArray(d.colors) || d.colors.length < 2) err(`${where}: "colors" needs two hex colours.`);
  checkImage(where, d.image);
});

// ---- packages.js
duplicates(packages.map((p) => p.name)).forEach((n) => err(`packages.js: "${n}" appears more than once. Names must be unique.`));
packages.forEach((p, i) => {
  const where = `packages.js "${p.name || "#" + (i + 1)}"`;
  for (const key of ["name", "area", "category"]) {
    if (!isText(p[key])) err(`${where}: "${key}" is empty.`);
  }
  if (typeof p.price !== "number" || !(p.price > 0)) err(`${where}: price must be a number like 12500 (no ₹ or commas, no quotes).`);
  if (!Number.isInteger(p.days) || p.days < 1) err(`${where}: days must be a whole number.`);
  if (!Array.isArray(p.locations) || p.locations.length === 0) {
    err(`${where}: add at least one location.`);
  } else {
    p.locations.forEach((loc) => {
      if (!destNames.includes(loc)) err(`${where}: location "${loc}" is not in destinations.js. Check the spelling.`);
    });
  }
  if (!Array.isArray(p.highlights) || p.highlights.length === 0) err(`${where}: add at least one highlight.`);
  if (!Array.isArray(p.itinerary) || p.itinerary.length === 0) {
    err(`${where}: add at least one itinerary line.`);
  } else if (p.itinerary.length !== p.days) {
    warn(`${where}: days is ${p.days} but the itinerary has ${p.itinerary.length} lines.`);
  }
  checkImage(where, p.image);
});

// ---- gems.js
duplicates(gems.map((g) => g.name)).forEach((n) => err(`gems.js: "${n}" appears more than once.`));
gems.forEach((g, i) => {
  if (!isText(g.name) || !isText(g.description)) err(`gems.js: entry #${i + 1} needs a name and a description.`);
  checkImage(`gems.js "${g.name}"`, g.image);
  if (!g.image && (!Array.isArray(g.colors) || g.colors.length < 2)) warn(`gems.js "${g.name}": no image and no colors, a default placeholder will be used.`);
});

// ---- site.js: why-choose cards
site.whyReasons.forEach((r, i) => {
  if (!isText(r.title) || !isText(r.text)) err(`site.js: whyReasons[${i}] needs a title and a text.`);
  checkImage(`site.js whyReasons "${r.title}"`, r.image);
});

// ---- report
console.log(
  `Content check: ${destinations.length} destinations, ${packages.length} packages, ${gems.length} hidden gems.`
);
warnings.forEach((w) => console.log(`  ⚠ ${w}`));
errors.forEach((e) => console.log(`  ✖ ${e}`));

if (errors.length) {
  console.log(`\n${errors.length} problem(s) to fix before the site can run.`);
  process.exit(1);
}
console.log(warnings.length ? "\nOK, with warnings above." : "All good.");
