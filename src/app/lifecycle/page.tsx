import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ownedChannelPrograms, stages } from "@/data/lifecycle";

export default function LifecyclePage() {
  return (
    <AppShell
      title="Owned channel programs"
      subtitle="Concrete retention plays for The Wagyu Shop — what to send, when, and why each one protects margin better than another paid click."
      eyebrow="Customer Lifecycle"
      badge="Program backlog"
    >
      <section>
        <h2 className="font-display text-xl font-semibold text-ink">Journey map</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Paid and organic enter through a lean campaign surface, convert on Shopify, then get
          pulled into owned channels so the second purchase does not require another acquisition
          click. Architecture detail lives on{" "}
          <Link href="/system-map" className="font-medium text-accent hover:underline">
            System Map
          </Link>
          .
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {stages.map((stage, index) => (
            <article
              key={stage.id}
              className="rounded-xl border border-line bg-panel p-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                {String(index + 1).padStart(2, "0")} · {stage.id}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stage.body}</p>
              <p className="mt-3 text-xs text-muted">{stage.owner}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-ink">Program backlog</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Twelve owned-channel ideas ranked for a steak brand that already has traffic but needs
          better second-purchase economics. Build these in Klaviyo (or equivalent) against Shopify
          purchase and browse events — not as another theme rebuild.
        </p>
        <div className="mt-6 space-y-4">
          {ownedChannelPrograms.map((program, index) => (
            <article
              key={program.id}
              className="rounded-xl border border-line bg-panel p-5 md:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {String(index + 1).padStart(2, "0")} · {program.id}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-ink">
                    {program.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded border border-line px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                    {program.channel}
                  </span>
                  <span className="rounded bg-accent-soft px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                    {program.priority}
                  </span>
                </div>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {program.summary}
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Trigger
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{program.trigger}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    The play
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{program.play}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Why it matters
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{program.why}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
