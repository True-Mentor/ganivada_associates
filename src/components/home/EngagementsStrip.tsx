import { Container } from "@/components/layout/Container";

const engagements = [
  { name: "Clifford Chance", note: "Top-10 Global Law Firm" },
  { name: "DSK Legal", note: "Hyderabad" },
  { name: "Venkat & Venkat", note: "Advocates & Solicitors, Hyderabad" },
  { name: "High Court of Karnataka", note: "Under Advocate General" },
  { name: "Supreme Court of India", note: "Chambers of Adv. Pradeep Rai" },
  { name: "Holla & Holla", note: "Bengaluru" },
  { name: "Leo Cussen Centre", note: "Melbourne, Australia" },
];

export function EngagementsStrip() {
  return (
    <section className="py-14 bg-[#F4EFE3] border-y border-[#E8DFC9]">
      <Container>
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#8C857E] mb-8" style={{ fontFamily: "var(--font-instrument-sans), system-ui, sans-serif" }}>
          Selected Institutional Experience
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {engagements.map((e) => (
            <div key={e.name} className="text-center">
              <p
                className="text-sm font-semibold text-[#2A2520]"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {e.name}
              </p>
              <p className="text-xs text-[#8C857E] mt-0.5">{e.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
