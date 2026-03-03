import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer";

const ZodiacGuide = () => {
  const { addToCart } = useCart();

  return (
    <main className="pt-24">
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">ब्रह्मांडीय ज्ञान</span>
          <h1 className="font-display text-4xl md:text-6xl mt-3 text-gradient-gold">राशि गाइड</h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body font-light">
            प्रत्येक राशि एक अनोखी ऊर्जा रखती है। अपनी राशि नीचे खोजें।
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto mb-24">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row gap-6 p-6 bg-card border border-border rounded-lg ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={product.image}
                alt={product.nameHindi}
                className="w-full md:w-48 h-48 object-cover rounded"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl animate-zodiac-pulse">{product.zodiacSymbol}</span>
                  <h3 className="font-display text-2xl">{product.zodiac}</h3>
                  <span className="text-xs tracking-widest uppercase text-primary/60 font-body ml-auto">{product.element}</span>
                </div>
                <h4 className="font-display text-lg text-primary mb-2">{product.nameHindi}</h4>
                <p className="text-muted-foreground font-body text-sm mb-3">{product.descriptionHindi}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {product.notesHindi.map((note, index) => (
                      <span key={index} className="text-xs text-primary/70 border border-primary/20 px-2 py-0.5 rounded font-body">{note}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-body rounded hover:opacity-90 transition-opacity"
                  >
                    ₹{product.price.toLocaleString('hi-IN')} — जोड़ें
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ZodiacGuide;
