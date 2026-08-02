import Image from "next/image";
import Link from "next/link";
import { LandingChrome } from "@/components/LandingChrome";
import { EmailCapture } from "@/components/EmailCapture";
import { vipFeatures, vipImages } from "@/data/landing";

const heroImages = [vipImages.hero, vipImages.steak, vipImages.secondary];

export default function VipLandingPage() {
  return (
    <LandingChrome activeNav="vip">
      <section className="px-5 pb-16 pt-14 text-center">
        <p className="lp-nav text-white/55">Matched to live /pages/the-reserve</p>
        <h1 className="lp-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl">
          TWS Reserve
        </h1>

        <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-3">
          {heroImages.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={1200}
              height={1200}
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Welcome to The Wagyu Shop Reserve: your ticket to subscriber-only
          inventory and exclusive packages designed to impress your inner circle
          and satiate your appetite. With rotating exclusive items and a number
          of our best sellers, you aren&apos;t going to want to miss this.
        </p>

        <div className="mx-auto mt-10 max-w-md">
          <Image
            src={vipImages.logo}
            alt="The Wagyu Shop"
            width={220}
            height={64}
            className="mx-auto h-16 w-auto opacity-90"
          />
          <p className="mt-2 font-[family-name:var(--font-display)] text-3xl italic text-white">
            Reserve
          </p>
        </div>

        <div className="mt-8">
          <EmailCapture dark />
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {vipFeatures.map((feature) => (
            <div key={feature.title} className="lp-card p-5 text-left">
              <h3 className="lp-display text-lg text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://wagyushop.com/pages/the-reserve"
            target="_blank"
            rel="noreferrer"
            className="lp-btn-outline lp-btn"
          >
            View live Reserve page
          </a>
          <Link href="#concept-note" className="lp-btn">
            Why Next.js still helps
          </Link>
        </div>
      </section>

      <section
        id="concept-note"
        className="mx-auto max-w-3xl px-5 pb-16 text-center text-sm leading-relaxed text-white/60"
      >
        <p>
          Their current Reserve page is already a clean email-capture concept on
          Shopify. A Next.js layer is still useful for SEO-stable campaign URLs,
          faster iteration on seasonal creative, and A/B packaging without theme
          Liquid risk — while checkout stays on Shopify.
        </p>
      </section>
    </LandingChrome>
  );
}
