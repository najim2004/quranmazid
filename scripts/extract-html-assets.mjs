import fs from "fs";
import path from "path";

const html = fs.readFileSync(
  "Surah_Al_Fatiha__01____Arabic__English_Translation___Recitation__________.html",
  "utf8",
);

const outDir = "scripts/extract-output";
fs.mkdirSync(outDir, { recursive: true });

// CSS variables from :root (second occurrence with color definitions)
const colorBlock = html.match(
  /--color-primary-base:112[\s\S]{0,800}/,
);
fs.writeFileSync(path.join(outDir, "colors.txt"), colorBlock?.[0] ?? "not found");

// Extract SVGs
const svgs = [...html.matchAll(/<svg[\s\S]*?<\/svg>/g)].map((m) => m[0]);
svgs.forEach((svg, i) => {
  fs.writeFileSync(path.join(outDir, `svg-${i}.svg`), svg);
});
console.log("SVGs:", svgs.length);

// data URLs
const dataUrls = [...html.matchAll(/data:image\/[^"' )]+/g)].map((m) => m[0]);
dataUrls.forEach((url, i) => {
  const m = url.match(/^data:image\/(\w+);base64,(.+)$/);
  if (m) {
    fs.writeFileSync(
      path.join(outDir, `image-${i}.${m[1] === "x-icon" ? "ico" : m[1]}`),
      Buffer.from(m[2], "base64"),
    );
  }
});
console.log("data images:", dataUrls.length);

// Key sections by data-slot
const slots = [...html.matchAll(/data-slot="([^"]+)"/g)].map((m) => m[1]);
console.log("data-slots:", [...new Set(slots)]);

// aria-labels for UI
const labels = [...html.matchAll(/aria-label="([^"]+)"/g)].map((m) => m[1]);
console.log("aria-labels:", [...new Set(labels)].slice(0, 40));

// class patterns on nav
for (const pat of ["side-nav", "top-nav", "left-sidebar", "right-sidebar"]) {
  const re = new RegExp(`class="[^"]*${pat}[^"]*"`, "g");
  const m = html.match(re);
  if (m) console.log(pat, "classes:", m.slice(0, 3));
}

// Extract body-ish structure - find main after style
const bodyStart = html.indexOf("<body");
const snippet = html.slice(bodyStart, bodyStart + 15000);
fs.writeFileSync(path.join(outDir, "body-start.html"), snippet);

// Visible button/link text
const btnTexts = [...html.matchAll(/>([^<]{2,60})<\/button/g)].map((m) =>
  m[1].trim(),
);
console.log("button texts:", [...new Set(btnTexts)]);

// h1-h3
for (const tag of ["h1", "h2", "h3"]) {
  const re = new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`, "g");
  const m = [...html.matchAll(re)].map((x) => x[1]);
  if (m.length) console.log(tag, m.slice(0, 5));
}

console.log("done ->", outDir);
