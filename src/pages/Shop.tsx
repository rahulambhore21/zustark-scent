import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const elementParam = searchParams.get("element");
  const [activeCategory, setActiveCategory] = useState(elementParam || "all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-24 pb-0">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">The Collection</span>
          <h1 className="font-display text-4xl md:text-6xl mt-3 text-gradient-gold">All 12 Signs</h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body font-light">
            Find the fragrance written in your stars.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-body tracking-wide transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Shop;
