import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  exploreLinks,
  featureCards,
  overviewKpis,
  positioningBullets,
} from "@/data/overview";
import { proposedArchitecture } from "@/data/architecture";

export default function OverviewPage() {
  return (
    <AppShell
      title="Asia International / The Wagyu Shop"
      subtitle="A restrained growth vision prototype: premium campaign experiences on a Next.js layer, with Shopify remaining the commerce engine for products, checkout, customers, and fulfillment."
      eyebrow="Asia Growth Vision"
      badge="Illustrative sample data"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {overviewKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-line bg-panel p-4"
          >
            <p className="text-xs text-muted">{kpi.label}</p>
            <p className="font-display mt-1 text-2xl font-semibold text-ink">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-line bg-panel p-6 transition hover:border-accent/40 hover:shadow-sm"
          >
            <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
            <span className="mt-4 inline-block text-sm font-medium text-accent">
              Open →
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-12 rounded-xl border border-line bg-panel p-6 md:p-8">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Fundamentals are covered. This shows the next layer.
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Not a critique of the fundamentals. The prototype shows how paid media, Shopify,
          email/SMS, seasonal offers, VIP treatment, and fulfillment-aware
          campaign pacing can operate as one premium growth system.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {positioningBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-xl border border-accent/30 bg-accent-soft/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Proposed architecture · future-state experiment
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          {proposedArchitecture.disclaimer} Prefer a{" "}
          <strong>new marketing/SEO domain</strong> (no “shop” in the name);
          subdomain fallback {proposedArchitecture.subdomain}. Flow:{" "}
          {proposedArchitecture.flow}. {proposedArchitecture.corePrinciple}
        </p>
        <Link
          href="/system-map"
          className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
        >
          View system architecture →
        </Link>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {exploreLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-line bg-panel p-5 transition hover:border-accent/40"
          >
            <h3 className="font-medium text-ink">{link.label}</h3>
            <p className="mt-1 text-sm text-muted">{link.supporting}</p>
          </Link>
        ))}
      </section>
    </AppShell>
  );
}
