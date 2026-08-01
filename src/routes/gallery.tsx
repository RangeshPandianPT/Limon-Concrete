import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import villa from "@/assets/project-villa.jpg";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";

const images = [
  { src: g1, alt: "Modern kitchen interior" },
  { src: villa, alt: "Luxury villa" },
  { src: g2, alt: "Master bedroom interior" },
  { src: interior, alt: "Living room interior" },
  { src: g3, alt: "Marble flooring" },
  { src: residential, alt: "Residential home" },
  { src: commercial, alt: "Commercial building" },
  { src: g4, alt: "Construction in progress" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Limon Concrete" },
      { name: "description", content: "Photos of construction projects, interior designs, renovations, and completed homes." },
      { property: "og:title", content: "Gallery — Limon Concrete" },
      { property: "og:description", content: "Visual showcase of our work." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from our craft"
          subtitle="Construction sites, interiors, and completed homes — captured along the way."
        />
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(img.src)}
              className="block w-full overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/80 p-4 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-full rounded-xl" />
        </div>
      )}

      <div className="mt-12">
        <CtaBand />
      </div>
    </>
  );
}
