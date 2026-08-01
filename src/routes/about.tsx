import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import aboutImg from "@/assets/about.jpg";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Limon Concrete" },
      { name: "description", content: "Learn about Limon Concrete — a Theni-based team building landmark homes, interiors, and commercial spaces with quality and trust." },
      { property: "og:title", content: "About — Limon Concrete" },
      { property: "og:description", content: "Our story, mission, and values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="About Us"
          title="A decade of building landmark structures."
          subtitle="Limon Concrete was founded with a simple promise — to build homes and spaces that stand the test of time, delivered with honesty and craft."
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <img
            src={aboutImg}
            alt="Limon Concrete team"
            loading="lazy"
            className="rounded-2xl object-cover shadow-elegant"
          />
          <div>
            <h3 className="font-display text-2xl font-semibold text-charcoal">Our story</h3>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              From a small office in Theni, we've grown into a trusted construction
              and design partner across Tamil Nadu. Our work spans premium villas,
              residential homes, commercial spaces, interiors, and real estate
              development — each delivered with the same standard of care.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced engineers & architects",
                "Quality, certified materials",
                "Transparent pricing",
                "On-time, every time",
                "Modern, durable designs",
                "End-to-end management",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-charcoal/80">
                  <CheckCircle2 size={16} className="text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Link to="/contact">Start your project</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, t: "Our Mission", d: "Build exceptional spaces with quality, transparency, and unwavering attention to detail." },
              { icon: Eye, t: "Our Vision", d: "To be Tamil Nadu's most trusted name in construction, interiors, and real estate." },
              { icon: Heart, t: "Our Values", d: "Integrity, craft, and customer satisfaction guide every decision we make." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-background p-7 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <CtaBand />
      </div>
    </>
  );
}
