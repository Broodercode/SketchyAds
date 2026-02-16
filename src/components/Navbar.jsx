import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  const handleNav = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-4 px-4 pointer-events-none" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <div className="bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
            <span className="font-display font-extrabold text-xl tracking-tighter italic">
              SKETCHY<span className="text-purple-600">ADS</span>
            </span>
          </div>

          <div className="hidden lg:flex gap-4">
            {['Vibe', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className="bg-white border-4 border-black px-6 py-2 font-display font-bold uppercase hover:bg-purple-600 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-purple-600 z-40 flex flex-col justify-center items-center space-y-8 animate-menu-fade-in">
          {['Vibe', 'Services', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item.toLowerCase())}
              className="text-white text-5xl font-display font-extrabold uppercase hover:text-yellow-300 italic transform -rotate-2 hover:rotate-2 transition-transform"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
