/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Coal palette — use text-white or text-coal-50 on coal-700 through coal-950
        coal: {
          50:  "#f7f5f2",   // text on dark backgrounds — very light warm white
          100: "#ede9e3",   // light warm off-white
          200: "#d8d0c5",   // light warm gray
          300: "#b8ac9a",   // medium warm gray
          400: "#8f7f6a",   // medium gray-brown
          500: "#6b5c48",   // dark gray-brown
          600: "#4e4035",   // very dark brown
          700: "#362c24",   // near-black brown
          800: "#241d17",   // near-black
          900: "#16100c",   // very near-black
          950: "#0d0a07",   // deepest black
        },
        // Ember palette — use text-white or text-coal-50 on ember-500/600
        ember: {
          400: "#e8834a",   // bright orange — use text-coal-900 for contrast
          500: "#c85a20",   // medium ember — use text-white for contrast
          600: "#a04418",   // dark ember — use text-white for contrast
        },
        // Gold palette — use text-coal-900 on gold-300/400/500; text-white on gold-600
        gold: {
          300: "#f5d98a",   // very light gold — use text-coal-900
          400: "#e8c55a",   // light gold — use text-coal-900
          500: "#c9a227",   // medium gold — use text-coal-900
          600: "#9a7a18",   // dark gold — use text-white
        },
        // Saffron palette — use text-coal-900 on saffron-400; text-white on saffron-500
        saffron: {
          400: "#f0a830",   // bright saffron — use text-coal-900
          500: "#d4861a",   // medium saffron — use text-coal-900 or text-white
        },
        // Cream — use text-coal-900 on cream backgrounds
        cream: "#f5f0e8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.3)',
        'card': '0 2px 12px rgba(0,0,0,0.35)',
        'glow-gold': '0 0 16px rgba(200,162,39,0.4)',
        'glow-ember': '0 0 16px rgba(200,90,32,0.4)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "whatsapp-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
        },
        "ember-glow": {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(200, 80, 20, 0.4)" },
          "50%": { boxShadow: "0 0 18px 6px rgba(200, 80, 20, 0.7)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "whatsapp-pulse": "whatsapp-pulse 2s ease-in-out infinite",
        "ember-glow": "ember-glow 2.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
