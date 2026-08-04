# Architecture Strategy — Wagyu Shop acquisition layer

**From:** George Aguilar (ChatGPT-assisted strategy + interview follow-up)  
**Status:** Proposed future-state experiment — not an existing Wagyu Shop implementation  
**Repo:** `asia` (Asia International / The Wagyu Shop Growth Vision)

---

## Core principle

**Shopify owns commerce. Next.js owns specialized acquisition. The Shopify theme stays put.**

Do not rebuild catalog, cart, accounts, discounts, inventory, subscriptions, apps, or checkout in Next.js unless there is a proven business need.

## Theme decision (explicit)

- Leave the Maestrooo Shopify theme alone for brand browsers and returning customers who already tolerate speed / have cache.
- Do **not** treat theme SEO as the growth engine. We are not going to try to rank that shell.
- Optional performance hygiene can be pasted to **their** web-dev team — George is not touching the theme.

## Preferred acquisition surface

### 1) New marketing / SEO domain (preferred)

A domain **without “shop” in the name** — friend-of-the-brand editorial + acquisition portal that can grow into a durable site.

Why:
- Clean SEO footprint
- No theme risk
- Room for guides, grading education, gifting, VIP stories
- Purchase intent routes into `wagyushop.com`

### 2) Subdomain fallback (still valid)

**discover.wagyushop.com** (also: go / offers)

Useful for phase-1 paid experiments if a new domain is not ready. Isolates technical risk from the successful storefront.

## Purpose of the Next.js layer

Paid-search LPs · buying guides · grading education · comparisons · gift guides · seasonal campaigns · recipes · selectors/quizzes · merchandising flows · email/SMS capture · campaign bundles · fast CRO experiments.

## Customer flow

```
Google Ad or organic discovery
→ lean Next.js portal (new domain · or discover.wagyushop.com)
→ recommended Wagyu product / story
→ wagyushop.com/products/... native Shopify PDP
→ native Shopify cart and checkout
```

Not a second storefront. Educate, persuade, qualify, personalize, route.

## Division of responsibilities

**Shopify owns:** catalog, PDPs (default), inventory, pricing, discounts, cart, checkout, accounts, subscriptions, reviews/apps, orders, Merchant Center feed.

**Next.js owns:** acquisition funnels, campaign LPs, editorial, interactive guides, custom conversion UX, experimentation, personalization, fast campaign deploy, advanced tracking/segmentation where useful.

## SEO consideration

- Long-term organic authority can live on the **new marketing domain** (or carefully on `wagyushop.com/guides/...` only if it does not disturb the theme).
- Do not migrate existing ranking pages merely to justify Next.js.
- Avoid overstating SEO benefit. Strongest case: acquisition flexibility, experimentation speed, storytelling, conversion optimization, while Shopify keeps ops strengths.

## Tracking requirements

- Coordinated GTM / GA4 across portal ↔ Shopify
- Cross-domain (or cross-subdomain) session continuity
- Google Ads conversion attribution
- Meta + Klaviyo identity continuity
- UTM preservation
- Consent management
- Server-side / enhanced conversions
- Funnel reporting: landing → PDP → purchase

## Phased rollout

1. One focused Next.js campaign or buying-guide prototype (new domain if possible; else discover.*)
2. Connect analytics, Shopify product data, conversion tracking
3. Test vs equivalent native Shopify theme traffic
4. Expand only if CVR, engagement, speed, or paid economics improve materially

## Implementation in this prototype

- Dashboard / tech audit / system map / bypass updated to reflect **leave theme alone** + **new domain preferred**
- Tech audit includes a **copy/paste box** for their web-dev team
- Lighthouse receipts shown as **compact cards**, not oversized screenshots
