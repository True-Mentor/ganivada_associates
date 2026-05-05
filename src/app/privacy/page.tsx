import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Ganivada & Associates.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF8F1]">
      <Container>
        <div className="max-w-2xl">
          <h1 className="heading-1 text-[#2A2520] mb-6">Privacy Policy</h1>
          <p className="lead mb-6">This page will be updated with the full privacy policy prior to public launch.</p>
          <p className="text-sm text-[#4F4843] leading-relaxed">
            Ganivada &amp; Associates is committed to protecting the personal information of all persons
            who interact with this website. Information submitted through the contact form is used
            solely to respond to your enquiry and is not shared with third parties. No cookies other
            than strictly necessary session cookies are used on this website.
          </p>
        </div>
      </Container>
    </section>
  );
}
