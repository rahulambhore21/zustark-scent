import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group relative bg-card border border-border hover:border-primary/30 rounded-lg overflow-hidden transition-all duration-500 glow-gold hover:shadow-lg flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[10px] md:text-xs tracking-wider md:tracking-widest uppercase text-primary/70 font-body bg-background/50 px-1.5 md:px-2 py-0.5 md:py-1 rounded">
          {product.productType}
        </span>
      </div>

      <div className="p-3 md:p-5 flex flex-col flex-grow">
        <h3 className="font-display text-base md:text-xl mb-0.5 md:mb-1">{product.nameHindi}</h3>
        <p className="text-xs md:text-sm text-muted-foreground font-body mb-2 md:mb-3 line-clamp-2">{product.descriptionHindi}</p>
        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
          {product.ingredientsHindi.slice(0, 2).map((ingredient, index) => (
            <span key={index} className="text-[10px] md:text-xs text-primary/80 border border-primary/20 px-1.5 md:px-2 py-0.5 rounded font-body">
              {ingredient}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-lg md:text-2xl text-gradient-gold">₹{product.price.toLocaleString('hi-IN')}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary text-primary-foreground text-[10px] md:text-xs tracking-widest uppercase font-body rounded hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">जोड़ें</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
