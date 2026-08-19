import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { AIMomentSection } from './components/AIMomentSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { AskHanaAISection } from './components/AskHanaAISection';
import { FloatingAIChatWidget } from './components/FloatingAIChatWidget';
import { Footer } from './components/Footer';
import { ConnectModal } from './components/ConnectModal';

export default function App() {
  const [connectModalOpen, setConnectModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#101415] text-[#e0e3e5] relative selection:bg-[#7df4ff]/20 selection:text-[#7df4ff]">
      {/* Top Navbar */}
      <Navbar onOpenConnect={() => setConnectModalOpen(true)} />

      {/* Main Container */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-16">
        <HeroSection onExploreClick={() => {}} />
        <TimelineSection />
        <AIMomentSection />
        <FutureVisionSection />
        <AskHanaAISection />
      </main>

      {/* Floating AI Chat Assistant Trigger Widget */}
      <FloatingAIChatWidget />

      {/* Footer */}
      <Footer onOpenConnect={() => setConnectModalOpen(true)} />

      {/* Interactive Connect Modal */}
      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
    </div>
  );
}
