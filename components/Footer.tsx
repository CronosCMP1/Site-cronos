import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import CTAButton from './CTAButton';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cronos-black text-cronos-white pt-32 pb-12 px-4 md:px-12 border-t border-cronos-gray/30 min-h-[50vh] flex flex-col justify-between">
      
      <div>
        <h2 className="text-6xl md:text-[10rem] font-header uppercase leading-none tracking-tighter hover:text-cronos-orange transition-colors duration-500 interactive cursor-pointer">
          Vamos<br/>Cozinhar?
        </h2>
        
        <div className="flex justify-start">
             <CTAButton className="mt-12 md:ml-2" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mt-20">
        <div className="flex gap-6 mb-8 md:mb-0">
            <a href="https://instagram.com/assessoriacronos" target="_blank" rel="noopener noreferrer" className="p-3 border border-cronos-white/20 rounded-full hover:bg-cronos-white hover:text-cronos-black transition-all interactive">
                <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/assessoriacronos" target="_blank" rel="noopener noreferrer" className="p-3 border border-cronos-white/20 rounded-full hover:bg-cronos-white hover:text-cronos-black transition-all interactive">
                <Linkedin size={20} />
            </a>
            <a href="mailto:contato@assessoriacronos.com.br" className="p-3 border border-cronos-white/20 rounded-full hover:bg-cronos-white hover:text-cronos-black transition-all interactive">
                <Mail size={20} />
            </a>
        </div>

        <div className="flex flex-col items-end text-right">
            <div className="mb-6 opacity-30 hover:opacity-100 transition-opacity duration-500">
                <Logo className="w-24 md:w-32" />
            </div>
            <div className="font-sans text-cronos-white/40 text-sm">
                <p className="mb-2 tracking-widest uppercase">São Paulo • Brasil</p>
                <p>© {new Date().getFullYear()} Cronos Marketing.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;