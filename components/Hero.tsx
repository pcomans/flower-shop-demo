'use client'

import { useState, useEffect } from 'react'

const PROMOS = [
  'Free same-day delivery on orders over $50!',
  'Wedding season is here — book a free consultation!',
  'Join our loyalty club and get 10% off your first bouquet!',
]

export default function Hero() {
  const [promoIndex, setPromoIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % PROMOS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      id="top"
      className="mt-14 bg-[#D9CBE3] bg-[url('/img/hero.jpg')] bg-cover bg-center text-center"
    >
      <div className="py-[72px] px-4 pb-16">
        <div
          className="inline-block bg-white/90 px-16 py-10 max-w-[640px]"
          style={{ paddingBottom: '3rem' }}
        >
          <h1
            className="text-[56px] font-normal text-[#B76370] m-0 mb-2"
            style={{ fontFamily: 'var(--font-pacifico), cursive' }}
          >
            Bloom &amp; Petal
          </h1>
          <p className="text-[#3F3F3F] text-base font-light uppercase tracking-[2px] mb-8">
            Fresh flowers, hand-tied daily in San Anselmo
          </p>
          <a
            href="#shop"
            className="inline-block px-8 h-11 leading-[42px] text-sm tracking-[2px] text-[#3F3F3F] bg-transparent border border-[#3F3F3F] hover:bg-[#3F3F3F] hover:text-white transition-colors"
          >
            Shop Bouquets
          </a>
        </div>
        <br />
        <p className="inline-block mt-8 bg-white/55 rounded-sm text-[#5b5265] text-sm px-5 py-2">
          {PROMOS[promoIndex]}
        </p>
      </div>
    </div>
  )
}
