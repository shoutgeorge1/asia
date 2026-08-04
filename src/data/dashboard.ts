export type PlatformPriority = "P0" | "P1" | "P2" | "P3";

export type Platform = {
  priority: PlatformPriority;
  name: string;
  status: string;
  why: string;
  evidence: string;
  next: string;
};

export const kpiCards = [
  { label: "Total revenue", value: "$482,000", delta: "+8.4%", note: "Trailing 30 days" },
  { label: "New customer revenue", value: "$196,000", delta: "+5.1%", note: "First-order customers" },
  { label: "Returning customer revenue", value: "$286,000", delta: "+11.2%", note: "Repeat + subscription" },
  { label: "Average order value", value: "$214", delta: "+3.6%", note: "Bundles lifting mix" },
  { label: "Customer acquisition cost", value: "$68", delta: "-4.2%", note: "Blended paid" },
  { label: "Blended MER", value: "4.1", delta: "+0.3", note: "Revenue / media spend" },
  { label: "Repeat purchase rate", value: "28.4%", delta: "+2.1%", note: "90-day window" },
  { label: "Customer lifetime value", value: "$540", delta: "+6.8%", note: "Predicted 12-month" },
  { label: "Email revenue", value: "$71,000", delta: "+9.4%", note: "Attributed + assisted" },
  { label: "SMS revenue", value: "$24,000", delta: "+14.0%", note: "Concierge + recovery" },
  { label: "Subscription revenue", value: "$58,000", delta: "+7.5%", note: "Boxes + replenishment" },
  { label: "Gift bundle revenue", value: "$92,000", delta: "+18.2%", note: "Seasonal + corporate" },
  { label: "VIP customer revenue", value: "$121,000", delta: "+12.6%", note: "Top 8% of customers" },
];

export const platforms: Platform[] = [
  {
    priority: "P0",
    name: "Shopify Admin + Storefront API",
    status: "Detected externally",
    why: "Commerce source of truth for products, inventory, orders, customers, and checkout. Any dashboard or Next.js experience layer needs this first.",
    evidence: "Live storefront at wagyushop.com is Shopify (theme by Maestrooo). Checkout, cart, and product catalog are native Shopify.",
    next: "Request collaborator access + Storefront API / custom app credentials for read-only prototype sync.",
  },
  {
    priority: "P0",
    name: "Klaviyo",
    status: "Detected externally",
    why: "Email/SMS revenue, lifecycle flows, VIP Reserve access list, and gift reminder campaigns all sit here.",
    evidence: "Klaviyo onsite script loaded publicly (company_id R9tuNw). Newsletter + Reserve email capture patterns match ESP ownership.",
    next: "Connect Klaviyo API for flow list, campaign revenue, and list/segment counts — no sends from prototype.",
  },
  {
    priority: "P0",
    name: "Google Ads + Merchant Center",
    status: "Detected externally",
    why: "Paid acquisition and Shopping feed are core to the role. Dashboard needs spend, MER, CAC, and product-level ROAS.",
    evidence: "Google tag / AW conversion ID AW-949755597 and GTM present on storefront. Shopping/Merchant Center implied by Shopify product feed.",
    next: "Confirm MCC/account ownership and Merchant Center link; pull last-30-day campaign + product group sample.",
  },
  {
    priority: "P1",
    name: "Google Analytics 4",
    status: "Likely",
    why: "Reconcile paid, organic, email, and Shopify revenue without trusting one channel's attribution alone.",
    evidence: "GTM container present; standard for Shopify + Google Ads. Exact GA4 property ID not confirmed from homepage alone.",
    next: "Ask Tiffany for GA4 property access and confirm enhanced ecommerce / purchase events.",
  },
  {
    priority: "P1",
    name: "Meta Ads",
    status: "Likely",
    why: "Gift creative and prospecting usually live on Meta for DTC food brands; needed for blended CAC and creative testing.",
    evidence: "Facebook / Instagram social links present. Meta pixel not conclusively isolated from public HTML in this pass.",
    next: "Confirm Business Manager + ad account access; verify pixel fires on purchase.",
  },
  {
    priority: "P1",
    name: "Bold Subscriptions",
    status: "Detected externally",
    why: "Subscription revenue, retention, and replenishment belong in the executive view.",
    evidence: "Bold Commerce / Bold Subscriptions scripts and customer portal references on storefront.",
    next: "Map subscription metrics into dashboard (active subs, churn, upgrade rate) via Bold or Shopify customer tags.",
  },
  {
    priority: "P1",
    name: "Giftship (corporate gifting)",
    status: "Broken / incomplete",
    why: "Corporate gifting is an active growth surface, but the live page currently shows a Liquid asset error.",
    evidence: "Corporate Gifts page renders Liquid error for snippets/giftship.liquid. Main nav Gifting currently points to #.",
    next: "Fix Giftship snippet / app install, then connect gift-order volume and ship-to-many metrics to the dashboard.",
  },
  {
    priority: "P2",
    name: "SMS / Concierge (Klaviyo or adjacent)",
    status: "Detected externally",
    why: "High-touch recovery and VIP treatment depend on SMS.",
    evidence: "Public prompts: text JOIN to 1.877.301.2017; text Concierge to 888.718.4830.",
    next: "Confirm whether SMS is Klaviyo-native or a separate provider; pull opt-in and attributed revenue.",
  },
  {
    priority: "P2",
    name: "Microsoft Ads",
    status: "Unknown / ask Tiffany",
    why: "Often efficient secondary paid search for premium DTC.",
    evidence: "No public Microsoft/UET signal confirmed on homepage in this pass.",
    next: "Ask whether Microsoft Ads is active; connect if spend is material.",
  },
  {
    priority: "P3",
    name: "Instagram / Facebook / Pinterest / X",
    status: "Detected externally",
    why: "Creative and gift inspiration feed paid and email. Lower priority for numeric dashboard wiring.",
    evidence: "Footer social links for Facebook, Twitter/X, Instagram, Pinterest.",
    next: "Later: content calendar + creative performance notes; not required for first KPI wiring.",
  },
  {
    priority: "P2",
    name: "Google Search Console",
    status: "Unknown / ask Tiffany",
    why: "Shopify SEO ceilings are real; GSC shows which category/editorial URLs deserve a Next.js experience layer.",
    evidence: "No public confirmation. Relevant because Maestrooo Shopify themes are often thin on crawlable campaign landing architecture.",
    next: "Request GSC access; prioritize Reserve / gifting / craft URLs for Next.js campaign pages.",
  },
];

