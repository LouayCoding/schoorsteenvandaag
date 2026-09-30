"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PHONE_HREF } from "@/lib/constants";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-divider px-4 pt-3 flex gap-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={PHONE_HREF}
        tabIndex={visible ? 0 : -1}
        className="flex-1 text-center bg-accent text-accent-ink font-semibold text-sm py-3 rounded-full hover:bg-accent-hover transition-colors"
      >
        Bel nu
      </a>
      <Link
        href="/afspraak"
        tabIndex={visible ? 0 : -1}
        className="flex-1 text-center border border-divider text-foreground font-semibold text-sm py-3 rounded-full hover:border-muted transition-colors"
      >
        Afspraak
      </Link>
    </div>
  );
}
