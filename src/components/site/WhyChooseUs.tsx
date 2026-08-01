import { Users, Award, PenTool, Wallet, Clock, Wrench, ShieldCheck, ThumbsUp } from "lucide-react";

const items = [
  { icon: Users, title: "Experienced Interior Professionals", desc: "Expert team for all interior needs." },
  { icon: Award, title: "Premium Quality Materials", desc: "Top-tier wallpaper, cladding, and ceilings." },
  { icon: PenTool, title: "Customized Design Solutions", desc: "Tailored to your specific residential or commercial needs." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Premium quality that respects your budget." },
  { icon: Clock, title: "On-Time Project Completion", desc: "We deliver beautiful spaces exactly when promised." },
  { icon: Wrench, title: "Skilled Installation Team", desc: "Flawless execution by our trained craftsmen." },
  { icon: ShieldCheck, title: "Transparent Project Management", desc: "Clear communication from consultation to handover." },
  { icon: ThumbsUp, title: "Customer Satisfaction Guaranteed", desc: "Your happiness is our ultimate priority." },
];

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group flex gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon size={22} />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
