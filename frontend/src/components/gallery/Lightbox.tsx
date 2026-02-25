import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const image = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-coal/95 backdrop-blur-sm" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-gold hover:text-cream transition-colors bg-smoky/80 rounded-full"
      >
        <X size={24} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 z-10 p-3 text-gold hover:text-cream transition-colors bg-smoky/80 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      <div className="relative z-10 max-w-5xl max-h-[85vh] mx-16">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-fire"
        />
        <p className="text-center text-cream/60 text-sm font-sans mt-3">{image.alt}</p>
        <p className="text-center text-gold/50 text-xs font-sans mt-1">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 z-10 p-3 text-gold hover:text-cream transition-colors bg-smoky/80 rounded-full"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
