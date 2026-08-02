import { CommandShell } from "@/components/CommandShell";
import { growthIdeas } from "@/data/talking-points";

export default function IdeasPage() {
  return (
    <CommandShell
      title="Growth ideas worth highlighting"
      subtitle="Digested from the Jul 31 brief — cool bolts-on to the existing Shopify site, not a rebuild. Use these in conversation with Tiffany / leadership."
    >
      <div className="grid gap-4">
        {growthIdeas.map((idea, index) => (
          <article
            key={idea.title}
            className="rise rounded-xl border border-line bg-panel p-6 md:p-7"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl tracking-tight text-ink">
                {idea.title}
              </h2>
              <span className="text-xs uppercase tracking-[0.14em] text-muted">
                Idea {index + 1}
              </span>
            </div>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-ink-soft">
              {idea.summary}
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted md:grid-cols-2">
              {idea.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-line pt-3 text-sm text-ink-soft">
              <span className="font-medium text-ink">Why it matters: </span>
              {idea.whyItMatters}
            </p>
          </article>
        ))}
      </div>
    </CommandShell>
  );
}
