interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-primary" />
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-charcoal md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
