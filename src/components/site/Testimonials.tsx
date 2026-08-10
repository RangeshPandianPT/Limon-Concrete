import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const testimonials = [
  {
    name: "Rajesh S.",
    project: "Living Room Wallpaper",
    text: "Lime & Conkrete transformed our living room beautifully. The wallpaper installation was perfect, and the team was extremely professional.",
  },
  {
    name: "Karthik P.",
    project: "Wooden Wall Cladding",
    text: "We chose Lime & Conkrete for wooden wall cladding, and the quality exceeded our expectations. Excellent workmanship and timely delivery.",
  },
  {
    name: "Sunil M.",
    project: "Office Interior",
    text: "Our office interiors now have a modern premium look thanks to Lime & Conkrete. Highly recommended for interior solutions.",
  },
];

export function Testimonials() {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="mx-auto max-w-5xl">
      <CarouselContent>
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="md:basis-1/2">
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Quote className="text-primary" size={28} />
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">"{t.text}"</p>
              <div className="mt-5 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <div className="mt-4">
                <div className="font-display text-base font-semibold text-charcoal">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.project}</div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
