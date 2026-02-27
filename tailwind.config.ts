import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Raleway', 'sans-serif'],
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
        gold: {
          DEFAULT: "hsl(var(--gold-glow))",
          muted: "hsl(var(--gold-muted))",
        },
        celestial: "hsl(var(--celestial))",
        star: "hsl(var(--star))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "zodiac-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7", filter: "drop-shadow(0 0 0px hsl(43 80% 55% / 0))" },
          "50%": { transform: "scale(1.15)", opacity: "1", filter: "drop-shadow(0 0 12px hsl(43 80% 55% / 0.6))" },
        },
        "hero-bg-drift": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.08) translate(-1%, -1%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        "star-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200px 100px" },
        },
        "neon-float-1": {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "0.3" },
          "50%": { transform: "translate(80px, 60px)", opacity: "0.6" },
        },
        "neon-float-2": {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "0.2" },
          "50%": { transform: "translate(-60px, -40px)", opacity: "0.5" },
        },
        "neon-float-3": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0.15" },
          "50%": { transform: "translate(-50%, -50%) scale(1.4)", opacity: "0.4" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s ease-in-out infinite",
        "zodiac-pulse": "zodiac-pulse 3s ease-in-out infinite",
        "hero-bg-drift": "hero-bg-drift 20s ease-in-out infinite",
        "star-drift": "star-drift 30s linear infinite",
        "neon-float-1": "neon-float-1 8s ease-in-out infinite",
        "neon-float-2": "neon-float-2 10s ease-in-out infinite",
        "neon-float-3": "neon-float-3 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
