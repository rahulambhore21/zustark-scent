import { CheckCircle, AlertTriangle, Sparkles } from "lucide-react";

const UserGuideSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 star-sparkle opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-twinkle" />
            <span className="text-sm tracking-[0.3em] uppercase text-primary font-body">
              उपयोग मार्गदर्शिका
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-twinkle" style={{ animationDelay: "1s" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            अत्तर उपयोगकर्ता मार्गदर्शिका
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto font-body font-light leading-relaxed">
            यह अत्तर विशेष रूप से आध्यात्मिक एवं ज्योतिषीय प्रक्रिया द्वारा सिद्ध किया गया है। इसे उपयोग करते समय श्रद्धा, सकारात्मक सोच और विश्वास का होना अत्यंत आवश्यक है।
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {[1, 2, 3, 4, 5, 7].map((num) => (
            <div key={num} className="relative group overflow-hidden rounded-lg border border-primary/20">
              <img
                src={`/img/${num}.jpeg`}
                alt={`अत्तर उपयोग चित्र ${num}`}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Usage Method */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-3xl text-gradient-gold mb-8 text-center">
            उपयोग करने की विधि
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "इस अत्तर का उपयोग करने से पहले मन को शांत रखें और सकारात्मक विचार रखें।",
              "प्रतिदिन हल्की मात्रा में इस अत्तर को अपने शरीर पर (जैसे कलाई या गर्दन के पास) लगाएं।",
              "अत्तर लगाते समय अपने उद्देश्य या मनोकामना को ध्यान में रखें।",
              "इसका उपयोग श्रद्धा और विश्वास के साथ करें, क्योंकि इसका प्रभाव उपयोगकर्ता की भावना और आस्था पर भी निर्भर करता है।"
            ].map((step, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Instructions */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-3xl text-gradient-gold mb-8 text-center">
            महत्वपूर्ण निर्देश
          </h3>
          <div className="space-y-4">
            {[
              "इस अत्तर का अत्यधिक उपयोग न करें।",
              "इसे केवल सीमित मात्रा में और आवश्यकता अनुसार ही लगाएं।",
              "अत्तर का उपयोग करते समय सकारात्मक सोच और धैर्य बनाए रखें।"
            ].map((instruction, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground font-body">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After Use */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-3xl text-gradient-gold mb-8 text-center">
            उपयोग के बाद क्या करें
          </h3>
          <div className="p-8 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm">
            <p className="text-muted-foreground font-body leading-relaxed text-center">
              जब आपको यह अनुभव हो कि आपकी मनोकामना या उद्देश्य पूर्ण हो गया है, तब इस अत्तर को अपने पास न रखें।
              उस समय इस अत्तर को किसी वॉशबेसिन, बहते पानी या स्वच्छ जल स्रोत में प्रवाहित कर दें।
            </p>
          </div>
        </div>

        {/* Precautions */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-3xl text-gradient-gold mb-8 text-center">
            सावधानियां
          </h3>
          <div className="space-y-4">
            {[
              "यह उत्पाद आध्यात्मिक एवं ज्योतिषीय मान्यताओं पर आधारित है।",
              "इसका उपयोग किसी भी चिकित्सा उपचार के विकल्प के रूप में न करें।",
              "बच्चों की पहुंच से दूर रखें।",
              "केवल बाहरी उपयोग के लिए है।"
            ].map((precaution, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground font-body">{precaution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-3xl text-gradient-gold mb-8 text-center">
            अस्वीकरण (Disclaimer)
          </h3>
          <div className="p-8 rounded-lg border border-muted bg-muted/30 backdrop-blur-sm">
            <p className="text-muted-foreground font-body leading-relaxed text-center italic">
              इस अत्तर का प्रभाव व्यक्ति की श्रद्धा, आस्था और व्यक्तिगत अनुभव पर आधारित हो सकता है। परिणाम व्यक्ति विशेष के अनुसार अलग-अलग हो सकते हैं। यह उत्पाद किसी प्रकार की निश्चित गारंटी या दावा नहीं करता।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuideSection;
