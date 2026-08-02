import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { landingGallery } from "@/data/landing";

export default function LandingGalleryPage() {
  return (
    <AppShell
      title="Landing page concepts"
      subtitle="VIP and gifting comps redirect to the polished asia-wagyu-growth.vercel.app pages — those are the reference builds until we rebuild them here."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {landingGallery.map((card) => (
          <div
            key={card.href}
            className="rounded-xl border border-line bg-panel p-6"
          >
            <p className="text-xs text-muted">Matched to {card.matchedTo}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-ink">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
            {card.external ? (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
              >
                Open polished page →
              </a>
            ) : (
              <Link
                href={card.href}
                className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
              >
                View page →
              </Link>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
