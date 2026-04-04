import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-img.png" 
          alt="Heavy Machinery" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            Heavy <br />
          <span className="text-primary">-</span>Duty <br />
            Machinery
          </h1>
          <Link to="/machinery" className="btn-primary inline-flex items-center gap-2 group">
            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 max-w-md ml-auto">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Info</span>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Quality Works Require Best Tools</h3>
            <p className="text-white/80 mb-8">
              Explore our large selection of expertly maintained heavy equipment for your project.
            </p>
            <div className="w-12 h-1 bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

