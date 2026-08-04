import Link from "next/link";
import Image from "next/image";
import { vipImages } from "@/data/landing";

const lpNav = [
  { href: "/", label: "Overview", key: "overview" as const },
  { href: "/landing/vip", label: "TWS Reserve", key: "vip" as const },
  { href: "/landing/gifting", label: "Gifting", key: "gifting" as const },
  {
    href: "https://wagyushop.com/",
    label: "Live Shopify",
    key: "shopify" as const,
    external: true,
  },
];

export function LandingChrome({
  children,
  activeNav,
}: {
  children: React.ReactNode;
  activeNav?: "vip" | "gifting";
}) {
  return (
    <div className="lp-root min-h-screen">
      <header className="sticky top-0 z-30 bg-black/95 backdrop-blur">
        <div className="lp-banner px-4 py-2 text-center">
          <a
            href="https://wagyushop.com/"
            target="_blank"
            rel="noreferrer"
          >
            Complimentary Shipping On Orders Over $250 Within The Contiguous
            U.S.
          </a>
        </div>
        <div className="border-b border-white/10 px-5 py-5">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={vipImages.logo}
                alt="The Wagyu Shop"
                width={220}
                height={64}
                className="h-14 w-auto sm:h-16"
                priority
              />
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">
                Concept Prototype
              </span>
            </div>
            <nav className="lp-nav flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/70">
              {lpNav.map((item) => {
                const isActive = item.key === activeNav;
                const className = isActive
                  ? "text-white underline"
                  : "hover:text-white";

                if (item.external) {
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link key={item.key} href={item.href} className={className}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 px-5 py-12 text-center text-xs text-white/45">
        <p className="lp-nav text-white/55">Concept Prototype</p>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed">
          Visual language matched to The Wagyu Shop storefront (Maestrooo /
          Shopify). Photography referenced from public CDN assets for private
          interview demo only. Shopify remains checkout. No live forms or cart.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-white hover:underline">
            Return to command center
          </Link>
        </p>
      </footer>
    </div>
  );
}
