import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL, COMPANY_NAME } from "@/lib/constants";
import { getAllSteden, getStadFaq, getStadFromSlug, getStadSlug } from "@/lib/steden";
import StadContent from "./StadContent";

interface StadPageProps {
  params: Promise<{ stad: string }>;
}

export async function generateStaticParams() {
  return getAllSteden().map((stad) => ({ stad: getStadSlug(stad) }));
}

export async function generateMetadata({ params }: StadPageProps): Promise<Metadata> {
  const { stad: stadSlug } = await params;
  const stad = getStadFromSlug(stadSlug);
  if (!stad) return { title: "Pagina niet gevonden" };

  return {
    title: `Schoorsteenveger ${stad} — vegen v.a. €39,50`,
    description: `Schoorsteenveger in ${stad} nodig? Vegen v.a. €39,50 incl. veegbewijs, camera-inspectie en reparaties in ${stad} en omgeving. Vaak binnen enkele werkdagen.`,
    alternates: { canonical: `/werkgebied/${stadSlug}` },
    openGraph: {
      title: `Schoorsteenveger ${stad} | ${COMPANY_NAME}`,
      description: `Schoorsteen vegen v.a. €39,50 in ${stad} en omgeving, inclusief veegbewijs. Vaak binnen enkele werkdagen geholpen.`,
      url: `/werkgebied/${stadSlug}`,
    },
  };
}

export default async function StadPage({ params }: StadPageProps) {
  const { stad: stadSlug } = await params;
  const stad = getStadFromSlug(stadSlug);
  if (!stad) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Schoorsteen vegen ${stad}`,
      description: `Schoorsteen vegen, inspectie en reparatie in ${stad} en omgeving.`,
      provider: { "@type": "LocalBusiness", name: COMPANY_NAME, url: BASE_URL, telephone: "+31851155071" },
      areaServed: { "@type": "City", name: stad },
      offers: { "@type": "Offer", priceCurrency: "EUR", price: "39.50" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: getStadFaq(stad).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Werkgebied", item: `${BASE_URL}/werkgebied` },
        { "@type": "ListItem", position: 3, name: stad, item: `${BASE_URL}/werkgebied/${stadSlug}` },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StadContent stad={stad} />
    </>
  );
}
