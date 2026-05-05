import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Ganivada & Associates: a boutique law chambers in Visakhapatnam founded by Principal Advocate Ganivada Sree Prasanna Durga Gayatri.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>About</span></div>
          <h1 data-enter="">The chambers, <em>in brief.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            A boutique practice founded in <em>June 2026</em> in Visakhapatnam: built on the conviction that good counsel is patient, precise, and quietly held to the highest standard.
          </p>
          <div className="meta">I<br />About</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="about-grid reveal-stagger">
            <aside className="about-aside">
              <div className="kicker">Established</div>
              <div className="about-big">2026</div>
              <div className="rule" style={{ margin: "24px 0" }}></div>
              <div className="kicker">Seat</div>
              <div className="about-med">Visakhapatnam<br />Andhra Pradesh</div>
              <div className="rule" style={{ margin: "24px 0" }}></div>
              <div className="kicker">Practice</div>
              <div className="about-med">High Courts of AP <em>&amp;</em> Telangana<br />Trial Courts &amp; Tribunals</div>
              <div className="rule" style={{ margin: "24px 0" }}></div>
              <div className="kicker">Languages</div>
              <div className="about-med">English · Telugu · <em>Hindi</em></div>
            </aside>
            <div className="about-body">
              <p className="h2" style={{ marginBottom: "48px" }}>Founded on a simple belief —<br />that <em>diligence</em> is the most undervalued virtue in litigation<span style={{ color: "var(--gold)" }}>.</span></p>
              <p className="body" style={{ fontSize: "17px", maxWidth: "60ch" }}>
                Ganivada &amp; Associates is a boutique chambers established in June 2026 by Advocate <em>Ganivada Sree Prasanna Durga Gayatri</em>. We act for individuals, founders, family offices, and institutional clients across India and abroad: on civil, criminal, commercial, property, and arbitration matters.
              </p>
              <p className="body" style={{ marginTop: "24px", fontSize: "17px", maxWidth: "60ch" }}>
                We are deliberately small. Every brief is led by counsel who knows it intimately: read end-to-end, argued personally, and revisited until it is right. There is no associate handing the file to a partner an hour before the hearing.
              </p>
              <p className="body" style={{ marginTop: "24px", fontSize: "17px", maxWidth: "60ch" }}>
                Our pedigree draws from rooms not always found together: the Supreme Court of India, Clifford Chance in London, the Advocate General of Karnataka, and a sustained period at Venkat &amp; Venkat in Hyderabad. We bring that breadth to every matter, regardless of size.
              </p>
              <p className="lede" style={{ marginTop: "48px", borderLeft: "2px solid var(--gold)", paddingLeft: "24px" }}>
                &ldquo;To be a good lawyer is, before anything else, to be a careful reader. Everything follows from that.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bone">
        <div className="wrap">
          <div className="section-head reveal">
            <div><div className="num">02</div><h2 className="h2" style={{ marginTop: "8px" }}>Principles, <em>plainly stated.</em></h2></div>
            <div></div>
            <div className="meta">What guides the work</div>
          </div>
          <div className="prin-grid reveal-stagger">
            <article className="prin">
              <div className="numlabel">i</div>
              <h3 className="h3"><em>Read</em> first, advise second.</h3>
              <p className="body">Every brief begins with the documents: read closely, then again. Strategy is downstream of comprehension.</p>
            </article>
            <article className="prin">
              <div className="numlabel">ii</div>
              <h3 className="h3"><em>Discretion</em> as discipline.</h3>
              <p className="body">What is told to chambers stays in chambers. We do not name our clients in marketing, ever.</p>
            </article>
            <article className="prin">
              <div className="numlabel">iii</div>
              <h3 className="h3"><em>Honest</em> opinion, on the record.</h3>
              <p className="body">Where a matter is weak, we say so. A clear written opinion is more valuable than a hopeful pitch.</p>
            </article>
            <article className="prin">
              <div className="numlabel">iv</div>
              <h3 className="h3"><em>Costed,</em> not open-ended.</h3>
              <p className="body">Engagements are scoped and quoted in writing before work begins. Surprises belong in courtrooms, not invoices.</p>
            </article>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .about-grid{display:grid;grid-template-columns:300px 1fr;gap:80px}
        .about-aside{position:sticky;top:120px;align-self:start}
        .about-big{font-family:var(--serif);font-style:italic;font-size:88px;line-height:.9;color:var(--gold);font-weight:300;margin-top:8px;letter-spacing:-.02em}
        .about-med{font-family:var(--serif);font-size:22px;line-height:1.3;color:var(--bone);margin-top:8px;font-weight:300}
        .about-med em{font-style:italic;color:var(--gold)}
        @media (max-width:900px){.about-grid{grid-template-columns:1fr;gap:48px}.about-aside{position:static}}
        .prin-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid var(--rule-light)}
        .prin{padding:48px;border-right:1px solid var(--rule-light);border-bottom:1px solid var(--rule-light)}
        .prin:nth-child(2n){border-right:0}
        .prin .numlabel{color:var(--oxblood);margin-bottom:24px;display:block;font-size:18px}
        .prin .h3{margin-bottom:14px}
        .prin .h3 em{color:var(--oxblood)}
        @media (max-width:700px){.prin-grid{grid-template-columns:1fr}.prin{border-right:0!important}}
      `}</style>
    </>
  );
}
