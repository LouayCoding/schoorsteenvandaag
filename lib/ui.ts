/** Gedeelde klassen zodat knoppen en containers overal identiek zijn. */

export const CONTAINER = "mx-auto w-full max-w-[1200px] px-5 md:px-8";

export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 bg-accent text-accent-ink font-semibold rounded-full transition-all duration-200 hover:bg-accent-hover hover:-translate-y-px active:translate-y-0";

export const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 border border-foreground/25 text-foreground font-semibold rounded-full transition-colors duration-200 hover:border-foreground/60 hover:bg-foreground/5";

export const BTN_LG = "text-base px-8 py-4";
export const BTN_MD = "text-sm px-6 py-3";

export const INPUT =
  "w-full px-4 py-3 bg-background/70 border border-divider rounded-xl text-foreground text-base md:text-sm placeholder:text-muted/60 transition-colors duration-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25";

export const EYEBROW =
  "inline-block text-xs uppercase tracking-[0.18em] text-accent font-bold";

export const CARD =
  "bg-surface border border-divider rounded-2xl";
