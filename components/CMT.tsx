"use client";

import { useState } from "react";
import { cmt, mawl, npl } from "@/lib/npl";

// The CMT drawn the way it is meant to be drawn: a straight line, left to
// right, five stages, each one feeding the next. Multiply is the capstone the
// other four exist to reach, so it is wider, darker and labelled as the goal
// rather than treated as a fifth peer.
const LAST = cmt.length - 1;

export default function CMT() {
  const [active, setActive] = useState(0);
  const stage = cmt[active];
  const isCapstone = active === LAST;

  return (
    <div className="flex flex-col gap-8">
      {/* The line */}
      <figure className="m-0">
        <ol className="flex flex-col items-stretch gap-0 lg:flex-row">
          {cmt.map((s, i) => {
            const isOn = i === active;
            const isGoal = i === LAST;
            return (
              <li
                key={s.short}
                className={`flex flex-col items-stretch lg:min-w-0 lg:flex-row ${
                  isGoal ? "lg:flex-[1.4]" : "lg:flex-1"
                }`}
              >
                {/* Connector into this node — above it when stacked, beside it on the line */}
                {i > 0 && (
                  <span
                    aria-hidden
                    className="flex shrink-0 items-center justify-center py-1.5 lg:self-center lg:px-1.5 lg:py-0"
                  >
                    <span className="hidden h-px w-3 bg-line lg:block" />
                    <span className="block h-4 w-px bg-line lg:hidden" />
                    <svg
                      viewBox="0 0 8 10"
                      className="h-2.5 w-2 rotate-90 text-ink-3 lg:rotate-0"
                      fill="currentColor"
                    >
                      <path d="M0 0 L8 5 L0 10 Z" />
                    </svg>
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={isOn}
                  className={`group flex min-w-0 flex-1 cursor-pointer flex-col justify-between gap-3 rounded-xl border px-4 py-4 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isOn
                      ? "border-transparent"
                      : "border-line bg-surface-1 hover:border-ink-3"
                  } ${isGoal && !isOn ? "border-ink-3 bg-surface-2" : ""}`}
                  style={
                    isOn
                      ? {
                          background: `var(--field-${i})`,
                          color: `var(--field-${i}-ink)`,
                        }
                      : undefined
                  }
                >
                  <span className="flex items-center justify-between gap-2">
                    <span
                      className="text-xs tabular-nums tracking-[0.14em]"
                      style={{ color: isOn ? `var(--field-${i}-ink)` : "var(--text-muted)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {isGoal && (
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.14em]"
                        style={{
                          background: isOn
                            ? "color-mix(in srgb, currentColor 18%, transparent)"
                            : "var(--field-4)",
                          color: isOn ? `var(--field-${i}-ink)` : "var(--field-4-ink)",
                        }}
                      >
                        The goal
                      </span>
                    )}
                  </span>

                  <span
                    className={`block font-display leading-tight ${
                      isGoal ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                    }`}
                  >
                    {s.short}
                  </span>

                  <span
                    className="block text-xs leading-snug"
                    style={{
                      color: isOn ? `var(--field-${i}-ink)` : "var(--text-muted)",
                      opacity: isOn ? 0.85 : 1,
                    }}
                  >
                    {s.question}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        <figcaption className="mt-3 text-xs text-ink-3">
          Five stages, one direction. The tools inside them, the MAWL pattern and the Mark 4
          framework language ({npl.scripture}) are NoPlaceLeft&rsquo;s; the line is how this
          strategy sequences them. Select a stage.
        </figcaption>
      </figure>

      {/* Detail */}
      <div
        className={`rounded-2xl border bg-surface-1 p-6 sm:p-8 ${
          isCapstone ? "border-ink-3" : "border-line"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="h-3.5 w-3.5 shrink-0 rounded-sm"
            style={{ background: `var(--field-${active})` }}
          />
          <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
            Stage {active + 1} of {cmt.length}
            {isCapstone && " — the capstone"}
          </p>
        </div>

        <h3 className={`mt-2 font-display leading-tight ${isCapstone ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
          {stage.name}
        </h3>
        <p className="mt-3 font-display text-2xl text-accent-ink">{stage.question}</p>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-ink-2">{stage.focus}</p>

        {/* MAWL lives inside Leader Development now, not in the middle of a diagram */}
        {stage.short === "Leader Development" && (
          <ol className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {mawl.map((m, i) => (
              <li key={m} className="rounded-lg bg-surface-2 px-3 py-3">
                <span className="block text-xs text-ink-3">{i + 1}</span>
                <span className="text-sm font-medium">{m}</span>
              </li>
            ))}
          </ol>
        )}

        <p className="mt-7 text-xs uppercase tracking-wider text-ink-3">Tools</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stage.tools.map((t) => (
            <li key={t} className="rounded-md bg-surface-2 px-2.5 py-1.5 text-sm text-ink-2">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
