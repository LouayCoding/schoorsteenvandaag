import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { PRICING_DISCLAIMER } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { CARD, CONTAINER } from "@/lib/ui";

const FEATURED_SLUGS = ["schoorsteen-vegen", "camera-inspectie", "vogelnest-verwijderen"];
const FEATURED = SERVICES.filter((s) => FEATURED_SLUGS.includes(s.slug));

export default function PricingTeaser() {
  return (
    <section className="py-20 md:py-28 border-t border-divider">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Tarieven"
          title="Heldere prijzen, geen verrassingen."
          subtitle="Wat u ziet is wat u betaalt. Altijd vooraf duidelijkheid, nooit verborgen kosten."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {FEATURED.map((service, i) => {
            const highlight = service.slug === "schoorsteen-vegen";
            return (
              <Reveal key={service.slug} delay={i * 80}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className={`${CARD} relative flex flex-col h-full p-7 md:p-8 transition-colors duration-300 hover:border-muted/40 ${
                    highlight ? "border-accent/50" : ""
                  }`}
                >
                  {highlight && (
                    <span className="absolute -top-3 left-7 bg-accent text-accent-ink text-xs font-bold px-3 py-1 rounded-full">
                      Meest gekozen
                    </span>
                  )}
                  <h3 className="text-lg font-heading font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="mb-6">
                    <span className="text-3xl font-heading font-semibold text-accent">
                      €{service.price}
                    </span>
                    <span className="text-sm text-muted ml-1.5">vanaf, excl. btw</span>
                  </p>
                  <ul className="flex flex-col gap-3 flex-1">
                    {service.details.map((d) => (
                      <li key={d.label} className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-muted">{d.label}</span>
                        <span className="font-semibold whitespace-nowrap">{d.price}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="flex flex-col items-center gap-5 text-center">
          <Link
            href="/tarieven"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
          >
            Bekijk alle tarieven
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-xs text-muted/70 max-w-[60ch] leading-relaxed">
            {PRICING_DISCLAIMER}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
