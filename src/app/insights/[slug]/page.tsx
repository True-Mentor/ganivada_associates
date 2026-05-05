import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const p = post as unknown as { title: string; excerpt: string; ogImage?: string };
  return buildMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/insights/${slug}`,
    image: p.ogImage,
  });
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const p = post as {
    title: string;
    date: string;
    author: string;
    tags: string[];
    excerpt: string;
    readingTime: string;
    content: string;
    slug: string;
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: { "@type": "Person", name: "Ganivada Sree Prasanna Durga Gayatri" },
    publisher: { "@type": "Organization", name: "Ganivada & Associates" },
  };

  const formattedDate = new Date(p.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/insights">Insights</Link>
            <span className="sep">/</span>
            <span>{p.title}</span>
          </div>
          <h1 data-enter="">{p.title}</h1>
          <div className="ins-meta" data-enter="">
            <span>{formattedDate}</span>
            {p.tags?.[0] && <><span className="sep">·</span><span>{p.tags[0]}</span></>}
            {p.readingTime && <><span className="sep">·</span><span>{p.readingTime}</span></>}
          </div>
          {p.excerpt && (
            <p className="lede" data-enter="" style={{ marginTop: "24px" }}>{p.excerpt}</p>
          )}
          <div className="meta">V<br />Essay</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="ins-layout">
            <aside className="ins-aside">
              {p.tags && p.tags.length > 0 && (
                <div className="ins-tags">
                  <div className="kicker" style={{ marginBottom: "12px" }}>Topics</div>
                  {p.tags.map((tag) => (
                    <span key={tag} className="ins-tag">{tag}</span>
                  ))}
                </div>
              )}
              <div style={{ marginTop: "32px" }}>
                <div className="kicker" style={{ marginBottom: "12px" }}>Author</div>
                <p style={{ fontFamily: "var(--serif)", fontSize: "15px", color: "var(--bone)", lineHeight: 1.5 }}>
                  Ganivada Sree Prasanna Durga Gayatri
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "12px", color: "var(--mute)", marginTop: "4px" }}>
                  Principal Advocate
                </p>
              </div>
              <Link
                href="/insights"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "40px",
                  fontFamily: "var(--sans)",
                  fontSize: "12px",
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                }}
              >
                ← All essays
              </Link>
            </aside>

            <article className="ins-prose reveal" dangerouslySetInnerHTML={{ __html: p.content }} />
          </div>

          <div className="ins-disc reveal">
            <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. Do not act on the basis of this article without consulting a qualified advocate about your specific situation.
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .ins-meta { display: flex; align-items: center; gap: 8px; font-family: var(--sans); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--mute); margin-top: 20px; flex-wrap: wrap; }
        .ins-meta .sep { color: var(--rule); }
        .ins-layout { display: grid; grid-template-columns: 220px 1fr; gap: 64px; align-items: start; }
        .ins-aside { position: sticky; top: 100px; }
        .ins-tags { display: flex; flex-direction: column; gap: 6px; }
        .ins-tag { display: inline-block; font-family: var(--sans); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--gold); border: 1px solid var(--gold); padding: 4px 10px; width: fit-content; }
        .ins-prose { font-family: var(--serif); font-size: 17px; line-height: 1.8; color: var(--bone-2); }
        .ins-prose h2 { font-family: var(--serif); font-size: clamp(1.25rem, 2.5vw, 1.6rem); font-weight: 400; color: var(--bone); margin: 2em 0 .75em; line-height: 1.3; }
        .ins-prose h3 { font-family: var(--serif); font-size: 1.2rem; font-weight: 400; color: var(--bone); margin: 1.75em 0 .6em; }
        .ins-prose p { margin-bottom: 1.5em; }
        .ins-prose strong { color: var(--bone); font-weight: 600; }
        .ins-prose em { font-style: italic; }
        .ins-prose a { color: var(--gold); border-bottom: 1px solid var(--gold-soft); }
        .ins-prose a:hover { color: var(--gold-soft); }
        .ins-prose blockquote { border-left: 3px solid var(--gold); padding-left: 24px; margin: 2em 0; font-style: italic; color: var(--bone); font-size: 1.1em; }
        .ins-prose ul, .ins-prose ol { padding-left: 24px; margin-bottom: 1.5em; }
        .ins-prose li { margin-bottom: .5em; }
        .ins-prose hr { border: none; border-top: 1px solid var(--rule); margin: 3em 0; }
        .ins-disc { margin-top: 64px; padding: 20px 24px; border: 1px solid var(--rule); font-family: var(--sans); font-size: 13px; color: var(--mute); line-height: 1.7; }
        .ins-disc strong { color: var(--bone-2); }
        @media (max-width: 900px) {
          .ins-layout { grid-template-columns: 1fr; gap: 40px; }
          .ins-aside { position: static; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; }
          .ins-tags { flex-direction: row; }
        }
      `}</style>
    </>
  );
}
