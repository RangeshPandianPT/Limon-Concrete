import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPin, Phone, Mail, Clock, Truck, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact â€” Lime & Conkrete" },
      { name: "description", content: "Get a free consultation. Call +91 7795055517 or send us a project inquiry." },
      { property: "og:title", content: "Contact â€” Lime & Conkrete" },
      { property: "og:description", content: "Reach our team for quotes and consultations." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <SectionHeading
        eyebrow="Contact Us"
        title="Let's discuss your project."
        subtitle="Share a few details and our team will get back within 24 hours with next steps."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold text-charcoal">Reach us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-charcoal/80">
                  Bangalore Karnataka
                </span>
              </li>
              <li className="flex gap-3">
                <Truck size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-charcoal/80">
                  Material supply: All over India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:+917795055517" className="text-charcoal/80 hover:text-primary">
                  +91 7795055517
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:limeandconkrete@gmail.com" className="text-charcoal/80 hover:text-primary">
                  limeandconkrete@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary" />
                <span className="text-charcoal/80">Mon â€“ Sat Â· 9:00 am â€“ 7:00 pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-primary" />
                <a 
                  href="https://www.instagram.com/limeandconkrete?utm_source=qr&igsh=MTd2bGwzam8wYno1Ng%3D%3D" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-charcoal/80 hover:text-primary"
                >
                  Follow us on Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Lime & Conkrete location"
              src="https://www.google.com/maps?q=Bangalore+Karnataka&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
