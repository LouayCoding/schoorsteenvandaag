import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/sections/FinalCTA";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { BTN_LG, BTN_PRIMARY, CONTAINER, EYEBROW } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Over ons — landelijk netwerk van vakmensen",
  description:
    "Schoorsteenservice is een landelijk netwerk van ervaren, gecertificeerde schoorsteenvegers. Al 10+ jaar, met 2.500+ tevreden klanten door heel Nederland.",
  alternates: { canonical: "/over-ons" },
};

const STATS = [
  { value: "10+", label: "Jaar ervaring" },
  { value: "2.500+", label: "Tevreden klanten" },
  { value: "383", label: "Gemeenten gedekt" },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
            <div>
              <span className={`${EYEBROW} anim-fade-up mb-4`}>Over ons</span>
              <h1 className="anim-fade-up anim-d1 text-4xl md:text-5xl font-heading font-semibold mb-8 max-w-[14ch]">
                Vakmanschap door heel Nederland.
              </h1>
              <div className="anim-fade-up anim-d2 flex flex-col gap-5 text-muted text-base leading-relaxed">
                <p>
                  Wij zijn een landelijk netwerk van ervaren schoorsteenvegers.
                  Geen groot bedrijf met dure kantoren, maar vakmensen die hun
                  werk serieus nemen.
                </p>
                <p>
                  Elke schoorsteen is anders. Daarom werken wij niet met
                  standaardoplossingen, maar bekijken we per situatie wat er
                  nodig is. Eerlijk advies, heldere prijzen en werk waar we
                  achter staan.
                </p>
                <p>
                  Van Amsterdam tot Maastricht — wij zorgen ervoor dat er altijd
                  een vakman bij u in de buurt beschikbaar is. Snel, betrouwbaar
                  en zonder gedoe.
                </p>
              </div>
            </div>

            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/dak-inspectie.webp"
                alt="Vakman inspecteert een dak met schoorsteen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>

          <Reveal>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-surface border border-divider rounded-2xl p-8 text-center">
                  <dd className="text-4xl font-heading font-semibold text-accent order-first mb-2">
                    {stat.value}
                  </dd>
                  <dt className="text-sm text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="text-center">
            <a href={PHONE_HREF} className={`${BTN_PRIMARY} ${BTN_LG}`}>
              Bel {PHONE_NUMBER}
            </a>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
