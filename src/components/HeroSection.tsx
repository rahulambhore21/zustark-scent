import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-bg-drift"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 star-sparkle opacity-30 animate-star-drift" />

      {/* Neon glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-neon-float-1 -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-celestial/20 blur-[100px] animate-neon-float-2 -bottom-32 -right-32" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-star/10 blur-[80px] animate-neon-float-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Neon border lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Floating zodiac signs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((symbol, i) => (
          <span
            key={i}
            className="absolute text-primary/20 animate-zodiac-pulse font-display"
            style={{
              fontSize: `${1.5 + Math.random() * 2}rem`,
              top: `${5 + (i * 7.5)}%`,
              left: `${3 + ((i * 17) % 90)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-primary animate-twinkle" />
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">
            Written in the Stars
          </span>
          <Sparkles className="w-5 h-5 text-primary animate-twinkle" style={{ animationDelay: "1s" }} />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
          <span className="text-gradient-gold">Celestia</span>
          <br />
          <span className="text-foreground text-3xl md:text-4xl lg:text-5xl font-light italic">
            Fragrances of the Cosmos
          </span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-body font-light leading-relaxed">
          Discover your signature scent through the ancient wisdom of astrology.
          Each fragrance is crafted to resonate with your celestial identity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/shop"
            className="px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded glow-gold hover:opacity-90 transition-all"
          >
            Explore Collection
          </Link>
          <Link
            to="/zodiac-guide"
            className="px-10 py-4 border border-primary/30 text-primary font-body text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-all"
          >
            Find Your Sign
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
