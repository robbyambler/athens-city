// Athens data for the #NoPlaceLeft strategy site.
//
// TWO KINDS OF DATA LIVE IN THIS FILE — keep them straight:
//
//  (A) SOURCED FACTS. Population, religion and people-group figures.
//      Sources: ELSTAT 2021 Census of Population & Housing; Joshua Project
//      country profile for Greece (joshuaproject.net/countries/GR);
//      Athens Social Atlas for neighbourhood composition.
//
//  (B) PLANNING TEMPLATE. Every `field`, `phase`, `entry` and `prayer` value
//      below is a PLACEHOLDER for a real team's field survey. It is a starting
//      shape, not a report. Replace it with what your team actually observes.

export type District = {
  id: number;
  name: string;
  greek: string;
  approxPopulation: number;
  neighborhoods: string[];
  // (B) planning template
  field: 0 | 1 | 2 | 3; // index into fourFields
  phase: number; // 1-7, see sevenPhases
  peoples: string[];
  gateway: string;
  entry: string;
  prayer: string;
  // map geometry
  points: string;
  labelX: number;
  labelY: number;
};

export const districts: District[] = [
  {
    id: 1,
    name: "Historic Centre",
    greek: "1η Δημοτική Κοινότητα",
    approxPopulation: 75800,
    neighborhoods: ["Omonia", "Gerani", "Psyri", "Monastiraki", "Plaka", "Exarcheia", "Syntagma", "Koukaki"],
    field: 1,
    phase: 2,
    peoples: ["Greek", "Pakistani", "Bangladeshi", "Chinese", "Syrian & Egyptian Arab", "Kurdish"],
    gateway: "Omonia & Gerani — ethnic commerce block by block; Monastiraki and the Ancient Agora.",
    entry:
      "Paul reasoned in this marketplace day by day (Acts 17:17). Daily gospel conversations in the agora, plus student and traveller networks around Syntagma and Exarcheia.",
    prayer:
      "For bold, ordinary conversations in the busiest square in Greece — and for the first Pakistani and Bangladeshi households to open.",
    points: "256,222 372,232 386,318 330,368 258,352 240,282",
    labelX: 306,
    labelY: 292,
  },
  {
    id: 2,
    name: "South-East",
    greek: "2η Δημοτική Κοινότητα",
    approxPopulation: 92500,
    neighborhoods: ["Pangrati", "Mets", "Neos Kosmos", "Ilisia", "Dourgouti"],
    field: 0,
    phase: 1,
    peoples: ["Greek", "Filipino", "Georgian", "Albanian"],
    gateway: "Neos Kosmos accommodation sites; Panteion and university housing in Ilisia.",
    entry:
      "Students and young professionals. Filipino and Georgian domestic workers gather on Sundays — an existing believing community that could be trained as trainers.",
    prayer:
      "For a team to adopt this district. Nobody has taken ownership of it yet.",
    points: "252,384 388,378 408,462 348,534 254,528 224,452",
    labelX: 314,
    labelY: 454,
  },
  {
    id: 3,
    name: "West",
    greek: "3η Δημοτική Κοινότητα",
    approxPopulation: 65200,
    neighborhoods: ["Petralona", "Votanikos", "Gazi", "Kerameikos", "Rouf"],
    field: 0,
    phase: 1,
    peoples: ["Albanian", "Bangladeshi", "Roma", "Pakistani"],
    gateway: "Votanikos markets and day-labour corners; the Gazi nightlife strip after dark.",
    entry:
      "Work sites and markets before dawn. Roma settlements on the western edge are among the least-engaged communities in the city.",
    prayer:
      "For labourers who leave before sunrise and return after dark to hear something worth staying awake for.",
    points: "78,232 214,224 236,300 214,382 118,390 68,318",
    labelX: 150,
    labelY: 306,
  },
  {
    id: 4,
    name: "North-West",
    greek: "4η Δημοτική Κοινότητα",
    approxPopulation: 85400,
    neighborhoods: ["Kolonos", "Sepolia", "Akadimia Platonos", "Kato Patisia"],
    field: 1,
    phase: 2,
    peoples: ["Albanian", "Roma", "Pakistani", "Afghan"],
    gateway: "Sepolia metro and street markets; the Plato's Academy park.",
    entry:
      "Sowing broadly at the metro interchange and the weekly laiki. Albanian believers already in the city are the natural first trainers here.",
    prayer:
      "That the olive grove where Plato taught becomes a place where the risen Christ is discussed instead.",
    points: "104,96 236,68 296,120 288,192 210,214 122,186",
    labelX: 196,
    labelY: 140,
  },
  {
    id: 5,
    name: "North",
    greek: "5η Δημοτική Κοινότητα",
    approxPopulation: 98300,
    neighborhoods: ["Patisia", "Agios Panteleimonas", "Rizoupoli", "Ano Patisia"],
    field: 1,
    phase: 2,
    peoples: ["Afghan (Dari, Hazara, Pashtun)", "Pakistani", "Bangladeshi", "Syrian"],
    gateway: "Agios Panteleimonas square, the Patision axis, Acharnon Street.",
    entry:
      "The most frontier ground in the city. Afghans in Greece are rated Progress Scale 0 — unreached and frontier. Dari-speaking believers and Persian-language media are the open door.",
    prayer:
      "For Afghan households in this district — a people with almost no church anywhere — and for workers willing to learn Dari.",
    points: "318,62 452,74 470,150 400,192 330,166",
    labelX: 392,
    labelY: 124,
  },
  {
    id: 6,
    name: "North-East",
    greek: "6η Δημοτική Κοινότητα",
    approxPopulation: 129600,
    neighborhoods: ["Kypseli", "Amerikis Square", "Fokionos Negri", "Gyzi", "Neapoli"],
    field: 3,
    phase: 4,
    peoples: ["Nigerian", "Ghanaian", "Congolese", "Somali", "Ethiopian & Eritrean", "Syrian", "Greek"],
    gateway: "Amerikis Square and Fokionos Negri — the centre of African Athens.",
    entry:
      "The furthest-along district, because the church is already here. African-led congregations meet across Kypseli. The work is not planting from scratch; it is helping existing churches multiply to a fourth generation.",
    prayer:
      "That the African church in Athens sees itself as a sending church — to Greeks, to Somalis, and back home.",
    points: "418,208 552,222 566,314 470,340 400,296 396,232",
    labelX: 482,
    labelY: 274,
  },
  {
    id: 7,
    name: "East",
    greek: "7η Δημοτική Κοινότητα",
    approxPopulation: 117200,
    neighborhoods: ["Ampelokipoi", "Panormou", "Goudi", "Ellinorosson"],
    field: 0,
    phase: 1,
    peoples: ["Greek", "Filipino", "Georgian", "Ukrainian"],
    gateway: "The Goudi hospital complex, office corridors along Kifisias, the university campus.",
    entry:
      "Professional Greek Athens — the hardest ground in the city precisely because it looks the most reached. Workplace oikos mapping rather than street work.",
    prayer:
      "For Greeks who have Christ's name and not his life, in the district least likely to think it needs anything.",
    points: "470,356 578,346 596,438 552,504 452,494 414,414",
    labelX: 502,
    labelY: 424,
  },
];

