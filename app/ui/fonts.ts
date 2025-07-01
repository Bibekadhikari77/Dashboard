import { Inter, Lusitana } from 'next/font/google';

// Load the Inter font
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Optional: specify weights
  display: 'swap',
});

// Load the Lusitana font
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
