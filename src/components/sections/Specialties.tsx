
import { HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Specialties = () => {
  const specialties = [
    { 
      img: "/excavating.jpg", 
      tag: "Industrial", 
      title: "Excavating of Land" 
    },
    { 
      img: "/demolish.jpg", 
      tag: "Construction", 
      title: "Demolition" 
    },
    { 
      img: "/clearing.jpg", 
      tag: "City Service", 
      title: "Road Clearing" 
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between  mb-16 gap-8">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Service</span>
            <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase leading-tight">
              Our Speciality In <br /> This Industry
            </h2>
          </div>
          <button className="btn-primary">View More</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((spec, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={spec.img} 
                  alt={spec.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-primary font-bold text-xs uppercase flex items-center gap-2 mb-2">
                <HardHat className="w-3 h-3" /> {spec.tag}
              </span>
              <h4 className="text-2xl font-black mb-4 uppercase group-hover:text-primary transition-colors">{spec.title}</h4>
              <Link to="#" className="text-secondary font-bold text-sm flex items-center gap-2 hover:text-primary transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
