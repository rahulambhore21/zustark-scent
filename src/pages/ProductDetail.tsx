import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star, Package, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">उत्पाद नहीं मिला</h1>
          <Button onClick={() => navigate("/shop")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            दुकान पर वापस जाएं
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.nameHindi} कार्ट में जोड़ा गया!`);
  };

  const elementColors: Record<string, string> = {
    Fire: "bg-red-500/10 text-red-500 border-red-500/20",
    Earth: "bg-green-500/10 text-green-500 border-green-500/20",
    Air: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Water: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">होम</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">दुकान</Link>
          <span>/</span>
          <span className="text-foreground">{product.nameHindi}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/shop")}
          className="mb-6 font-body"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          वापस जाएं
        </Button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border glow-gold">
                <img
                  src={product.image}
                  alt={product.nameHindi}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                
                {/* Zodiac Symbol */}
                <div className="absolute top-6 left-6">
                  <span className="text-6xl animate-zodiac-pulse">
                    {product.zodiacSymbol}
                  </span>
                </div>

                {/* Element Badge */}
                <div className="absolute top-6 right-6">
                  <Badge className={`${elementColors[product.element]} text-sm px-3 py-1.5 font-body`}>
                    {product.element}
                  </Badge>
                </div>

                {/* Stock Badge */}
                {product.stock > 0 ? (
                  <Badge className="absolute bottom-6 left-6 bg-green-500/90 text-white border-0">
                    <Package className="w-3 h-3 mr-1" />
                    स्टॉक में उपलब्ध
                  </Badge>
                ) : (
                  <Badge className="absolute bottom-6 left-6 bg-red-500/90 text-white border-0">
                    स्टॉक में नहीं
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Title and Rating */}
            <div className="mb-4">
              <h1 className="font-display text-4xl md:text-5xl mb-2 text-gradient-gold">
                {product.nameHindi}
              </h1>
              <p className="text-lg text-muted-foreground font-body mb-3">
                {product.name}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.8 रेटिंग)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl text-gradient-gold">
                  ₹{product.price.toLocaleString('hi-IN')}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{Math.round(product.price * 1.3).toLocaleString('hi-IN')}
                </span>
              </div>
              <p className="text-sm text-green-600 mt-1 font-body">
                मुफ़्त शिपिंग (COD उपलब्ध)
              </p>
            </div>

            <Separator className="mb-6" />

            {/* Description */}
            <div className="mb-6">
              <h2 className="font-display text-2xl mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                विवरण
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed font-body">
                {product.descriptionHindi}
              </p>
            </div>

            <Separator className="mb-6" />

            {/* Fragrance Notes */}
            <div className="mb-6">
              <h2 className="font-display text-2xl mb-4">सुगंध नोट्स</h2>
              <div className="grid grid-cols-3 gap-3">
                {product.notesHindi.map((note, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <p className="font-body text-sm">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Zodiac Info */}
            <div className="mb-6">
              <h2 className="font-display text-2xl mb-4">राशि जानकारी</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <p className="text-sm text-muted-foreground mb-1">राशि</p>
                  <p className="font-display text-xl">{product.zodiac} {product.zodiacSymbol}</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <p className="text-sm text-muted-foreground mb-1">तत्व</p>
                  <p className="font-display text-xl">{product.element}</p>
                </div>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Product Specifications */}
            <div className="mb-8">
              <h2 className="font-display text-2xl mb-4">विवरण</h2>
              <div className="space-y-3 text-sm font-body">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SKU:</span>
                  <span className="font-medium">{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">वजन:</span>
                  <span className="font-medium">{product.weight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">आयाम:</span>
                  <span className="font-medium">
                    {product.dimensions.length} × {product.dimensions.breadth} × {product.dimensions.height} cm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">स्टॉक:</span>
                  <span className="font-medium text-green-600">{product.stock} उपलब्ध</span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 border-t border-border mt-auto">
              <Button
                size="lg"
                className="w-full text-base font-body tracking-wider"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                {product.stock > 0 ? 'कार्ट में जोड़ें' : 'स्टॉक में नहीं'}
              </Button>
              
              {product.stock > 0 && product.stock < 10 && (
                <p className="text-sm text-orange-600 text-center mt-2">
                  जल्दी करें! केवल {product.stock} बचे हैं
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="font-display text-3xl mb-8 text-center">
            इसी तरह की सुगंधें
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) => p.element === product.element && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group relative bg-card border border-border hover:border-primary/30 rounded-lg overflow-hidden transition-all duration-500 glow-gold hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.nameHindi}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <span className="absolute top-2 left-2 text-2xl">
                      {relatedProduct.zodiacSymbol}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-display text-sm mb-1">{relatedProduct.nameHindi}</h3>
                    <span className="font-display text-lg text-gradient-gold">
                      ₹{relatedProduct.price.toLocaleString('hi-IN')}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