// (A) Sourced — the need, in numbers
export const needStats = [
  { value: "0.5%", label: "Evangelical, nationally", note: "Joshua Project, Greece profile" },
  { value: "14 of 46", label: "People groups unreached", note: "30.4% of groups in Greece" },
  { value: "8.0M", label: "Greeks, superficially reached", note: "Progress Scale 3 — Christ known in name" },
  { value: "3.81M", label: "People in Attica", note: "ELSTAT 2021 census" },
];

export const metroStats = [
  { value: "643,452", label: "City of Athens", note: "Municipality, 2021 census" },
  { value: "3.04M", label: "Athens urban area", note: "Contiguous built-up area" },
  { value: "3.81M", label: "Attica region", note: "39% of all of Greece" },
  { value: "16,500", label: "People per km²", note: "Municipality density" },
];

export const geography = [
  { label: "Municipality area", value: "39 km²" },
  { label: "Urban area", value: "412 km²" },
  { label: "Metropolitan area", value: "2,929 km²" },
  { label: "Municipalities in Attica", value: "66" },
  { label: "Municipal districts", value: "7" },
  { label: "Port", value: "Piraeus, 8 km SW" },
];

// Where the metro area's people live. Shares of the ~3.81M Attica total.
export const settlement = [
  { label: "City of Athens municipality", value: 643_452 },
  { label: "Rest of the urban area", value: 2_396_548 },
  { label: "Outer metro & rest of Attica", value: 774_064 },
];

