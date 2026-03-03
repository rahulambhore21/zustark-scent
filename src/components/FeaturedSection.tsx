import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 bg-gradient-celestial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">सर्वश्रेष्ठ विक्रेता</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-gradient-gold">प्रमुख सुगंध</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body font-light">
            तारों द्वारा चुनी गई हमारी सबसे प्रिय आकाशीय सुगंध।
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-10 py-4 border border-primary/30 text-primary font-body text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-all"
          >
            सभी 12 राशियाँ देखें →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
