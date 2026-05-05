export interface FAQ {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

export const faqs: FAQCategory[] = [
  {
    category: "Engaging Counsel",
    faqs: [
      {
        q: "How do I schedule a consultation?",
        a: "You may reach us by phone, email, or the contact form on this website. We will respond within 24 business hours to schedule a confidential consultation at a mutually convenient time.",
      },
      {
        q: "What information should I bring to the first meeting?",
        a: "Please bring all relevant documents relating to your matter: contracts, court notices, property papers, correspondence: and a brief note of the facts as you understand them. The more context you provide, the more effectively we can advise you.",
      },
      {
        q: "Does accessing this website create an attorney-client relationship?",
        a: "No. Accessing this website or submitting the contact form does not create an attorney-client relationship. A formal engagement begins only upon execution of a retainer agreement.",
      },
    ],
  },
  {
    category: "Fees & Retainers",
    faqs: [
      {
        q: "How are fees structured?",
        a: "Fee structures vary by the nature and complexity of the matter. We offer fixed-fee arrangements for document drafting and standard agreements, and time-based or brief-fee retainers for litigation and advisory mandates. Fees are discussed transparently at the first meeting.",
      },
      {
        q: "Do you offer consultations for international clients?",
        a: "Yes. We advise international clients on cross-border contracts, Indian arbitration proceedings, and real estate transactions. Consultations may be conducted via video call. We are experienced in working across time zones.",
      },
    ],
  },
  {
    category: "Court Process",
    faqs: [
      {
        q: "Which courts does the firm appear before?",
        a: "We appear before the High Court of Andhra Pradesh, High Court of Telangana, Trial Courts (District and Sessions Courts, Civil Courts), and Tribunals across Andhra Pradesh and Telangana.",
      },
      {
        q: "How long does a civil suit typically take?",
        a: "Civil litigation timelines in India vary significantly depending on the court, docket, and nature of the matter. We provide realistic timelines case-by-case and keep clients regularly informed of progress.",
      },
    ],
  },
  {
    category: "Documentation",
    faqs: [
      {
        q: "Do you draft contracts for businesses?",
        a: "Yes. We draft, review, and negotiate a wide range of commercial contracts including service agreements, vendor contracts, employment agreements, NDAs, MoUs, and shareholder agreements for Indian and international businesses.",
      },
      {
        q: "Can you help with property title verification?",
        a: "Yes. We conduct title searches, review sale deeds and encumbrance certificates, and advise on property transactions in Andhra Pradesh and Telangana.",
      },
    ],
  },
  {
    category: "International Clients",
    faqs: [
      {
        q: "Can foreign nationals retain your services for India-related matters?",
        a: "Yes. We advise foreign nationals and companies on India-related legal matters including contract drafting, real estate advisory, arbitration proceedings seated in India, and cross-border commercial disputes.",
      },
      {
        q: "Do you work in languages other than English?",
        a: "Our working languages are English and Telugu. Correspondence and documentation in these languages is handled directly; Hindi is accommodated. For other languages, we work with certified translators.",
      },
    ],
  },
];
