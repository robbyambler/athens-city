// The No Place Left framework content.
//
// TWO KINDS OF CONTENT LIVE IN THIS FILE:
//
//  (A) NPL-SOURCED. The 7 Phases of Progress, the MAWL pattern, the Mark 4
//      framework language and every tool name below are published by the
//      NoPlaceLeft International Coalition (noplaceleft.net). Wording follows
//      their own naming.
//
//  (B) THIS SITE'S PRESENTATION. The five-stage "CMT" line — Evangelism,
//      Discipleship, Church Planting, Leader Development, Multiply — is how
//      this strategy chooses to sequence and label that material. It is not an
//      NPL-branded diagram; the tools inside it are.

export const npl = {
  vision:
    "#noplaceleft means a sustained and multiplying gospel presence in every people and place.",
  mission:
    "Multiplying disciples, churches and leaders until there is #noplaceleft.",
  globalUnreached: "3.42 billion",
  scripture: "Mark 4:1–20, 26–29",
};

// (A) The 7 Phases of Progress — noplaceleft.net/7-phases
export const sevenPhases = [
  {
    n: 1,
    label: "Adoption",
    text: "Identification of a team willing to take ownership in implementing a church planting strategy among this people group.",
  },
  {
    n: 2,
    label: "Gospel",
    text: "Reports of workers sharing the Gospel with this people group with the intention of planting churches.",
  },
  {
    n: 3,
    label: "Believers",
    text: "Reports of multiple people responding to the Gospel with repentance and faith.",
  },
  {
    n: 4,
    label: "Local Church",
    text: "Indigenous churches meeting together regularly for worship and teaching God's word.",
  },
  {
    n: 5,
    label: "Churches Reproducing",
    text: "Indigenous churches sending indigenous church planters out to plant churches among this people group.",
  },
  {
    n: 6,
    label: "Churches Multiplying",
    text: "Indigenous churches and leaders multiplying to the 4th generation.",
  },
  {
    n: 7,
    label: "Sustained Gospel Presence",
    text: "10% of the people group population following Christ and worshipping in local churches, or the emergence of multiplying church planting networks.",
  },
];

export type Stage = {
  index: 0 | 1 | 2 | 3 | 4;
  short: string;
  name: string;
  question: string;
  focus: string;
  tools: string[];
};

// (A) The MAWL pattern, carried inside Leader Development.
export const mawl = ["Model", "Assist", "Watch", "Leave"];

// (B) The CMT — five stages in a straight line. Multiply is the capstone the
// other four exist to reach, not a fifth peer.
export const cmt: Stage[] = [
  {
    index: 0,
    short: "Evangelism",
    name: "Evangelism",
    question: "Who is God already preparing?",
    focus:
      "Getting in, and then sowing broadly. Survey the ground, pray it, and look for the household that opens — then tell the story in the language of the street, with tools an ordinary believer can use the same day they learn them.",
    tools: [
      "Oikos Map",
      "Luke 10 — House of Peace Search",
      "Prayer walking",
      "Community survey",
      "Your Story — 15 Second Testimony",
      "God's Story — 3 Circles",
      "411 Gospel Conversation",
      "Discovery Bible Study — 7 Stories of Hope",
    ],
  },
  {
    index: 1,
    short: "Discipleship",
    name: "Discipleship",
    question: "How do we grow?",
    focus:
      "Obedience-based discipleship from day one. Every new believer is trained as a trainer, not parked as an attender.",
    tools: [
      "3/3rds Pattern of Discipleship",
      "411 Training for Green Lights and Existing Believers",
      "Baptism without delay",
      "Generational mapping",
    ],
  },
  {
    index: 2,
    short: "Church Planting",
    name: "Church Planting",
    question: "How do we gather?",
    focus:
      "Groups become churches. Simple, reproducible, indigenous — able to do everything Acts 2 describes without waiting for outside permission or money.",
    tools: [
      "Church Circle — Acts 2:36–47",
      "Elders raised locally",
      "Lord's Supper & baptism",
      "Sending",
    ],
  },
  {
    index: 3,
    short: "Leader Development",
    name: "Leader Development",
    question: "Who carries this after us?",
    focus:
      "Leaders are grown inside the work, not in a classroom beside it — modelled to, then assisted, then watched, then left. Leaving is the test. If you cannot leave, it has not multiplied yet.",
    tools: [
      "MAWL — Model, Assist, Watch, Leave",
      "5 Levels of Leadership Development",
      "Coaching the leaders already here",
      "Handing over sooner than is comfortable",
    ],
  },
  {
    index: 4,
    short: "Multiply",
    name: "Multiply",
    question: "Has it reached the fourth generation?",
    focus:
      "The other four stages exist for this one. A church that grows is addition. A church whose great-grandchildren plant churches without the founder in the room is multiplication — and only the second one finishes a city. The bar is the fourth generation, in every district, with nobody from outside in the room.",
    tools: [
      "4th-generation tracking",
      "Sending to the next district",
      `Phase ${sevenPhases[5].n} — ${sevenPhases[5].label}`,
      "Generational mapping, checked quarterly",
    ],
  },
];
