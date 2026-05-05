export interface TeamMember {
  slug: string;
  name: string;
  designation: string;
  photo: string;
  practiceAreas: string[];
  shortBio: string;
  email?: string;
  linkedin?: string;
  enrollmentNumber?: string;
  order: number;
}

export const team: TeamMember[] = [
  {
    slug: "ganivada-sree-prasanna-durga-gayatri",
    name: "Ganivada Sree Prasanna Durga Gayatri",
    designation: "Principal Advocate",
    photo: "/images/team/principal.jpg",
    practiceAreas: [
      "civil-law",
      "criminal-law",
      "arbitration",
      "real-estate-law",
      "contract-drafting",
      "property-law",
      "land-acquisition",
      "international-commercial-law",
      "pmla",
      "family-law",
      "document-drafting",
    ],
    shortBio:
      "Practising Advocate at High Courts, Trial Courts, and Tribunals in Hyderabad and Andhra Pradesh. BALLB from Ramaiah Institute of Legal Studies (2018–2023). Legal Freelancer with expertise in contract drafting and international client advisory.",
    email: "contact@ganivadaassociates.com",
    linkedin: "https://www.linkedin.com/in/sree-prasanna-durga-gayatri-a9338a219/",
    order: 1,
  },
];
