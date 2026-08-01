import { useState } from "react";
import { MapPin } from "lucide-react";
import { projects, categories } from "./projects-data";

export function ProjectsGrid({ limit, showFilter = false }: { limit?: number; showFilter?: boolean }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);
  const list = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {showFilter && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-charcoal/70 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article
            key={p.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-charcoal backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-charcoal">{p.name}</h3>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" /> {p.location}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
