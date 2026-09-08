"use client";

import { districts } from "@/lib/athens";
import { sevenPhases } from "@/lib/npl";

// The climb, at a glance. Seven steps rising left to right; a step is solid if
// a district is actually standing on it and dashed if nobody is. The wording of
// each phase lives in the accordion beside this — here it is only the shape of
// the distance.
const TOTAL = sevenPhases.length;

export default function PhaseLadder() {
  const occupancy = sevenPhases.map((p) => ({
    ...p,
    here: districts.filter((d) => d.phase === p.n),
  }));
  const furthest = Math.max(...districts.map((d) => d.phase));
  const onFirstTwo = districts.filter((d) => d.phase <= 2).length;
  // How many steps at the top of the ladder nobody is standing on.
  const emptyTail = TOTAL - furthest;

  return (
    <figure className="m-0 rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-display text-2xl">The climb</h3>
        <p className="text-sm text-ink-3">
          Furthest district: Phase {furthest} of {TOTAL}
        </p>
      </div>

      <div className="mt-7 flex h-56 items-stretch gap-1.5 sm:gap-2.5">
        {occupancy.map((p) => {
          const filled = p.here.length > 0;
          const isGoal = p.n === TOTAL;
          return (
            <div
              key={p.n}
              className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
              // The bar is decorative; the list underneath carries the same
              // numbers for anyone not reading the picture.
              aria-hidden
            >
              {filled && (
                <span className="flex flex-wrap justify-center gap-1">
                  {p.here.map((d) => (
                    <span
                      key={d.id}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[11px] font-medium text-surface-1"
                    >
                      {d.id}
                    </span>
                  ))}
                </span>
              )}
              <div
                className={`w-full shrink-0 rounded-t-md ${
                  filled
                    ? "bg-accent"
                    : isGoal
                      ? "border border-dashed border-accent-ink bg-accent-soft/40"
                      : "border border-dashed border-line bg-surface-2"
                }`}
                // Percentages resolve against the column's full height; the
                // cap leaves room for the district chips sitting above.
                style={{ height: `${22 + (p.n / TOTAL) * 54}%` }}
              />
            </div>
          );
        })}
      </div>

      {/* The same seven steps as text — the accessible reading of the bars */}
      <ol className="mt-3 flex gap-1.5 sm:gap-2.5">
        {occupancy.map((p) => (
          <li key={p.n} className="min-w-0 flex-1 text-center">
            <span
              className={`block text-sm tabular-nums ${
                p.here.length ? "font-medium text-ink" : "text-ink-3"
              }`}
            >
              {p.n}
            </span>
            <span className="mt-1 hidden truncate text-[11px] leading-tight text-ink-3 lg:block">
              {p.label}
            </span>
            <span className="sr-only">
              {p.label} —{" "}
              {p.here.length
                ? `district${p.here.length > 1 ? "s" : ""} ${p.here.map((d) => d.id).join(", ")}`
                : "no districts"}
            </span>
          </li>
        ))}
      </ol>

      <figcaption className="mt-6 border-t border-line-soft pt-5 text-sm leading-relaxed text-ink-3">
        {onFirstTwo} of the {districts.length} districts are still on the first two steps, and the
        top {emptyTail} steps are empty — no district in Athens has churches reproducing, let alone
        multiplying to a fourth generation. Dashed steps are the ones nobody is standing on yet.
      </figcaption>
    </figure>
  );
}
