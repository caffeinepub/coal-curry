import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatbotPanel from "./ChatbotPanel";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="mb-4 animate-fade-in">
          <ChatbotPanel onClose={() => setIsOpen(false)} />
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-saffron text-charcoal shadow-warm-lg hover:bg-turmeric transition-all hover:scale-110 flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open chat with Agni"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
