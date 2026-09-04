import DistrictMap from "@/components/DistrictMap";
import FourFields from "@/components/FourFields";
import GenerationMap from "@/components/GenerationMap";
import HarvestField from "@/components/HarvestField";
import PhaseScale from "@/components/PhaseScale";
import Vision from "@/components/Vision";
import { needStats } from "@/lib/athens";
import { npl } from "@/lib/npl";

function SectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="text-xs uppercase tracking-[0.18em] text-ink-3">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      {lede && <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{lede}</p>}
    </header>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <nav className="sticky top-0 z-10 border-b border-line bg-surface-0/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-baseline gap-2">
            <span className="font-display text-xl">#NoPlaceLeft</span>
            <span className="text-sm text-ink-3">Athens · Αθήνα</span>
          </span>
          <ul className="hidden gap-6 text-sm text-ink-2 sm:flex">
            <li><a className="hover:text-ink" href="#framework">Framework</a></li>
            <li><a className="hover:text-ink" href="#districts">Districts</a></li>
            <li><a className="hover:text-ink" href="#progress">Progress</a></li>
            <li><a className="hover:text-ink" href="#harvest">Harvest</a></li>
            <li><a className="hover:text-ink" href="#vision">Vision</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-3">
          A church planting strategy · Attica, Greece
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.95] sm:text-8xl">
          No place left in Athens.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
          {npl.mission} This is the city we are starting with: seven districts, 3.8 million people,
          and a dozen unreached peoples living four metro stops from each other.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {needStats.map((s) => (
            <div key={s.label} className="bg-surface-1 p-6">
              <p className="font-display text-4xl leading-none">{s.value}</p>
              <p className="mt-3 text-sm font-medium text-ink">{s.label}</p>
              <p className="mt-1 text-xs text-ink-3">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="border-t border-line bg-surface-0 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="01 — The framework"
            title="Four Fields"
            lede="Everything below runs on one diagram. Mark 4 gives four fields and a centre: get in, sow, grow, gather — and raise leaders in the middle of all of it. It is drawable on a napkin, which is the point."
          />
          <FourFields />
        </div>
      </section>

      {/* Districts */}
      <section id="districts" className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="02 — The ground"
            title="Seven districts, surveyed"
            lede="The municipality of Athens divides into seven dimotikes koinotites. Each is shaded by the field it is currently in. Select one for who lives there, where the way in is, and what to pray."
          />
          <DistrictMap />
        </div>
      </section>

      {/* Progress */}
      <section id="progress" className="border-t border-line bg-surface-0 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="03 — The scoreboard"
            title="Seven phases of progress"
            lede="NPL measures a people or place on a seven-phase scale. It is a scoreboard, not a mood — you either have fourth-generation churches or you do not."
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <PhaseScale />
            <GenerationMap />
          </div>
        </div>
      </section>

      {/* Harvest */}
      <section id="harvest" className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="04 — The harvest field"
            title="Athens by the numbers"
            lede="Who actually lives in this basin, and how far it is from here to a sustained gospel presence. Census figures where they exist; honest gaps where they do not."
          />
          <HarvestField />
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="border-t border-line bg-surface-0 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-xs uppercase tracking-[0.18em] text-ink-3">05 — The vision</p>
          <Vision />
        </div>
      </section>

      <footer className="border-t border-line py-12">
        <div className="mx-auto max-w-6xl px-6 text-sm text-ink-3">
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="leading-relaxed">
              <strong className="font-medium text-ink-2">Framework.</strong> Four Fields of Kingdom
              Growth, the 7 Phases of Progress, and the tool names used here follow the NoPlaceLeft
              International Coalition (noplaceleft.net). Scripture anchor: {npl.scripture}.
            </p>
            <p className="leading-relaxed">
              <strong className="font-medium text-ink-2">Data.</strong> Population, age and
              household figures: ELSTAT, 2021 Census of Population and Housing. People group,
              evangelical and progress-scale figures: Joshua Project, Greece profile. Neighbourhood
              composition: Athens Social Atlas.
            </p>
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed">
            <strong className="font-medium text-ink-2">What is a placeholder.</strong> Every field
            status, phase, gateway and prayer point on the district map is a planning template, not
            a field report. Replace it with your own survey before anyone makes a decision on it.
            District populations are approximations from the 2011 census breakdown. The map is
            schematic and not to scale.
          </p>
        </div>
      </footer>
    </main>
  );
}
