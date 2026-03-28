import React from 'react';
import { motion } from 'motion/react';

const Prospecting = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Mining Contract</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight uppercase">
            Prospecting For <br /> Good Results
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Donec eget nulla eu turpis porta rhoncus. Nunc vestibulum mauris ipsum, auctor congue lacus tristique eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="space-y-8">
            {[
              { label: "Contract Acquired", val: 75 },
              { label: "Satisfied Customers", val: 87 }
            ].map((bar, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-sm uppercase">{bar.label}</span>
                  <span className="font-bold text-sm">{bar.val}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.val}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" 
            alt="Gold Ore" 
            className="w-full rounded-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-primary w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-2xl border-8 border-white">
            <span className="text-3xl font-black">110+</span>
            <span className="text-[10px] font-bold uppercase leading-tight">Project Done</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prospecting;
