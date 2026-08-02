"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartLine,
  LayoutDashboard,
  Menu,
  Network,
  Route,
  ShieldAlert,
  Waypoints,
  X,
  Layers,
} from "lucide-react";
import { useState } from "react";
import { disclaimer } from "@/data/overview";

const nav = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard", label: "Executive Dashboard", icon: ChartLine },
  { href: "/tech-audit", label: "Tech Audit", icon: ShieldAlert },
  { href: "/bypass", label: "Bypass Strategy", icon: Waypoints },
  { href: "/system-map", label: "System Map", icon: Network },
  { href: "/lifecycle", label: "Lifecycle", icon: Route },
  { href: "/landing", label: "Landing Pages", icon: Layers },
];

export function AppShell({
  children,
  title,
  subtitle,
  eyebrow,
  badge,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  badge?: string;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg lg:flex">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-line bg-panel lg:flex">
        <div className="border-b border-line p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Concept Prototype
          </p>
          <h2 className="font-display mt-2 text-xl font-semibold text-ink">
            Asia Growth Vision
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            The Wagyu Shop — luxury commerce command center
          </p>
        </div>
        <nav className="flex-1 space-y-0.5 p-4">
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                  active
                    ? "bg-accent-soft font-medium text-ink"
                    : "text-muted hover:bg-bg hover:text-ink"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-line p-4">
          <p className="text-[11px] leading-relaxed text-muted">
            Shopify remains the commerce engine.
          </p>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="sticky top-0 z-40 border-b border-line bg-panel lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Concept Prototype
            </p>
            <p className="font-display text-sm font-semibold text-ink">
              Asia Growth Vision
            </p>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-ink hover:bg-bg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-line bg-panel px-2 py-2">
            {nav.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                    active
                      ? "bg-accent-soft font-medium text-ink"
                      : "text-muted hover:bg-bg"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* Main content */}
      <div className="min-w-0 flex-1">
        <header className="border-b border-line bg-panel/60 px-5 py-8 md:px-10">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {title}
            </h1>
            {badge && (
              <span className="rounded-full border border-line bg-accent-soft px-3 py-0.5 text-xs font-medium text-accent">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
        </header>

        <main className="px-5 py-8 md:px-10 md:py-10">{children}</main>

        <footer className="border-t border-line px-5 py-6 md:px-10">
          <p className="text-xs leading-relaxed text-muted">{disclaimer}</p>
        </footer>
      </div>
    </div>
  );
}
