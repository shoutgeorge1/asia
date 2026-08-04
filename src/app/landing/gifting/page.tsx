import Image from "next/image";
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
    <LandingChrome activeNav="gifting">
      <section className="px-5 pb-10 pt-12 text-center">
        <p className="lp-nav text-white/55">
          Matched to live Corporate Gifting + seasonal packaging concept
        </p>
        <h1 className="lp-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl">
          Corporate Gifting
        </h1>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-white/90 sm:text-3xl">
          Elevate Your Business Relationships with Wagyu
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
          Make a lasting impression with luxury Wagyu gift selections for
          clients, employees, and special occasions — then extend the same
          packaging system into holiday bundles.
        </p>

        <Image
          src={vipImages.hero}
          alt=""
          width={1200}
          height={800}
          className="mx-auto mt-10 max-h-[420px] w-full max-w-5xl object-cover"
          priority
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#bundles" className="lp-btn">
            Shop curated boxes
          </a>
          <a
            href="https://wagyushop.com/pages/corporate-gifts"
            target="_blank"
            rel="noreferrer"
            className="lp-btn-outline lp-btn"
          >
            Live corporate page
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-5 py-10 md:grid-cols-2">
        {giftingPaths.map((path) => (
          <div key={path.title} className="lp-card p-6 text-left">
            <h3 className="lp-display text-xl text-white">{path.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              {path.body}
            </p>
          </div>
        ))}
      </section>

      <section className="border-y border-white/10 px-5 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
          {giftingMoodboard.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={1000}
              height={1000}
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-white/40">
          Public product/lifestyle assets from the live Shopify CDN — used here
          only to match brand photography for the interview prototype.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <BundleGallery />
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-10 lg:grid-cols-2">
        <div className="lp-card p-6 text-left">
          <h3 className="lp-display text-2xl text-white">
            Shipping cutoff calendar
          </h3>
          <div className="mt-5 space-y-3">
            {shippingCutoffs.map((row) => (
              <div
                key={row.market}
                className="flex items-start justify-between gap-4 border-t border-white/10 pt-3"
              >
                <div>
                  <p className="text-sm text-white">{row.market}</p>
                  <p className="text-xs text-white/45">{row.note}</p>
                </div>
                <p className="text-sm text-white/75">{row.cutoff}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lp-card p-6 text-left">
          <h3 className="lp-display text-2xl text-white">Live-site notes</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>
              • Corporate Gifts page currently shows a Liquid error for{" "}
              <code className="text-white/85">giftship.liquid</code>
            </li>
            {liveSiteNotes.slice(1).map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14">
        <EmailCapture
          dark
          title="Get holiday / corporate early access"
          buttonLabel="Notify Me"
        />
      </section>
    </LandingChrome>
  );
}
