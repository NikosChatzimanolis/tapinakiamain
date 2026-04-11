/* ── Ta Pinakia — Menu Data ─────────────────────────────────── */

export type MezeDish = {
  id: string
  number: number
  name: string
  nameGr: string
  description?: string
  allergens?: number[]
}

export type MezeMenu = {
  id: string
  label: string
  labelGr: string
  code: number
  price: number
  minPersons: number
  items: MezeDish[]
}

export const ALLERGEN_KEY: { id: number; en: string }[] = [
  { id: 1, en: 'Cereals / Gluten' },
  { id: 2, en: 'Crustaceans (shellfish)' },
  { id: 3, en: 'Eggs' },
  { id: 4, en: 'Fish' },
  { id: 5, en: 'Peanuts' },
  { id: 6, en: 'Soy' },
  { id: 7, en: 'Milk' },
  { id: 8, en: 'Fruits in shell' },
  { id: 9, en: 'Celery' },
  { id: 10, en: 'Mustard' },
  { id: 11, en: 'Sesame' },
  { id: 12, en: 'Sulphur Dioxide (SO₂)' },
  { id: 13, en: 'Lupin' },
  { id: 14, en: 'Molluscs' },
  { id: 15, en: 'Anise' },
]

/* ── Meat Meze ─────────────────────────────────────────────── */

const meatMeze: MezeMenu = {
  id: 'meat-meze',
  label: 'Meat Meze',
  labelGr: 'Μεζέ Κρεατικών',
  code: 47,
  price: 30,
  minPersons: 2,
  items: [
    { id: 'meat-1', number: 1, name: 'Homemade bread', nameGr: 'Χειροποίητο ψωμί', allergens: [1, 11] },
    { id: 'meat-2', number: 2, name: 'Village salad', nameGr: 'Χρώματα Ελλάδος', description: 'Tomato, cucumber, pepper, onion, olives, feta', allergens: [7] },
    { id: 'meat-3', number: 3, name: 'Greek yogurt with garlic', nameGr: 'Γιαουρτοκαρδίον', description: 'Tzatziki' },
    { id: 'meat-4', number: 4, name: 'Kefalonia prenitza', nameGr: 'Πρέντζα Κεφαλονιάς', description: 'Spicy cheese' },
    { id: 'meat-5', number: 5, name: 'Aubergine dip', nameGr: 'Μελιτζανοσαλάτα', description: 'Smoked eggplant, bell pepper, tomato, parsley, onion and red vinegar', allergens: [12] },
    { id: 'meat-6', number: 6, name: 'Zucchini fritters', nameGr: 'Κολοκυθοκεφτέδες', description: 'With carrot puree' },
    { id: 'meat-7', number: 7, name: 'Cheese pie crust', nameGr: 'Ραβασάκι τυριού', description: 'With sesame and honey', allergens: [1, 3, 7, 11] },
    { id: 'meat-8', number: 8, name: "Grandpa's meatballs", nameGr: 'Κεφτεδάκια του παππού', description: 'Minced pork' },
    { id: 'meat-9', number: 9, name: "Mother-in-law's pork", nameGr: 'Χοιρινό της πεθεράς', description: 'Pan fried pork with leek, wine and lemon', allergens: [12] },
    { id: 'meat-10', number: 10, name: 'Corfu pastitsada', nameGr: 'Παστιτσάδα Κέρκυρας', description: 'With chicken, tomato, vinegar and pasta', allergens: [1, 3, 7, 12] },
    { id: 'meat-11', number: 11, name: "Aunt's Potatoes", nameGr: 'Πατάτες της Θείας', description: 'Fresh French fries' },
    { id: 'meat-12', number: 12, name: 'Chicken Easter Kontosouvli', nameGr: 'Το Πάσχα της κότας', description: 'Slow-Roasted Chicken Skewers' },
    { id: 'meat-13', number: 13, name: 'Dessert of the day', nameGr: 'Γλυκό ημέρας' },
  ],
}

/* ── Vegan Meze ────────────────────────────────────────────── */

