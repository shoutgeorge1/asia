"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { giftBundles, visibleCategories } from "@/data/bundles";
import { giftingMoodboard } from "@/data/landing";
import { formatUsd } from "@/lib/format";

type BudgetFilter = "all" | "under250" | "250to400" | "over400";
type OccasionFilter = string;

export function BundleGallery() {
  const [occasion, setOccasion] = useState<OccasionFilter>("All");
  const [budget, setBudget] = useState<BudgetFilter>("all");

  const occasions = useMemo(() => {
    const set = new Set(giftBundles.map((b) => b.occasion));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return giftBundles.filter((bundle) => {
      if (!visibleCategories.includes(bundle.category)) return false;
      if (occasion !== "All" && bundle.occasion !== occasion) return false;
      if (budget === "under250" && bundle.priceFrom > 250) return false;
      if (budget === "250to400" && (bundle.priceFrom < 250 || bundle.priceFrom > 400))
        return false;
      if (budget === "over400" && bundle.priceFrom < 400) return false;
      return true;
    });
  }, [occasion, budget]);

  function handleShopClick() {
    alert(
      "Prototype only — production would open the Shopify bundle / Giftship flow."
    );
  }

  return (
    <div id="bundles">
      <p className="lp-nav text-white/50">Holiday + occasion layer</p>
      <h2 className="lp-display mt-2 text-3xl md:text-4xl">
        Filter by occasion and budget
      </h2>

      <div className="mt-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {occasions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setOccasion(opt)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${
                occasion === opt
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-white/70 hover:border-white/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", "Any budget"],
              ["under250", "Under $250"],
              ["250to400", "$250–$400"],
              ["over400", "$400+"],
            ] as const
          ).map(([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setBudget(val)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${
                budget === val
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-white/70 hover:border-white/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((bundle, i) => (
          <article key={bundle.id} className="lp-card overflow-hidden">
            <div className="relative aspect-[4/3] bg-white/5">
              <Image
                src={giftingMoodboard[i % giftingMoodboard.length]}
                alt={bundle.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-white/50">From {formatUsd(bundle.priceFrom)}</p>
              <h3 className="lp-display mt-1 text-xl">{bundle.name}</h3>
              <p className="mt-2 text-sm text-white/60">{bundle.forWhom}</p>
              <dl className="mt-4 space-y-1 text-xs text-white/50">
                <div className="flex justify-between">
                  <dt>Occasion</dt>
                  <dd className="text-white/70">{bundle.occasion}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Servings</dt>
                  <dd className="text-white/70">{bundle.servings}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Cooking</dt>
                  <dd className="text-white/70">{bundle.cooking}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Delivery</dt>
                  <dd className="text-white/70">{bundle.delivery}</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{bundle.value}</p>
              <button
                type="button"
                onClick={handleShopClick}
                className="lp-btn mt-4 w-full"
              >
                View on Shopify (simulated)
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-white/50">
          No bundles match the current filters.
        </p>
      )}
    </div>
  );
}
