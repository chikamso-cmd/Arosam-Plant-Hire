import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const VideoCTA = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/demolish.jpg" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-12 mx-auto shadow-2xl"
        >
          <Play className="text-secondary fill-secondary w-8 h-8 ml-1" />
        </motion.button>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight max-w-4xl mx-auto">
          Only The Brave Can Unravel Earth's Treasures
        </h2>
      </div>
    </section>
  );
};

export default VideoCTA;
