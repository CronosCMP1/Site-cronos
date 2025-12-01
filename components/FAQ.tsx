
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona a assessoria de marketing gastronômico?",
    answer: "Nossa assessoria é 100% focada no setor gastronômico. Fazemos uma análise completa do seu negócio, identificamos as principais dores e oportunidades, e criamos estratégias personalizadas para aumentar seu faturamento, atrair novos clientes e fortalecer sua presença digital."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os resultados variam de acordo com cada negócio, mas a maioria de nossos clientes começa a ver melhorias significativas em 30 a 90 dias. Nosso método validado te traz todo o suporte contínuo para alcançar resultados cada vez maiores."
  },
  {
    question: "Vocês trabalham com restaurantes pequenos?",
    answer: "Sim! Nossa metodologia é adaptável para negócios de todos os tamanhos, desde pequenos restaurantes até grandes redes. Temos planos que se ajustam às suas necessidades e orçamento."
  },
  {
    question: "Qual é o investimento necessário?",
    answer: "O investimento varia de acordo com o tamanho do seu negócio e os resultados que deseja alcançar. Oferecemos planos específicos para seu momento de empreendedor."
  },
  {
    question: "Como posso agendar uma reunião com a Cronos?",
    answer: "Basta preencher o formulário com seus dados, o formulário está em várias partes desse site. Nossa equipe entrará em contato para agendar a reunião no melhor horário para você."
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer: "Sim! Nossa assessoria é 100% online, o que nos permite atender restaurantes e deliveries em todo o país, e em outros continentes também."
  },
  {
    question: "Posso cancelar o serviço a qualquer momento?",
    answer: "Sim, você pode cancelar o serviço a qualquer momento, sem multas ou burocracia. Nosso objetivo é que você fique conosco porque está vendo resultados, não por obrigação."
  },
  {
    question: "Como vocês ajudam a reduzir as taxas do iFood?",
    answer: "Desenvolvemos estratégias para aumentar as vendas diretas (por site próprio), reduzindo a dependência de plataformas como iFood e, consequentemente, diminuindo as taxas pagas a elas."
  },
  {
    question: "O que está incluso na reunião marcada pelo agendamento?",
    answer: "Na reunião, fazemos uma análise inicial do seu negócio, identificamos as principais oportunidades de crescimento e apresentamos um plano de ação personalizado. É uma chance de você conhecer nossa metodologia sem compromisso fixado."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-cronos-black relative z-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-header text-cronos-white mb-16 uppercase tracking-tighter">
          Perguntas Frequentes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-white/5 bg-[#0a0a0a] rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-300 interactive"
                >
                  <span className={`font-sans font-semibold text-lg ${openIndex === index ? 'text-cronos-orange' : 'text-cronos-white/80'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-cronos-white/50" size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-cronos-white/60 font-sans leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Support Card */}
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg text-center relative overflow-hidden">
               {/* Decorative glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-cronos-lime/5 blur-[50px] rounded-full pointer-events-none" />

               <div className="mb-6 flex justify-center">
                 <div className="p-4 rounded-full bg-transparent border-2 border-cronos-lime text-cronos-lime shadow-[0_0_15px_rgba(50,205,50,0.3)]">
                    <MessageCircle size={40} />
                 </div>
               </div>

               <h3 className="text-2xl font-header text-white mb-2 uppercase tracking-wide">
                 Ainda tem dúvidas?
               </h3>
               <p className="text-cronos-white/50 font-sans mb-8">
                 Fale diretamente com o meu suporte.
               </p>

               <a 
                 href="https://wa.me/5561985928791" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full py-4 bg-cronos-lime text-cronos-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 interactive rounded-md"
               >
                 Falar com o Suporte
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
