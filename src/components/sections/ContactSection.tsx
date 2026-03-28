import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight uppercase">
              Get In Touch <br /> With Our Experts
            </h2>
            <p className="text-gray-500 mb-12">
              Have a question about our machinery or need a custom quote for your project? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-primary p-4 rounded-sm shrink-0">
                  <MapPin className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-black uppercase mb-1">Our Location</h5>
                  <p className="text-gray-500 text-sm">Sylhet 3100, Bangladesh</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-primary p-4 rounded-sm shrink-0">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-black uppercase mb-1">Call Us</h5>
                  <p className="text-gray-500 text-sm">(234)8067944013, (234)8051017610</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-primary p-4 rounded-sm shrink-0">
                  <Mail className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-black uppercase mb-1">Email Us</h5>
                  <p className="text-gray-500 text-sm">arosam2@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-xl rounded-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border-none p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Subject</label>
                <input type="text" className="w-full bg-gray-50 border-none p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="Machinery Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border-none p-4 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn-primary w-full py-4 uppercase tracking-widest">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
