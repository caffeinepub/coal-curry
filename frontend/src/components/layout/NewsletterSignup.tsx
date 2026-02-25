import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useSubscribeNewsletter } from '@/hooks/useQueries';
import { Variant_duplicate_success } from '@/backend';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'duplicate' | 'error'>('idle');
  const { mutate, isPending } = useSubscribeNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    mutate(email.trim(), {
      onSuccess: (result) => {
        if (result === Variant_duplicate_success.success) {
          setStatus('success');
          setEmail('');
        } else {
          setStatus('duplicate');
        }
      },
      onError: () => setStatus('error'),
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="font-display text-gold text-xl font-semibold mb-1">Stay in the Loop</h3>
        <p className="text-cream/60 text-sm font-sans">Get exclusive offers, new dish alerts, and food stories.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
        <div className="relative flex-1 md:w-72">
          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60" />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full pl-9 pr-4 py-2.5 bg-coal border border-gold/30 rounded text-cream text-sm font-sans placeholder-cream/30 focus:outline-none focus:border-gold transition-colors"
            disabled={isPending || status === 'success'}
          />
        </div>
        <button
          type="submit"
          disabled={isPending || status === 'success'}
          className="btn-maroon px-5 py-2.5 rounded text-sm font-medium font-sans whitespace-nowrap disabled:opacity-50"
        >
          {isPending ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <CheckCircle size={16} /> Subscribed successfully!
        </div>
      )}
      {status === 'duplicate' && (
        <div className="flex items-center gap-2 text-gold text-sm">
          <AlertCircle size={16} /> Already subscribed!
        </div>
      )}
    </div>
  );
}
