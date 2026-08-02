export const bypassSteps = [
  {
    step: 1,
    title: "Google / Meta / SEO traffic",
    body: "Campaign and search demand lands on a URL you control — a lean acquisition experience, not the full brand homepage.",
  },
  {
    step: 2,
    title: "Lean Next.js landing page",
    body: "Server-rendered, mostly static HTML. Light JS. Properly sized images. Only the modules the campaign needs — not the full storefront chrome.",
  },
  {
    step: 3,
    title: "Shopify Storefront API",
    body: "Pull title, price, availability, variants, and approved media at build time or on the edge. Product truth stays in Shopify Admin.",
  },
  {
    step: 4,
    title: "Shopify cart / checkout",
    body: "Deep-link to product, cart permalink, or Buy Button / Storefront cart mutation → native Shopify checkout. Payments, tax, shipping, and fraud stay on Shopify.",
  },
];

export const goAround = [
  "Full homepage hero + editorial module weight on every paid click",
  "Duplicated desktop/mobile navigation DOM on cold loads",
  "Theme JS for drawers, overlays, and interactive modules",
  "Marketing apps and tags competing with first paint",
  "Giftship Liquid issue on the corporate gifting template",
  "Font, animation, and quick-shop assets on first mobile view",
];

export const keepList = [
  "Shopify Admin as product / inventory / order system of record",
  "Shopify Checkout (do not fake checkout in Next.js)",
  "Klaviyo / SMS as lifecycle systems (load carefully relative to LCP)",
  "Paid accounts, Merchant Center feed, and fulfillment ops",
  "Brand photography — curated to what each landing actually needs",
];

export const apiApproaches = [
  {
    title: "Storefront API (preferred for this prototype)",
    body: "A public storefront access token (or custom app) can read products/collections for landing pages — show the product, then send shoppers to buy on Shopify.",
  },
  {
    title: "Admin API (later, for the dashboard)",
    body: "Orders, customers, inventory pressure, margins — command-center wiring. Not required to launch lean landings.",
  },
  {
    title: "Hydrogen / full headless storefront (not the first move)",
    body: "A full headless replacement is a larger program. First win is selective campaign pages that hand off into Shopify — not replacing the theme wholesale.",
  },
];

export const myths = [
  {
    myth: "This replaces Shopify.",
    reality:
      "No. It replaces the *entry path* for paid/SEO sessions. Checkout, catalog, and ops stay on Shopify.",
  },
  {
    myth: "Next.js is automatically fast.",
    reality:
      "Only with static/SSR discipline, light bundles, careful images, and almost no third-party scripts on the landing.",
  },
  {
    myth: "The homepage has to be rebuilt first.",
    reality:
      "Not required for growth. The brand storefront can keep serving loyal and direct visitors while campaign traffic uses a leaner path.",
  },
  {
    myth: "Ads alone will tell us if the site is fine.",
    reality:
      "Budget can mask landing friction. Speed still affects CPA and quality score — creatives matter, and so does the page they land on.",
  },
];

export const firstBuilds = [
  {
    priority: "P0",
    build: "One paid-search product/bundle landing in Next.js — Hardcoded or Storefront API product card → Shopify PDP/cart link. Prove LCP and conversion path.",
  },
  {
    priority: "P0",
    build: "Wire Storefront API read-only credentials — Custom app or Headless channel. Products + availability only. No Admin write scopes.",
  },
  {
    priority: "P1",
    build: "TWS Reserve + Corporate Gifting as Next.js routes — Same stories as live pages, with campaign-focused weight. Forms post to Klaviyo or Shopify customer tags later.",
  },
  {
    priority: "P1",
    build: "Keep Ads audit as a parallel lane — Bypass stands on storefront evidence alone; Ads becomes the next diagnostic once access is available.",
  },
];
