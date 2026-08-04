export type BundleCategory = "experience" | "gifting" | "seasonal" | "vip";

export type GiftBundle = {
  id: string;
  name: string;
  priceFrom: number;
  forWhom: string;
  occasion: string;
  servings: string;
  cooking: string;
  delivery: string;
  value: string;
  category: BundleCategory;
};

export const giftBundles: GiftBundle[] = [
  {
    id: "first-time",
    name: "First-Time Wagyu Experience",
    priceFrom: 189,
    forWhom: "Curious food lovers new to Japanese A5",
    occasion: "Introduction / self-gift",
    servings: "2–3 people",
    cooking: "Easy",
    delivery: "2–3 day cold-chain",
    value: "Guided cuts, portion clarity, and a simple cook card remove intimidation.",
    category: "experience",
  },
  {
    id: "date-night",
    name: "Date Night Collection",
    priceFrom: 245,
    forWhom: "Couples celebrating at home",
    occasion: "Date night / anniversary",
    servings: "2 people",
    cooking: "Easy",
    delivery: "Next-day available in select corridors",
    value: "Restaurant-caliber plate without reservation pressure.",
    category: "gifting",
  },
  {
    id: "tasting-flight",
    name: "Japanese Tasting Flight",
    priceFrom: 329,
    forWhom: "Enthusiasts comparing regions",
    occasion: "Tasting evening / education",
    servings: "3–4 people",
    cooking: "Moderate",
    delivery: "Scheduled drop windows",
    value: "Side-by-side Miyazaki, Olive, and A5 tasting with origin notes.",
    category: "experience",
  },
  {
    id: "chefs-choice",
    name: "Chef's Choice Box",
    priceFrom: 279,
    forWhom: "Home cooks who want curation",
    occasion: "Weekend cooking",
    servings: "4 people",
    cooking: "Moderate",
    delivery: "Weekly limited allotment",
    value: "Editorial selection based on peak availability and margin health.",
    category: "seasonal",
  },
  {
    id: "surf-turf",
    name: "Luxury Surf and Turf",
    priceFrom: 389,
    forWhom: "Hosts entertaining",
    occasion: "Dinner party",
    servings: "4–6 people",
    cooking: "Moderate",
    delivery: "Holiday cutoff calendar applies",
    value: "Wagyu + seafood pairing designed for one elegant table.",
    category: "gifting",
  },
  {
    id: "holiday-feast",
    name: "Holiday Feast",
    priceFrom: 449,
    forWhom: "Families hosting Thanksgiving through New Year",
    occasion: "Holiday 2026",
    servings: "6–8 people",
    cooking: "Moderate",
    delivery: "Guaranteed arrival windows by ZIP",
    value: "Centerpiece protein, sides guidance, and gift-ready packaging.",
    category: "seasonal",
  },
  {
    id: "corporate",
    name: "Corporate Executive Gift Box",
    priceFrom: 215,
    forWhom: "Executive assistants and client-gift programs",
    occasion: "Corporate gifting",
    servings: "2–4 people per box",
    cooking: "Easy",
    delivery: "Bulk ship-to-many support",
    value: "Premium presentation, optional messaging, and predictable logistics.",
    category: "gifting",
  },
  {
    id: "vip-release",
    name: "VIP Limited Release",
    priceFrom: 520,
    forWhom: "Wagyu Reserve members",
    occasion: "Private drop",
    servings: "Varies by release",
    cooking: "Advanced",
    delivery: "Priority cold-chain, members first",
    value: "Rare allotments with early access and concierge ordering.",
    category: "vip",
  },
  {
    id: "beginner-kit",
    name: "Beginner Wagyu Kit",
    priceFrom: 165,
    forWhom: "Gift recipients new to the category",
    occasion: "Holiday / housewarming",
    servings: "2 people",
    cooking: "Easy",
    delivery: "Standard cold-chain",
    value: "Includes cut guidance, salt note, and pan-sear timing.",
    category: "gifting",
  },
  {
    id: "bbq-kit",
    name: "Japanese BBQ Kit",
    priceFrom: 259,
    forWhom: "Summer hosts and grill enthusiasts",
    occasion: "Gathering / Father's Day",
    servings: "4–6 people",
    cooking: "Easy",
    delivery: "Seasonal inventory windows",
    value: "Slice-ready cuts with yakiniku pacing guidance.",
    category: "seasonal",
  },
];

export const visibleCategories: BundleCategory[] = ["experience", "gifting", "seasonal"];
