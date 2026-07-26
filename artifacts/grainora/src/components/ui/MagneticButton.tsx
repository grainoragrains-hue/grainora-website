import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function MagneticButton({ children, className = '', href, onClick, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden transition-colors duration-300 rounded-none";
  
  const variants = {
    primary: "bg-secondary text-primary hover:bg-white",
    secondary: "bg-primary text-white hover:bg-secondary",
    outline: "border border-secondary text-secondary hover:bg-secondary hover:text-primary"
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`px-8 py-4 font-sans text-sm font-semibold tracking-wider uppercase cursor-none ${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block cursor-none">
        {content}
      </Link>
    );
  }

  return content;
}
