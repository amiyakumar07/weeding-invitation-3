import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import React, { useRef } from 'react';

export default function MapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [5, -5]);
  const rotateY = useTransform(x, [0, 1], [-5, 5]);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <MapPin className="mx-auto text-gold mb-6 animate-bounce" size={32} />
          <h2 className="text-4xl md:text-6xl font-script text-gold mb-4">Venue & Directions</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Find your way to the celebration</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
            }}
            className="lg:col-span-2 rounded-[40px] overflow-hidden border border-gold/10 h-[400px] relative cursor-pointer"
          >
            <motion.div
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                scale: 1.1, // Start slightly zoomed to allow movement
              }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute inset-0 bg-neutral-900 star-field flex items-center justify-center"
            >
              <div className="text-center group">
                 <motion.div 
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                  className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/30"
                 >
                   <MapPin className="text-gold" />
                 </motion.div>
                 <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-gold transition-colors">The Grand Palace, Jaipur</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <div className="glass-gold p-8 rounded-[40px] border-gold/20">
              <h3 className="text-xl font-serif text-gold mb-4">The Grand Palace</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                123 Heritage Lane, Jaipur, Rajasthan 302001<br />
                India
              </p>
              <button className="w-full py-4 glass-gold border-gold/30 text-gold rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-gold hover:text-black transition-all">
                <Navigation size={14} />
                Get Directions
              </button>
            </div>

            <div className="glass-gold p-8 rounded-[40px] border-gold/20">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">Contact Info</h4>
              <p className="text-sm text-zinc-300 mb-2 font-serif">+91 98765 43210</p>
              <p className="text-sm text-zinc-300 font-serif">concierge@grandpalace.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
