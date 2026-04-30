import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface WeddingHeroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function WeddingHero({ onOpen, isOpen }: WeddingHeroProps) {
  return (
    <AnimatePresence mode="wait">
      {!isOpen && (
        <motion.section 
          key="hero"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.2,
            filter: "blur(20px)"
          }}
          transition={{ duration: 1.5, ease: [0.7, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Background with advanced lighting */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,black_80%)] z-10" />
            
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=2000" 
                alt="Enchanted Forest" 
                className="w-full h-full object-cover opacity-60"
              />
            </motion.div>
          </div>

          {/* Magical Particles Overlay for Hero specifically */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse" />
          </div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="relative z-20 text-center px-6"
          >
            <motion.div 
              className="flex justify-center mb-4 md:mb-8"
              animate={{ 
                y: [0, -12, 0],
                rotateY: [0, 360]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 25, repeat: Infinity, ease: "linear" }
              }}
            >
              <div className="relative group">
                <div className="absolute -inset-8 bg-gold/20 rounded-full blur-3xl animate-pulse" />
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gold/40 glass-gold flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                  <Heart className="text-gold w-8 h-8 md:w-10 md:h-10" fill="#D4AF37" />
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <motion.h1 
                initial={{ letterSpacing: "0.5em", opacity: 0 }}
                animate={{ letterSpacing: "0.05em", opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-6xl sm:text-8xl md:text-[14rem] font-script text-gold mb-[-0.5rem] md:mb-[-2rem] leading-none drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                Priya
              </motion.h1>
              
              <div className="flex items-center justify-center gap-4 md:gap-6 my-2 md:my-4">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "2rem", md: "4rem" }}
                   transition={{ delay: 1.2, duration: 1 }}
                   className="h-[1px] bg-gradient-to-r from-transparent to-gold/50 flex-1 md:flex-none w-12 md:w-16" 
                 />
                 <span className="text-white/60 uppercase tracking-[0.6em] md:tracking-[0.8em] text-[10px] md:text-[12px] font-black italic">Weds</span>
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "2rem", md: "4rem" }}
                   transition={{ delay: 1.2, duration: 1 }}
                   className="h-[1px] bg-gradient-to-l from-transparent to-gold/50 flex-1 md:flex-none w-12 md:w-16" 
                 />
              </div>

              <motion.h1 
                initial={{ letterSpacing: "0.5em", opacity: 0 }}
                animate={{ letterSpacing: "0.05em", opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="text-6xl sm:text-8xl md:text-[14rem] font-script text-gold leading-tight drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                Arjun
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <button 
                onClick={onOpen}
                className="mt-12 md:mt-16 group relative px-12 md:px-16 py-5 md:py-6 overflow-hidden rounded-full border-2 border-gold/50 bg-black/60 backdrop-blur-2xl transition-all hover:border-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10 flex items-center gap-3">
                   <span className="text-gold group-hover:text-black font-black tracking-[0.4em] text-[11px] uppercase transition-colors">Open Invitation</span>
                   <Heart size={14} className="text-gold group-hover:text-black transition-colors" fill="currentColor" />
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Majestic Layered Rings */}
          {[1, 1.4, 1.8].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                rotate: 360 * (i % 2 === 0 ? 1 : -1),
                opacity: 1
              }}
              transition={{ 
                rotate: { duration: 40 + i * 20, repeat: Infinity, ease: "linear" },
                opacity: { duration: 2, delay: 1 }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/5 pointer-events-none"
              style={{ width: 600 * s, height: 600 * s }}
            >
              {i === 0 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full blur-sm" />
              )}
            </motion.div>
          ))}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
