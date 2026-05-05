import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { firm } from "@/data/firm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF8F1] py-20 md:py-28 lg:py-32">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#14110F 1px, transparent 1px), linear-gradient(to right, #14110F 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left: text */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#B8954A] mb-5" style={{ fontFamily: "var(--font-instrument-sans), system-ui, sans-serif" }}>
              Advocates &amp; Legal Consultants · Visakhapatnam
            </p>
            <h1 className="display-xl text-[#2A2520] mb-6">
              {firm.tagline}
            </h1>
            <p className="lead mb-8">
              A boutique chambers in Visakhapatnam advising on civil, criminal, commercial,
              and property matters across India. Practising at High Courts, Trial Courts, and
              Tribunals in Andhra Pradesh and Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="bg-[#0E3B2E] hover:bg-[#155745] text-[#FBF8F1] font-semibold text-base px-8"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                render={<Link href="/practice-areas" />}
                variant="outline"
                size="lg"
                className="border-[#0E3B2E] text-[#0E3B2E] hover:bg-[#F4EFE3] font-semibold text-base px-8"
              >
                Explore Practice Areas
              </Button>
            </div>
          </div>

          {/* Right: monogram seal */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Outer ring */}
              <svg
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke="#B8954A"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  opacity="0.4"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="108"
                  stroke="#0E3B2E"
                  strokeWidth="1"
                  opacity="0.15"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="#0E3B2E"
                  opacity="0.06"
                />
                {/* Scale / balance motif */}
                <line x1="128" y1="90" x2="128" y2="145" stroke="#0E3B2E" strokeWidth="2" opacity="0.5" />
                <line x1="100" y1="100" x2="156" y2="100" stroke="#0E3B2E" strokeWidth="2" opacity="0.5" />
                <circle cx="100" cy="115" r="12" stroke="#B8954A" strokeWidth="1.5" fill="none" opacity="0.5" />
                <circle cx="156" cy="115" r="12" stroke="#B8954A" strokeWidth="1.5" fill="none" opacity="0.5" />
                {/* Small decorative stars */}
                {[30, 90, 150, 210, 270, 330].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 128 + 118 * Math.cos(rad);
                  const y = 128 + 118 * Math.sin(rad);
                  return <circle key={deg} cx={x} cy={y} r="2" fill="#B8954A" opacity="0.5" />;
                })}
              </svg>
              {/* Monogram text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <span
                  className="text-5xl font-semibold text-[#0E3B2E] tracking-tight leading-none"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  G&amp;A
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#B8954A] font-medium" style={{ fontFamily: "var(--font-instrument-sans), system-ui, sans-serif" }}>
                  Est. 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
