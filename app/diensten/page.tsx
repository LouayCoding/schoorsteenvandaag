import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import { SERVICES } from "@/lib/services";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Diensten — vegen, inspectie en reparatie",
  description:
    "Alle schoorsteendiensten onder één dak: vegen v.a. €39,50, camera-inspectie, vogelnest verwijderen, schoorsteenkap plaatsen en dakreparaties. Door heel Nederland.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      <section className="pt-28 md:pt-36 pb-20 md:pb-24">
        <div className={CONTAINER}>
          <SectionHeader
            eyebrow="Onze diensten"
            title="Wat kunnen wij voor u doen?"
            subtitle="Professioneel schoorsteenonderhoud door heel Nederland — van veegbeurt tot dakreparatie."
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
                    <h2 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2 border-t border-divider pt-4">
                      {service.details.map((d) => (
                        <li key={d.label} className="flex items-baseline justify-between gap-4 text-sm">
                          <span className="text-muted">{d.label}</span>
                          <span className="font-semibold whitespace-nowrap">{d.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
