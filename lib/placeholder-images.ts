export type PlaceholderImage = {
  src: string
  alt: string
  width: number
  height: number
  replaceWith: string
}

export const IMAGES = {
  hero: {
    src: 'https://picsum.photos/1920/1080?random=10',
    alt: 'Ta Pinakia restaurant — atmospheric view of the space',
    width: 1920,
    height: 1080,
    replaceWith: 'Hero shot: wide angle of terrace in golden hour OR interior fireplace evening ambiance',
  },
  introSide: {
    src: 'https://picsum.photos/800/1000?random=11',
    alt: 'Ta Pinakia dining atmosphere',
    width: 800,
    height: 1000,
    replaceWith: 'Portrait: table set for meze, candlelight, stone wall background',
  },
  winterMood: {
    src: 'https://picsum.photos/900/600?random=12',
    alt: 'Ta Pinakia winter fireplace interior',
    width: 900,
    height: 600,
    replaceWith: 'Interior shot: open fireplace, warm amber light, diners in background',
  },
  summerMood: {
    src: 'https://picsum.photos/900/600?random=13',
    alt: 'Ta Pinakia summer terrace',
    width: 900,
    height: 600,
    replaceWith: 'Terrace shot: blue doors open, afternoon light, rooftop views',
  },
  dishes: [
    { src: 'https://picsum.photos/800/600?random=20', alt: 'Kolokithokeftedes — Courgette Fritters', width: 800, height: 600, replaceWith: 'Close-up: courgette fritters with tzatziki, ceramic plate, natural light' },
    { src: 'https://picsum.photos/600/800?random=21', alt: 'Veal Cheeks Orzo', width: 600, height: 800, replaceWith: 'Portrait: veal cheeks orzo in deep bowl, steam, rustic surface' },
    { src: 'https://picsum.photos/600/800?random=22', alt: 'Lemon Pork', width: 600, height: 800, replaceWith: 'Portrait: lemon pork on wooden board, fresh herbs, citrus' },
    { src: 'https://picsum.photos/800/600?random=23', alt: 'Grilled Shrimp with Fresh Herbs', width: 800, height: 600, replaceWith: 'Landscape: grilled shrimp, herbs, ceramic plate, Mediterranean light' },
    { src: 'https://picsum.photos/800/600?random=24', alt: 'Meat Meze spread', width: 800, height: 600, replaceWith: 'Wide: full meze spread across table, multiple plates, shared dining scene' },
    { src: 'https://picsum.photos/600/800?random=25', alt: 'Warm homemade bread and dips', width: 600, height: 800, replaceWith: 'Portrait: fresh bread, three dips, olive oil drizzle, linen napkin' },
  ],
  storyHero: {
    src: 'https://picsum.photos/1200/700?random=30',
    alt: 'Ta Pinakia kitchen and story',
    width: 1200,
    height: 700,
    replaceWith: 'Wide: owner or kitchen scene, authentic, not staged',
  },
  oliveOil: {
    src: 'https://picsum.photos/600/600?random=31',
    alt: 'Our olive oil — cold pressed',
    width: 600,
    height: 600,
    replaceWith: 'Square: olive oil being poured, olive trees or bottle, warm light',
  },
  seasonalKitchen: {
    src: 'https://picsum.photos/600/600?random=32',
    alt: 'Fresh seasonal ingredients from the market',
    width: 600,
    height: 600,
    replaceWith: 'Square: fresh produce, market vegetables, herbs on wooden surface',
  },
  madeByHand: {
    src: 'https://picsum.photos/600/600?random=33',
    alt: 'Handmade bread and pastries',
    width: 600,
    height: 600,
    replaceWith: 'Square: hands shaping dough, or fresh bread out of oven, flour dusted',
  },
  gallery: [
    { src: 'https://picsum.photos/800/600?random=40', alt: 'Grilled halloumi with thyme honey', width: 800, height: 600, replaceWith: 'Food close-up: halloumi dish' },
    { src: 'https://picsum.photos/800/600?random=41', alt: 'Loukoumades with honey and walnuts', width: 800, height: 600, replaceWith: 'Food close-up: loukoumades' },
    { src: 'https://picsum.photos/800/600?random=42', alt: 'Veal cheeks orzo signature dish', width: 800, height: 600, replaceWith: 'Food close-up: veal orzo' },
    { src: 'https://picsum.photos/800/600?random=43', alt: 'Fresh Greek salad', width: 800, height: 600, replaceWith: 'Food close-up: Greek salad' },
    { src: 'https://picsum.photos/600/800?random=44', alt: 'Ta Pinakia interior stone walls', width: 600, height: 800, replaceWith: 'Interior atmosphere shot' },
    { src: 'https://picsum.photos/600/800?random=45', alt: 'Fireplace evening ambiance', width: 600, height: 800, replaceWith: 'Fireplace close-up' },
    { src: 'https://picsum.photos/600/800?random=46', alt: 'Table setting with candles', width: 600, height: 800, replaceWith: 'Table detail shot' },
    { src: 'https://picsum.photos/600/800?random=47', alt: 'Blue doors of the terrace', width: 600, height: 800, replaceWith: 'Terrace blue doors' },
    { src: 'https://picsum.photos/600/600?random=48', alt: 'Zivania and glasses', width: 600, height: 600, replaceWith: 'Drinks detail: zivania' },
    { src: 'https://picsum.photos/600/600?random=49', alt: 'Olive oil and bread', width: 600, height: 600, replaceWith: 'Table detail: bread and oil' },
    { src: 'https://picsum.photos/600/600?random=50', alt: 'Live music evening', width: 600, height: 600, replaceWith: 'Live music performance' },
    { src: 'https://picsum.photos/600/600?random=51', alt: 'Terrace views over Paphos', width: 600, height: 600, replaceWith: 'Terrace view: old town panorama' },
  ],
}
