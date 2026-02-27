import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { CheckCircle, CreditCard, Truck, Shield } from "lucide-react";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "success">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    clearCart();
  };

  if (items.length === 0 && step !== "success") {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-gradient-gold mb-4">Your cart is empty</h1>
          <button
            onClick={() => navigate("/shop")}
            className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body rounded"
          >
            Browse Collection
          </button>
        </div>
      </main>
    );
  }

  if (step === "success") {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl text-gradient-gold mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground font-body mb-2">Thank you for your purchase.</p>
          <p className="text-muted-foreground font-body text-sm mb-8">
            This is a demo checkout. No real payment was processed. Your celestial fragrances would be on their way! ✨
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body rounded"
          >
            Return Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-0">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-display text-4xl text-gradient-gold text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-24">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-display text-xl flex items-center gap-2"><Truck className="w-5 h-5 text-primary" /> Shipping</h2>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First Name" required className="col-span-1 bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
                <input placeholder="Last Name" required className="col-span-1 bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
              </div>
              <input placeholder="Email" type="email" required className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
              <input placeholder="Address" required className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="City" required className="bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
                <input placeholder="State" required className="bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
                <input placeholder="ZIP" required className="bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-display text-xl flex items-center gap-2"><CreditCard className="w-5 h-5 text-primary" /> Payment (Demo)</h2>
              <input placeholder="Card Number" defaultValue="4242 4242 4242 4242" className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="MM/YY" defaultValue="12/28" className="bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
                <input placeholder="CVC" defaultValue="123" className="bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded glow-gold hover:opacity-90 transition-all"
            >
              Place Demo Order — ${totalPrice}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-body">
              <Shield className="w-4 h-4" />
              <span>This is a demo. No real payment will be processed.</span>
            </div>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="font-display text-xl mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <img src={item.product.image} alt={item.product.name} className="w-12 h-14 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-body">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground font-body">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-display text-primary">${item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm font-body">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary">Free ✦</span>
                </div>
                <div className="flex justify-between font-display text-xl pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-gradient-gold">${totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Checkout;
