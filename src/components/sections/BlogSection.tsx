import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    { date: "29 Nov", title: "A Smart Choice Lies In Us", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=800" },
    { date: "29 Nov", title: "We Construct Dreams", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" },
    { date: "29 Nov", title: "Quality Is Our Specialty", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Blog</span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase leading-tight">Latest News</h2>
          </div>
          <button className="btn-primary">View More</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 bg-primary p-3 text-center">
                  <span className="block text-xl font-black leading-none">{post.date.split(' ')[0]}</span>
                  <span className="block text-[10px] font-bold uppercase">{post.date.split(' ')[1]}</span>
                </div>
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase group-hover:text-primary transition-colors">{post.title}</h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                Stay updated with the latest trends in construction and mining equipment.
              </p>
              <a href="#" className="text-primary font-bold text-xs uppercase flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
