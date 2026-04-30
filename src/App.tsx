/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import WeddingHero from './components/WeddingHero';
import Particles from './components/Particles';
import Countdown from './components/Countdown';
import CoupleDetails from './components/CoupleDetails';
import InteractiveEvents from './components/InteractiveEvents';
import WeddingAlbum from './components/WeddingAlbum';
import PhotoGallery from './components/PhotoGallery';
import MapSection from './components/MapSection';
import RSVPForm from './components/RSVPForm';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-gold/30 selection:text-gold">
      <Particles />
      
      <WeddingHero isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative"
          >
            {/* Elegant Background Decoration */}
            <div className="fixed inset-0 star-field pointer-events-none z-[-1]" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08)_0%,transparent_50%)] pointer-events-none z-[-1]" />

            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8 pointer-events-none">
              <div className="glass-gold px-10 py-4 rounded-full flex gap-6 md:gap-10 items-center border border-gold/20 pointer-events-auto shadow-2xl">
                <a href="#about" className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 hover:text-gold transition-colors hidden md:block">Couple</a>
                <Heart size={12} className="text-gold hidden md:block" fill="#D4AF37" />
                <a href="#events" className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 hover:text-gold transition-colors">Events</a>
                <Heart size={12} className="text-gold" fill="#D4AF37" />
                <a href="#album" className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 hover:text-gold transition-colors">Album</a>
                <Heart size={12} className="text-gold" fill="#D4AF37" />
                <a href="#rsvp" className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 hover:text-gold transition-colors">RSVP</a>
              </div>
            </nav>

            <header className="pt-48 pb-20 text-center px-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center justify-center gap-6 text-gold mb-6">
                  <div className="w-16 h-[1px] bg-gold/40" />
                  <Heart size={16} fill="#D4AF37" className="animate-sparkle" />
                  <div className="w-16 h-[1px] bg-gold/40" />
                </div>
                <h3 className="uppercase tracking-[0.6em] text-[12px] font-bold text-zinc-500 mb-8">Save the date</h3>
              </motion.div>
              
              <h2 className="text-7xl md:text-[10rem] font-script text-gold mb-2 leading-none">Priya & Arjun</h2>
              <p className="text-xl md:text-2xl font-serif text-white/60 italic tracking-widest mt-4">Together with their families</p>
              
              <div className="mt-20 mb-20">
                <p className="text-3xl md:text-5xl font-serif text-white tracking-[0.4em] uppercase font-bold">December 15, 2026</p>
                <div className="w-32 h-[1px] bg-gold/20 mx-auto my-8" />
                <p className="text-zinc-500 text-sm tracking-[0.4em] uppercase">The Grand Palace, Jaipur</p>
              </div>

              <Countdown />
            </header>

            <div id="about">
              <CoupleDetails />
            </div>

            <div id="events">
              <InteractiveEvents />
            </div>

            <div id="album">
              <WeddingAlbum />
            </div>

            <div id="gallery">
              <PhotoGallery />
            </div>

            <MapSection />

            <div id="rsvp">
              <RSVPForm />
            </div>

            <footer className="py-32 text-center border-t border-gold/10 relative overflow-hidden">
               <div className="absolute inset-0 star-field opacity-10" />
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }} 
                 transition={{ duration: 3, repeat: Infinity }}
                 className="mb-10 flex justify-center"
               >
                 <Heart size={32} className="text-gold" fill="#D4AF37" />
               </motion.div>
               <h4 className="text-5xl md:text-7xl font-script text-gold mb-6 italic tracking-wider">#PriyaWedsArjun</h4>
               <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] font-bold">We can't wait to celebrate with you</p>
               
               <div className="mt-20 text-[9px] text-zinc-700 tracking-[0.2em] font-bold">
                  2026 © PRIYA & ARJUN EXCLUSIVE • DESIGNED WITH ELEGANCE
               </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

