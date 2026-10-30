import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
      scrolled 
        ? 'bg-[#070b13]/90 border-cyan-500/30 shadow-lg' 
        : 'bg-[#070b13]/70 border-white/10'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 font-mono font-bold text-xl text-white">
          <span className="text-cyan-400">&lt;</span>
          <span>JM</span>
          <span className="text-cyan-400">/&gt;</span>
          <span className="text-[10px] uppercase font-mono tracking-wider ml-2 px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
            Portfolio
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-400 after:w-full'
                  : 'text-slate-300 hover:text-cyan-400 after:w-0'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-200`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-all"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <path strokeWidth="2" strokeLinecap="round" d="M12 2v2m0 16v2m-7.07-15.07l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2m-15.07 7.07l1.41-1.41m11.32-11.32l1.41-1.41" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-slate-900 border border-white/10 text-slate-300 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#070b13] border-b border-cyan-500/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-cyan-400 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

