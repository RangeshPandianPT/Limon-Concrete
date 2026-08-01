import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Limon Concrete" },
      { name: "description", content: "Villas, residential homes, commercial buildings, and interior projects delivered across Tamil Nadu." },
      { property: "og:title", content: "Projects — Limon Concrete" },
      { property: "og:description", content: "Browse our portfolio of landmark projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Landmark projects, crafted with care"
          subtitle="A selection of our recent work across villas, residences, commercial spaces, and interiors."
        />
        <ProjectsGrid showFilter />
      </section>
      <div className="mt-12">
        <CtaBand />
      </div>
    </>
  );
}
