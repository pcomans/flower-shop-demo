'use client'

import { useState } from 'react'
import { Flower, Truck, Heart } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BouquetCard from '@/components/BouquetCard'
import CartPanel from '@/components/CartPanel'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'

export interface Bouquet {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export interface CartItem {
  bouquet: Bouquet
  quantity: number
}

const BOUQUETS: Bouquet[] = [
  { id: 1, name: 'Blush Hour', price: 54.99, description: 'Blush garden roses, pale ranunculus and ivory sweet peas with silvery eucalyptus.', image: '/img/bouquets/blush-hour.jpg' },
  { id: 2, name: 'Citrus Sunrise', price: 39.99, description: 'Orange ranunculus, yellow tulips, white chamomile and golden solidago.', image: '/img/bouquets/citrus-sunrise.jpg' },
  { id: 3, name: 'Moonlit Meadow', price: 49.99, description: 'Blue delphinium, white lisianthus, lavender scabiosa and dusty miller.', image: '/img/bouquets/moonlit-meadow.jpg' },
  { id: 4, name: 'Wild at Heart', price: 44.99, description: 'Cosmos, cornflowers, snapdragons, feverfew and wild grasses — a field in a vase.', image: '/img/bouquets/wild-at-heart.jpg' },
  { id: 5, name: 'Velvet Nocturne', price: 64.99, description: 'Wine dahlias, plum calla lilies, dark red roses and burgundy smoke bush.', image: '/img/bouquets/velvet-nocturne.jpg' },
  { id: 6, name: 'Cloud Nine', price: 59.99, description: "White hydrangeas, ivory roses, lisianthus and baby's breath. A classic.", image: '/img/bouquets/cloud-nine.jpg' },
  { id: 7, name: 'Peach Picnic', price: 42.99, description: 'Peach garden roses, apricot stock, coral carnations and fresh mint.', image: '/img/bouquets/peach-picnic.jpg' },
  { id: 8, name: 'Coastal Calm', price: 52.99, description: 'Powder-blue hydrangeas, white roses, globe thistle and eucalyptus.', image: '/img/bouquets/coastal-calm.jpg' },
  { id: 9, name: 'Cherry Fizz', price: 38.99, description: 'Cherry-red tulips, hot-pink spray roses, coral gerberas and waxflower.', image: '/img/bouquets/cherry-fizz.jpg' },
  { id: 10, name: 'Greenhouse Modern', price: 69.99, description: 'Coral anthuriums, phalaenopsis orchids and sculptural monstera leaves.', image: '/img/bouquets/greenhouse-modern.jpg' },
  { id: 11, name: 'Lavender Letter', price: 36.99, description: 'Lavender, lilac, purple stock, violet statice and fragrant rosemary.', image: '/img/bouquets/lavender-letter.jpg' },
  { id: 12, name: 'Golden Hour', price: 46.99, description: 'Sunflowers, mustard chrysanthemums, burnt-orange roses, wheat and olive.', image: '/img/bouquets/golden-hour.jpg' },
  { id: 13, name: 'Tiny Joys', price: 29.99, description: 'Petite spray roses, lavender asters, craspedia and pastel mini carnations.', image: '/img/bouquets/tiny-joys.jpg' },
  { id: 14, name: 'Forever Field', price: 49.99, description: 'Dried pampas, strawflowers, bunny-tail grass and preserved eucalyptus.', image: '/img/bouquets/forever-field.jpg' },
  { id: 15, name: 'After the Rain', price: 47.99, description: 'Deep-blue iris, delphinium, white tulips, ferns and eucalyptus.', image: '/img/bouquets/after-the-rain.jpg' },
]

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const handleAddToCart = (bouquet: Bouquet) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.bouquet.id === bouquet.id)
      if (existing) {
        return prev.map((item) =>
          item.bouquet.id === bouquet.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { bouquet, quantity: 1 }]
    })
    setToast(`Added "${bouquet.name}" to your cart`)
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.bouquet.id !== id))
  }

  const handleToggleCart = () => {
    setCartOpen((prev) => !prev)
  }

  const handleCheckout = () => {
    setToast('Online checkout is coming soon! Call us at (415) 555-0142 to order.')
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <Header cartCount={cartCount} onCartClick={handleToggleCart} />
      <Hero />

      {/* Features Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Flower className="w-12 h-12 text-[#B76370] mb-3" />
            <h4 className="text-sm font-medium uppercase tracking-widest text-[#3F3F3F] mb-1">Fresh Daily</h4>
            <p className="text-sm text-gray-500">Flowers arrive from local Marin growers every single morning.</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="w-12 h-12 text-[#B76370] mb-3" />
            <h4 className="text-sm font-medium uppercase tracking-widest text-[#3F3F3F] mb-1">Free Delivery</h4>
            <p className="text-sm text-gray-500">Free same-day delivery in San Anselmo on orders over $50.</p>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="w-12 h-12 text-[#B76370] mb-3" />
            <h4 className="text-sm font-medium uppercase tracking-widest text-[#3F3F3F] mb-1">Hand-Tied With Love</h4>
            <p className="text-sm text-gray-500">Every bouquet is arranged by hand in our little shop on San Anselmo Ave.</p>
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section className="bg-[#FBF8F5]" id="shop">
        <h2 className="text-center font-light text-3xl tracking-[3px] uppercase mt-12 pt-6 mb-1 text-[#8873A9]">
          Our Bouquets
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Hand-tied fresh every morning — order by 2pm for same-day delivery
        </p>
        <div className="max-w-[1180px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
          {BOUQUETS.map((bouquet) => (
            <BouquetCard key={bouquet.id} bouquet={bouquet} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white border-t border-gray-200 mt-8 pb-8">
        <h2 className="text-center font-light text-3xl tracking-[3px] uppercase mt-12 pt-6 mb-6 text-[#8873A9]">
          What Our Customers Say
        </h2>
        <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="italic text-[#5c5c5c]">
              &ldquo;The Coral Charm bouquet made my wife cry happy tears. Best florist in Marin!&rdquo;
            </p>
            <span className="text-[#8873A9] text-sm font-medium">— Daniel R., San Anselmo</span>
          </div>
          <div className="text-center">
            <p className="italic text-[#5c5c5c]">
              &ldquo;Ordered at noon, flowers on my mom&apos;s doorstep by 4. Absolutely beautiful.&rdquo;
            </p>
            <span className="text-[#8873A9] text-sm font-medium">— Priya S., Fairfax</span>
          </div>
          <div className="text-center">
            <p className="italic text-[#5c5c5c]">
              &ldquo;Bloom &amp; Petal did the flowers for our wedding. Everyone still talks about them.&rdquo;
            </p>
            <span className="text-[#8873A9] text-sm font-medium">— Megan &amp; Chris T.</span>
          </div>
        </div>
      </section>

      <Footer />

      <CartPanel
        open={cartOpen}
        items={cartItems}
        onClose={handleToggleCart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <Toast message={toast} onDismiss={() => setToast(null)} />
    </div>
  )
}
