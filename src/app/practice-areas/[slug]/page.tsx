import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getPracticeAreaBySlug, getAllPracticeAreas } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { practiceAreas as practiceAreasData } from "@/data/practiceAreas";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export async function generateStaticParams() {
  const areas = getAllPracticeAreas();
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await getPracticeAreaBySlug(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.title,
    description: area.summary,
    path: `/practice-areas/${slug}`,
  });
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = await getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const relatedAreas = area.related
    ? practiceAreasData.filter((a) => area.related!.includes(a.slug))
    : [];

  const areaIndex = practiceAreasData.findIndex((a) => a.slug === slug);
  const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi"];
  const roman = areaIndex >= 0 ? romanNumerals[areaIndex] : "";

  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/practice-areas">Practice</Link><span className="sep">/</span>
            <span>{area.title}</span>
          </div>
          {roman && <div className="kicker" style={{ marginBottom: "18px", color: "var(--gold)" }}>Practice Area · {roman}</div>}
          <h1 data-enter="">{area.title}<em>.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>{area.summary}</p>
          <div className="meta">III · {roman}<br />{area.title}</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="pd-grid reveal">
            <aside className="pd-aside">
              <div className="kicker">In this area</div>
              <ul className="pd-toc">
                <li><a href="#overview">Overview</a></li>
                {area.faqs && area.faqs.length > 0 && <li><a href="#faq">Frequently asked</a></li>}
                <li><a href="#engage">Engage counsel</a></li>
              </ul>
              <div className="rule" style={{ margin: "32px 0" }}></div>
              <div className="kicker">Lead Counsel</div>
              <div className="pd-lead" style={{ marginTop: "14px" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "20px", color: "var(--bone)" }}>
                  Adv. Sree <em style={{ color: "var(--gold)" }}>Gayatri</em>
                </div>
                <div style={{ fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".28em", textTransform: "uppercase", color: "var(--mute)", marginTop: "6px" }}>
                  Founding Principal
                </div>
              </div>
              {relatedAreas.length > 0 && (
                <>
                  <div className="rule" style={{ margin: "32px 0" }}></div>
                  <div className="kicker" style={{ marginBottom: "14px" }}>Related areas</div>
                  <ul style={{ listStyle: "none" }}>
                    {relatedAreas.map((a) => (
                      <li key={a.slug} style={{ borderBottom: "1px solid var(--rule)", padding: "10px 0" }}>
                        <Link href={`/practice-areas/${a.slug}`} style={{ fontFamily: "var(--serif)", fontSize: "16px", color: "var(--bone-2)" }}>
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </aside>

            <div className="pd-body">
              <div id="overview">
                <div
                  className="pd-prose"
                  dangerouslySetInnerHTML={{ __html: area.content }}
                />
              </div>

              {area.faqs && area.faqs.length > 0 && (
                <div id="faq" style={{ marginTop: "64px" }}>
                  <h2 className="h2" style={{ fontSize: "clamp(28px,3vw,40px)", marginBottom: "32px" }}>
                    Frequently <em>asked.</em>
                  </h2>
                  <div className="pd-faqs">
                    {area.faqs.map((faq, i) => (
                      <details key={i} className="pd-faq">
                        <summary className="pd-faq-q">
                          <span className="numlabel" style={{ marginRight: "18px", flexShrink: 0 }}>{i + 1}</span>
                          {faq.q}
                          <span className="pd-faq-icon">+</span>
                        </summary>
                        <div className="pd-faq-a">{faq.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              <div id="engage" style={{ marginTop: "64px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link className="btn" href="/contact">
                  Engage on this Matter <span className="arr">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/practice-areas">
                  Other Practice Areas <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .pd-grid{display:grid;grid-template-columns:260px 1fr;gap:80px;align-items:start}
        .pd-aside{position:sticky;top:120px}
        .pd-toc{list-style:none;margin-top:18px}
        .pd-toc a{display:block;padding:10px 0;border-bottom:1px solid var(--rule);font-family:var(--serif);font-size:17px;color:var(--bone-2);transition:all .3s}
        .pd-toc a:hover{color:var(--gold);padding-left:8px}
        .pd-prose{font-family:var(--serif);font-size:17px;line-height:1.7;color:var(--bone-2)}
        .pd-prose h2{font-family:var(--serif);font-size:clamp(24px,2.5vw,36px);font-weight:300;color:var(--bone);margin-top:56px;margin-bottom:20px;letter-spacing:-.01em}
        .pd-prose h3{font-family:var(--serif);font-size:22px;font-weight:400;color:var(--bone);margin-top:36px;margin-bottom:14px}
        .pd-prose p{margin-bottom:18px}
        .pd-prose em{font-style:italic;color:var(--gold-soft)}
        .pd-prose strong{color:var(--bone);font-weight:600}
        .pd-prose ul{list-style:none;margin-top:24px;counter-reset:li-counter}
        .pd-prose ul li{display:flex;align-items:baseline;gap:16px;padding:14px 0;border-bottom:1px solid var(--rule);font-size:17px;line-height:1.6}
        .pd-prose ul li::before{content:counter(li-counter);counter-increment:li-counter;font-family:var(--serif);font-style:italic;color:var(--gold);font-size:15px;flex-shrink:0;width:20px;text-align:right}
        .pd-prose ol{list-style:none;counter-reset:li-counter;margin-top:24px}
        .pd-prose ol li{display:flex;align-items:baseline;gap:16px;padding:14px 0;border-bottom:1px solid var(--rule);font-size:17px;line-height:1.6}
        .pd-prose ol li::before{content:counter(li-counter);counter-increment:li-counter;font-family:var(--serif);font-style:italic;color:var(--gold);font-size:15px;flex-shrink:0;width:20px;text-align:right}
        .pd-faqs{border-top:1px solid var(--rule)}
        .pd-faq{border-bottom:1px solid var(--rule)}
        .pd-faq-q{list-style:none;display:flex;align-items:flex-start;gap:18px;padding:20px 0;font-family:var(--serif);font-size:19px;color:var(--bone);cursor:pointer;user-select:none}
        .pd-faq-q::-webkit-details-marker{display:none}
        .pd-faq-icon{margin-left:auto;font-family:var(--sans);font-size:20px;color:var(--gold);flex-shrink:0;transition:transform .3s}
        details[open] .pd-faq-icon{transform:rotate(45deg)}
        .pd-faq-a{padding:0 0 20px 46px;font-family:var(--sans);font-size:15px;line-height:1.65;color:var(--bone-2)}
        @media (max-width:900px){.pd-grid{grid-template-columns:1fr;gap:48px}.pd-aside{position:static}}
      `}</style>
    </>
  );
}
