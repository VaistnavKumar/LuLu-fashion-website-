
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex bg-black">
      
      {/* Background elements - Removed watermark for clarity */}
      <div className="absolute inset-0 bg-zinc-950/20 z-10 pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-20 w-full flex flex-col md:flex-row">
        
        {/* Left Section: Campaign 01 */}
        <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12 z-30"
          >
            <h2 className="text-xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter">ESSENTIALS 01</h2>
            <p className="text-[12px] md:text-[14px] font-bold leading-relaxed text-zinc-300 tracking-[0.3em] max-w-sm uppercase">
              REDEFINING THE PERFORMANCE UNIFORM THROUGH ADVANCED TEXTILE INNOVATION.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
              alt="Model Look 1" 
              className="w-full h-full object-cover opacity-50 mix-blend-lighten grayscale"
            />
          </motion.div>
        </div>

        {/* Center Scroll Indicator */}
        <div className="absolute left-1/2 bottom-12 -translate-x-1/2 z-40 flex flex-col items-center gap-6">
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[10px] font-bold tracking-[0.4em] text-white uppercase whitespace-nowrap"
          >
            SCROLL
          </motion.span>
          <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [-80, 80] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </div>

        {/* Right Section: FW25 Persona */}
        <div className="relative w-full md:w-1/2 h-full flex flex-col justify-end px-8 md:px-20 pb-20 md:pb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
              alt="Model Look 2" 
              className="w-full h-full object-cover opacity-50 mix-blend-lighten grayscale"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="z-30 text-right md:text-left md:ml-auto md:max-w-md"
          >
            <h2 className="text-xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter">COLLECTION 2025</h2>
            <p className="text-[12px] md:text-[14px] font-bold leading-relaxed text-zinc-300 tracking-[0.3em] uppercase">
              SCULPTURAL LAYERING, SEAMLESS INTEGRATION, AND UNCOMPROMISING MOTION.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
