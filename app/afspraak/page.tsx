import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import { EMAIL, OPENING_HOURS, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { CARD, CONTAINER, EYEBROW } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Afspraak maken — binnen 24 uur reactie",
  description:
    "Plan online een afspraak voor schoorsteen vegen, inspectie of reparatie. Vrijblijvend, binnen 24 uur reactie. Of bel direct: 085 115 50 71.",
  alternates: { canonical: "/afspraak" },
};

const STEPS = [
  { title: "U vult het formulier in", description: "Twee minuten werk, geheel vrijblijvend." },
  { title: "Wij bellen binnen 24 uur", description: "We plannen samen een datum die u uitkomt." },
  { title: "De vakman komt langs", description: "Klaar terwijl u thuis bent — inclusief veegbewijs." },
];

export default function AfspraakPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <span className={`${EYEBROW} anim-fade-up mb-4`}>Direct plannen</span>
            <h1 className="anim-fade-up anim-d1 text-4xl md:text-5xl font-heading font-semibold mb-5 max-w-[14ch]">
              Maak een afspraak.
            </h1>
            <p className="anim-fade-up anim-d2 text-muted text-lg mb-10 max-w-[42ch]">
              Vul het formulier in en wij nemen binnen 24 uur contact op om de
              afspraak in te plannen.
            </p>

            <ol className="anim-fade-up anim-d3 flex flex-col gap-0 mb-10">
              {STEPS.map((step, i) => (
                <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < STEPS.length - 1 && (
                    <span className="absolute left-[17px] top-10 bottom-0 w-px bg-divider" aria-hidden />
                  )}
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-muted text-accent font-heading font-semibold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h2 className="text-base font-heading font-semibold mb-0.5">{step.title}</h2>
                    <p className="text-sm text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={`${CARD} anim-fade-up anim-d4 p-6`}>
              <p className="text-sm font-semibold mb-1">Liever direct contact?</p>
              <a href={PHONE_HREF} className="text-xl font-heading font-semibold text-accent hover:underline">
                {PHONE_NUMBER}
              </a>
              <p className="text-sm text-muted mt-1.5">
                {OPENING_HOURS} · {EMAIL}
              </p>
            </div>
          </div>

          <div className="anim-fade-up anim-d2">
            <AppointmentForm variant="card" />
          </div>
        </div>
      </div>
    </section>
  );
}
