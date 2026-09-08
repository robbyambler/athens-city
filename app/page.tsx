import CMT from "@/components/CMT";
import DistrictMap from "@/components/DistrictMap";
import GenerationMap from "@/components/GenerationMap";
import HarvestField from "@/components/HarvestField";
import PhaseLadder from "@/components/PhaseLadder";
import PhaseScale from "@/components/PhaseScale";
import Vision from "@/components/Vision";
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
            <li><a className="hover:text-ink" href="#vision">Vision</a></li>
            <li><a className="hover:text-ink" href="#framework">The CMT</a></li>
            <li><a className="hover:text-ink" href="#districts">Districts</a></li>
            <li><a className="hover:text-ink" href="#progress">Progress</a></li>
            <li><a className="hover:text-ink" href="#harvest">Harvest</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pb-24 sm:pt-28">
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
      </section>

      {/* Vision */}
      <section id="vision" className="border-t border-line bg-surface-0 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-xs uppercase tracking-[0.18em] text-ink-3">01 — The vision</p>
          <Vision />
        </div>
      </section>

      {/* Framework — the CMT */}
      <section id="framework" className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="02 — The framework"
            title="The CMT"
            lede="Everything below runs on one line. Evangelism, then discipleship, then church planting, then leader development — and then multiplication, which is not a fifth item on a list but the reason the other four exist. Every stage carries tools an ordinary believer can learn on Tuesday and use on Wednesday. It is drawable on a napkin, which is the point."
          />
          <CMT />
        </div>
      </section>

      {/* Districts */}
      <section id="districts" className="border-t border-line bg-surface-0 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="03 — The ground"
            title="Seven districts, surveyed"
            lede="The municipality of Athens divides into seven dimotikes koinotites. Each real boundary is shaded by the CMT stage the work is currently in. Select one for who lives there, where the way in is, and what to pray."
          />
          <DistrictMap />
        </div>
      </section>

      {/* Progress */}
      <section id="progress" className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="04 — The scoreboard"
            title="Seven phases of progress"
            lede="NPL measures a people or place on a seven-phase scale. It is a scoreboard, not a mood — you either have fourth-generation churches or you do not."
          />
          <PhaseLadder />
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <PhaseScale />
            <GenerationMap />
          </div>
        </div>
      </section>

      {/* Harvest */}
      <section id="harvest" className="border-t border-line bg-surface-0 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="05 — The harvest field"
            title="Athens by the numbers"
            lede="Who actually lives in this basin, and how far it is from here to a sustained gospel presence. Census figures where they exist; honest gaps where they do not."
          />
          <HarvestField />
        </div>
      </section>

      <footer className="border-t border-line py-12">
        <div className="mx-auto max-w-6xl px-6 text-sm text-ink-3">
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="leading-relaxed">
              <strong className="font-medium text-ink-2">Framework.</strong> The tool names used
              here, the MAWL pattern, the Mark 4 field language and the 7 Phases of Progress all
              come from the NoPlaceLeft International Coalition (noplaceleft.net). Arranging them
              as a five-stage CMT line is this site&rsquo;s own way of presenting them, not an
              NPL-branded diagram. Scripture anchor: {npl.scripture}.
            </p>
            <p className="leading-relaxed">
              <strong className="font-medium text-ink-2">Data.</strong> Population, age and
              household figures: ELSTAT, 2021 Census of Population and Housing. People group,
              evangelical and progress-scale figures: Joshua Project, Greece profile. Neighbourhood
              composition: Athens Social Atlas. District boundaries and base map:{" "}
              <a
                className="underline decoration-line underline-offset-2 hover:text-ink-2"
                href="https://www.openstreetmap.org/copyright"
              >
                OpenStreetMap
              </a>{" "}
              contributors, ODbL.
            </p>
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed">
            <strong className="font-medium text-ink-2">What is a placeholder.</strong> Every stage,
            phase, gateway and prayer point on the district map is a planning template, not a field
            report. Replace it with your own survey before anyone makes a decision on it. District
            populations are approximations from the 2011 census breakdown. The boundaries
            themselves are real — OpenStreetMap administrative geometry, simplified for file size —
            but nothing painted on top of them is.
          </p>
        </div>
      </footer>
    </main>
  );
}
