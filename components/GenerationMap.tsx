// Why the 4th generation is the bar: Phase 6 is not "more churches," it is
// churches whose grandchildren are planting churches without you.
const gens = [
  { g: "G1", label: "You", count: 1, note: "The outside worker, or the first believer" },
  { g: "G2", label: "Their disciples", count: 3, note: "Trained as trainers from week one" },
  { g: "G3", label: "Grandchildren", count: 9, note: "You have never met most of them" },
  { g: "G4", label: "Great-grandchildren", count: 27, note: "Phase 6 begins here — a movement, not a plant" },
];

export default function GenerationMap() {
  return (
    <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
      <h3 className="font-display text-2xl">Why the fourth generation is the bar</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-3">
        A church that grows is addition. A church whose great-grandchildren plant churches without
        the founder in the room is multiplication. Only the second one finishes a city.
      </p>
      <ol className="mt-7 flex flex-col gap-px overflow-hidden rounded-xl border border-line bg-line">
        {gens.map((g, i) => (
          <li key={g.g} className="flex items-center gap-4 bg-surface-1 px-4 py-4">
            <span className="w-9 shrink-0 font-display text-xl text-ink-3">{g.g}</span>
            <span className="flex shrink-0 gap-1" aria-hidden>
              {Array.from({ length: Math.min(g.count, 9) }).map((_, n) => (
                <span
                  key={n}
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: `var(--field-${Math.min(i, 3)})` }}
                />
              ))}
              {g.count > 9 && (
                <span className="ml-1 text-xs text-ink-3">+{g.count - 9}</span>
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium">{g.label}</span>
              <span className="block text-sm text-ink-3">{g.note}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
