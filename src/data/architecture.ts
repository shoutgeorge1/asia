export const architectureFlow = [
  { step: 1, label: "Paid / Organic / Social" },
  {
    step: 2,
    label: "Lean Next.js portal (new domain preferred · discover.* fallback)",
  },
  { step: 3, label: "Recommended cut / bundle story" },
  { step: 4, label: "wagyushop.com Shopify PDP" },
  { step: 5, label: "Native Shopify cart / checkout" },
  { step: 6, label: "Email + SMS lifecycle" },
  { step: 7, label: "VIP / subscription / repeat" },
];

export const pillars = [
  {
    title: "Next.js acquisition portal",
    items: [
      "New SEO/marketing domain (preferred)",
      "Paid landings, guides, gifting, VIP stories",
      "Fast experiments without touching the theme",
      "Hand-off into Shopify PDPs only",
    ],
  },
  {
    title: "Shopify commerce engine",
    items: [
      "Products & inventory",
      "Checkout & payments",
      "Customers & orders",
      "Theme left alone for brand browsers",
    ],
  },
  {
    title: "Lifecycle & messaging",
    items: [
      "Klaviyo / email platform",
      "SMS concierge concept",
      "VIP invitations",
      "Gift & win-back flows",
    ],
  },
  {
    title: "Acquisition & measurement",
    items: [
      "Google Ads + Merchant Center",
      "Meta / Microsoft Ads",
      "GA4 + cross-domain tracking",
      "Executive dashboard",
    ],
  },
];

export const proposedArchitecture = {
  preferredHost: "New marketing / SEO domain (no “shop” in the name)",
  preferredHostNote:
    "Friend-of-the-brand editorial + acquisition portal that can grow into a durable site — then route purchase intent into wagyushop.com.",
  subdomain: "discover.wagyushop.com",
  altSubdomains: ["go.wagyushop.com", "offers.wagyushop.com"],
  subdomainRole: "Acceptable fallback for paid experiments if a new domain is not ready yet.",
  flow: "Ad/organic → lean Next.js portal → Shopify PDP → native cart/checkout",
  corePrinciple: "Shopify owns commerce. Next.js owns specialized acquisition. Theme stays put.",
  themeStance:
    "Keep the Maestrooo Shopify theme for brand and returning visitors. Do not make a theme rewrite the growth plan. Acquisition should not depend on ranking the full storefront shell.",
  seoNote:
    "Strongest justification is acquisition flexibility, experimentation speed, storytelling, and paid economics — not overstated organic promises. A clean new domain is better for long-term SEO than forcing guides into the full theme. Subdomain is fine for phase-1 paid tests.",
  tracking: [
    "Coordinated GTM / GA4 across portal ↔ Shopify",
    "Cross-domain session continuity",
    "Google Ads conversion attribution",
    "Meta / Klaviyo identity continuity",
    "UTM preservation through checkout",
    "Consent management",
    "Enhanced / server-side conversion opportunities",
    "Funnel reporting: portal → PDP → purchase",
  ],
  phases: [
    {
      phase: "Phase 1",
      title: "One focused Next.js campaign or buying-guide prototype",
      detail:
        "Ship on a new marketing domain if available; otherwise discover.wagyushop.com. Prove LCP, story, and Shopify handoff — do not touch the theme.",
    },
    {
      phase: "Phase 2",
      title: "Connect analytics, Shopify product data, conversion tracking",
      detail:
        "Storefront API reads where useful, cross-domain GTM/GA4, Ads + Klaviyo continuity, purchase attribution.",
    },
    {
      phase: "Phase 3",
      title: "Test vs equivalent native Shopify theme traffic",
      detail:
        "Compare CVR, engagement, speed, and paid CPA against theme landings. Theme remains the control — not a rebuild target.",
    },
    {
      phase: "Phase 4",
      title: "Expand only if metrics improve",
      detail:
        "Scale guides, gifting, VIP, and paid surfaces only if CVR, engagement, speed, or paid economics improve materially.",
    },
  ],
  disclaimer:
    "Proposed future-state experiment — not an existing Wagyu Shop implementation. Core ecommerce remains on native Shopify at wagyushop.com. Theme work is out of growth scope unless leadership asks their web team.",
};

export const designBoundary =
  "Do not imply Shopify is inadequate. Leave the theme alone. Build a lean acquisition portal that educates and routes into Shopify checkout — hybrid architecture, not headless replacement.";

export const nextJsOwns = [
  "Paid-search landing pages",
  "Luxury meat buying guides",
  "Japanese Wagyu grading education",
  "Product comparison experiences",
  "Gift guides & seasonal campaigns",
  "Recipe / preparation content",
  "Interactive selectors or quizzes",
  "Personalized merchandising flows",
  "Email / SMS capture",
  "Campaign bundles & storytelling",
  "Fast experimentation / CRO",
];

export const shopifyOwns = [
  "Product catalog",
  "PDPs (unless a campaign needs otherwise)",
  "Inventory, pricing, discounts",
  "Cart & checkout",
  "Customer accounts",
  "Subscriptions",
  "Reviews & ecommerce apps",
  "Order management",
  "Merchant Center feed source",
];
