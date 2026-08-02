"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { giftBundles, visibleCategories } from "@/data/bundles";
import { giftingMoodboard, occasionOptions, budgetOptions } from "@/data/landing";

type BudgetFilter = "all" | "under250" | "250to400" | "over400";

export function BundleGallery() {
  const [occasion, setOccasion] = useState("All");
  const [budget, setBudget] = useState<BudgetFilter>("all");

  const filtered = useMemo(() => {
    return giftBundles.filter((bundle) => {
      if (!visibleCategories.includes(bundle.category)) return false;
      if (occasion !== "All" && bundle.occasion !== occasion) return false;
      if (budget === "under250" && bundle.priceFrom > 250) return false;
      if (
        budget === "250to400" &&
        (bundle.priceFrom < 250 || bundle.priceFrom > 400)
      )
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
      <div className="lp-card flex flex-col gap-4 p-5 md:flex-row md:items-end md:justify-between">
        <div className="text-left">
          <p className="lp-nav text-white/45">Holiday + occasion layer</p>
          <h2 className="lp-display mt-2 text-2xl text-white sm:text-3xl">
            Filter by occasion and budget
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="border border-white/25 bg-black px-3 py-2 text-sm text-white"
          >
            {occasionOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value as BudgetFilter)}
            className="border border-white/25 bg-black px-3 py-2 text-sm text-white"
          >
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((bundle, i) => (
          <article key={bundle.id} className="lp-card overflow-hidden text-left">
            <Image
              src={giftingMoodboard[i % giftingMoodboard.length]}
              alt=""
              width={1000}
              height={352}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="lp-display text-xl text-white">{bundle.name}</h3>
                <p className="shrink-0 text-sm text-white/70">
                  from ${bundle.priceFrom}
                </p>
              </div>
              <dl className="mt-4 grid gap-3 text-sm text-white/65 sm:grid-cols-2">
                <div>
                  <dt className="lp-nav text-white/35">For</dt>
                  <dd className="mt-1">{bundle.forWhom}</dd>
                </div>
                <div>
                  <dt className="lp-nav text-white/35">Occasion</dt>
                  <dd className="mt-1">{bundle.occasion}</dd>
                </div>
                <div>
                  <dt className="lp-nav text-white/35">Servings</dt>
                  <dd className="mt-1">{bundle.servings}</dd>
                </div>
                <div>
                  <dt className="lp-nav text-white/35">Cooking</dt>
                  <dd className="mt-1">{bundle.cooking}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {bundle.value}
              </p>
              <button
                type="button"
                onClick={handleShopClick}
                className="lp-btn-outline lp-btn mt-5"
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
