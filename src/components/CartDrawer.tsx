import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-gold/10 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gold/10">
          <h2 className="font-display text-2xl text-gradient-gold">आपकी कार्ट</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center py-12 font-body">आपकी कार्ट खाली है।<br />अपनी आकाशीय सुगंध खोजें।</p>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-4 bg-secondary/50 rounded-lg">
                <img src={item.product.image} alt={item.product.nameHindi} className="w-16 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-display text-lg">{item.product.nameHindi}</h4>
                  <p className="text-sm text-muted-foreground">{item.product.zodiacSymbol} {item.product.zodiac}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="text-muted-foreground hover:text-foreground">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-body">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="text-muted-foreground hover:text-foreground">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="font-display text-lg text-primary">₹{(item.product.price * item.quantity).toLocaleString('hi-IN')}</p>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gold/10 space-y-4">
            <div className="flex justify-between font-display text-xl">
              <span>कुल राशि</span>
              <span className="text-gradient-gold">₹{totalPrice.toLocaleString('hi-IN')}</span>
            </div>
            <button
              onClick={() => { setIsCartOpen(false); navigate("/checkout"); }}
              className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity"
            >
              चेकआउट करें
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
