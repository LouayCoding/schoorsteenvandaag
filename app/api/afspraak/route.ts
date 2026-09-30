import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { appointmentSchema } from "@/lib/appointment-schema";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Controleer de ingevulde gegevens." },
        { status: 400 }
      );
    }

    // Honeypot: doe alsof het gelukt is.
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const data = parsed.data;
    const smtpHost = requireEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpUser = requireEnv("SMTP_USER");
    const smtpPass = requireEnv("SMTP_PASS");
    const mailTo = process.env.MAIL_TO?.trim() || smtpUser;
    const mailFrom = process.env.MAIL_FROM?.trim() || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `Nieuwe afspraakaanvraag — ${data.naam}${
      data.stad ? ` (${data.stad})` : ""
    }`;

    const rows: [string, string][] = [
      ["Naam", data.naam],
      ["E-mail", data.email],
      ["Telefoon", data.telefoon],
      ["Postcode", data.postcode],
      ["Huisnummer", data.huisnummer],
    ];
    if (data.stad) rows.push(["Plaats", data.stad]);
    if (data.opmerking) rows.push(["Opmerking", data.opmerking]);

    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
    const html = `
      <h2>Nieuwe afspraakaanvraag</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                <td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${escapeHtml(label)}</td>
                <td style="padding:6px 0">${escapeHtml(value)}</td>
              </tr>`
          )
          .join("")}
      </table>
    `;

    await transporter.sendMail({
      from: `"Schoorsteenservice website" <${mailFrom}>`,
      to: mailTo,
      replyTo: data.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[afspraak] mail send failed:", error);
    return NextResponse.json(
      { ok: false, message: "Versturen is niet gelukt." },
      { status: 500 }
    );
  }
}
