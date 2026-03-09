import { Link, Outlet, useLocation } from 'react-router-dom';
import { Terminal, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f5f7f8] dark:bg-[#101722] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white/80 dark:bg-[#101722]/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-slate-100 group">
          <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-[#0d6cf2] to-[#044299] shadow-lg shadow-[#0d6cf2]/30 border border-white/10 group-hover:scale-105 transition-transform relative overflow-hidden">
            <div className="absolute -right-2 -top-2 size-6 rounded-full bg-white/10 blur-sm"></div>
            <div className="absolute -left-2 -bottom-2 size-8 rounded-full bg-black/10 blur-sm"></div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white relative z-10 drop-shadow-md">
              <path d="M4 18V6L8 10L12 6L16 10L20 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="18" r="1.5" fill="currentColor"/>
              <circle cx="20" cy="18" r="1.5" fill="currentColor"/>
              <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight group-hover:text-[#0d6cf2] transition-colors">Mannie Manuel</h2>
        </Link>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#0d6cf2] font-bold border-b-2 border-[#0d6cf2] pb-1'
                    : 'text-slate-600 dark:text-slate-400 hover:text-[#0d6cf2]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#0d6cf2]/10 text-[#0d6cf2] transition-colors hover:bg-[#0d6cf2] hover:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/contact"
              className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#0d6cf2] text-white text-sm font-bold leading-normal tracking-wide hover:bg-[#0d6cf2]/90 transition-all active:scale-95"
            >
              <span className="truncate">Hire Me</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-auto px-6 md:px-20 py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101722]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-6 rounded-md bg-gradient-to-br from-[#0d6cf2] to-[#044299] shadow-sm border border-white/10 relative overflow-hidden">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white relative z-10">
                <path d="M4 18V6L8 10L12 6L16 10L20 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="18" r="1.5" fill="currentColor"/>
                <circle cx="20" cy="18" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-slate-500 text-sm font-medium">© 2026 Mannie Manuel F. Soriano. Crafted with passion.</p>
          </div>
          <div className="flex gap-8">
            <Link className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#0d6cf2] transition-colors" to="/resume">Resume</Link>
            <Link className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#0d6cf2] transition-colors" to="/privacy">Privacy</Link>
            <a className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#0d6cf2] transition-colors" href="https://github.com/MaiyaLi" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
