import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { BTN_MD, BTN_PRIMARY, CONTAINER, EYEBROW } from "@/lib/ui";

const STEPS = [
  {
    title: "Bel of plan online",
    description:
      "Bel ons of vul het formulier in. U hoort binnen 24 uur wanneer we langskomen.",
  },
  {
    title: "Wij komen langs",
    description:
      "Een gecertificeerde vakman komt op de afgesproken dag. Vooraf weet u exact wat het kost.",
  },
  {
    title: "Klaar en veilig",
    description:
      "Alles schoon opgeleverd, inclusief veegbewijs voor uw verzekering.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 border-t border-divider">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl order-2 lg:order-1">
            <Image
              src="/camera-inspectie.webp"
              alt="Schoorsteenveger voert camera-inspectie uit bij een houtkachel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className={`${EYEBROW} mb-4`}>Zo werkt het</span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-12">
                In drie stappen geregeld.
              </h2>
            </Reveal>

            <ol className="flex flex-col gap-0 mb-10">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 90}>
                  <li className="relative flex gap-5 pb-10 last:pb-0">
                    {i < STEPS.length - 1 && (
                      <span className="absolute left-[19px] top-11 bottom-1 w-px bg-divider" aria-hidden />
                    )}
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-muted text-accent font-heading font-semibold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-base font-heading font-semibold mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed max-w-[45ch]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200}>
              <a href={PHONE_HREF} className={`${BTN_PRIMARY} ${BTN_MD}`}>
                Bel {PHONE_NUMBER}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
