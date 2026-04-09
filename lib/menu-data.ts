export type MenuItem = {
  id: string
  name: string
  nameGr?: string
  description?: string
  price: number
  tags?: ('vegetarian' | 'vegan' | 'fish' | 'signature')[]
}

export type MenuCategory = {
  id: string
  label: string
  description?: string
  items: MenuItem[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'dips',
    label: 'Dips',
    description: 'Served with warm homemade bread',
    items: [
      { id: 'tzatziki', name: 'Tzatziki', description: 'Yoghurt, cucumber, garlic, fresh dill', price: 6.50, tags: ['vegetarian'] },
      { id: 'tarama', name: 'Taramosalata', description: 'Smoked cod roe, lemon, olive oil', price: 6.50, tags: ['fish'] },
      { id: 'melitzano', name: 'Melitzanosalata', description: 'Roasted aubergine, garlic, fresh herbs', price: 6.50, tags: ['vegan'] },
      { id: 'htipiti', name: 'Htipiti', description: 'Whipped feta, roasted red pepper, chilli', price: 7.00, tags: ['vegetarian'] },
    ]
  },
  {
    id: 'salads',
    label: 'Salads',
    items: [
      { id: 'greek', name: 'Greek Village Salad', description: 'Tomato, cucumber, Kalamata olives, barrel-aged feta, oregano', price: 11.50, tags: ['vegetarian'] },
      { id: 'rocket', name: 'Rocket & Fig', description: 'Wild rocket, fresh fig, toasted walnuts, aged balsamic', price: 13.00, tags: ['vegan'] },
    ]
  },
  {
    id: 'small-plates',
    label: 'Small Plates',
    items: [
      { id: 'kolokitho', name: 'Kolokithokeftedes', nameGr: 'Κολοκυθοκεφτέδες', description: 'Courgette & feta fritters, served with tzatziki', price: 11.50, tags: ['vegetarian', 'signature'] },
      { id: 'halloumi', name: 'Grilled Halloumi', description: 'Cypriot halloumi, thyme honey, lemon', price: 12.00, tags: ['vegetarian'] },
      { id: 'shrimp', name: 'Grilled Shrimp', description: 'Fresh herbs, lemon butter, chilli', price: 14.00, tags: ['fish'] },
      { id: 'bread', name: 'Warm Homemade Bread', description: 'House-baked daily, served with your choice of dip', price: 4.50, tags: ['vegetarian'] },
    ]
  },
  {
    id: 'meat-meze',
    label: 'Meat Meze',
    description: 'Per person · Minimum 2 people',
    items: [
      { id: 'meat-meze', name: 'Meat Meze', description: 'A rotating selection of the kitchen\'s finest — seasonal small plates, grilled meats, slow-cooked dishes. Changes with the market. Trust the kitchen.', price: 30, tags: ['signature'] },
    ]
  },
  {
    id: 'fish-meze',
    label: 'Fish Meze',
    description: 'Per person · Minimum 2 people',
    items: [
      { id: 'fish-meze', name: 'Fish Meze', description: 'The sea\'s best of the day. Grilled, fried, marinated. Paired with seasonal sides and fresh accompaniments.', price: 38, tags: ['fish', 'signature'] },
    ]
  },
  {
    id: 'vegan-meze',
    label: 'Vegan Meze',
    description: 'Per person · Minimum 2 people',
    items: [
      { id: 'vegan-meze', name: 'Vegan Meze', description: 'A full journey through the garden. No compromises. Our best seasonal produce, prepared with the same care as every other plate.', price: 30, tags: ['vegan', 'signature'] },
    ]
  },
  {
    id: 'signatures',
    label: 'Signatures',
    items: [
      { id: 'veal-orzo', name: 'Veal Cheeks Orzo', nameGr: 'Μοσχαράκι Κοκκινιστό', description: 'Slow-braised veal, kritharaki, aged kefalotiri, slow-cooked tomato', price: 22.00, tags: ['signature'] },
      { id: 'lemon-pork', name: 'Lemon Pork', description: 'Marinated in citrus and Cypriot herbs, charcoal-grilled', price: 19.00, tags: ['signature'] },
      { id: 'moussaka', name: 'Moussaka', nameGr: 'Μουσακάς', description: 'The classic. Slow-built, oven-baked, bechamel-topped', price: 18.50 },
      { id: 'gyros', name: 'Chicken Gyros', description: 'House-marinated, charcoal-grilled, mustard mayo, fresh pita', price: 16.00 },
    ]
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { id: 'loukoumades', name: 'Loukoumades', nameGr: 'Λουκουμάδες', description: 'Honey-soaked doughnuts, cinnamon, crushed walnuts', price: 8.00, tags: ['vegetarian'] },
      { id: 'galakto', name: 'Galaktoboureko', nameGr: 'Γαλακτομπούρεκο', description: 'Custard-filled semolina pastry, light syrup', price: 8.00, tags: ['vegetarian'] },
    ]
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      { id: 'wine-red', name: 'House Red Wine', description: 'Carafe 500ml — Cypriot selection', price: 14.00 },
      { id: 'wine-white', name: 'House White Wine', description: 'Carafe 500ml — Cypriot selection', price: 14.00 },
      { id: 'zivania', name: 'Zivania', description: 'Traditional Cypriot spirit, served as it should be', price: 4.00 },
      { id: 'beer', name: 'Local Beer', price: 5.00 },
      { id: 'juice', name: 'Fresh Juice', price: 5.00 },
      { id: 'water', name: 'Water', price: 2.00 },
    ]
  },
]
