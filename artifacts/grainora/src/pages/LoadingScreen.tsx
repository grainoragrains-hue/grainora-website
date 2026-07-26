import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 25;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a bit at 100% before completing
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <span className="font-serif text-5xl md:text-7xl font-bold tracking-widest text-primary-foreground">
              GRAINORA<span className="text-secondary text-2xl align-top relative top-[-10px]">™</span>
            </span>
          </motion.div>

          <div className="flex flex-col items-center w-64">
            <div className="w-full h-[1px] bg-primary-foreground/20 relative overflow-hidden mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            <div className="flex justify-between w-full text-xs font-mono tracking-widest text-primary-foreground/50">
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
