import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { useEffect } from 'react';

interface WeddingHeroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function WeddingHero({ onOpen, isOpen }: WeddingHeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const glowX = useSpring(mouseX, { stiffness: 30 });
  const glowY = useSpring(mouseY, { stiffness: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 50);
      mouseY.set((clientY / innerHeight - 0.5) * 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section 
          key="hero"
          initial={{ opacity: 1 }}
          exit={{ 
            scale: 1.15,
            filter: "blur(60px)",
            opacity: 0,
            transition: { duration: 1.8, ease: [0.7, 0, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
        >
          {/* Parallax Background Layer */}
          <motion.div 
            style={{ x: springX, y: springY }}
            className="absolute inset-[-100px] z-0 select-none pointer-events-none"
          >
            {/* Animated Golden Rays with Mouse Reactivity */}
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.25, 0.1],
                scale: [1, 1.3, 1],
                rotate: [0, 15, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(212,175,55,0)_0%,rgba(212,175,55,0.15)_25%,rgba(212,175,55,0)_50%,rgba(212,175,55,0.15)_75%,rgba(212,175,55,0)_100%)]" 
            />

            {/* Moving Interactive Glow */}
            <motion.div 
              style={{ x: glowX, y: glowY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px]"
            />

            {/* Deep Red Base */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,0,0,0.15)_0%,transparent_80%)]" />
            
            {/* Enhanced Particles */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%",
                  opacity: 0,
                  scale: Math.random() * 0.4 + 0.2
                }}
                animate={{ 
                  y: ["0%", "-60%", "10%"],
                  x: ["0%", Math.random() > 0.5 ? "10%" : "-10%", "0%"],
                  opacity: [0, 0.7, 0],
                  scale: [1, 3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "easeInOut"
                }}
                className="absolute w-1 h-1 md:w-2 md:h-2 bg-gold/50 rounded-full"
              >
                {i % 5 === 0 && <Star className="text-gold fill-gold" size={4} />}
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 pointer-events-none" />

          {/* Main Visual Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.4 } }
            }}
            className="relative z-20 flex flex-col items-center"
          >
            
            {/* Floating Royal Monogram */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: -60, rotate: -20 },
                visible: { opacity: 1, scale: 1, y: 0, rotate: 0 }
              }}
              transition={{ type: "spring", stiffness: 40, damping: 15 }}
              className="mb-8 md:mb-12 relative"
            >
              {[1, 1.2, 1.4].map((s, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    rotate: 360 * (i % 2 === 0 ? 1 : -1),
                    scale: [1 * s, 1.1 * s, 1 * s]
                  }}
                  transition={{ 
                    rotate: { duration: 60 + i * 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 border border-gold/10 rounded-full"
                  style={{ margin: -10 * (i + 1) }}
                />
              ))}
              
              <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-gold/40 flex items-center justify-center glass-gold group overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={{ translateX: ["200%", "-200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    filter: ["drop-shadow(0 0 10px rgba(212,175,55,0.4))", "drop-shadow(0 0 30px rgba(212,175,55,0.8))", "drop-shadow(0 0 10px rgba(212,175,55,0.4))"]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="flex flex-col items-center"
                >
                  <span className="font-serif text-7xl md:text-9xl text-gold font-bold tracking-tighter">PA</span>
                  <div className="h-px w-12 bg-gold/40 my-2" />
                  <Sparkles className="text-gold/60" size={20} />
                </motion.div>
              </div>
            </motion.div>

            {/* Title Block */}
            <div className="text-center space-y-2 md:space-y-4 mb-10 md:mb-16 px-4">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
                  <motion.div initial={{ width: 0 }} animate={{ width: [0, 30, 40] }} className="h-px bg-gold/30 w-8 md:w-10" />
                  <p className="text-[10px] md:text-sm text-gold/60 uppercase tracking-[0.4em] md:tracking-[0.8em] font-black italic whitespace-nowrap">The Union Of</p>
                  <motion.div initial={{ width: 0 }} animate={{ width: [0, 30, 40] }} className="h-px bg-gold/30 w-8 md:w-10" />
                </div>
                
                <div className="flex flex-row items-center justify-center gap-4 md:gap-8 flex-wrap px-2">
                   <motion.h1 
                    className="font-script text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-gold cursor-default select-none leading-none"
                    style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.8))" }}
                   >
                     Priya
                   </motion.h1>
                   
                   <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 md:w-16 md:h-16 border border-gold/10 rounded-full flex items-center justify-center shrink-0"
                   >
                     <Heart className="text-white/20 w-4 h-4 md:w-8 md:h-8" fill="currentColor" />
                   </motion.div>

                   <motion.h1 
                    className="font-script text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-gold cursor-default select-none leading-none"
                    style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.8))" }}
                   >
                     Arjun
                   </motion.h1>
                </div>
              </motion.div>
            </div>

            {/* Royal Call to Action */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="relative"
            >
              <motion.button 
                onClick={onOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center gap-4 md:gap-8"
              >
                <div className="relative">
                  {/* Multiple Pulsing Rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        scale: [1, 1.8], 
                        opacity: [0.6, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 1,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 bg-gold/20 rounded-full"
                    />
                  ))}
                  
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gold flex items-center justify-center bg-black transition-all duration-1000 group-hover:bg-gold group-hover:shadow-[0_0_80px_rgba(212,175,55,0.9)] group-hover:scale-110 overflow-hidden">
                    <Heart className="text-gold group-hover:text-black transition-colors relative z-10 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
                    <motion.div 
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <motion.span 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 mb-1 md:mb-2"
                  >
                    Click to Begin
                  </motion.span>
                  <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Luxury SVG Corner Accents */}
          <CornerDecoration position="top-left" delay={0} />
          <CornerDecoration position="top-right" delay={0.5} />
          <CornerDecoration position="bottom-left" delay={1} />
          <CornerDecoration position="bottom-right" delay={1.5} />

          {/* Majestic Footer Fade */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-12 flex flex-col items-center gap-4 z-20">
             <motion.div 
               animate={{ height: [24, 48, 24] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="w-[1px] bg-gold/40" 
             />
             <p className="text-[10px] font-serif text-gold/40 uppercase tracking-[0.5em] italic">Estd. MMXXVI • JAIPUR</p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

function CornerDecoration({ position, delay }: { position: string, delay: number }) {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1.5 }}
      className={`absolute ${position} m-2 sm:m-6 md:m-16 pointer-events-none z-30`}
    >
      <svg width="40" height="40" sm:width="80" sm:height="80" md:width="120" md:height="120" viewBox="0 0 120 120" className="opacity-40 md:opacity-80">
        <motion.path
          d={isLeft 
            ? (isTop ? "M 0,120 L 0,40 Q 0,0 40,0 L 120,0" : "M 0,0 L 0,80 Q 0,120 40,120 L 120,120")
            : (isTop ? "M 120,120 L 120,40 Q 120,0 80,0 L 0,0" : "M 120,0 L 120,80 Q 120,120 80,120 L 0,120")
          }
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: delay + 1, ease: "easeInOut" }}
        />
        <motion.circle
          cx={isLeft ? "0" : "120"}
          cy={isTop ? "0" : "120"}
          r="3"
          fill="#D4AF37"
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}
