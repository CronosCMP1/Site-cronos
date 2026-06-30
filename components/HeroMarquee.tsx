import React from 'react';
import { motion } from 'framer-motion';

const HeroMarquee: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[15] overflow-hidden pointer-events-none opacity-10">
      <div
        className="absolute left-1/2 top-1/2 flex items-center"
        style={{ transform: 'translate(-50%, -50%) rotate(-45deg)', width: '200vw' }}
      >
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-3xl sm:text-4xl md:text-7xl font-header text-cronos-lime font-bold mx-6 md:mx-8 tracking-tighter uppercase"
            >
              PERFORMANCE • DELIVERY • BRANDING • STRATEGY •
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMarquee;
