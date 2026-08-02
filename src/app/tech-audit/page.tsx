import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  actionPlan,
  damageHierarchy,
  lighthouseResults,
  scorecard,
  techStackVerdict,
} from "@/data/tech-audit";

function scoreColor(score: number) {
  if (score <= 20) return "text-red-600";
  if (score <= 40) return "text-orange-600";
  return "text-yellow-600";
}

export default function TechAuditPage() {
  return (
    <AppShell
      title="Shopify performance tech audit"
      subtitle="The store looks expensive. The frontend is indulgent. This is not Shopify is slow — they took a fast foundation and buried it under a luxury lookbook, oversized media, duplicated markup, and marketing scripts."
      eyebrow="Critical external tech audit · Real Lighthouse · homepage 12/100"
    >
      <p className="mb-8 text-sm text-muted">
        Measured locally with Lighthouse 12.8.2, mobile form factor, simulated
        throttling (2026-07-31). Google good targets: LCP ≤ 2.5s, TBT ≤ 200ms,
        CLS ≤ 0.1.
      </p>

      <a
        href="#lighthouse-shots"
        className="inline-block text-sm font-medium text-accent hover:underline"
      >
        Jump to screenshots →
      </a>

      <section id="horror-show" className="mt-10">
        <h3 className="font-display text-xl font-semibold text-ink">
          Mobile Lighthouse receipts
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                <th className="pb-3 pr-4">Page</th>
                <th className="pb-3 pr-4">Score</th>
                <th className="pb-3 pr-4">LCP</th>
                <th className="pb-3 pr-4">TBT</th>
                <th className="pb-3 pr-4">CLS</th>
                <th className="pb-3 pr-4">Weight</th>
                <th className="pb-3 pr-4">Requests</th>
                <th className="pb-3">Scripts</th>
              </tr>
            </thead>
            <tbody>
              {lighthouseResults.map((row) => (
                <tr key={row.page} className="border-b border-line/60">
                  <td className="py-3 pr-4">
                    <span className="font-medium text-ink">{row.page}</span>
                    <span className="mt-0.5 block text-xs text-muted">{row.url}</span>
                  </td>
                  <td className={`py-3 pr-4 font-semibold ${scoreColor(row.score)}`}>
                    {row.score}
                  </td>
                  <td className="py-3 pr-4 text-muted">{row.lcp}</td>
                  <td className="py-3 pr-4 text-muted">{row.tbt}</td>
                  <td className="py-3 pr-4 text-muted">{row.cls}</td>
                  <td className="py-3 pr-4 text-muted">{row.weight}</td>
                  <td className="py-3 pr-4 text-muted">{row.requests}</td>
                  <td className="py-3 text-muted">{row.scripts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="lighthouse-shots" className="mt-12 grid gap-6 lg:grid-cols-3">
        {lighthouseResults.map((result) => (
          <div
            key={result.page}
            className="rounded-xl border border-line bg-panel overflow-hidden"
          >
            <div className="flex aspect-[9/16] max-h-80 items-center justify-center bg-stone-100 p-4">
              <div className="text-center">
                <p className={`font-display text-5xl font-bold ${scoreColor(result.score)}`}>
                  {result.score}
                </p>
                <p className="mt-2 text-sm text-muted">{result.page}</p>
                <p className="mt-1 text-xs text-muted">Mobile Lighthouse</p>
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-1 text-xs text-muted">
                {result.extra.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-xl border border-line bg-panel p-6">
        <h3 className="font-display text-xl font-semibold text-ink">Bottom line</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The Wagyu Shop is slow because it is over-designed and
          over-instrumented. Luxury photography creates perceived quality while
          the frontend implementation actively undermines the luxury experience.
          Shopify should do commerce processing. The lookbook layer needs
          restraint — or a lean Next.js campaign layer that doesn&apos;t repeat
          the same mistakes.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Conceptual scorecard
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {scorecard.map((item) => (
            <div
              key={item.dimension}
              className="flex items-start justify-between rounded-xl border border-line bg-panel p-4"
            >
              <div>
                <p className="font-medium text-ink">{item.dimension}</p>
                <p className="mt-1 text-sm text-muted">{item.note}</p>
              </div>
              <span className="ml-4 shrink-0 font-display text-lg font-semibold text-accent">
                {item.score}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Likely damage hierarchy
        </h3>
        <ol className="mt-4 space-y-4">
          {damageHierarchy.map((item, i) => (
            <li
              key={item.title}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <div className="flex gap-3">
                <span className="font-display text-lg font-semibold text-accent">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-medium text-ink">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted">{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Tech stack verdict
        </h3>
        <p className="mt-2 text-sm font-medium text-ink">
          Keep commerce. Fix the shell. Audit apps and tags. Add Next.js only
          with discipline.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {techStackVerdict.map((item) => (
            <div
              key={item.area}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-ink">{item.area}</h4>
                <span className="rounded bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                  {item.stance}
                </span>
              </div>
              <ul className="mt-3 space-y-1">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm text-muted">
                    · {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Action plan — first fixes
        </h3>
        <div className="mt-4 space-y-2">
          {actionPlan.map((item) => (
            <div
              key={item.action}
              className="flex gap-3 rounded-lg border border-line bg-panel p-3 text-sm"
            >
              <span className="shrink-0 rounded bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                {item.priority}
              </span>
              <span className="text-muted">{item.action}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-accent/30 bg-accent-soft/40 p-6">
        <h3 className="font-display text-lg font-semibold text-ink">
          Next.js instinct — directionally right
        </h3>
        <p className="mt-2 text-sm text-muted">
          Do not initially replace Shopify. Use lean, mostly static Next.js pages
          for Google Ads / SEO landings → product data from Shopify → Shopify
          cart/checkout. A fat React spa with giant hydration, client API calls,
          and the same tag pileup will be just as bad.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-panel p-4 text-xs text-muted">
{`Google Ads / SEO landing pages
            ↓
Lean Next.js pages
            ↓
Product data from Shopify
            ↓
Shopify product / cart / checkout`}
        </pre>
      </section>

      <Link
        href="/dashboard"
        className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
      >
        ← Back to dashboard
      </Link>
    </AppShell>
  );
}
