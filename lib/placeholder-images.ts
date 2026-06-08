export type PlaceholderImage = {
  src: string
  alt: string
  width: number
  height: number
}

export const IMAGES = {
  hero: {
    src: '/images/hero-brand-wall.webp',
    alt: 'Ta Pinakia logo wall with decorative ceramic plates',
    width: 6000,
    height: 4000,
  },
  winterMood: {
    src: '/images/music-wall.webp',
    alt: 'Bouzouki and guitar mounted on the interior wall',
    width: 6000,
    height: 4000,
  },
  summerMood: {
    src: '/images/terrace-day.webp',
    alt: 'Ta Pinakia blue-and-white terrace in daylight',
    width: 5000,
    height: 3333,
  },
  dishes: [
    { src: '/images/courgette-chips.webp', alt: 'Courgette chips with dipping sauce', width: 5000, height: 3333 },
    { src: '/images/sausage-stew.webp', alt: 'Sausage and potato stew in a pan', width: 3333, height: 5000 },
    { src: '/images/roasted-chicken.webp', alt: 'Roasted chicken with lemon and rosemary', width: 3333, height: 5000 },
    { src: '/images/table-spread.webp', alt: 'Seasonal table spread with shared plates', width: 3333, height: 5000 },
    { src: '/images/meze-spread.webp', alt: 'Full meze spread across the table', width: 5000, height: 3333 },
    { src: '/images/stuffed-eggplant.webp', alt: 'Stuffed eggplant with melted cheese', width: 3333, height: 5000 },
  ],
  storyHero: {
    src: '/images/story-brand-wall.webp',
    alt: 'Ta Pinakia logo wall with decorative ceramic plates',
    width: 6000,
    height: 4000,
  },
  oliveOil: {
    src: '/images/olive-harvest.webp',
    alt: 'Harvesting olives from our own trees in Cyprus',
    width: 1024,
    height: 1536,
  },
  seasonalKitchen: {
    src: '/images/table-spread.webp',
    alt: 'Seasonal dishes and shared plates on the table',
    width: 3333,
    height: 5000,
  },
  madeByHand: {
    src: '/images/orzo-pan.webp',
    alt: 'Orzo cooked in a pan with fresh herbs',
    width: 3333,
    height: 5000,
  },
  gallery: [
    { src: '/images/gyros-merida.webp', alt: 'Gyros Merida on wooden board', width: 5568, height: 3712 },
    { src: '/images/shrimp-salad.webp', alt: 'Shrimp salad with fresh greens', width: 1080, height: 1350 },
    { src: '/images/bread-and-dips.webp', alt: 'Fresh bread and dips spread', width: 1080, height: 1350 },
    { src: '/images/interior-blue-tables.webp', alt: 'Ta Pinakia interior — blue tables and ceramic plates', width: 1080, height: 1350 },
    { src: '/images/terrace-sunset-paphos.webp', alt: 'Terrace table at sunset over Paphos', width: 1024, height: 1536 },
    { src: '/images/vintage-lamp-and-phone.webp', alt: 'Vintage lamp and antique phone — interior details', width: 1024, height: 1536 },
    { src: '/images/staircase-at-night.webp', alt: 'The staircase to Ta Pinakia at night', width: 1024, height: 1536 },
    { src: '/images/terrace-nightlife.webp', alt: 'Guests enjoying drinks on the terrace', width: 1080, height: 1350 },
    { src: '/images/terrace-table-setting.webp', alt: 'Table setting on the terrace', width: 2448, height: 3696 },
    { src: '/images/terrace-summer-evening.webp', alt: 'Busy terrace on a summer evening', width: 1080, height: 1350 },
    { src: '/images/spirits-collection.webp', alt: 'Spirits and bottles collection', width: 2448, height: 3696 },
    { src: '/images/terrace-sunset-view.webp', alt: 'Sunset view from the terrace', width: 1080, height: 1350 },
    { src: '/images/dessert-citrus-cream.webp', alt: 'Seasonal dessert with citrus and cream', width: 1023, height: 1537 },
    { src: '/images/dessert-churro-cream.webp', alt: 'House dessert with churro and cream', width: 1023, height: 1537 },
    { src: '/images/dessert-lava-cake.webp', alt: 'Chocolate lava cake with ice cream', width: 1023, height: 1537 },
    { src: '/images/dessert-kataifi.webp', alt: 'Kataifi-style dessert with pistachio', width: 1023, height: 1537 },
    { src: '/images/courgette-chips.webp', alt: 'Courgette chips with dipping sauce', width: 5000, height: 3333 },
    { src: '/images/roasted-chicken.webp', alt: 'Roasted chicken with lemon and rosemary', width: 3333, height: 5000 },
    { src: '/images/stuffed-eggplant.webp', alt: 'Stuffed eggplant with melted cheese', width: 3333, height: 5000 },
    { src: '/images/orzo-pan.webp', alt: 'Orzo cooked in a pan with fresh herbs', width: 3333, height: 5000 },
    { src: '/images/pasta-chicken.webp', alt: 'Penne with breaded chicken', width: 3333, height: 5000 },
    { src: '/images/calamari-salad.webp', alt: 'Fried calamari salad', width: 3333, height: 5000 },
    { src: '/images/meze-spread.webp', alt: 'Full meze spread across the table', width: 5000, height: 3333 },
    { src: '/images/table-spread.webp', alt: 'Seasonal table spread with shared plates', width: 3333, height: 5000 },
    { src: '/images/dining-room.webp', alt: 'The dining room with vintage decor', width: 3333, height: 5000 },
    { src: '/images/blue-table-setting.webp', alt: 'Blue table setting beneath the logo wall', width: 3333, height: 5000 },
    { src: '/images/music-wall.webp', alt: 'Bouzouki and guitar mounted on the interior wall', width: 6000, height: 4000 },
    { src: '/images/vintage-corner.webp', alt: 'Vintage lamp and antique phone corner', width: 3333, height: 5000 },
    { src: '/images/greek-wall-plates.webp', alt: 'Greek landmark plates on the wall', width: 3333, height: 5000 },
    { src: '/images/wall-character.webp', alt: 'Vintage posters and prickly pear on the wall', width: 3333, height: 5000 },
    { src: '/images/set-for-dinner.webp', alt: 'Tables set for dinner', width: 3456, height: 5184 },
    { src: '/images/terrace-day.webp', alt: 'Blue-and-white terrace in daylight', width: 5000, height: 3333 },
    { src: '/images/terrace-afternoon.webp', alt: 'Terrace in the afternoon sun', width: 3333, height: 5000 },
  ],
}
