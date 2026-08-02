export type IdeaCard = {
  title: string;
  summary: string;
  bullets: string[];
  whyItMatters: string;
};

export const positioning = {
  company: "Asia International, Inc.",
  brand: "The Wagyu Shop",
  store: "https://wagyushop.com/",
  oneLiner:
    "Not a teardown — a selective premium experience layer on top of a competent Shopify operation.",
  interviewLine:
    "You already have the fundamentals covered. This shows how the brand could evolve into a more unified premium growth system.",
};

export const growthIdeas: IdeaCard[] = [
  {
    title: "VIP / Private Client experience",
    summary:
      "Elevate The Wagyu Shop Society into an understated private-client layer — early access, concierge ordering, and invitation-only moments.",
    bullets: [
      "Early access to rare cuts and private releases",
      "Members-only bundles and priority holiday shipping",
      "Birthday / anniversary rewards without cheesy loyalty language",
      "VIP concierge path for high-value buyers",
    ],
    whyItMatters:
      "Turns high-LTV customers into a recognizable brand tier instead of anonymous repeat buyers.",
  },
  {
    title: "Seasonal gifting & holiday bundles",
    summary:
      "Campaign landing experiences that package product into occasions — corporate gifts, family feasts, date night, tasting flights.",
    bullets: [
      "Curated bundles with serving-size and prep guidance",
      "Shipping cutoff calendar tied to fulfillment reality",
      "Budget / recipient recommendation framing",
      "Early-access capture for next seasonal drop",
    ],
    whyItMatters:
      "Holidays and gifting are when AOV and new-to-brand spike — packaging beats raw SKU lists.",
  },
  {
    title: "Offer & bundle merchandising system",
    summary:
      "A small library of named experiences (First-Time Wagyu, Japanese Tasting Flight, Corporate Executive Gift) that sales and ads can reuse.",
    bullets: [
      "Who it’s for + occasion + cooking difficulty",
      "Delivery expectations called out clearly",
      "Why the bundle is valuable vs à la carte",
      "VIP limited releases and subscription upgrade paths",
    ],
    whyItMatters:
      "Gives paid media and email something sharper to sell than “buy steak.”",
  },
  {
    title: "Next.js experience layer (Shopify stays)",
    summary:
      "Use Next.js only where it earns its keep — campaign, VIP, education, seasonal merchandising — while Shopify remains checkout and ops.",
    bullets: [
      "Storefront API → Shopify checkout (no fake checkout)",
      "Campaign LPs that feel editorial, not template",
      "Optional Japanese regions / grading story page later",
      "Concept Prototype framing — not an official site rewrite",
    ],
    whyItMatters:
      "Shows technical range without implying their Shopify setup is broken.",
  },
  {
    title: "Email + SMS lifecycle",
    summary:
      "Connect Shopify customer/order data to education, recovery, VIP invites, and gifting reminders.",
    bullets: [
      "Welcome + first-time buyer education",
      "Browse / cart recovery with product-specific follow-up",
      "Post-purchase cook guidance and replenishment",
      "Holiday gifting + corporate outreach + win-back",
    ],
    whyItMatters:
      "Repeat purchase and VIP progression are where paid acquisition pays off.",
  },
  {
    title: "Light executive dashboard",
    summary:
      "One calm view for Tiffany and leadership — acquisition, retention, merchandising, and ops signals without enterprise chrome.",
    bullets: [
      "Revenue mix: new vs returning, gift, VIP, subscription",
      "Channel blend: Google, Meta, Microsoft, email, SMS",
      "Merch: top bundles, margin, inventory pressure",
      "Ops: shipping cutoffs, seasonal calendar, stock alerts",
    ],
    whyItMatters:
      "Answers the quiet question: who owns the complete growth picture?",
  },
];

export const quietQuestions = [
  "How do we connect paid media to actual product profitability?",
  "Which bundles and customer segments create the best long-term value?",
  "How do email and SMS improve repeat purchase?",
  "How should seasonal campaigns coordinate with inventory and shipping?",
  "How do we create a more premium digital experience without replacing Shopify?",
  "How can one dashboard create visibility without becoming burdensome?",
];

export const journeySteps = [
  "Google / Meta / Organic",
  "Campaign landing page",
  "Shopify product or bundle",
  "Checkout",
  "Post-purchase email",
  "SMS concierge",
  "VIP or subscription invite",
  "Repeat purchase",
  "Referral",
];

export const architectureLayers = [
  { name: "Next.js experience layer", note: "VIP, gifting, seasonal, education" },
  { name: "Shopify Storefront API", note: "Catalog + cart handoff" },
  { name: "Shopify checkout + ops", note: "Orders, inventory, fulfillment" },
  { name: "Klaviyo / email + SMS", note: "Lifecycle + concierge" },
  { name: "Ads + GA4", note: "Google, Meta, Microsoft, measurement" },
  { name: "Executive dashboard", note: "Unified growth visibility" },
];
