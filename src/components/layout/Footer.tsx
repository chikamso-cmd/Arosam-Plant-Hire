import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, HardHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20">
      <div className="container-custom pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-primary p-2 rounded-sm">
                <HardHat className="text-secondary w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">Arosam</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Arosam Plant and Hire is a leading provider of heavy machinery and construction equipment rental services.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-primary hover:text-secondary transition-all rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase">Company</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              {['Home', 'About', 'Machinery', 'Contact'].map((link) => (
                <li key={link}><Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="hover:text-primary transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase">Further Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              {['Term & Condition', 'News', 'Recruitment'].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase">Get In Touch</h4>
            <ul className="space-y-6 text-white/60 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>Sylhet 3100, Bangladesh</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>+8801714457298</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span>riaadarif@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 py-8 text-center text-white/40 text-xs font-bold uppercase tracking-widest">
        Copyright © 2023 - Developed by Riaad Arif.
      </div>
    </footer>
  );
};

export default Footer;
