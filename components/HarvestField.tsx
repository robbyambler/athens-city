"use client";

import { useState } from "react";
import {
  ageStructure,
  geography,
  growthMath,
  metroStats,
  needStats,
  peoples,
  saturation,
  settlement,
} from "@/lib/athens";

const fmt = new Intl.NumberFormat("en-US");
const total = settlement.reduce((s, r) => s + r.value, 0);

function Bars({
  rows,
  max,
  format,
  secondary,
}: {
  rows: { label: string; value: number }[];
  max: number;
  format: (v: number) => string;
  secondary: (v: number) => string;
}) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <ul className="flex flex-col gap-5">
      {rows.map((r) => {
        const isHover = hover === r.label;
        return (
          <li
            key={r.label}
            onMouseEnter={() => setHover(r.label)}
            onMouseLeave={() => setHover(null)}
            className="cursor-default"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm text-ink-2">{r.label}</span>
              <span className="font-display text-lg tabular-nums text-ink">
                {isHover ? secondary(r.value) : format(r.value)}
              </span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-sm bg-surface-2">
              <div
                className="h-full rounded-r-[4px] transition-[width,background-color] duration-300"
                style={{
                  width: `${(r.value / max) * 100}%`,
                  background: isHover ? "var(--accent-ink)" : "var(--accent)",
                }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function HarvestField() {
  return (
    <div className="flex flex-col gap-12">
      {/* Metro headline */}
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {metroStats.map((h) => (
          <div key={h.label} className="bg-surface-1 p-6">
            <p className="font-display text-4xl leading-none">{h.value}</p>
            <p className="mt-3 text-sm font-medium text-ink">{h.label}</p>
            <p className="mt-1 text-xs text-ink-3">{h.note}</p>
          </div>
        ))}
      </div>

      {/* The need, in four sourced numbers */}
      <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
        <h3 className="font-display text-2xl">The need, in four numbers</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-3">
          Not the size of the city — the size of the gap inside it.
        </p>
        <dl className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {needStats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl leading-none">{s.value}</dd>
              <dt className="mt-3 text-sm font-medium text-ink">{s.label}</dt>
              <dd className="mt-1 text-xs text-ink-3">{s.note}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* The gap to Phase 7 */}
      <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
        <h3 className="font-display text-2xl">The distance to Phase 7</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-3">
          NPL calls a people group finished at Phase 7 — roughly 10% following Christ and gathered
          in local churches. Applied to Attica, that is the arithmetic below. Nothing here is a
          forecast; it is division.
        </p>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-display text-4xl leading-none">
              {fmt.format(saturation.todayEstimate)}
            </p>
            <p className="mt-3 text-sm font-medium">Followers of Christ today, estimated</p>
            <p className="mt-1 text-xs text-ink-3">
              Greece&rsquo;s 0.5% evangelical rate applied to Attica&rsquo;s 3.81M
            </p>
          </div>
          <div>
            <p className="font-display text-4xl leading-none text-accent-ink">
              {fmt.format(saturation.phase7Target)}
            </p>
            <p className="mt-3 text-sm font-medium">Needed for a sustained gospel presence</p>
            <p className="mt-1 text-xs text-ink-3">10% of the Attica population</p>
          </div>
          <div>
            <p className="font-display text-4xl leading-none text-accent-ink">
              {saturation.multiple}×
            </p>
            <p className="mt-3 text-sm font-medium">The multiple we are asking for</p>
            <p className="mt-1 text-xs text-ink-3">
              No amount of addition closes a gap this size in a generation
            </p>
          </div>
        </div>
      </div>

      {/* Addition vs multiplication — a table, because the numbers are the point.
          `min-w-0` keeps the wide table inside its own scroller instead of
          stretching this flex item and scrolling the whole page. */}
      <div className="min-w-0 rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
        <h3 className="font-display text-2xl">Addition will not get there</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-3">
          Ten groups. On the left, ten more added every year. On the right, each group reproducing
          once a year. Same starting point, same decade.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wider text-ink-3">
                <th className="py-3 pr-4 font-normal">Year</th>
                <th className="py-3 pr-4 font-normal">Adding 10 a year</th>
                <th className="py-3 font-normal">Each group reproducing</th>
              </tr>
            </thead>
            <tbody>
              {growthMath.map((r) => (
                <tr key={r.year} className="border-b border-line-soft last:border-0">
                  <td className="py-3 pr-4 text-ink-3">{r.year}</td>
                  <td className="py-3 pr-4 font-display text-lg tabular-nums">
                    {fmt.format(r.addition)}
                  </td>
                  <td className="py-3 font-display text-lg tabular-nums text-accent-ink">
                    {fmt.format(r.multiplication)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Two charts */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
          <h3 className="font-display text-2xl">Where the 3.81 million live</h3>
          <p className="mt-1 mb-6 text-sm text-ink-3">
            Attica residents by ring. Hover a bar for its share.
          </p>
          <Bars
            rows={settlement}
            max={total}
            format={(v) => fmt.format(v)}
            secondary={(v) => `${((v / total) * 100).toFixed(1)}%`}
          />
          <p className="mt-6 text-xs text-ink-3">
            Only one in six people in Attica lives inside the seven districts. A strategy that stops
            at the municipal boundary reaches a sixth of the harvest.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
          <h3 className="font-display text-2xl">Age structure of Attica</h3>
          <p className="mt-1 mb-6 text-sm text-ink-3">
            Share of population, 2021. Hover a bar for the head count.
          </p>
          <Bars
            rows={ageStructure}
            max={100}
            format={(v) => `${v}%`}
            secondary={(v) => `~${fmt.format(Math.round((v / 100) * saturation.population))}`}
          />
          <p className="mt-6 text-xs text-ink-3">
            Two thirds of the region is working age — the people most likely to have an oikos wide
            enough to carry a gospel to a fourth generation.
          </p>
        </div>
      </div>

      {/* Peoples table */}
      <div className="min-w-0 rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
        <h3 className="font-display text-2xl">The peoples of Athens</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-3">
          Athens is one of the few cities in Europe where a dozen unreached peoples live within four
          metro stops of each other. Rows marked <span className="text-ink-2">est.</span> are not
          sourced figures — count them yourself before you plan around them.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wider text-ink-3">
                <th className="py-3 pr-4 font-normal">People</th>
                <th className="py-3 pr-4 font-normal">Population</th>
                <th className="py-3 pr-4 font-normal">Primary religion</th>
                <th className="py-3 pr-4 font-normal">Progress</th>
                <th className="py-3 font-normal">Where in the city</th>
              </tr>
            </thead>
            <tbody>
              {peoples.map((p) => (
                <tr key={p.name} className="border-b border-line-soft last:border-0 align-top">
                  <td className="py-3 pr-4 font-medium">{p.name}</td>
                  <td className={`py-3 pr-4 tabular-nums ${p.sourced ? "text-ink" : "text-ink-3"}`}>
                    {p.population}
                  </td>
                  <td className="py-3 pr-4 text-ink-2">{p.religion}</td>
                  <td className="py-3 pr-4 text-ink-2">{p.scale}</td>
                  <td className="py-3 text-ink-3">{p.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Geography */}
      <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
        <h3 className="font-display text-2xl">The shape of the ground</h3>
        <dl className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {geography.map((g) => (
            <div
              key={g.label}
              className="flex items-baseline justify-between gap-4 border-b border-line-soft pb-3"
            >
              <dt className="text-sm text-ink-2">{g.label}</dt>
              <dd className="font-display text-lg tabular-nums">{g.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
