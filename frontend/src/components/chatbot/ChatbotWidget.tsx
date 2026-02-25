import { useState } from 'react';
import ChatbotPanel from './ChatbotPanel';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Panel */}
      {isOpen && <ChatbotPanel onClose={() => setIsOpen(false)} />}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-maroon border-2 border-gold/60 rounded-full flex items-center justify-center shadow-fire hover:scale-110 transition-transform pulse-gold"
        aria-label="Open Agni chatbot"
      >
        <span className="text-2xl">{isOpen ? '✕' : '🔥'}</span>
      </button>
    </>
  );
}
