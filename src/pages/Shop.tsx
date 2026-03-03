import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");

  const filtered = products; // Show all products for now

  return (
    <main className="pt-24 pb-0">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">संग्रह</span>
          <h1 className="font-display text-4xl md:text-6xl mt-3 text-gradient-gold">सभी अत्तर</h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body font-light">
            आध्यात्मिक और प्रेम आकर्षण के लिए प्रीमियम अत्तर
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
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
