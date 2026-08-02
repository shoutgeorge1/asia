"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyBox({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle?: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older environments
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <section className="rounded-xl border border-line bg-panel p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-good" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy for web team
            </>
          )}
        </button>
      </div>
      <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-lg border border-line bg-paper p-4 text-xs leading-relaxed text-ink-soft">
        {text}
      </pre>
    </section>
  );
}
