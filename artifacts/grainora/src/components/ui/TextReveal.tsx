import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = '' }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll('.word-inner');

    gsap.fromTo(
      words,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={className} style={{ display: 'inline-block' }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-outer"
          style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em', paddingBottom: '0.1em' }}
        >
          <span className="word-inner" style={{ display: 'inline-block' }}>
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
