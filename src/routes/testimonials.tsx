import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Testimonials, testimonials } from "@/components/site/Testimonials";
import { Star, Quote } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Limon Concrete" },
      { name: "description", content: "Read what our clients across Tamil Nadu say about working with Limon Concrete." },
      { property: "og:title", content: "Testimonials — Limon Concrete" },
      { property: "og:description", content: "Client stories and reviews." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by clients across Tamil Nadu"
          subtitle="Real stories from real homeowners and businesses we've worked with."
        />
        <Testimonials />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <Quote className="text-primary" size={24} />
              <p className="mt-3 text-charcoal/80">"{t.text}"</p>
              <div className="mt-4 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <div className="mt-3">
                <div className="font-display font-semibold text-charcoal">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.project}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <CtaBand />
      </div>
    </>
  );
}
