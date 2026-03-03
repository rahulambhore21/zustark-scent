import { Flame, Mountain, Wind, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const elements = [
  { icon: Flame, name: "अग्नि", nameEn: "fire", description: "साहसी, जुनूनी और दीप्तिमान", color: "text-orange-400", signs: "मेष • सिंह • धनु" },
  { icon: Mountain, name: "पृथ्वी", nameEn: "earth", description: "स्थिर, विलासी और वास्तविक", color: "text-emerald-400", signs: "वृषभ • कन्या • मकर" },
  { icon: Wind, name: "वायु", nameEn: "air", description: "हल्का, स्वतंत्र और बौद्धिक", color: "text-sky-300", signs: "मिथुन • तुला • कुंभ" },
  { icon: Waves, name: "जल", nameEn: "water", description: "गहरा, सहज और प्रवाहमय", color: "text-blue-400", signs: "कर्क • वृश्चिक • मीन" },
];

const ElementsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">चार तत्व</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-gradient-gold">तत्व से खरीदें</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {elements.map((el) => (
            <Link
              key={el.name}
              to={`/shop?element=${el.nameEn}`}
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
