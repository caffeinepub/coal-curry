/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Coal & Curry custom palette
        coal: {
          950: 'oklch(0.08 0.005 30)',
          900: 'oklch(0.12 0.006 30)',
          800: 'oklch(0.16 0.008 30)',
          700: 'oklch(0.22 0.01 30)',
          600: 'oklch(0.30 0.012 30)',
        },
        ember: {
          400: 'oklch(0.78 0.20 55)',
          500: 'oklch(0.72 0.22 45)',
          600: 'oklch(0.65 0.22 40)',
        },
        gold: {
          300: 'oklch(0.88 0.14 85)',
          400: 'oklch(0.82 0.16 80)',
          500: 'oklch(0.75 0.18 75)',
        },
        cream: 'oklch(0.95 0.02 80)',
        saffron: 'oklch(0.78 0.20 55)',
        spice: 'oklch(0.60 0.22 30)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'whatsapp-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
          '70%': { boxShadow: '0 0 0 12px rgba(34, 197, 94, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)' },
        },
        'ember-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(200, 100, 30, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(200, 100, 30, 0.6), 0 0 50px rgba(200, 100, 30, 0.2)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'whatsapp-pulse': 'whatsapp-pulse 2s infinite',
        'ember-glow': 'ember-glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      boxShadow: {
        'ember-glow': '0 0 20px rgba(200, 100, 30, 0.4), 0 4px 20px rgba(0,0,0,0.5)',
        'gold-highlight': '0 0 20px rgba(180, 150, 50, 0.3), 0 4px 20px rgba(0,0,0,0.5)',
        'coal-deep': '0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
