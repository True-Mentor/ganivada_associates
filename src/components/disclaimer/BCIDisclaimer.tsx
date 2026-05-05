"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ganivada-bci-disclaimer-v1";

interface BCIDisclaimerProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export function BCIDisclaimer({ forceOpen = false, onClose }: BCIDisclaimerProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (forceOpen) { setOpen(true); return; }
    if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
  }, [forceOpen]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleAgree() {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setOpen(false);
    onClose?.();
  }

  function handleDecline() {
    window.location.replace("https://www.barcouncilofindia.org");
  }

  if (!mounted || !open) return null;

  return (
    <>
      <div className="bci-overlay" aria-hidden="true" />

      <div
        className="bci-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bci-title"
        aria-describedby="bci-body"
      >
        {/* Header */}
        <div className="bci-head">
          <div className="bci-seal">G</div>
          <div>
            <div className="kicker" style={{ marginBottom: "6px" }}>Bar Council of India Notice</div>
            <h2 className="bci-title" id="bci-title">Disclaimer &amp; Confirmation</h2>
          </div>
        </div>

        <div className="bci-rule" />

        {/* Body */}
        <div className="bci-body" id="bci-body">
          <p className="bci-lead">Please read carefully before accessing this website.</p>

          <p>This website has been created solely for the purpose of providing general information about <strong>Ganivada &amp; Associates</strong> and is not intended to constitute solicitation, invitation, advertisement, or inducement of any sort to any person to retain the services of this firm.</p>

          <p>The information provided on this website is general in nature and does not constitute legal advice. Nothing contained herein should be construed as legal opinion or advice on any specific facts or circumstances.</p>

          <p>Access to this website does not create any attorney-client relationship between the user and Ganivada &amp; Associates or any of its advocates. Such a relationship is established only upon execution of a formal retainer agreement.</p>

          <p>This website complies with the <strong>Bar Council of India Rules 1975</strong> (as amended) and the 2008 BCI Resolution on advocates' websites. Under these rules, advocates are prohibited from soliciting work or advertising, whether directly or indirectly.</p>

          <p>You hereby confirm that you are seeking information of your own accord and volition, and that no solicitation or advertisement has been made by or on behalf of Ganivada &amp; Associates.</p>

          <p className="bci-confirm">By clicking "I Agree" you acknowledge that you have read, understood, and accept this disclaimer in its entirety, and that you are accessing this website of your own free will.</p>
        </div>

        <div className="bci-rule" />

        {/* Footer */}
        <div className="bci-foot">
          <button className="bci-btn bci-btn--ghost" onClick={handleDecline}>
            I Decline
          </button>
          <button className="bci-btn bci-btn--primary" onClick={handleAgree}>
            I Agree. Proceed <span style={{ fontStyle: "normal" }}>→</span>
          </button>
        </div>
      </div>

      <style>{`
        .bci-overlay {
          position: fixed; inset: 0; z-index: 90;
          background: rgba(10,10,10,.88);
          backdrop-filter: blur(4px);
        }
        .bci-modal {
          position: fixed; z-index: 91;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: min(640px, calc(100vw - 32px));
          max-height: min(86vh, 720px);
          background: var(--obsidian-2);
          border: 1px solid var(--rule-light);
          display: flex; flex-direction: column;
          overflow: hidden;
        }
        .bci-modal::before {
          content: ""; position: absolute; inset: 5px;
          border: 1px solid rgba(184,149,74,.15);
          pointer-events: none; z-index: 0;
        }
        .bci-head {
          display: flex; align-items: center; gap: 20px;
          padding: 28px 32px 24px;
          position: relative; z-index: 1; flex-shrink: 0;
        }
        .bci-seal {
          width: 48px; height: 48px; flex-shrink: 0;
          border: 1px solid var(--gold);
          display: grid; place-items: center;
          font-family: var(--serif); font-style: italic;
          font-size: 22px; color: var(--gold);
          position: relative;
        }
        .bci-seal::before {
          content: ""; position: absolute; inset: 3px;
          border: 1px solid var(--gold); opacity: .3;
        }
        .bci-title {
          font-family: var(--serif);
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 400; color: var(--bone);
          letter-spacing: -.01em; line-height: 1.2;
        }
        .bci-rule { height: 1px; background: var(--rule-light); flex-shrink: 0; }
        .bci-body {
          flex: 1; overflow-y: auto; padding: 24px 32px;
          position: relative; z-index: 1;
          scrollbar-width: thin;
          scrollbar-color: var(--rule-light) transparent;
        }
        .bci-body p {
          font-family: var(--sans);
          font-size: 14px; line-height: 1.75;
          color: var(--bone-2); margin-bottom: 14px;
        }
        .bci-body strong { color: var(--bone); font-weight: 500; }
        .bci-lead {
          font-family: var(--sans) !important;
          font-size: 13px !important;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--mute) !important;
          margin-bottom: 20px !important;
        }
        .bci-confirm {
          border-top: 1px solid var(--rule-light);
          padding-top: 16px;
          margin-top: 8px;
          color: var(--bone) !important;
          font-style: italic;
        }
        .bci-foot {
          display: flex; align-items: center; justify-content: flex-end;
          gap: 12px; padding: 20px 32px;
          position: relative; z-index: 1; flex-shrink: 0;
        }
        .bci-btn {
          font-family: var(--sans);
          font-size: 12px; font-weight: 500;
          letter-spacing: .18em; text-transform: uppercase;
          padding: 12px 24px; cursor: pointer;
          transition: all .25s;
        }
        .bci-btn--ghost {
          background: none;
          border: 1px solid var(--rule-light);
          color: var(--mute);
        }
        .bci-btn--ghost:hover {
          border-color: var(--bone-2);
          color: var(--bone-2);
        }
        .bci-btn--primary {
          background: var(--gold);
          border: 1px solid var(--gold);
          color: var(--obsidian);
          font-style: italic;
        }
        .bci-btn--primary:hover {
          background: var(--gold-soft);
          border-color: var(--gold-soft);
        }
        html[data-theme="light"] .bci-modal {
          background: var(--paper);
          border-color: rgba(58,53,43,.2);
        }
        html[data-theme="light"] .bci-modal::before {
          border-color: rgba(107,24,24,.12);
        }
        html[data-theme="light"] .bci-title { color: var(--ink); }
        html[data-theme="light"] .bci-body p { color: #4F4843; }
        html[data-theme="light"] .bci-body strong { color: var(--ink); }
        html[data-theme="light"] .bci-confirm { color: var(--ink) !important; border-top-color: rgba(58,53,43,.2); }
        html[data-theme="light"] .bci-rule { background: rgba(58,53,43,.15); }
        html[data-theme="light"] .bci-btn--ghost { border-color: rgba(58,53,43,.3); color: #6E6655; }
        html[data-theme="light"] .bci-btn--ghost:hover { border-color: var(--ink); color: var(--ink); }
        @media (max-width: 480px) {
          .bci-head { padding: 20px; gap: 14px; }
          .bci-body { padding: 18px 20px; }
          .bci-foot { padding: 16px 20px; flex-direction: column; }
          .bci-btn { width: 100%; text-align: center; padding: 14px; }
        }
      `}</style>
    </>
  );
}