export const channelPerformance = [
  { channel: "Google Ads", spend: "$42,000", revenue: "$168,000", orders: 690, cac: "$61", note: "Shopping + brand search leading" },
  { channel: "Meta Ads", spend: "$28,000", revenue: "$92,000", orders: 410, cac: "$68", note: "Gift creative outperforming steak generics" },
  { channel: "Microsoft Ads", spend: "$6,500", revenue: "$24,000", orders: 95, cac: "$68", note: "Efficient but volume-limited" },
  { channel: "Email", spend: "$1,200", revenue: "$71,000", orders: 380, cac: "$3", note: "Lifecycle + seasonal campaigns" },
  { channel: "SMS", spend: "$900", revenue: "$24,000", orders: 140, cac: "$6", note: "Cart recovery + VIP alerts" },
  { channel: "Organic", spend: "$0", revenue: "$64,000", orders: 310, cac: "—", note: "SEO + social + direct" },
  { channel: "Affiliate / Influencer", spend: "$4,800", revenue: "$18,000", orders: 72, cac: "$67", note: "Chef and food creators" },
];

export const merchandisingPanels = [
  { title: "Top-selling bundles", copy: "Holiday Feast, Date Night Collection, and Corporate Executive Gift Box lead units and contribution." },
  { title: "Top-margin products", copy: "Miyazaki tasting portions and curated gift assortments outpace commodity steak SKUs on contribution margin." },
  { title: "Best-performing seasonal collection", copy: "Holiday Luxury Gifting is pacing ahead of last year's comparable window in the sample model." },
  { title: "Inventory pressure", copy: "Limited Olive Wagyu and selected A5 ribeye lots need campaign pacing so paid demand does not outrun allotment." },
  { title: "Traffic without conversion", copy: "Generic buy wagyu online landing destinations show strong sessions but weaker AOV than bundle-led pages." },
  { title: "High-value segments", copy: "Corporate gifters, VIP repeat buyers, and subscription members concentrate a disproportionate share of profit." },
];

export const opsVisibility = [
  { label: "Shipping cutoff warning", detail: "East Coast guaranteed holiday windows close in 9 sample days." },
  { label: "Seasonal campaign calendar", detail: "VIP early access → public gift open → last-call shipping → post-holiday win-back." },
  { label: "Promotion calendar", detail: "Keep offers editorial (member early access, gift with purchase) rather than broad discounting." },
  { label: "Fulfillment-sensitive campaigns", detail: "Pause aggressive paid on constrained SKUs; redirect to available bundles." },
];

export const revenueTrendWeeks = [
  { week: "W1", value: 98 },
  { week: "W2", value: 105 },
  { week: "W3", value: 112 },
  { week: "W4", value: 167 },
];
