import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ContactForm from './ContactForm';
import HeroMarquee from './HeroMarquee';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.5]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 1) * 0.3 - 0.1,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 18, 114, ${p.alpha})`;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(233, 18, 114, 0.5)";
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
    };

    animate();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cronos-black pt-28 pb-10">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 w-full h-full z-0 origin-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 blur-[3px] pointer-events-none">
          <source src="https://videos.pexels.com/video-files/6756617/6756617-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-cronos-black via-cronos-black/90 to-cronos-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cronos-black z-10" />

      <HeroMarquee />

      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left: headline + subheadline + social proof */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-header text-3xl sm:text-4xl md:text-5xl font-bold text-cronos-white leading-[1.2] uppercase mb-4"
            >
              <span className="text-cronos-lime inline-block">Para restaurantes e delivery's</span>{' '}
              que sofrem com instabilidade de faturamento e pouco fluxo de clientes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 text-sm md:text-base font-sans max-w-md leading-relaxed mb-6"
            >
              Potencialize seu canal de vendas próprio, fidelize seus clientes e tenha previsibilidade de caixa, sem depender de sazonalidade ou marketplaces pra vender.
            </motion.p>

            {/* Social proof — maior e mais destacada */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-sm"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl border border-black/10 bg-cronos-charcoal">
                <div className="flex -space-x-3 shrink-0">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-11 h-11 rounded-full border-2 border-cronos-black bg-gray-200 overflow-hidden">
                      <img src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1 text-yellow-500 text-base mb-0.5">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                  </div>
                  <p className="text-cronos-white font-sans text-sm font-semibold">
                    <span className="text-cronos-lime font-bold text-base">+47 donos</span> de delivery já aumentaram seu faturamento.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-md mx-auto lg:max-w-none"
          >
            <ContactForm variant="hero" />
          </motion.div>

        </div>
      </div>

      {/* Seta — escondida no mobile */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-cronos-white/30" />
      </motion.div>
    </section>
  );
};

export default Hero;
