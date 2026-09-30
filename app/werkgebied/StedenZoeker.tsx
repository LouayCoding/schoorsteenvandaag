"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getStadSlug } from "@/lib/steden";
import { INPUT } from "@/lib/ui";

export default function StedenZoeker({ steden }: { steden: string[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return steden;
    return steden.filter((stad) => stad.toLowerCase().includes(q));
  }, [query, steden]);

  return (
    <div>
      <div className="mb-10 max-w-md mx-auto">
        <label htmlFor="stad-zoeker" className="sr-only">
          Zoek uw gemeente
        </label>
        <div className="relative">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            id="stad-zoeker"
            type="search"
            placeholder="Zoek uw gemeente…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${INPUT} pl-11`}
          />
        </div>
        <p className="text-xs text-muted mt-3 text-center" role="status">
          {query
            ? `${filtered.length} ${filtered.length === 1 ? "gemeente" : "gemeenten"} gevonden`
            : `${steden.length} gemeenten in heel Nederland`}
        </p>
      </div>

      {filtered.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {filtered.map((stad) => (
            <li key={stad}>
              <Link
                href={`/werkgebied/${getStadSlug(stad)}`}
                className="block bg-surface border border-divider rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {stad}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-14">
          <p className="text-foreground font-semibold mb-2">
            Geen gemeente gevonden voor &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm text-muted">
            Wij zijn vrijwel overal actief — bel ons gerust of maak een afspraak.
          </p>
        </div>
      )}
    </div>
  );
}
