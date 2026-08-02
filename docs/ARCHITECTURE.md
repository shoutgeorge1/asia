# Architecture Strategy — Aug 1, 2026

**From:** George Aguilar  
**Context:** Proposed technical architecture for Asia International / The Wagyu Shop growth vision  
**Status:** Proposed future-state experiment — not an existing implementation

---

## Core principle

**Shopify owns commerce. Next.js owns specialized acquisition.**

Keep core ecommerce on native Shopify at [wagyushop.com](https://wagyushop.com/). Build a separate Next.js acquisition/editorial layer on a preferred subdomain.

## Preferred subdomain

**discover.wagyushop.com**

Also acceptable alternatives:
- go.wagyushop.com
- offers.wagyushop.com

## Acquisition flow

```
Ad / organic traffic
        ↓
discover.wagyushop.com (Next.js campaign / editorial layer)
        ↓
Shopify product detail page (PDP)
        ↓
Native Shopify cart / checkout
```

## Division of responsibilities

| Layer | Owns |
| --- | --- |
| **Shopify** | Products, inventory, checkout, payments, customers, orders, fulfillment |
| **Next.js (discover subdomain)** | Campaign landings, VIP/Reserve experiences, seasonal gifting, editorial product stories, offer packaging, paid/SEO acquisition URLs |
| **Klaviyo / SMS** | Lifecycle messaging, VIP invitations, gift reminders, win-back |
| **Google Ads / Meta / GA4** | Paid acquisition, attribution, cross-channel measurement |
| **Executive dashboard** | Unified KPI view across channels (internal tooling) |

## SEO positioning

- Long-term organic guides may prefer `wagyushop.com/guides/...` on the main domain
- The subdomain is still the right choice for **paid traffic and experiments first**
- **Avoid overstating SEO benefit** — the primary win is speed, campaign agility, and paid economics, not guaranteed organic ranking gains

## Cross-subdomain tracking requirements

When the Next.js layer goes live, wire:

- Cross-subdomain GTM / GA4
- Google Ads attribution
- Meta pixel continuity
- Klaviyo identity continuity
- UTM preservation through checkout handoff
- Consent management (shared or coordinated)
- Enhanced conversions

## Phased rollout

### Phase 1
One focused Next.js campaign or buying-guide prototype on **discover.wagyushop.com**. Prove the landing experience, LCP, and Shopify handoff path.

### Phase 2
Connect analytics, Shopify product data (Storefront API), and conversion tracking. Validate cross-subdomain attribution.

### Phase 3
Test against equivalent native Shopify theme traffic. Compare CVR, engagement, speed, and paid CPA side by side.

### Phase 4
Expand to additional campaigns **only if** CVR, engagement, speed, and paid economics improve over the native path.

## What this is not

- Not a full headless Shopify replacement
- Not a teardown of the existing Maestrooo theme for brand browsers
- Not a claim that Shopify is inadequate for commerce operations
- Not an existing implementation — this is a proposed experiment

## Relationship to bypass strategy

The bypass strategy (see `/bypass` in the prototype) routes paid/SEO traffic around theme bloat via lean Next.js pages that read from the Storefront API and hand off to native checkout. The discover subdomain is the home for those experiences.

## Relationship to tech audit

The tech audit (see `/tech-audit`) documents why the current storefront shell is slow. The Next.js layer is a selective fix for acquisition paths — not a substitute for auditing apps, tags, and theme performance on the main store.

---

See also: `docs/BRIEF.md` for the full interview brief and growth vision context.
