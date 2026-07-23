import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// Order matters: Tailwind (layered, no preflight) first, then the library base
// styles, then brand token overrides, then our app layout. The library ->
// theme -> App sequence is load-bearing so the brand tokens win at runtime.
import './globals.css';
import 'react-material-expressive/styles.css';
import '../theme.css';
import '../App.css';

export const metadata: Metadata = {
  title: 'Bloom & Petal | Fresh Flowers & Bouquets — San Anselmo, CA',
  description:
    'Bloom & Petal — fresh flowers and hand-tied bouquets in San Anselmo, CA. Free local delivery on orders over $50!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Plain/brand typeface for the MD3 type scale */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300..700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols Rounded — required by <MaterialSymbol /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
