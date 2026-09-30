import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import { TOP_CITIES } from "@/lib/constants";
import { getAllSteden, getStadSlug } from "@/lib/steden";
import { CONTAINER, EYEBROW } from "@/lib/ui";
import StedenZoeker from "./StedenZoeker";

export const metadata: Metadata = {
  title: "Werkgebied — schoorsteenveger in 383 gemeenten",
  description:
    "Onze schoorsteenvegers zijn actief in heel Nederland: 383 gemeenten van Groningen tot Maastricht. Zoek uw gemeente en plan direct een afspraak.",
  alternates: { canonical: "/werkgebied" },
};

export default function WerkgebiedPage() {
  const steden = getAllSteden();

  return (
    <>
      <section className={`${CONTAINER} pt-28 md:pt-36 pb-14 md:pb-16`}>
        <span className={`${EYEBROW} anim-fade-up mb-5`}>Werkgebied</span>
        <h1 className="anim-fade-up anim-d1 text-4xl sm:text-5xl font-heading font-semibold max-w-[16ch] mb-5">
          Actief door heel Nederland.
        </h1>
        <p className="anim-fade-up anim-d2 text-muted text-lg max-w-[48ch]">
          Ons landelijke netwerk van vakmensen dekt alle 383 gemeenten. Zoek uw
          gemeente en bekijk wat wij bij u in de buurt doen.
        </p>
      </section>

      <section className="pb-20 md:pb-24">
        <div className={CONTAINER}>
          <Reveal>
            <p className="text-sm font-semibold mb-4">Populaire plaatsen</p>
            <ul className="flex flex-wrap gap-2.5 mb-14">
              {TOP_CITIES.map((city) => (
                <li key={city}>
                  <Link
                    href={`/werkgebied/${getStadSlug(city)}`}
                    className="inline-block bg-accent-muted text-accent border border-accent/30 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-ink"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <StedenZoeker steden={steden} />
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-divider">
        <div className="mx-auto max-w-[760px] px-5 md:px-8">
          <SectionHeader
            eyebrow="Landelijk netwerk"
            title="Overal dezelfde kwaliteit."
            subtitle="Elke vakman in ons netwerk werkt volgens dezelfde standaard: gecertificeerd, verzekerd en met veegbewijs."
          />
          <Reveal>
            <p className="text-muted text-base leading-relaxed text-center">
              Staat uw plaats er niet tussen? Bel ons gerust — wij zijn vrijwel
              overal actief, ook in kleinere dorpen en het buitengebied.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
