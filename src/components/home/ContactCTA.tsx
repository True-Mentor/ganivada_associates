import Link from "next/link";
import { firm } from "@/data/firm";

export function ContactCTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="c-grid reveal">
          <div className="c-card">
            <div className="kicker">Next Steps</div>
            <h2 className="h2" style={{ marginTop: "20px" }}>Have a matter<br /><em>to discuss?</em></h2>
            <p style={{ fontFamily: "var(--sans)", fontSize: "16px", color: "var(--bone-2)", lineHeight: 1.7, marginTop: "20px", maxWidth: "44ch" }}>
              Schedule a confidential consultation. We respond to all enquiries within 24 business hours.
            </p>
            <div style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link className="btn" href="/contact">Book consultation <span className="arr">→</span></Link>
              <a href={`tel:${firm.contact.phone}`} style={{ fontFamily: "var(--sans)", fontSize: "13px", color: "var(--mute)", letterSpacing: ".05em" }}>{firm.contact.phone}</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .c-grid { display: grid; }
        .c-card { border: 1px solid var(--rule); padding: 56px 48px; position: relative; }
        .c-card::before { content: ""; position: absolute; inset: 6px; border: 1px solid var(--rule-light); pointer-events: none; }
        @media (max-width: 600px) { .c-card { padding: 40px 24px; } }
      `}</style>
    </section>
  );
}
