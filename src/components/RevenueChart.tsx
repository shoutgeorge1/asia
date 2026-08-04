import { revenueTrendWeeks } from "@/data/dashboard";

export function RevenueChart() {
  const max = Math.max(...revenueTrendWeeks.map((w) => w.value));

  return (
    <div className="rounded-xl border border-line bg-panel p-6">
      <h3 className="font-display text-lg font-semibold text-ink">Revenue trend</h3>
      <p className="mt-1 text-sm text-muted">
        Illustrative weekly curve including a holiday-style lift in W4.
      </p>
      <div className="mt-6 flex items-end gap-3" style={{ height: 160 }}>
        {revenueTrendWeeks.map((week) => (
          <div key={week.week} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t bg-accent/80 transition-all"
              style={{ height: `${(week.value / max) * 120}px` }}
            />
            <span className="text-xs text-muted">{week.week}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
