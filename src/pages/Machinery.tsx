import React from 'react';
import MachineryList from '../components/sections/MachineryList';

const Machinery = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-6">Our Machinery Fleet</h1>
          <div className="flex justify-center items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm">
            <span>Home</span>
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-white">Machinery</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Available Machinery</span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase leading-tight mb-6">
              Premium Equipment For Any Job
            </h2>
            <p className="text-gray-500">
              Explore our wide range of expertly maintained heavy machinery, from excavators and bulldozers to articulated trucks and wheel loaders.
            </p>
          </div>

          <MachineryList showTitle={false} />
        </div>
      </section>
    </div>
  );
};

export default Machinery;
