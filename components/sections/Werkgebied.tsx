import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { TOP_CITIES } from "@/lib/constants";
import { getStadSlug } from "@/lib/steden";
import { CONTAINER } from "@/lib/ui";

export default function Werkgebied() {
  return (
    <section className="py-20 md:py-28 border-t border-divider">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Werkgebied"
              title="Actief door heel Nederland."
              subtitle="Ons netwerk van vakmensen dekt het hele land — van Groningen tot Maastricht."
              align="left"
            />

            <Reveal>
              <ul className="flex flex-wrap gap-2.5 mb-8">
                {TOP_CITIES.map((city) => (
                  <li key={city}>
                    <Link
                      href={`/werkgebied/${getStadSlug(city)}`}
                      className="inline-block bg-surface border border-divider rounded-full px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <Link
                href="/werkgebied"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                Bekijk alle 383 gemeenten
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/vogelnest-verwijderen.webp"
              alt="Schoorsteenveger verwijdert een vogelnest uit een schoorsteen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
