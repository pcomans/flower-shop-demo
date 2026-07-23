import { X, Trash2 } from 'lucide-react'
import { CartItem } from '@/app/page'

interface CartPanelProps {
  open: boolean
  items: CartItem[]
  onClose: () => void
  onRemove: (id: number) => void
  onCheckout: () => void
}

export default function CartPanel({ open, items, onClose, onRemove, onCheckout }: CartPanelProps) {
  if (!open) return null

  const total = items.reduce((sum, item) => sum + item.bouquet.price * item.quantity, 0)

  return (
    <div className="fixed top-[72px] right-4 w-80 z-[200] bg-white rounded shadow-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="m-0 text-xl font-normal text-[#3F3F3F]">Your Cart</h3>
        <button
          onClick={onClose}
          title="Close cart"
          className="p-1 text-gray-500 hover:text-[#B76370] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-[#757575] text-center py-4">Your cart is empty. Go pick some flowers!</p>
      ) : (
        <div>
          <ul className="list-none m-0 p-0 mb-2">
            {items.map((item) => (
              <li
                key={item.bouquet.id}
                className="flex items-center py-1 border-b border-gray-100 text-sm"
              >
                <span className="flex-1 text-[#3F3F3F]">
                  {item.bouquet.name}
                  {item.quantity > 1 ? ` × ${item.quantity}` : ''}
                </span>
                <span className="mx-1 text-[#757575]">
                  ${(item.bouquet.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => onRemove(item.bouquet.id)}
                  title="Remove from cart"
                  className="p-0.5 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-medium py-2 text-[#3F3F3F]">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full mt-2 py-2 bg-[#B76370] text-white font-medium rounded hover:bg-[#a35566] transition-colors"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}
