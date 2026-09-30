import Link from "next/link";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import SectionHeader from "@/components/SectionHeader";
import { REVIEWS } from "@/lib/reviews";
import { BTN_MD, BTN_SECONDARY, CONTAINER } from "@/lib/ui";

export default function Reviews() {
  const featured = REVIEWS.slice(0, 6);

  return (
    <section className="py-20 md:py-28 border-t border-divider">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Reviews"
          title="Wat klanten zeggen."
          subtitle="Lees de ervaringen van huiseigenaren die u voorgingen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 70}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <Link href="/reviews" className={`${BTN_SECONDARY} ${BTN_MD}`}>
            Bekijk alle reviews
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
