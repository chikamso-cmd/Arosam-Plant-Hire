import React from 'react';
import { motion } from 'motion/react';
import { Construction, Settings, Truck, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: <Construction className="w-12 h-12" />, 
      title: "Equipment Rental", 
      desc: "Wide range of heavy machinery available for short and long-term hire." 
    },
    { 
      icon: <Settings className="w-12 h-12" />, 
      title: "Maintenance", 
      desc: "Expert on-site maintenance to keep your projects running smoothly." 
    },
    { 
      icon: <Truck className="w-12 h-12" />, 
      title: "Logistics", 
      desc: "Efficient delivery and pickup of machinery to any site location." 
    },
    { 
      icon: <ShieldCheck className="w-12 h-12" />, 
      title: "Safety Training", 
      desc: "Comprehensive operator training and safety certifications." 
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase leading-tight mb-6">
            Comprehensive Solutions For Your Project
          </h2>
          <p className="text-gray-500">
            We provide more than just machinery. We offer end-to-end support to ensure your construction or mining project is a success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-green-600 transition-all text-center cursor-pointer"
            >
              <div className="text-primary mb-6 flex justify-center">{service.icon}</div>
              <h4 className="text-xl font-black mb-4 uppercase">{service.title}</h4>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
