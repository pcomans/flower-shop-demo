import type { Metadata } from 'next'
import { Roboto, Pacifico } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bloom & Petal | Fresh Flowers & Bouquets — San Anselmo, CA',
  description:
    'Bloom & Petal — fresh flowers and hand-tied bouquets in San Anselmo, CA. Free local delivery on orders over $50!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  )
}
