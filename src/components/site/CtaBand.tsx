import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBand() {
  return (
    <section className="container-px mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-charcoal p-10 text-white md:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              Let's Transform Your Space
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Whether you're planning a home renovation, office makeover, or commercial interior project, Limon Concrete is ready to deliver elegant and premium interior solutions. Contact us today to schedule your free consultation and site visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Link to="/contact">
                Request Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-charcoal">
              <a href="tel:+919600600909">
                <Phone size={14} className="mr-1" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-charcoal">
              <Link to="/contact">
                <ArrowRight size={14} className="mr-1" /> Book Free Site Visit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
