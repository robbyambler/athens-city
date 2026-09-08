"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { districts } from "@/lib/athens";
import { cmt, sevenPhases } from "@/lib/npl";

// Leaflet reaches for `window` as soon as it loads, so the map canvas is
// client-only. Everything around it — legend, picker, detail panel — renders
// normally and stays readable if the map never paints.
const DistrictMapCanvas = dynamic(() => import("./DistrictMapCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[440px] w-full items-center justify-center rounded-xl bg-surface-2 text-sm text-ink-3 sm:h-[560px]">
      Loading the map…
    </div>
  ),
});

const fmt = new Intl.NumberFormat("en-US");

export default function DistrictMap() {
  const [activeId, setActiveId] = useState(6);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const active = districts.find((d) => d.id === activeId)!;
  const activeStage = cmt[active.stage];
  const activePhase = sevenPhases[active.phase - 1];

  return (
    <div className="flex flex-col gap-8">
      {/* Legend — doubles as the map key */}
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {cmt.map((s, i) => {
          const count = districts.filter((d) => d.stage === i).length;
          return (
            <li key={s.short} className="flex items-center gap-2 text-sm text-ink-2">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-sm border border-line"
                style={{ background: `var(--field-${i})` }}
              />
              {s.name}
              <span className="text-ink-3">{count}</span>
            </li>
          );
        })}
      </ul>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        {/* Map */}
        <figure className="m-0">
          <div className="rounded-2xl border border-line bg-surface-1 p-4 sm:p-6">
            <DistrictMapCanvas
              activeId={activeId}
              hoverId={hoverId}
              onSelect={setActiveId}
              onHover={setHoverId}
            />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-ink-3">
            District boundaries are the real administrative boundaries of the seven dimotikes
            koinotites, from{" "}
            <a
              className="underline decoration-line underline-offset-2 hover:text-ink-2"
              href="https://www.openstreetmap.org/copyright"
            >
              OpenStreetMap
            </a>{" "}
            (© OpenStreetMap contributors, ODbL), simplified for file size. The stage shading on
            top of them is a{" "}
            <strong className="font-medium text-ink-2">planning placeholder</strong> — replace it
            with your team&rsquo;s own survey.
          </figcaption>
        </figure>

        {/* Detail */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {districts.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                onMouseEnter={() => setHoverId(d.id)}
                onMouseLeave={() => setHoverId(null)}
                aria-pressed={d.id === activeId}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  d.id === activeId
                    ? "border-ink bg-ink text-surface-1"
                    : "border-line bg-surface-1 text-ink-2 hover:border-ink-3"
                }`}
              >
                {d.id}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
            <p className="text-sm text-ink-3">{active.greek}</p>
            <h3 className="mt-1 font-display text-3xl leading-tight sm:text-4xl">
              {active.id}. {active.name}
            </h3>

            {/* Cells stretch to the row height and their labels are pushed to
                the bottom, so a stage name that wraps does not knock the three
                captions out of line. */}
            <div className="mt-6 grid items-stretch gap-4 border-y border-line-soft py-5 sm:grid-cols-3">
              <div className="flex flex-col">
                <p className="font-display text-2xl leading-tight">
                  {fmt.format(active.approxPopulation)}
                </p>
                <p className="mt-auto pt-2 text-xs uppercase tracking-wider text-ink-3">
                  Residents (approx.)
                </p>
              </div>
              <div className="flex flex-col">
                <p className="flex items-start gap-2 font-display text-2xl leading-tight">
                  <span
                    className="mt-2 h-3 w-3 shrink-0 rounded-sm"
                    style={{ background: `var(--field-${active.stage})` }}
                  />
                  {activeStage.short}
                </p>
                <p className="mt-auto pt-2 text-xs uppercase tracking-wider text-ink-3">
                  Current CMT stage
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-display text-2xl leading-tight">Phase {activePhase.n}</p>
                <p className="mt-auto pt-2 text-xs uppercase tracking-wider text-ink-3">
                  {activePhase.label}
                </p>
              </div>
            </div>

            <dl className="mt-6 flex flex-col gap-5 text-[15px] leading-relaxed">
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-3">Gateway</dt>
                <dd className="mt-1 text-ink-2">{active.gateway}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-3">Way in</dt>
                <dd className="mt-1 text-ink-2">{active.entry}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-3">Pray</dt>
                <dd className="mt-1 text-ink-2">{active.prayer}</dd>
              </div>
            </dl>

            <p className="mt-6 text-xs uppercase tracking-wider text-ink-3">Peoples present</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {active.peoples.map((p) => (
                <li key={p} className="rounded-md bg-surface-2 px-2.5 py-1 text-sm text-ink-2">
                  {p}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs uppercase tracking-wider text-ink-3">Neighbourhoods</p>
            <p className="mt-1.5 text-sm text-ink-2">{active.neighborhoods.join(" · ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
