import React, { useState } from 'react';
import { Quote, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { AI_MOMENT_DATA } from '../data/journeyData';

export const AIMomentSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'story' | 'analysis'>('story');

  return (
    <section
      id="ai-moment"
      className="py-20 my-16 md:my-28 relative rounded-2xl overflow-hidden border border-[#45474b]/30"
    >
      {/* Background dark container & subtle radial glow */}
      <div className="absolute inset-0 bg-[#0b0f10] -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#7df4ff]/10 via-transparent to-transparent -z-10 opacity-70" />
      <div className="absolute -top-24 -left-24 w-96 h-96 ambient-glow-lime rounded-full blur-3xl opacity-30 -z-10" />

      <div className="relative z-10 p-8 sm:p-12 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Left Column: Heading & Subtitle */}
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#abd600]" />
            <p
              id="ai-moment-tag"
              className="font-spacemono text-xs tracking-widest text-[#abd600] uppercase"
            >
              {AI_MOMENT_DATA.tag}
            </p>
          </div>

          <h2
            id="ai-moment-heading"
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-[#e0e3e5] mb-6 leading-tight"
          >
            The <span className="text-[#7df4ff] italic">AI</span> Moment
          </h2>

          <p
            id="ai-moment-subtitle"
            className="font-inter text-base sm:text-lg text-[#c6c6cb] mb-8 leading-relaxed font-light"
          >
            {AI_MOMENT_DATA.subtitle}
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-[#abd600] to-[#7df4ff] rounded-full mb-8" />

          {/* Interactive Toggle for Story / Analysis */}
          <div className="inline-flex p-1 bg-[#1d2022] border border-[#45474b]/40 rounded-lg">
            <button
              id="btn-view-story"
              onClick={() => setViewMode('story')}
              className={`px-4 py-2 text-xs font-spacemono uppercase tracking-wider rounded transition-all ${
                viewMode === 'story'
                  ? 'bg-[#7df4ff] text-[#00363a] font-bold shadow-md'
                  : 'text-[#909095] hover:text-[#e0e3e5]'
              }`}
            >
              Narrative Story
            </button>
            <button
              id="btn-view-analysis"
              onClick={() => setViewMode('analysis')}
              className={`px-4 py-2 text-xs font-spacemono uppercase tracking-wider rounded transition-all ${
                viewMode === 'analysis'
                  ? 'bg-[#7df4ff] text-[#00363a] font-bold shadow-md'
                  : 'text-[#909095] hover:text-[#e0e3e5]'
              }`}
            >
              Impact Breakdown
            </button>
          </div>
        </div>

        {/* Right Column: Narrative Glass Quote or Impact Breakdown */}
        <div className="md:col-span-7">
          {viewMode === 'story' ? (
            <div
              id="ai-moment-quote-box"
              className="glass-panel p-8 sm:p-10 md:p-12 relative rounded-xl border border-white/10 shadow-2xl backdrop-blur-xl animate-fadeIn"
            >
              <Quote className="absolute top-6 right-6 w-14 h-14 text-[#45474b]/20 pointer-events-none" />

              <p className="font-inter text-sm sm:text-base text-[#c6c6cb] mb-6 leading-relaxed relative z-10 font-light">
                {AI_MOMENT_DATA.quoteParagraph1}
              </p>

              <p className="font-inter text-sm sm:text-base text-[#c6c6cb] leading-relaxed relative z-10 font-light">
                {AI_MOMENT_DATA.quoteParagraph2}
              </p>

              <div className="mt-8 pt-6 border-t border-[#45474b]/30 flex items-center justify-between">
                <span className="font-spacemono text-xs text-[#7df4ff] tracking-wider uppercase">
                  Transformation: Operational Tool → Strategic Asset
                </span>
              </div>
            </div>
          ) : (
            <div
              id="ai-moment-analysis-box"
              className="space-y-6 animate-fadeIn"
            >
              {/* Friction card */}
              <div className="glass-panel p-6 rounded-xl border border-red-500/20 bg-red-950/10">
                <div className="flex items-center gap-2 mb-3 text-red-300 font-spacemono text-xs tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>{AI_MOMENT_DATA.breakdown.friction.title}</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#c6c6cb]">
                  {AI_MOMENT_DATA.breakdown.friction.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Synergy card */}
              <div className="glass-panel p-6 rounded-xl border border-[#7df4ff]/30 bg-[#7df4ff]/5 shadow-[0_0_20px_rgba(125,244,255,0.1)]">
                <div className="flex items-center gap-2 mb-3 text-[#7df4ff] font-spacemono text-xs tracking-wider uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#7df4ff] animate-pulse" />
                  <span>{AI_MOMENT_DATA.breakdown.bridge.title}</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#e0e3e5]">
                  {AI_MOMENT_DATA.breakdown.bridge.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#abd600] font-bold">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
