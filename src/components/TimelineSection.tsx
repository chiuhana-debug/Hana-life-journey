import React, { useState } from 'react';
import { TIMELINE_CHAPTERS } from '../data/journeyData';
import { ChevronDown, ChevronUp, GraduationCap, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>('smu');

  const toggleChapter = (id: string) => {
    setExpandedChapter((prev) => (prev === id ? null : id));
  };

  return (
    <section id="journey" className="py-24 md:py-36 relative border-t border-[#45474b]/20">
      {/* Background ambient glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full ambient-glow-blue pointer-events-none -z-10 blur-3xl opacity-50" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Sticky Left Sidebar Header */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="md:sticky md:top-32 space-y-4">
            <h2
              id="timeline-main-heading"
              className="font-playfair text-4xl sm:text-5xl font-bold text-[#e0e3e5] leading-tight"
            >
              The Path <br />
              <span className="text-[#909095] font-normal italic">Forward</span>
            </h2>
            <p className="font-inter text-sm text-[#909095] max-w-xs leading-relaxed">
              A chronological narrative of domain mastery, cross-border operations, and strategic transition to computational intelligence.
            </p>
          </div>
        </div>

        {/* Right Timeline Column */}
        <div className="md:col-span-8 lg:col-span-8 lg:col-start-5 relative">
          {/* Vertical Dotted Line */}
          <div className="absolute left-[14px] top-4 bottom-8 w-px border-l-2 border-dotted border-[#45474b]/60 z-0" />

          <div className="space-y-20">
            {TIMELINE_CHAPTERS.map((chapter) => {
              const isExpanded = expandedChapter === chapter.id;
              const isSMU = chapter.id === 'smu';

              return (
                <div
                  key={chapter.id}
                  id={chapter.id}
                  className="relative pl-12 group transition-all duration-300"
                >
                  {/* Timeline Node Icon Circle */}
                  <div
                    className={`absolute left-0 top-2 w-8 h-8 bg-[#101415] rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                      isSMU
                        ? 'border-2 border-[#7df4ff] shadow-[0_0_18px_rgba(125,244,255,0.4)]'
                        : 'border border-[#45474b] group-hover:border-[#7df4ff]'
                    }`}
                  >
                    {isSMU ? (
                      <div className="w-2.5 h-2.5 bg-[#7df4ff] rounded-full animate-pulse" />
                    ) : (
                      <div className="w-2 h-2 bg-[#45474b] rounded-full group-hover:bg-[#7df4ff] transition-colors duration-300" />
                    )}
                  </div>

                  {/* Chapter Tag & Title */}
                  <div className="mb-2 flex items-center gap-3">
                    <span
                      className={`font-spacemono text-xs tracking-wider uppercase ${
                        isSMU ? 'text-[#7df4ff] font-semibold' : 'text-[#909095]'
                      }`}
                    >
                      {chapter.chapterNum}
                    </span>
                    {chapter.period && (
                      <span className="font-spacemono text-[11px] text-[#45474b] uppercase">
                        • {chapter.period}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-playfair text-2xl sm:text-3xl font-bold mb-1 tracking-tight ${
                      isSMU ? 'text-[#7df4ff]' : 'text-[#e0e3e5]'
                    }`}
                  >
                    {chapter.title}
                  </h3>

                  <p className="font-inter text-sm sm:text-base text-[#909095] mb-6 flex items-center gap-2 font-medium">
                    {isSMU ? (
                      <Sparkles className="w-4 h-4 text-[#abd600]" />
                    ) : chapter.id === 'education' ? (
                      <GraduationCap className="w-4 h-4 text-[#909095]" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-[#909095]" />
                    )}
                    <span>{chapter.institutionOrCompany}</span>
                  </p>

                  {/* Chapter Glass Card */}
                  <div
                    id={`chapter-card-${chapter.id}`}
                    className={`glass-panel p-6 sm:p-8 rounded-lg relative overflow-hidden transition-all duration-500 border ${
                      isSMU
                        ? 'border-[#7df4ff]/30 shadow-[0_4px_30px_rgba(125,244,255,0.08)]'
                        : 'border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Left vertical colored accent bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                        isSMU
                          ? 'bg-[#7df4ff] shadow-[0_0_12px_rgba(125,244,255,0.6)]'
                          : 'bg-[#45474b] group-hover:bg-[#7df4ff]'
                      }`}
                    />

                    {/* Role / Degree */}
                    <h4
                      className={`font-inter text-lg sm:text-xl font-semibold mb-3 ${
                        isSMU ? 'font-spacemono text-base sm:text-lg text-[#abd600]' : 'text-[#e0e3e5]'
                      }`}
                    >
                      {chapter.roleOrDegree}
                    </h4>

                    {/* Description */}
                    <p className="font-inter text-sm sm:text-base text-[#c6c6cb] leading-relaxed mb-6 font-light">
                      {chapter.description}
                    </p>

                    {/* Special Tags (e.g., SMU) */}
                    {chapter.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {chapter.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="font-spacemono text-xs px-3.5 py-1.5 bg-[#1d2022] border border-[#45474b]/40 rounded text-[#e0e3e5] flex items-center gap-1.5 hover:border-[#7df4ff]/50 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#abd600]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Interactive Collapsible Highlights */}
                    <div className="pt-2 border-t border-[#45474b]/30">
                      <button
                        id={`toggle-details-btn-${chapter.id}`}
                        onClick={() => toggleChapter(chapter.id)}
                        className="w-full flex items-center justify-between text-xs font-spacemono uppercase tracking-wider text-[#909095] hover:text-[#7df4ff] transition-colors py-2"
                      >
                        <span>{isExpanded ? 'Hide Key Highlights & Takeaways' : 'View Key Highlights & Takeaways'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && chapter.highlights && (
                        <div className="mt-4 space-y-2.5 pl-2 border-l border-[#45474b]/30 animate-fadeIn">
                          {chapter.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c6c6cb]">
                              <CheckCircle2 className="w-4 h-4 text-[#7df4ff] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
