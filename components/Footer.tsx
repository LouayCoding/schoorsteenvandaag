import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF, EMAIL, COMPANY_NAME, NAV_LINKS, OPENING_HOURS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { CONTAINER } from "@/lib/ui";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-surface/40">
      <div className={`${CONTAINER} py-16 md:py-20`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight mb-4">
              {COMPANY_NAME}
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-[280px]">
              Landelijk netwerk van gecertificeerde schoorsteenvegers. Vakkundig,
              snel en eerlijk geprijsd.
            </p>
          </div>

          <nav aria-label="Diensten">
            <p className="text-sm font-semibold mb-4">Diensten</p>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/diensten/${s.slug}`}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Pagina's">
            <p className="text-sm font-semibold mb-4">Snelle links</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted">
              <li>
                <a href={PHONE_HREF} className="font-semibold text-foreground hover:text-accent transition-colors duration-200">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors duration-200 break-all">
                  {EMAIL}
                </a>
              </li>
              <li>{OPENING_HOURS}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-4 pb-20 md:pb-0">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="text-xs text-muted hover:text-foreground transition-colors">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
