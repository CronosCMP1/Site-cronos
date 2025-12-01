
import React from 'react';
import { motion } from 'framer-motion';
import { UserX, Wallet, Smartphone, Store, Clock } from 'lucide-react';
import CTAButton from './CTAButton';

const PainPoints: React.FC = () => {
  const painsTop = [
    {
      icon: <UserX size={24} />,
      title: "Dificuldade para atrair novos clientes.",
      description: "Seu restaurante tem qualidade, mas as mesas continuam vazias. O problema não é seu negócio, a questão é que as pessoas ainda não sabem que você existe."
    },
    {
      icon: <Wallet size={24} />,
      title: "Custo alto com marketing sem retorno.",
      description: "Você já gastou com panfletos e impulsionamentos que prometeram milagres. O caixa sangra e você não sabe se o problema é o marketing ou o negócio."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Baixa visibilidade no mundo digital.",
      description: "Quando buscam 'restaurante perto de mim', aparecem os concorrentes. Suas redes não geram engajamento enquanto lugares com menos qualidade dominam."
    }
  ];

  const painsBottom = [
    {
      icon: <Store size={24} />,
      title: "Dependência excessiva de plataformas como iFood.",
      description: "Você trabalha de sol a sol, mas as taxas de 20-30% comem seu lucro. Você virou refém: sem os apps não tem movimento, com eles não sobra margem."
    },
    {
      icon: <Clock size={24} />,
      title: "Falta de tempo para gerenciar redes sociais.",
      description: "Você sabe que precisa postar e criar conteúdo... mas quando? Entre gestão, equipe e fornecedores, suas redes ficam abandonadas."
    }
  ];

  // Card Component for reusability
  const PainCard = ({ item, className }: { item: any, className?: string }) => (
    <div className={`relative bg-[#080808] border border-white/10 rounded-lg p-8 overflow-hidden group hover:border-red-600/50 transition-colors duration-500 h-full flex flex-col ${className}`}>
      {/* Top Red Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-red-600 shadow-[0_0_20px_2px_rgba(220,38,38,0.5)]" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/10 to-transparent opacity-50" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full bg-red-700 text-white flex items-center justify-center mb-6 shadow-lg shadow-red-900/20">
          {item.icon}
        </div>
        
        <h3 className="text-2xl font-sans font-bold text-white mb-4 leading-snug">
          {item.title}
        </h3>
        
        <p className="text-gray-200 font-sans text-base leading-7">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="diagnostico" className="py-24 px-4 md:px-8 bg-cronos-black relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Diagnóstico</span>
          <h2 className="text-4xl md:text-5xl font-header text-white mt-2 uppercase">
            Por que seu delivery <br/> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #DC2626' }}>não escala?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Top Row: 3 items, each takes 2 cols on desktop */}
          {painsTop.map((item, index) => (
            <motion.div
              key={`top-${index}`}
              className="md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PainCard item={item} />
            </motion.div>
          ))}

          {/* Bottom Row: 2 items, each takes 3 cols on desktop (centered) */}
          {painsBottom.map((item, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="md:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              <PainCard item={item} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
            <CTAButton />
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
