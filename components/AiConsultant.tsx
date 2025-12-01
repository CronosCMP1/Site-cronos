import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Copy, Smartphone } from 'lucide-react';
import { generateMarketingCopy } from '../services/geminiService';
import CTAButton from './CTAButton';
import Logo from './Logo';

const AiConsultant: React.FC = () => {
  const [dish, setDish] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!dish || !ingredients) return;
    setLoading(true);
    const copy = await generateMarketingCopy(dish, ingredients);
    setResult(copy);
    setLoading(false);
  };

  const platforms = [
    'iFood', 'MenuDino', 'Anota AI', 'Wabiz', 'Cardápio Web', 'Goomer', 'Rappi', 'UberEats',
    'iFood', 'MenuDino', 'Anota AI', 'Wabiz', 'Cardápio Web', 'Goomer', 'Rappi', 'UberEats',
    'iFood', 'MenuDino', 'Anota AI', 'Wabiz', 'Cardápio Web', 'Goomer', 'Rappi', 'UberEats'
  ];

  return (
    <section className="py-24 bg-cronos-charcoal relative overflow-hidden">
      
      {/* Background Mosaic of Platforms */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] flex flex-wrap content-center justify-center gap-6 transform -rotate-6 opacity-20 blur-[2px]">
          {platforms.map((name, i) => (
            <div 
                key={i} 
                className="w-32 h-32 md:w-48 md:h-48 rounded-3xl border border-white/10 bg-white/5 flex flex-col items-center justify-center p-4 backdrop-blur-md shadow-2xl"
            >
                <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-white/40 mb-3" />
                <span className="font-header text-white/60 text-sm md:text-xl uppercase tracking-wider text-center">{name}</span>
            </div>
          ))}
        </div>
        {/* Dark overlay to ensure text readability remains premium */}
        <div className="absolute inset-0 bg-cronos-charcoal/80" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-cronos-black via-transparent to-cronos-black" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
            <div className="flex items-center gap-3 mb-4 text-cronos-lime">
                <Logo className="w-8 h-8 text-cronos-lime" />
                <span className="uppercase tracking-widest text-xs font-header">Cronos Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-header text-cronos-white mb-6 leading-tight">
                OTIMIZAÇÃO DE <br/>
                CARDÁPIO VIA IA
            </h2>
            <p className="text-cronos-white/60 mb-8 font-sans text-lg">
                Seu cardápio está espalhado em diversas plataformas (iFood, MenuDino, Anota AI...), mas a comunicação é fraca? Nossa IA unifica a linguagem e transforma descrições técnicas em vendas.
            </p>

            <div className="space-y-4">
                <div className="relative">
                <label className="block text-xs uppercase tracking-widest text-cronos-white/40 mb-1">Nome do Prato</label>
                <input 
                    type="text"
                    value={dish}
                    onChange={(e) => setDish(e.target.value)}
                    placeholder="Ex: Burger Trufado"
                    className="w-full bg-cronos-black/80 backdrop-blur-sm border border-cronos-gray p-4 text-cronos-white focus:border-cronos-orange focus:outline-none transition-colors interactive"
                />
                </div>
                <div className="relative">
                <label className="block text-xs uppercase tracking-widest text-cronos-white/40 mb-1">Ingredientes Principais</label>
                <input 
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Ex: Blend wagyu, queijo brie, azeite trufado, brioche"
                    className="w-full bg-cronos-black/80 backdrop-blur-sm border border-cronos-gray p-4 text-cronos-white focus:border-cronos-orange focus:outline-none transition-colors interactive"
                />
                </div>
                
                <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-cronos-white text-cronos-black font-header uppercase tracking-widest py-4 hover:bg-cronos-lime transition-colors duration-300 flex items-center justify-center gap-2 interactive disabled:opacity-50"
                >
                {loading ? 'Processando Dados...' : 'Gerar Descrição'}
                {!loading && <ArrowRight size={18} />}
                </button>
            </div>
            </div>

            {/* Right: Result Visualization */}
            <div className="relative h-full min-h-[400px] flex items-center justify-center bg-cronos-black/90 border border-cronos-gray/30 p-8 backdrop-blur-xl shadow-2xl rounded-sm">
                <AnimatePresence mode='wait'>
                    {result ? (
                        <motion.div 
                            key="result"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0 }}
                            className="text-center"
                        >
                            <h3 className="text-cronos-orange font-header uppercase text-xl mb-4 tracking-widest">Resultado Otimizado</h3>
                            <p className="font-serif italic text-2xl text-cronos-white leading-relaxed">
                                "{result}"
                            </p>
                            <button className="mt-8 text-xs text-cronos-white/40 hover:text-cronos-white flex items-center gap-2 mx-auto uppercase tracking-widest interactive">
                                <Copy size={14} /> Copiar Texto
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center opacity-20"
                        >
                            <div className="w-16 h-16 border-2 border-dashed border-white rounded-full mx-auto mb-4 animate-spin-slow" />
                            <p className="font-header uppercase tracking-widest">Aguardando Input</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
        
        <div className="flex justify-center mt-16">
            <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;