import { useState } from "react";
import { useSubscribeNewsletter } from "../../hooks/useQueries";
import { Loader2, Send } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "duplicate" | "error">("idle");
  const { mutate, isPending } = useSubscribeNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    mutate(email.trim(), {
      onSuccess: (result) => {
        if (result === "success") {
          setStatus("success");
          setEmail("");
        } else {
          setStatus("duplicate");
        }
      },
      onError: () => setStatus("error"),
    });
  };

  return (
    <div>
      <p className="text-sm text-cream/60 mb-3">Subscribe for offers & updates</p>
      {status === "success" ? (
        <p className="text-sm text-saffron font-medium">🎉 You're subscribed! Thank you.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 px-3 py-2 text-sm bg-saffron/10 border border-saffron/20 rounded-md text-cream placeholder-cream/40 focus:outline-none focus:border-saffron"
            required
          />
          <button
            type="submit"
            disabled={isPending}
            className="px-3 py-2 bg-saffron text-charcoal rounded-md hover:bg-turmeric transition-colors disabled:opacity-60"
            aria-label="Subscribe"
          >
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </form>
      )}
      {status === "duplicate" && (
        <p className="text-xs text-turmeric mt-1">This email is already subscribed.</p>
      )}
      {status === "error" && (
        <p className="text-xs text-destructive mt-1">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
