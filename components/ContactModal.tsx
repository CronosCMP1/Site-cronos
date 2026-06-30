import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import ContactForm from './ContactForm';

const ContactModal: React.FC = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-cronos-black border border-cronos-white/10 rounded-md p-8"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-cronos-white/50 hover:text-cronos-white interactive"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <h3 className="font-header text-2xl uppercase text-cronos-white mb-2">
              Quero recuperar minha margem
            </h3>
            <p className="text-cronos-white/60 font-sans text-sm mb-6">
              Preencha seus dados e nossa equipe entra em contato.
            </p>

            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
