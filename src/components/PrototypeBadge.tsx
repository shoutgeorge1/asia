export function PrototypeBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
        dark
          ? "border border-white/20 text-white/70"
          : "border border-line bg-accent-soft text-accent"
      }`}
    >
      Concept Prototype
    </span>
  );
}
