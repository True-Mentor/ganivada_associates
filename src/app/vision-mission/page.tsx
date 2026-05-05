import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export const metadata: Metadata = buildMetadata({
  title: "Vision & Mission",
  description:
    "The vision and mission of Ganivada & Associates: committed to client outcomes, ethical practice, and institutional growth.",
  path: "/vision-mission",
});

export default function VisionMissionPage() {
  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><Link href="/about">About</Link><span className="sep">/</span><span>Vision &amp; Mission</span></div>
          <h1 data-enter="">Vision <em>&amp;</em><br />Mission.</h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            Where the chambers is going, and how we intend to get there.
          </p>
          <div className="meta">II<br />Mission</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="vm-grid reveal-stagger">
            <article className="vm-card">
              <div className="vm-letter">V</div>
              <div className="kicker">Vision</div>
              <h2 className="h1" style={{ marginTop: "20px" }}>A chambers known for the <em>quality</em> of its briefs<span style={{ color: "var(--gold)" }}>.</span></h2>
              <p className="body" style={{ marginTop: "32px", maxWidth: "46ch", fontSize: "16.5px" }}>
                To build, over decades, a practice that lawyers respect for its drafting and judges trust for its candour. Not the largest chambers: the most carefully run.
              </p>
              <ul className="vm-list">
                <li><span className="numlabel">i</span> Counsel of the highest professional standard, available to clients of all sizes.</li>
                <li><span className="numlabel">ii</span> A reputation for written work: opinions, pleadings, notices: that speaks for itself.</li>
                <li><span className="numlabel">iii</span> A practice rooted in Visakhapatnam, with national reach.</li>
              </ul>
            </article>
            <article className="vm-card vm-card--alt">
              <div className="vm-letter">M</div>
              <div className="kicker">Mission</div>
              <h2 className="h1" style={{ marginTop: "20px" }}>To act for our clients <em>as we would for ourselves.</em></h2>
              <p className="body" style={{ marginTop: "32px", maxWidth: "46ch", fontSize: "16.5px" }}>
                Every brief read closely. Every opinion costed and honest. Every appearance prepared for. Every client treated as the only client we have that day.
              </p>
              <ul className="vm-list">
                <li><span className="numlabel">i</span> Read every document. Every time.</li>
                <li><span className="numlabel">ii</span> Quote in writing. Honour the quote.</li>
                <li><span className="numlabel">iii</span> Tell clients what they need to hear, not what they want to hear.</li>
                <li><span className="numlabel">iv</span> Treat juniors and judges with equal regard.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--bone">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto" }}>
            <div className="kicker" style={{ marginBottom: "24px" }}>A note from the Principal</div>
            <p className="h2" style={{ fontSize: "clamp(28px,3.4vw,48px)", lineHeight: "1.2" }}>
              <em>&ldquo;Practice will outlast performance.</em> I would rather build a chambers that twenty good clients return to for twenty years, than one that takes a thousand briefs in a year and remembers none of them.&rdquo;
            </p>
            <div style={{ marginTop: "36px", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "18px", color: "var(--oxblood)" }}>
             : Adv. Sree Prasanna Durga Gayatri, Founding Principal
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .vm-grid{display:grid;grid-template-columns:1fr 1fr;gap:0}
        .vm-card{padding:64px 56px;border:1px solid var(--rule);position:relative;overflow:hidden;background:var(--obsidian-2)}
        .vm-card--alt{background:var(--obsidian-3);border-left:0}
        .vm-letter{position:absolute;top:-30px;right:-10px;font-family:var(--serif);font-style:italic;font-weight:300;font-size:340px;line-height:1;color:rgba(184,149,74,.05);pointer-events:none}
        .vm-card .h1 em{color:var(--gold)}
        .vm-list{list-style:none;margin-top:36px;padding-top:28px;border-top:1px solid var(--rule)}
        .vm-list li{display:flex;gap:18px;padding:14px 0;font-family:var(--serif);font-size:18px;line-height:1.45;color:var(--bone-2);font-weight:300}
        .vm-list .numlabel{flex-shrink:0;width:24px}
        @media (max-width:900px){.vm-grid{grid-template-columns:1fr}.vm-card--alt{border-left:1px solid var(--rule);border-top:0}}
        @media (max-width:600px){.vm-card{padding:40px 28px}}
      `}</style>
    </>
  );
}
