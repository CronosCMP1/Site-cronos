import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "VILA'S BURGER", image: "https://img.icons8.com/3d-fluency/94/hamburger.png", type: "Hamburgueria" },
  { name: "SUSHIMON", image: "https://img.icons8.com/3d-fluency/94/sushi.png", type: "Japonesa" },
  { name: "PIZZARIA NAPOLI", image: "https://img.icons8.com/3d-fluency/94/pizza.png", type: "Pizzaria" },
  { name: "GREEN BOWL", image: "https://img.icons8.com/3d-fluency/94/broccoli.png", type: "Saudável" },
  { name: "HOLY STEAK", image: "https://img.icons8.com/3d-fluency/94/steak-medium.png", type: "Steakhouse" },
  { name: "CAFÉ NOIR", image: "https://img.icons8.com/3d-fluency/94/coffee-cup.png", type: "Cafeteria" },
  { name: "GELATO PURA", image: "https://img.icons8.com/3d-fluency/94/ice-cream-cone.png", type: "Gelateria" },
  { name: "CHEF'S TABLE", image: "https://img.icons8.com/3d-fluency/94/chef-hat.png", type: "Alta Gastronomia" },
  { name: "WOK & ROLL", image: "https://img.icons8.com/3d-fluency/94/chinese-noodle.png", type: "Asiática" },
  { name: "TACO LOCO", image: "https://img.icons8.com/3d-fluency/94/taco.png", type: "Mexicano" },
  { name: "CHICKEN HOUSE", image: "https://img.icons8.com/3d-fluency/94/fried-chicken.png", type: "Frango Frito" },
  { name: "FIT LIFE", image: "https://img.icons8.com/3d-fluency/94/avocado.png", type: "Marmitas Fit" },
  { name: "URBAN DRINKS", image: "https://img.icons8.com/3d-fluency/94/beer-mug.png", type: "Bar & Pub" },
  { name: "BREAD & CO", image: "https://img.icons8.com/3d-fluency/94/croissant.png", type: "Padaria" },
  { name: "ADEGA 33", image: "https://img.icons8.com/3d-fluency/94/champagne-bottle.png", type: "Vinhos" },
];

const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-cronos-black border-y border-white/5 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-cronos-white/50 font-sans text-sm uppercase tracking-[0.2em]">
          Restaurantes, Deliveries e Franquias que
        </p>
        <h3 className="text-3xl md:text-5xl font-header font-bold text-cronos-lime uppercase mt-4 tracking-wide drop-shadow-[0_0_15px_rgba(50,205,50,0.4)]">
          Aumentaram o faturamento
        </h3>
      </div>

      <div className="relative flex overflow-hidden mask-image-gradient">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cronos-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cronos-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap pl-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {/* Render loop twice to create infinite scroll effect */}
          {[...Array(2)].map((_, groupIndex) => (
            <React.Fragment key={groupIndex}>
               {/* Brand Items */}
               {brands.map((brand, index) => (
                <div 
                  key={`${groupIndex}-${index}`} 
                  className="flex flex-col items-center justify-center gap-4 opacity-40 hover:opacity-100 transition-all duration-300 group cursor-default grayscale hover:grayscale-0 scale-90 hover:scale-110"
                >
                  <div className="p-4 rounded-3xl border border-white/5 group-hover:border-cronos-lime/30 bg-white/5 group-hover:bg-cronos-lime/5 transition-colors shadow-2xl min-w-[5rem] min-h-[5rem] flex items-center justify-center">
                    <img 
                      src={brand.image} 
                      alt={brand.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://img.icons8.com/3d-fluency/94/restaurant.png";
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <span className="block font-header text-lg md:text-xl tracking-widest text-white group-hover:text-cronos-white transition-colors">
                      {brand.name}
                    </span>
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