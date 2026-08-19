import React, { useState } from 'react';
import { X, Send, Check, Copy, Linkedin, Phone, Mail, Sparkles } from 'lucide-react';
import { ContactFormState } from '../types';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    topic: 'ai_consultation',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div
      id="connect-modal-backdrop"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="connect-modal-container"
        className="glass-panel w-full max-w-xl bg-[#101415]/95 border border-[#45474b]/50 rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="close-connect-modal-btn"
          onClick={onClose}
          className="absolute top-6 right-6 text-[#909095] hover:text-[#e0e3e5] p-1.5 rounded-full hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#7df4ff]" />
            <span className="font-spacemono text-xs text-[#7df4ff] tracking-widest uppercase">
              Dialogue & Collaboration
            </span>
          </div>
          <h3 className="font-playfair text-3xl font-bold text-[#e0e3e5]">Let's Connect</h3>
          <p className="font-inter text-sm text-[#909095] mt-1 font-light">
            Open for dialogue around Business AI transformation, research initiatives, and strategic synergies.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#abd600]/10 border border-[#abd600] rounded-full flex items-center justify-center mx-auto text-[#abd600]">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-playfair text-2xl font-bold text-[#e0e3e5]">Message Dispatched</h4>
            <p className="font-inter text-sm text-[#c6c6cb] max-w-md mx-auto">
              Thank you for reaching out, <span className="text-[#7df4ff]">{formData.name}</span>. I look forward to exploring the intersection of business strategy and artificial intelligence with you.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#7df4ff] text-[#00363a] font-spacemono text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#d3fbff] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-spacemono text-xs text-[#c6c6cb] uppercase mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Eleanor Vance"
                className="w-full bg-[#191c1e] border border-[#45474b]/60 rounded px-4 py-2.5 text-sm text-[#e0e3e5] focus:outline-none focus:border-[#7df4ff] transition-colors"
              />
            </div>

            <div>
              <label className="block font-spacemono text-xs text-[#c6c6cb] uppercase mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="eleanor@enterprise.com"
                className="w-full bg-[#191c1e] border border-[#45474b]/60 rounded px-4 py-2.5 text-sm text-[#e0e3e5] focus:outline-none focus:border-[#7df4ff] transition-colors"
              />
            </div>

            <div>
              <label className="block font-spacemono text-xs text-[#c6c6cb] uppercase mb-1.5">
                Inquiry Focus
              </label>
              <select
                value={formData.topic}
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value as ContactFormState['topic'] })
                }
                className="w-full bg-[#191c1e] border border-[#45474b]/60 rounded px-4 py-2.5 text-sm text-[#e0e3e5] focus:outline-none focus:border-[#7df4ff] transition-colors"
              >
                <option value="ai_consultation">Business AI Advisory & Strategy</option>
                <option value="career_opportunity">Leadership / Career Collaboration</option>
                <option value="academic_collaboration">SMU Academic Research / Guest Keynote</option>
                <option value="general">General Intellectual Exchange</option>
              </select>
            </div>

            <div>
              <label className="block font-spacemono text-xs text-[#c6c6cb] uppercase mb-1.5">
                Message / Overview
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share thoughts, project scopes, or questions regarding AI transformation..."
                className="w-full bg-[#191c1e] border border-[#45474b]/60 rounded px-4 py-2.5 text-sm text-[#e0e3e5] focus:outline-none focus:border-[#7df4ff] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#7df4ff] text-[#00363a] font-spacemono text-xs uppercase tracking-widest font-bold rounded hover:bg-[#d3fbff] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(125,244,255,0.2)]"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

        {/* Quick Contact Badges */}
        <div className="mt-8 pt-6 border-t border-[#45474b]/30">
          <p className="font-spacemono text-xs uppercase text-[#909095] mb-3">Direct Coordinates</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleCopy('+1 (234) 567-890', 'phone')}
              className="flex items-center justify-between p-2.5 bg-[#191c1e] border border-[#45474b]/40 rounded text-xs text-[#c6c6cb] hover:border-[#7df4ff]/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#7df4ff]" />
                +1 (234) 567-890
              </span>
              {copiedItem === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-[#abd600]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#909095]" />
              )}
            </button>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-[#191c1e] border border-[#45474b]/40 rounded text-xs text-[#c6c6cb] hover:border-[#7df4ff]/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#7df4ff]" />
                LinkedIn Profile
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#909095]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
