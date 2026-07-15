import React from 'react';

function Header(props) {
  var cartBadgeProps = {};
  if (props.cartCount > 0) {
    cartBadgeProps['data-badge'] = String(props.cartCount);
  }
  return (
    <header className="site-header mdl-shadow--4dp">
      <div className="site-header__inner">
        <a className="site-header__logo" href="#top">Bloom &amp; Petal</a>
        <nav className="site-header__nav">
          <a href="#shop">Shop</a>
          <a href="#shop">Weddings</a>
          <a href="#shop">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="mdl-button mdl-js-button mdl-button--icon site-header__cart"
          onClick={props.onCartClick}
          title="Shopping cart"
        >
          <i className={'material-icons' + (props.cartCount > 0 ? ' mdl-badge mdl-badge--overlap' : '')} {...cartBadgeProps}>shopping_cart</i>
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  cartCount: React.PropTypes.number.isRequired,
  onCartClick: React.PropTypes.func.isRequired
};

export default Header;
