import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { getBotResponse, generateId, type ChatMessage } from '@/utils/chatbotResponses';

interface ChatbotPanelProps {
  onClose: () => void;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  text: "Vanakkam! 🙏 I'm **Agni**, your Coal & Curry assistant. I can help you with our menu, opening hours, table reservations, delivery, location, and current offers. How can I help you today? 🔥",
  timestamp: new Date(),
};

const QUICK_REPLIES = ['View Menu', 'Opening Hours', 'Reserve Table', 'Delivery Info', 'Current Offers', 'Our Location'];

export default function ChatbotPanel({ onClose }: ChatbotPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: generateId(),
        role: 'bot',
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 flex flex-col rounded-xl overflow-hidden shadow-fire border border-gold/30 bg-coal">
      {/* Header */}
      <div className="bg-maroon px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔥</span>
          <div>
            <p className="font-display text-gold font-semibold text-sm">Agni</p>
            <p className="text-cream/60 text-xs font-sans">Coal & Curry Assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-cream/60 text-xs font-sans">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80 scrollbar-hide">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-lg text-sm font-sans leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-smoky text-cream rounded-br-none'
                  : 'bg-maroon/60 text-cream rounded-bl-none border border-gold/10'
              }`}
            >
              {msg.text.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < msg.text.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-maroon/60 border border-gold/10 px-3 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-3 py-2 border-t border-gold/10 flex gap-1.5 overflow-x-auto scrollbar-hide">
        {QUICK_REPLIES.map(reply => (
          <button
            key={reply}
            onClick={() => sendMessage(reply)}
            className="flex-shrink-0 text-xs px-2.5 py-1 border border-gold/30 text-gold/80 rounded-full hover:bg-gold/10 transition-colors font-sans"
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gold/10 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask Agni anything..."
          className="flex-1 bg-smoky border border-gold/20 rounded-lg px-3 py-2 text-cream text-sm font-sans placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="btn-gold p-2 rounded-lg disabled:opacity-40 transition-opacity"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
