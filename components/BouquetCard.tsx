import Image from 'next/image'
import { Bouquet } from '@/app/page'

interface BouquetCardProps {
  bouquet: Bouquet
  onAddToCart: (bouquet: Bouquet) => void
}

export default function BouquetCard({ bouquet, onAddToCart }: BouquetCardProps) {
  return (
    <div className="bg-white rounded shadow-md flex flex-col w-full">
      <div className="bg-[#F7F2ED] relative w-full aspect-square overflow-hidden">
        <Image
          src={bouquet.image}
          alt={bouquet.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="px-4 pt-3">
        <h2 className="text-lg text-[#3F3F3F] font-medium m-0">{bouquet.name}</h2>
      </div>
      <div className="px-4 py-2 text-sm text-gray-600 flex-1 min-h-[72px]">
        {bouquet.description}
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <span className="text-base font-medium text-[#B76370]">
          ${bouquet.price.toFixed(2)}
        </span>
        <button
          onClick={() => onAddToCart(bouquet)}
          className="text-[#B76370] text-sm font-medium uppercase tracking-wide hover:underline transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
