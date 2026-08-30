/* ANDOON 22 JEWELRY — Product catalogue
   Edit prices, names or descriptions here — every page reads from this file. */

const CURRENCY = "$"; // change to your local currency symbol, e.g. "GH₵" or "₦"

const PRODUCTS = [
  {
    id: "aurelia-chain-trio",
    name: "Aurelia Chain Trio",
    category: "Necklaces",
    price: 145,
    material: "18k Gold-Plated Brass",
    availability: "In Stock",
    description: "A layered chain necklace, matching bracelet and drop earrings in warm gold — the kind of set that needs nothing else to finish an outfit. Bold link work catches the light with every turn.",
    images: ["p_WA0078.jpg"]
  },
  {
    id: "luna-silver-cascade",
    name: "Luna Silver Cascade",
    category: "Necklaces",
    price: 120,
    material: "Rhodium-Plated Silver",
    availability: "In Stock",
    description: "Three cascading silver chains of varying length, paired with matching drop earrings. Cool, fluid, and effortless — for the days you want quiet shine.",
    images: ["p_WA0079.jpg"]
  },
  {
    id: "meridian-link-necklace",
    name: "Meridian Link Necklace",
    category: "Necklaces",
    price: 98,
    material: "Rhodium-Plated Silver",
    availability: "In Stock",
    description: "Chunky, sculptural links in polished silver. A statement piece built for the woman who likes her jewelry to speak first.",
    images: ["p_WA0080.jpg"]
  },
  {
    id: "aurora-gold-cascade",
    name: "Aurora Gold Cascade",
    category: "Necklaces",
    price: 132,
    material: "18k Gold-Plated Brass",
    availability: "In Stock",
    description: "Multiple strands of fine gold chain layered to perfection, with coordinating earrings. Aurora moves with you — light, warm, endlessly wearable.",
    images: ["p_WA0081.jpg"]
  },
  {
    id: "infinite-embrace-cuff",
    name: "Infinite Embrace Cuff",
    category: "Bracelets",
    price: 88,
    material: "18k Gold-Plated Brass, Cubic Zirconia",
    availability: "In Stock",
    description: "A pavé infinity cuff paired with a classic pull-through band — stacked together or worn alone. Substantial in the hand, elegant on the wrist.",
    images: ["p_WA0082.jpg", "p_WA0083.jpg"]
  },
  {
    id: "serpentine-swirl-set",
    name: "Serpentine Swirl Set",
    category: "Necklaces",
    price: 110,
    material: "Rhodium-Plated Silver, Cubic Zirconia",
    availability: "In Stock",
    description: "A sculpted swirl pendant with pavé stone earrings to match. Modern, architectural, and made to catch candlelight.",
    images: ["p_WA0084.jpg"]
  },
  {
    id: "regal-gold-rope",
    name: "Regal Gold Rope",
    category: "Necklaces",
    price: 128,
    material: "18k Gold-Plated Brass",
    availability: "In Stock",
    description: "Twisted rope chains in graduated lengths with matching hoops. Rich, tactile texture that reads editorial, not everyday.",
    images: ["p_WA0086.jpg"]
  },
  {
    id: "regal-silver-rope",
    name: "Regal Silver Rope",
    category: "Necklaces",
    price: 128,
    material: "Rhodium-Plated Silver",
    availability: "In Stock",
    description: "The cool-tone sibling of our Regal Rope — twisted silver chains layered with matching hoop earrings for a sharp, polished finish.",
    images: ["p_WA0087.jpg"]
  },
  {
    id: "emeraude-enamel-stack",
    name: "Émeraude Enamel Bangle Stack",
    category: "Bracelets",
    price: 76,
    material: "Gold-Plated Brass, Enamel",
    availability: "In Stock",
    description: "A stack of hinged enamel bangles in jewel and neutral tones. Mix, match, and wear two or three together for a signature stack.",
    images: ["p_WA0088.jpg"]
  },
  {
    id: "grand-aurelia-parure",
    name: "Grand Aurelia Parure",
    category: "Gift Sets",
    price: 210,
    material: "18k Gold-Plated Brass",
    availability: "In Stock",
    description: "Our most complete gold parure — layered necklace, bracelet and drop earrings presented together. The ultimate gift for a milestone occasion.",
    images: ["p_WA0089.jpg"]
  },
  {
    id: "golden-hour-trio",
    name: "Golden Hour Trio",
    category: "Gift Sets",
    price: 168,
    material: "18k Gold-Plated Brass",
    availability: "In Stock",
    description: "Necklace, bracelet and earrings in a warm, fine gold link — a versatile trio that transitions from morning meetings to evening plans.",
    images: ["p_WA0090.jpg"]
  },
  {
    id: "ivory-constellation-set",
    name: "Ivory Constellation Set",
    category: "Gift Sets",
    price: 195,
    material: "Rhodium-Plated Silver, Cubic Zirconia",
    availability: "In Stock",
    description: "A full parure of pavé stone florals — necklace, bracelet and earrings — for the moments that call for full sparkle.",
    images: ["p_WA0091.jpg"]
  },
  {
    id: "empress-crystal-set",
    name: "Empress Crystal Set",
    category: "Gift Sets",
    price: 228,
    material: "Rhodium-Plated Silver, Cubic Zirconia",
    availability: "In Stock",
    description: "A statement bridal-ready parure — bold pavé necklace, bracelet and earrings for the occasions that deserve full presence.",
    images: ["p_WA0093.jpg"]
  },
  {
    id: "solitaire-vow-ring",
    name: "Solitaire Vow Ring",
    category: "Rings",
    price: 64,
    material: "18k Gold-Plated Brass, Cubic Zirconia",
    availability: "In Stock",
    description: "A single round stone set high on a slim gold band. Understated, timeless, and just as at home stacked with other rings.",
    images: ["p_WA0094.jpg"]
  },
  {
    id: "starlight-rhinestone-set",
    name: "Starlight Rhinestone Set",
    category: "Gift Sets",
    price: 158,
    material: "Rhodium-Plated Silver, Rhinestone",
    availability: "In Stock",
    description: "Necklace and matching ring in brilliant rhinestone clusters. Compact sparkle that photographs beautifully.",
    images: ["p_WA0095.jpg"]
  },
  {
    id: "moonlit-silver-trio",
    name: "Moonlit Silver Trio",
    category: "Gift Sets",
    price: 150,
    material: "Rhodium-Plated Silver",
    availability: "In Stock",
    description: "Necklace, bracelet and earrings in a fine silver link — clean and quietly luxurious for everyday wear.",
    images: ["p_WA0096.jpg"]
  },
  {
    id: "celeste-rhinestone-duet",
    name: "Celeste Rhinestone Duet",
    category: "Necklaces",
    price: 132,
    material: "Rhodium-Plated Silver, Rhinestone",
    availability: "In Stock",
    description: "A brilliant rhinestone necklace and earring duet with a coordinating ring. Full of movement, built for evening light.",
    images: ["p_WA0097.jpg"]
  },
  {
    id: "midnight-gold-ensemble",
    name: "Midnight Gold Ensemble",
    category: "Gift Sets",
    price: 172,
    material: "18k Gold-Plated Brass",
    availability: "In Stock",
    description: "Necklace, bracelet and earrings in rich gold link, styled the way we'd wear it ourselves. A dependable, elevated everyday set.",
    images: ["p_WA0098.jpg"]
  }
];

const COLLECTIONS = [
  { name: "Necklaces", category: "Necklaces", image: "p_WA0086.jpg", description: "Layered chains, cascades and statement links — the first thing anyone notices." },
  { name: "Bracelets", category: "Bracelets", image: "p_WA0082.jpg", description: "Cuffs, bangles and stacks with real weight and presence." },
  { name: "Rings", category: "Rings", image: "p_WA0094.jpg", description: "Solitaires and stacks, worn one at a time or together." },
  { name: "Gift Sets", category: "Gift Sets", image: "p_WA0089.jpg", description: "Complete parures, boxed and ready for the moments that matter." }
];
