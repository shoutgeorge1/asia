export const architectureFlow = [
  { step: 1, label: "Paid / Organic / Social" },
  { step: 2, label: "Next.js campaign experience (discover.wagyushop.com)" },
  { step: 3, label: "Shopify Storefront API → product / bundle" },
  { step: 4, label: "Shopify Checkout" },
  { step: 5, label: "Email + SMS lifecycle" },
  { step: 6, label: "VIP / subscription / repeat" },
  { step: 7, label: "Internal executive dashboard" },
];

export const pillars = [
  {
    title: "Next.js experience layer",
    items: [
      "VIP / Reserve pages",
      "Seasonal gifting campaigns",
      "Editorial product stories",
      "Offer packaging",
    ],
  },
  {
    title: "Shopify commerce engine",
    items: [
      "Products & inventory",
      "Checkout & payments",
      "Customers & orders",
      "Fulfillment backbone",
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
      "GA4",
      "Executive dashboard",
    ],
  },
];

export const proposedArchitecture = {
  subdomain: "discover.wagyushop.com",
  altSubdomains: ["go.wagyushop.com", "offers.wagyushop.com"],
  flow: "Ad/organic → discover.wagyushop.com → Shopify PDP → native cart/checkout",
  corePrinciple: "Shopify owns commerce. Next.js owns specialized acquisition.",
  seoNote:
    "Long-term organic guides may prefer wagyushop.com/guides/...; subdomain still right for paid/experiments first. Avoid overstating SEO benefit.",
  tracking: [
    "Cross-subdomain GTM/GA4",
    "Ads attribution",
    "Meta/Klaviyo continuity",
    "UTMs",
    "Consent",
    "Enhanced conversions",
  ],
  phases: [
    {
      phase: "Phase 1",
      title: "One focused Next.js campaign/buying-guide prototype",
      detail: "Launch on discover.wagyushop.com with a single paid or organic campaign landing.",
    },
    {
      phase: "Phase 2",
      title: "Connect analytics, Shopify product data, conversion tracking",
      detail: "Wire Storefront API reads, cross-subdomain GTM/GA4, and purchase attribution.",
    },
    {
      phase: "Phase 3",
      title: "Test vs equivalent native Shopify traffic",
      detail: "Run controlled experiments comparing CVR, engagement, and speed against theme-based landings.",
    },
    {
      phase: "Phase 4",
      title: "Expand only if metrics improve",
      detail: "Scale to additional campaigns only if CVR, engagement, speed, and paid economics improve.",
    },
  ],
  disclaimer:
    "Proposed future-state experiment — not an existing implementation. Core ecommerce remains on native Shopify at wagyushop.com.",
};

export const designBoundary =
  "Do not imply Shopify is inadequate. This prototype positions a selective experience layer for campaigns, gifting, VIP, education, and seasonal merchandising while keeping Shopify responsible for commerce operations.";
