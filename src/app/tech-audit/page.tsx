import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { CopyBox } from "@/components/CopyBox";
import {
  actionPlan,
  damageHierarchy,
  lighthouseResults,
  scorecard,
  techStackVerdict,
} from "@/data/tech-audit";
import { growthDomainStrategy, webDevHandoffNote } from "@/data/webdev-handoff";

function scoreColor(score: number) {
  if (score <= 20) return "text-red-600";
  if (score <= 40) return "text-orange-600";
  return "text-yellow-600";
}

export default function TechAuditPage() {
  return (
    <AppShell
      title="Shopify performance tech audit"
      subtitle="The store looks expensive. The frontend is indulgent. Shopify is not the villain — the theme + apps + tags buried a fast foundation. Growth move: leave the theme alone and acquire elsewhere."
      eyebrow="Critical external tech audit · Real Lighthouse · homepage 12/100"
    >
      <p className="mb-6 text-sm text-muted">
        Measured locally with Lighthouse 12.8.2, mobile form factor, simulated
        throttling (2026-07-31). Google good targets: LCP ≤ 2.5s, TBT ≤ 200ms,
        CLS ≤ 0.1.
      </p>

      <section className="rounded-xl border border-accent/30 bg-accent-soft/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Growth decision
        </p>
        <p className="mt-2 text-sm font-medium text-ink">
          {growthDomainStrategy.themeStance}
        </p>
        <p className="mt-2 text-sm text-muted">
          {growthDomainStrategy.rankingNote}
        </p>
        <p className="mt-3 text-sm text-ink">
          <span className="font-medium">Preferred surface: </span>
          {growthDomainStrategy.preferredSurface}
        </p>
        <p className="mt-1 text-sm text-muted">
          Fallback: {growthDomainStrategy.subdomainFallback}
        </p>
      </section>

      <section id="horror-show" className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-ink">
            Mobile Lighthouse — compact receipts
          </h3>
          <p className="text-xs text-muted">Scores as cards · not full-page shots</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {lighthouseResults.map((result) => (
            <article
              key={result.page}
              className="rounded-xl border border-line bg-panel p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-ink">{result.page}</h4>
                  <p className="mt-0.5 truncate text-[11px] text-muted">
                    {result.url.replace("https://", "")}
                  </p>
                </div>
                <span
                  className={`font-display text-3xl font-bold leading-none ${scoreColor(result.score)}`}
                >
                  {result.score}
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-muted">
                <div>
                  <dt className="uppercase tracking-wide">LCP</dt>
                  <dd className="font-medium text-ink-soft">{result.lcp}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">TBT</dt>
                  <dd className="font-medium text-ink-soft">{result.tbt}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">CLS</dt>
                  <dd className="font-medium text-ink-soft">{result.cls}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">Weight</dt>
                  <dd className="font-medium text-ink-soft">{result.weight}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">Requests</dt>
                  <dd className="font-medium text-ink-soft">{result.requests}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">Scripts</dt>
                  <dd className="font-medium text-ink-soft">{result.scripts}</dd>
                </div>
              </dl>
              <ul className="mt-3 space-y-0.5 border-t border-line pt-2 text-[11px] text-muted">
                {result.extra.slice(0, 4).map((line) => (
                  <li key={line}>· {line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <CopyBox
          title="Copy / paste for their web-dev team"
          subtitle="You are not touching the theme. This note tells their team: leave it alone for growth, optional hygiene only."
          text={webDevHandoffNote}
        />
      </div>

      <section className="mt-12 rounded-xl border border-line bg-panel p-6">
        <h3 className="font-display text-xl font-semibold text-ink">Bottom line</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The Wagyu Shop is slow because it is over-designed and over-instrumented.
          That does not mean we should rebuild the theme. Leave the lookbook for
          brand browsers. Put acquisition (paid + SEO) on a lean Next.js portal —
          preferably a new domain without “shop” in the name — and hand shoppers
          into native Shopify PDPs and checkout.
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
        <ol className="mt-4 space-y-3">
          {damageHierarchy.map((item, i) => (
            <li
              key={item.title}
              className="rounded-xl border border-line bg-panel p-4"
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
          Keep commerce. Leave the theme. Optional hygiene for their web team.
          Build the acquisition portal elsewhere.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {techStackVerdict.map((item) => (
            <div
              key={item.area}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
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
          Optional theme hygiene (for their web team — not you)
        </h3>
        <p className="mt-2 text-sm text-muted">
          These are nice-to-haves if they want a healthier brand shell. They are
          not blockers for the Next.js acquisition plan.
        </p>
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
          Acquisition architecture (not a theme rewrite)
        </h3>
        <p className="mt-2 text-sm text-muted">
          New marketing/SEO domain preferred (no “shop” in the name). Subdomain
          fallback OK for phase-1 paid tests. Educate → recommend → native Shopify
          PDP → checkout.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-panel p-4 text-xs text-muted">
{`Google Ads / organic / social
            ↓
Lean Next.js portal (new domain · or discover.wagyushop.com)
            ↓
Recommended product / bundle story
            ↓
wagyushop.com Shopify PDP
            ↓
Native Shopify cart / checkout`}
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
