import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Tim Joseph", role: "Contractor", img: "https://i.pravatar.cc/150?u=tim" },
    { name: "Joe Cranner", role: "Contractor", img: "https://i.pravatar.cc/150?u=joe" },
    { name: "Andy Orson", role: "Contractor", img: "https://i.pravatar.cc/150?u=andy" }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-10 text-center relative group">
              <div className="text-primary text-6xl font-serif mb-6 opacity-20">"</div>
              <p className="text-gray-500 italic mb-8 relative z-10">
                Arosam's equipment is always in top condition. Their maintenance team is quick to respond, ensuring our projects stay on schedule.
              </p>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <div className="flex flex-col items-center">
                <img src={rev.img} alt={rev.name} className="w-16 h-16 rounded-full mb-4 border-4 border-primary" referrerPolicy="no-referrer" />
                <h5 className="font-black uppercase">{rev.name}</h5>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
