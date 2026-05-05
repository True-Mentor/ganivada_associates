import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export const metadata = buildMetadata({
  title: "Ganivada & Associates · Advocates & Legal Consultants · Visakhapatnam",
  description:
    "Boutique chambers in Visakhapatnam practising at the High Courts of Andhra Pradesh & Telangana. Civil, criminal, commercial, property, and arbitration matters across India.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-simple">
        <div className="hero-simple__inner">
          <div className="hero-simple__eyebrow" data-enter="">
            Ganivada &amp; Associates · Visakhapatnam · Estd. June 2026
          </div>
          <h1 className="hero-simple__h" data-enter="">
            Counsel held to<br />a <em>higher</em> standard.
          </h1>
          <p className="hero-simple__lede" data-enter="">
            A boutique chambers practising at the High Courts of Andhra Pradesh &amp; Telangana: across civil, criminal, commercial, property, and arbitration matters.
          </p>
          <div className="hero-simple__sk" data-enter="">
            <span className="hero-simple__skt">धर्मो रक्षति रक्षितः</span>
            <span className="hero-simple__skt-tr">Dharma protects those who uphold it</span>
          </div>
          <div className="hero-simple__cta" data-enter="">
            <Link className="btn" href="/contact">Book Consultation <span className="arr">→</span></Link>
            <Link className="btn btn--ghost" href="/practice-areas">Practice Areas <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ============== PEDIGREE MARQUEE ============== */}
      <section className="ped-strip" aria-label="Pedigree">
        <div className="ped-track">
          <span>Supreme Court of India <i>✦</i> Clifford Chance, London <i>✦</i> Advocate General of Karnataka <i>✦</i> High Court of Andhra Pradesh <i>✦</i> High Court of Telangana <i>✦</i> Bar Council of Andhra Pradesh <i>✦</i> Leo Cussen Centre, Melbourne <i>✦</i> DSK Legal <i>✦</i> Holla &amp; Holla <i>✦</i></span>
          <span aria-hidden="true">Supreme Court of India <i>✦</i> Clifford Chance, London <i>✦</i> Advocate General of Karnataka <i>✦</i> High Court of Andhra Pradesh <i>✦</i> High Court of Telangana <i>✦</i> Bar Council of Andhra Pradesh <i>✦</i> Leo Cussen Centre, Melbourne <i>✦</i> DSK Legal <i>✦</i> Holla &amp; Holla <i>✦</i></span>
        </div>
      </section>

      {/* ============== INTRO STATEMENT ============== */}
      <section className="section section--bone" aria-label="The chambers">
        <div className="wrap">
          <div className="intro-grid reveal-stagger">
            <div className="intro-num">
              <div className="numlabel">I</div>
              <div className="kicker" style={{ marginTop: "8px" }}>The Chambers</div>
            </div>
            <div className="intro-body">
              <p className="h1">A practice built on <em>rigour,</em><br />discretion, and the long view<span style={{ color: "var(--oxblood)" }}>.</span></p>
              <p className="lede" style={{ marginTop: "32px", maxWidth: "62ch" }}>
                Founded in June 2026 by Advocate <em>Ganivada Sree Prasanna Durga Gayatri</em>, our chambers offer counsel across civil, criminal, commercial, property, and arbitration matters: with the rigour of a global firm and the responsiveness of a boutique practice. We act for individuals, founders, family offices, and institutions across India and abroad.
              </p>
              <Link className="btn" href="/about" style={{ marginTop: "36px", display: "inline-flex" }}>
                About the Chambers <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRACTICE AREAS ============== */}
      <section className="section practice-section" id="practice" aria-labelledby="ph">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="num">02</div>
              <h2 id="ph" className="h2" style={{ marginTop: "8px" }}>Twelve areas of <em>practice.</em><br />One standard of care.</h2>
            </div>
            <div></div>
            <div className="meta">Across India · 2026: present</div>
          </div>

          <div className="areas reveal-stagger">
            <Link className="area" href="/practice-areas/civil-law">
              <div className="a-top"><span className="numlabel">i</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Civil <em>Law</em></div><p className="a-d">Suits, appeals, injunctions, and recovery proceedings before civil courts.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/criminal-law">
              <div className="a-top"><span className="numlabel">ii</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Criminal <em>Law</em></div><p className="a-d">Bail applications, defence representation, and criminal appeals.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/arbitration">
              <div className="a-top"><span className="numlabel">iii</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Arbitration <em>&amp; ADR</em></div><p className="a-d">Domestic and international commercial arbitration, mediation, conciliation.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/real-estate">
              <div className="a-top"><span className="numlabel">iv</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Real Estate <em>Law</em></div><p className="a-d">Title verification, sale deeds, lease agreements, and property disputes.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/contract-drafting">
              <div className="a-top"><span className="numlabel">v</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Contract <em>Drafting</em></div><p className="a-d">Drafting, reviewing, and negotiating commercial contracts and agreements.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/property-law">
              <div className="a-top"><span className="numlabel">vi</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Property <em>Law</em></div><p className="a-d">Land acquisition matters, partition suits, and property rights litigation.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/land-acquisition">
              <div className="a-top"><span className="numlabel">vii</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Land <em>Acquisition</em></div><p className="a-d">Compensation claims and appeals under land acquisition statutes.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/international-commercial">
              <div className="a-top"><span className="numlabel">viii</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">International <em>Commercial</em></div><p className="a-d">Cross-border contracts, international arbitration, foreign client advisory.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/pmla-financial">
              <div className="a-top"><span className="numlabel">ix</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">PMLA <em>&amp; Financial</em></div><p className="a-d">Money Laundering Act matters, attachment proceedings, compliance.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/family-law">
              <div className="a-top"><span className="numlabel">x</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Family <em>Law</em></div><p className="a-d">Matrimonial disputes, custody, maintenance, and succession matters.</p></div>
            </Link>
            <Link className="area" href="/practice-areas/document-drafting">
              <div className="a-top"><span className="numlabel">xi</span><span className="a-arr">↗</span></div>
              <div><div className="a-t">Document <em>Drafting</em></div><p className="a-d">Legal notices, plaints, written statements, IAs, and revision petitions.</p></div>
            </Link>
            <Link className="area area--accent" href="/contact">
              <div className="a-top"><span className="numlabel" style={{ color: "var(--gold-soft)" }}>xii</span><span className="a-arr" style={{ color: "var(--gold-soft)" }}>→</span></div>
              <div><div className="a-t">Bespoke <em>brief.</em></div><p className="a-d">Other matters considered on instruction. Write to chambers.</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PEDIGREE / CHAMBERS PROVENANCE ============== */}
      <section className="section section--bone ped-section" aria-label="Pedigree">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="num">03</div>
              <h2 className="h2" style={{ marginTop: "8px" }}>Where the practice <em>was forged.</em></h2>
            </div>
            <div></div>
            <div className="meta">Pedigree · Provenance</div>
          </div>

          <div className="ped-grid reveal-stagger">
            <article className="ped-cell">
              <div className="ped-num">i · New Delhi</div>
              <h3 className="h3">Supreme Court <em>of India</em></h3>
              <p className="ped-role">Intern, Chambers of <em>Adv. Pradeep Rai</em><br />Vice President, SCBA · 2022</p>
            </article>
            <article className="ped-cell">
              <div className="ped-num">ii · London &amp; Global</div>
              <h3 className="h3">Clifford <em>Chance</em></h3>
              <p className="ped-role">Top-10 global firm · <em>£2.8B</em> revenue<br />Virtual Internship · 2021</p>
            </article>
            <article className="ped-cell">
              <div className="ped-num">iii · Bengaluru</div>
              <h3 className="h3">High Court of <em>Karnataka</em></h3>
              <p className="ped-role">Under the <em>Advocate General</em><br />of Karnataka · 2022</p>
            </article>
            <article className="ped-cell">
              <div className="ped-num">iv · Hyderabad</div>
              <h3 className="h3">Venkat <em>&amp; Venkat</em></h3>
              <p className="ped-role">Advocates &amp; Solicitors<br /><em>Apr 2024: May 2026</em></p>
            </article>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section className="section process-section" id="process">
        <div className="proc-glow" aria-hidden="true"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-head reveal">
            <div>
              <div className="num">04</div>
              <h2 className="h2" style={{ marginTop: "8px" }}>How <em>we</em> work.</h2>
            </div>
            <div></div>
            <div className="meta">A four-stage engagement</div>
          </div>

          <div className="steps reveal-stagger">
            <article className="step">
              <div className="roman">I</div>
              <h3 className="h3"><em>Confidential</em><br />consultation</h3>
              <p className="body">A no-obligation conversation to understand the matter, the parties, and the relief sought.</p>
            </article>
            <article className="step">
              <div className="roman">II</div>
              <h3 className="h3"><em>Strategy</em><br />&amp; opinion</h3>
              <p className="body">Written legal opinion, risk assessment, and a costed plan of action drawn from precedent.</p>
            </article>
            <article className="step">
              <div className="roman">III</div>
              <h3 className="h3"><em>Representation</em><br />&amp; pleadings</h3>
              <p className="body">Drafting, filing, and appearance before courts and tribunals: with regular client briefings.</p>
            </article>
            <article className="step">
              <div className="roman">IV</div>
              <h3 className="h3"><em>Resolution</em><br />&amp; counsel</h3>
              <p className="body">Decree, settlement, or award: followed by post-judgment execution and continuing advice.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============== PRINCIPAL SPOTLIGHT ============== */}
      <section className="section principal-section section--bone" id="principal">
        <div className="wrap">
          <div className="p-grid reveal-stagger">
            <div className="p-portrait">
              <div className="ph">
                <div className="ph-inner">
                  <div className="ph-label">[ Principal portrait ]</div>
                  <div className="ph-spec">portrait · 4 : 5 · advocate&apos;s robes</div>
                </div>
              </div>
              <div className="p-frame"></div>
              <div className="p-seal">
                <div className="seal-inner">
                  <span className="seal-mono">G</span>
                  <span className="seal-est">EST · MMXXVI</span>
                </div>
              </div>
              <div className="p-vert">Visakhapatnam · Andhra Pradesh</div>
            </div>

            <div className="p-text">
              <div className="kicker" style={{ marginBottom: "14px" }}>Principal Advocate</div>
              <h2 className="h1">Ganivada Sree Prasanna<br />Durga <em>Gayatri.</em></h2>

              <blockquote className="p-quote">
                &ldquo;The law is not a fortress. It is a discipline: to be wielded with care, and never against those it was written to protect.&rdquo;
              </blockquote>

              <p className="body" style={{ marginTop: "30px", maxWidth: "54ch" }}>
                Founding Principal Advocate of the chambers. <em>BA LLB (Hons.)</em>, Ramaiah Institute of Legal Studies, Bengaluru: Grade A, 2023. Practises across the High Courts of Andhra Pradesh and Telangana, Trial Courts, and Tribunals on civil, criminal, property, commercial, and arbitration matters.
              </p>

              <div className="creds">
                <div className="cred"><div className="k">Bar Council</div><div className="v">Andhra <em>Pradesh</em></div></div>
                <div className="cred"><div className="k">Languages</div><div className="v">English · Telugu · <em>Hindi</em></div></div>
                <div className="cred"><div className="k">Education</div><div className="v">Ramaiah, <em>Bengaluru</em></div></div>
                <div className="cred"><div className="k">Established</div><div className="v">Visakhapatnam · <em>June 2026</em></div></div>
              </div>

              <Link className="btn" href="/team/ganivada-sree-prasanna-durga-gayatri" style={{ marginTop: "36px", display: "inline-flex" }}>
                Read Full Profile <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== INSIGHTS TEASER ============== */}
      <section className="section insights-section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="num">05</div>
              <h2 className="h2" style={{ marginTop: "8px" }}>From the <em>chambers.</em></h2>
            </div>
            <div></div>
            <div className="meta">Notes &amp; Commentary</div>
          </div>

          <div className="ins-list linklist reveal">
            <Link href="/insights/section-89-cpc-mediation">
              <div>
                <div className="ll-meta">15 · Mar · 2026 · Civil Procedure</div>
                <div className="ll-t">Section 89 CPC and the <em>quiet revival</em> of mediation</div>
              </div>
              <span className="ll-m">Read essay →</span>
            </Link>
            <Link href="/insights/seat-venue-balco-fifteen">
              <div>
                <div className="ll-meta">02 · Feb · 2026 · Arbitration</div>
                <div className="ll-t">When <em>seat</em> meets <em>venue</em>: BALCO at fifteen</div>
              </div>
              <span className="ll-m">Read essay →</span>
            </Link>
            <Link href="/insights/twin-conditions-vijay-madanlal-bail">
              <div>
                <div className="ll-meta">08 · Jan · 2026 · PMLA</div>
                <div className="ll-t">Twin conditions, <em>Vijay Madanlal,</em> and the bail bar</div>
              </div>
              <span className="ll-m">Read essay →</span>
            </Link>
          </div>

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <Link className="btn btn--ghost" href="/insights">All Insights <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ============== CONTACT CTA ============== */}
      <section className="section contact-section section--bone" id="contact">
        <div className="wrap">
          <div className="c-grid reveal-stagger">
            <div className="c-text">
              <div className="num" style={{ color: "var(--oxblood)", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "22px", marginBottom: "14px" }}>06</div>
              <h2 className="h1">Bring us your <em>matter.</em></h2>
              <p className="lede" style={{ marginTop: "32px", maxWidth: "46ch" }}>
                A confidential consultation, a written opinion, or simply a second view: chambers are open to instruction from individuals, founders, and counsel from across India.
              </p>
            </div>
            <aside className="c-card">
              <div className="c-row">
                <div className="c-k">Chambers</div>
                <div className="c-v">Visakhapatnam, <em>Andhra Pradesh</em></div>
              </div>
              <div className="c-row">
                <div className="c-k">Telephone</div>
                <div className="c-v">+91: by appointment</div>
              </div>
              <div className="c-row">
                <div className="c-k">Correspondence</div>
                <div className="c-v"><em>contact@</em>ganivadaassociates.com</div>
              </div>
              <div className="c-row">
                <div className="c-k">Hours</div>
                <div className="c-v">Mon: Fri · 9 AM <em>—</em> 6 PM</div>
              </div>
              <Link className="btn" href="/contact" style={{ marginTop: "32px", width: "100%", justifyContent: "center", display: "inline-flex" }}>
                Write to Chambers <span className="arr">→</span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        /* HERO */
        .hero-simple{min-height:92vh;display:flex;align-items:center;justify-content:center;padding:160px 24px 100px;text-align:center;background:var(--obsidian);position:relative}
        .hero-simple::before{content:"";position:absolute;inset:auto 0 0 0;height:1px;background:var(--rule)}
        .hero-simple__inner{max-width:880px;width:100%;display:flex;flex-direction:column;align-items:center;gap:36px}
        .hero-simple__eyebrow{font-family:var(--sans);font-size:11px;letter-spacing:.36em;text-transform:uppercase;color:var(--gold-soft);font-weight:500}
        .hero-simple__h{font-family:var(--serif);font-weight:300;font-size:clamp(48px,7.5vw,110px);line-height:1.02;letter-spacing:-.02em;color:var(--bone);text-wrap:balance;margin:0}
        .hero-simple__h em{font-style:italic;color:var(--gold);font-weight:300}
        .hero-simple__lede{font-family:var(--serif);font-weight:300;font-style:italic;font-size:clamp(17px,1.5vw,21px);line-height:1.55;color:var(--bone-2);max-width:54ch;margin:0}
        .hero-simple__sk{display:flex;flex-direction:column;align-items:center;gap:6px;padding:18px 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);width:min(420px,100%)}
        .hero-simple__skt{font-family:var(--skt);font-size:20px;color:var(--gold-soft);letter-spacing:.04em}
        .hero-simple__skt-tr{font-family:var(--serif);font-style:italic;font-size:13px;color:var(--mute);letter-spacing:.02em}
        .hero-simple__cta{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:8px}
        @media (max-width:600px){.hero-simple{padding:140px 20px 80px}.hero-simple__inner{gap:28px}}

        /* MARQUEE */
        .ped-strip{background:var(--obsidian-2);border-top:1px solid var(--gold-deep);border-bottom:1px solid var(--gold-deep);overflow:hidden}
        .ped-track{display:flex;width:max-content;animation:scrollX 60s linear infinite;padding:22px 0;font-family:var(--serif);font-size:21px;font-style:italic;font-weight:300;color:var(--bone);letter-spacing:.02em;gap:64px}
        .ped-track i{color:var(--gold);font-style:normal;font-size:13px;margin:0 28px;vertical-align:middle}
        @keyframes scrollX{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        /* INTRO */
        .intro-grid{display:grid;grid-template-columns:200px 1fr;gap:80px;align-items:start}
        .intro-num{font-family:var(--serif);font-style:italic;font-size:22px;color:var(--oxblood);position:sticky;top:120px}
        @media (max-width:900px){.intro-grid{grid-template-columns:1fr;gap:24px}}

        /* PRACTICE AREAS */
        .practice-section{background:var(--obsidian)}
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

        /* PEDIGREE GRID */
        .ped-section{background:var(--bone)}
        .ped-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--rule-light);border-bottom:1px solid var(--rule-light)}
        .ped-cell{padding:48px 32px;border-right:1px solid var(--rule-light);position:relative;transition:background .35s}
        .ped-cell:last-child{border-right:0}
        .ped-cell:hover{background:rgba(184,149,74,.06)}
        .ped-num{font-family:var(--serif);font-style:italic;font-size:13px;color:var(--gold-deep);letter-spacing:.06em;margin-bottom:16px}
        .ped-cell .h3{margin-bottom:14px}
        .ped-cell .h3 em{color:var(--oxblood)}
        .ped-role{font-family:var(--sans);font-size:13.5px;line-height:1.6;color:var(--ink);max-width:28ch}
        .ped-role em{font-style:italic;color:var(--oxblood);font-family:var(--serif);font-size:15px}
        @media (max-width:1024px){.ped-grid{grid-template-columns:repeat(2,1fr)}.ped-cell:nth-child(2){border-right:0}.ped-cell:nth-child(1),.ped-cell:nth-child(2){border-bottom:1px solid var(--rule-light)}}
        @media (max-width:600px){.ped-grid{grid-template-columns:1fr}.ped-cell{border-right:0!important;border-bottom:1px solid var(--rule-light)}}

        /* PROCESS */
        .process-section{background:var(--obsidian);position:relative;overflow:hidden}
        .proc-glow{position:absolute;inset:0;background:radial-gradient(ellipse 50% 60% at 80% 20%,rgba(184,149,74,.10),transparent 60%),radial-gradient(ellipse 40% 50% at 10% 90%,rgba(122,31,31,.10),transparent 60%)}
        .steps{display:grid;grid-template-columns:repeat(4,1fr);position:relative}
        .step{padding:32px 28px 36px 0;border-right:1px solid var(--rule);position:relative}
        .step:last-child{border-right:0}
        .roman{font-family:var(--serif);font-style:italic;font-size:64px;font-weight:300;color:var(--gold);line-height:1}
        .step .h3{margin-top:24px;color:var(--bone)}
        .step .h3 em{color:var(--gold-soft)}
        .step .body{margin-top:14px;color:var(--bone-2);font-family:var(--sans);font-size:14.5px;line-height:1.7}
        @media (max-width:900px){
          .steps{grid-template-columns:repeat(2,1fr)}
          .step{padding:28px 24px 28px 0}
          .step:nth-child(2n){border-right:0}
          .step:nth-child(1),.step:nth-child(2){border-bottom:1px solid var(--rule)}
        }
        @media (max-width:540px){
          .steps{grid-template-columns:1fr}
          .step{border-right:0!important;border-bottom:1px solid var(--rule);padding:24px 0}
          .step:last-child{border-bottom:0}
          .roman{font-size:48px}
        }

        /* PRINCIPAL */
        .principal-section{background:var(--paper)}
        .p-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:72px;align-items:start}
        .p-portrait{position:relative;aspect-ratio:4/5;background:var(--bone-2);border:1px solid var(--rule-light);overflow:hidden}
        .p-portrait .ph{position:absolute;inset:0;background:linear-gradient(135deg,rgba(184,149,74,.06),rgba(122,31,31,.04)),repeating-linear-gradient(45deg,transparent 0 14px,rgba(20,18,12,.05) 14px 15px);display:grid;place-items:center}
        .ph-inner{text-align:center}
        .ph-label{font-family:var(--serif);font-style:italic;font-size:18px;color:var(--mute);letter-spacing:.04em;text-align:center}
        .ph-spec{font-family:var(--sans);font-size:10px;letter-spacing:.32em;text-transform:uppercase;color:var(--mute);margin-top:8px;text-align:center}
        .p-frame{position:absolute;inset:18px;border:1px solid rgba(184,149,74,.4);pointer-events:none}
        .p-seal{position:absolute;bottom:24px;right:24px;width:88px;height:88px;border:1px solid var(--gold);background:var(--paper);display:grid;place-items:center}
        .p-seal::before{content:"";position:absolute;inset:4px;border:1px solid var(--gold);opacity:.4}
        .seal-inner{display:flex;flex-direction:column;align-items:center;gap:4px;position:relative;z-index:1}
        .seal-mono{font-family:var(--serif);font-style:italic;font-size:30px;line-height:1;color:var(--oxblood)}
        .seal-est{font-family:var(--sans);font-size:8px;letter-spacing:.32em;color:var(--gold-deep);text-transform:uppercase}
        .p-vert{position:absolute;left:24px;bottom:24px;writing-mode:vertical-rl;transform:rotate(180deg);font-family:var(--sans);font-size:10px;letter-spacing:.4em;text-transform:uppercase;color:var(--mute)}
        .p-quote{font-family:var(--serif);font-style:italic;font-weight:300;font-size:26px;line-height:1.45;color:var(--ink);margin-top:32px;max-width:42ch;border-left:2px solid var(--gold);padding-left:24px}
        .creds{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:36px;padding-top:28px;border-top:1px solid var(--rule-light)}
        .cred .k{font-family:var(--sans);font-size:10px;letter-spacing:.36em;text-transform:uppercase;color:var(--mute);font-weight:600}
        .cred .v{font-family:var(--serif);font-size:20px;color:var(--ink);margin-top:6px;line-height:1.3}
        .cred .v em{font-style:italic;color:var(--oxblood)}
        @media (max-width:900px){
          .p-grid{grid-template-columns:1fr;gap:48px}
          .p-portrait{max-width:420px}
          .p-quote{font-size:21px}
          .creds{grid-template-columns:1fr 1fr}
        }
        @media (max-width:540px){
          .creds{grid-template-columns:1fr;gap:16px}
          .p-quote{font-size:18px;padding-left:16px}
        }

        /* INSIGHTS */
        .insights-section{background:var(--obsidian)}
        .ins-list .ll-meta{font-family:var(--sans);font-size:10.5px;letter-spacing:.32em;text-transform:uppercase;color:var(--mute);margin-bottom:8px}
        .ins-list .ll-t{font-family:var(--serif);font-weight:300;font-size:32px;line-height:1.1;letter-spacing:-.01em;color:var(--bone)}
        .ins-list .ll-t em{font-style:italic;color:var(--gold)}
        @media (max-width:680px){.ins-list .ll-t{font-size:24px}}

        /* CONTACT CTA */
        .contact-section{background:var(--paper)}
        .c-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:80px;align-items:center}
        .c-card{background:var(--obsidian);color:var(--bone);padding:48px 40px;border:1px solid var(--gold);position:relative}
        .c-card::before{content:"";position:absolute;inset:8px;border:1px solid rgba(184,149,74,.4);pointer-events:none}
        .c-row{padding:22px 0;border-bottom:1px solid var(--rule)}
        .c-row:last-of-type{border-bottom:0}
        .c-k{font-family:var(--sans);font-size:10.5px;letter-spacing:.36em;text-transform:uppercase;color:var(--gold);font-weight:600}
        .c-v{font-family:var(--serif);font-size:22px;color:var(--bone);margin-top:6px;font-weight:400}
        .c-v em{font-style:italic;color:var(--gold-soft)}
        .c-card .btn{background:var(--bone);color:var(--obsidian);border-color:var(--bone)}
        .c-card .btn:hover{background:var(--gold);border-color:var(--gold)}
        @media (max-width:900px){
          .c-grid{grid-template-columns:1fr;gap:0}
          .c-card{order:2}
          .c-right{order:1;padding-bottom:48px}
        }
        @media (max-width:540px){
          .c-card{padding:36px 24px}
          .c-v{font-size:18px}
        }

        /* MOBILE MISC */
        @media (max-width:768px){
          .ped-strip{display:none}
          .pg-header .meta{display:none}
          .hero-simple__h{font-size:clamp(40px,12vw,72px)}
          .a-t{font-size:24px}
          .area{min-height:200px;padding:28px 20px 24px}
        }
        @media (max-width:480px){
          .hero-simple__cta{flex-direction:column;align-items:stretch}
          .hero-simple__cta .btn{text-align:center;justify-content:center}
          .ped-grid{grid-template-columns:1fr}
          .ped-cell{border-right:0!important;border-bottom:1px solid var(--rule-light)}
        }
      `}</style>
    </>
  );
}
