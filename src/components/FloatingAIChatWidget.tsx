import React, { useState, useEffect } from 'react';
import { Bot, Sparkles } from 'lucide-react';

export const FloatingAIChatWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToChat = () => {
    const chatElement = document.getElementById('ask-ai');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('ask-ai-input-field');
        if (input) input.focus();
      }, 600);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <button
        id="floating-ask-ai-btn"
        onClick={scrollToChat}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#101415]/95 hover:bg-[#191c1e] text-[#e0e3e5] border border-[#7df4ff]/40 hover:border-[#7df4ff] rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.6),0_0_15px_rgba(125,244,255,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full bg-[#7df4ff]/10 blur-sm -z-10 group-hover:bg-[#7df4ff]/20 transition-colors" />

        {/* Icon & Pulse */}
        <div className="relative flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-[#1d2022] border border-[#7df4ff]/60 flex items-center justify-center">
            <Bot className="w-4 h-4 text-[#7df4ff]" />
          </div>
          <span className="w-2 h-2 rounded-full bg-[#abd600] absolute -top-0.5 -right-0.5 animate-pulse" />
        </div>

        {/* Label */}
        <div className="flex flex-col text-left">
          <span className="font-spacemono text-xs font-bold text-[#e0e3e5] group-hover:text-[#7df4ff] transition-colors leading-tight">
            Ask Hana's AI
          </span>
          <span className="font-inter text-[10px] text-[#909095] leading-tight">
            Profile Copilot
          </span>
        </div>

        <Sparkles className="w-3.5 h-3.5 text-[#abd600] group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
