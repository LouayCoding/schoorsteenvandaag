import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import FinalCTA from "@/components/sections/FinalCTA";
import { BASE_URL, COMPANY_NAME } from "@/lib/constants";
import { REVIEWS } from "@/lib/reviews";
import { CONTAINER, EYEBROW } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Reviews — beoordeeld met 4,9 van 5",
  description:
    "Lees ervaringen van klanten door heel Nederland: schoorsteen vegen, camera-inspectie en meer. Gemiddeld beoordeeld met 4,9 van 5 sterren.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const average = (
    REVIEWS.reduce((acc, r) => acc + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    url: BASE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average,
      bestRating: "5",
      reviewCount: REVIEWS.length,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className={CONTAINER}>
          <span className={`${EYEBROW} anim-fade-up mb-4`}>Reviews</span>
          <h1 className="anim-fade-up anim-d1 text-4xl md:text-5xl font-heading font-semibold mb-5 max-w-[16ch]">
            Wat onze klanten zeggen.
          </h1>
          <div className="anim-fade-up anim-d2 flex items-center gap-3 mb-14">
            <div className="flex items-center gap-1" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-muted">
              <strong className="text-foreground">{average.replace(".", ",")} van 5</strong> ·{" "}
              {REVIEWS.length} reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.name} delay={(i % 3) * 70}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
