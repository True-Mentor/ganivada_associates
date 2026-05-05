import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Legal commentary, analysis, and updates from Ganivada & Associates on Indian law, practice areas, and developments of note.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>Insights</span></div>
          <h1 data-enter="">From the <em>chambers.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            Notes, commentary, and analysis on Indian law: written for practitioners and clients alike. For informational purposes only.
          </p>
          <div className="meta">V<br />Insights</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {posts.length === 0 ? (
            <div className="ins-empty reveal">
              <div className="numlabel" style={{ fontSize: "64px", lineHeight: 1, marginBottom: "32px" }}>∅</div>
              <h2 className="h2">No essays yet<em>.</em></h2>
              <p className="lede" style={{ marginTop: "20px" }}>
                Insights and legal commentary will appear here. Write to chambers to be notified when new essays are published.
              </p>
              <Link className="btn btn--ghost" href="/contact" style={{ marginTop: "36px", display: "inline-flex" }}>
                Contact Chambers <span className="arr">→</span>
              </Link>
            </div>
          ) : (
            <div className="linklist reveal">
              {posts.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`}>
                  <div>
                    <div className="ll-meta">
                      {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }).replace(/ /g, " · ")}
                      {post.tags?.[0] && <> · {post.tags[0]}</>}
                    </div>
                    <div className="ll-t">{post.title}</div>
                    {post.excerpt && <p style={{ fontFamily: "var(--sans)", fontSize: "14px", color: "var(--mute)", marginTop: "6px", maxWidth: "60ch" }}>{post.excerpt}</p>}
                  </div>
                  <span className="ll-m">Read essay →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .ins-empty { text-align: center; max-width: 48ch; margin: 0 auto; padding: 80px 0; }
      `}</style>
    </>
  );
}
