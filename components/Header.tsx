
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Controla o estilo de vidro (glassmorphism)
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Lógica de Direção do Scroll
    // Se estiver descendo e passou de 150px, esconde (Zoom Out)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } 
    // Se estiver subindo, mostra (Zoom In)
    else if (latest < previous) {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Ecossistema', href: '#ecossistema' },
    { name: 'Diagnóstico', href: '#diagnostico' },
    { name: 'Perguntas', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0, scale: 1, opacity: 1 },
        hidden: { y: -30, scale: 0.9, opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <nav 
        className={`pointer-events-auto transition-all duration-500 rounded-full border flex items-center gap-6 md:gap-8 ${
          isScrolled 
            ? 'bg-cronos-black/80 backdrop-blur-md border-white/10 shadow-2xl py-3 px-6 md:px-8' 
            : 'bg-transparent border-transparent py-4 px-6'
        }`}
      >
        {/* Logo Clickable Area */}
        <a 
          href="#" 
          onClick={scrollToTop} 
          className="hover:opacity-80 hover:scale-105 transition-all duration-300"
          aria-label="Voltar ao topo"
        >
          <Logo className="w-8 h-8 md:w-10 md:h-10 text-cronos-white" />
        </a>

        {/* Divider (only visible on desktop) */}
        <div className="hidden md:block w-[1px] h-4 bg-white/20" />

        <ul className="flex items-center gap-4 md:gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-header uppercase text-[10px] md:text-sm tracking-widest text-cronos-white/70 hover:text-cronos-lime transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cronos-lime transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
