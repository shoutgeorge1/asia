import { AppShell } from "@/components/AppShell";
import { lifecycleSteps, ownedChannelPrograms } from "@/data/lifecycle";

export default function LifecyclePage() {
  return (
    <AppShell
      title="Customer lifecycle"
      subtitle="How Shopify customer and order data can support email and SMS without inventing a separate commerce stack."
    >
      <section className="space-y-4">
        {lifecycleSteps.map((step) => (
          <div
            key={step.num}
            className="rounded-xl border border-line bg-panel p-5 md:flex md:gap-6"
          >
            <div className="mb-3 shrink-0 md:mb-0 md:w-32">
              <span className="font-display text-2xl font-semibold text-accent">
                {step.num}
              </span>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                {step.channel}
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Owned-channel program ideas
        </h3>
        <p className="mt-2 text-sm text-muted">
          Practical flows a growth operator can sequence against inventory and
          seasonal demand.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {ownedChannelPrograms.map((program) => (
            <span
              key={program}
              className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-muted"
            >
              {program}
            </span>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
