import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 star-sparkle opacity-30" />

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
