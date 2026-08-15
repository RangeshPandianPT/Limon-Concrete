import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createServerFn } from "@tanstack/react-start";
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

// Server Function: Replace the inside with real DB or Resend Email logic
export const submitContactFormFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    console.log("SERVER LOG: Received contact inquiry:", data);
    // TODO: Add Resend API or DB Insert here.
    // Example for Resend: 
    // await resend.emails.send({ from: '...', to: '...', subject: 'New Lead', text: ... })
    
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, message: "Thanks! We'll get back to you within 24 hours." };
  });

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    try {
      const response = await submitContactFormFn({ data: parsed.data });
      if (response.success) {
        toast.success(response.message);
        (e.target as HTMLFormElement).reset();
        setService("");
      }
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="+91 7795055517" required />
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
      <Button type="submit" disabled={loading} size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-transform active:scale-95">
        {loading ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
