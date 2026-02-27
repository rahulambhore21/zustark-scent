import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-card border border-border hover:border-primary/30 rounded-lg overflow-hidden transition-all duration-500 glow-gold hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <span className="absolute top-4 left-4 text-3xl opacity-70 group-hover:opacity-100 transition-opacity">
          {product.zodiacSymbol}
        </span>
        <span className="absolute top-4 right-4 text-xs tracking-widest uppercase text-primary/70 font-body bg-background/50 px-2 py-1 rounded">
          {product.element}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground font-body mb-3 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.map((note) => (
            <span key={note} className="text-xs text-primary/80 border border-primary/20 px-2 py-0.5 rounded font-body">
              {note}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl text-gradient-gold">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-body rounded hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
