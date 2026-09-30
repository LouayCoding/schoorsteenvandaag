interface FaqListProps {
  items: { question: string; answer: string }[];
}

/** Native <details>-accordion: toegankelijk zonder JS, geanimeerd icoon via CSS. */
export default function FaqList({ items }: FaqListProps) {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <details key={item.question} className="faq-item border-b border-divider">
          <summary className="flex items-center justify-between gap-6 py-6 text-left">
            <span className="text-base font-semibold">{item.question}</span>
            <span className="faq-icon flex items-center justify-center w-8 h-8 rounded-full border border-divider text-muted shrink-0" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="text-[15px] text-muted leading-relaxed pb-6 max-w-[58ch]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
