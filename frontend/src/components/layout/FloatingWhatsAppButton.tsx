import { SiWhatsapp } from 'react-icons/si';

export default function FloatingWhatsAppButton() {
  const whatsappUrl = 'https://wa.me/7845582661';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-400 hover:scale-110 transition-all duration-300 group"
      style={{
        boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
        animation: 'whatsapp-pulse 2s infinite',
      }}
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10">
        Chat with us
      </span>
    </a>
  );
}
