import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';
import SEOHead from '@/components/seo/SEOHead';

const businessHours = [
  { day: 'Monday', hours: '11:00 AM – 11:00 PM', open: true },
  { day: 'Tuesday', hours: '11:00 AM – 11:00 PM', open: true },
  { day: 'Wednesday', hours: '11:00 AM – 11:00 PM', open: true },
  { day: 'Thursday', hours: '11:00 AM – 11:00 PM', open: true },
  { day: 'Friday', hours: '11:00 AM – 11:00 PM', open: true },
  { day: 'Saturday', hours: '10:00 AM – 11:30 PM', open: true },
  { day: 'Sunday', hours: '10:00 AM – 11:30 PM', open: true },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/917845582661?text=${encodeURIComponent('Hello! I would like to enquire about Coal & Curry, Neyveli.')}`;

  return (
    <main className="min-h-screen bg-charcoal pt-20">
      <SEOHead
        title="Contact Us | Coal & Curry, Neyveli Tamil Nadu"
        description="Get in touch with Coal & Curry restaurant in Neyveli, Tamil Nadu. Visit us at our address, call +91 7845582661, email isacksanthosh@gmail.com, or chat on WhatsApp. Open 7 days a week, 11 AM – 11 PM."
        canonical="https://coalandcurry.com/contact"
        ogType="website"
        ogUrl="https://coalandcurry.com/contact"
        ogImage="/assets/generated/restaurant-interior.dim_1200x800.png"
      />

      {/* Hero */}
      <div className="relative py-16 bg-black/30 border-b border-saffron/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-saffron text-sm uppercase tracking-[0.3em] mb-2 font-body">Get In Touch</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-32 h-px bg-saffron mx-auto mb-4" />
          <p className="text-white/70 font-body max-w-xl mx-auto">
            We'd love to hear from you. Visit us, call us, or drop us a message.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-black/30 border border-saffron/20 rounded-xl p-6">
              <h2 className="font-display text-saffron text-xl font-bold mb-5">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-saffron mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-body text-sm font-medium">Address</p>
                    <p className="text-white/70 font-body text-sm">Coal & Curry Restaurant, Neyveli, Tamil Nadu – 607 803, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-saffron flex-shrink-0" />
                  <div>
                    <p className="text-white font-body text-sm font-medium">Phone</p>
                    <a href="tel:+917845582661" className="text-white/70 font-body text-sm hover:text-saffron transition-colors">
                      +91 7845582661
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-saffron flex-shrink-0" />
                  <div>
                    <p className="text-white font-body text-sm font-medium">Email</p>
                    <a href="mailto:isacksanthosh@gmail.com" className="text-white/70 font-body text-sm hover:text-saffron transition-colors">
                      isacksanthosh@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white py-3 rounded-lg font-body font-medium text-sm transition-colors"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              {/* Social Media */}
              <div className="mt-5 pt-5 border-t border-saffron/10">
                <p className="text-white/50 text-xs font-body uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/coalandcurry" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-saffron transition-colors text-sm font-body">
                    <SiInstagram size={18} /> @coalandcurry
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="text-white/70 hover:text-saffron transition-colors">
                    <SiFacebook size={18} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                    className="text-white/70 hover:text-saffron transition-colors">
                    <SiYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-black/30 border border-saffron/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Clock size={20} className="text-saffron" />
                <h2 className="font-display text-saffron text-xl font-bold">Business Hours</h2>
              </div>
              <div className="space-y-2">
                {businessHours.map(({ day, hours, open }) => (
                  <div key={day} className="flex items-center justify-between py-1.5 border-b border-saffron/10 last:border-0">
                    <span className="text-white/80 font-body text-sm">{day}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white/70 font-body text-sm">{hours}</span>
                      <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-400' : 'bg-red-500'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map + Form */}
          <div className="space-y-8">
            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-saffron/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62618.82!2d79.4917!3d11.5983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361b5e5e5e5e5%3A0x0!2sNeyveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coal & Curry Location - Neyveli, Tamil Nadu"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-black/30 border border-saffron/20 rounded-xl p-6">
              <h2 className="font-display text-saffron text-xl font-bold mb-5">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="font-display text-saffron text-lg font-semibold mb-2">Message Sent!</p>
                  <p className="text-white/70 font-body text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-body font-medium mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Full name"
                      className="w-full bg-charcoal border border-saffron/30 rounded-lg px-4 py-2.5 text-white text-sm font-body placeholder-white/30 focus:outline-none focus:border-saffron transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-body font-medium mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full bg-charcoal border border-saffron/30 rounded-lg px-4 py-2.5 text-white text-sm font-body placeholder-white/30 focus:outline-none focus:border-saffron transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-body font-medium mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full bg-charcoal border border-saffron/30 rounded-lg px-4 py-2.5 text-white text-sm font-body placeholder-white/30 focus:outline-none focus:border-saffron transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-display font-semibold flex items-center justify-center gap-2 bg-saffron hover:bg-saffron/90 text-charcoal transition-colors"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
