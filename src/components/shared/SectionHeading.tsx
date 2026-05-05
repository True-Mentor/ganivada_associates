import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {label && (
        <p className="text-sm font-semibold tracking-widest uppercase text-[#B8954A] mb-3 font-[family-name:var(--font-instrument-sans)]">
          {label}
        </p>
      )}
      <h2 className="heading-2 text-[#2A2520] mb-4">{title}</h2>
      {subtitle && (
        <p className="lead max-w-2xl" style={centered ? { margin: "0 auto" } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
