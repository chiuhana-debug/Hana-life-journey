import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  Bot,
  User,
  RotateCcw,
  Copy,
  Check,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { ChatMessage } from '../types';
import {
  SUGGESTED_QUESTIONS,
  INITIAL_AI_MESSAGE,
  askHanaAI,
} from '../services/chatService';

export const AskHanaAISection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_AI_MESSAGE]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiReplyText = await askHanaAI(query, messages);
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'model',
        content: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newHistory, aiMessage]);
    } catch (err) {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        content:
          "I encountered a temporary connection issue. Please feel free to try again or choose one of the suggested questions above.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newHistory, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_AI_MESSAGE]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to render basic markdown bold and bullet points cleanly
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="space-y-2 text-sm leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1.5" />;

          // Check if line is a bullet item
          const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ') || /^\d+\.\s/.test(line.trim());
          const cleanLine = isBullet ? line.trim().replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '') : line;

          // Simple bold formatting parser
          const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
          const parsedParts = parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="text-[#e0e3e5] font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          });

          if (isBullet) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-[#abd600] font-bold text-xs mt-1 shrink-0">•</span>
                <p className="text-[#c6c6cb]">{parsedParts}</p>
              </div>
            );
          }

          return (
            <p key={idx} className="text-[#c6c6cb]">
              {parsedParts}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="ask-ai"
      className="py-20 md:py-32 relative border-t border-[#45474b]/20"
    >
      {/* Background ambient lighting */}
      <div className="absolute -left-20 top-1/3 w-[500px] h-[500px] ambient-glow-blue rounded-full blur-3xl opacity-30 pointer-events-none -z-10" />
      <div className="absolute -right-20 bottom-1/4 w-[400px] h-[400px] ambient-glow-lime rounded-full blur-3xl opacity-20 pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#1d2022]/80 border border-[#45474b]/40">
          <Bot className="w-4 h-4 text-[#7df4ff]" />
          <span
            id="ask-ai-tag"
            className="font-spacemono text-xs tracking-widest text-[#7df4ff] uppercase"
          >
            Ask Hana's AI
          </span>
        </div>

        <h2
          id="ask-ai-heading"
          className="font-playfair text-4xl sm:text-5xl font-bold text-[#e0e3e5] mb-4 tracking-tight"
        >
          Conversational <span className="text-[#7df4ff] italic">Profile</span> Intelligence
        </h2>

        <p
          id="ask-ai-description"
          className="font-inter text-base text-[#909095] leading-relaxed font-light max-w-xl mx-auto"
        >
          Curious about Hana's education, career journey, marketing leadership, or her transition into Business AI? Ask questions directly below.
        </p>

        {/* Suggested Questions Grid / Chips */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2 text-xs font-spacemono uppercase tracking-wider text-[#909095] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#abd600]" />
            <span>Suggested Inquiries</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {SUGGESTED_QUESTIONS.map((question, idx) => (
              <button
                key={idx}
                id={`suggested-question-btn-${idx}`}
                onClick={() => handleSuggestedClick(question)}
                disabled={isLoading}
                className="font-spacemono text-xs text-[#e0e3e5] bg-[#191c1e] hover:bg-[#23272a] border border-[#45474b]/50 hover:border-[#7df4ff]/60 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                <span>{question}</span>
                <ChevronRight className="w-3 h-3 text-[#7df4ff]" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Interface Container */}
      <div
        id="ask-ai-chat-card"
        className="max-w-3xl mx-auto glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl relative"
      >
        {/* Chat Header Bar */}
        <div className="px-6 py-4 bg-[#101415]/80 border-b border-[#45474b]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1d2022] border border-[#7df4ff]/40 flex items-center justify-center relative shadow-[0_0_12px_rgba(125,244,255,0.2)]">
              <Bot className="w-4 h-4 text-[#7df4ff]" />
              <span className="w-2 h-2 rounded-full bg-[#abd600] absolute -bottom-0.5 -right-0.5 animate-pulse ring-2 ring-[#101415]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-playfair text-base font-bold text-[#e0e3e5]">Hana's AI</span>
                <span className="font-spacemono text-[10px] px-2 py-0.5 rounded bg-[#7df4ff]/10 text-[#7df4ff] border border-[#7df4ff]/20">
                  Profile Copilot
                </span>
              </div>
              <p className="font-inter text-xs text-[#909095]">Grounded in verified profile knowledge</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="reset-chat-btn"
              onClick={handleResetChat}
              title="Reset conversation"
              className="p-2 text-[#909095] hover:text-[#e0e3e5] hover:bg-white/5 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-spacemono"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Chat Message Scroll Thread */}
        <div
          id="chat-messages-thread"
          className="p-6 md:p-8 space-y-6 min-h-[360px] max-h-[500px] overflow-y-auto bg-[#0d1011]/60 scroll-smooth"
        >
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            const isCopied = copiedId === msg.id;

            return (
              <div
                key={msg.id}
                className={`flex gap-3.5 ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-[#1d2022] border border-[#7df4ff]/30 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <Bot className="w-4 h-4 text-[#7df4ff]" />
                  </div>
                )}

                <div
                  className={`relative group max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 ${
                    isUser
                      ? 'bg-[#192225] border border-[#7df4ff]/30 text-[#e0e3e5] rounded-tr-none'
                      : 'glass-panel bg-[#141819]/90 border border-white/10 rounded-tl-none'
                  }`}
                >
                  {/* Sender Label & Timestamp */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span
                      className={`font-spacemono text-[11px] uppercase tracking-wider ${
                        isUser ? 'text-[#7df4ff]' : 'text-[#abd600]'
                      }`}
                    >
                      {isUser ? 'You' : "Hana's AI"}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-spacemono text-[10px] text-[#909095]">
                        {msg.timestamp}
                      </span>
                      {!isUser && (
                        <button
                          onClick={() => handleCopyMessage(msg.id, msg.content)}
                          title="Copy response"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-[#909095] hover:text-[#e0e3e5]"
                        >
                          {isCopied ? (
                            <Check className="w-3 h-3 text-[#abd600]" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="font-inter">
                    {isUser ? (
                      <p className="text-sm leading-relaxed text-[#e0e3e5]">{msg.content}</p>
                    ) : (
                      renderFormattedContent(msg.content)
                    )}
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-[#192225] border border-[#7df4ff]/40 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-[#7df4ff]" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Typing Indicator */}
          {isLoading && (
            <div className="flex gap-3.5 justify-start animate-fadeIn">
              <div className="w-8 h-8 rounded-full bg-[#1d2022] border border-[#7df4ff]/30 flex items-center justify-center shrink-0 mt-1">
                <Bot className="w-4 h-4 text-[#7df4ff]" />
              </div>
              <div className="glass-panel bg-[#141819]/90 border border-white/10 rounded-2xl rounded-tl-none p-4 inline-flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#7df4ff] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#7df4ff] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#abd600] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="font-spacemono text-xs text-[#909095]">Synthesizing profile response...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#101415] border-t border-[#45474b]/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="relative flex-1">
              <input
                ref={inputRef}
                id="ask-ai-input-field"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Hana's education, career, AI in marketing, or SMU..."
                disabled={isLoading}
                className="w-full bg-[#191c1e] border border-[#45474b]/50 rounded-xl px-4 py-3 text-sm text-[#e0e3e5] placeholder-[#909095] focus:outline-none focus:border-[#7df4ff] focus:ring-1 focus:ring-[#7df4ff]/50 transition-all font-inter pr-10 disabled:opacity-50"
              />
            </div>

            <button
              id="ask-ai-send-btn"
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="px-5 py-3 bg-[#7df4ff] text-[#00363a] font-spacemono text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-[#d3fbff] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(125,244,255,0.2)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask</span>
            </button>
          </form>

          {/* Grounding & Strict Boundary Disclaimer Footer */}
          <div className="mt-3 flex items-center justify-between text-[11px] font-spacemono text-[#909095] px-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#abd600]" />
              <span>Strict profile grounding enabled</span>
            </div>
            <span className="text-[#45474b]">Powered by Gemini 3.7 Flash</span>
          </div>
        </div>
      </div>
    </section>
  );
};
