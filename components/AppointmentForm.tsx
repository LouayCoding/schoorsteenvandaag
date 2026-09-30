"use client";

import { useState } from "react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { appointmentSchema } from "@/lib/appointment-schema";
import { INPUT } from "@/lib/ui";

interface AppointmentFormProps {
  stad?: string;
  /** compact = in hero-kaart, ruim = op eigen pagina */
  variant?: "card" | "page";
}

type FieldErrors = Partial<Record<string, string>>;

const EMPTY = { naam: "", email: "", telefoon: "", postcode: "", huisnummer: "", opmerking: "" };

export default function AppointmentForm({ stad, variant = "card" }: AppointmentFormProps) {
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = (new FormData(e.currentTarget).get("website") as string) ?? "";
    const payload = { ...formData, stad, website: honeypot };

    const parsed = appointmentSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // Honeypot ingevuld -> bot. Doe alsof het gelukt is.
    if (parsed.data.website) {
      setStatus("success");
      setFormData(EMPTY);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/afspraak", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result: { ok?: boolean; message?: string } | null = await res
        .json()
        .catch(() => null);
      if (res.ok && result?.ok) {
        setStatus("success");
        setFormData(EMPTY);
      } else {
        setServerMessage(result?.message || "Versturen is niet gelukt.");
        setStatus("error");
      }
    } catch {
      setServerMessage("Controleer uw internetverbinding.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className={
          variant === "card"
            ? "bg-surface/90 backdrop-blur-md border border-divider rounded-2xl p-8 text-center"
            : "text-center py-12"
        }
        role="status"
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-muted text-accent text-xl font-bold mb-4" aria-hidden>
          ✓
        </span>
        <h3 className="text-xl font-heading font-semibold mb-2">Aanvraag ontvangen</h3>
        <p className="text-muted text-sm leading-relaxed mb-6">
          We bellen of mailen u binnen 24 uur om de afspraak in te plannen.
        </p>
        <a href={PHONE_HREF} className="text-accent font-semibold hover:underline">
          Liever direct? Bel {PHONE_NUMBER}
        </a>
      </div>
    );
  }

  const field = (name: keyof typeof EMPTY, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
      <label htmlFor={`${variant}-${name}`} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <input
        id={`${variant}-${name}`}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? `${variant}-${name}-error` : undefined}
        className={`${INPUT} ${errors[name] ? "border-error" : ""}`}
        {...props}
      />
      {errors[name] && (
        <p id={`${variant}-${name}-error`} className="text-xs text-error mt-1.5" role="alert">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={
        variant === "card"
          ? "bg-surface/90 backdrop-blur-md border border-divider rounded-2xl p-5 md:p-7 flex flex-col gap-4"
          : "flex flex-col gap-5"
      }
    >
      {variant === "card" && (
        <div>
          <h2 className="text-lg md:text-xl font-heading font-semibold">
            {stad ? `Afspraak in ${stad}` : "Plan uw afspraak"}
          </h2>
          <p className="text-sm text-muted mt-1">
            Binnen 24 uur reactie — vrijblijvend.
          </p>
        </div>
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor={`${variant}-website`}>Website</label>
        <input id={`${variant}-website`} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {field("naam", "Naam", { type: "text", autoComplete: "name", placeholder: "Uw naam" })}
      {field("email", "E-mailadres", { type: "email", autoComplete: "email", inputMode: "email", placeholder: "naam@voorbeeld.nl" })}
      {field("telefoon", "Telefoonnummer", { type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "06 12345678" })}

      <div className="grid grid-cols-2 gap-3">
        {field("postcode", "Postcode", { type: "text", autoComplete: "postal-code", placeholder: "1234 AB" })}
        {field("huisnummer", "Huisnummer", { type: "text", placeholder: "12a" })}
      </div>

      <div>
        <label htmlFor={`${variant}-opmerking`} className="block text-sm font-medium mb-1.5">
          Opmerking <span className="text-muted font-normal">(optioneel)</span>
        </label>
        <textarea
          id={`${variant}-opmerking`}
          name="opmerking"
          rows={variant === "card" ? 2 : 3}
          value={formData.opmerking}
          onChange={handleChange}
          className={`${INPUT} resize-none`}
          placeholder="Bijv. gewenste datum of type klus"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent text-accent-ink font-semibold text-base px-6 py-3.5 rounded-full hover:bg-accent-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Versturen…" : "Afspraak aanvragen"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-error text-center" role="alert">
          {serverMessage || "Er ging iets mis."}{" "}
          <a href={PHONE_HREF} className="underline font-medium">
            Bel {PHONE_NUMBER}
          </a>
        </p>
      ) : (
        <p className="text-xs text-muted text-center">
          Vrijblijvende aanvraag · reactie binnen 24 uur
        </p>
      )}
    </form>
  );
}
