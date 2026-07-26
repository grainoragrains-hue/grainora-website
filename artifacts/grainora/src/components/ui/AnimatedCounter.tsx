import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const incrementTime = (duration * 1000) / end;
    let timer: NodeJS.Timeout | undefined;
    let animationFrame: number | undefined;

    if (end > 100) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };
      animationFrame = window.requestAnimationFrame(step);
    } else {
      timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end && timer) clearInterval(timer);
      }, incrementTime);
    }

    return () => {
      if (timer) clearInterval(timer);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
