import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { BTN_LG, BTN_PRIMARY, EYEBROW } from "@/lib/ui";

interface FinalCTAProps {
  stad?: string;
}

/** Blijft donker in beide thema's via de .theme-dark token-scope. */
export default function FinalCTA({ stad }: FinalCTAProps) {
  return (
    <section className="theme-dark relative py-28 md:py-36 overflow-hidden">
      <Image
        src="/daklekkage-repareren.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <span className={`${EYEBROW} mb-6`}>
            {stad ? `Schoorsteenveger ${stad}` : "Direct regelen"}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold max-w-[18ch] mb-5 text-foreground">
            {stad ? `Klaar om het te regelen in ${stad}?` : "Klaar om het te regelen?"}
          </h2>

          <p className="text-muted text-base md:text-lg max-w-[42ch] mb-10">
            Bel ons direct of plan online een afspraak — wij nemen binnen 24 uur contact op.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className={`${BTN_PRIMARY} ${BTN_LG}`}>
              Bel {PHONE_NUMBER}
            </a>
            <Link
              href="/afspraak"
              className={`inline-flex items-center justify-center gap-2 border border-foreground/25 text-foreground font-semibold rounded-full transition-colors duration-200 hover:border-foreground/60 hover:bg-foreground/5 ${BTN_LG}`}
            >
              Afspraak maken
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
