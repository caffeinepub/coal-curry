import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { getBotResponse, quickReplies } from "../../utils/chatbotResponses";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface ChatbotPanelProps {
  onClose: () => void;
}

export default function ChatbotPanel({ onClose }: ChatbotPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "🔥 Vanakkam! I'm Agni, your Coal & Curry assistant. How can I help you today? Ask me about our menu, timings, reservations, or anything else!",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), text, isBot: false };
    const botMsg: Message = { id: Date.now() + 1, text: getBotResponse(text), isBot: true };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-warm-lg border border-border overflow-hidden flex flex-col" style={{ height: "480px" }}>
      {/* Header */}
      <div className="bg-charcoal px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-saffron flex items-center justify-center text-charcoal font-bold text-lg">
          🔥
        </div>
        <div>
          <p className="text-cream font-bold text-sm">Agni</p>
          <p className="text-cream/50 text-xs">Coal & Curry Assistant</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/30">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                msg.isBot
                  ? "bg-white text-charcoal border border-border rounded-tl-none"
                  : "bg-saffron text-charcoal rounded-tr-none font-medium"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-3 py-2 bg-white border-t border-border flex gap-2 overflow-x-auto scrollbar-hide">
        {quickReplies.map((reply) => (
          <button
            key={reply}
            onClick={() => sendMessage(reply)}
            className="shrink-0 px-3 py-1 bg-saffron/10 text-saffron text-xs font-medium rounded-full hover:bg-saffron hover:text-charcoal transition-colors border border-saffron/20"
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="px-3 py-3 bg-white border-t border-border flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 px-3 py-2 text-sm bg-cream border border-border rounded-lg focus:outline-none focus:border-saffron text-charcoal placeholder-muted-foreground"
        />
        <button
          type="submit"
          className="w-9 h-9 bg-saffron text-charcoal rounded-lg hover:bg-turmeric transition-colors flex items-center justify-center"
          aria-label="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
