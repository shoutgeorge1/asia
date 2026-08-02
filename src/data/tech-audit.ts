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
  { dimension: "Brand design", score: "9/10", note: "Looks expensive for a reason." },
  { dimension: "Photography", score: "9.5/10", note: "Excellent raw materials — also the performance bomb." },
  { dimension: "Shopify operations", score: "8/10", note: "Commerce foundation is fine. Don't rebuild checkout." },
  { dimension: "Homepage performance", score: "4/10", note: "Luxury lookbook layered on a storefront." },
  { dimension: "Mobile experience", score: "3–5/10", note: "Heavy DOM + JS feels sticky on iPhone." },
  { dimension: "Technical restraint", score: "3/10", note: "Over-designed and over-instrumented." },
  { dimension: "SEO content potential", score: "7/10", note: "Good ingredients; theme architecture undercuts crawlable campaigns." },
  { dimension: "Conversion risk from speed", score: "Significant", note: "A $289 steak shopper should not feel the site dragging." },
];

export const damageHierarchy = [
  {
    title: "Huge premium imagery",
    body: "Edge-to-edge lifestyle heroes and oversized assets drive LCP. CDN hosting does not save bad source dimensions, mobile receiving desktop images, or broken srcset/lazy-load.",
  },
  {
    title: "Custom theme JavaScript and animation",
    body: "Maestrooo luxury theme behavior: mega-menu, cart drawer, search overlay, editorial modules, image transitions, product cards, shop-the-dish. Individually fine; together they block the main thread.",
  },
  {
    title: "Shopify app + marketing-script pileup",
    body: "GTM, Google Ads, likely GA4/Meta/Microsoft, Klaviyo, Bold, accessibility widget, SMS, Giftship issues, consent tooling. Each claims async; together they wake up after paint and fight the shopper.",
  },
  {
    title: "Heavy duplicated navigation / hidden UI",
    body: "Desktop nav, mobile nav, drawer markup, footer copies, cart, and search all delivered up front.",
  },
  {
    title: "Fonts and interactive product modules",
    body: "Font downloads + quick-shop / hover / modal variants load experiences before interaction.",
  },
  {
    title: "Duplicate or poorly sequenced tracking",
    body: "LinkedIn tracking appears twice in parsed homepage output. Mature Shopify accounts often ship overlapping pixels and duplicate GTM/native implementations.",
  },
];

export const techStackVerdict = [
  {
    area: "Commerce engine",
    stance: "Keep",
    bullets: [
      "Shopify storefront + checkout; Cloudflare-backed Shopify CDN",
      "Products, inventory, orders, customers",
      "Shopify is not the villain.",
    ],
  },
  {
    area: "Theme / frontend",
    stance: "Leave alone",
    bullets: [
      "Maestrooo custom luxury theme (not Dawn)",
      "Heavy lookbook is the Lighthouse problem — not our rebuild target",
      "Brand browsers / cached visitors can keep using it",
      "Optional hygiene only — paste note to their web team",
    ],
  },
  {
    area: "Apps / subscriptions / gifting",
    stance: "Audit",
    bullets: [
      "Bold Subscriptions (detected)",
      "Giftship / corporate gifting (Liquid error on live page)",
      "Main nav Gifting → # (broken/incomplete)",
      "Likely leftover app embeds after uninstalls",
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
      "Do not try to rank the bloated theme as the growth engine",
    ],
  },
];

export const actionPlan = [
  { priority: "P0", action: "Identify the actual mobile LCP image — Measure real mobile LCP on homepage, then collection and PDP templates separately." },
  { priority: "P0", action: "Generate proper AVIF/WebP mobile + desktop variants — Mobile must not get desktop heroes." },
  { priority: "P0", action: "Preload only the true LCP asset — Kill above-the-fold preload pileups." },
  { priority: "P0", action: "Lazy-load everything below the first viewport — Including background images and editorial modules." },
  { priority: "P1", action: "Remove sliders or load after idle — Luxury carousels are main-thread tax." },
  { priority: "P0", action: "Audit every Shopify app embed — Especially Giftship breakage, Bold, accessibility, popups, recommendations, chat, reviews." },
  { priority: "P1", action: "Fire marketing tags after consent or interaction where possible — Visual paint first. Tracking second." },
  { priority: "P1", action: "Remove duplicate GTM / native pixel implementations — LinkedIn appears twice; hunt overlaps across Google/Meta/native Shopify." },
  { priority: "P1", action: "Load quick-shop / modal code only after click." },
  { priority: "P1", action: "Reduce hidden desktop/mobile duplicate markup." },
  { priority: "P2", action: "Consolidate fonts and reduce weights — Self-host or trim Nunito weight set." },
  { priority: "P2", action: "Replace animation libraries with CSS where practical." },
  { priority: "P1", action: "Kill unused app code left after uninstalls." },
  { priority: "P0", action: "Test homepage, collection, and product templates separately." },
];
