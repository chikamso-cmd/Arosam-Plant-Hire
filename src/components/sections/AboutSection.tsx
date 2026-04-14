import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/lowbed.jpg" 
              alt="Worker" 
              className="rounded-sm w-full h-80 object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <img 
              src="/d166b.jpg" 
              alt="Machinery" 
              className="rounded-sm w-full h-80 object-cover mt-12"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white">
            <span className="text-xs font-bold uppercase">Since</span>
            <span className="text-2xl font-black">2013</span>
          </div>
        </div>

        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight uppercase">
            Working Through <br /> Dirt & Dust
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Arosam Plant and Hire is a leading provider of heavy machinery and construction equipment. With over a decade of experience, we pride ourselves on delivering high-quality, reliable equipment that powers the most demanding projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              "Rent and manage equipment",
              "Expert maintenance team",
              "View accurate rates",
              "24/7 Support available",
              "Full Satisfaction Guaranteed",
              "Industry leading safety"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-sm font-semibold text-secondary">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-primary">Learn More About Us</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
