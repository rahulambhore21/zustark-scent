export interface Product {
  id: string;
  name: string;
  nameHindi: string;
  zodiac: string;
  zodiacSymbol: string;
  element: string;
  price: number; // Price in INR
  description: string;
  descriptionHindi: string;
  notes: string[];
  notesHindi: string[];
  image: string;
  category: "fire" | "earth" | "air" | "water";
  weight: number; // in kg
  dimensions: {
    length: number; // cm
    breadth: number; // cm
    height: number; // cm
  };
  sku: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: "aries",
    name: "Aries Blaze",
    nameHindi: "मेष ज्वाला",
    zodiac: "Aries",
    zodiacSymbol: "♈",
    element: "Fire",
    price: 2999,
    description: "A bold, fiery fragrance for the fearless trailblazer. Ignite your inner warrior.",
    descriptionHindi: "निडर अग्रदूत के लिए एक साहसी, ज्वलंत सुगंध। अपने भीतर के योद्धा को जगाएं।",
    notes: ["Saffron", "Black Pepper", "Cedarwood"],
    notesHindi: ["केसर", "काली मिर्च", "देवदार"],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    category: "fire",
    weight: 0.25,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "ARIES-001",
    stock: 100
  },
  {
    id: "taurus",
    name: "Taurus Terra",
    nameHindi: "वृषभ पृथ्वी",
    zodiac: "Taurus",
    zodiacSymbol: "♉",
    element: "Earth",
    price: 3199,
    description: "Rich, grounding, and sensual. An earthy embrace for the steadfast soul.",
    descriptionHindi: "समृद्ध, स्थिर और कामुक। दृढ़ आत्मा के लिए पृथ्वी का आलिंगन।",
    notes: ["Sandalwood", "Vanilla", "Rose"],
    notesHindi: ["चंदन", "वेनिला", "गुलाब"],
    image: "https://images.unsplash.com/photo-1594035910387-fea081d11bb0?w=400&h=500&fit=crop",
    category: "earth",
    weight: 0.25,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "TAURUS-001",
    stock: 100
  },
  {
    id: "gemini",
    name: "Gemini Duality",
    nameHindi: "मिथुन द्वैत",
    zodiac: "Gemini",
    zodiacSymbol: "♊",
    element: "Air",
    price: 2799,
    description: "A playful, dual-natured scent that shifts and dances. Endlessly captivating.",
    descriptionHindi: "एक चंचल, दोहरी प्रकृति वाली सुगंध जो बदलती और नृत्य करती है। अंतहीन आकर्षक।",
    notes: ["Bergamot", "Jasmine", "White Musk"],
    notesHindi: ["बर्गमोट", "चमेली", "सफेद कस्तूरी"],
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop",
    category: "air",
    weight: 0.2,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "GEMINI-001",
    stock: 100
  },
  {
    id: "cancer",
    name: "Cancer Moonlight",
    nameHindi: "कर्क चांदनी",
    zodiac: "Cancer",
    zodiacSymbol: "♋",
    element: "Water",
    price: 3099,
    description: "A nurturing, lunar scent that wraps you in comfort and mystery.",
    descriptionHindi: "एक पोषणकारी, चंद्र सुगंध जो आपको आराम और रहस्य में लपेटती है।",
    notes: ["White Tea", "Lily", "Amber"],
    notesHindi: ["सफेद चाय", "लिली", "एम्बर"],
    image: "https://images.unsplash.com/photo-1595425964272-fc617fa19dfa?w=400&h=500&fit=crop",
    category: "water",
    weight: 0.25,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "CANCER-001",
    stock: 100
  },
  {
    id: "leo",
    name: "Leo Radiance",
    nameHindi: "सिंह तेज",
    zodiac: "Leo",
    zodiacSymbol: "♌",
    element: "Fire",
    price: 3499,
    description: "Commanding and magnificent. A royal fragrance for those who rule with heart.",
    descriptionHindi: "आज्ञाकारी और शानदार। उन लोगों के लिए एक शाही सुगंध जो दिल से शासन करते हैं।",
    notes: ["Oud", "Gold Amber", "Neroli"],
    notesHindi: ["ऊद", "स्वर्ण एम्बर", "नेरोली"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
    category: "fire",
    weight: 0.3,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "LEO-001",
    stock: 100
  },
  {
    id: "virgo",
    name: "Virgo Purity",
    nameHindi: "कन्या शुद्धता",
    zodiac: "Virgo",
    zodiacSymbol: "♍",
    element: "Earth",
    price: 2899,
    description: "Clean, precise, and elegant. A crystalline fragrance for the discerning mind.",
    descriptionHindi: "स्वच्छ, सटीक और सुरुचिपूर्ण। समझदार मन के लिए एक क्रिस्टलीय सुगंध।",
    notes: ["Green Tea", "Iris", "Vetiver"],
    notesHindi: ["हरी चाय", "आइरिस", "वेटिवर"],
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&h=500&fit=crop",
    category: "earth",
    weight: 0.22,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "VIRGO-001",
    stock: 100
  },
  {
    id: "libra",
    name: "Libra Harmony",
    nameHindi: "तुला सामंजस्य",
    zodiac: "Libra",
    zodiacSymbol: "♎",
    element: "Air",
    price: 3049,
    description: "Balanced and beautiful. A symphony of notes that embodies grace.",
    descriptionHindi: "संतुलित और सुंदर। नोटों की एक सिम्फनी जो अनुग्रह का प्रतीक है।",
    notes: ["Peony", "Pink Pepper", "Cashmere Wood"],
    notesHindi: ["पेनी", "गुलाबी मिर्च", "कश्मीरी लकड़ी"],
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop",
    category: "air",
    weight: 0.24,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "LIBRA-001",
    stock: 100
  },
  {
    id: "scorpio",
    name: "Scorpio Enigma",
    nameHindi: "वृश्चिक रहस्य",
    zodiac: "Scorpio",
    zodiacSymbol: "♏",
    element: "Water",
    price: 3599,
    description: "Dark, magnetic, and transformative. A scent of depth and power.",
    descriptionHindi: "अंधकारमय, चुंबकीय और परिवर्तनकारी। गहराई और शक्ति की सुगंध।",
    notes: ["Black Orchid", "Dark Musk", "Patchouli"],
    notesHindi: ["काली ऑर्किड", "गहरी कस्तूरी", "पचौली"],
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop",
    category: "water",
    weight: 0.28,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "SCORPIO-001",
    stock: 100
  },
  {
    id: "sagittarius",
    name: "Sagittarius Voyage",
    nameHindi: "धनु यात्रा",
    zodiac: "Sagittarius",
    zodiacSymbol: "♐",
    element: "Fire",
    price: 2999,
    description: "Adventurous and free-spirited. A fragrance that captures wanderlust.",
    descriptionHindi: "साहसिक और स्वतंत्र। एक सुगंध जो घुमक्कड़ी को पकड़ती है।",
    notes: ["Cardamom", "Juniper", "Leather"],
    notesHindi: ["इलायची", "जुनिपर", "चमड़ा"],
    image: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=400&h=500&fit=crop",
    category: "fire",
    weight: 0.23,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "SAGITTARIUS-001",
    stock: 100
  },
  {
    id: "capricorn",
    name: "Capricorn Summit",
    nameHindi: "मकर शिखर",
    zodiac: "Capricorn",
    zodiacSymbol: "♑",
    element: "Earth",
    price: 3299,
    description: "Ambitious and refined. A sophisticated scent for the visionary climber.",
    descriptionHindi: "महत्वाकांक्षी और परिष्कृत। दूरदर्शी पर्वतारोही के लिए एक परिष्कृत सुगंध।",
    notes: ["Tobacco", "Dark Honey", "Birch"],
    notesHindi: ["तम्बाकू", "गहरा शहद", "सन्टी"],
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=500&fit=crop",
    category: "earth",
    weight: 0.26,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "CAPRICORN-001",
    stock: 100
  },
  {
    id: "aquarius",
    name: "Aquarius Ether",
    nameHindi: "कुंभ आकाश",
    zodiac: "Aquarius",
    zodiacSymbol: "♒",
    element: "Air",
    price: 3199,
    description: "Unconventional and electric. A cosmic fragrance for the revolutionary spirit.",
    descriptionHindi: "अपरंपरागत और विद्युतीय। क्रांतिकारी आत्मा के लिए एक ब्रह्मांडीय सुगंध।",
    notes: ["Ozone", "Violet Leaf", "Ambroxan"],
    notesHindi: ["ओज़ोन", "वायलेट पत्ती", "एम्ब्रोक्सन"],
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400&h=500&fit=crop",
    category: "air",
    weight: 0.24,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "AQUARIUS-001",
    stock: 100
  },
  {
    id: "pisces",
    name: "Pisces Depths",
    nameHindi: "मीन गहराई",
    zodiac: "Pisces",
    zodiacSymbol: "♓",
    element: "Water",
    price: 3099,
    description: "Dreamy and ethereal. An oceanic fragrance for the mystic poet.",
    descriptionHindi: "स्वप्निल और अलौकिक। रहस्यवादी कवि के लिए एक सागरीय सुगंध।",
    notes: ["Sea Salt", "Water Lily", "Driftwood"],
    notesHindi: ["समुद्री नमक", "कमल", "लकड़ी"],
    image: "https://images.unsplash.com/photo-1616604426203-1225f4217e69?w=400&h=500&fit=crop",
    category: "water",
    weight: 0.24,
    dimensions: { length: 10, breadth: 5, height: 15 },
    sku: "PISCES-001",
    stock: 100
  },
];

export const categories = [
  {id: "all", label: "सभी राशियाँ", icon: "✦" },
  { id: "fire", label: "अग्नि राशियाँ", icon: "🔥", signs: "मेष • सिंह • धनु" },
  { id: "earth", label: "पृथ्वी राशियाँ", icon: "🌿", signs: "वृषभ • कन्या • मकर" },
  { id: "air", label: "वायु राशियाँ", icon: "💨", signs: "मिथुन • तुला • कुंभ" },
  { id: "water", label: "जल राशियाँ", icon: "🌊", signs: "कर्क • वृश्चिक • मीन" },
];
