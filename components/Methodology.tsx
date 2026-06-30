import React from 'react';
import { motion } from 'framer-motion';
import { Target, UtensilsCrossed, Repeat, TrendingUp } from 'lucide-react';
import CTAButton from './CTAButton';
import Logo from './Logo';

const Methodology: React.FC = () => {
  const pillars = [
    {
      id: 1, title: "ATRAÇÃO", subtitle: "Tráfego Qualificado",
      icon: <Target className="w-6 h-6" />,
      description: "Não trazemos apenas cliques, trazemos clientes famintos na região exata do seu delivery."
    },
    {
      id: 2, title: "CONVERSÃO", subtitle: "Cardápio Persuasivo",
      icon: <UtensilsCrossed className="w-6 h-6" />,
      description: "Fotos, descrições e engenharia de cardápio desenhados para aumentar o ticket médio."
    },
    {
      id: 3, title: "RETENÇÃO", subtitle: "LTV & Fidelidade",
      icon: <Repeat className="w-6 h-6" />,
      description: "Transformamos o cliente de uma vez em cliente recorrente através de CRM e automação."
    },
    {
      id: 4, title: "EXPANSÃO", subtitle: "Escala & Branding",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Estratégias de posicionamento de marca para preparar seu negócio para franquias."
    }
  ];

  return (
    <section id="metodologia" className="relative py-16 md:py-32 bg-cronos-charcoal overflow-hidden border-t border-black/5">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Roman Columns"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cronos-charcoal via-cronos-charcoal/90 to-cronos-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cronos-charcoal via-transparent to-cronos-charcoal" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10 text-cronos-orange" />
              <span className="text-cronos-orange font-bold tracking-[0.3em] uppercase text-xs">
                O Método Cronos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-header text-cronos-white leading-[1.1] mb-8 uppercase">
              Metodologia ACR que já transformou{' '}
              <span className="text-cronos-lime">vários restaurantes</span>.
            </h2>

            <div className="w-20 h-1 bg-cronos-orange mb-8" />

            <p className="text-cronos-white/70 text-lg leading-relaxed font-sans mb-6">
              Chega de gastar dinheiro com marketing que não traz retorno. Nossa assessoria é{' '}
              <strong className="text-cronos-white">100% especializada no setor gastronômico</strong>,
              com um time que vive e respira restaurantes.
            </p>
            <p className="text-cronos-white/70 text-lg leading-relaxed font-sans">
              Entendemos suas dores, conhecemos seu público e sabemos exatamente o que funciona para fazer
              seu negócio crescer de forma{' '}
              <strong className="text-cronos-white">previsível e escalável</strong>.
            </p>
          </motion.div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 gap-6 relative">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cronos-orange/0 via-cronos-orange/50 to-cronos-orange/0 hidden md:block" />

            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-0 md:pl-20 group"
              >
                <div className="absolute left-[29px] top-1/2 -translate-y-1/2 w-3 h-3 bg-cronos-black border border-cronos-orange rounded-full hidden md:block group-hover:bg-cronos-orange transition-colors duration-300 z-20" />
                <div className="bg-cronos-black border border-black/10 p-6 rounded-sm hover:border-cronos-lime/50 transition-all duration-300 hover:bg-black/5 hover:shadow-[0_10px_30px_-10px_rgba(233,18,114,0.2)] hover:-translate-y-1 interactive relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cronos-lime/10 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 bg-cronos-charcoal border border-black/10 rounded-lg text-cronos-lime group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-header uppercase text-cronos-white mb-1 group-hover:text-cronos-lime transition-colors">
                        {pillar.id}. {pillar.title}
                      </h4>
                      <span className="text-xs uppercase tracking-widest text-cronos-white/40 mb-2 block">
                        {pillar.subtitle}
                      </span>
                      <p className="text-cronos-white/60 text-sm font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA abaixo dos pilares — aparece após os cards em mobile e desktop */}
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

export default Methodology;
