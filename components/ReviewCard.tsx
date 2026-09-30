import type { Review } from "@/lib/reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} van 5 sterren`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex flex-col h-full bg-surface border border-divider rounded-2xl p-7">
      <Stars count={review.rating} />
      <blockquote className="text-[15px] text-foreground leading-relaxed mt-4 mb-5 flex-1">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="flex items-center justify-between text-xs text-muted">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-muted text-accent font-heading font-semibold text-sm"
            aria-hidden
          >
            {review.name.charAt(0)}
          </span>
          <div>
            <p className="font-semibold text-foreground text-sm">{review.name}</p>
            <p>{review.location}</p>
          </div>
        </div>
        <span>{review.date}</span>
      </figcaption>
    </figure>
  );
}
