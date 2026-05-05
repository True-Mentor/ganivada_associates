import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for Ganivada & Associates.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF8F1]">
      <Container>
        <div className="max-w-2xl">
          <h1 className="heading-1 text-[#2A2520] mb-6">Terms of Use</h1>
          <p className="lead mb-6">This page will be updated with the full terms of use prior to public launch.</p>
          <p className="text-sm text-[#4F4843] leading-relaxed">
            This website is maintained for informational purposes only and does not constitute solicitation
            of work by Ganivada &amp; Associates. Access to this website does not create an attorney-client
            relationship. The information on this website is governed by and construed in accordance with
            the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts
            at Visakhapatnam, Andhra Pradesh.
          </p>
        </div>
      </Container>
    </section>
  );
}
