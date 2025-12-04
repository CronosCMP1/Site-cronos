
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Utensils, Zap, ShoppingBag } from 'lucide-react';
import { ServiceItem } from '../types';
import CTAButton from './CTAButton';

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'TRÁFEGO PAGO',
    description: 'Gestão de mídia de alta performance focada em ROAS agressivo para delivery.',
    // Rocket launch representing high growth/propulsion
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: '02',
    title: 'ENGENHARIA DE CARDÁPIO',
    description: 'Otimização psicológica de layout e precificação para aumento de ticket médio.',
    // Succulent dark-themed burger
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'BRANDING GASTRONÔMICO',
    description: 'Identidade visual que desperta fome e constrói autoridade de marca.',
    image: 'https://picsum.photos/id/1060/800/600' // Kitchen/Chef
  },
  {
    id: '04',
    title: 'CONSULTORIA DELIVERY',
    description: 'Estratégias avançadas de posicionamento dentro do iFood e Rappi.',
    // Busy restaurant full of customers
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  return (
    <section id="ecossistema" className="py-12 md:py-24 px-4 md:px-12 bg-cronos-black relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-2 border-cronos-lime pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-header text-cronos-white uppercase tracking-tighter">
            O Ecossistema
          </h2>
          <p className="text-cronos-white/50 mt-2 font-sans text-xl">
            Soluções integradas para dominância de mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 md:h-96 w-full overflow-hidden bg-cronos-charcoal border border-cronos-gray hover:border-cronos-orange/50 transition-colors duration-500 interactive"
            >
              {/* Image Background (Visible by default) */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-700 scale-110 group-hover:scale-100 transform"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-cronos-black/90 via-cronos-black/50 to-cronos-black/20" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-header text-6xl text-cronos-white/10 group-hover:text-cronos-orange transition-colors duration-500">
                    {service.id}
                  </span>
                  <div className="p-3 bg-cronos-gray/50 rounded-full group-hover:bg-cronos-orange group-hover:text-white transition-colors duration-300">
                     {index === 0 && <TrendingUp size={24} />}
                     {index === 1 && <Utensils size={24} />}
                     {index === 2 && <Zap size={24} />}
                     {index === 3 && <ShoppingBag size={24} />}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-header uppercase tracking-wide text-cronos-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-cronos-white/80 group-hover:text-cronos-white transition-colors duration-300 max-w-sm drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
            <CTAButton />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
