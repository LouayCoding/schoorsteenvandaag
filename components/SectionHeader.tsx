import Reveal from "@/components/Reveal";
import { EYEBROW } from "@/lib/ui";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignment}`}>
      <span className={EYEBROW}>{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-semibold max-w-[22ch]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-[52ch]">{subtitle}</p>
      )}
    </Reveal>
  );
}
