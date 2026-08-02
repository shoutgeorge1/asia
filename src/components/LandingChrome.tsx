import Link from "next/link";
import Image from "next/image";
import { PrototypeBadge } from "./PrototypeBadge";
import { vipImages } from "@/data/landing";

const lpNav = [
  { href: "/", label: "Overview" },
  {
    href: "https://asia-wagyu-growth.vercel.app/landing/vip",
    label: "TWS Reserve",
    external: true,
  },
  {
    href: "https://asia-wagyu-growth.vercel.app/landing/gifting",
    label: "Gifting",
    external: true,
  },
  { href: "https://wagyushop.com/", label: "Live Shopify", external: true },
];

export function LandingChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="lp-root">
      <a
        href="https://wagyushop.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
      >
        Complimentary Shipping On Orders Over $250 Within The Contiguous U.S.
      </a>

      <header className="border-b border-white/10 px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
          <PrototypeBadge dark />
          <Link href="/">
            <Image
              src={vipImages.logo}
              alt="The Wagyu Shop"
              width={180}
              height={40}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {lpNav.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lp-nav text-white/70 transition hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="lp-nav text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 px-5 py-10 text-center md:px-10">
        <p className="mx-auto max-w-2xl text-xs leading-relaxed text-white/50">
          Visual language matched to The Wagyu Shop storefront (Maestrooo /
          Shopify). Photography referenced from public CDN assets for private
          interview demo only. Shopify remains checkout. No live forms or cart.
        </p>
        <Link
          href="/"
          className="lp-nav mt-6 inline-block text-white/60 transition hover:text-white"
        >
          Return to command center
        </Link>
      </footer>
    </div>
  );
}
