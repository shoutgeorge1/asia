import Image from "next/image";
import Link from "next/link";
import { LandingChrome } from "@/components/LandingChrome";
import { EmailCapture } from "@/components/EmailCapture";
import { vipFeatures, vipImages } from "@/data/landing";

export default function VipLandingPage() {
  return (
    <LandingChrome>
      <section className="relative">
        <div className="relative aspect-[16/9] max-h-[70vh] w-full">
          <Image
            src={vipImages.hero}
            alt="The Wagyu Shop lifestyle"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 py-12 text-center md:px-10 md:py-16">
          <p className="lp-nav text-white/50">Matched to live /pages/the-reserve</p>
          <h1 className="lp-display mt-3 text-4xl md:text-5xl">TWS Reserve</h1>
          <p className="lp-nav mt-2 text-white/50">Reserve</p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Welcome to The Wagyu Shop Reserve: your ticket to subscriber-only
            inventory and exclusive packages designed to impress your inner
            circle and satiate your appetite. With rotating exclusive items and
            a number of our best sellers, you aren&apos;t going to want to miss
            this.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <EmailCapture dark />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {vipFeatures.map((feature) => (
            <div key={feature.title} className="lp-card p-6">
              <h3 className="lp-display text-xl">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative aspect-square">
          <Image
            src={vipImages.steak}
            alt="A5 steaks with bok choy"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src={vipImages.secondary}
            alt="Wagyu preparation"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>

      <section id="concept-note" className="mx-auto max-w-3xl px-5 py-16 text-center md:px-10">
        <h3 className="lp-display text-2xl">Why Next.js still helps</h3>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Their current Reserve page is already a clean email-capture concept on
          Shopify. A Next.js layer on discover.wagyushop.com is still useful
          for SEO-stable campaign URLs, faster iteration on seasonal creative,
          and A/B packaging without theme Liquid risk — while checkout stays on
          Shopify.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wagyushop.com/pages/the-reserve"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-btn"
          >
            View live Reserve page
          </a>
          <Link href="/" className="lp-btn lp-btn-outline">
            Return to command center
          </Link>
        </div>
      </section>
    </LandingChrome>
  );
}
