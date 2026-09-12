import { writeFile } from "node:fs/promises";
import { blogs } from "../src/data/blogs.js";

const origin = "https://swastixa.com";
const routes = [
  "/", "/about", "/services", "/work", "/careers", "/blog",
  "/work/Production", "/work/SocialMedia", "/work/WebsiteDevelopment",
  "/work/DigitalMarketing", "/work/reels", "/work/Branding", "/work/Print",
  "/services/social-media-marketing", "/services/website-development",
  "/services/performance-marketing", "/services/influencer-marketing",
  "/services/content-marketing", "/services/seo-agency",
  "/services/video-production-house", "/services/packaging-design",
  ...blogs.map(({ slug }) => `/blog/${slug}`),
];

const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const uniqueRoutes = [...new Set(routes)];
const urls = uniqueRoutes.map((route) => `  <url>\n    <loc>${escapeXml(`${origin}${route}`)}</loc>\n  </url>`).join("\n");
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

await writeFile(new URL("../public/sitemap.xml", import.meta.url), xml, "utf8");
console.log(`Generated sitemap with ${uniqueRoutes.length} URLs.`);
