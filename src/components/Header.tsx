import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight, Award } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/10 group-hover:shadow-orange-500/20 transition-all">
              <Award className="w-5.5 h-5.5" />
              <div className="absolute inset-0 rounded-xl bg-orange-400 blur-sm opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-slate-900 dark:text-white leading-tight">
                Mark-Anthony
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#f97316] font-semibold uppercase">
                Growth Strategist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-amber-400 transition-colors duration-200 relative py-1.5 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-amber-400 hover:border-orange-500/30 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Premium CTA */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2 h-10 text-xs font-bold font-display rounded-xl text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-orange-500 dark:hover:bg-amber-400 dark:hover:text-slate-900 hover:text-white shadow-sm border border-transparent hover:border-orange-600/10 transition-all duration-200 group"
            >
              Consultation
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Actions: Hamburger and Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 h-9 w-9 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 h-9 w-9 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-orange-500 dark:hover:text-amber-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold font-display text-sm tracking-wide shadow-md shadow-orange-500/10"
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
