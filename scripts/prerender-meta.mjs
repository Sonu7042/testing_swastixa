import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { blogs } from "../src/data/blogs.js";
import { seoData } from "../src/data/seoData.js";

const origin = "https://swastixa.com";
const fallbackImage = `${origin}/swastixa_192X192.png`;
const templatePath = resolve("dist/index.html");
const template = await readFile(templatePath, "utf8");

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const pages = [
  ...Object.entries(seoData).map(([route, data]) => ({ route, ...data })),
  ...blogs.map((blog) => ({
    route: `/blog/${blog.slug}`,
    title: blog.hero.metaTitle,
    description: blog.hero.description,
    image: blog.hero.image,
    type: "article",
  })),
];

function renderMeta({ route, title, description, image = fallbackImage, type = "website" }) {
  const canonical = `${origin}${route === "/" ? "/" : route}`;
  const tags = [
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="Swastixa Digital" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
  ].join("\n    ");

  return template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/i, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace("</head>", `    ${tags}\n  </head>`);
}

for (const page of pages) {
  const html = renderMeta(page);
  if (page.route === "/") {
    await writeFile(templatePath, html, "utf8");
    continue;
  }

  const directory = resolve("dist", `.${page.route}`);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), html, "utf8");
}

console.log(`Generated route-specific HTML metadata for ${pages.length} pages.`);
