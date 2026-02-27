import { Flame, Mountain, Wind, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const elements = [
  { icon: Flame, name: "Fire", description: "Bold, passionate, and radiant", color: "text-orange-400", signs: "Aries • Leo • Sagittarius" },
  { icon: Mountain, name: "Earth", description: "Grounded, luxurious, and real", color: "text-emerald-400", signs: "Taurus • Virgo • Capricorn" },
  { icon: Wind, name: "Air", description: "Light, free, and intellectual", color: "text-sky-300", signs: "Gemini • Libra • Aquarius" },
  { icon: Waves, name: "Water", description: "Deep, intuitive, and flowing", color: "text-blue-400", signs: "Cancer • Scorpio • Pisces" },
];

const ElementsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">The Four Elements</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-gradient-gold">Shop by Element</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {elements.map((el) => (
            <Link
              key={el.name}
              to={`/shop?element=${el.name.toLowerCase()}`}
              className="group p-8 bg-card border border-border rounded-lg text-center hover:border-primary/30 transition-all duration-300"
            >
              <el.icon className={`w-10 h-10 mx-auto mb-4 ${el.color} group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-2xl mb-2">{el.name}</h3>
              <p className="text-muted-foreground text-sm font-body mb-3">{el.description}</p>
              <p className="text-xs text-primary/60 font-body tracking-wide">{el.signs}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElementsSection;
