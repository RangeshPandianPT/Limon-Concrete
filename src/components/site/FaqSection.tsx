import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which areas do you serve?",
    a: "We primarily serve Theni, Madurai, and surrounding districts in Tamil Nadu. For larger projects, we travel further on request.",
  },
  {
    q: "Do you provide free consultations?",
    a: "Yes — initial consultations and site visits are complimentary. We discuss your vision, budget, and timeline before proposing a plan.",
  },
  {
    q: "How transparent is your pricing?",
    a: "We provide itemized quotes with material specifications, labor, and timelines. No hidden costs — any change is approved in writing.",
  },
  {
    q: "How long does a typical home take?",
    a: "A standard 2BHK home takes 8–10 months; villas and larger projects vary. We share a detailed schedule before work begins.",
  },
  {
    q: "Do you handle approvals and paperwork?",
    a: "Yes — our team handles drawings, approvals, and statutory paperwork end-to-end so you can focus on the design.",
  },
];

export function FaqSection() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-base font-semibold text-charcoal hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
