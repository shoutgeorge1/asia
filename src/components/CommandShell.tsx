import Link from "next/link";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/ideas", label: "Growth ideas" },
  { href: "/talking-points", label: "Interview notes" },
];

export function CommandShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-line/80 bg-panel/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-display text-lg tracking-tight text-ink">
              Asia · Wagyu Shop
            </Link>
            <span className="rounded-sm border border-line bg-paper-dim px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
              Concept Prototype
            </span>
          </div>
          <nav className="flex flex-wrap gap-1 text-sm text-muted">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 transition-colors hover:bg-paper-dim hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wagyushop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-1.5 transition-colors hover:bg-paper-dim hover:text-ink"
            >
              Live store ↗
            </a>
          </nav>
        </div>
      </div>

      <header className="mx-auto max-w-6xl px-5 pt-10 pb-6 md:px-8">
        <p className="rise text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Command Center
        </p>
        <h1 className="rise rise-delay-1 mt-2 font-display text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="rise rise-delay-2 mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16 md:px-8">{children}</main>

      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-xs text-muted md:px-8 md:flex-row md:items-center md:justify-between">
          <span>Sample / interview prototype · Shopify remains the commerce engine</span>
          <span>Brief archived in docs/BRIEF.md</span>
        </div>
      </footer>
    </div>
  );
}
