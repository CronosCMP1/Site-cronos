import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Marquee: React.FC = () => {
  return (
    <div className="py-6 bg-cronos-lime overflow-hidden flex items-center border-y border-cronos-black/10">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
                <span className="text-4xl md:text-6xl font-header text-cronos-black font-bold ml-8 mr-8 tracking-tighter">
                    PERFORMANCE • DELIVERY • BRANDING • STRATEGY
                </span>
                <div className="mr-8 opacity-80">
                    <Logo className="w-12 h-12 text-cronos-black" />
                </div>
            </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;