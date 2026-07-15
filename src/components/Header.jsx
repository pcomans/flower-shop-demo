import { IconButton, MaterialSymbol, OnIconBadge } from 'react-material-expressive';

export default function Header({ cartCount, onCartClick, cartIconRef }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo brand-logo" href="#top">Bloom &amp; Petal</a>
        <nav className="site-nav">
          <a href="#shop">Shop</a>
          <a href="#shop">Weddings</a>
          <a href="#shop">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="site-header__cart" ref={cartIconRef}>
          <IconButton
            aria-label="Open shopping cart"
            variant="standard"
            icon={<MaterialSymbol name="shopping_cart" />}
            onClick={onCartClick}
          />
          {cartCount > 0 && <OnIconBadge count={cartCount} />}
        </span>
      </div>
    </header>
  );
}
