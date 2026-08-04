export const lighthouseResults = [
  {
    page: "Homepage",
    url: "https://wagyushop.com/",
    score: 12,
    lcp: "7.6 s",
    tbt: "1,380 ms",
    cls: "0.668",
    weight: "8.8 MiB",
    requests: 469,
    scripts: 157,
    screenshot: "/perf/lighthouse-home-mobile.png",
    extra: [
      "Root ~220 ms",
      "6.2 s JS execution",
      "12.3 s main-thread",
      "Third-party blocked ~1,590 ms",
      "~996 KiB unused JS",
      "Transfer 8.8 MiB",
      "TTI 44.3 s",
      "SI 23.7 s",
    ],
  },
  {
    page: "TWS Reserve",
    url: "https://wagyushop.com/pages/the-reserve",
    score: 38,
    lcp: "3.4 s",
    tbt: "1,190 ms",
    cls: "0.294",
    weight: "5.7 MiB",
    requests: 428,
    scripts: 154,
    screenshot: "/perf/lighthouse-reserve-mobile.png",
    extra: [
      "Root ~240 ms",
      "5.6 s JS",
      "10.4 s main-thread",
      "Third-party ~1,420 ms",
      "~1,139 KiB unused JS",
      "Transfer 5.7 MiB",
      "TTI 39.5 s",
      "SI 12.4 s",
    ],
  },
  {
    page: "Corporate Gifts",
    url: "https://wagyushop.com/pages/corporate-gifts",
    score: 58,
    lcp: "2.3 s",
    tbt: "1,040 ms",
    cls: "0.182",
    weight: "5.5 MiB",
    requests: 380,
    scripts: 134,
    screenshot: "/perf/lighthouse-corp-mobile.png",
    extra: [
      "Root ~130 ms",
      "5.0 s JS",
      "9.9 s main-thread",
      "Third-party ~1,530 ms",
      "~756 KiB unused JS",
      "Transfer 5.5 MiB",
      "TTI 33.5 s",
      "SI 9.9 s",
    ],
  },
];

export const scorecard = [
  { dimension: "Brand design", score: "9/10", note: "The store looks expensive — and it should." },
  { dimension: "Photography", score: "9.5/10", note: "Excellent assets; the main opportunity is serving the right size per device." },
  { dimension: "Shopify operations", score: "8/10", note: "Solid commerce foundation. Keep checkout on Shopify." },
  { dimension: "Homepage performance", score: "4/10", note: "A rich editorial storefront carries measurable mobile cost." },
  { dimension: "Mobile experience", score: "3–5/10", note: "DOM + JS weight shows up most clearly on cold iPhone loads." },
  { dimension: "Technical restraint", score: "5/10", note: "Many modules and tags load before a first-time shopper needs them — common on mature luxury themes." },
  { dimension: "SEO content potential", score: "7/10", note: "Strong product story; campaign landing architecture is the growth gap." },
  { dimension: "Conversion risk from speed", score: "Watch", note: "Premium AOV shoppers are sensitive to friction on cold mobile loads." },
];

export const damageHierarchy = [
  {
    title: "Premium imagery (largest LCP driver)",
    body: "Edge-to-edge lifestyle heroes are brand-correct. The opportunity is source dimensions, mobile variants, and disciplined srcset/lazy-load — CDN alone doesn’t fix oversized assets.",
  },
  {
    title: "Custom theme JavaScript and animation",
    body: "Maestrooo luxury theme behavior: mega-menu, cart drawer, search overlay, editorial modules, image transitions, product cards, shop-the-dish. Individually reasonable; together they add main-thread work on first load.",
  },
  {
    title: "Shopify apps + marketing scripts",
    body: "GTM, Google Ads, likely GA4/Meta/Microsoft, Klaviyo, Bold, accessibility, SMS, Giftship, consent tooling. Each may be justified; sequencing and de-duplication protect first paint.",
  },
  {
    title: "Duplicated navigation / hidden UI",
    body: "Desktop nav, mobile nav, drawer markup, footer copies, cart, and search are often delivered up front — a common Shopify theme pattern worth trimming over time.",
  },
  {
    title: "Fonts and interactive product modules",
    body: "Font downloads + quick-shop / hover / modal variants can wait until interaction instead of competing with first paint.",
  },
  {
    title: "Duplicate or poorly sequenced tracking",
    body: "LinkedIn tracking appears twice in parsed homepage output. Mature Shopify accounts often ship overlapping pixels and duplicate GTM/native implementations — easy hygiene win.",
  },
];

