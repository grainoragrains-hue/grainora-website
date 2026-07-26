import React from 'react';

interface InfiniteMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export function InfiniteMarquee({ items, direction = 'left', speed = 'normal', className = '' }: InfiniteMarqueeProps) {
  const speedClass = {
    slow: 'duration-[120s]',
    normal: 'duration-[60s]',
    fast: 'duration-[30s]'
  }[speed];

  const dirClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className={`flex overflow-hidden whitespace-nowrap bg-primary py-6 border-y border-secondary/20 ${className}`}>
      <div className={`flex w-max ${dirClass} ${speedClass} linear infinite`}>
        {/* Double array to ensure seamless looping */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-8 font-serif text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-transparent" 
                  style={{ WebkitTextStroke: '1px hsl(var(--secondary))', color: 'transparent' }}>
              {item}
            </span>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-secondary transform rotate-45" />
          </div>
        ))}
      </div>
      
      {/* Required CSS for the animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left var(--tw-duration, 60s) linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right var(--tw-duration, 60s) linear infinite;
        }
      `}} />
    </div>
  );
}
