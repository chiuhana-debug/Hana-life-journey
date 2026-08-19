import React, { useState } from 'react';
import { Linkedin, Phone, Mail, Check, Copy } from 'lucide-react';

interface FooterProps {
  onOpenConnect: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConnect }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('+1234567890');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="bg-[#0b0f10] py-20 border-t border-[#45474b]/20 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 w-full mt-24 text-center md:text-left gap-8"
    >
      <div className="space-y-2">
        <span
          id="footer-brand-title"
          className="font-playfair text-xl md:text-2xl text-[#e0e3e5] block font-bold"
        >
          From Business to AI
        </span>
        <p className="font-inter text-xs text-[#909095]">
          © 2024 From Business to AI — A Narrative Journey
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10 items-center font-inter text-xs sm:text-sm text-[#c6c6cb]">
        <a
          id="footer-link-linkedin"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#7df4ff] transition-all duration-300 hover:underline underline-offset-4"
        >
          LinkedIn
        </a>

        <a
          id="footer-link-phone"
          href="tel:+1234567890"
          onClick={handleCopyPhone}
          title="Click to copy number"
          className="hover:text-[#7df4ff] transition-all duration-300 hover:underline underline-offset-4 inline-flex items-center gap-1.5"
        >
          <span>+1 (234) 567-890</span>
          {copiedPhone && <Check className="w-3.5 h-3.5 text-[#abd600]" />}
        </a>

        <button
          id="footer-link-contact"
          onClick={onOpenConnect}
          className="hover:text-[#7df4ff] transition-all duration-300 hover:underline underline-offset-4 cursor-pointer"
        >
          Get in Touch
        </button>

        <a
          id="footer-link-privacy"
          href="#privacy"
          onClick={(e) => {
            e.preventDefault();
            alert('Privacy Policy: All information shared on this portfolio is confidential and respected.');
          }}
          className="hover:text-[#7df4ff] transition-all duration-300 hover:underline underline-offset-4"
        >
          Privacy Policy
        </a>

        <a
          id="footer-link-terms"
          href="#terms"
          onClick={(e) => {
            e.preventDefault();
            alert('Terms of Service: Portfolio contents and intellectual reflections © 2024.');
          }}
          className="hover:text-[#7df4ff] transition-all duration-300 hover:underline underline-offset-4"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};
