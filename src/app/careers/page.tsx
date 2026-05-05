import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/data/firm";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Ganivada & Associates: a growing boutique law chambers in Visakhapatnam. Openings for junior advocates and articled clerks.",
  path: "/careers",
});

export default function CareersPage() {
  const mailSubject = encodeURIComponent("Application: Ganivada & Associates");
  const mailBody = encodeURIComponent(
    "Dear Chambers,\n\nI am writing to apply for the position of [Associate / Intern] at Ganivada & Associates.\n\nName:\nLaw School / Current Enrolment:\nYear of Graduation / Enrolment Year:\nArea of Interest:\n\nBrief note about yourself:\n\n[Please attach your CV and any writing samples]\n\nThank you."
  );

  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>Careers</span></div>
          <h1 data-enter="">Build a careful practice<br />from the <em>ground up.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            We are looking for junior advocates and articled clerks who care about drafting, who read the file, and who want to learn under counsel who will read every word with them.
          </p>
          <div className="meta">VI<br />Careers</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cr-grid reveal-stagger">
            <article className="cr-row">
              <div className="cr-num">01</div>
              <div>
                <div className="kicker">Now considering</div>
                <h2 className="h2" style={{ fontSize: "clamp(28px,3.4vw,44px)", marginTop: "8px" }}>Junior <em>Advocate.</em></h2>
                <p className="body" style={{ marginTop: "16px", maxWidth: "54ch", fontSize: "16px" }}>
                  0–2 years of post-enrolment experience. Civil/criminal exposure preferred. Visakhapatnam-based or willing to relocate. Will work directly under the Principal on briefs across all practice areas.
                </p>
                <p className="body" style={{ marginTop: "14px", maxWidth: "54ch", fontSize: "14px", color: "var(--mute)" }}>
                  Compensation: market-rate stipend with merit increases. Tenure: minimum 18 months.
                </p>
              </div>
              <a className="btn" href={`mailto:${firm.contact.email}?subject=${encodeURIComponent("Application: Junior Advocate")}&body=${mailBody}`}>
                Apply <span className="arr">→</span>
              </a>
            </article>
            <article className="cr-row">
              <div className="cr-num">02</div>
              <div>
                <div className="kicker">Now considering</div>
                <h2 className="h2" style={{ fontSize: "clamp(28px,3.4vw,44px)", marginTop: "8px" }}>Articled <em>Clerk.</em></h2>
                <p className="body" style={{ marginTop: "16px", maxWidth: "54ch", fontSize: "16px" }}>
                  Final-year law students at NLU/NIRF top-100 institutions. 2–6 month engagement, with possibility of extension. Drafting, research, and court attendance.
                </p>
                <p className="body" style={{ marginTop: "14px", maxWidth: "54ch", fontSize: "14px", color: "var(--mute)" }}>
                  Compensation: stipend per BCI guidance.
                </p>
              </div>
              <a className="btn btn--ghost" href={`mailto:${firm.contact.email}?subject=${encodeURIComponent("Application: Articled Clerk")}&body=${mailBody}`}>
                Apply <span className="arr">→</span>
              </a>
            </article>
            <article className="cr-row">
              <div className="cr-num">03</div>
              <div>
                <div className="kicker">Open call</div>
                <h2 className="h2" style={{ fontSize: "clamp(28px,3.4vw,44px)", marginTop: "8px" }}>Counsel of <em>Record.</em></h2>
                <p className="body" style={{ marginTop: "16px", maxWidth: "54ch", fontSize: "16px" }}>
                  Senior counsel and AOR-empanelled advocates interested in joint-brief arrangements with the chambers. Write to discuss.
                </p>
              </div>
              <a className="btn btn--ghost" href="/contact">
                Write <span className="arr">→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--bone">
        <div className="wrap" style={{ maxWidth: "60ch", margin: "0 auto", textAlign: "center" }}>
          <div className="kicker" style={{ marginBottom: "24px" }}>What we look for</div>
          <p className="h2" style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>
            A <em>careful reader.</em><br />A patient drafter.<br />A junior with <em>conviction.</em>
          </p>
          <p className="lede" style={{ margin: "32px auto 0" }}>
            We do not care about your CGPA. We care whether you have read three judgments closely before this interview, and whether you can tell us, in your own words, what was wrong with the third.
          </p>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .cr-grid > * + *{border-top:1px solid var(--rule)}
        .cr-row{display:grid;grid-template-columns:80px 1fr auto;gap:48px;align-items:center;padding:48px 0}
        .cr-num{font-family:var(--serif);font-style:italic;font-size:48px;color:var(--gold);font-weight:300;line-height:1}
        @media (max-width:900px){.cr-row{grid-template-columns:1fr;gap:24px}}
      `}</style>
    </>
  );
}
