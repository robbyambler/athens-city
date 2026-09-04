"use client";

import { useState } from "react";
import { fourFields, leadershipCenter, npl } from "@/lib/npl";

// The classic Four Fields drawing: one square, four quadrants, leadership in
// the centre. Quadrant order follows the sequence, clockwise from top-left.
const quadrants = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

export default function FourFields() {
  const [active, setActive] = useState(0);
  const [center, setCenter] = useState(false);
  const field = fourFields[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
      {/* Diagram */}
      <figure className="m-0">
        <div className="rounded-2xl border border-line bg-surface-1 p-5 sm:p-7">
          <svg viewBox="0 0 400 400" className="w-full h-auto" role="img"
            aria-label="The Four Fields of Kingdom Growth: Entry, Gospel, Discipleship and Church, with Leadership Development at the centre">
            {fourFields.map((f, i) => {
              const q = quadrants[i];
              const isOn = !center && i === active;
              return (
                <g key={f.short}>
                  <rect
                    x={q.x * 190 + 6}
                    y={q.y * 190 + 6}
                    width={188}
                    height={188}
                    rx={10}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isOn}
                    aria-label={f.name}
                    onClick={() => { setActive(i); setCenter(false); }}
                    onFocus={() => { setActive(i); setCenter(false); }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(i);
                        setCenter(false);
                      }
                    }}
                    className="cursor-pointer outline-none transition-colors duration-150"
                    style={{
                      fill: isOn ? `var(--field-${i})` : "var(--surface-2)",
                      stroke: isOn ? `var(--field-${i})` : "var(--line)",
                      strokeWidth: 2,
                    }}
                  />
                  <text
                    x={q.x * 190 + 100}
                    y={q.y * 190 + 78}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    style={{
                      fill: isOn ? `var(--field-${i}-ink)` : "var(--text-muted)",
                      fontSize: 15,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {i + 1}
                  </text>
                  <text
                    x={q.x * 190 + 100}
                    y={q.y * 190 + 108}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    style={{
                      fill: isOn ? `var(--field-${i}-ink)` : "var(--text-primary)",
                      fontSize: 24,
                      fontWeight: 600,
                    }}
                  >
                    {f.short}
                  </text>
                  <text
                    x={q.x * 190 + 100}
                    y={q.y * 190 + 134}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    style={{
                      fill: isOn ? `var(--field-${i}-ink)` : "var(--text-muted)",
                      fontSize: 15,
                    }}
                  >
                    {f.name.split("— ")[1]}
                  </text>
                </g>
              );
            })}

            {/* Leadership at the centre */}
            <circle
              cx={200}
              cy={200}
              r={62}
              tabIndex={0}
              role="button"
              aria-pressed={center}
              aria-label={leadershipCenter.name}
              onClick={() => setCenter(true)}
              onFocus={() => setCenter(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setCenter(true);
                }
              }}
              className="cursor-pointer outline-none transition-colors duration-150"
              style={{
                fill: center ? "var(--accent)" : "var(--surface-1)",
                stroke: center ? "var(--accent)" : "var(--line)",
                strokeWidth: 2,
              }}
            />
            <text
              x={200}
              y={195}
              textAnchor="middle"
              className="pointer-events-none select-none"
              style={{
                fill: center ? "#ffffff" : "var(--text-primary)",
                fontSize: 19,
                fontWeight: 600,
              }}
            >
              Leaders
            </text>
            <text
              x={200}
              y={218}
              textAnchor="middle"
              className="pointer-events-none select-none"
              style={{ fill: center ? "#ffffff" : "var(--text-muted)", fontSize: 15 }}
            >
              M · A · W · L
            </text>
          </svg>
        </div>
        <figcaption className="mt-3 text-xs text-ink-3">
          Four Fields of Kingdom Growth — {npl.scripture}. Select a field.
        </figcaption>
      </figure>

      {/* Detail */}
      <div className="rounded-2xl border border-line bg-surface-1 p-6 sm:p-8">
        {center ? (
          <>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">The centre</p>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl">{leadershipCenter.name}</h3>
            <p className="mt-1 text-sm text-ink-3">{leadershipCenter.frame}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-2">{leadershipCenter.focus}</p>
            <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {leadershipCenter.mawl.map((m, i) => (
                <li key={m} className="rounded-lg bg-surface-2 px-3 py-3">
                  <span className="block text-xs text-ink-3">{i + 1}</span>
                  <span className="text-sm font-medium">{m}</span>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              Field {active + 1} of 4
            </p>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl">{field.name}</h3>
            <p className="mt-3 font-display text-2xl text-accent-ink">{field.question}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{field.focus}</p>
            <p className="mt-7 text-xs uppercase tracking-wider text-ink-3">Tools</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {field.tools.map((t) => (
                <li key={t} className="rounded-md bg-surface-2 px-2.5 py-1.5 text-sm text-ink-2">
                  {t}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
