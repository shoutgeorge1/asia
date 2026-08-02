export const bypassSteps = [
  {
    step: 1,
    title: "Google / Meta / SEO traffic",
    body: "Campaign and search demand hits a URL you control — not the heavy homepage.",
  },
  {
    step: 2,
    title: "Lean Next.js landing page",
    body: "Server-rendered, mostly static HTML. Tiny JS. Properly sized images. No mega-menu, no app pileup, no lookbook carousel tax.",
  },
  {
    step: 3,
    title: "Shopify Storefront API",
    body: "Pull title, price, availability, variants, and approved media at build time or on the edge. Product truth stays in Shopify Admin.",
  },
  {
    step: 4,
    title: "Shopify cart / checkout",
    body: "Deep-link to product, cart permalink, or Buy Button / Storefront cart mutation → native Shopify checkout. Payments, tax, shipping, fraud stay on Shopify.",
  },
];

export const goAround = [
  "Maestrooo homepage hero weight and editorial modules",
  "Duplicated desktop/mobile navigation DOM",
  "Theme JS for drawers, overlays, sliders, shop-the-dish",
  "Eager marketing apps waking up on first paint",
  "Broken Giftship Liquid on corporate gifting templates",
  "Font + animation + quick-shop baggage on cold mobile loads",
];

export const keepList = [
  "Shopify Admin as product / inventory / order system of record",
  "Shopify Checkout (do not fake checkout in Next.js)",
  "Klaviyo / SMS as lifecycle systems (load them carefully, not on LCP)",
  "Paid accounts, Merchant Center feed, and fulfillment ops",
  "Brand photography — but only the assets the landing actually needs",
];

export const apiApproaches = [
  {
    title: "Storefront API (preferred for this prototype)",
    body: "Public storefront access token (or custom app) can read products/collections for landing pages. Fast path for show the steak, send them to buy.",
  },
  {
    title: "Admin API (later, for the dashboard)",
    body: "Orders, customers, inventory pressure, margins — command-center wiring. Not required to launch lean landings.",
  },
  {
    title: "Hydrogen / headless full storefront (not the first move)",
    body: "Full headless replacement is a bigger project. First win is selective campaign pages, not ripping out the whole Shopify theme.",
  },
];

export const myths = [
  { myth: "I'm replacing Shopify.", reality: "No. You're replacing the path into Shopify for paid/SEO sessions. Checkout stays Shopify." },
  { myth: "Next.js is automatically fast.", reality: "Only if it's static/SSR, light bundles, disciplined images, and almost no third-party scripts on the landing." },
  { myth: "I have to fix the homepage first.", reality: "Optional later. Bypass wins revenue while their lookbook stays pretty for brand browsers." },
  { myth: "Ads will tell me if the site is fine.", reality: "Ads can hide frontend rot with budget. Landing speed still taxes CPA and quality score — audit creatives next, but the storefront bloat is already visible without Ads access." },
];

export const firstBuilds = [
  { priority: "P0", build: "One paid-search product/bundle landing in Next.js — Hardcoded or Storefront API product card → Shopify PDP/cart link. Prove LCP and conversion path." },
  { priority: "P0", build: "Wire Storefront API read-only credentials — Custom app or Headless channel. Products + availability only. No Admin write scopes." },
  { priority: "P1", build: "TWS Reserve + Corporate Gifting as Next.js routes — Same stories as live pages, without theme/app weight. Forms post to Klaviyo or Shopify customer tags later." },
  { priority: "P1", build: "Keep Ads audit separate — You haven't opened Ads yet — fine. Bypass strategy stands on storefront evidence alone. Ads becomes the next diagnostic lane." },
];