export const techStackVerdict = [
  {
    area: "Commerce engine",
    stance: "Keep",
    bullets: [
      "Shopify storefront + checkout; Cloudflare-backed Shopify CDN",
      "Products, inventory, orders, customers",
      "Shopify remains the right commerce foundation.",
    ],
  },
  {
    area: "Theme / frontend",
    stance: "Leave alone",
    bullets: [
      "Maestrooo custom luxury theme (not Dawn)",
      "Editorial weight shows up in Lighthouse — not a rebuild target for growth",
      "Brand and returning visitors can keep using the storefront",
      "Optional hygiene only — paste note to the web team if useful",
    ],
  },
  {
    area: "Apps / subscriptions / gifting",
    stance: "Audit",
    bullets: [
      "Bold Subscriptions (detected)",
      "Giftship / corporate gifting (Liquid error on live page)",
      "Main nav Gifting → # (needs attention)",
      "Review app embeds for unused leftover scripts",
    ],
  },
  {
    area: "Lifecycle / messaging",
    stance: "Keep",
    bullets: [
      "Klaviyo onsite (company_id R9tuNw)",
      "SMS JOIN / Concierge numbers on storefront",
      "Reserve email capture page",
      "Sequence scripts after consent/interaction",
    ],
  },
  {
    area: "Acquisition / measurement",
    stance: "Audit",
    bullets: [
      "Google Tag Manager",
      "Google Ads AW-949755597",
      "LinkedIn tracking (appears duplicated)",
      "Likely GA4 / Meta / Microsoft / Shopify analytics",
    ],
  },
  {
    area: "Experience layer (proposed)",
    stance: "Build elsewhere",
    bullets: [
      "Preferred: new marketing/SEO domain (no “shop” in the name)",
      "Fallback: discover.wagyushop.com for paid experiments",
      "Hand off to Shopify PDPs + native checkout",
      "Do not depend on ranking the full theme shell as the growth engine",
    ],
  },
];

export const actionPlan = [
  { priority: "P0", action: "Identify the actual mobile LCP image — Measure real mobile LCP on homepage, then collection and PDP templates separately." },
  { priority: "P0", action: "Generate proper AVIF/WebP mobile + desktop variants — Phones should not receive desktop heroes." },
  { priority: "P0", action: "Preload only the true LCP asset — Trim above-the-fold preload lists." },
  { priority: "P0", action: "Lazy-load everything below the first viewport — Including background images and editorial modules." },
  { priority: "P1", action: "Defer sliders until idle or interaction — Carousels can wait until after first paint." },
  { priority: "P0", action: "Audit every Shopify app embed — Especially Giftship Liquid error, Bold, accessibility, popups, recommendations, chat, reviews." },
  { priority: "P1", action: "Fire marketing tags after consent or interaction where possible — Visual paint first. Tracking second." },
  { priority: "P1", action: "Remove duplicate GTM / native pixel implementations — LinkedIn appears twice; check overlaps across Google/Meta/native Shopify." },
  { priority: "P1", action: "Load quick-shop / modal code only after click." },
  { priority: "P1", action: "Reduce hidden desktop/mobile duplicate markup where practical." },
  { priority: "P2", action: "Consolidate fonts and reduce weights — Self-host or trim Nunito weight set." },
  { priority: "P2", action: "Prefer CSS motion over heavy animation libraries where practical." },
  { priority: "P1", action: "Remove unused app code left after uninstalls." },
  { priority: "P0", action: "Test homepage, collection, and product templates separately." },
];
