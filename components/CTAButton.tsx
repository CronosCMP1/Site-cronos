import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

type CTAButtonProps = React.ComponentProps<typeof motion.button> & {
  text?: string;
};

const CTAButton: React.FC<CTAButtonProps> = ({
  text = 'Quero aumentar meu faturamento',
  className = '',
  ...props
}) => {
  const { openModal } = useModal();

  return (
    <motion.button
      type="button"
      onClick={openModal}
      className={`inline-block text-center px-8 py-4 border border-cronos-lime bg-cronos-lime text-cronos-black uppercase font-header tracking-widest hover:bg-transparent hover:text-cronos-lime transition-all duration-300 interactive cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {text}
    </motion.button>
  );
};

export default CTAButton;
