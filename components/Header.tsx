import { ShoppingCart } from 'lucide-react'

interface HeaderProps {
  cartCount: number
  onCartClick: () => void
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-md text-[#3F3F3F]">
      <div className="max-w-[1100px] mx-auto px-4 h-14 flex items-center">
        <a
          href="#top"
          className="text-2xl text-[#B76370] no-underline mr-auto"
          style={{ fontFamily: 'var(--font-pacifico), cursive' }}
        >
          Bloom &amp; Petal
        </a>

        <nav className="hidden md:flex items-center">
          {[
            { label: 'Shop', href: '#shop' },
            { label: 'Weddings', href: '#shop' },
            { label: 'About Us', href: '#shop' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#4a4a4a] no-underline uppercase text-[13px] tracking-[1.5px] mx-3 hover:text-[#B76370] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onCartClick}
          title="Shopping cart"
          className="relative ml-4 p-2 text-[#4a4a4a] hover:text-[#B76370] transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-[#B76370] text-white text-[10px] font-medium flex items-center justify-center px-1">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
