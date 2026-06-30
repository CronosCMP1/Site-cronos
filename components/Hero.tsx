
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Lock } from 'lucide-react';
import ContactForm from './ContactForm';

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
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
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

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, ${p.alpha})`;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 69, 0, 0.5)";
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cronos-black pt-20 pb-10">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full z-0 origin-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[3px] pointer-events-none"
        >
          <source src="https://videos.pexels.com/video-files/6756617/6756617-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>

        <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-cronos-black via-cronos-black/90 to-cronos-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cronos-black z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center">

        <div className="flex flex-col items-center text-center mt-8 md:mt-0">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-[2px] bg-cronos-orange" />
              <span className="font-sans text-cronos-orange font-bold uppercase tracking-widest text-xs md:text-sm">
                Exclusivo para Donos de Delivery
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-header text-5xl md:text-6xl lg:text-7xl font-bold text-cronos-white leading-[1.1] uppercase mb-6"
            >
              Pare de deixar sua margem na mesa: <br className="hidden md:block" />
              Livre-se das taxas dos Apps e dobre seu <span className="text-cronos-lime inline-block transform hover:scale-105 transition-transform duration-300">LUCRO</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-base md:text-xl font-sans max-w-xl leading-relaxed mb-8 mx-auto"
            >
              O método validado para criar seu canal próprio de vendas, fidelizar clientes e ter previsibilidade de caixa, sem depender das taxas abusivas do iFood.
            </motion.p>

                        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-4xl mx-auto"
            >
              <ContactForm variant="hero" />
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="mt-12 pt-6 border-t border-white/10 w-full max-w-md flex justify-center items-center gap-4"
            >
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border border-cronos-black bg-gray-800 overflow-hidden">
                       <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="User" className="w-full h-full object-cover opacity-80" />
                    </div>
                 ))}
              </div>
              <div className="flex flex-col text-left">
                 <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                 </div>
                 <p className="text-cronos-white/70 text-xs md:text-sm font-sans">
                    Junte-se a <strong className="text-white">+47 donos</strong> de delivery.
                 </p>
              </div>
            </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-cronos-white/30" />
      </motion.div>
    </section>
  );
};

export default Hero;
