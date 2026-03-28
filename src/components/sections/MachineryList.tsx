import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { machines } from '../../data/machinery';

interface MachineryListProps {
  limit?: number;
  showTitle?: boolean;
}

const MachineryList: React.FC<MachineryListProps> = ({ limit, showTitle = true }) => {
  const displayMachines = limit ? machines.slice(0, limit) : machines;

  return (
    <section id="machinery" className="section-padding bg-white">
      <div className="container-custom">
        {showTitle && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Available Machinery</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase leading-tight">
                Our Premium Fleet
              </h2>
            </div>
            {limit && (
              <Link to="/machinery" className="btn-primary">View Full Catalog</Link>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayMachines.map((machine, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-gray-50 overflow-hidden group shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={machine.img} 
                  alt={machine.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary text-secondary text-[10px] font-bold px-3 py-1 uppercase">
                  {machine.specs[0].val} | {machine.specs[1].val}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black mb-3 uppercase group-hover:text-primary transition-colors">{machine.name}</h4>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{machine.desc}</p>
                <Link to={`/machinery/${machine.id}`} className="text-secondary font-bold text-xs uppercase flex items-center gap-2 hover:text-primary transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineryList;
