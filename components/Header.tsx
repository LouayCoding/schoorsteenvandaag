"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PHONE_NUMBER, PHONE_HREF, COMPANY_NAME, NAV_LINKS } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        menuOpen
          ? "bg-background border-b border-divider"
          : scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-divider"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="relative block h-10 w-auto" aria-label={`${COMPANY_NAME} — home`}>
          <Image
            src="/logo.png"
            alt={COMPANY_NAME}
            width={160}
            height={40}
            className="logo-adaptive h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Hoofdmenu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-foreground font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Schakel naar licht thema" : "Schakel naar donker thema"}
            className="w-9 h-9 flex items-center justify-center text-muted hover:text-foreground transition-colors duration-200"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href={PHONE_HREF} className="text-sm font-semibold tracking-wide hover:text-accent transition-colors">
            {PHONE_NUMBER}
          </a>
          <Link
            href="/afspraak"
            className="text-sm font-semibold bg-accent text-accent-ink px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors duration-200"
          >
            Afspraak maken
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Schakel naar licht thema" : "Schakel naar donker thema"}
            className="w-11 h-11 flex items-center justify-center text-muted hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-11 h-11 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed left-0 right-0 bottom-0 top-16 bg-background z-[60] overflow-y-auto border-t border-divider"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <nav className="flex flex-col px-6 pt-6 gap-1" aria-label="Mobiel menu">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`anim-fade-up text-2xl font-heading font-semibold py-3 transition-colors ${
                  isActive(link.href) ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-7 pt-7 border-t border-divider flex flex-col gap-4 pb-10">
              <a href={PHONE_HREF} className="text-lg font-semibold text-accent">
                {PHONE_NUMBER}
              </a>
              <Link
                href="/afspraak"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-accent text-accent-ink font-semibold px-6 py-3.5 rounded-full hover:bg-accent-hover transition-colors"
              >
                Afspraak maken
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
