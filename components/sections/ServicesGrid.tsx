import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES } from "@/lib/services";
import { CONTAINER } from "@/lib/ui";

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Onze diensten"
          title="Wat kunnen wij voor u doen?"
          subtitle="Van jaarlijkse veegbeurt tot spoedklus — altijd vakkundig, altijd een eerlijke prijs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 70}>
              <Link
                href={`/diensten/${service.slug}`}
                className="group flex flex-col h-full bg-surface border border-divider rounded-2xl overflow-hidden transition-colors duration-300 hover:border-muted/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-background/85 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    Vanaf €{service.price}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent mt-5">
                    Bekijk dienst
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
