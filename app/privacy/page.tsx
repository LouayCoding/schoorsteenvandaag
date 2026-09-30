import type { Metadata } from "next";
import { COMPANY_NAME, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Lees hoe Schoorsteenservice omgaat met uw persoonsgegevens en cookies.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[720px] px-6">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">
          Juridisch
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-8">
          Privacybeleid
        </h1>

        <div className="flex flex-col gap-8 text-muted text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Wie zijn wij
            </h2>
            <p>
              {COMPANY_NAME} is verantwoordelijk voor de verwerking van persoonsgegevens 
              zoals weergegeven in dit privacybeleid.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Welke gegevens verzamelen wij
            </h2>
            <p>
              Wij verwerken persoonsgegevens die u zelf aan ons verstrekt via het 
              contactformulier: naam, e-mailadres, telefoonnummer en eventuele opmerkingen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Waarom wij gegevens verzamelen
            </h2>
            <p>
              Uw gegevens worden uitsluitend gebruikt om contact met u op te nemen 
              over uw aanvraag en om onze dienstverlening te verbeteren.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Bewaartermijn
            </h2>
            <p>
              Wij bewaren uw gegevens niet langer dan strikt noodzakelijk is om de 
              doelen te realiseren waarvoor uw gegevens worden verzameld.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Uw rechten
            </h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of 
              te verwijderen. Neem hiervoor contact op via{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent hover:text-accent-hover transition-colors">
                {EMAIL}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              Cookies
            </h2>
            <p>
              Deze website gebruikt functionele cookies om goed te werken. Analytische
              cookies (Google Analytics en Tag Manager) worden pas geladen nadat u
              hiervoor toestemming geeft via de cookiemelding. U kunt uw keuze
              wijzigen door de cookies van deze site te verwijderen in uw browser.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
