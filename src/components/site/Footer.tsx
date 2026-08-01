import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg font-bold">
                L
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold">Limon</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Concrete
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium Interior Solutions specializing in wallpaper installation, wall cladding, false ceilings, and customized interior execution for residential and commercial spaces.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-charcoal/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Projects" },
                { to: "/gallery", label: "Gallery" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Wallpaper Installation</li>
              <li>Wall Cladding</li>
              <li>False Ceiling</li>
              <li>Interior Designing</li>
              <li>Commercial Interiors</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  173A Ground Floor, Sri Krishna Towers, Edamal Street, Theni, Tamil Nadu 625531
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919600600909" className="hover:text-primary">
                  +91 96006 00909
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@limonconcrete.com" className="hover:text-primary">
                  info@limonconcrete.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Limon Concrete. All Rights Reserved.</p>
          <p>Premium Interior Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
