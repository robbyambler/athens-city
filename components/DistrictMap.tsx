"use client";

import { useState } from "react";
import { districts } from "@/lib/athens";
import { fourFields, sevenPhases } from "@/lib/npl";

const fmt = new Intl.NumberFormat("en-US");

export default function DistrictMap() {
  const [activeId, setActiveId] = useState(5);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const active = districts.find((d) => d.id === activeId)!;
  const activeField = fourFields[active.field];
  const activePhase = sevenPhases[active.phase - 1];

  return (
    <div className="flex flex-col gap-8">
      {/* Legend — doubles as the map key */}
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {fourFields.map((f, i) => (
          <li key={f.short} className="flex items-center gap-2 text-sm text-ink-2">
            <span
              className="h-3.5 w-3.5 shrink-0 rounded-sm border border-line"
              style={{ background: `var(--field-${i})` }}
            />
            {f.name}
          </li>
        ))}
      </ul>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        {/* Map */}
        <figure className="m-0">
          <div className="rounded-2xl border border-line bg-surface-1 p-4 sm:p-6">
            <svg
              viewBox="56 50 562 496"
              role="img"
              aria-label="Schematic map of the seven municipal districts of Athens, shaded by which of the Four Fields each district is currently in"
              className="w-full h-auto"
            >
              {districts.map((d) => {
                const isActive = d.id === activeId;
                const isHover = d.id === hoverId;
                return (
                  <g key={d.id}>
                    <polygon
                      points={d.points}
                      tabIndex={0}
                      role="button"
                      aria-pressed={isActive}
                      aria-label={`${d.id} — ${d.name}, ${fourFields[d.field].name}`}
                      onMouseEnter={() => setHoverId(d.id)}
                      onMouseLeave={() => setHoverId(null)}
                      onFocus={() => setHoverId(d.id)}
                      onBlur={() => setHoverId(null)}
                      onClick={() => setActiveId(d.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveId(d.id);
                        }
                      }}
                      className="cursor-pointer outline-none transition-opacity duration-150"
                      style={{
                        fill: `var(--field-${d.field})`,
                        opacity: isHover && !isActive ? 0.75 : 1,
                        // 2px surface ring separates adjacent marks; the active
                        // district gets a heavier ink ring instead of a hue change.
                        stroke: isActive ? "var(--text-primary)" : "var(--surface-1)",
                        strokeWidth: isActive ? 4 : 3,
                      }}
                    />
                    <text
                      x={d.labelX}
                      y={d.labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="pointer-events-none select-none"
                      style={{
                        fill: `var(--field-${d.field}-ink)`,
                        fontSize: 30,
                        fontWeight: 600,
                      }}
                    >
                      {d.id}
                    </text>
                  </g>
                );
              })}

              {/* Ancient Agora — where Paul reasoned daily, Acts 17:17 */}
              <g className="pointer-events-none">
                <circle cx={288} cy={326} r={5} style={{ fill: "var(--field-1-ink)" }} />
                <text
                  x={288}
                  y={348}
                  textAnchor="middle"
                  style={{ fill: "var(--field-1-ink)", fontSize: 14, letterSpacing: "0.06em" }}
                >
                  AGORA
                </text>
              </g>

              <g className="pointer-events-none" style={{ fill: "var(--text-muted)" }}>
                <path d="M596,66 L604,90 L596,84 L588,90 Z" />
                <text x={596} y={110} textAnchor="middle" style={{ fontSize: 15 }}>N</text>
              </g>
            </svg>
          </div>
          <figcaption className="mt-3 text-xs text-ink-3">
            Schematic, not to scale. Field status is a{" "}
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

            <div className="mt-6 grid gap-4 border-y border-line-soft py-5 sm:grid-cols-3">
              <div>
                <p className="font-display text-2xl">{fmt.format(active.approxPopulation)}</p>
                <p className="text-xs uppercase tracking-wider text-ink-3">Residents (approx.)</p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-display text-2xl">
                  <span
                    className="h-3 w-3 rounded-sm"
                    style={{ background: `var(--field-${active.field})` }}
                  />
                  {activeField.short}
                </p>
                <p className="text-xs uppercase tracking-wider text-ink-3">Current field</p>
              </div>
              <div>
                <p className="font-display text-2xl">
                  Phase {activePhase.n}
                </p>
                <p className="text-xs uppercase tracking-wider text-ink-3">{activePhase.label}</p>
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
