import { NextResponse } from "next/server";

const SITE_URL = "https://theasthetik.com";

const STATIC_URLS = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
  { path: "/services", changefreq: "weekly", priority: 0.9 },

  { path: "/services/medical-grade-facial", changefreq: "monthly", priority: 0.8 },
  { path: "/services/skin-laser-treatment", changefreq: "monthly", priority: 0.8 },
  { path: "/services/laser-hair-removal", changefreq: "monthly", priority: 0.8 },
  { path: "/services/chemical-peels", changefreq: "monthly", priority: 0.8 },
  { path: "/services/thread-lifts", changefreq: "monthly", priority: 0.8 },
  { path: "/services/fillers-treatment", changefreq: "monthly", priority: 0.8 },
  { path: "/services/iv-vitamin-therapy", changefreq: "monthly", priority: 0.8 },
  { path: "/services/mesotherapy", changefreq: "monthly", priority: 0.8 },
  { path: "/services/body-contouring", changefreq: "monthly", priority: 0.8 },
  { path: "/services/prp-treatment", changefreq: "monthly", priority: 0.8 },
  { path: "/services/hifu-treatment", changefreq: "monthly", priority: 0.8 },

  { path: "/mental-aesthetics", changefreq: "weekly", priority: 0.7 },
  { path: "/mental-aesthetics/codependency", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/narcissism", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/depression", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/Post-traumatic-stress-disorder", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/childhood-abuse", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/dissociation", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/communication", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/difficult-conversation", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/emotional-Intelligence", changefreq: "monthly", priority: 0.6 },
  { path: "/mental-aesthetics/addiction-treatment", changefreq: "monthly", priority: 0.6 },

  { path: "/about-us", changefreq: "yearly", priority: 0.5 },
  { path: "/terms-and-conditions", changefreq: "yearly", priority: 0.3 },
];

function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemapXml(urls) {
  const now = new Date().toISOString();

  const urlset = urls
    .map((u) => {
      const loc = escapeXml(`${SITE_URL}${u.path}`);
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${escapeXml(now)}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}
</urlset>`;
}

export async function GET() {
  const xml = buildSitemapXml(STATIC_URLS);

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800", // 1 day CDN cache
    },
  });
}
