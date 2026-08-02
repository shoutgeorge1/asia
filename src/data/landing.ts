import { livePrototypePaths } from "@/lib/live-prototype";

export const landingGallery = [
  {
    matchedTo: "/pages/the-reserve",
    title: "TWS Reserve",
    body: "Polished Vercel comp — black/white Reserve capture with subscriber-only inventory framing. Opens the live prototype URL.",
    href: livePrototypePaths.vip,
    external: true,
  },
  {
    matchedTo: "Corporate Gifting + seasonal layer",
    title: "Gifting",
    body: "Polished Vercel comp — corporate + seasonal gifting packaging. Opens the live prototype URL.",
    href: livePrototypePaths.gifting,
    external: true,
  },
];

export const vipFeatures = [
  {
    title: "Subscriber-only inventory",
    body: "Rotating exclusive cuts and packages before they hit the public catalog.",
  },
  {
    title: "Exclusive packages",
    body: "Assortments designed to impress an inner circle — not generic multipacks.",
  },
  {
    title: "Priority access alerts",
    body: "Email-first notice when rare allotments open, paced to real cold-chain capacity.",
  },
  {
    title: "Best-seller pairing",
    body: "Reserve drops sit beside proven favorites so members always have a clear next order.",
  },
];

export const vipImages = {
  logo: "https://wagyushop.com/cdn/shop/files/NEW_WagyuShop_update_v2_reverse_220x@2x.png?v=1613683816",
  hero: "https://wagyushop.com/cdn/shop/files/040423.WagyuShop.061_1_1200x.jpg?v=1682610330",
  steak: "https://wagyushop.com/cdn/shop/files/120721.WagyuShop.A5SteaksBokChoy.026_ce6e2f20-cf2b-41a7-85ad-59237d0cdec0_1200x.progressive.jpg?v=1775669656",
  secondary: "https://wagyushop.com/cdn/shop/files/040325.WagyuShop.105_1200x.progressive.jpg?v=1746635386",
};

export const giftingPaths = [
  {
    title: "Self-Service Gifting",
    body: "Browse curated gift collections and place orders instantly — ideal for quick, hassle-free corporate sends.",
  },
  {
    title: "Concierge Service",
    body: "Work with gifting experts on budget, brand, and timeline. Live site already routes to phone / SMS concierge.",
  },
];

export const giftingMoodboard = [
  "https://wagyushop.com/cdn/shop/files/kalbi_1000x.png?v=1775668593",
  "https://wagyushop.com/cdn/shop/files/a5_1000x.png?v=1775668398",
  "https://wagyushop.com/cdn/shop/files/sushi_1000x.png?v=1775668495",
  "https://wagyushop.com/cdn/shop/files/Tacos_1_1200x.progressive.png.jpg?v=1770659880",
];

export const occasionOptions = [
  "All",
  "Date night / anniversary",
  "Holiday 2026",
  "Corporate gifting",
  "Dinner party",
  "Introduction / self-gift",
];

export const budgetOptions = [
  { label: "Any budget", value: "all" },
  { label: "Under $250", value: "under250", max: 250 },
  { label: "$250–$400", value: "250to400", min: 250, max: 400 },
  { label: "$400+", value: "over400", min: 400 },
];

export const shippingCutoffs = [
  { market: "West Coast metros", note: "Priority overnight still available later", cutoff: "Dec 20" },
  { market: "Mountain / Central", note: "Standard cold-chain guaranteed", cutoff: "Dec 18" },
  { market: "East Coast / Florida", note: "Weather holds may apply", cutoff: "Dec 17" },
  { market: "Alaska / Hawaii", note: "Limited carrier windows", cutoff: "Dec 14" },
];

export const liveSiteNotes = [
  "Corporate Gifts page currently shows a Liquid error for giftship.liquid",
  "Main nav Gifting currently points to #",
  "Concierge already exists via phone + SMS — keep that human path",
  "Next.js value: fixable SEO landing experiences without theme breakage risk",
];
