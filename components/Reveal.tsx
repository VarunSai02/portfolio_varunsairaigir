"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

// Fades + lifts content in once it scrolls into view. Fires once, respects
// prefers-reduced-motion globally (transition durations collapse in globals.css).
// `as="li"` lets it wrap a list item without breaking ol/ul > li semantics.
export default function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const combinedClassName = `transition-all duration-700 ease-out ${
    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  } ${className}`;
  const style = { transitionDelay: `${delay}ms` };

  if (as === "li") {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={combinedClassName} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={combinedClassName} style={style}>
      {children}
    </div>
  );
}
