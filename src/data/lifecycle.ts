export const stages = [
  {
    id: "acquire",
    title: "Acquire",
    body: "Paid and organic land on a lean campaign surface that qualifies intent before the catalog.",
    owner: "Media · Next.js portal",
  },
  {
    id: "convert",
    title: "Convert",
    body: "Shopify owns PDP, cart, checkout, inventory, payments, and fulfillment end-to-end.",
    owner: "Shopify commerce",
  },
  {
    id: "educate",
    title: "Educate",
    body: "Cut-aware thaw, cook, and serve guidance so the first steak night succeeds.",
    owner: "Email · optional SMS",
  },
  {
    id: "recognize",
    title: "Recognize",
    body: "High-value buyers get quieter treatment and Reserve-shaped invitations.",
    owner: "Lifecycle · concierge",
  },
  {
    id: "repeat",
    title: "Repeat",
    body: "Replenishment, gifting calendars, and win-back protect second-purchase economics.",
    owner: "Owned + light paid",
  },
];

export type OwnedChannelProgram = {
  id: string;
  title: string;
  channel: string;
  priority: "P0" | "P1" | "P2";
  summary: string;
  trigger: string;
  play: string;
  why: string;
};

/** Concrete owned-channel programs — steak-brand specific, not generic ESP chips. */
export const ownedChannelPrograms: OwnedChannelProgram[] = [
  {
    id: "welcome",
    title: "Welcome by intent",
    channel: "Email · SMS opt-in",
    priority: "P0",
    summary:
      "Split new contacts by why they showed up — gift buyer, home cook, Reserve curious, corporate — and send a short path that matches, not a generic ten-email blast.",
    trigger: "First subscribe, first identify, or first campaign landing capture",
    play: "Three-beat max: brand promise → one cut or gift path that fits their signal → soft product CTA. Suppress hard discounting until intent is clear.",
    why: "Premium protein intimidates first-timers. The first messages decide whether they feel guided or sold.",
  },
  {
    id: "first-order",
    title: "First-time buyer education",
    channel: "Email",
    priority: "P0",
    summary:
      "SKU-aware post-purchase sequence so A5 and specialty cuts get cooked right the first time.",
    trigger: "First paid order (any channel)",
    play: "Day 0: confirmation + thaw/prep for the exact SKU. Day 2–3: cook cue and plating idea. Day 7: soft review ask + one next-cut recommendation.",
    why: "Specialty cuts underperform when people cook them wrong. Education protects AOV, reviews, and repeat.",
  },
  {
    id: "hv-treatment",
    title: "High-value customer treatment",
    channel: "Email · SMS · concierge",
    priority: "P0",
    summary:
      "A quieter white-glove lane for top spenders before you pitch membership.",
    trigger: "Top revenue percentile, or 2+ premium orders in 90 days",
    play: "Earlier access notes, a human reply path, fewer blast promos. Frame them as Reserve candidates with understated language — Society, not points club.",
    why: "Best customers should feel recognized, not hammered with the same promo as a one-time gift buyer.",
  },
  {
    id: "cart-recovery",
    title: "Cart recovery (calm)",
    channel: "Email · SMS",
    priority: "P0",
    summary:
      "One or two reminders that answer freeze, thaw, and shipping anxiety — not fake urgency theater.",
    trigger: "Checkout started, no purchase within the window",
    play: "Exact items, shipping cutoff if relevant, one CTA back to cart. Optional short thaw FAQ for first-time Wagyu carts.",
    why: "High-AOV carts stall on logistics anxiety. Recovery should answer that, not only say “you left something.”",
  },
  {
    id: "browse-recovery",
    title: "Browse recovery with comparison",
    channel: "Email",
    priority: "P1",
    summary:
      "Help researchers choose a cut instead of only retargeting the product image.",
    trigger: "Viewed PDP or collection, no cart",
    play: "Return with a serving-size or cut comparison (e.g. striploin vs ribeye for two) plus one editorial tip tied to what they viewed.",
    why: "Wagyu shoppers research. Choice help converts better than another stock photo.",
  },
  {
    id: "cut-instructions",
    title: "Post-purchase cut instructions",
    channel: "Email · optional SMS",
    priority: "P0",
    summary:
      "Product-family content packs: steaks vs bundles vs gift boxes get different guidance.",
    trigger: "Order contains specific SKU families",
    play: "Thaw window, salt timing, pan vs grill, rest time — written for the pack they bought. Reusable assets the site and CS can share.",
    why: "SKU-aware guidance is a retention asset most competitors never bother to build.",
  },
  {
    id: "replenish",
    title: "Replenishment reminders",
    channel: "Email · SMS",
    priority: "P1",
    summary:
      "Consumption-timed reorder nudges based on cut type and order size, not a fixed 30-day drip.",
    trigger: "Predicted days-to-empty from cut type + quantity",
    play: "Soft cadence: “If that ribeye night went well…” with one-click reorder or a light subscription upgrade path.",
    why: "Protein is consumable. Right-time replenishment beats random blasts for repeat rate.",
  },
  {
    id: "reserve-invite",
    title: "VIP / Reserve invitations",
    channel: "Email · SMS",
    priority: "P1",
    summary:
      "Invitation-only framing into Reserve: early access, member packages, priority holiday shipping.",
    trigger: "Spend, frequency, or engagement thresholds",
    play: "Understated invite, clear benefits, no coupon carpet-bomb. Align copy to the live Reserve positioning.",
    why: "Reserve should feel earned. Owned channels fill it without cheapening the brand.",
  },
  {
    id: "holiday-gift",
    title: "Holiday & seasonal gifting",
    channel: "Email · SMS",
    priority: "P0",
    summary:
      "Calendar-aware series tied to inventory and ship cutoffs so you never promote what cannot arrive.",
    trigger: "Seasonal calendar + prior gift buyers / high AOV",
    play: "Idea → shipping cutoff → last-call overnight. Suppress SKUs that are OOS or past fulfillment SLAs.",
    why: "Gifting is where AOV spikes. Cutoff-aware owned media protects fulfillment and CS.",
  },
  {
    id: "corporate-gift",
    title: "Corporate gifting outreach",
    channel: "Email · sales assist",
    priority: "P1",
    summary:
      "Concierge-led B2B sequence distinct from DTC steak-night promos.",
    trigger: "Corporate page intent, multi-ship orders, or sales list",
    play: "Budgets, ship-to-many, branded notes, approval timelines. Keep self-serve and white-glove paths clearly separate.",
    why: "B2B gifting is a different motion — treat it like a program, not a promo code.",
  },
  {
    id: "sub-retain",
    title: "Subscription retention",
    channel: "Email · SMS · portal",
    priority: "P1",
    summary:
      "Save the box before racing to a discount — mix and cadence first.",
    trigger: "Skip, pause, cancel signals, or box fatigue",
    play: "Offer cut swaps, cadence changes, or “what’s next” education before percentage-off save offers.",
    why: "Churn often means boredom or oversupply. Fix the product experience before margin giveaways.",
  },
  {
    id: "winback",
    title: "Win-back with a reason",
    channel: "Email · SMS",
    priority: "P2",
    summary:
      "One strong return story for lapsed buyers — new drop, seasonal feast, or Reserve preview — not a stale coupon loop.",
    trigger: "No order for 90–180 days after last purchase",
    play: "Single sharp reason + simple path. Cap frequency so you do not train them to wait for discounts.",
    why: "Lapsed premium buyers still know the brand. A sharp story beats endless 15% off.",
  },
];
