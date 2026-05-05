"use client";

import { useState } from "react";
import Link from "next/link";
import { firm } from "@/data/firm";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

const practiceOptions = [
  "Civil Law",
  "Criminal Law",
  "Arbitration & ADR",
  "Real Estate / Property",
  "Contract / Commercial",
  "PMLA & Financial",
  "Family Law",
  "International Commercial",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Consultation Request: ${data.get("practice-area") || "General"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nPractice Area: ${data.get("practice-area") || "Not specified"}\n\nSummary:\n${data.get("summary")}`
    );
    window.location.href = `mailto:${firm.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="pg-header">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>Contact</span></div>
          <h1 data-enter="">Write to <em>chambers.</em></h1>
          <p className="lede" data-enter="" style={{ marginTop: "36px" }}>
            A confidential conversation, a written opinion, or a second view: chambers are open to instruction. We respond within two working days.
          </p>
          <div className="meta">VII<br />Contact</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="ct-grid reveal-stagger">
            {submitted ? (
              <div className="ct-form">
                <div className="kicker" style={{ marginBottom: "24px" }}>Enquiry received</div>
                <h2 className="h2" style={{ fontSize: "clamp(28px,3vw,40px)", marginBottom: "24px" }}>
                  Thank you: chambers will respond within two working days.
                </h2>
                <p className="body">Your enquiry has been submitted via email. If you experience any issue, please write directly to <em>{firm.contact.email}</em>.</p>
                <Link className="btn" href="/" style={{ marginTop: "36px", display: "inline-flex" }}>Return Home <span className="arr">→</span></Link>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="kicker" style={{ marginBottom: "24px" }}>Confidential intake</div>
                <h2 className="h2" style={{ fontSize: "clamp(28px,3vw,40px)", marginBottom: "36px" }}>Tell us about the <em>matter.</em></h2>

                <label className="ct-field">
                  <span className="ct-l">i · Your name</span>
                  <input type="text" name="name" required placeholder="Full legal name" />
                </label>

                <div className="ct-row">
                  <label className="ct-field">
                    <span className="ct-l">ii · Email</span>
                    <input type="email" name="email" required placeholder="you@domain.com" />
                  </label>
                  <label className="ct-field">
                    <span className="ct-l">iii · Telephone</span>
                    <input type="tel" name="phone" placeholder="+91 ··· ··· ····" />
                  </label>
                </div>

                <label className="ct-field">
                  <span className="ct-l">iv · Nature of matter</span>
                  <select name="practice-area" required>
                    <option value="">Select an area</option>
                    {practiceOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </label>

                <label className="ct-field">
                  <span className="ct-l">v · Brief summary</span>
                  <textarea name="summary" rows={6} required placeholder="A few lines about the parties, the dispute, and the relief sought. Confidential: read only by chambers."></textarea>
                </label>

                <div className="ct-disc">
                  By submitting this form, I confirm that I am seeking information of my own accord, that no advertisement or solicitation has been made by Ganivada &amp; Associates, and that no attorney–client relationship is created by this enquiry.
                </div>

                <button className="btn" type="submit" style={{ marginTop: "28px" }}>Submit Enquiry <span className="arr">→</span></button>
              </form>
            )}

            <aside className="ct-aside">
              <div className="kicker">Chambers</div>
              <h3 className="h2" style={{ fontSize: "32px", marginTop: "8px" }}>Visakhapatnam<br /><em>Andhra Pradesh</em></h3>
              <div className="rule" style={{ margin: "32px 0" }}></div>

              <div className="ct-line"><div className="ct-k">Telephone</div><div className="ct-v">By appointment</div></div>
              <div className="ct-line"><div className="ct-k">Email</div><div className="ct-v"><em>contact@</em>ganivadaassociates.com</div></div>
              <div className="ct-line"><div className="ct-k">Hours</div><div className="ct-v">Mon: Fri · 9 AM <em>—</em> 6 PM</div></div>
              <div className="ct-line"><div className="ct-k">Response time</div><div className="ct-v">Within 2 working days</div></div>

              <div className="rule" style={{ margin: "32px 0" }}></div>

              <div className="ct-courts">
                <div className="kicker" style={{ marginBottom: "14px" }}>Forums of practice</div>
                <ul>
                  <li><span>i</span> High Court of Andhra Pradesh, Amaravati</li>
                  <li><span>ii</span> High Court of Telangana, Hyderabad</li>
                  <li><span>iii</span> District &amp; Sessions Courts, Visakhapatnam</li>
                  <li><span>iv</span> Tribunals &amp; Quasi-judicial bodies</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <WhatsAppFab />

      <style>{`
        .ct-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:80px;align-items:start}
        .ct-form{padding:48px;border:1px solid var(--rule);background:var(--obsidian-2);position:relative}
        .ct-field{display:block;margin-bottom:24px}
        .ct-l{display:block;font-family:var(--sans);font-size:10.5px;letter-spacing:.32em;text-transform:uppercase;color:var(--gold);font-weight:600;margin-bottom:10px}
        .ct-form input,.ct-form select,.ct-form textarea{width:100%;background:transparent;border:0;border-bottom:1px solid var(--rule);padding:12px 0;color:var(--bone);font-family:var(--serif);font-size:18px;font-weight:300;outline:0;transition:border-color .3s}
        .ct-form input:focus,.ct-form select:focus,.ct-form textarea:focus{border-bottom-color:var(--gold)}
        .ct-form textarea{resize:vertical;font-family:var(--sans);font-size:15px;line-height:1.6;border:1px solid var(--rule);padding:16px}
        .ct-form textarea:focus{border-color:var(--gold)}
        .ct-form select{appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--gold) 50%),linear-gradient(135deg,var(--gold) 50%,transparent 50%);background-position:calc(100% - 16px) center,calc(100% - 11px) center;background-size:5px 5px;background-repeat:no-repeat}
        .ct-form select option{background:var(--obsidian);color:var(--bone)}
        .ct-row{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .ct-disc{margin-top:24px;padding:18px;background:rgba(0,0,0,.3);border-left:2px solid var(--gold);font-family:var(--sans);font-size:12px;line-height:1.6;color:var(--bone-2)}

        .ct-line{padding:14px 0;border-bottom:1px solid var(--rule)}
        .ct-line:last-of-type{border-bottom:0}
        .ct-k{font-family:var(--sans);font-size:10px;letter-spacing:.32em;text-transform:uppercase;color:var(--mute);font-weight:600}
        .ct-v{font-family:var(--serif);font-size:20px;color:var(--bone);margin-top:4px;font-weight:300}
        .ct-v em{font-style:italic;color:var(--gold-soft)}
        .ct-courts ul{list-style:none}
        .ct-courts li{display:grid;grid-template-columns:24px 1fr;gap:12px;padding:8px 0;font-family:var(--serif);font-size:16px;color:var(--bone-2);font-weight:300}
        .ct-courts li span{font-style:italic;color:var(--gold)}
        @media (max-width:900px){.ct-grid{grid-template-columns:1fr;gap:48px}.ct-form{padding:28px}.ct-row{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
