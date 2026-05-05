export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      { label: "Civil Law", href: "/practice-areas/civil-law" },
      { label: "Criminal Law", href: "/practice-areas/criminal-law" },
      { label: "Arbitration & ADR", href: "/practice-areas/arbitration" },
      { label: "Real Estate Law", href: "/practice-areas/real-estate-law" },
      { label: "Contract Drafting", href: "/practice-areas/contract-drafting" },
      { label: "Property Law", href: "/practice-areas/property-law" },
      { label: "Land Acquisition", href: "/practice-areas/land-acquisition" },
      { label: "International Commercial", href: "/practice-areas/international-commercial-law" },
      { label: "PMLA & Financial", href: "/practice-areas/pmla" },
      { label: "Family Law", href: "/practice-areas/family-law" },
      { label: "Document Drafting", href: "/practice-areas/document-drafting" },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  firm: [
    { label: "About Us", href: "/about" },
    { label: "Vision & Mission", href: "/vision-mission" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  practice: [
    { label: "Civil Law", href: "/practice-areas/civil-law" },
    { label: "Criminal Law", href: "/practice-areas/criminal-law" },
    { label: "Arbitration & ADR", href: "/practice-areas/arbitration" },
    { label: "Real Estate Law", href: "/practice-areas/real-estate-law" },
    { label: "Contract Drafting", href: "/practice-areas/contract-drafting" },
    { label: "All Practice Areas", href: "/practice-areas" },
  ],
  resources: [
    { label: "Client Resources", href: "/resources" },
    { label: "Insights", href: "/insights" },
  ],
  compliance: [
    { label: "Disclaimer", href: "#disclaimer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};
