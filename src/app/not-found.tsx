import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="wrap">
          <div style={{ maxWidth: "48ch" }}>
            <div className="numlabel" style={{ fontSize: "80px", lineHeight: 1, marginBottom: "24px", color: "var(--rule)" }}>404</div>
            <h1 className="h1">Page not<br /><em>found.</em></h1>
            <p className="lede" style={{ marginTop: "20px" }}>
              The page you are looking for does not exist or has been moved.
            </p>
            <div style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link className="btn" href="/">← Return to Home</Link>
              <Link className="btn btn--ghost" href="/contact">Contact Chambers</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
