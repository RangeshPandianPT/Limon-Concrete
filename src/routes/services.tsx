import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Limon Concrete" },
      { name: "description", content: "Residential & commercial construction, interiors, renovation, tile work, architecture, and real estate development." },
      { property: "og:title", content: "Services — Limon Concrete" },
      { property: "og:description", content: "Comprehensive construction & design services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need, under one roof."
          subtitle="From foundation to final finish — our team manages each stage so your project is delivered to standard, on time."
        />
        <ServiceGrid />
      </section>

      <section className="bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Work"
            title="A proven, six-step process"
          />
          <ProcessTimeline />
        </div>
      </section>

      <div className="mt-20">
        <CtaBand />
      </div>
    </>
  );
}
