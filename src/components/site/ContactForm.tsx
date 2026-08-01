import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  email: z.string().trim().email("Enter a valid email").max(200),
  service: z.string().min(1, "Choose a service"),
  details: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

const SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Designing",
  "Home Renovation",
  "Tile Work & Flooring",
  "Architectural Planning",
  "Real Estate Development",
  "Other",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service,
      details: String(fd.get("details") ?? ""),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setService("");
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="+91 96006 00909" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-2">
        <Label>Service Required</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="details">Project Details</Label>
        <Textarea id="details" name="details" rows={5} placeholder="Tell us about your project, location, and timeline…" required />
      </div>
      <Button type="submit" disabled={loading} size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:opacity-90">
        {loading ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
