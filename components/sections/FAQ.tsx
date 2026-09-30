import Link from "next/link";
import FaqList from "@/components/FaqList";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="py-20 md:py-28 border-t border-divider">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[760px] px-5 md:px-8">
        <SectionHeader eyebrow="Veelgestelde vragen" title="Vragen? We helpen u graag." />

        <Reveal>
          <FaqList items={FAQ_ITEMS} />
        </Reveal>

        <Reveal className="text-center mt-10">
          <p className="text-sm text-muted">
            Staat uw vraag er niet bij?{" "}
            <Link href="/contact" className="text-accent font-semibold hover:underline">
              Neem contact op
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
