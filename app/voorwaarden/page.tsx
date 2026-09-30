import type { Metadata } from "next";
import { COMPANY_NAME, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden van Schoorsteenservice.",
  alternates: { canonical: "/voorwaarden" },
  robots: { index: false },
};

export default function VoorwaardenPage() {
  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[720px] px-6">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">
          Juridisch
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-8">
          Algemene Voorwaarden
        </h1>

        <div className="flex flex-col gap-8 text-muted text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Artikel 1 — Definities
            </h2>
            <p>
              In deze voorwaarden wordt verstaan onder {COMPANY_NAME}: de aanbieder 
              van schoorsteenonderhoud en gerelateerde diensten.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Artikel 2 — Toepasselijkheid
            </h2>
            <p>
              Deze voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten 
              tussen {COMPANY_NAME} en de opdrachtgever.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Artikel 3 — Prijzen
            </h2>
            <p>
              Alle genoemde prijzen zijn exclusief btw, tenzij anders vermeld. 
              Prijzen zijn geldig op moment van offerte.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Artikel 4 — Uitvoering
            </h2>
            <p>
              Wij voeren werkzaamheden uit volgens de geldende veiligheidsnormen 
              en met professioneel materiaal. De opdrachtgever dient toegang te 
              verschaffen tot de relevante ruimtes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Artikel 5 — Annulering
            </h2>
            <p>
              Annulering is kosteloos tot 24 uur voor het afgesproken tijdstip. 
              Bij latere annulering kunnen kosten in rekening worden gebracht.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Artikel 6 — Aansprakelijkheid
            </h2>
            <p>
              {COMPANY_NAME} is verzekerd voor bedrijfsaansprakelijkheid. Onze 
              aansprakelijkheid is beperkt tot het bedrag dat door onze verzekering 
              wordt uitgekeerd.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Contact
            </h2>
            <p>
              Vragen over deze voorwaarden? Neem contact op via{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent hover:text-accent-hover transition-colors">
                {EMAIL}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
