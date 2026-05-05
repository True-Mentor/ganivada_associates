import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { team } from "@/data/team";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export const metadata: Metadata = buildMetadata({
  title: "The Chambers",
  description:
    "Meet the advocates at Ganivada & Associates: led by Principal Advocate Ganivada Sree Prasanna Durga Gayatri.",
  path: "/team",
});

export default function TeamPage() {
  const principal = team[0];

  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>Chambers</span></div>
          <h1 data-enter="">The <em>chambers.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            A small bench, deliberately. Every brief is led by counsel who knows it intimately.
          </p>
          <div className="meta">IV<br />People</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Link href={`/team/${principal.slug}`} className="t-card reveal">
            <div className="t-portrait">
              <div className="t-ph">[ Portrait: Sree Gayatri ]</div>
              <div className="t-frame"></div>
            </div>
            <div className="t-info">
              <div className="kicker">Principal Advocate</div>
              <h2 className="h1" style={{ marginTop: "12px", fontSize: "clamp(40px,5vw,84px)" }}>
                Ganivada Sree Prasanna<br />Durga <em>Gayatri.</em>
              </h2>
              <p className="lede" style={{ marginTop: "24px", maxWidth: "48ch" }}>
                Founding Principal. BA LLB (Hons.), Ramaiah Institute of Legal Studies, 2023. Practises across the High Courts of AP &amp; Telangana on civil, criminal, property, and arbitration matters.
              </p>
              <div className="t-creds">
                <span>Bar of <em>Andhra Pradesh</em></span>
                <span>Supreme Court <em>internship</em></span>
                <span>Clifford <em>Chance</em></span>
                <span>AG <em>Karnataka</em></span>
              </div>
              <div className="t-cta">Read full profile <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--gold)", fontSize: "24px" }}>→</span></div>
            </div>
          </Link>

          <div className="t-grow reveal">
            <div className="t-grow-num">02</div>
            <div>
              <h3 className="h2" style={{ fontSize: "clamp(28px,3vw,42px)" }}>The chambers <em>is growing.</em></h3>
              <p className="lede" style={{ marginTop: "18px", maxWidth: "54ch" }}>
                We are open to instruction from junior advocates and articled clerks who want to build a careful practice from the ground up. Write to us.
              </p>
              <Link className="btn btn--ghost" href="/careers" style={{ marginTop: "24px", display: "inline-flex" }}>
                Careers at Chambers <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .t-card{display:grid;grid-template-columns:1fr 1.4fr;gap:64px;padding:48px;border:1px solid var(--rule);background:var(--obsidian-2);transition:border-color .35s,background .35s;align-items:start}
        .t-card:hover{border-color:var(--gold-deep);background:var(--obsidian-3)}
        .t-portrait{position:relative;aspect-ratio:4/5;background:var(--obsidian-3)}
        .t-ph{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--serif);font-style:italic;color:var(--mute);font-size:18px;background:repeating-linear-gradient(45deg,transparent 0 14px,rgba(184,149,74,.05) 14px 15px)}
        .t-frame{position:absolute;inset:14px;border:1px solid rgba(184,149,74,.4)}
        .t-creds{display:flex;flex-wrap:wrap;gap:10px;margin-top:32px}
        .t-creds span{font-family:var(--sans);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--bone-2);padding:8px 14px;border:1px solid var(--rule);background:rgba(0,0,0,.3)}
        .t-creds em{font-style:italic;color:var(--gold);font-family:var(--serif);font-size:14px;letter-spacing:.02em;text-transform:none;margin-left:4px}
        .t-cta{margin-top:36px;font-family:var(--serif);font-size:20px;font-style:italic;color:var(--gold);display:flex;align-items:center;gap:14px}
        .t-grow{margin-top:80px;padding:48px;border-top:1px solid var(--rule);display:grid;grid-template-columns:auto 1fr;gap:48px;align-items:start}
        .t-grow-num{font-family:var(--serif);font-style:italic;font-size:64px;color:var(--gold);line-height:1;font-weight:300}
        @media (max-width:900px){.t-card{grid-template-columns:1fr;gap:32px;padding:24px}.t-grow{grid-template-columns:1fr;padding:24px 0}}
      `}</style>
    </>
  );
}
