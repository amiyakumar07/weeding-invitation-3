import { motion } from 'motion/react';

const couple = [
  {
    name: "Priya Sharma",
    role: "The Bride",
    image: "https://images.unsplash.com/photo-1594132176008-0199e8d752f9?auto=format&fit=crop&q=80&w=800",
    description: "Daughter of Mr. Rajesh & Mrs. Sunita Sharma. A creative soul spanning Jaipur's vibrant culture."
  },
  {
    name: "Arjun Kapoor",
    role: "The Groom",
    image: "https://images.unsplash.com/photo-1594132223797-4299b66eeed2?auto=format&fit=crop&q=80&w=800",
    description: "Son of Mr. Vikram & Mrs. Meera Kapoor. A tech-driven visionary with a heart for family traditions."
  }
];

export default function CoupleDetails() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-script text-gold mb-4">The Happy Couple</h2>
        <div className="w-24 h-[1px] bg-gold/30 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {couple.map((person, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-8 p-2 border border-gold/20 rounded-full group">
              <div className="absolute inset-0 border-[3px] border-gold rounded-full scale-100 group-hover:scale-105 transition-transform duration-500" />
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-3xl font-serif text-gold mb-1">{person.name}</h3>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 font-bold">{person.role}</p>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
              {person.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
