import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { practiceAreas } from "@/data/practiceAreas";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export const metadata: Metadata = buildMetadata({
  title: "Practice Areas",
  description:
    "Ganivada & Associates practises civil law, criminal law, arbitration, real estate, contract drafting, property law, land acquisition, international commercial law, PMLA, family law, and document drafting.",
  path: "/practice-areas",
});

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi"];

export default function PracticeAreasPage() {
  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>Practice</span></div>
          <h1 data-enter="">Eleven areas of <em>practice.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            One standard of care across civil, criminal, commercial, property, and arbitration matters: argued before courts and tribunals across India.
          </p>
          <div className="meta">III<br />Practice</div>
        </div>
      </section>

      <section className="section practice-index-section">
        <div className="wrap">
          <div className="areas reveal-stagger">
            {practiceAreas.map((area, i) => (
              <Link key={area.slug} className="area" href={`/practice-areas/${area.slug}`}>
                <div className="a-top"><span className="numlabel">{romanNumerals[i]}</span><span className="a-arr">↗</span></div>
                <div>
                  <div className="a-t">{area.title}</div>
                  <p className="a-d">{area.summary}</p>
                </div>
              </Link>
            ))}
            <Link className="area area--accent" href="/contact">
              <div className="a-top"><span className="numlabel" style={{ color: "var(--gold-soft)" }}>xii</span><span className="a-arr" style={{ color: "var(--gold-soft)" }}>→</span></div>
              <div><div className="a-t">Bespoke <em>brief.</em></div><p className="a-d">Other matters considered on instruction. Write to chambers.</p></div>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .practice-index-section{background:var(--obsidian)}
        .areas{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--rule)}
        .area{display:flex;flex-direction:column;justify-content:space-between;padding:38px 32px 32px;min-height:260px;border-right:1px solid var(--rule);border-bottom:1px solid var(--rule);position:relative;overflow:hidden;transition:color .45s}
        .area:nth-child(3n){border-right:0}
        .area::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,var(--gold-deep),var(--gold) 60%,var(--gold-soft));transform:translateY(101%);transition:transform .6s cubic-bezier(.2,.7,.2,1);z-index:0}
        .area:hover::before{transform:translateY(0)}
        .area:hover{color:var(--obsidian)}
        .area:hover .numlabel,.area:hover .a-arr,.area:hover .a-t em{color:var(--obsidian)}
        .area > *{position:relative;z-index:1}
        .a-top{display:flex;justify-content:space-between;align-items:flex-start}
        .a-arr{font-family:var(--serif);font-style:italic;font-size:26px;color:var(--gold);transition:color .45s,transform .35s}
        .area:hover .a-arr{transform:translate(8px,-8px)}
        .a-t{font-family:var(--serif);font-weight:400;font-size:30px;line-height:1.05;color:var(--bone);letter-spacing:-.005em;transition:color .45s}
        .a-t em{font-style:italic;color:var(--gold);transition:color .45s}
        .a-d{font-family:var(--sans);font-size:13.5px;line-height:1.6;color:var(--bone-2);max-width:34ch;margin-top:10px;transition:color .45s}
        .area:hover .a-t,.area:hover .a-d{color:var(--obsidian)}
        .area--accent{background:var(--obsidian-3)}
        @media (max-width:1024px){.areas{grid-template-columns:repeat(2,1fr)}.area:nth-child(3n){border-right:1px solid var(--rule)}.area:nth-child(2n){border-right:0}}
        @media (max-width:600px){.areas{grid-template-columns:1fr}.area{border-right:0!important}}
      `}</style>
    </>
  );
}
