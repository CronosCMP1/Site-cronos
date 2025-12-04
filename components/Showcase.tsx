
import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CTAButton from './CTAButton';

const data = [
  { name: 'Mês 1', roas: 2.1 },
  { name: 'Mês 2', roas: 2.3 },
  { name: 'Mês 3', roas: 2.4 }, // Estabilidade (Fundação)
  { name: 'Mês 4', roas: 5.8 }, // Início da Escala
  { name: 'Mês 5', roas: 9.2 },
  { name: 'Mês 6', roas: 14.5 }, // Resultado Exponencial
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-16 md:py-32 bg-cronos-black border-t border-cronos-gray/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cronos-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Philosophy Text */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
            >
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-cronos-lime animate-pulse" />
                    <span className="text-cronos-lime font-mono text-sm uppercase tracking-widest">Growth Hacking</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-header text-cronos-white uppercase leading-tight mb-8">
                    Implementamos um <span className="text-cronos-lime">projeto</span>, <br/>
                    não um remédio <span className="text-cronos-white/30 line-through decoration-cronos-orange decoration-2">prescrevido</span>.
                </h2>
                
                <p className="text-cronos-white/60 text-lg font-sans leading-relaxed mb-8 max-w-xl">
                    A maioria dos restaurantes buscam resultados rápidos que não se sustentam (o "remédio"). Nós construímos uma fundação sólida nos primeiros meses, ajustando casa, cardápio e oferta, para que a escala, quando vier, seja vertical e definitiva.
                </p>

                <div className="flex gap-8">
                    <div>
                        <span className="block text-4xl font-header text-white">+37%</span>
                        <span className="text-xs text-white/40 uppercase tracking-widest">Média de ROAS</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-header text-white">6 Meses</span>
                        <span className="text-xs text-white/40 uppercase tracking-widest">Ciclo de Maturação</span>
                    </div>
                </div>
            </motion.div>

            {/* Right: Chart Area */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-cronos-charcoal/40 backdrop-blur-sm p-8 border border-white/5 rounded-xl w-full flex flex-col relative group"
            >   
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="flex justify-between items-center mb-8 relative z-10">
                    <h3 className="font-header text-xl uppercase tracking-widest text-white/80">Curva de Crescimento</h3>
                    <div className="px-3 py-1 rounded-full bg-cronos-lime/10 border border-cronos-lime/20 text-cronos-lime text-xs font-bold uppercase">
                        Dados Auditados
                    </div>
                </div>

                {/* Explicit height container to prevent Recharts 'width(-1)' error */}
                <div className="w-full h-[300px] md:h-[350px] relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorRoas" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#32CD32" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#32CD32" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis 
                                dataKey="name" 
                                stroke="#555" 
                                fontSize={10} 
                                tickLine={false} 
                                axisLine={false} 
                                tickMargin={10}
                            />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#050505', borderColor: '#333', borderRadius: '4px' }}
                                itemStyle={{ color: '#32CD32', fontWeight: 'bold' }}
                                cursor={{ stroke: 'rgba(50,205,50,0.5)', strokeWidth: 1, strokeDasharray: '4 4' }}
                                formatter={(value: number) => [`${value}x`, 'ROAS']}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="roas" 
                                stroke="#32CD32" 
                                strokeWidth={3}
                                fillOpacity={1} 
                                fill="url(#colorRoas)" 
                                animationDuration={2000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Annotation for stability phase */}
                <div className="absolute bottom-12 left-12 hidden md:block">
                    <div className="text-white/30 text-xs font-mono mb-1">↑ Fundação</div>
                    <div className="w-24 h-[1px] bg-white/10"></div>
                </div>
                 {/* Annotation for growth phase */}
                 <div className="absolute top-1/2 right-12 hidden md:block">
                    <div className="text-cronos-lime text-xs font-mono mb-1">↑ Escala</div>
                </div>

            </motion.div>
        </div>
        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-24"
        >
            <CTAButton />
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
