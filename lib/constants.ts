// Усі дані сайту — в одному місці

export const SITE = {
  name: "ORBITA",
  tagline: "Кава, що виводить на орбіту.",
  description: "ORBITA — космічна кав'ярня спешелті-кави. Кожен напій — окрема орбітальна станція.",
};

export const NAV = [
  { label: "Меню", href: "#menu" },
  { label: "Про нас", href: "#about" },
  { label: "Локація", href: "#location" },
  { label: "Контакти", href: "#footer" },
] as const;

export type Drink = {
  id: string;
  name: string;
  type: string;
  desc: string;
  price: number;
  milk: boolean;
  strength: 1 | 2 | 3 | 4 | 5;
};

export const MENU: Drink[] = [
  { id: "01", name: "ПУСК", type: "Еспресо", desc: "Один постріл. Нуль компромісів.", price: 65, milk: false, strength: 5 },
  { id: "02", name: "ОРБІТА", type: "Капучино", desc: "Шовкова піна на густому еспресо.", price: 95, milk: true, strength: 3 },
  { id: "03", name: "ТУМАННІСТЬ", type: "Флет вайт", desc: "Подвійний шот у хмарі оксамитового молока.", price: 105, milk: true, strength: 4 },
  { id: "04", name: "АПОГЕЙ", type: "Фільтр V60", desc: "Чистий профіль, ягідна кислотність.", price: 110, milk: false, strength: 2 },
  { id: "05", name: "МІСЯЧНИЙ", type: "Латте з лавандою", desc: "Ніжний латте з лавандовим сиропом.", price: 125, milk: true, strength: 2 },
  { id: "06", name: "ПУЛЬСАР", type: "Колд брю тонік", desc: "Холодна кава, тонік і лід. Заряджає миттєво.", price: 120, milk: false, strength: 4 },
];

export const STATS = [
  { value: 12, label: "сортів зерна" },
  { value: 3, label: "обсмажувальні партнери" },
  { value: 1, label: "філософія" },
] as const;

export const CONTACTS = {
  address: "вул. Хрещатик, 22, Київ",
  addressNote: "Вхід із двору, другий поверх",
  phone: "+380 44 123 45 67",
  phoneHref: "tel:+380441234567",
  email: "hello@orbita.coffee",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Khreshchatyk+22+Kyiv",
};

export const HOURS = [
  { days: "Пн — Пт", time: "08:00 — 22:00" },
  { days: "Сб — Нд", time: "09:00 — 23:00" },
] as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/orbita.coffee" },
  { label: "Telegram", href: "https://t.me/orbita_coffee" },
] as const;

export const BOOKING_TIMES = [
  "08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00",
  "16:00","17:00","18:00","19:00","20:00","21:00",
];
export const MAX_GUESTS = 8;
