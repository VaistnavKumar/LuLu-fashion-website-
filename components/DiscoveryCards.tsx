
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const DiscoveryCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const cards = [
    {
      id: 1,
      title: "MONOLITH",
      subtitle: "ARCHIVE STUDY 01",
      description: "A PURE FORM OF ARCHITECTURAL SILENCE",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      range: [0, 0.33]
    },
    {
      id: 2,
      title: "KINETIC",
      subtitle: "ARCHIVE STUDY 02",
      description: "ENGINEERED FOR FLUID HUMAN MOTION",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
      range: [0.33, 0.66]
    },
    {
      id: 3,
      title: "VOID",
      subtitle: "ARCHIVE STUDY 03",
      description: "THE SPACE BETWEEN FABRIC AND SKIN",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      range: [0.66, 1]
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-white h-[450vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 md:px-12">
        <div className="relative w-full max-w-7xl h-full flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <IndividualCard 
              key={card.id} 
              card={card} 
              index={index} 
              progress={smoothProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    img: string;
    range: number[];
  };
  index: number;
  progress: any;
}

const IndividualCard: React.FC<CardProps> = ({ card, progress }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [start, end] = card.range;
  const mid = (start + end) / 2;

  // Scroll-linked layout transforms
  const width = useTransform(progress, [start, mid, end], ["28%", "50%", "28%"]);
  const height = useTransform(progress, [start, mid, end], ["60%", "85%", "60%"]);
  const zIndex = useTransform(progress, [start, mid, end], [10, 50, 10]);

  // Base image filters (Grayscale + Dimmed)
  const grayscale = useTransform(progress, [start, mid, end], ["100%", "80%", "100%"]);
  const brightness = useTransform(progress, [start, mid, end], ["0.3", "0.5", "0.3"]);

  return (
    <motion.div
      style={{
        width,
        height,
        zIndex,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className="relative flex-shrink-0 rounded-sm overflow-hidden bg-zinc-950 transition-all duration-500 ease-out cursor-pointer group"
    >
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{
          scale: isHovered ? 1.1 : 1,
          filter: isHovered 
            ? "grayscale(0%) brightness(1.1)" 
            : `grayscale(${grayscale.get()}) brightness(${brightness.get()})`
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src={card.img} 
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Glow Effect / Shadow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: isHovered ? "inset 0 0 100px rgba(255,255,255,0.15)" : "inset 0 0 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Minimal State Overlay (Index Number) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: isHovered ? 0 : 1 }}
      >
        <span className="text-4xl md:text-6xl font-black text-white/20 tracking-tighter">
          0{card.id}
        </span>
      </motion.div>

      {/* Detailed Content (Revealed on Hover/Touch) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 bg-black/40 backdrop-blur-[2px]"
          >
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-zinc-300 uppercase mb-4"
            >
              {card.subtitle}
            </motion.span>
            
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none mb-6"
            >
              {card.title}
            </motion.h3>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-16 h-[2px] bg-white mb-8 origin-center"
            />
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-[10px] md:text-xs lg:text-sm text-zinc-100 font-medium tracking-[0.3em] uppercase max-w-[300px] leading-relaxed"
            >
              {card.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle indicator for active card (if focused by scroll but not hovered) */}
      <motion.div 
        className="absolute bottom-6 left-0 w-full flex justify-center pointer-events-none"
        style={{ opacity: useTransform(progress, [start + 0.1, mid, end - 0.1], [0, 1, 0]) }}
      >
        <motion.div 
          animate={{ scale: isHovered ? 0 : 1 }}
          className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
        />
      </motion.div>
    </motion.div>
  );
};

export default DiscoveryCards;
