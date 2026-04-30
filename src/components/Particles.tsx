import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, duration: number, delay: number, rotate: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      rotate: Math.random() * 360
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-gold/10"
          initial={{ left: `${p.x}%`, top: `-10%`, rotate: p.rotate, opacity: 0 }}
          animate={{
            top: '110%',
            rotate: p.rotate + 180,
            opacity: [0, 0.3, 0.3, 0],
            x: [0, 40, -40, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        >
          <Heart size={p.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
