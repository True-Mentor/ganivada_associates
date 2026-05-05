import Link from "next/link";
import {
  Scale,
  Gavel,
  Handshake,
  Building2,
  FileText,
  Home,
  Map,
  Globe,
  Shield,
  Users,
  PenLine,
  ArrowRight,
} from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/layout/Container";

const iconMap: Record<string, React.ElementType> = {
  scale: Scale,
  gavel: Gavel,
  handshake: Handshake,
  building: Building2,
  "file-text": FileText,
  home: Home,
  map: Map,
  globe: Globe,
  shield: Shield,
  users: Users,
  "pen-line": PenLine,
};

export function PracticeAreasGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#F4EFE3]">
      <Container>
        <SectionHeading
          label="What We Do"
          title="Practice Areas"
          subtitle="Our chambers handles a broad spectrum of legal matters across Indian courts, tribunals, and arbitral forums."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {practiceAreas.map((area) => {
            const Icon = iconMap[area.icon] ?? Scale;
            return (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group relative bg-[#FBF8F1] rounded-xl p-6 border border-[#E8DFC9] hover:border-[#0E3B2E] hover:shadow-md transition-all duration-200 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0E3B2E]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0E3B2E]/15 transition-colors">
                  <Icon className="w-5 h-5 text-[#0E3B2E]" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-[#2A2520] mb-1"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#8C857E] leading-relaxed">{area.summary}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-[#0E3B2E] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E3B2E] hover:text-[#155745] border-b border-[#0E3B2E]/30 hover:border-[#155745] pb-0.5 transition-colors"
          >
            View all practice areas <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
