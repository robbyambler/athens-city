"use client";

import { useState } from "react";
import { districts } from "@/lib/athens";
import { sevenPhases } from "@/lib/npl";

export default function PhaseScale() {
  const [open, setOpen] = useState<number | null>(2);

  return (
    <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
      <ol className="flex flex-col">
        {sevenPhases.map((p) => {
          const here = districts.filter((d) => d.phase === p.n);
          const isOpen = open === p.n;
          return (
            <li key={p.n} className="border-b border-line-soft last:border-0">
              <button
                onClick={() => setOpen(isOpen ? null : p.n)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 py-4 text-left"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                    here.length
                      ? "bg-accent text-white"
                      : "bg-surface-2 text-ink-3"
                  }`}
                >
                  {p.n}
                </span>
                <span className="flex-1">
                  <span className="font-display text-xl">{p.label}</span>
                  {here.length > 0 && (
                    <span className="ml-3 text-sm text-ink-3">
                      {here.length} district{here.length > 1 ? "s" : ""} here —{" "}
                      {here.map((d) => d.id).join(", ")}
                    </span>
                  )}
                </span>
                <span className="text-ink-3">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <p className="pb-5 pl-12 pr-2 text-[15px] leading-relaxed text-ink-2">
                  &ldquo;{p.text}&rdquo;
                </p>
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-xs text-ink-3">
        The 7 Phases as published by the NoPlaceLeft International Coalition. District placement is
        a planning placeholder.
      </p>
    </div>
  );
}
