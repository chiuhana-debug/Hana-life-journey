import React, { useState } from 'react';
import { Globe, TrendingUp, Brain, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FUTURE_PILLARS } from '../data/journeyData';

export const FutureVisionSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const getIcon = (iconName: string, color: string) => {
    const colorClass = color === 'tertiary' ? 'text-[#abd600]' : 'text-[#7df4ff]';
    switch (iconName) {
      case 'globe':
        return <Globe className={`w-7 h-7 ${colorClass}`} />;
      case 'insights':
        return <TrendingUp className={`w-7 h-7 ${colorClass}`} />;
      case 'psychology':
      default:
        return <Brain className={`w-7 h-7 ${colorClass}`} />;
    }
  };

  return (
    <section id="future" className="py-24 md:py-36 relative">
      {/* Background ambient light */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[350px] ambient-glow-blue rounded-full blur-3xl opacity-40 pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto">
        <h2
          id="future-vision-heading"
          className="font-playfair text-4xl sm:text-5xl font-bold text-[#e0e3e5] mb-6 tracking-tight"
        >
          Synthesizing the Future
        </h2>

        <p
          id="future-vision-lead-text"
          className="font-inter text-base sm:text-lg text-[#c6c6cb] mb-16 leading-relaxed font-light"
        >
          Combining a deep understanding of international business and marketing mechanics with the cutting-edge capabilities of artificial intelligence. The goal is not just to automate, but to elevate strategy, personalize at scale, and uncover insights hidden within complex data ecosystems.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-6">
        {FUTURE_PILLARS.map((pillar) => {
          const isSelected = selectedPillar === pillar.id;
          const isLime = pillar.color === 'tertiary';

          return (
            <div
              key={pillar.id}
              id={`future-pillar-card-${pillar.id}`}
              onClick={() => setSelectedPillar(isSelected ? null : pillar.id)}
              className={`glass-panel p-8 rounded-xl border-t-2 transition-all duration-500 cursor-pointer relative overflow-hidden group ${
                isLime
                  ? 'border-t-[#45474b] hover:border-t-[#abd600] hover:shadow-[0_8px_30px_rgba(171,214,0,0.1)]'
                  : 'border-t-[#45474b] hover:border-t-[#7df4ff] hover:shadow-[0_8px_30px_rgba(125,244,255,0.1)]'
              } ${isSelected ? (isLime ? 'border-t-[#abd600] bg-white/[0.06]' : 'border-t-[#7df4ff] bg-white/[0.06]') : ''}`}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-3 rounded-lg bg-[#1d2022] border border-[#45474b]/30 group-hover:scale-110 transition-transform duration-300">
                {getIcon(pillar.icon, pillar.color)}
              </div>

              {/* Title */}
              <h4 className="font-inter text-xl font-bold text-[#e0e3e5] mb-3 group-hover:text-white transition-colors flex items-center justify-between">
                <span>{pillar.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#909095] group-hover:text-[#7df4ff] transition-colors" />
              </h4>

              {/* Description */}
              <p className="font-inter text-sm text-[#c6c6cb] leading-relaxed font-light mb-4">
                {pillar.description}
              </p>

              {/* Expandable Key Capabilities */}
              {isSelected && pillar.details && (
                <div className="mt-4 pt-4 border-t border-[#45474b]/30 space-y-2 animate-fadeIn">
                  <span className="font-spacemono text-[11px] uppercase tracking-wider text-[#7df4ff] block mb-2">
                    Core Competencies:
                  </span>
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#e0e3e5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#abd600] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
