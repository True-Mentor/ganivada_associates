"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    if (forceOpen) {
      setOpen(true);
      return;
    }
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setOpen(true);
    }
  }, [forceOpen]);

  function handleAgree() {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setOpen(false);
    onClose?.();
  }

  function handleDecline() {
    window.location.replace("https://www.barcouncilofindia.org");
  }

  if (!mounted) return null;

  return (
    <Dialog
      open={open}
      modal
      disablePointerDismissal={!forceOpen}
      onOpenChange={(val, details) => {
        if (!val && !forceOpen) {
          // Block Esc key and outside-click dismiss: not negotiable per BCI rules
          if (details.reason === "escape-key" || details.reason === "outside-press") {
            return;
          }
        }
        if (forceOpen && !val) {
          setOpen(false);
          onClose?.();
        }
      }}
    >
      <DialogContent
        className="max-w-2xl w-full mx-4 bg-[#FBF8F1] border border-[#E8DFC9] rounded-lg shadow-2xl"
        showCloseButton={false}
        style={{ maxHeight: "90vh" }}
        aria-describedby="bci-disclaimer-body"
      >
        <DialogHeader className="pb-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#0E3B2E] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <DialogTitle className="text-xl font-semibold text-[#2A2520]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
              Disclaimer &amp; Confirmation
            </DialogTitle>
          </div>
          <Separator className="bg-[#E8DFC9]" />
        </DialogHeader>

        <ScrollArea className="h-[50vh] pr-4" id="bci-disclaimer-body">
          <div className="space-y-4 text-[#4F4843] text-sm leading-relaxed" style={{ fontFamily: "var(--font-instrument-sans), system-ui, sans-serif" }}>
            <p className="font-medium text-[#2A2520]">
              Please read the following carefully before proceeding to access this website.
            </p>

            <p>
              This website has been created solely for the purpose of providing general information
              about <strong>Ganivada &amp; Associates</strong> and is not intended to constitute
              solicitation, invitation, advertisement, or inducement of any sort to any person to
              retain the services of this firm.
            </p>

            <p>
              The information provided on this website is general in nature and does not constitute
              legal advice. Nothing contained herein should be construed as legal opinion or advice
              on any specific facts or circumstances.
            </p>

            <p>
              Access to this website, or any use of the information herein, does not create any
              attorney-client relationship between the user and Ganivada &amp; Associates or any
              of its advocates. An attorney-client relationship is established only upon execution
              of a formal retainer agreement.
            </p>

            <p>
              The firm is not responsible for any consequence of any action taken by the user
              relying on the information provided on this website. All information on this website
              is provided &quot;as is&quot; without warranty of any kind.
            </p>

            <p>
              This website is in compliance with the <strong>Bar Council of India Rules 1975</strong>{" "}
              (as amended) and the 2008 Bar Council of India Resolution on advocates&apos; websites.
              Under the said rules, advocates are prohibited from soliciting work or advertising
              their services, whether directly or indirectly.
            </p>

            <p>
              You hereby confirm that you are seeking information of your own accord and volition
              and that no information has been provided to you, and no advertisement or solicitation
              has been made by or on behalf of Ganivada &amp; Associates.
            </p>

            <p>
              The information on this website is governed by and construed in accordance with the
              laws of India. Any dispute relating to the use of this website shall be subject to the
              exclusive jurisdiction of the courts at Visakhapatnam, Andhra Pradesh, India.
            </p>

            <p className="font-medium text-[#2A2520] border-t border-[#E8DFC9] pt-4 mt-4">
              By clicking &ldquo;I Agree&rdquo; below, you acknowledge that you have read, understood,
              and accept the above disclaimer in its entirety, and that you are accessing this website
              of your own free will.
            </p>
          </div>
        </ScrollArea>

        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-[#E8DFC9] mt-2">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="border-[#E8DFC9] text-[#4F4843] hover:bg-[#F4EFE3] hover:text-[#2A2520] flex-1 sm:flex-none"
          >
            I Decline
          </Button>
          <Button
            onClick={handleAgree}
            className="bg-[#0E3B2E] hover:bg-[#155745] text-[#FBF8F1] flex-1 sm:flex-auto font-semibold"
          >
            I Agree: Proceed to Website
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
