import Reveal from "@/components/Reveal";
import { STATS } from "@/lib/constants";
import { CONTAINER } from "@/lib/ui";

export default function TrustStrip() {
  return (
    <section className="border-y border-divider bg-surface/50">
      <div className={`${CONTAINER} py-10 md:py-12`}>
        <Reveal>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dd className="text-2xl md:text-3xl font-heading font-semibold text-foreground order-first">
                  {stat.value}
                </dd>
                <dt className="text-sm text-muted mt-1">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
