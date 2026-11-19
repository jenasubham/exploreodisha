// Replaces {name}-style placeholders in text that lives in content/site.js.
// fill("About {name}", { name: "Puri" }) -> "About Puri"
export function fill(text, vars = {}) {
  return String(text).replace(/\{(\w+)\}/g, (match, key) =>
    key in vars ? vars[key] : match
  );
}
