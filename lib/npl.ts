// The No Place Left framework, as published by the NoPlaceLeft International
// Coalition (noplaceleft.net). Wording follows their own naming.

export const npl = {
  vision:
    "#noplaceleft means a sustained and multiplying gospel presence in every people and place.",
  mission:
    "Multiplying disciples, churches, leaders, and movements until there is #noplaceleft.",
  globalUnreached: "3.42 billion",
  scripture: "Mark 4:1–20, 26–29",
};

export type Field = {
  index: 0 | 1 | 2 | 3;
  short: string;
  name: string;
  question: string;
  focus: string;
  tools: string[];
};

// Four Fields of Kingdom Growth — Mark 4:1-20, 26-29
export const fourFields: Field[] = [
  {
    index: 0,
    short: "Entry",
    name: "Entry — Empty Field",
    question: "Where are we going?",
    focus:
      "Getting in and finding the people God has already prepared. Survey the ground, pray it, and look for the household that opens.",
    tools: ["Oikos Map", "Luke 10 — House of Peace Search", "Prayer walking", "Community survey"],
  },
  {
    index: 1,
    short: "Gospel",
    name: "Gospel — Seeded Field",
    question: "How do we share?",
    focus:
      "Sowing broadly and abundantly, in the language of the street, with tools an ordinary believer can use the same day they learn them.",
    tools: [
      "Your Story — 15 Second Testimony",
      "God's Story — 3 Circles",
      "411 Gospel Conversation",
      "Discovery Bible Study — 7 Stories of Hope",
    ],
  },
  {
    index: 2,
    short: "Discipleship",
    name: "Discipleship — Sprouted Field",
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
    index: 3,
    short: "Church",
    name: "Church — Harvested Field",
    question: "How do we gather?",
    focus:
      "Groups become churches. Simple, reproducible, indigenous — able to do everything Acts 2 describes without waiting for outside permission or money.",
    tools: ["Church Circle — Acts 2:36–47", "Elders raised locally", "Lord's Supper & baptism", "Sending"],
  },
];

export const leadershipCenter = {
  name: "Leadership Development",
  frame: "5 Levels of Movement Leadership",
  mawl: ["Model", "Assist", "Watch", "Leave"],
  focus:
    "The centre of the diagram, not a fifth field. Leaders are grown inside the work — modelled to, then assisted, then watched, then left. If you cannot leave, it is not a movement yet.",
};

// The 7 Phases of Progress — noplaceleft.net/7-phases
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