const veganMeze: MezeMenu = {
  id: 'vegan-meze',
  label: 'Vegan Meze',
  labelGr: 'Μεζέ Χορτοφαγικό',
  code: 48,
  price: 30,
  minPersons: 2,
  items: [
    { id: 'vegan-1', number: 1, name: 'Handmade bread', nameGr: 'Χειροποίητο ψωμί', allergens: [1, 11] },
    { id: 'vegan-2', number: 2, name: 'Village salad', nameGr: 'Χρώματα Ελλάδος', description: 'Tomato, cucumber, pepper, onion, olives', allergens: [12] },
    { id: 'vegan-3', number: 3, name: 'Greek yogurt with garlic', nameGr: 'Γιαουρτοκαρδίον', description: 'Tzatziki' },
    { id: 'vegan-4', number: 4, name: 'Fava', nameGr: 'Φάβα', description: 'With caramelized onions', allergens: [5] },
    { id: 'vegan-5', number: 5, name: 'Aubergine dip', nameGr: 'Μελιτζανοσαλάτα', description: 'Smoked eggplant, bell pepper, tomato, parsley, onion and red vinegar', allergens: [12] },
    { id: 'vegan-6', number: 6, name: 'Tomato fritters', nameGr: 'Ντοματοκεφτέδες' },
    { id: 'vegan-7', number: 7, name: 'Zucchini fritters', nameGr: 'Κολοκυθοκεφτέδες', description: 'With carrot puree' },
    { id: 'vegan-8', number: 8, name: "Grandpa's vegetarian meatballs", nameGr: 'Χορτοκεφτέδες και κεφτεδάκια του παππού', description: 'With red sauce', allergens: [1, 3] },
    { id: 'vegan-9', number: 9, name: 'Pan fried mushrooms', nameGr: 'Μεθυσμένα μανιτάρια', description: 'With fresh onion, sun-dried tomato and wine', allergens: [11] },
    { id: 'vegan-10', number: 10, name: 'Vegetable Orzo', nameGr: 'Κριθαράκι λαχανικών' },
    { id: 'vegan-11', number: 11, name: "Aunt's Potatoes", nameGr: 'Πατάτες της Θείας', description: 'Fresh French fries' },
    { id: 'vegan-12', number: 12, name: 'Galatsi moussaka', nameGr: 'Γαλατσί μουσακάς', description: 'With potatoes, eggplant, peppers, mushrooms, carrot, zucchini and almond milk bechamel' },
    { id: 'vegan-13', number: 13, name: 'Dessert of the day', nameGr: 'Γλυκό ημέρας' },
  ],
}

/* ── Fish Meze ─────────────────────────────────────────────── */

const fishMeze: MezeMenu = {
  id: 'fish-meze',
  label: 'Fish Meze',
  labelGr: 'Μεζέ Ψαριού',
  code: 49,
  price: 38,
  minPersons: 2,
  items: [
    { id: 'fish-1', number: 1, name: 'Handmade bread', nameGr: 'Χειροποίητο ψωμί', allergens: [1, 11] },
    { id: 'fish-2', number: 2, name: 'Village salad', nameGr: 'Χρώματα Ελλάδος', description: 'Tomato, cucumber, pepper, onion, olives, feta', allergens: [7] },
    { id: 'fish-3', number: 3, name: 'Green Tarama', nameGr: 'Η αυγή της θάλασσας', description: 'Mousse with parsley oil and ouzo', allergens: [4, 12, 15] },
    { id: 'fish-4', number: 4, name: 'Greek yogurt with garlic', nameGr: 'Γιαουρτοκαρδίον', description: 'Tzatziki' },
    { id: 'fish-5', number: 5, name: 'Aubergine dip', nameGr: 'Μελιτζανοσαλάτα', description: 'Smoked eggplant, florin pepper, tomato, parsley, onion and red vinegar', allergens: [12] },
    { id: 'fish-6', number: 6, name: 'Cheese pie crust', nameGr: 'Ραβασάκι τυριού', description: 'With sesame and honey', allergens: [1, 3, 7, 11] },
    { id: 'fish-7', number: 7, name: 'Fried zucchini', nameGr: 'Κολοκυθάκια τηγανητά', description: 'With tzatziki', allergens: [6] },
    { id: 'fish-8', number: 8, name: 'Octopus stew', nameGr: 'Χταπόδι στιφάδο', description: 'With red sauce, onions, cinnamon and thyme', allergens: [1, 12, 14] },
    { id: 'fish-9', number: 9, name: 'Fried Mediterranean smelt', nameGr: 'Αθερίνα τηγανητή', allergens: [11] },
    { id: 'fish-10', number: 10, name: 'Fried baby calamari', nameGr: 'Baby καλαμαράκι τηγανητό' },
    { id: 'fish-11', number: 11, name: "Aunt's Potatoes", nameGr: 'Πατάτες της Θείας', description: 'Fresh French fries' },
    { id: 'fish-12', number: 12, name: 'Sea bream 400gr', nameGr: 'Τσιπούρα 400γρ.' },
    { id: 'fish-13', number: 13, name: 'Dessert of the day', nameGr: 'Γλυκό ημέρας', allergens: [1, 3, 7] },
  ],
}

export const MENU: MezeMenu[] = [meatMeze, veganMeze, fishMeze]
