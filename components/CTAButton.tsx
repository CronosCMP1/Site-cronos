import React from 'react';
import { motion } from 'framer-motion';

// Using motion.a for link behavior with animations
type CTAButtonProps = React.ComponentProps<typeof motion.a> & {
  text?: string;
};

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text = 'Quero aumentar meu faturamento', 
  className = '', 
  href = "https://form.respondi.app/n9C0mEvY",
  target = "_blank",
  rel = "noopener noreferrer",
  ...props 
}) => {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={`inline-block text-center px-8 py-4 border border-cronos-lime bg-cronos-lime text-cronos-black uppercase font-header tracking-widest hover:bg-transparent hover:text-cronos-lime transition-all duration-300 interactive cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {text}
    </motion.a>
  );
};

export default CTAButton;