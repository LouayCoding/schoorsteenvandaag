import Link from "next/link";
import { NAV_LINKS, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { BTN_LG, BTN_PRIMARY, BTN_SECONDARY, CONTAINER, EYEBROW } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="min-h-[85svh] flex items-center">
      <div className={`${CONTAINER} py-32 text-center`}>
        <span className={`${EYEBROW} anim-fade-up mb-6`}>Foutmelding 404</span>

        <h1 className="anim-fade-up anim-d1 text-5xl sm:text-6xl md:text-7xl font-heading font-semibold mb-5">
          Pagina niet gevonden.
        </h1>

        <p className="anim-fade-up anim-d2 text-muted text-lg max-w-[45ch] mx-auto mb-10">
          De pagina die u zoekt bestaat niet of is verplaatst. Geen probleem —
          wij helpen u graag verder.
        </p>

        <div className="anim-fade-up anim-d3 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className={`${BTN_PRIMARY} ${BTN_LG}`}>
            Terug naar home
          </Link>
          <a href={PHONE_HREF} className={`${BTN_SECONDARY} ${BTN_LG}`}>
            Bel {PHONE_NUMBER}
          </a>
        </div>

        <nav aria-label="Handige links" className="anim-fade-up anim-d4">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-accent" aria-hidden />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
