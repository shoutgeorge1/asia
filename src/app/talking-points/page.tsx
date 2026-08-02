import { CommandShell } from "@/components/CommandShell";
import { positioning, quietQuestions } from "@/data/talking-points";

const doSay = [
  "Shopify stays the commerce engine — products, checkout, inventory, fulfillment.",
  "This is a selective premium experience layer for campaigns, VIP, gifting, and education.",
  "The opportunity is commercial packaging and brand equity, not just more traffic.",
  "One person who can connect paid, Shopify, email/SMS, offers, and reporting.",
];

const dontImply = [
  "Their current stack is broken or amateur.",
  "We should rip out Shopify for a full headless rewrite.",
  "We need a massive fake enterprise dashboard.",
  "This prototype is an official company site or live checkout.",
];

const georgeAngle = [
  "Google Ads specialist who also thinks in systems",
  "Connects landing pages, analytics, email, SMS, offers, and reporting",
  "Understands physical ops / fulfillment constraints (Independence Ranch)",
  "Can ship a technical prototype and tie it to practical growth strategy",
];

export default function TalkingPointsPage() {
  return (
    <CommandShell
      title="Interview talking points"
      subtitle="Keep these nearby when you talk to Tiffany. Full source brief lives in docs/BRIEF.md."
    >
      <section className="rise grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-panel p-6">
          <h2 className="font-display text-xl tracking-tight">Do say</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
            {doSay.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-good">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-panel p-6">
          <h2 className="font-display text-xl tracking-tight">Don’t imply</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
            {dontImply.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-warn">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-line bg-panel p-6">
        <h2 className="font-display text-xl tracking-tight">Your angle</h2>
        <ul className="mt-4 grid gap-2 text-sm text-ink-soft md:grid-cols-2">
          {georgeAngle.map((item) => (
            <li key={item} className="rounded-lg border border-line bg-paper px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-line bg-panel p-6">
        <h2 className="font-display text-xl tracking-tight">
          Quiet questions this work answers
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
          {quietQuestions.map((q, i) => (
            <li key={q} className="flex gap-3">
              <span className="font-medium text-accent">{i + 1}.</span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-8 text-sm text-muted">
        Live store reference:{" "}
        <a
          className="text-accent underline-offset-2 hover:underline"
          href={positioning.store}
          target="_blank"
          rel="noopener noreferrer"
        >
          {positioning.store}
        </a>
      </p>
    </CommandShell>
  );
}
