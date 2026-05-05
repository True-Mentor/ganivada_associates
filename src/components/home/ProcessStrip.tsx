import { MessageSquare, Lightbulb, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

const steps = [
  {
    icon: MessageSquare,
    label: "01",
    title: "Listen",
    description:
      "We take time to understand your matter fully: the facts, your priorities, and what outcome matters most to you.",
  },
  {
    icon: Lightbulb,
    label: "02",
    title: "Strategise",
    description:
      "We analyse the law, identify your options, and craft a focused legal strategy tailored to your specific situation.",
  },
  {
    icon: CheckCircle2,
    label: "03",
    title: "Resolve",
    description:
      "We pursue your matter with diligence: in court, at the negotiating table, or in the arbitration room.",
  },
];

export function ProcessStrip() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF8F1]">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#B8954A] mb-3" style={{ fontFamily: "var(--font-instrument-sans), system-ui, sans-serif" }}>
            Our Approach
          </p>
          <h2 className="heading-2 text-[#2A2520]">How We Work</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.25rem)] right-[calc(16.66%+1.25rem)] h-px bg-[#E8DFC9]" aria-hidden="true" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative flex flex-col items-center text-center gap-4">
                <div className="relative w-20 h-20 rounded-full bg-[#F4EFE3] border-2 border-[#E8DFC9] flex items-center justify-center z-10">
                  <Icon className="w-8 h-8 text-[#0E3B2E]" aria-hidden="true" />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#B8954A] text-white text-[10px] font-bold flex items-center justify-center"
                    style={{ fontFamily: "var(--font-instrument-sans), system-ui, sans-serif" }}
                  >
                    {step.label}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-[#2A2520] mb-2"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4F4843] leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
