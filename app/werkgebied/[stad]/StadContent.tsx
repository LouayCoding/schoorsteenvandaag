import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import FaqList from "@/components/FaqList";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import SectionHeader from "@/components/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import TrustStrip from "@/components/sections/TrustStrip";
import { PHONE_HREF, PHONE_NUMBER, TRUST_ITEMS } from "@/lib/constants";
import { REVIEWS } from "@/lib/reviews";
import { SERVICES } from "@/lib/services";
import { getNearbySteden, getStadContent, getStadFaq, getStadSlug } from "@/lib/steden";
import { BTN_LG, BTN_PRIMARY, CARD, CONTAINER, EYEBROW } from "@/lib/ui";

export default function StadContent({ stad }: { stad: string }) {
  const content = getStadContent(stad);
  const faq = getStadFaq(stad);
  const nearby = getNearbySteden(stad);
  const reviews = REVIEWS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image src="/heropc.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

        <div className={`${CONTAINER} relative pt-28 pb-16 md:pt-36 md:pb-20`}>
          <nav aria-label="Kruimelpad" className="anim-fade-up mb-6 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/werkgebied" className="hover:text-foreground transition-colors">Werkgebied</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-foreground font-medium">{stad}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <span className={`${EYEBROW} anim-fade-up mb-5`}>Schoorsteen vegen v.a. €39,50</span>
              <h1 className="anim-fade-up anim-d1 text-4xl sm:text-5xl font-heading font-semibold max-w-[16ch] mb-5">
                {`Schoorsteenveger in ${stad}.`}
              </h1>
              <p className="anim-fade-up anim-d2 text-muted text-lg max-w-[45ch] mb-8">
                Vegen, inspectie of reparatie in {stad} en omgeving — inclusief
                veegbewijs voor uw verzekering.
              </p>
              <div className="anim-fade-up anim-d3 flex flex-col sm:flex-row gap-4 mb-10">
                <a href={PHONE_HREF} className={`${BTN_PRIMARY} ${BTN_LG}`}>
                  Bel {PHONE_NUMBER}
                </a>
              </div>
              <ul className="anim-fade-up anim-d4 flex flex-wrap gap-x-7 gap-y-3">
                {TRUST_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="anim-fade-up anim-d2">
              <AppointmentForm stad={stad} variant="card" />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Lokale content */}
      <section className="py-20 md:py-28">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <Reveal>
                <span className={`${EYEBROW} mb-4`}>Lokaal geregeld</span>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 max-w-[18ch]">
                  {`Uw schoorsteen in ${stad} in vakkundige handen.`}
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <div className="flex flex-col gap-5 text-muted text-base leading-relaxed">
                  <p>{content.intro}</p>
                  <p>{content.waarom}</p>
                  <p>{content.extra}</p>
                </div>
              </Reveal>
            </div>
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/schoorsteenkap-plaatsen.webp"
                alt={`Schoorsteenveger plaatst een schoorsteenkap in de regio ${stad}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Diensten compact */}
      <section className="py-20 md:py-28 border-t border-divider">
        <div className={CONTAINER}>
          <SectionHeader
            eyebrow={`Diensten in ${stad}`}
            title="Alles voor uw schoorsteen."
            subtitle="Van veegbeurt tot dakreparatie — één aanspreekpunt."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 60}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className={`${CARD} group flex flex-col h-full p-6 transition-colors duration-300 hover:border-muted/40`}
                >
                  <p className="text-xs font-bold text-accent mb-2">Vanaf €{service.price}</p>
                  <h3 className="text-base font-heading font-semibold group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews compact */}
      <section className="py-20 md:py-28 border-t border-divider">
        <div className={CONTAINER}>
          <SectionHeader
            eyebrow="Reviews"
            title="Klanten uit heel Nederland."
            subtitle="Beoordeeld met 4,9 van 5 — ook in uw regio."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 70}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lokale FAQ */}
      <section className="py-20 md:py-28 border-t border-divider">
        <div className="mx-auto max-w-[760px] px-5 md:px-8">
          <SectionHeader
            eyebrow="Veelgestelde vragen"
            title={`Veelgestelde vragen in ${stad}`}
          />
          <Reveal>
            <FaqList items={faq} />
          </Reveal>
        </div>
      </section>

      {/* Buurgemeenten */}
      <section className="py-16 border-t border-divider">
        <div className={CONTAINER}>
          <Reveal>
            <p className="text-sm font-semibold mb-5">Ook actief in de buurt van {stad}</p>
            <ul className="flex flex-wrap gap-2.5">
              {nearby.map((buur) => (
                <li key={buur}>
                  <Link
                    href={`/werkgebied/${getStadSlug(buur)}`}
                    className="inline-block bg-surface border border-divider rounded-full px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {buur}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/werkgebied"
                  className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-accent hover:underline"
                >
                  Alle gemeenten →
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <FinalCTA stad={stad} />
    </>
  );
}
