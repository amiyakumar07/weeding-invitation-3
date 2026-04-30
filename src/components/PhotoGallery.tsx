import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const memories = [
  {
    url: "https://images.unsplash.com/photo-1594132176008-0199e8d752f9?auto=format&fit=crop&q=80&w=800",
    title: "Mehendi Magic",
    description: "Intricate patterns telling the story of our love."
  },
  {
    url: "https://images.unsplash.com/photo-1594132223797-4299b66eeed2?auto=format&fit=crop&q=80&w=800",
    title: "Together Forever",
    description: "Every moment spent together is a treasure."
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    title: "Sweet Rituals",
    description: "Blessed with traditions that unite our hearts."
  },
  {
    url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800",
    title: "Our Journey",
    description: "From the first hello to our forever I do."
  }
];

export default function PhotoGallery() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Camera className="mx-auto text-gold mb-6" size={32} />
          <h2 className="text-4xl md:text-6xl font-script text-gold mb-4">Our Memories</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">A journey through snapshots</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {memories.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group aspect-[4/5] relative rounded-[40px] overflow-hidden border border-gold/10"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-gold mb-1">{photo.title}</h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
