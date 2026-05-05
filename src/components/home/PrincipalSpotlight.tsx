import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function PrincipalSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF8F1]">
      <Container>
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-72 rounded-2xl overflow-hidden border border-[#E8DFC9] shadow-md bg-[#F4EFE3]">
              <Image
                src="/images/team/principal.jpg"
                alt="Ganivada Sree Prasanna Durga Gayatri, Principal Advocate"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 224px, 224px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAHxAAAgICAwEBAAAAAAAAAAAAAQIDBAURITEx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ3hsPTsFQW2FnGF+CVS6y6a6v1z/9k="
              />
              {/* Overlay if no real photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0E3B2E]/5 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-xs text-[#0E3B2E] font-medium">Photo coming soon</span>
              </div>
            </div>
            {/* Credential strip */}
            <div className="absolute mt-[18.5rem] ml-4 hidden lg:block">
              <div className="bg-[#0E3B2E] text-[#FBF8F1] rounded-lg px-4 py-2.5 text-xs shadow-lg max-w-[200px]">
                <p className="font-semibold text-[#B8954A] tracking-wider uppercase mb-0.5">Bar Council</p>
                <p className="opacity-80">Andhra Pradesh</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              label="Principal Advocate"
              title="Ganivada Sree Prasanna Durga Gayatri"
            />
            <p className="lead mb-6">
              A practising advocate with experience spanning High Courts, Trial Courts, and
              Tribunals across Andhra Pradesh and Telangana. Her practice covers civil,
              criminal, property, commercial, and international legal matters.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F4EFE3] border border-[#E8DFC9]">
                <GraduationCap className="w-5 h-5 text-[#B8954A] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#2A2520] mb-0.5">Education</p>
                  <p className="text-sm text-[#4F4843]">BALLB, Ramaiah Institute of Legal Studies</p>
                  <p className="text-xs text-[#8C857E]">2018–2023 · Grade A</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F4EFE3] border border-[#E8DFC9]">
                <Briefcase className="w-5 h-5 text-[#B8954A] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#2A2520] mb-0.5">Current Role</p>
                  <p className="text-sm text-[#4F4843]">Legal Freelancer · Contracts &amp; International Advisory</p>
                  <p className="text-xs text-[#8C857E]">Aug 2025 – Present</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Civil Law", "Criminal Law", "Arbitration", "Real Estate", "Contract Drafting", "PMLA"].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-[#E8DFC9] text-[#2A2520] border-0 text-xs font-medium px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <Link
              href="/team/ganivada-sree-prasanna-durga-gayatri"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E3B2E] hover:text-[#155745] border-b border-[#0E3B2E]/30 hover:border-[#155745] pb-0.5 transition-colors"
            >
              Read full profile <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
