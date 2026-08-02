/** Plain-text note George can paste to their Shopify web-dev team. He will not touch the theme. */
export const webDevHandoffNote = `Subject: Wagyu Shop theme performance — optional cleanup (we are NOT rebuilding)

Hi team —

Sharing a short performance note from an external review of wagyushop.com. This is NOT a request to redesign the brand lookbook or replace Shopify.

CONTEXT
- Homepage mobile Lighthouse (local, 2026-07-31): ~12/100, LCP ~7.6s, heavy JS/scripts.
- Reserve / Corporate gift pages are better but still heavy.
- Shopify itself is fine as the commerce engine. The theme + apps + tags are the weight.

DIRECTION FROM MARKETING / GROWTH
- Leave the Maestrooo Shopify theme alone for brand browsers and returning customers who already tolerate it.
- We are NOT planning to rank the theme storefront for competitive SEO as the growth engine.
- Paid + SEO acquisition will move to a separate lean Next.js property (marketing / editorial portal) that hands off into native Shopify PDPs + checkout.
- Please do not start a full theme rewrite unless leadership explicitly asks.

IF you have bandwidth for low-risk hygiene (optional, not blocking our acquisition work):
1. Confirm the true mobile LCP image on homepage / collection / PDP separately.
2. Serve proper mobile image variants (AVIF/WebP); don't ship desktop heroes to phones.
3. Audit Shopify app embeds — especially anything unused after uninstalls; Giftship Liquid error on Corporate Gifts; nav "Gifting" currently pointing to #.
4. De-dupe tracking (LinkedIn appears twice in public HTML; check GTM vs native overlaps).
5. Prefer firing marketing tags after consent / interaction where policy allows.
6. Lazy-load below-the-fold editorial modules and defer non-critical carousels.

OUT OF SCOPE FOR THIS NOTE
- Headless rewrite
- Replacing checkout / cart / subscriptions
- Changing brand photography or visual identity

Thanks —
George
`;

export const growthDomainStrategy = {
  themeStance:
    "Leave the Shopify theme alone. Do not rebuild or SEO-optimize the lookbook as the growth engine.",
  preferredSurface:
    "New marketing / SEO domain (no “shop” in the name) — friend-of-the-brand editorial portal that can grow into a durable acquisition site.",
  whyNewDomain:
    "Clean SEO footprint, no theme risk, no “shop” keyword baggage, room for guides/education/gifting stories that rank and feed paid — then hand off to wagyushop.com for purchase.",
  subdomainFallback:
    "discover.wagyushop.com (or go / offers) remains acceptable for paid experiments if a new domain is not ready — still isolate risk from the theme.",
  rankingNote:
    "Do not try to make the bloated theme win organic. Cache-tolerant brand visitors can keep using wagyushop.com; acquisition should not depend on ranking that shell.",
};
