import { Link } from '@tanstack/react-router';
import { useLanguage } from '@/context/LanguageContext';

export default function FloatingReserveButton() {
  const { t } = useLanguage();
  return (
    <Link
      to="/reserve"
      className="fixed bottom-24 right-4 z-40 btn-gold px-4 py-3 rounded-full font-display font-semibold text-sm shadow-fire pulse-gold flex items-center gap-2 hover:scale-105 transition-transform"
    >
      🔥 {t('reserveNow')}
    </Link>
  );
}
