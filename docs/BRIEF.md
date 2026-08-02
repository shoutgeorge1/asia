# CURSOR BUILD: Asia International / The Wagyu Shop Growth Prototype + Dashboard

Source: email from George Aguilar to self — Fri, Jul 31, 2026  
Interview context: Tiffany (marketing lead), Asia International / The Wagyu Shop

## Project name

Asia International / The Wagyu Shop — Luxury Commerce Growth Vision

## Context

George completed a first interview with Tiffany, the all-around marketing lead. The company recently let go of an agency and a full-time in-house marketing person also left. They are looking for a broad technical marketing operator who can connect paid media, Shopify, email, SMS, analytics, social, offers, seasonal campaigns, and growth reporting.

This is **not** an aggressive teardown. Their current operation appears competent and fairly complete at the basic level. The public site is a standard Shopify-centered luxury DTC ecommerce store backed by a real B2B importer, processor, warehouse, distributor, and cold-chain fulfillment operation.

### What George can add beyond ordinary channel management

- Premium campaign experiences
- Better offer packaging
- VIP and gifting strategy
- Seasonal landing pages
- Shopify-connected Next.js front-end concepts
- Email/SMS lifecycle thinking
- A light executive dashboard connecting acquisition, retention, product performance, and profitability

## Company snapshot

| Field | Detail |
| --- | --- |
| Parent company | Asia International, Inc. |
| Consumer brand | The Wagyu Shop |
| Store | https://wagyushop.com/ |
| Location | Santa Ana, California |
| Role | Paid Ads and Media Specialist (functionally ecommerce growth manager / digital growth lead) |
| Arrangement | Full-time; presented as five days on-site; hybrid discussed |

## Business model

The company imports, processes, warehouses, distributes, and fulfills premium meat and specialty food products. The Wagyu Shop is the DTC ecommerce layer on top of that infrastructure.

### Product categories

Japanese A5 Wagyu · Kobe · Miyazaki · Olive Wagyu · American Wagyu · Australian Wagyu · Prime beef · Seafood · Caviar · Gift boxes · Subscription boxes · Seasonal / premium assortments

### Primary customer groups

Affluent consumers · Food enthusiasts · Home chefs · Luxury gift buyers · Holiday shoppers · Corporate gifting · Repeat premium-food customers · Subscription customers

## Current public digital stack

Shopify storefront + checkout · Google Ads · Merchant Center / Shopping · Meta · Microsoft Ads · GA4 · Email/SMS (likely Klaviyo or recent Omnisend migration) · Instagram / Facebook / likely TikTok · Shopify apps (reviews, subscriptions, fraud, shipping, accessibility, support)

No obvious WordPress sidecar, headless Next.js storefront, separate CMS, or complex multi-site architecture.

**Shopify remains the commerce engine** for products, inventory, checkout, orders, customers, payments, and fulfillment.

## Proposed technical vision

Proof-of-concept experience layer: Next.js conceptually integrated with Shopify Storefront APIs.

```
Next.js experience layer
→ Shopify Storefront API
→ Shopify checkout
→ Klaviyo / current email platform
→ SMS / Twilio concept
→ Google Ads · Merchant Center · Meta · GA4
→ Internal executive dashboard
```

Do not imply Shopify is inadequate. Position this as a selective premium experience layer for campaigns, gifting, VIP, education, and seasonal merchandising.

## Core strategy

Not simply more traffic — stronger commercial packaging and long-term brand equity.

Focus: optimized offers · bundles · luxury gifting · seasonal campaigns · VIP · limited drops · subscription retention · product education · segmentation · repeat purchase · product-level profitability · connecting paid, email, SMS, Shopify, inventory, and fulfillment.

## Prototype pages

Build two or three polished pages, not an entire replacement website.

### 1. VIP / Private Client — The Wagyu Society (or Reserve)

Early access · private releases · members-only bundles · priority holiday shipping · chef content · birthday/anniversary rewards · invitation-only tasting · tiered membership · VIP concierge · high-value experience.

