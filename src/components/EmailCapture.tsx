"use client";

import { useState } from "react";

export function EmailCapture({
  title = "Enter your email & receive priority access:",
  buttonLabel = "Get Access",
  dark = false,
}: {
  title?: string;
  buttonLabel?: string;
  dark?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className={`text-sm leading-relaxed ${
          dark ? "text-white/80" : "text-muted"
        }`}
      >
        Prototype only — live Reserve capture would enroll via Klaviyo / Shopify
        customer tags.
      </p>
    );
  }

  if (dark) {
    return (
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl text-center">
        <p className="text-sm text-white/70">{title}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Email"
            required
            className="lp-input flex-1"
          />
          <button type="submit" className="lp-btn shrink-0">
            {buttonLabel}
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-sm text-muted">{title}</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="Email"
          required
          className="flex-1 rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
