import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getTeamMemberBySlug, getAllTeamMembers } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export async function generateStaticParams() {
  const members = getAllTeamMembers();
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);
  if (!member) return {};
  const m = member as unknown as { name: string; designation: string };
  return buildMetadata({
    title: m.name,
    description: `${m.name}: ${m.designation} at Ganivada & Associates.`,
    path: `/team/${slug}`,
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);
  if (!member) notFound();

  const m = member as unknown as {
    name: string;
    designation: string;
    photo: string;
    practiceAreas: string[];
    education: { institution: string; degree: string; year: string; grade?: string; location?: string }[];
    experience: { org: string; role: string; period: string; location?: string; note?: string }[];
    memberships: string[];
    languages: string[];
    email?: string;
    linkedin?: string;
    content: string;
  };

  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/team">Chambers</Link><span className="sep">/</span>
            <span>Principal Advocate</span>
          </div>
          <div className="kicker" style={{ marginBottom: "18px", color: "var(--gold)" }}>Principal Advocate · Founding</div>
          <h1 data-enter="">Sree Prasanna<br />Durga <em>Gayatri.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            Counsel by training, by temperament, and by inheritance.<br />
            Founding Principal of Ganivada &amp; Associates.
          </p>
          <div className="meta">IV · i<br />Profile</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prof-grid reveal-stagger">
            <div className="prof-portrait">
              <div className="prof-ph">
                [ Portrait · Sree Gayatri ]
                <div style={{ fontSize: "10px", letterSpacing: ".32em", textTransform: "uppercase", marginTop: "8px", color: "var(--mute)" }}>portrait · 4 : 5</div>
              </div>
              <div className="prof-frame"></div>
              <div className="prof-seal">
                <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "32px", color: "var(--oxblood)", lineHeight: "1" }}>G</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: "8px", letterSpacing: ".32em", color: "var(--gold-deep)", marginTop: "4px", textTransform: "uppercase" }}>EST · MMXXVI</div>
              </div>
            </div>
            <div className="prof-text">
              <p className="h2" style={{ fontSize: "clamp(28px,3.2vw,40px)", fontWeight: "300" }}>
                A practice rooted in <em>diligence,</em> shaped by exposure to some of India&apos;s <em>most demanding</em> rooms<span style={{ color: "var(--gold)" }}>.</span>
              </p>
              <div
                className="prof-prose"
                dangerouslySetInnerHTML={{ __html: m.content }}
              />

              <div className="prof-quote">
                <span className="q-mark">&ldquo;</span>
                <p>The law is not a fortress. It is a discipline: to be wielded with care, and never against those it was written to protect.</p>
              </div>
            </div>
          </div>

          <div className="rule" style={{ margin: "80px 0 60px" }}></div>

          <div className="cv-grid reveal-stagger">
            {m.education && m.education.length > 0 && (
              <div className="cv-col">
                <div className="kicker" style={{ marginBottom: "32px" }}>Education</div>
                {m.education.map((edu) => (
                  <div className="cv-item" key={edu.institution}>
                    <div className="cv-y">{edu.year}</div>
                    <div className="cv-t">{edu.degree.replace("(Hons.)", "<em>(Hons.)</em>").replace(/&/g, "&amp;")}</div>
                    <div className="cv-d">{edu.institution}{edu.location ? `\n${edu.location}` : ""}{edu.grade ? ` · ${edu.grade}` : ""}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="cv-col">
              <div className="kicker" style={{ marginBottom: "32px" }}>Training &amp; Internships</div>
              {m.experience && m.experience
                .filter((e) => e.role.toLowerCase().includes("intern") || e.role.toLowerCase().includes("virtual"))
                .map((exp) => (
                  <div className="cv-item" key={`${exp.org}-${exp.period}`}>
                    <div className="cv-y">{exp.period}</div>
                    <div className="cv-t">{exp.org}</div>
                    <div className="cv-d">{exp.note || ""}{exp.location ? `\n${exp.location}` : ""}</div>
                  </div>
                ))
              }
            </div>

            <div className="cv-col">
              <div className="kicker" style={{ marginBottom: "32px" }}>Practice</div>
              {m.experience && m.experience
                .filter((e) => !e.role.toLowerCase().includes("intern") && !e.role.toLowerCase().includes("virtual"))
                .map((exp) => (
                  <div className="cv-item" key={`${exp.org}-${exp.period}`}>
                    <div className="cv-y">{exp.period}</div>
                    <div className="cv-t">{exp.org}</div>
                    <div className="cv-d">{exp.role}{exp.location ? `\n${exp.location}` : ""}</div>
                  </div>
                ))
              }
              {m.memberships && m.memberships.length > 0 && (
                <div className="cv-item">
                  <div className="cv-y">Bar</div>
                  <div className="cv-t">{m.memberships[0]}</div>
                  <div className="cv-d">Enrolled 2023</div>
                </div>
              )}
            </div>
          </div>

          <div className="rule" style={{ margin: "80px 0 60px" }}></div>

          <div className="prof-foot reveal">
            <div>
              <div className="kicker">Languages</div>
              <p className="h3" style={{ marginTop: "8px", fontSize: "24px" }}>
                {m.languages?.join(" · ").replace("Hindi", "<em>Hindi</em>")}
              </p>
            </div>
            <div>
              <div className="kicker">Bar Council Number</div>
              <p className="h3" style={{ marginTop: "8px", fontSize: "24px" }}>AP/<em>####</em>/2023</p>
            </div>
            <Link className="btn" href="/contact">
              Engage Counsel <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .prof-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start}
        .prof-portrait{aspect-ratio:4/5;background:var(--obsidian-2);position:relative;border:1px solid var(--rule)}
        .prof-ph{position:absolute;inset:0;display:grid;place-items:center;color:var(--mute);font-family:var(--serif);font-style:italic;background:repeating-linear-gradient(45deg,transparent 0 14px,rgba(184,149,74,.04) 14px 15px);text-align:center}
        .prof-frame{position:absolute;inset:14px;border:1px solid rgba(184,149,74,.4)}
        .prof-seal{position:absolute;bottom:18px;right:18px;width:80px;height:80px;background:var(--bone);border:1px solid var(--gold);display:grid;place-items:center;text-align:center}
        .prof-prose{margin-top:32px;font-family:var(--serif);font-size:16.5px;line-height:1.7;color:var(--bone-2);max-width:62ch}
        .prof-prose p{margin-bottom:18px}
        .prof-prose em{font-style:italic;color:var(--gold-soft)}
        .prof-quote{margin-top:48px;padding:36px 0 0;border-top:1px solid var(--rule);position:relative;display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start}
        .q-mark{font-family:var(--serif);font-style:italic;font-size:120px;line-height:.7;color:var(--gold);font-weight:300}
        .prof-quote p{font-family:var(--serif);font-style:italic;font-size:24px;line-height:1.45;color:var(--bone);font-weight:300;max-width:38ch}
        .cv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:60px}
        .cv-item{padding:18px 0;border-bottom:1px solid var(--rule)}
        .cv-item:last-child{border-bottom:0}
        .cv-y{font-family:var(--sans);font-size:10.5px;letter-spacing:.32em;text-transform:uppercase;color:var(--gold);font-weight:600;margin-bottom:8px}
        .cv-t{font-family:var(--serif);font-size:22px;color:var(--bone);font-weight:400;line-height:1.2}
        .cv-t em{font-style:italic;color:var(--gold-soft)}
        .cv-d{font-family:var(--sans);font-size:13px;color:var(--bone-2);line-height:1.55;margin-top:6px;white-space:pre-line}
        .prof-foot{display:grid;grid-template-columns:1fr 1fr auto;gap:48px;align-items:end}
        .prof-foot .h3 em{font-style:italic;color:var(--gold-soft)}
        @media (max-width:900px){.prof-grid{grid-template-columns:1fr;gap:48px}.cv-grid{grid-template-columns:1fr;gap:32px}.prof-foot{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
