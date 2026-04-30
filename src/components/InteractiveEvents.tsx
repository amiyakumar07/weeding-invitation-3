import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Coffee, Music, GlassWater, Heart, Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 'mehndi',
    title: "Mehndi",
    date: "Dec 13, 2026",
    time: "11:00 AM",
    location: "Royal Orchid Garden",
    icon: <Coffee size={24} />,
    description: "An afternoon of intricate henna, laughter, and floral elegance with our closest family and friends."
  },
  {
    id: 'sangeet',
    title: "Sangeet",
    date: "Dec 14, 2026",
    time: "7:00 PM",
    location: "Grand Ballroom",
    icon: <Music size={24} />,
    description: "A musical celebration of two families coming together through dance, music, and joy."
  },
  {
    id: 'wedding',
    title: "Wedding",
    date: "Dec 15, 2026",
    time: "4:00 PM",
    location: "The Grand Palace, Jaipur",
    icon: <Heart size={24} />,
    description: "The main ceremony where we begin our forever journey together under the stars."
  },
  {
    id: 'reception',
    title: "Reception",
    date: "Dec 16, 2026",
    time: "8:00 PM",
    location: "The Grand Palace",
    icon: <GlassWater size={24} />,
    description: "A festive evening of celebration and fine dining as we embark on our new life together."
  }
];

export default function InteractiveEvents() {
  const [activeEvent, setActiveEvent] = useState<typeof events[0] | null>(null);
  const [rotation, setRotation] = useState(0);
  const rotateValue = useMotionValue(0);
  const smoothRotate = useSpring(rotateValue, { stiffness: 60, damping: 25 });

  const [radius, setRadius] = useState(240);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(140);
      else if (window.innerWidth < 1024) setRadius(190);
      else setRadius(240);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-pattern min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-0" />
      
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        
        {/* The Interactive Central Dial */}
        <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] flex items-center justify-center">
          
          {/* Decorative Outer Ring */}
          <div className="absolute inset-[-10px] md:inset-[-20px] border border-gold/10 rounded-full" />
          
          {/* Background Rotating Ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-gold/5 border-dashed rounded-full"
          />

          {/* Rotatable Container */}
          <motion.div
            drag="x"
            dragConstraints={{ left: -3000, right: 3000 }}
            onDrag={(_, info) => {
              const sensitivity = 0.3;
              const newRotation = rotation + info.delta.x * sensitivity;
              setRotation(newRotation);
              rotateValue.set(newRotation);
            }}
            style={{ rotate: smoothRotate }}
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] relative cursor-grab active:cursor-grabbing z-20"
          >
            {/* Visual Circular Track */}
            <div className="absolute inset-0 border-[0.5px] border-gold/20 rounded-full" />

            {events.map((event, idx) => {
              const angle = (idx * (360 / events.length)) * (Math.PI / 180);
              
              return (
                <motion.div
                  key={event.id}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * radius}px - ${radius < 160 ? '28px' : '40px'})`,
                    top: `calc(50% + ${Math.sin(angle) * radius}px - ${radius < 160 ? '28px' : '40px'})`,
                  }}
                >
                  <motion.div
                    onPointerEnter={() => setActiveEvent(event)}
                    onPointerDown={() => setActiveEvent(event)}
                    style={{ rotate: useTransform(smoothRotate, r => -r) }}
                    className={`w-14 h-14 md:w-20 md:h-20 rounded-full glass-gold border-2 flex items-center justify-center transition-all duration-500 shadow-2xl relative ${
                      activeEvent?.id === event.id 
                      ? 'border-gold bg-gold text-black scale-125 z-50 shadow-[0_0_40px_rgba(212,175,55,0.4)]' 
                      : 'border-gold/30 text-gold hover:border-gold hover:scale-110 z-10'
                    }`}
                  >
                    <div className="scale-100 md:scale-125">{event.icon}</div>
                    
                    {activeEvent?.id === event.id && (
                      <motion.div 
                        layoutId="active-ring"
                        className="absolute -inset-3 border border-gold/40 rounded-full"
                        animate={{ scale: [1, 1.15, 1], opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
 
          {/* Central Information Hub - Replaces Fixed Logo when Active */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] rounded-full border-2 border-gold/30 flex flex-col items-center justify-center glass-gold shadow-[0_0_120px_rgba(0,0,0,0.95)] z-30 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-gold/5" />
            
            <AnimatePresence mode="wait">
              {activeEvent ? (
                <motion.div
                  key={activeEvent.id}
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full flex flex-col items-center justify-center px-10 text-center relative z-10"
                >
                  <motion.div 
                    animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="mb-6 text-gold p-5 rounded-3xl bg-gold/5 border border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                  >
                    {React.cloneElement(activeEvent.icon as React.ReactElement, { size: 32 })}
                  </motion.div>
                  
                  <h3 className="text-4xl md:text-6xl font-script text-gold mb-2 leading-none tracking-tight drop-shadow-md">
                    {activeEvent.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
                    <p className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Join Us</p>
                    <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col items-center">
                      <p className="text-sm md:text-lg font-sans font-black text-white tracking-[0.25em] uppercase">
                        {activeEvent.date}
                      </p>
                      <p className="text-base md:text-xl font-serif italic text-gold/80 mt-1">
                        {activeEvent.time}
                      </p>
                    </div>
                    
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      className="h-[1px] bg-gold/20 mx-auto" 
                    />
                    
                    <div className="flex items-center justify-center gap-2 text-zinc-300">
                      <MapPin size={14} className="text-gold" />
                      <p className="text-[11px] md:text-sm font-bold uppercase tracking-widest leading-none">
                        {activeEvent.location.split(',')[0]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center px-8"
                >
                  <motion.div 
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="mb-8"
                  >
                    <Heart size={40} fill="#D4AF37" className="text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                  </motion.div>
                  <span className="font-serif text-7xl md:text-9xl text-gold font-bold tracking-tighter drop-shadow-2xl">P & A</span>
                  <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent my-8" />
                  <span className="text-[13px] uppercase tracking-[1em] text-zinc-500 font-black ml-4">JAIPUR 2026</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating Instructions */}
          {!activeEvent && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Hover icons or rotate dial</p>
              <div className="flex justify-center gap-1">
                <div className="w-1 h-1 rounded-full bg-gold/40 animate-ping" />
                <div className="w-1 h-1 rounded-full bg-gold/40 animate-ping delay-100" />
                <div className="w-1 h-1 rounded-full bg-gold/40 animate-ping delay-200" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
