import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Client Resources & FAQ",
  description:
    "Frequently asked questions about engaging Ganivada & Associates, fees, court process, documentation, and international client services.",
  path: "/resources",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
};

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>Resources</span></div>
          <h1 data-enter="">Common <em>questions.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            Answers about engaging chambers, our fees, court procedure, and documentation: plainly stated.
          </p>
          <div className="meta">VI<br />Resources</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="faq-grid reveal-stagger">
            {faqs.map((category, ci) => (
              <div key={category.category} className="faq-cat">
                <div className="faq-cat-head">
                  <span className="numlabel">{romanNumerals[ci] ?? (ci + 1)}</span>
                  <h2 className="h3">{category.category}</h2>
                </div>
                <div className="faq-items">
                  {category.faqs.map((faq, i) => (
                    <details key={i} className="faq-item">
                      <summary className="faq-q">
                        {faq.q}
                        <span className="faq-icon">+</span>
                      </summary>
                      <div className="faq-a">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta reveal">
            <div>
              <div className="kicker" style={{ marginBottom: "14px" }}>Still have questions?</div>
              <p className="h3" style={{ fontWeight: "300" }}>Have a question we haven&apos;t answered? Write directly to <em>chambers.</em></p>
            </div>
            <Link className="btn" href="/contact">Contact Chambers <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .faq-grid{display:flex;flex-direction:column;gap:0}
        .faq-cat{border-top:1px solid var(--rule)}
        .faq-cat-head{display:grid;grid-template-columns:40px 1fr;gap:24px;align-items:center;padding:40px 0 32px}
        .faq-cat-head .numlabel{font-size:18px}
        .faq-cat-head .h3{color:var(--bone)}
        .faq-items{padding-left:64px;padding-bottom:40px}
        .faq-item{border-bottom:1px solid var(--rule)}
        .faq-item:last-child{border-bottom:0}
        .faq-q{list-style:none;display:flex;align-items:flex-start;justify-content:space-between;gap:24px;padding:18px 0;font-family:var(--serif);font-size:19px;color:var(--bone);cursor:pointer;user-select:none;font-weight:300}
        .faq-q::-webkit-details-marker{display:none}
        .faq-icon{flex-shrink:0;font-family:var(--sans);font-size:20px;color:var(--gold);transition:transform .3s}
        details[open] .faq-icon{transform:rotate(45deg)}
        .faq-a{padding:0 0 18px 0;font-family:var(--sans);font-size:15px;line-height:1.65;color:var(--bone-2);max-width:60ch}
        .faq-cta{margin-top:80px;padding:48px;border:1px solid var(--gold);display:flex;align-items:center;justify-content:space-between;gap:48px;background:var(--obsidian-2)}
        .faq-cta em{font-style:italic;color:var(--gold-soft)}
        @media (max-width:900px){.faq-items{padding-left:0}.faq-cta{flex-direction:column;align-items:flex-start}}
        @media (max-width:600px){.faq-cat-head{grid-template-columns:1fr;gap:8px}}
      `}</style>
    </>
  );
}
