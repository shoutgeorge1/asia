import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { RevenueChart } from "@/components/RevenueChart";
import {
  channelPerformance,
  kpiCards,
  merchandisingPanels,
  opsVisibility,
  platforms,
} from "@/data/dashboard";
import { proposedArchitecture } from "@/data/architecture";

export default function DashboardPage() {
  const p0Count = platforms.filter((p) => p.priority === "P0").length;

  return (
    <AppShell
      title="Executive dashboard"
      subtitle="One unified view of acquisition, retention, merchandising, and ecommerce — useful without becoming burdensome."
      badge="Sample data · trailing 30 days"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {kpiCards.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-line bg-panel p-4"
          >
            <p className="text-xs text-muted">{kpi.label}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="font-display text-2xl font-semibold text-ink">
                {kpi.value}
              </p>
              <span
                className={`text-xs font-medium ${
                  kpi.delta.startsWith("-") ? "text-red-700" : "text-green-700"
                }`}
              >
                {kpi.delta}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-muted">{kpi.note}</p>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Platforms to connect
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Prioritized action list from public/external signals only. This is
              the wiring backlog that turns sample KPIs into a real command
              center — not a teardown of their current marketing.
            </p>
          </div>
          <span className="rounded-full border border-line bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            {p0Count} P0 · {platforms.length} total
          </span>
        </div>
        <div className="mt-6 space-y-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                  {platform.priority}
                </span>
                <h4 className="font-medium text-ink">{platform.name}</h4>
                <span className="text-xs text-muted">· {platform.status}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{platform.why}</p>
              <p className="mt-2 text-xs text-muted">
                <span className="font-medium text-ink">Evidence:</span>{" "}
                {platform.evidence}
              </p>
              <p className="mt-1 text-xs text-accent">
                <span className="font-medium">Next:</span> {platform.next}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h3 className="font-display text-lg font-semibold text-ink">
            Tech audit · Performance receipts
          </h3>
          <p className="mt-2 font-medium text-red-800">
            Homepage mobile Lighthouse: 12/100 · LCP 7.6s
          </p>
          <p className="mt-2 text-sm text-muted">
            Compact Lighthouse cards + a copy/paste note for the web team.
            Primary weight: large imagery · theme JS · apps/tags. Server response
            is fine (~220ms). Growth plan does not require rebuilding the theme.
          </p>
          <Link
            href="/tech-audit#lighthouse-receipts"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Open tech audit →
          </Link>
        </div>

        <div className="rounded-xl border border-line bg-panel p-6">
          <h3 className="font-display text-lg font-semibold text-ink">
            Strategy · Selective acquisition path
          </h3>
          <p className="mt-2 text-sm text-muted">
            Keep the brand storefront for loyal and direct traffic. Acquire on a
            lean Next.js portal — <strong>new domain preferred</strong>,{" "}
            {proposedArchitecture.subdomain} as fallback — then hand shoppers
            into Shopify PDPs and checkout.
          </p>
          <Link
            href="/bypass"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Open bypass strategy →
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <RevenueChart />
      </div>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Operational visibility
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {opsVisibility.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-line bg-panel p-4"
            >
              <p className="text-sm font-medium text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 overflow-x-auto">
        <h3 className="font-display text-xl font-semibold text-ink">
          Channel performance
        </h3>
        <table className="mt-4 w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
              <th className="pb-3 pr-4">Channel</th>
              <th className="pb-3 pr-4">Spend</th>
              <th className="pb-3 pr-4">Revenue</th>
              <th className="pb-3 pr-4">Orders</th>
              <th className="pb-3 pr-4">CAC</th>
              <th className="pb-3">Note</th>
            </tr>
          </thead>
          <tbody>
            {channelPerformance.map((row) => (
              <tr key={row.channel} className="border-b border-line/60">
                <td className="py-3 pr-4 font-medium text-ink">{row.channel}</td>
                <td className="py-3 pr-4 text-muted">{row.spend}</td>
                <td className="py-3 pr-4 text-muted">{row.revenue}</td>
                <td className="py-3 pr-4 text-muted">{row.orders}</td>
                <td className="py-3 pr-4 text-muted">{row.cac}</td>
                <td className="py-3 text-muted">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {merchandisingPanels.map((panel) => (
          <div
            key={panel.title}
            className="rounded-xl border border-line bg-panel p-5"
          >
            <h3 className="font-medium text-ink">{panel.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{panel.copy}</p>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
