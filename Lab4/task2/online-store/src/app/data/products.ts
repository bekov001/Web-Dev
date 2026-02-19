import { Product } from '../models/product.model';

const COMMON_GALLERY = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Samsung Galaxy S24 256GB',
    description:
      'Compact flagship with a bright AMOLED display and a fast Snapdragon chipset. A balanced everyday phone with solid cameras and long battery life.',
    price: 449990,
    rating: 4.8,
    image: COMMON_GALLERY[0],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-gb-256-gb-cernyi-116044249/?c=750000000',
  },
  {
    id: 2,
    name: 'Apple iPhone 15 128GB',
    description:
      'Lightweight aluminum body with a crisp Super Retina XDR display. Great for photos, video, and daily use with dependable performance.',
    price: 449990,
    rating: 4.7,
    image: COMMON_GALLERY[0],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-blue-114227230/?c=750000000',
  },
  {
    id: 3,
    name: 'Apple iPad 10.9 (2022) Wi‑Fi 64GB',
    description:
      'Large 10.9-inch screen for study, entertainment, and notes. Smooth performance for apps, streaming, and light creative work.',
    price: 259990,
    rating: 4.6,
    image: COMMON_GALLERY[1],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-64gb-silver-107264871/?c=750000000',
  },
  {
    id: 4,
    name: 'Xiaomi Redmi 13C 8GB/256GB',
    description:
      'Affordable phone with a large display and generous storage. Good for messaging, social apps, and casual photos.',
    price: 79990,
    rating: 4.5,
    image: COMMON_GALLERY[0],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-115950963/?c=750000000',
  },
  {
    id: 5,
    name: 'Nintendo Switch OLED (White)',
    description:
      'Portable console with a vivid OLED screen and detachable Joy‑Cons. Play docked on TV or handheld on the go.',
    price: 189990,
    rating: 4.9,
    image: COMMON_GALLERY[2],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-107206926/?c=750000000',
  },
  {
    id: 6,
    name: 'Sony PlayStation 5 Slim 1TB',
    description:
      'Next‑gen console with fast loading and immersive 4K gaming. Slim design with 1TB storage for big game libraries.',
    price: 299990,
    rating: 4.9,
    image: COMMON_GALLERY[2],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1tb-belyi-115311662/?c=750000000',
  },
  {
    id: 7,
    name: 'Dyson V12 Detect Slim',
    description:
      'Cordless vacuum with strong suction and laser dust detection. Lightweight design makes it easy to clean the whole home.',
    price: 299990,
    rating: 4.7,
    image: COMMON_GALLERY[1],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/dyson-v12-detect-slim-108968572/?c=750000000',
  },
  {
    id: 8,
    name: 'Lenovo IdeaPad 3 15 (Ryzen 7, 16GB, 512GB)',
    description:
      '15.6-inch laptop for study and productivity with a solid Ryzen 7 chip. Good for multitasking, office work, and browsing.',
    price: 299990,
    rating: 4.4,
    image: COMMON_GALLERY[1],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-ryzen-7-5700u-16-gb-ssd-512-gb-15-6-82ku00pwru-102397383/?c=750000000',
  },
  {
    id: 9,
    name: 'Apple AirPods Pro (2nd gen, 2023 USB‑C)',
    description:
      'Active noise cancellation with comfortable in‑ear fit. Clear sound and easy pairing across Apple devices.',
    price: 129990,
    rating: 4.8,
    image: COMMON_GALLERY[2],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-2023-usb-c-113677582/?c=750000000',
  },
  {
    id: 10,
    name: 'JBL Flip 6 (Black)',
    description:
      'Portable Bluetooth speaker with punchy bass and sturdy build. Water‑resistant body makes it great for travel and outdoors.',
    price: 59990,
    rating: 4.6,
    image: COMMON_GALLERY[2],
    images: COMMON_GALLERY,
    link: 'https://kaspi.kz/shop/p/jbl-flip-6-chernyi-103278699/?c=750000000',
  },
];
