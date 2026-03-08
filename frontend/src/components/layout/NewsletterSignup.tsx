import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useSubscribeNewsletter } from '@/hooks/useQueries';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'duplicate' | 'error'>('idle');
  const { mutate: subscribe, isPending } = useSubscribeNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    subscribe(email.trim(), {
      onSuccess: (result) => {
        if (result === 'success') {
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
        <h3 className="font-display text-xl font-bold text-white mb-1">
          Stay in the Loop
        </h3>
        <p className="text-coal-200 text-sm">
          Get exclusive offers, new dish alerts, and Chettinad food stories straight to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[380px]">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coal-400 pointer-events-none" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full pl-10 pr-4 py-2.5 rounded bg-coal-800 border border-coal-600 text-white placeholder-coal-400 text-sm focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="px-5 py-2.5 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-sm transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {isPending ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-sm text-green-300 mt-2 md:mt-0">
          <CheckCircle className="w-4 h-4" />
          <span>You're subscribed! Welcome to the Coal & Curry family.</span>
        </div>
      )}
      {status === 'duplicate' && (
        <div className="flex items-center gap-2 text-sm text-gold-400 mt-2 md:mt-0">
          <AlertCircle className="w-4 h-4" />
          <span>This email is already subscribed.</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-400 mt-2 md:mt-0">
          <AlertCircle className="w-4 h-4" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}
    </div>
  );
}
