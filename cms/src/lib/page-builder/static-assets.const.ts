import { CONFIG } from '../consts/config.const';

export const STATIC_ASSETS = [
  {
    id: 'brand/logo.svg',
    contentType: 'image/svg',
    name: 'logo.svg',
    type: 'asset',
    size: 14400,
    url: `${CONFIG.webUrl}/brand/logo.svg`
  },
  {
    id: 'brand/logo.svg',
    contentType: 'image/svg',
    name: 'logo-white.svg',
    type: 'asset',
    size: 14400,
    url: `${CONFIG.webUrl}/brand/logo-white.svg`
  },
  ...[
    'factory.jpg',
    'factory-1.jpg',
    'factory-2.jpg',
    'factory-3.jpg',
    'hardware.jpg',
    'hardware-1.jpg',
    'hardware-2.jpg',
    'hardware-3.jpg',
    'hardware-4.jpg',
    'hardware-4.jpg'
  ].map((name) => ({
    id: `images/${name}`,
    contentType: 'image/jpeg',
    name,
    type: 'asset',
    size: 14400,
    url: `${CONFIG.webUrl}/images/${name}`
  }))
];
