
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  onLinkClick: (slug: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle, isMenuOpen, onLinkClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { name: 'COLLECTIONS', slug: 'collections' },
    { name: 'CAMPAIGN', slug: 'campaign' },
    { name: 'STORES', slug: 'stores' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md text-black shadow-sm' : 'bg-transparent text-white'}`}>
      <div className="flex items-center gap-12">
        <button 
          onClick={() => onLinkClick('HOME')}
          className="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity"
        >
          LULU.
        </button>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em]">
          {navItems.map((item) => (
            <button 
              key={item.slug}
              onClick={() => onLinkClick(item.slug)}
              className="hover:opacity-40 transition-opacity underline-offset-4 hover:underline uppercase"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button 
          onClick={() => onLinkClick('CONTACT')}
          className={`hidden md:flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] group border-b pb-1 uppercase transition-colors ${scrolled ? 'border-black' : 'border-white'}`}
        >
          CONTACT US 
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        
        {/* Menu Toggle */}
        <button 
          onClick={onMenuToggle} 
          className="flex items-center gap-3 group p-2 -mr-2"
        >
          <span className="hidden md:inline-block text-[11px] font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity uppercase">
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </span>
          <div className="relative w-6 h-6 flex flex-col justify-center gap-1.5 overflow-hidden">
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
