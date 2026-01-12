
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[150] w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-2xl group border border-zinc-800"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative overflow-hidden w-5 h-5">
            <motion.div
              animate={{ y: [20, 0] }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </motion.div>
          </div>
          
          {/* Subtle label that appears on hover */}
          <motion.span 
            className="absolute right-full mr-4 text-[10px] font-black tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-black pointer-events-none"
          >
            Back to Top
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
