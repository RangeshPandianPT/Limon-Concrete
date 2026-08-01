import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Professional Team Members" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <div ref={ref} className="font-display text-4xl font-semibold text-charcoal md:text-5xl">
      {val}
      <span className="text-primary">{suffix}</span>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="container-px mx-auto -mt-10 max-w-7xl">
      <div className="rounded-2xl border border-border bg-background p-6 shadow-elegant md:p-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter to={s.value} suffix={s.suffix} />
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
