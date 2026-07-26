import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface ProductCard3DProps {
  title: string;
  image: string;
  href: string;
  index: number;
}

export function ProductCard3D({ title, image, href, index }: ProductCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation limits (max 15 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Link href={href} className="block w-full cursor-none">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ perspective: 1000 }}
        className="w-full aspect-[3/4] cursor-none"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            scale: isHovered ? 1.02 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full relative group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden bg-muted">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </div>

          {/* Content layer translated forward in Z-space */}
          <div 
            style={{ transform: 'translateZ(50px)' }}
            className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
          >
            <h3 className="text-white font-serif text-3xl mb-4 font-medium tracking-wide">
              {title}
            </h3>
            
            {/* Glassmorphism explore button */}
            <div className="flex items-center gap-3 text-white/80 bg-white/10 backdrop-blur-md self-start px-5 py-3 rounded-full border border-white/20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-xs uppercase tracking-widest font-semibold">Explore</span>
              <ArrowRight size={14} />
            </div>
          </div>
          
          {/* Highlight effect on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
              transform: 'translateZ(1px)'
            }}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}
