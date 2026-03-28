import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, Settings, Truck, Construction } from 'lucide-react';
import { machines } from '../data/machinery';

const MachineryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const machine = machines.find(m => m.id === id);

  if (!machine) {
    return <Navigate to="/machinery" replace />;
  }

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={machine.img} 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-6">{machine.name}</h1>
          <div className="flex justify-center items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <div className="w-2 h-2 bg-primary rounded-full" />
            <Link to="/machinery" className="hover:text-white transition-colors">Machinery</Link>
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-white">{machine.name}</span>
          </div>
        </div>
      </section>

      {/* Machine Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link to="/machinery" className="inline-flex items-center gap-2 text-secondary font-bold uppercase text-xs mb-12 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <img 
                src={machine.img} 
                alt={machine.name} 
                className="w-full rounded-sm shadow-2xl border-4 border-primary/20"
                referrerPolicy="no-referrer"
              />
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-6 text-center">
                  <ShieldCheck className="text-primary w-8 h-8 mx-auto mb-4" />
                  <span className="block font-black uppercase text-xs">Safety Certified</span>
                </div>
                <div className="bg-gray-50 p-6 text-center">
                  <Clock className="text-primary w-8 h-8 mx-auto mb-4" />
                  <span className="block font-black uppercase text-xs">24/7 Support</span>
                </div>
              </div>
            </motion.div>

            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">{machine.category}</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight uppercase">
                {machine.name}
              </h2>
              
              <div className="space-y-8 mb-12">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {machine.fullDesc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {machine.specs.map((spec, i) => (
                    <div key={i} className="bg-gray-50 p-6 border-l-4 border-primary">
                      <span className="block text-xs text-gray-400 uppercase font-bold mb-1">{spec.label}</span>
                      <span className="text-xl font-black text-secondary">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary p-10 text-white mb-12">
                <h4 className="text-2xl font-black mb-6 uppercase">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Low fuel consumption",
                    "Advanced safety features",
                    "Operator-friendly cab",
                    "High productivity",
                    "Easy maintenance",
                    "Durable construction"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      <span className="font-bold uppercase text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/#contact" className="btn-primary">Rent This Machine</Link>
                <button className="border-2 border-secondary hover:border-primary py-3 px-6 rounded-sm font-bold transition-all">Download Specs</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Machinery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Related Machinery</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase leading-tight">
                You May Also Like
              </h2>
            </div>
            <Link to="/machinery" className="btn-primary">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {machines.filter(m => m.id !== machine.id).slice(0, 3).map((m, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white overflow-hidden group shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={m.img} 
                    alt={m.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-black mb-3 uppercase group-hover:text-primary transition-colors">{m.name}</h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{m.desc}</p>
                  <Link to={`/machinery/${m.id}`} className="text-secondary font-bold text-xs uppercase flex items-center gap-2 hover:text-primary transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineryDetail;
