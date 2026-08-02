import { AppShell } from "@/components/AppShell";
import {
  architectureFlow,
  designBoundary,
  pillars,
  proposedArchitecture,
} from "@/data/architecture";

export default function SystemMapPage() {
  return (
    <AppShell
      title="System architecture"
      subtitle="Selective premium experiences above Shopify — not a rebuild of the store. Shopify stays the operational backbone."
    >
      <section className="rounded-xl border border-accent/30 bg-accent-soft/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Proposed future-state experiment
        </p>
        <p className="mt-2 text-sm text-ink">{proposedArchitecture.disclaimer}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium text-muted">Preferred subdomain</p>
            <p className="font-medium text-ink">{proposedArchitecture.subdomain}</p>
            <p className="mt-1 text-xs text-muted">
              Also acceptable: {proposedArchitecture.altSubdomains.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted">Acquisition flow</p>
            <p className="text-sm text-ink">{proposedArchitecture.flow}</p>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-ink">
          {proposedArchitecture.corePrinciple}
        </p>
        <p className="mt-2 text-sm text-muted">{proposedArchitecture.seoNote}</p>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Conceptual flow
        </h3>
        <div className="mt-6 flex flex-col items-center gap-0">
          {architectureFlow.map((step, i) => (
            <div key={step.step} className="flex w-full max-w-md flex-col items-center">
              <div className="w-full rounded-xl border border-line bg-panel px-6 py-4 text-center">
                <span className="text-xs font-semibold text-accent">
                  {String(step.step).padStart(2, "0")}
                </span>
                <p className="mt-1 font-medium text-ink">{step.label}</p>
              </div>
              {i < architectureFlow.length - 1 && (
                <div className="h-6 w-px bg-accent/40" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Division of responsibilities
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <h4 className="font-display text-lg font-semibold text-ink">
                {pillar.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">
          Cross-subdomain tracking
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {proposedArchitecture.tracking.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-muted"
            >
              {item}
            </span>
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

      <section className="mt-12 rounded-xl border border-line bg-panel p-6">
        <h3 className="font-display text-lg font-semibold text-ink">
          Design boundary
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {designBoundary}
        </p>
      </section>
    </AppShell>
  );
}
