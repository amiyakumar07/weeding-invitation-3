import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-6 glass-gold rounded-3xl max-w-lg mx-auto border-gold mt-20 mb-20"
      >
        <CheckCircle className="mx-auto text-gold mb-6" size={64} />
        <h3 className="text-3xl font-serif text-gold mb-4">Response Received!</h3>
        <p className="text-zinc-400">Thank you for confirming your presence. We can't wait to see you there!</p>
      </motion.div>
    );
  }

  return (
    <section id="rsvp" className="py-24 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-script text-gold mb-4 italic">Be Our Guest</h2>
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Please respond by November 15, 2026</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-gold p-8 md:p-12 rounded-[40px] space-y-6">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full bg-black/50 border border-gold/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors text-white"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Email Address</label>
          <input 
            required
            type="email" 
            className="w-full bg-black/50 border border-gold/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors text-white"
            placeholder="hello@example.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Guests</label>
            <select className="w-full bg-black/50 border border-gold/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors text-white appearance-none">
              {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Attending</label>
            <select className="w-full bg-black/50 border border-gold/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors text-white appearance-none">
              <option>Joyfully Accept</option>
              <option>Regretfully Decline</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Special Note</label>
          <textarea 
            rows={4}
            className="w-full bg-black/50 border border-gold/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors text-white resize-none"
            placeholder="Dietary requirements or a sweet message..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full py-5 bg-gold text-black rounded-2xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
        >
          Send RSVP
          <Send size={18} />
        </button>
      </form>
    </section>
  );
}
