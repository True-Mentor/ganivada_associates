import Link from "next/link";

export function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="name">Ganivada <em>&amp;</em> Associates</div>
              <p>A boutique chambers in Visakhapatnam, advising on civil, criminal, commercial, and property matters across India.</p>
              <span className="skt">धर्मो रक्षति रक्षितः</span>
            </div>
            <div className="footer__col">
              <h4>Practice</h4>
              <Link href="/practice-areas/civil-law">Civil &amp; Criminal</Link>
              <Link href="/practice-areas/arbitration">Arbitration &amp; ADR</Link>
              <Link href="/practice-areas/real-estate-law">Property &amp; Real Estate</Link>
              <Link href="/practice-areas/pmla">PMLA &amp; Commercial</Link>
              <Link href="/practice-areas">All Areas →</Link>
            </div>
            <div className="footer__col">
              <h4>Chambers</h4>
              <Link href="/about">About</Link>
              <Link href="/vision-mission">Vision &amp; Mission</Link>
              <Link href="/team">The Team</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/insights">Insights</Link>
            </div>
            <div className="footer__col">
              <h4>Legal</h4>
              <Link href="/terms">Terms of Engagement</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/resources">Client Resources</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__disc">Per Bar Council of India Rules 1975 (as amended) and the 2008 BCI Resolution, advocates may not solicit work or advertise. By accessing this site you confirm there has been no solicitation, invitation, or inducement. © 2026 Ganivada &amp; Associates · All rights reserved.</p>
            <div>Visakhapatnam · India</div>
          </div>
        </div>
      </footer>
    </>
  );
}
