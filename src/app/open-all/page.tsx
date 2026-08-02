"use client";

const PAGES = [
  { label: "Overview", path: "/" },
  { label: "Executive Dashboard", path: "/dashboard" },
  { label: "Tech Audit", path: "/tech-audit" },
  { label: "Bypass Strategy", path: "/bypass" },
  { label: "System Map", path: "/system-map" },
  { label: "Lifecycle", path: "/lifecycle" },
  { label: "Landing Gallery", path: "/landing" },
  {
    label: "TWS Reserve (VIP)",
    path: "https://asia-wagyu-growth.vercel.app/landing/vip",
  },
  {
    label: "Gifting",
    path: "https://asia-wagyu-growth.vercel.app/landing/gifting",
  },
] as const;

export default function OpenAllPage() {
  function openAll() {
    for (const page of PAGES) {
      window.open(page.path, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-6 px-6 py-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6a35]">
          Review launcher
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[#1c1917]">
          Open all project pages
        </h1>
        <p className="mt-3 text-[#78716c]">
          Click once — Chrome will open every Asia Growth Vision page in a new
          tab. Allow pop-ups for this site if prompted.
        </p>
      </div>

      <button
        type="button"
        onClick={openAll}
        className="rounded-lg bg-[#1c1917] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8a6a35]"
      >
        Open all {PAGES.length} pages in new tabs
      </button>

      <ol className="space-y-2 text-sm text-[#44403c]">
        {PAGES.map((page, i) => (
          <li key={page.path}>
            <a className="underline-offset-2 hover:underline" href={page.path}>
              {i + 1}. {page.label}
            </a>
          </li>
        ))}
      </ol>
    </main>
  );
}
