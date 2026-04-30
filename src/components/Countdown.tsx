import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const weddingDate = new Date('2026-12-15T00:00:00').getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 md:gap-8 mt-12 mb-20">
      {Object.entries(timeLeft).map(([label, value]) => (
        <motion.div 
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 glass-gold rounded-full flex items-center justify-center mb-2 border-gold/40">
            <span className="text-xl md:text-3xl font-serif text-gold font-bold">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
