import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Modern luxury interior by Lime & Conkrete"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
      </div>

      <div className="container-px mx-auto max-w-7xl py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Premium Interior Solutions
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-charcoal md:text-5xl lg:text-6xl">
            Premium Interior &{" "}
            <span className="text-gradient-gold">Wall Finishing Experts</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 md:text-lg">
            Transform your residential and commercial spaces with premium wallpaper, wall cladding, false ceilings, and customized interior solutions crafted with precision and quality.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground shadow-gold hover:opacity-90">
              <Link to="/contact">
                Request Free Site Visit
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white">
              <Link to="/contact">
                <Play size={14} className="mr-1" /> Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
