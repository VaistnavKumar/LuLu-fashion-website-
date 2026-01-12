
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mountain, Users, Camera, Plus } from 'lucide-react';

const DiscoveryCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, -280, -280, 0]);
  const rotateLeft = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, -12, -12, 0]);
  const opacityLeft = useTransform(scrollYProgress, [0.0, 0.2, 0.8, 1.0], [0, 1, 1, 0]);

  const xRight = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 280, 280, 0]);
  const rotateRight = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 12, 12, 0]);
  const opacityRight = useTransform(scrollYProgress, [0.0, 0.2, 0.8, 1.0], [0, 1, 1, 0]);

  const centerScale = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [1, 1.1, 1.1, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.0, 0.1, 0.9, 1.0], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-40 bg-white overflow-hidden flex flex-col items-center justify-center min-h-[120vh]"
    >
      <div className="text-center mb-16 px-6 relative z-40">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase"
        >
          Interactive Archive
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mt-4"
        >
          EXPLORE THE EDIT
        </motion.h2>
        <p className="text-zinc-400 text-xs font-bold tracking-widest mt-4 uppercase">Hover or touch to reveal details</p>
      </div>

      <div 
        className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center w-full h-[600px]"
        style={{ perspective: '1200px' }}
      >
        <CardItem 
          style={{ x: xLeft, rotateZ: rotateLeft, opacity: opacityLeft, zIndex: 1 }}
          img="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
          title="BRUTALIST VEST"
          subtitle="CAMPAIGN 01"
          description="A study in raw concrete textures and structured wool."
          icon={<Mountain className="h-3 w-3" />}
        />

        <CardItem 
          style={{ scale: centerScale, opacity: centerOpacity, zIndex: 3 }}
          img="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
          title="MONOLITH COAT"
          subtitle="PERSONA"
          description="Oversized silhouette with hidden technical fasteners."
          icon={<Users className="h-3 w-3" />}
        />

        <CardItem 
          style={{ x: xRight, rotateZ: rotateRight, opacity: opacityRight, zIndex: 2 }}
          img="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
          title="URBAN VOID"
          subtitle="EDIT FW24"
          description="Symmetry breaking through innovative seam construction."
          icon={<Camera className="h-3 w-3" />}
        />
      </div>
      
      {/* Reduced spacer to prevent 'blank' scrolling feel */}
      <div className="h-[20vh]" />
    </section>
  );
};

const CardItem = ({ style, img, title, subtitle, description, icon }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      className="absolute w-64 sm:w-80 aspect-[3/4] rounded-2xl bg-neutral-900 ring-1 ring-white/10 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer group"
    >
      <motion.img 
        alt={title} 
        animate={{ scale: isHovered ? 1.1 : 1, filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)' }}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700" 
        src={img} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.div
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[9px] font-bold text-neutral-200 uppercase tracking-widest">
              {icon}
              {subtitle}
            </span>
          </div>
          
          <h3 className="text-2xl font-black tracking-tight text-white uppercase leading-none mb-4">{title}</h3>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="text-[11px] text-zinc-400 font-bold tracking-widest uppercase leading-relaxed mb-4">
                  {description}
                </p>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[9px] font-black uppercase tracking-widest">Discover More</span>
                  <Plus className="w-3 h-3" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DiscoveryCards;
