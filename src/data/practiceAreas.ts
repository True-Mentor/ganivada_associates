export interface PracticeAreaMeta {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  order: number;
}

export const practiceAreas: PracticeAreaMeta[] = [
  {
    slug: "civil-law",
    title: "Civil Law",
    summary: "Suits, appeals, injunctions, and recovery proceedings before civil courts.",
    icon: "scale",
    order: 1,
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    summary: "Bail applications, defence representation, and criminal appeals.",
    icon: "gavel",
    order: 2,
  },
  {
    slug: "arbitration",
    title: "Arbitration & ADR",
    summary: "Domestic and international commercial arbitration, mediation, and conciliation.",
    icon: "handshake",
    order: 3,
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    summary: "Title verification, sale deeds, lease agreements, and property disputes.",
    icon: "building",
    order: 4,
  },
  {
    slug: "contract-drafting",
    title: "Contract Drafting",
    summary: "Drafting, reviewing, and negotiating commercial contracts and agreements.",
    icon: "file-text",
    order: 5,
  },
  {
    slug: "property-law",
    title: "Property Law",
    summary: "Land acquisition matters, partition suits, and property rights litigation.",
    icon: "home",
    order: 6,
  },
  {
    slug: "land-acquisition",
    title: "Land Acquisition",
    summary: "Compensation claims and appeals under land acquisition statutes.",
    icon: "map",
    order: 7,
  },
  {
    slug: "international-commercial-law",
    title: "International Commercial Law",
    summary: "Cross-border contracts, international arbitration, and foreign client advisory.",
    icon: "globe",
    order: 8,
  },
  {
    slug: "pmla",
    title: "PMLA & Financial Law",
    summary: "Prevention of Money Laundering Act matters, attachment proceedings, and compliance.",
    icon: "shield",
    order: 9,
  },
  {
    slug: "family-law",
    title: "Family Law",
    summary: "Matrimonial disputes, custody matters, maintenance, and succession.",
    icon: "users",
    order: 10,
  },
  {
    slug: "document-drafting",
    title: "Document Drafting",
    summary: "Legal notices, plaints, written statements, IAs, and revision petitions.",
    icon: "pen-line",
    order: 11,
  },
];