Tone: luxury, understated, exclusive, editorial — not cheesy loyalty language.

### 2. Seasonal Gifting / Holiday Bundle — Holiday 2026 Luxury Gifting

Curated gift bundles · corporate gifting · family feast · date-night · surf-and-turf · Japanese tasting flight · beginner kit · shipping cutoff calendar · gift messages · serving-size guidance · prep instructions · early-access capture · recommendations by budget/recipient.

### 3. Optional — Japanese Regions / Product Story

Interactive editorial for Kobe · Miyazaki · Olive Wagyu · Hokkaido · maps · origin stories · grading education · recommended cuts · related products · cooking guidance.

## Design direction

Luxury editorial commerce · large photography · spacious typography · dark or neutral palette · minimal interface · strong storytelling · premium restraint · Apple Store meets Michelin Guide.

Avoid: cheap steakhouse aesthetics · loud discount badges · generic Canva cards · excessive dashboard chrome · fake complexity.

## Offer / bundle ideas

First-Time Wagyu Experience · Date Night Collection · Japanese Tasting Flight · Chef's Choice Box · Luxury Surf and Turf · Father's Day Collection · Holiday Feast · Corporate Executive Gift Box · Ultimate Wagyu Experience · Japanese BBQ Kit · Celebration Package · VIP Limited Release · Subscription Upgrade Bundle

Each bundle explains: who it's for · occasion · serving size · cooking difficulty · delivery expectations · why it's valuable.

## Light executive dashboard

Gentle, polished. Sample data clearly labeled illustrative.

KPI cards: total revenue · new / returning customer revenue · AOV · CAC · blended MER · repeat rate · LTV · email / SMS / subscription / gift bundle / VIP revenue.

Sections: channels · merchandising · lifecycle · operational visibility (inventory, shipping cutoffs, seasonal calendar).

## Email + SMS concept

Welcome · first-time education · high-value treatment · cart/browse recovery · post-purchase instructions · replenishment · VIP invites · holiday gifting reminders · corporate outreach · subscription retention · win-back.

Journey:

```
Google / Meta / Organic
→ Campaign landing page
→ Shopify product or bundle
→ Checkout
→ Post-purchase email
→ SMS concierge
→ VIP or subscription invitation
→ Repeat purchase
→ Referral
```

## Interview positioning

> You already have the fundamentals covered. This is not a criticism of the existing work. This shows how the brand could evolve into a more unified premium growth system.

George: Google Ads specialist · ecommerce systems thinker · connects Shopify, analytics, LPs, email, SMS, offers, reporting · understands physical ops from Independence Ranch · builds technical prototypes tied to practical growth strategy.

### Quiet questions the prototype should answer

- How do we connect paid media to actual product profitability?
- Which bundles and segments create the best long-term value?
- How do email and SMS improve repeat purchase?
- How should seasonal campaigns coordinate with inventory and shipping?
- How do we create a more premium digital experience without replacing Shopify?
- How can one dashboard create visibility without becoming burdensome?

## Deliverables

1. Project home / executive overview
2. VIP landing page
3. Seasonal gifting / holiday bundle page
4. Gentle executive dashboard
5. Simple system architecture diagram
6. Customer lifecycle diagram (email + SMS)
7. README: Shopify remains the commerce engine

Optional: regions page · gift recommendation assistant · serving-size calculator · budget/occasion selector · corporate gifting page

## Build constraints

Next.js · modular · sample data only · no unauthorized copyrighted product photography (placeholders OK) · no confusing checkout imitation · not an official company site · discreet “Concept Prototype” label · mobile + desktop polished · screenshot / live-demo clarity.

## Primary objective

Make them think: George is not merely another person who can operate Google Ads or Shopify — he understands how to turn products, customer data, seasonal demand, email, paid media, and fulfillment into a unified premium growth system.

**Do not overbuild.** Prioritize two exceptional landing pages and one compelling lightweight dashboard.
