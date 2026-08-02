import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  apiApproaches,
  bypassSteps,
  firstBuilds,
  goAround,
  keepList,
  myths,
} from "@/data/bypass";
import { proposedArchitecture } from "@/data/architecture";

export default function BypassPage() {
  return (
    <AppShell
      title="Bypass strategy: Next.js → Shopify API"
      subtitle="Yes — you're thinking about this properly. The live storefront is bloated. You are not obligated to fix every Maestrooo / app / pixel problem before you can sell steak faster."
      eyebrow="Go around the bloat"
    >
      <section className="rounded-xl border border-line bg-panel p-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          Straight answer
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Don&apos;t repair the Maestrooo lookbook — leave it for brand browsers.
          Route paid/SEO through a lean Next.js portal (
          <strong>new domain without “shop” preferred</strong>;{" "}
          {proposedArchitecture.subdomain} as fallback), pull product data from
          the Storefront API when useful, then hand shoppers into Shopify
          cart/checkout. Going around the bloat — not rewriting their store.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-accent/30 bg-accent-soft/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Proposed future-state · not existing implementation
        </p>
        <p className="mt-2 text-sm text-ink">
          <strong>Flow:</strong> {proposedArchitecture.flow}
        </p>
        <p className="mt-2 text-sm text-muted">
          <strong>Core principle:</strong> {proposedArchitecture.corePrinciple}
        </p>
        <p className="mt-2 text-sm text-muted">
          <strong>SEO note:</strong> {proposedArchitecture.seoNote}
        </p>
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Tracking requirements
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {proposedArchitecture.tracking.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-panel px-3 py-1 text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">The path</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {bypassSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <span className="font-display text-2xl font-semibold text-accent">
                {step.step}
              </span>
              <h4 className="mt-2 font-medium text-ink">{step.title}</h4>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          ))}
        </div>
        <pre className="mt-8 overflow-x-auto rounded-xl border border-line bg-panel p-6 text-xs text-muted">
{`Paid / SEO traffic
        ↓
Lean Next.js landing  (SSR / static, tiny JS)
        ↓
Shopify Storefront API  (products, price, availability, media)
        ↓
Shopify cart / checkout  (still Shopify — do not fake this)`}
        </pre>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section>
          <h3 className="font-display text-xl font-semibold text-ink">
            What you go around
          </h3>
          <ul className="mt-4 space-y-2">
            {goAround.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className="text-accent">×</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-display text-xl font-semibold text-ink">
            What you keep
          </h3>
          <ul className="mt-4 space-y-2">
            {keepList.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className="text-green-700">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Directly to the Shopify API — precise version
        </h3>
        <div className="mt-4 space-y-4">
          {apiApproaches.map((approach) => (
            <div
              key={approach.title}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <h4 className="font-medium text-ink">{approach.title}</h4>
              <p className="mt-2 text-sm text-muted">{approach.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Are you right about the bloat?
        </h3>
        <p className="mt-2 text-sm text-muted">
          Yes. From the outside: Maestrooo luxury theme, oversized media, heavy
          nav duplication, app/script pileup, Giftship Liquid errors, tracking
          that wakes up after paint.
        </p>
        <div className="mt-6 space-y-3">
          {myths.map((item) => (
            <div
              key={item.myth}
              className="rounded-xl border border-line bg-panel p-4"
            >
              <p className="text-sm">
                <span className="font-medium text-red-800">Myth:</span>{" "}
                <span className="text-muted">{item.myth}</span>
              </p>
              <p className="mt-1 text-sm">
                <span className="font-medium text-green-800">Reality:</span>{" "}
                <span className="text-muted">{item.reality}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Phased rollout
        </h3>
        <div className="mt-4 space-y-4">
          {proposedArchitecture.phases.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                {phase.phase}
              </span>
              <h4 className="mt-1 font-medium text-ink">{phase.title}</h4>
              <p className="mt-2 text-sm text-muted">{phase.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          First builds if we execute the bypass
        </h3>
        <p className="mt-2 text-sm text-muted">
          Prototype landings today are visual comps. Next step is a real
          Storefront API read.
        </p>
        <div className="mt-2 flex gap-4 text-sm">
          <Link href="/tech-audit" className="text-accent hover:underline">
            Tech audit
          </Link>
          <Link href="/dashboard" className="text-accent hover:underline">
            Dashboard
          </Link>
        </div>
        <div className="mt-4 space-y-2">
          {firstBuilds.map((item) => (
            <div
              key={item.build}
              className="flex gap-3 rounded-lg border border-line bg-panel p-3 text-sm"
            >
              <span className="shrink-0 rounded bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                {item.priority}
              </span>
              <span className="text-muted">{item.build}</span>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
