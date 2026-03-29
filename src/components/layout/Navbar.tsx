import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Machinery', href: '/machinery' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      (isScrolled || !isHome) ? "bg-white shadow-md py-4" : "bg-transparent py-6"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-green-600 p-2 rounded-sm w-15">
            <img src="/icon.png" alt="" className=" w-full "/>
          </div>
          <span className={cn(
            "text-2xl font-black tracking-tighter uppercase",
            (isScrolled || !isHome) ? "text-secondary" : "text-white"
          )}>
            Arosam
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link  
              key={item.name} 
              to={item.href}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                (isScrolled || !isHome) ? "text-secondary" : "text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
          <p  className="btn-primary ml-4 ">RC NO: 7304530</p>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="text-secondary" /> : <Menu className={(isScrolled || !isHome) ? "text-secondary" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className="text-secondary font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/#contact" className="btn-primary w-full mt-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
