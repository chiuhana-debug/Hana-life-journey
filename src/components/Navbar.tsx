import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [activeSection, setActiveSection] = useState<string>('journey');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const navLinks = [
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Career', href: '#career', id: 'career' },
    { name: 'Growth', href: '#growth', id: 'growth' },
    { name: 'SMU', href: '#smu', id: 'smu' },
    { name: 'The AI Moment', href: '#ai-moment', id: 'ai-moment' },
    { name: 'Future', href: '#future', id: 'future' },
    { name: "Ask Hana's AI", href: '#ask-ai', id: 'ask-ai' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      // Detect active section
      const sectionElements = navLinks.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }));

      const scrollPosition = window.scrollY + 200;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress indicator */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#abd600] to-[#7df4ff] z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        id="main-navigation"
        className="bg-[#101415]/85 backdrop-blur-xl sticky top-0 border-b border-[#45474b]/30 flex justify-between items-center px-6 md:px-16 py-4 w-full z-50 transition-all duration-300"
      >
        <a
          id="brand-logo-link"
          href="#"
          className="font-playfair text-xl md:text-2xl font-bold text-[#e0e3e5] tracking-tight hover:text-[#7df4ff] transition-colors"
        >
          From Business to AI
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-7 items-center font-spacemono text-xs tracking-wider uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`transition-all duration-300 ${
                  isActive
                    ? 'text-[#7df4ff] border-b border-[#7df4ff] pb-1 font-semibold'
                    : 'text-[#c6c6cb] hover:text-[#7df4ff]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Connect Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-connect-btn"
            onClick={onOpenConnect}
            className="px-5 py-2 border border-[#7df4ff] text-[#7df4ff] font-spacemono text-xs tracking-wider uppercase hover:bg-[#7df4ff] hover:text-[#00363a] transition-all duration-300 inline-flex items-center gap-2 rounded cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(125,244,255,0.15)]"
          >
            <span>Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#e0e3e5] p-2 hover:text-[#7df4ff] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 top-[65px] bg-[#101415]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col p-8 border-b border-[#45474b]/40 animate-fadeIn"
        >
          <div className="flex flex-col space-y-6 font-spacemono text-sm uppercase tracking-widest my-auto">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-[#7df4ff] border-l-2 border-[#7df4ff] pl-4 font-semibold'
                    : 'text-[#c6c6cb] hover:text-[#7df4ff] pl-4'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-6 border-t border-[#45474b]/30">
              <button
                id="mobile-drawer-connect-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConnect();
                }}
                className="w-full py-3.5 border border-[#7df4ff] text-[#7df4ff] font-spacemono text-xs tracking-wider uppercase bg-[#7df4ff]/10 hover:bg-[#7df4ff] hover:text-[#00363a] transition-colors flex items-center justify-center gap-2 rounded"
              >
                <span>Connect with Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
