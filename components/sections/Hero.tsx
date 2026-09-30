import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";
import { PHONE_HREF, PHONE_NUMBER, TRUST_ITEMS } from "@/lib/constants";
import { BTN_LG, BTN_PRIMARY, EYEBROW } from "@/lib/ui";

interface HeroProps {
  stad?: string;
}

export default function Hero({ stad }: HeroProps) {
  return (
    <section className="relative flex items-center overflow-hidden min-h-[100svh]">
      <Image
        src="/heromobile.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <Image
        src="/heropc.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover hidden md:block"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className={`${EYEBROW} anim-fade-up mb-5`}>
              {stad ? `Schoorsteenveger in ${stad}` : "Schoorsteen vegen v.a. €39,50"}
            </span>

            <h1 className="anim-fade-up anim-d1 text-4xl sm:text-5xl lg:text-[3.4rem] font-heading font-semibold max-w-[15ch] mb-5">
              {stad ? `Uw schoorsteenveger in ${stad}.` : "Vakkundig geveegd, vandaag geregeld."}
            </h1>

            <p className="anim-fade-up anim-d2 text-muted text-lg md:text-xl max-w-[42ch] mb-8">
              {stad
                ? `Schoorsteen vegen, inspectie of reparatie in ${stad} en omgeving — inclusief veegbewijs voor uw verzekering.`
                : "Schoorsteen vegen, inspectie of reparatie door heel Nederland — inclusief veegbewijs voor uw verzekering."}
            </p>

            <div className="anim-fade-up anim-d3 flex flex-col sm:flex-row gap-4 mb-10">
              <a href={PHONE_HREF} className={`${BTN_PRIMARY} ${BTN_LG}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
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
  );
}
