export type PlaceholderImage = {
  src: string
  alt: string
  width: number
  height: number
}

export const IMAGES = {
  hero: {
    src: '/images/hero-brand-wall.jpg',
    alt: 'Ta Pinakia logo wall with decorative ceramic plates',
    width: 6000,
    height: 4000,
  },
  winterMood: {
    src: '/images/music-wall.jpg',
    alt: 'Bouzouki and guitar mounted on the interior wall',
    width: 6000,
    height: 4000,
  },
  summerMood: {
    src: '/images/terrace-day.jpg',
    alt: 'Ta Pinakia blue-and-white terrace in daylight',
    width: 5000,
    height: 3333,
  },
  dishes: [
    { src: '/images/courgette-chips.jpg', alt: 'Courgette chips with dipping sauce', width: 5000, height: 3333 },
    { src: '/images/sausage-stew.jpg', alt: 'Sausage and potato stew in a pan', width: 3333, height: 5000 },
    { src: '/images/roasted-chicken.jpg', alt: 'Roasted chicken with lemon and rosemary', width: 3333, height: 5000 },
    { src: '/images/table-spread.jpg', alt: 'Seasonal table spread with shared plates', width: 3333, height: 5000 },
    { src: '/images/meze-spread.jpg', alt: 'Full meze spread across the table', width: 5000, height: 3333 },
    { src: '/images/stuffed-eggplant.jpg', alt: 'Stuffed eggplant with melted cheese', width: 3333, height: 5000 },
  ],
  storyHero: {
    src: '/images/story-brand-wall.jpg',
    alt: 'Ta Pinakia logo wall with decorative ceramic plates',
    width: 6000,
    height: 4000,
  },
  oliveOil: {
    src: '/images/olive-harvest.png',
    alt: 'Harvesting olives from our own trees in Cyprus',
    width: 1024,
    height: 1536,
  },
  seasonalKitchen: {
    src: '/images/table-spread.jpg',
    alt: 'Seasonal dishes and shared plates on the table',
    width: 3333,
    height: 5000,
  },
  madeByHand: {
    src: '/images/orzo-pan.jpg',
    alt: 'Orzo cooked in a pan with fresh herbs',
    width: 3333,
    height: 5000,
  },
  gallery: [
    { src: '/images/gyros-merida.jpg', alt: 'Gyros Merida on wooden board', width: 5568, height: 3712 },
    { src: '/images/shrimp-salad.jpg', alt: 'Shrimp salad with fresh greens', width: 1080, height: 1350 },
    { src: '/images/bread-and-dips.jpg', alt: 'Fresh bread and dips spread', width: 1080, height: 1350 },
    { src: '/images/interior-blue-tables.jpg', alt: 'Ta Pinakia interior — blue tables and ceramic plates', width: 1080, height: 1350 },
    { src: '/images/terrace-sunset-paphos.png', alt: 'Terrace table at sunset over Paphos', width: 1024, height: 1536 },
    { src: '/images/vintage-lamp-and-phone.png', alt: 'Vintage lamp and antique phone — interior details', width: 1024, height: 1536 },
    { src: '/images/staircase-at-night.png', alt: 'The staircase to Ta Pinakia at night', width: 1024, height: 1536 },
    { src: '/images/terrace-nightlife.jpg', alt: 'Guests enjoying drinks on the terrace', width: 1080, height: 1350 },
    { src: '/images/terrace-table-setting.jpg', alt: 'Table setting on the terrace', width: 3696, height: 2448 },
    { src: '/images/terrace-summer-evening.jpg', alt: 'Busy terrace on a summer evening', width: 1080, height: 1350 },
    { src: '/images/spirits-collection.jpg', alt: 'Spirits and bottles collection', width: 3696, height: 2448 },
    { src: '/images/terrace-sunset-view.jpg', alt: 'Sunset view from the terrace', width: 1080, height: 1350 },
    { src: '/images/dessert-citrus-cream.png', alt: 'Seasonal dessert with citrus and cream', width: 1023, height: 1537 },
    { src: '/images/dessert-churro-cream.png', alt: 'House dessert with churro and cream', width: 1023, height: 1537 },
    { src: '/images/dessert-lava-cake.png', alt: 'Chocolate lava cake with ice cream', width: 1023, height: 1537 },
    { src: '/images/dessert-kataifi.png', alt: 'Kataifi-style dessert with pistachio', width: 1023, height: 1537 },
    { src: '/images/courgette-chips.jpg', alt: 'Courgette chips with dipping sauce', width: 5000, height: 3333 },
    { src: '/images/roasted-chicken.jpg', alt: 'Roasted chicken with lemon and rosemary', width: 3333, height: 5000 },
    { src: '/images/stuffed-eggplant.jpg', alt: 'Stuffed eggplant with melted cheese', width: 3333, height: 5000 },
    { src: '/images/orzo-pan.jpg', alt: 'Orzo cooked in a pan with fresh herbs', width: 3333, height: 5000 },
    { src: '/images/pasta-chicken.jpg', alt: 'Penne with breaded chicken', width: 3333, height: 5000 },
    { src: '/images/calamari-salad.jpg', alt: 'Fried calamari salad', width: 3333, height: 5000 },
    { src: '/images/meze-spread.jpg', alt: 'Full meze spread across the table', width: 5000, height: 3333 },
    { src: '/images/table-spread.jpg', alt: 'Seasonal table spread with shared plates', width: 3333, height: 5000 },
    { src: '/images/dining-room.jpg', alt: 'The dining room with vintage decor', width: 3333, height: 5000 },
    { src: '/images/blue-table-setting.jpg', alt: 'Blue table setting beneath the logo wall', width: 3333, height: 5000 },
    { src: '/images/music-wall.jpg', alt: 'Bouzouki and guitar mounted on the interior wall', width: 6000, height: 4000 },
    { src: '/images/vintage-corner.jpg', alt: 'Vintage lamp and antique phone corner', width: 3333, height: 5000 },
    { src: '/images/greek-wall-plates.jpg', alt: 'Greek landmark plates on the wall', width: 3333, height: 5000 },
    { src: '/images/wall-character.jpg', alt: 'Vintage posters and prickly pear on the wall', width: 3333, height: 5000 },
    { src: '/images/set-for-dinner.jpg', alt: 'Tables set for dinner', width: 5184, height: 3456 },
    { src: '/images/terrace-day.jpg', alt: 'Blue-and-white terrace in daylight', width: 5000, height: 3333 },
    { src: '/images/terrace-afternoon.jpg', alt: 'Terrace in the afternoon sun', width: 3333, height: 5000 },
  ],
}
