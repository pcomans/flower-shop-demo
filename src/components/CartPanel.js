import React from 'react';

function CartPanel(props) {
  if (!props.open) {
    return null;
  }

  var total = props.items.reduce(function (sum, item) {
    return sum + item.bouquet.price * item.quantity;
  }, 0);

  return (
    <div className="cart-panel mdl-card mdl-shadow--8dp">
      <div className="cart-panel__header">
        <h3>Your Cart</h3>
        <button className="mdl-button mdl-js-button mdl-button--icon" onClick={props.onClose} title="Close cart">
          <i className="material-icons">close</i>
        </button>
      </div>

      {props.items.length === 0 ? (
        <p className="cart-panel__empty">Your cart is empty. Go pick some flowers!</p>
      ) : (
        <div>
          <ul className="cart-panel__list">
            {props.items.map(function (item) {
              return (
                <li key={item.bouquet.id} className="cart-panel__item">
                  <span className="cart-panel__item-name">
                    {item.bouquet.name}
                    {item.quantity > 1 ? ' × ' + item.quantity : ''}
                  </span>
                  <span className="cart-panel__item-price">
                    ${(item.bouquet.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="mdl-button mdl-js-button mdl-button--icon cart-panel__remove"
                    onClick={function () { props.onRemove(item.bouquet.id); }}
                    title="Remove from cart"
                  >
                    <i className="material-icons">delete</i>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="cart-panel__total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect cart-panel__checkout"
            onClick={props.onCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

CartPanel.propTypes = {
  open: React.PropTypes.bool.isRequired,
  items: React.PropTypes.array.isRequired,
  onClose: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onCheckout: React.PropTypes.func.isRequired
};

export default CartPanel;
