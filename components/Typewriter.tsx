"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
};

// Types out a short string once on mount, then leaves a blinking cursor.
// Reserved width (ch units) avoids layout shift while it types.
export default function Typewriter({ text, speed = 45, startDelay = 0, className = "" }: Props) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} style={{ display: "inline-block", minWidth: `${text.length}ch` }}>
      <span aria-hidden="true">
        {out}
        <span className={`blink-cursor h-[1em] ${done ? "animate-blink" : "opacity-100"}`} />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
