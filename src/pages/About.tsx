import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Clock, Users } from 'lucide-react';
import AboutSection from '../components/sections/AboutSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';

const About = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-6">About Our Company</h1>
          <div className="flex justify-center items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm">
            <span>Home</span>
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-12 shadow-sm border-l-8 border-primary"
          >
            <h3 className="text-3xl font-black mb-6 uppercase">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              To provide the construction and mining industries with the most reliable, high-performance machinery and expert support, enabling our clients to complete their projects safely, efficiently, and on schedule.
            </p>
            <ul className="space-y-4">
              {["Quality Equipment", "Safety First", "Customer Satisfaction", "Innovation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-bold uppercase text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 shadow-sm border-l-8 border-secondary"
          >
            <h3 className="text-3xl font-black mb-6 uppercase">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              To be the global leader in heavy machinery rental and services, recognized for our commitment to excellence, sustainability, and the success of our partners worldwide.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50">
                <Award className="text-primary w-10 h-10 mx-auto mb-4" />
                <span className="block font-black uppercase text-xs">Excellence</span>
              </div>
              <div className="text-center p-6 bg-gray-50">
                <ShieldCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                <span className="block font-black uppercase text-xs">Reliability</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase leading-tight mb-6">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Safety", desc: "We prioritize the safety of our team and clients above all else." },
              { icon: <Clock />, title: "Integrity", desc: "We build trust through honest communication and reliable service." },
              { icon: <Users />, title: "Partnership", desc: "We work closely with our clients to ensure their long-term success." }
            ].map((value, i) => (
              <div key={i} className="text-center p-10 border border-gray-100 hover:border-primary transition-all group">
                <div className="text-primary mb-6 flex justify-center scale-150 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">{value.title}</h4>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default About;
