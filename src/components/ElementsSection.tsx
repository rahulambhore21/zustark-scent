import { Heart, Sparkles, Shield, Flower } from "lucide-react";

const features = [
  { 
    icon: Heart, 
    name: "प्रेम आकर्षण", 
    nameEn: "love-attraction", 
    description: "वांछित प्रेम और भावनात्मक बंधन को आकर्षित करें"
  },
  { 
    icon: Sparkles, 
    name: "सकारात्मक ऊर्जा", 
    nameEn: "positive-energy", 
    description: "रोमांटिक भावनाओं और सकारात्मक कंपन को बढ़ाएं"
  },
  { 
    icon: Shield, 
    name: "आध्यात्मिक सुरक्षा", 
    nameEn: "spiritual-protection", 
    description: "दैनिक अनुष्ठान उपयोग के लिए आध्यात्मिक अत्तर"
  },
  { 
    icon: Flower, 
    name: "प्राकृतिक सामग्री", 
    nameEn: "natural-ingredients", 
    description: "प्राकृतिक तेलों और सुगंधित क्रिस्टल से समृद्ध"
  },
];

const ElementsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">विशेषताएं</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-gradient-gold">कामाख्या अत्तर के लाभ</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group p-8 bg-card border border-border rounded-lg text-center hover:border-primary/30 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-2">{feature.name}</h3>
              <p className="text-muted-foreground text-sm font-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElementsSection;
