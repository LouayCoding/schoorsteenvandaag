import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import { PRICING_DISCLAIMER } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { CARD, CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Tarieven — schoorsteen vegen v.a. €39,50",
  description:
    "Alle tarieven op een rij: schoorsteen vegen €39,50, camera-inspectie €139, vogelnest verwijderen €95. Vaste prijzen, exclusief btw, geen verrassingen.",
  alternates: { canonical: "/tarieven" },
};

export default function TarievenPage() {
  return (
    <>
      <section className="pt-28 md:pt-36 pb-20 md:pb-24">
        <div className={CONTAINER}>
          <SectionHeader
            eyebrow="Tarieven"
            title="Heldere prijzen, geen verrassingen."
            subtitle="Wat u ziet is wat u betaalt. Alle prijzen zijn exclusief btw."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className={`${CARD} group flex flex-col h-full p-7 md:p-8 transition-colors duration-300 hover:border-muted/40`}
                >
                  <h2 className="text-lg font-heading font-semibold mb-1 group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="mb-6">
                    <span className="text-3xl font-heading font-semibold text-accent">
                      €{service.price}
                    </span>
                    <span className="text-sm text-muted ml-1.5">vanaf</span>
                  </p>
                  <ul className="flex flex-col gap-3 flex-1 mb-6">
                    {service.details.map((d) => (
                      <li key={d.label} className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-muted">{d.label}</span>
                        <span className="font-semibold whitespace-nowrap">{d.price}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Meer info
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-xs text-muted/70 max-w-[65ch] mx-auto text-center leading-relaxed">
              {PRICING_DISCLAIMER}
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
