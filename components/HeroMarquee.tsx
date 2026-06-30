import React from 'react';
import { motion } from 'framer-motion';

const HeroMarquee: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[15] overflow-hidden pointer-events-none flex items-center opacity-10">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-header text-cronos-lime font-bold mx-8 tracking-tighter uppercase"
          >
            PERFORMANCE • DELIVERY • BRANDING • STRATEGY •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroMarquee;
