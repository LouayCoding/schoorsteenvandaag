import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import Reveal from "@/components/Reveal";
import { EMAIL, FAQ_ITEMS, OPENING_HOURS, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { CARD, CONTAINER, EYEBROW } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact — bel 085 115 50 71",
  description:
    "Neem contact op met Schoorsteenservice: bel 085 115 50 71 (ma–vr 08:00–18:00) of mail info@directschoorsteenvegen.nl. Reactie binnen 24 uur.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className={CONTAINER}>
        <span className={`${EYEBROW} anim-fade-up mb-4`}>Contact</span>
        <h1 className="anim-fade-up anim-d1 text-4xl md:text-5xl font-heading font-semibold mb-5 max-w-[16ch]">
          Neem contact met ons op.
        </h1>
        <p className="anim-fade-up anim-d2 text-muted text-lg max-w-[45ch] mb-14">
          Bel ons direct of stuur een e-mail — wij reageren altijd binnen 24 uur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          <a href={PHONE_HREF} className={`${CARD} anim-fade-up anim-d2 group p-8 transition-colors duration-300 hover:border-accent/50`}>
            <p className={`${EYEBROW} mb-3`}>Telefoon</p>
            <p className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">
              {PHONE_NUMBER}
            </p>
            <p className="text-sm text-muted mt-2">{OPENING_HOURS}</p>
          </a>

          <a href={`mailto:${EMAIL}`} className={`${CARD} anim-fade-up anim-d3 group p-8 transition-colors duration-300 hover:border-accent/50`}>
            <p className={`${EYEBROW} mb-3`}>E-mail</p>
            <p className="text-xl font-heading font-semibold group-hover:text-accent transition-colors break-all">
              {EMAIL}
            </p>
            <p className="text-sm text-muted mt-2">Reactie binnen 24 uur</p>
          </a>

          <Link href="/afspraak" className={`${CARD} anim-fade-up anim-d4 group p-8 transition-colors duration-300 hover:border-accent/50`}>
            <p className={`${EYEBROW} mb-3`}>Online plannen</p>
            <p className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">
              Afspraak maken
            </p>
            <p className="text-sm text-muted mt-2">Vrijblijvend, 2 minuten werk</p>
          </Link>
        </div>

        <Reveal>
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-center">
              Veelgestelde vragen
            </h2>
            <FaqList items={FAQ_ITEMS.slice(0, 4)} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
