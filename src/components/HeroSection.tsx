import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/journeyData';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const handleScrollToJourney = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const journeyEl = document.getElementById('journey');
    if (journeyEl) {
      journeyEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (onExploreClick) onExploreClick();
  };

  return (
    <section
      id="hero-section"
      className="min-h-[840px] flex flex-col md:flex-row items-center justify-between py-16 md:py-28 relative"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full ambient-glow-blue pointer-events-none -z-10 blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] rounded-full ambient-glow-lime pointer-events-none -z-10 blur-3xl opacity-60" />

      {/* Left Column: Narrative Headline */}
      <div className="w-full md:w-5/12 z-10 mt-6 md:mt-0">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-[#1d2022]/80 border border-[#45474b]/40">
          <Sparkles className="w-3.5 h-3.5 text-[#7df4ff]" />
          <p
            id="hero-badge-text"
            className="font-spacemono text-xs tracking-widest text-[#7df4ff] uppercase"
          >
            {HERO_DATA.label}
          </p>
        </div>

        <h1
          id="hero-main-title"
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-[#e0e3e5] leading-[1.08] tracking-tight mb-8"
        >
          {HERO_DATA.titlePart1} <br />
          <span className="text-[#909095] italic font-normal">{HERO_DATA.titleConnector}</span>{' '}
          <span className="text-[#e0e3e5]">{HERO_DATA.titlePart2}</span>
        </h1>

        <p
          id="hero-subtitle-description"
          className="font-inter text-lg sm:text-xl text-[#c6c6cb] mb-12 max-w-lg leading-relaxed font-light"
        >
          {HERO_DATA.description}
        </p>

        <a
          id="hero-explore-cta-link"
          href="#journey"
          onClick={handleScrollToJourney}
          className="inline-flex items-center gap-4 group cursor-pointer"
        >
          <span className="font-playfair text-2xl sm:text-3xl md:text-4xl text-[#e0e3e5] border-b border-[#abd600] pb-2 group-hover:border-[#7df4ff] group-hover:text-[#7df4ff] transition-all duration-300">
            {HERO_DATA.ctaText}
          </span>
          <div className="w-10 h-10 rounded-full border border-[#abd600]/40 group-hover:border-[#7df4ff] flex items-center justify-center transition-all duration-300 group-hover:translate-x-2 group-hover:bg-[#7df4ff]/10">
            <ArrowRight className="w-5 h-5 text-[#abd600] group-hover:text-[#7df4ff] transition-colors" />
          </div>
        </a>
      </div>

      {/* Right Column: Hero Visual Asset with Glass Effect */}
      <div className="w-full md:w-6/12 mt-16 md:mt-0 relative">
        {/* Subtle Outer Decorative Circles */}
        <div className="absolute -top-8 -right-8 w-36 h-36 border border-[#45474b]/30 rounded-full pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 border border-[#45474b]/20 rounded-full pointer-events-none" />

        <div
          id="hero-portrait-card"
          className="aspect-[3/4] w-full max-w-[500px] mx-auto glass-panel relative overflow-hidden rounded-xl group border border-white/10 shadow-2xl transition-all duration-700 hover:border-[#7df4ff]/40"
        >
          {/* Top subtle highlight gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#7df4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

          <img
            id="hero-editorial-portrait"
            src={HERO_DATA.imageUrl}
            alt="Professional executive bridging Business and Artificial Intelligence"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            loading="eager"
          />

          {/* Bottom Gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-[#101415] via-[#101415]/70 to-transparent z-20">
            <div
              id="hero-current-focus-badge"
              className="font-spacemono text-xs sm:text-sm text-[#7df4ff] border border-[#7df4ff]/40 bg-[#101415]/80 rounded-full px-4 py-2 inline-flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(125,244,255,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#7df4ff] animate-pulse" />
              <span>{HERO_DATA.currentFocus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