// Attica age structure, approximate shares, 2021.
export const ageStructure = [
  { label: "0–14 years", value: 13.9 },
  { label: "15–64 years", value: 65.5 },
  { label: "65+ years", value: 20.6 },
];

// (A) Peoples present in Athens. `population` is Greece-wide where sourced.
export type People = {
  name: string;
  population: string;
  sourced: boolean;
  religion: string;
  scale: string;
  where: string;
};

export const peoples: People[] = [
  {
    name: "Greek",
    population: "8,003,000",
    sourced: true,
    religion: "Orthodox Christianity",
    scale: "Scale 3 — Superficially reached",
    where: "Everywhere; most concentrated in the 7th and 2nd",
  },
  {
    name: "Albanian",
    population: "140,146 in Attica",
    sourced: true,
    religion: "Muslim & Orthodox",
    scale: "Scale 3",
    where: "3rd, 4th — construction and service work",
  },
  {
    name: "Afghan (Dari, Pashto)",
    population: "45,000",
    sourced: true,
    religion: "Islam",
    scale: "Scale 0 — Unreached / Frontier",
    where: "5th — Agios Panteleimonas, Patision",
  },
  {
    name: "Turkish",
    population: "—",
    sourced: false,
    religion: "Islam",
    scale: "Scale 1 — Unreached",
    where: "Scattered; Thrace nationally",
  },
  {
    name: "Pakistani (Punjabi, Urdu)",
    population: "est. tens of thousands",
    sourced: false,
    religion: "Islam",
    scale: "Unreached",
    where: "1st, 4th, 5th — Omonia to Acharnon",
  },
  {
    name: "Bangladeshi (Bengali)",
    population: "est. tens of thousands",
    sourced: false,
    religion: "Islam",
    scale: "Unreached",
    where: "1st, 3rd, 5th — Gerani, Votanikos",
  },
  {
    name: "Syrian & Iraqi Arab",
    population: "est. tens of thousands",
    sourced: false,
    religion: "Islam",
    scale: "Unreached",
    where: "1st, 5th, 6th — Victoria, Kypseli",
  },
  {
    name: "Somali, Ethiopian, Eritrean",
    population: "est. thousands",
    sourced: false,
    religion: "Islam & Orthodox",
    scale: "Mixed",
    where: "6th — Kypseli, Amerikis Square",
  },
  {
    name: "West African (Nigerian, Ghanaian)",
    population: "est. tens of thousands",
    sourced: false,
    religion: "Christianity",
    scale: "Reached — a sending force",
    where: "6th — Kypseli",
  },
  {
    name: "Chinese",
    population: "est. thousands",
    sourced: false,
    religion: "Non-religious & folk religion",
    scale: "Unreached",
    where: "1st — Omonia, Gerani wholesale trade",
  },
];

// (A) Arithmetic only — the gap between today and NPL Phase 7 for Attica.
export const saturation = {
  population: 3_814_064,
  phase7Share: 0.1,
  get phase7Target() {
    return Math.round(this.population * this.phase7Share);
  },
  evangelicalRate: 0.005,
  get todayEstimate() {
    return Math.round(this.population * this.evangelicalRate);
  },
  get multiple() {
    return Math.round(this.phase7Target / this.todayEstimate);
  },
};

// (A) Arithmetic only — addition vs multiplication, starting from 10 groups.
export const growthMath = [1, 2, 3, 5, 7, 10].map((year) => ({
  year,
  addition: 10 + 10 * year,
  multiplication: 10 * Math.pow(2, year),
}));
