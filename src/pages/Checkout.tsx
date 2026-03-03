import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Truck, Loader2 } from "lucide-react";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { orderAPI } from "@/lib/api";
import { toast } from "sonner";
import { indianStatesEnglish } from "@/lib/states";

// Zod schema for form validation
const checkoutSchema = z.object({
  name: z.string().min(2, "नाम कम से कम 2 अक्षरों का होना चाहिए"),
  email: z.string().email("वैध ईमेल दर्ज करें"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "वैध 10 अंकों का मोबाइल नंबर दर्ज करें"),
  addressLine1: z.string().min(5, "पूरा पता दर्ज करें"),
  addressLine2: z.string().optional(),
  landmark: z.string().optional(),
  city: z.string().min(2, "शहर का नाम दर्ज करें"),
  state: z.string().min(2, "राज्य चुनें"),
  pincode: z.string().regex(/^\d{6}$/, "वैध 6 अंकों का पिनकोड दर्ज करें"),
  orderNotes: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "success">("form");
  const [orderId, setOrderId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);

    try {
      // Prepare order data for API
      const orderData = {
        customer: {
          name: data.name,
          email: data.email,
          phone: data.phone,
        },
        shippingAddress: {
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || "",
          landmark: data.landmark || "",
          city: data.city,
          state: data.state,
          pincode: data.pincode,
          country: "India",
        },
        items: items.map((item) => ({
          productId: item.product.id,
          name: item.product.nameHindi,
          zodiac: item.product.zodiac,
          price: item.product.price,
          quantity: item.quantity,
          weight: item.product.weight,
          sku: item.product.sku,
          image: item.product.image,
          dimensions: item.product.dimensions,
        })),
        subtotal: totalPrice,
        shippingCharges: 0,
        tax: 0,
        total: totalPrice,
        orderNotes: data.orderNotes || "",
      };

      // Call API to create order
      const response = await orderAPI.createOrder(orderData);

      if (response.success) {
        setOrderId(response.data.orderId);
        setStep("success");
        clearCart();
        toast.success("ऑर्डर सफलतापूर्वक प्लेस हो गया!");
      } else {
        toast.error("ऑर्डर प्लेस करने में समस्या हुई। कृपया पुनः प्रयास करें।");
      }
    } catch (error: any) {
      console.error("Order creation failed:", error);
      toast.error(error.response?.data?.message || "ऑर्डर प्लेस करने में समस्या हुई। कृपया पुनः प्रयास करें।");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && step !== "success") {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-gradient-gold mb-4">आपकी कार्ट खाली है</h1>
          <button
            onClick={() => navigate("/shop")}
            className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body rounded"
          >
            संग्रह देखें
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
          <h1 className="font-display text-4xl text-gradient-gold mb-4">ऑर्डर कन्फर्म हो गया!</h1>
          <p className="text-muted-foreground font-body mb-2">आपके ऑर्डर के लिए धन्यवाद।</p>
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground font-body mb-1">ऑर्डर नंबर:</p>
            <p className="text-lg font-display text-primary">{orderId}</p>
          </div>
          <p className="text-muted-foreground font-body text-sm mb-8">
            आपकी आकाशीय सुगंध जल्द ही आपके पास पहुंच जाएगी! ✨<br />
            भुगतान: कैश ऑन डिलीवरी (COD)
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body rounded"
          >
            होम पर वापस जाएं
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-0">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-display text-4xl text-gradient-gold text-center mb-12">चेकआउट</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-24">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 space-y-6">
            {/* Shipping Details */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-display text-xl flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" /> शिपिंग विवरण
              </h2>

              <div>
                <input
                  {...register("name")}
                  placeholder="पूरा नाम *"
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 font-body">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="ईमेल *"
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 font-body">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="मोबाइल नंबर * (10 अंक)"
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 font-body">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("addressLine1")}
                  placeholder="पता पंक्ति 1 *"
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                {errors.addressLine1 && (
                  <p className="text-xs text-red-500 mt-1 font-body">{errors.addressLine1.message}</p>
                )}
              </div>

              <input
                {...register("addressLine2")}
                placeholder="पता पंक्ति 2 (वैकल्पिक)"
                className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />

              <input
                {...register("landmark")}
                placeholder="लैंडमार्क (वैकल्पिक)"
                className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input
                    {...register("city")}
                    placeholder="शहर *"
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                  {errors.city && (
                    <p className="text-xs text-red-500 mt-1 font-body">{errors.city.message}</p>
                  )}
                </div>
                <div>
                  <select
                    {...register("state")}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary/50"
                  >
                    <option value="">राज्य चुनें *</option>
                    {indianStatesEnglish.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-xs text-red-500 mt-1 font-body">{errors.state.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("pincode")}
                    placeholder="पिनकोड *"
                    maxLength={6}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                  {errors.pincode && (
                    <p className="text-xs text-red-500 mt-1 font-body">{errors.pincode.message}</p>
                  )}
                </div>
              </div>

              <textarea
                {...register("orderNotes")}
                placeholder="ऑर्डर नोट्स (वैकल्पिक)"
                rows={3}
                className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
            </div>

            {/* Payment Method */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-display text-xl mb-4">भुगतान विधि</h2>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  ₹
                </div>
                <div>
                  <p className="font-body font-semibold">कैश ऑन डिलीवरी (COD)</p>
                  <p className="text-xs text-muted-foreground font-body">डिलीवरी के समय भुगतान करें</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded glow-gold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  ऑर्डर प्लेस हो रहा है...
                </>
              ) : (
                <>ऑर्डर प्लेस करें — ₹{totalPrice.toLocaleString('hi-IN')}</>
              )}
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="font-display text-xl mb-4">ऑर्डर सारांश</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.nameHindi}
                      className="w-12 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-body">{item.product.nameHindi}</p>
                      <p className="text-xs text-muted-foreground font-body">मात्रा: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-display text-primary">
                      ₹{(item.product.price * item.quantity).toLocaleString('hi-IN')}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-muted-foreground">उप-योग</span>
                  <span>₹{totalPrice.toLocaleString('hi-IN')}</span>
                </div>
                <div className="flex justify-between text-sm font-body">
                  <span className="text-muted-foreground">शिपिंग</span>
                  <span className="text-primary">मुफ़्त ✦</span>
                </div>
                <div className="flex justify-between font-display text-xl pt-2 border-t border-border">
                  <span>कुल राशि</span>
                  <span className="text-gradient-gold">₹{totalPrice.toLocaleString('hi-IN')}</span>
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
