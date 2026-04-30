import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Heart, Music, MapPin } from 'lucide-react';

const albumPages = [
  {
    url: "https://images.unsplash.com/photo-1594132176008-0199e8d752f9?auto=format&fit=crop&q=80&w=1200",
    title: "Grand Entrance",
    description: "The moment the world stood still and we stepped into our forever."
  },
  {
    url: "https://images.unsplash.com/photo-1594132223797-4299b66eeed2?auto=format&fit=crop&q=80&w=1200",
    title: "Mehendi Hues",
    description: "Intricate patterns tracing the story of my love for you."
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
    title: "Sacred Fire",
    description: "Seven steps, seven promises, one beautiful destiny."
  },
  {
    url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200",
    title: "The Reception",
    description: "Dancing under a thousand chandeliers as Mr. & Mrs."
  }
];

export default function WeddingAlbum() {
  const [currentPage, setCurrentPage] = useState(-1); // -1: Cover, 0: P1, 1: P2, etc.
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const turnPage = (dir: 'next' | 'prev') => {
    if (isFlipping) return;
    if (dir === 'next' && currentPage < albumPages.length - 1) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 1000);
    } else if (dir === 'prev' && currentPage > -1) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 1000);
    }
  };

  return (
    <section id="album" className="py-40 px-6 bg-[#020202] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a0a_0%,#000_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center mb-6">
              <BookOpen className="text-gold" size={20} />
            </div>
            <h2 className="text-6xl md:text-8xl font-script text-gold mb-4">The Heirloom</h2>
            <p className="text-zinc-500 uppercase tracking-[0.6em] text-[10px] font-black italic">A Legacy Preserved in Ivory</p>
          </motion.div>
        </div>

        {/* BOOK STAGE */}
        <div className="relative h-[450px] sm:h-[650px] md:h-[800px] w-full flex items-center justify-center transform-gpu" style={{ perspective: "3500px" }}>
          
          {/* Ambient Shadow */}
          <div className="absolute w-[95%] max-w-6xl aspect-[16/10] bg-black blur-[120px] opacity-80 -bottom-10" />

          {/* PHYSICAL BOOK */}
          <div className="relative w-full max-w-6xl aspect-[16/10] flex rounded-xl transition-all duration-700">
            
            {/* LEFT PAGE (Static) */}
            <div className="w-1/2 h-full bg-[#111111] border-l-[10px] border-y-[10px] border-[#0a0a0a] rounded-l-2xl relative shadow-2xl overflow-hidden">
               {/* Leather Texture */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 mix-blend-overlay" />
               
               {currentPage >= 0 ? (
                 <div className="absolute inset-0 bg-[#f8f5e6] m-1 rounded-sm overflow-hidden flex shadow-inner">
                    <img 
                      src={albumPages[currentPage].url} 
                      className="w-full h-full object-cover grayscale-[0.2] opacity-90" 
                      alt="left static" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
                 </div>
               ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <Heart className="text-gold/5" size={80} />
                </div>
               )}
            </div>

            {/* RIGHT PAGE (Static) */}
            <div className="w-1/2 h-full bg-[#111111] border-r-[10px] border-y-[10px] border-[#0a0a0a] rounded-r-2xl relative shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 mix-blend-overlay" />
               
               {currentPage === -1 ? (
                 <div className="absolute inset-4 border border-gold/10 flex flex-col items-center justify-center p-8 bg-[#1a0f0a] rounded-lg">
                    <Heart className="text-gold/20 mb-8" size={40} />
                    <h3 className="text-4xl md:text-6xl font-script text-gold mb-6 drop-shadow-md">The Wedding Archive</h3>
                    <div className="h-px w-24 bg-gold/20 mb-6" />
                    <p className="text-gold/40 tracking-[0.5em] text-[10px] uppercase font-black">Priya & Arjun</p>
                 </div>
               ) : currentPage < albumPages.length - 1 ? (
                 <div className="absolute inset-0 bg-[#f8f5e6] m-1 rounded-sm overflow-hidden flex flex-col justify-center items-center p-12 text-center shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] opacity-40" />
                    <div className="relative z-10">
                      <Heart className="text-gold/30 mb-8 mx-auto" size={24} />
                      <h3 className="text-3xl md:text-5xl font-script text-zinc-900 mb-8">{albumPages[currentPage + 1].title}</h3>
                      <div className="h-px w-16 bg-gold/20 mx-auto mb-8" />
                      <p className="text-zinc-500 font-serif italic text-lg leading-relaxed">{albumPages[currentPage + 1].description}</p>
                    </div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                 </div>
               ) : (
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-[#f8f5e6] m-1 rounded-sm">
                   <p className="text-zinc-300 font-script text-4xl italic">Forever ...</p>
                </div>
               )}
            </div>

            {/* FLIPPING PAGE (Leaf) */}
            <AnimatePresence mode="wait">
              {isFlipping && (
                <motion.div
                  key={`${currentPage}-${flipDirection}`}
                  initial={{ rotateY: flipDirection === 'next' ? 0 : -180 }}
                  animate={{ rotateY: flipDirection === 'next' ? -180 : 0 }}
                  exit={{ rotateY: flipDirection === 'next' ? -180 : 0 }}
                  transition={{ duration: 1.0, ease: [0.645, 0.045, 0.355, 1.0] }}
                  className="absolute left-1/2 top-1 bottom-1 w-[calc(50%-1px)] z-[100] origin-left pointer-events-none"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side of Leaf */}
                  <div className="absolute inset-0 bg-[#f8f5e6] backface-hidden shadow-2xl overflow-hidden rounded-sm flex flex-col items-center justify-center border-l border-black/5">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] opacity-40" />
                    {flipDirection === 'next' ? (
                        currentPage === -1 ? (
                          <div className="w-full h-full bg-[#1a0f0a] flex items-center justify-center">
                             <Heart className="text-gold/20" size={40} />
                          </div>
                        ) : (
                          <div className="p-12 text-center">
                            <h3 className="text-2xl font-script text-zinc-800 mb-4">{albumPages[currentPage].title}</h3>
                            <p className="text-zinc-500 text-sm italic">{albumPages[currentPage].description}</p>
                          </div>
                        )
                    ) : (
                      albumPages[currentPage].url ? (
                        <img src={albumPages[currentPage].url} className="w-full h-full object-cover" alt="prev flip" />
                      ) : null
                    )}
                    <motion.div 
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-black pointer-events-none" 
                    />
                  </div>

                  {/* Back Side of Leaf */}
                  <div 
                    className="absolute inset-0 bg-[#f8f5e6] overflow-hidden rounded-sm border-r border-black/5" 
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                  >
                    {flipDirection === 'next' ? (
                      albumPages[currentPage + 1]?.url ? (
                        <img src={albumPages[currentPage + 1].url} className="w-full h-full object-cover" alt="next flip" />
                      ) : null
                    ) : (
                      currentPage === 0 ? (
                        <div className="w-full h-full bg-[#1a0f0a] flex items-center justify-center">
                           <Heart className="text-gold/20" size={40} />
                        </div>
                      ) : (
                        <div className="p-12 text-center flex flex-col items-center justify-center h-full">
                          <h3 className="text-2xl font-script text-zinc-800 mb-4">{albumPages[currentPage - 1]?.title}</h3>
                          <p className="text-zinc-500 text-sm italic">{albumPages[currentPage - 1]?.description}</p>
                        </div>
                      )
                    )}
                    <motion.div 
                      animate={{ opacity: [0.5, 0] }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-black pointer-events-none" 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SPINE DETAIL */}
            <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-[110] bg-[#0a0a0a] border-x border-gold/10 shadow-[0_0_40px_rgba(0,0,0,1)] flex flex-col justify-around py-12">
               {[1, 2, 3, 4, 5].map(i => (
                 <div key={i} className="h-1.5 w-full bg-gradient-to-b from-black/40 via-gold/5 to-black/40" />
               ))}
            </div>

            {/* NAVIGATION BUTTONS */}
            <button 
              onClick={() => turnPage('prev')}
              disabled={currentPage === -1 || isFlipping}
              className="absolute left-0 inset-y-0 w-1/2 z-[120] cursor-w-resize disabled:cursor-default" 
            />
            <button 
              onClick={() => turnPage('next')}
              disabled={currentPage === albumPages.length - 1 || isFlipping}
              className="absolute right-0 inset-y-0 w-1/2 z-[120] cursor-e-resize disabled:cursor-default" 
            />
          </div>
        </div>

        {/* INDICATORS & HELP */}
        <div className="mt-20 flex flex-col items-center">
            <div className="flex gap-4 mb-8">
              {[-1, ...albumPages.keys()].map((val) => (
                <div 
                  key={val} 
                  className={`h-1.5 rounded-full transition-all duration-700 ${val <= currentPage ? 'w-12 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'w-4 bg-zinc-800'}`} 
                />
              ))}
            </div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.5em] font-black italic">
               {currentPage === -1 ? 'Tap the cover to unlock the legacy' : `Folio ${currentPage + 1} of ${albumPages.length}`}
            </p>
        </div>
      </div>
    </section>
  );
}
