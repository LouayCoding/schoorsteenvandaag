import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqList from "@/components/FaqList";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/sections/FinalCTA";
import { BASE_URL, COMPANY_NAME } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { CARD, CONTAINER, EYEBROW } from "@/lib/ui";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Pagina niet gevonden" };
  return {
    title: `${service.title} — vanaf €${service.price}`,
    description: `${service.description} Vaste prijs vanaf €${service.price} excl. btw, door heel Nederland.`,
    alternates: { canonical: `/diensten/${slug}` },
    openGraph: {
      title: `${service.title} | ${COMPANY_NAME}`,
      description: service.description,
      url: `/diensten/${slug}`,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@type": "LocalBusiness", name: COMPANY_NAME, telephone: "+31851155071", url: BASE_URL },
      areaServed: { "@type": "Country", name: "Nederland" },
      offers: { "@type": "Offer", priceCurrency: "EUR", price: service.price.replace(",", ".") },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-28 md:pt-36 pb-20 md:pb-24">
        <div className={CONTAINER}>
          <nav aria-label="Kruimelpad" className="anim-fade-up mb-8 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/diensten" className="hover:text-foreground transition-colors">Diensten</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-foreground font-medium">{service.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
            <div>
              <span className={`${EYEBROW} anim-fade-up mb-4`}>Vanaf €{service.price} excl. btw</span>
              <h1 className="anim-fade-up anim-d1 text-4xl md:text-5xl font-heading font-semibold mb-5">
                {service.title}
              </h1>
              <p className="anim-fade-up anim-d2 text-muted text-lg leading-relaxed mb-8 max-w-[45ch]">
                {service.description}
              </p>

              <div className={`${CARD} anim-fade-up anim-d3 p-6`}>
                <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-muted mb-4">
                  Tarieven
                </h2>
                <ul className="flex flex-col gap-3">
                  {service.details.map((d) => (
                    <li key={d.label} className="flex items-baseline justify-between gap-4 text-base border-b border-divider pb-3 last:border-0 last:pb-0">
                      <span className="text-muted">{d.label}</span>
                      <span className="font-semibold whitespace-nowrap">{d.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="anim-fade-up anim-d2 relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mb-20">
            <Reveal>
              <span className={`${EYEBROW} mb-4`}>Voordelen</span>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
                {`Waarom ${service.title.toLowerCase()}?`}
              </h2>
              <ul className="flex flex-col gap-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <span className={`${EYEBROW} mb-4`}>Werkwijze</span>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
                Hoe werkt het?
              </h2>
              <ol className="flex flex-col">
                {service.process.map((step, index) => (
                  <li key={step.step} className="relative flex gap-5 pb-8 last:pb-0">
                    {index < service.process.length - 1 && (
                      <span className="absolute left-[17px] top-10 bottom-0 w-px bg-divider" aria-hidden />
                    )}
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-muted text-accent font-heading font-semibold text-sm shrink-0">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-base font-heading font-semibold mb-1">{step.step}</h3>
                      <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal className="mb-20">
            <div className="mx-auto max-w-[760px]">
              <span className={`${EYEBROW} mb-4`}>Veelgestelde vragen</span>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
                {`Vragen over ${service.title.toLowerCase()}?`}
              </h2>
              <FaqList items={service.faq.map((f) => ({ question: f.q, answer: f.a }))} />
            </div>
          </Reveal>

          <Reveal>
            <p className="text-sm font-semibold mb-5">Andere diensten</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/diensten/${s.slug}`}
                  className={`${CARD} group p-6 transition-colors duration-300 hover:border-muted/40`}
                >
                  <p className="text-xs font-bold text-accent mb-2">Vanaf €{s.price}</p>
                  <h3 className="text-base font-heading font-semibold group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
