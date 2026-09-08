const commitments = [
  {
    n: "01",
    title: "Every district adopted",
    body:
      "Seven districts. Right now three of them — the 2nd, the 3rd and the 7th — have nobody who has taken responsibility for them by name. Phase 1 is not a strategy — it is somebody saying out loud, this one is mine. We want all seven claimed before we talk about anything else.",
  },
  {
    n: "02",
    title: "Simple tools in ordinary hands",
    body:
      "No stage, no building, no budget, no seminary. A fifteen-second testimony, three circles drawn on a napkin, a 411 conversation, seven stories of hope. If a believer cannot learn it on Tuesday and use it on Wednesday, it does not go in the kit.",
  },
  {
    n: "03",
    title: "Grandchildren we will never meet",
    body:
      "Athens already has churches, and we thank God for every one of them. What we are asking for is something that keeps going long after we are gone — believers whose great-grandchildren in the faith are planting in districts we never set foot in. So we model, we assist, we watch, and then we leave. Leaving is not abandonment. It is the highest thing you can say to someone: I trust what God has put in you.",
  },
  {
    n: "04",
    title: "The nations here, then the nations sent",
    body:
      "God moved Kabul, Lahore, Dhaka, Damascus and Lagos into a two-kilometre stretch of Patision Avenue. Athens is not only a field. It is a staging ground for homelands no visa will get us into.",
  },
];

export default function Vision() {
  return (
    <div className="flex flex-col gap-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-6xl">
            Paul came to Athens. He did not stay.
          </h2>

          <div className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-ink-2">
            <p>
              Acts 17. He is waiting on his friends, walking a city stuffed with idols, and Luke
              says he was provoked — the Greek is the root of our word paroxysm. So he argued in
              the synagogue. Then he argued in the marketplace, every day, with whoever happened to
              be there. Some sneered. Some believed. Dionysius. Damaris. &ldquo;And others with
              them.&rdquo;
            </p>
            <p>
              And then he left. That is the whole Athens story. A few days, a handful of names, no
              letter to the Athenians, no recorded return.
            </p>
            <p>
              Which makes what he writes a few years later almost impossible to read straight:{" "}
              <em>there is no place left for me to work in these regions</em> (Romans 15:23). No
              place left. Same corner of the world. Same man who walked away from this city.
            </p>
            <p>
              So which is it, friends — a city he passed through, or a region he finished?
            </p>
            <p>
              Here is the uncomfortable answer. Athens is not finished. Half a percent of this
              country is evangelical. Eight million Greeks carry the name of Christ and have never
              been introduced to him. There are Afghan families in Patisia who have no church in
              any language they speak, in any district of this city, on any day of the week. Paul
              left Athens unfinished, and three thousand years of history has not closed the gap.
            </p>
            <p>
              But he told the Areopagus something before he went. He said God determined the times
              and the boundaries of their dwelling place — so that they would seek him and perhaps
              reach out and find him. Though he is not far from any one of us.
            </p>
            <p>
              He said that <strong className="font-medium text-ink">here</strong>. About{" "}
              <strong className="font-medium text-ink">these</strong> streets. And the boundaries
              have moved since. God has since drawn Kabul and Lahore and Damascus and Lagos into
              this basin, 3.8 million people in one bowl of mountains, and the stated reason is
              that they might reach out and find him.
            </p>
            <p>
              Not far. From any one of them.
            </p>
            <p className="font-display text-3xl leading-snug text-ink">
              Paul left Athens unfinished. We do not have to.
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start lg:pt-4">
          <div className="rounded-2xl border border-line bg-surface-1 p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">The vision</p>
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
              A sustained and multiplying gospel presence in every people and place — until there
              is no place left in Athens.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-3">
              Seven districts. Sixty-six municipalities. A dozen unreached peoples living four
              metro stops apart. Multiplying disciples, churches and leaders until every person in
              Attica has a follower of Jesus within reach of their own kitchen table.
            </p>
            <p className="mt-6 border-t border-line-soft pt-6 text-sm text-ink-2">
              &ldquo;But now, since I no longer have any room for work in these regions&hellip;&rdquo;
              <span className="mt-1 block text-ink-3">Romans 15:23</span>
            </p>
          </div>
        </div>
      </div>

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {commitments.map((c) => (
          <li key={c.n} className="bg-surface-1 p-6 sm:p-8">
            <p className="font-display text-lg text-ink-3">{c.n}</p>
            <h3 className="mt-2 font-display text-2xl leading-tight">{c.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
