import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <div className="pointer-events-auto fixed bottom-5 right-5 flex flex-col gap-3">
        {show && (
          <button
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-12 w-12 place-items-center rounded-full bg-charcoal text-white shadow-elegant transition-transform hover:scale-105"
          >
            <ArrowUp size={18} />
          </button>
        )}
        <a
          href="tel:+919600600909"
          aria-label="Call now"
          className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform hover:scale-105"
        >
          <Phone size={18} />
        </a>
        <a
          href="https://wa.me/919600600909"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp chat"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-105"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
}
