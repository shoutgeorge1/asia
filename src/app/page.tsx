import Link from "next/link";
import { CommandShell } from "@/components/CommandShell";
import {
  architectureLayers,
  journeySteps,
  positioning,
} from "@/data/talking-points";

const surfaces = [
  {
    href: "/ideas",
    title: "Growth ideas",
    body: "VIP, gifting, bundles, Next.js layer, lifecycle, and a light dashboard — digested for demos.",
  },
  {
    href: "/talking-points",
    title: "Interview notes",
    body: "Positioning lines, quiet questions Tiffany’s team may care about, and what not to imply.",
  },
];

export default function HomePage() {
  return (
    <CommandShell
      title="Luxury commerce growth vision"
      subtitle={`${positioning.brand} · ${positioning.company}. ${positioning.oneLiner}`}
    >
      <section className="rise rise-delay-2 grid gap-4 md:grid-cols-2">
        {surfaces.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-xl border border-line bg-panel p-6 shadow-[0_1px_0_rgba(18,17,15,0.04)] transition hover:border-accent-soft"
          >
            <h2 className="font-display text-2xl tracking-tight text-ink group-hover:text-ink-soft">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            <span className="mt-4 inline-block text-sm text-accent">Open →</span>
          </Link>
        ))}
      </section>

      <section className="rise rise-delay-3 mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-panel p-6">
          <h2 className="font-display text-xl tracking-tight">System sketch</h2>
          <p className="mt-1 text-sm text-muted">
            Experience layer on top — Shopify stays the backbone.
          </p>
          <ol className="mt-5 space-y-3">
            {architectureLayers.map((layer, i) => (
              <li key={layer.name} className="flex gap-3 text-sm">
                <span className="mt-0.5 w-5 shrink-0 font-medium text-accent">{i + 1}</span>
                <span>
                  <span className="font-medium text-ink">{layer.name}</span>
                  <span className="block text-muted">{layer.note}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl border border-line bg-panel p-6">
          <h2 className="font-display text-xl tracking-tight">Customer journey</h2>
          <p className="mt-1 text-sm text-muted">
            Paid / organic → campaign page → Shopify → lifecycle → VIP.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {journeySteps.map((step, i) => (
              <span
                key={step}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft"
              >
                <span className="text-accent">{i + 1}</span>
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      <blockquote className="mt-10 border-l-2 border-accent pl-5 text-lg leading-relaxed text-ink-soft md:text-xl">
        “{positioning.interviewLine}”
      </blockquote>
    </CommandShell>
  );
}
