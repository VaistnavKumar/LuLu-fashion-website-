
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Plus, MapPin, Instagram, Youtube, Twitter, ShoppingBag } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiscoveryCards from './components/DiscoveryCards';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (slug: string) => {
    setIsMenuOpen(false);
    const id = slug.toLowerCase();
    const element = document.getElementById(id);
    
    if (element) {
      // For the campaign section which is very long, we scroll to its start
      const offset = 0; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { name: 'COLLECTIONS', slug: 'collections' },
    { name: 'CAMPAIGN', slug: 'campaign' },
    { name: 'STORES', slug: 'stores' },
    { name: 'ARCHIVE', slug: 'archive' },
    { name: 'CONTACT', slug: 'contact' }
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <CustomCursor />
      <ScrollToTop />
      
      <Navbar 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
        isMenuOpen={isMenuOpen} 
        onLinkClick={handleLinkClick}
      />
      
      <main className="relative">
        <div id="home">
          <Hero />
        </div>
        
        {/* Cinematic Discovery Section */}
        <div id="campaign" className="bg-white">
          <DiscoveryCards />
        </div>

        {/* Brand Philosophy */}
        <section className="bg-black text-white py-48 px-6 md:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 space-y-12">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-[10px] font-bold tracking-[0.6em] text-zinc-500 uppercase block"
                >
                  Brand Ethos
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl xl:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase"
                >
                  FORM <br /> FOLLOWS <br /> <span className="text-zinc-700">MOTION</span>
                </motion.h2>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-4 mt-8 lg:mt-32 space-y-12"
              >
                <div className="h-[1px] w-20 bg-zinc-800 mb-8" />
                <p className="text-zinc-400 text-xl leading-relaxed font-light">
                  We believe that clothing should be an extension of the body's natural geometry. Our materials are engineered for silence and strength, designed to withstand the velocity of modern life without compromising on sculptural integrity.
                </p>
                <div className="space-y-4 pt-6">
                   <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white">Archive Study No. 12</p>
                   <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600 italic">Technical Silk & Kinetic Fiber</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Arrivals */}
        <section className="py-32 px-6 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">New Drops</span>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 uppercase">The Persona Edit</h3>
              </div>
              <button className="text-xs font-black tracking-widest border-b-2 border-black pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors uppercase">
                Shop All Arrivals
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                { name: 'Monolith Parka', price: '$890', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop' },
                { name: 'Void Trouser', price: '$450', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop' },
                { name: 'Kinetic Shell', price: '$620', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop' }
              ].map((product, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] bg-zinc-100 mb-6 overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight">{product.name}</h4>
                      <p className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase mt-1">Water-repellent Finish</p>
                    </div>
                    <span className="text-sm font-bold">{product.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <div id="collections">
          <section className="py-32 px-6 md:px-20 bg-zinc-50 relative z-10 border-t border-zinc-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
              <div className="w-full md:w-1/2 overflow-hidden bg-gray-100 aspect-[4/5] rounded-sm">
                <motion.img 
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Sculptural Detail" 
                  className="w-full h-full object-cover grayscale brightness-95"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-10">
                <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">Archive No. 04</span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
                  THE ARCHITECTURE <br /> OF <span className="font-black italic">ELEGANCE</span>
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                  Exploring the space between body and fabric. Our 2025 collection focuses on technical performance and minimalist silhouettes that redefine comfort in movement.
                </p>
                <button className="group flex items-center gap-6 text-xs font-black tracking-[0.2em] uppercase border-b border-black pb-2 transition-colors hover:border-zinc-300">
                  View Collections <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          </section>
        </div>

        <section id="archive" className="py-20 px-6 md:px-20 bg-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">THE <br/>EDIT</h3>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase max-w-[150px] opacity-40 text-right">Selected works from the 2025 Performance Collection</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop"
              ].map((src, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="aspect-[3/4] bg-zinc-900 overflow-hidden relative group cursor-pointer"
                >
                  <img 
                    src={src} 
                    alt={`Look ${i}`}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 grayscale"
                  />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-widest">LOOK {i.toString().padStart(2, '0')}</span>
                    <Plus className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="stores" className="py-32 px-6 md:px-20 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
             <MapPin className="w-12 h-12 mb-8 text-zinc-300" />
             <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Store Locator</h3>
             <p className="text-zinc-500 max-w-xl text-lg mb-12">Visit our flagship boutiques worldwide to experience the LuLu collection in person. From London to Shanghai, we are present in the world's fashion capitals.</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-10">
                <div className="p-10 bg-white border border-zinc-100 group hover:shadow-2xl transition-all duration-500 text-left">
                  <h4 className="text-xl font-black mb-2">NEW YORK</h4>
                  <p className="text-xs text-zinc-400 font-bold tracking-widest uppercase mb-4">Fifth Avenue</p>
                  <button className="text-[10px] font-black tracking-[0.2em] uppercase underline-offset-4 hover:underline">Get Directions</button>
                </div>
                <div className="p-10 bg-white border border-zinc-100 group hover:shadow-2xl transition-all duration-500 text-left">
                  <h4 className="text-xl font-black mb-2">PARIS</h4>
                  <p className="text-xs text-zinc-400 font-bold tracking-widest uppercase mb-4">Avenue Montaigne</p>
                  <button className="text-[10px] font-black tracking-[0.2em] uppercase underline-offset-4 hover:underline">Get Directions</button>
                </div>
                <div className="p-10 bg-white border border-zinc-100 group hover:shadow-2xl transition-all duration-500 text-left">
                  <h4 className="text-xl font-black mb-2">TOKYO</h4>
                  <p className="text-xs text-zinc-400 font-bold tracking-widest uppercase mb-4">Omotesando</p>
                  <button className="text-[10px] font-black tracking-[0.2em] uppercase underline-offset-4 hover:underline">Get Directions</button>
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="py-24 px-6 md:px-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="space-y-8">
            <h1 className="text-5xl font-black tracking-tighter">LULU.</h1>
            <div className="flex gap-10 text-[10px] font-bold tracking-[0.2em] text-zinc-400">
              <a href="#" className="hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-black transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">Explore</h4>
              <ul className="text-xs font-bold space-y-2 tracking-wide uppercase">
                <li><button onClick={() => handleLinkClick('COLLECTIONS')} className="hover:opacity-50 transition-opacity">Collections</button></li>
                <li><button onClick={() => handleLinkClick('CAMPAIGN')} className="hover:opacity-50 transition-opacity">Campaigns</button></li>
                <li><button onClick={() => handleLinkClick('STORES')} className="hover:opacity-50 transition-opacity">Stores</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">Customer Care</h4>
              <ul className="text-xs font-bold space-y-2 tracking-wide uppercase">
                <li><button onClick={() => handleLinkClick('CONTACT')} className="hover:opacity-50 transition-opacity">Contact Us</button></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex justify-between items-center text-[9px] font-bold tracking-widest text-zinc-300 uppercase">
          <span>© 2025 LULU FASHION GROUP</span>
          <span>Designed for Movement</span>
        </div>
      </footer>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col h-screen overflow-hidden"
          >
            <div className="flex justify-between items-center px-6 md:px-12 py-10 bg-white">
              <button 
                onClick={() => handleLinkClick('HOME')}
                className="text-2xl font-black tracking-tighter"
              >
                LULU.
              </button>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="group flex items-center gap-2 p-2"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto no-scrollbar px-6 md:px-12 pb-32">
              <nav className="flex flex-col items-start gap-4 md:gap-6 mt-10">
                {menuItems.map((item, idx) => (
                  <motion.button 
                    key={item.slug} 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => handleLinkClick(item.slug)}
                    className="group relative text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-left hover:text-zinc-300 transition-colors w-full uppercase"
                  >
                    <span className="relative inline-block">
                      {item.name}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        className="absolute -bottom-2 left-0 h-2 bg-black hidden md:block"
                      />
                    </span>
                  </motion.button>
                ))}
              </nav>

              <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">Connect</p>
                  <div className="flex flex-col gap-2 text-sm font-bold tracking-wide">
                    <a href="#" className="hover:opacity-50 transition-opacity uppercase">Instagram</a>
                    <a href="#" className="hover:opacity-50 transition-opacity uppercase">Tiktok</a>
                    <a href="#" className="hover:opacity-50 transition-opacity uppercase">Vimeo</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">Support</p>
                  <p className="text-sm font-bold tracking-wide uppercase">customercare@lulu.com</p>
                </div>
                <div className="flex items-end">
                   <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">© 2025 LULU FASHION GROUP — PERFORMANCE ARCHIVE</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
