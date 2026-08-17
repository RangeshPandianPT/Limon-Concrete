import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Truck } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Lime & Conkrete Logo" 
                className="h-16 w-auto object-contain mix-blend-multiply" 
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium Interior Solutions specializing in wallpaper installation, wall cladding, false ceilings, and customized interior execution for residential and commercial spaces.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/limeandconkrete?utm_source=qr&igsh=MTd2bGwzam8wYno1Ng%3D%3D", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-charcoal/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={label}
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
                  Bangalore Karnataka
                </span>
              </li>
              <li className="flex gap-3">
                <Truck size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  Material supply: All over India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+917795055517" className="hover:text-primary">
                  +91 7795055517
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:limeandconkrete@gmail.com" className="hover:text-primary">
                  limeandconkrete@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Lime & Conkrete. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <span>Delivering Premium Interior Solutions Across India.</span>
            <span className="hidden md:inline">|</span>
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
