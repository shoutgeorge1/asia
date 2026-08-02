import Image from "next/image";
import Link from "next/link";
import { LandingChrome } from "@/components/LandingChrome";
import { EmailCapture } from "@/components/EmailCapture";
import { BundleGallery } from "@/components/BundleGallery";
import {
  giftingMoodboard,
  giftingPaths,
  liveSiteNotes,
  shippingCutoffs,
  vipImages,
} from "@/data/landing";

export default function GiftingLandingPage() {
  return (
    <LandingChrome>
      <section className="relative">
        <div className="relative aspect-[16/9] max-h-[60vh] w-full">
          <Image
            src={vipImages.hero}
            alt="Wagyu lifestyle"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 py-12 text-center md:px-10 md:py-16">
          <p className="lp-nav text-white/50">
            Matched to live Corporate Gifting + seasonal packaging concept
          </p>
          <h1 className="lp-display mt-3 text-4xl md:text-5xl">
            Corporate Gifting
          </h1>
          <h2 className="lp-display mt-4 text-2xl text-white/90">
            Elevate Your Business Relationships with Wagyu
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Make a lasting impression with luxury Wagyu gift selections for
            clients, employees, and special occasions — then extend the same
            packaging system into holiday bundles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#bundles" className="lp-btn">
              Shop curated boxes
            </a>
            <a
              href="https://wagyushop.com/pages/corporate-gifts"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn lp-btn-outline"
            >
              Live corporate page
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {giftingPaths.map((path) => (
            <div key={path.title} className="lp-card p-6">
              <h3 className="lp-display text-xl">{path.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {path.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 py-8">
        <p className="px-5 text-center text-xs text-white/50 md:px-10">
          Public product/lifestyle assets from the live Shopify CDN — used only
          to match brand photography for the interview prototype.
        </p>
        <div className="mt-6 flex gap-4 overflow-x-auto px-5 pb-2 md:px-10">
          {giftingMoodboard.map((src) => (
            <div
              key={src}
              className="relative h-32 w-48 shrink-0 overflow-hidden rounded"
            >
              <Image
                src={src}
                alt="Wagyu product"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
        <BundleGallery />
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-10">
        <h3 className="lp-display text-2xl">Shipping cutoff calendar</h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/50">
                <th className="pb-3 pr-4">Market</th>
                <th className="pb-3 pr-4">Note</th>
                <th className="pb-3">Cutoff</th>
              </tr>
            </thead>
            <tbody>
              {shippingCutoffs.map((row) => (
                <tr key={row.market} className="border-b border-white/10">
                  <td className="py-3 pr-4 text-white/90">{row.market}</td>
                  <td className="py-3 pr-4 text-white/60">{row.note}</td>
                  <td className="py-3 text-white/90">{row.cutoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-8 md:px-10">
        <h3 className="lp-display text-2xl">Live-site notes</h3>
        <ul className="mt-4 space-y-2">
          {liveSiteNotes.map((note) => (
            <li key={note} className="flex gap-2 text-sm text-white/70">
              <span className="text-white/40">·</span>
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-md px-5 py-16 text-center md:px-10">
        <EmailCapture
          dark
          title="Get holiday / corporate early access"
          buttonLabel="Notify Me"
        />
        <Link
          href="/"
          className="lp-nav mt-8 inline-block text-white/60 transition hover:text-white"
        >
          Return to command center
        </Link>
      </section>
    </LandingChrome>
  );
}
