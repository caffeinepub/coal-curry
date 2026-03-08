import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units: { key: keyof TimeLeft; label: string }[] = [
    { key: 'days', label: 'Days' },
    { key: 'hours', label: 'Hrs' },
    { key: 'minutes', label: 'Mins' },
    { key: 'seconds', label: 'Secs' },
  ];

  return (
    <div className="flex gap-2">
      {units.map(({ key, label }) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center bg-coal-900 border border-coal-700 rounded-lg px-3 py-2 min-w-[3.5rem]"
        >
          <span className="text-gold-400 font-bold text-xl leading-none font-display">
            {String(timeLeft[key]).padStart(2, '0')}
          </span>
          <span className="text-coal-300 text-xs font-semibold uppercase tracking-wide mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
