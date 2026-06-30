import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { image: "/1.png" },
  { image: "/2.png" },
  { image: "/3.png" },
  { image: "/4.png" },
  { image: "/5.png" },
  { image: "/6.png" },
  { image: "/7.png" },
  { image: "/8.png" },
  { image: "/9.png" },
  { image: "/10.png" },
  { image: "/11.png" },
  { image: "/12.png" },
  { image: "/13.png" },
];

const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-cronos-black border-y border-black/5 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-cronos-white/50 font-sans text-sm uppercase tracking-[0.2em]">
          Restaurantes, Deliveries e Franquias que
        </p>
        <h3 className="text-3xl md:text-5xl font-header font-bold text-cronos-lime uppercase mt-4 tracking-wide drop-shadow-[0_0_15px_rgba(233,18,114,0.3)]">
          Aumentaram o faturamento
        </h3>
      </div>

      <div className="relative flex overflow-hidden mask-image-gradient">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cronos-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cronos-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-10 md:gap-16 items-center whitespace-nowrap pl-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <React.Fragment key={groupIndex}>
               {brands.map((brand, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default grayscale hover:grayscale-0 scale-90 hover:scale-110"
                >
                  <div className="p-4 rounded-3xl border border-black/10 group-hover:border-cronos-lime/30 bg-black/5 group-hover:bg-cronos-lime/5 transition-colors shadow-sm min-w-[6rem] min-h-[6rem] flex items-center justify-center">
                    <img
                      src={brand.image}
                      alt="Logo de cliente Cronos"
                      className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://img.icons8.com/3d-fluency/94/restaurant.png";
                      }}
                    />
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
